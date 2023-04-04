import { SvelteKitAuth } from "@auth/sveltekit"
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';

async function authorization({ event, resolve }) {
  if (event.url.pathname.startsWith('/studio')) {
      const session = await event.locals.getSession();

      if (!session) {
          throw redirect(303, '/auth/signin');
      }
  }

  return await resolve(event);
}

const loadConfig = async ({ event, resolve }) => {
  const { auth, schema } = await import('virtual:unding-config');

  event.locals.auth = auth();

  // TODO: pass down user for access control
  event.locals.schema = schema;

  return await resolve(event);
};

const setupAuthProviders = async (...args) => {
  const { event } = args[0];

  return SvelteKitAuth({
    trustHost: true,
    providers: event.locals.auth.providers,
  })(...args);
}

export const handle = sequence(loadConfig, setupAuthProviders, authorization);
