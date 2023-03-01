const DOCUMENTS = [
    {
        uid: 1,
        title: 'My document',
        contentTypeId: 1,
    },

    {
        uid: 2,
        field_1: 'My other document',
        contentTypeId: 2,
    },

    {
        uid: 3,
        field_1: 'This works like a charm',
        contentTypeId: 2,
    },

    {
        uid: 4,
        title: 'I think we can even move this to the client side',
        contentTypeId: 1,
    },

    {
        uid: 5,
        field_1: 'Bohoo crew',
        contentTypeId: 2,
    },
];

export async function load({ params, parent }) {
    console.log('load documents');

    const { schema } = await parent();

    return {
        documents: DOCUMENTS.filter(document => document.contentTypeId == params.content_type_id),
        currentSchema: Object.values(schema).find(contentType => {
            return contentType.uid == parseInt(params.content_type_id, 10);
        })
    }
}
