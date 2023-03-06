import { createAttributeLayout } from '$lib/studio/utils';

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
  edit: async ({ request }) => {
    const data = await request.formData();

    return { success: true };
  }
};
