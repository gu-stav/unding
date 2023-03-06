export async function load({ locals, params, request }) {
    const { load: loadContentType, ...contentType } = locals.schema.find(contentType => contentType.name.plural === params.content_type_id);
    const url = new URL(request.url);
    const sort = url.searchParams.get('sort') ?? 'uid';

    const documents = await loadContentType();

    return {
        documents: documents.sort((a, b) => `${a[sort]}`.localeCompare(`${b[sort]}`)),
        contentType
    }
}
