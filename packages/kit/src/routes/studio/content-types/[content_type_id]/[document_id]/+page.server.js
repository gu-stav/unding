import { fail } from '@sveltejs/kit';
import { createAttributeLayout, serializeFormData, validateContentTypePayload } from '@unding/studio/studio/utils';

export async function load({ locals, params }) {
  const { load: loadContentType, ...contentType } = locals.schema.find(contentType => contentType.name.plural === params.content_type_id);
  const document = await loadContentType({ where: { uid: params.document_id }});

  return {
      contentType,
      document: document,
      layout: createAttributeLayout(contentType.attributes)
  }
}

export const actions = {
  edit: async ({ locals, params, request }) => {
    const { load: loadContentType, ...contentType } = locals.schema.find(contentType => contentType.name.plural === params.content_type_id);
      const input = serializeFormData(await request.formData());
      const errors = validateContentTypePayload(input, contentType);

      if(errors.length > 0) {
        return fail(400, { input, errors });
      }

      return { input };
  }
};
