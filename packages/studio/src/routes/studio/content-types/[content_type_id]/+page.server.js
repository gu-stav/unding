export async function load({ locals, params, parent }) {
    const { load: loadContentType, ...contentType } = locals.schema.find(contentType => contentType.name.plural === params.content_type_id);

    return {
        documents: await loadContentType(),
        contentType
    }
}

export const actions = {
    search: async() => {
        // TODO
    }
}
