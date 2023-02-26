const CONTENT_TYPES = [
    {
        id: 1,
        name: 'Articles'
    },

    {
        id: 2,
        name: 'Pages'
    }
];

export function load({ params }) {
    console.log('load content-types');

    return {
        contentTypes: CONTENT_TYPES.map(contentType => ({
            ...contentType,
            isOpen: params.content_type_id == contentType.id
        }))
    }
}
