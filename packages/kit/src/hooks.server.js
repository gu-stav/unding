import { SvelteKitAuth } from "@auth/sveltekit"
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/private'

async function authorize({ event, resolve }) {
  const { locals } = event;

  if (event.url.pathname.startsWith(`/${locals.prefix}`)) {
      const session = await locals.getSession();

      if (!session) {
          throw redirect(303, `/auth/signin`);
      }
  }

  return await resolve(event);
}

const loadConfig = async ({ event, resolve }) => {
  const { config, schema } = await import('virtual:unding-config');

  const studioConfig = config({
    env
  });

  event.locals = {
    prefix: studioConfig?.prefix ?? 'unding',
    auth: studioConfig.auth,
    schema
  };

  return await resolve(event);
};

const setupAuthProviders = async (...args) => {
  const { event } = args[0];

  return SvelteKitAuth({
    trustHost: true,
    providers: event.locals.auth.providers,
  })(...args);
}

export const handle = sequence(loadConfig, setupAuthProviders, authorize);
