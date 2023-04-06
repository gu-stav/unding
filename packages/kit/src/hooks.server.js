import { SvelteKitAuth } from "@auth/sveltekit"
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';

async function authorization({ event, resolve }) {
  const { locals } = event;

  if (event.url.pathname.startsWith(`/${locals.prefix}/studio`)) {
      const session = await locals.getSession();

      if (!session) {
          throw redirect(303, `/${locals.prefix}/auth/signin`);
      }
  }

  return await resolve(event);
}

const loadConfig = async ({ event, resolve }) => {
  const { config, schema } = await import('virtual:unding-config');
  const studioConfig = config();

  event.locals.prefix = studioConfig.prefix;
  event.locals.auth = studioConfig.auth;

  // TODO: pass down user for access control
  event.locals.schema = schema;

  return await resolve(event);
};

const setupAuthProviders = async (...args) => {
  const { event } = args[0];

  return SvelteKitAuth({
    prefix: `/${event.locals.prefix}`,
    trustHost: true,
    providers: event.locals.auth.providers,
  })(...args);
}

export const handle = sequence(loadConfig, setupAuthProviders, authorization);
