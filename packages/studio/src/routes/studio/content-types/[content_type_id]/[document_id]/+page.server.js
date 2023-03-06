import { createAttributeLayout } from '$lib/studio/utils';

export async function load({ locals, params }) {
  const { load: loadContentType, ...contentType } = locals.schema.find(contentType => contentType.name.plural === params.content_type_id);

  return {
      contentType,
      layout: createAttributeLayout(contentType.attributes)
  }
}
