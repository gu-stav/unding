export const load = async (event) => {
  return {
    prefix: event.locals.prefix,
    session: await event.locals.getSession()
  };
};
