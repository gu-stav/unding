import { createAttributeLayout, serializeFormData, validateContentTypePayload } from '$lib/studio/utils';

export async function load({ locals, params }) {
  const { load: loadContentType, ...contentType } = locals.schema.find(contentType => contentType.name.plural === params.content_type_id);

  return {
      contentType,
      layout: createAttributeLayout(contentType.attributes)
  }
}

export const actions = {
    create: async ({ locals, params, request }) => {
      const input = serializeFormData(await request.formData());
      const validation = validateContentTypePayload(input, locals.schema);

      console.log({ input, validation });

      return { input, validation };
    }
};
