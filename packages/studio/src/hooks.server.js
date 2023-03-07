import { SvelteKitAuth } from "@auth/sveltekit"
import { sequence } from '@sveltejs/kit/hooks';
import { redirect } from '@sveltejs/kit';
import { auth, schema } from 'virtual:unding-config';

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
  event.locals.auth = auth();

  const { validate, getContentTypes } = schema();

  // TODO: this needs to happen in the CLI
  try {
    validate();
  } catch(error) {
    console.log('Schema validation error');
    console.log(error.error.issues);
  }

  // TODO: pass down user for access control
  event.locals.schema = getContentTypes();

  return await resolve(event);
};

const setupAuthProviders = async (...args) => {
  const { event } = args[0];

  return SvelteKitAuth({
    trustHost: true,
    providers: event.locals.auth.providers,
  })(...args);
}

export const handle = sequence(loadConfig, setupAuthProviders, authorization)
