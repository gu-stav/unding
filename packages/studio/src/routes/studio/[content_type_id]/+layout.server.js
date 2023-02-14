const DOCUMENTS = [
    {
        id: 1,
        title: 'My document',
        contentTypeId: 1,
    },

    {
        id: 2,
        title: 'My other document',
        contentTypeId: 2,
    },

    {
        id: 3,
        title: 'This works like a charm',
        contentTypeId: 2,
    },

    {
        id: 4,
        title: 'I think we can even move this to the client side',
        contentTypeId: 1,
    },

    {
        id: 5,
        title: 'Bohoo crew',
        contentTypeId: 2,
    },
];

export function load({ params}) {
    console.log('load documents');

    return {
        documents: DOCUMENTS.filter(document => document.contentTypeId == params.content_type_id)
    }
}
