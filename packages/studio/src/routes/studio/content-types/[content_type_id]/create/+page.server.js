export async function load({ locals, params }) {
  const { load: loadContentType, ...contentType } = locals.schema.find(contentType => contentType.name.plural === params.content_type_id);

  return {
      contentType
  }
}

export const actions = {
    create: async ({ cookies, request }) => {
      const data = await request.formData();

      return { success: true };
    }
};
