export default {
    name: {
        singular: 'article',
        plural: 'articles',
        display: 'Articles'
    },

    attributes: {
        title: {
            // TODO:
            // how to do i18n?
            label: 'Title',
            description: '',
            readOnly: false,
            type: 'text',

            // TODO:
            //   - can the function be async?
            //   - devalue can not serialize functions
            // validate(field) {
            //     return Boolean();
            // },

            // TODO: the width has nothing to do with the schema, but
            // is more of a studio configuration.
            // https://getkirby.com/docs/reference/panel/fields/layout
            width: 6
        },

        readers: {
            type: 'number',
            readOnly: true,
        },

        body: {
            type: 'richtext'
        }
    },

    // TODO: Nest in actions: create, read, update, delete?
    // TODO: is this the integration point between an sdk and capi or should this be left as is?
    async load(filter) {
        return [
            {
                uid: 1,
                title: 'A document',
            },

            {
                uid: 2,
                title: 'My other document',
            },

            {
                uid: 3,
                title: 'This works like a charm',
            },

            {
                uid: 1,
                title: 'My document',
            },

            {
                uid: 2,
                title: 'Any other document',
            },

            {
                uid: 3,
                title: 'This works like a charm',
            },

            {
                uid: 1,
                title: 'My document',
            },

            {
                uid: 2,
                title: 'My other document',
            },

            {
                uid: 3,
                title: 'This works like a charm',
            },

            {
                uid: 1,
                title: 'My document',
            },

            {
                uid: 2,
                title: 'My other document',
            },

            {
                uid: 3,
                title: 'This works like a charm',
            },

            {
                uid: 1,
                title: 'Blogpost document',
            },

            {
                uid: 2,
                title: 'My other document',
            },

            {
                uid: 3,
                title: 'This works like a charm',
            },

            {
                uid: 1,
                title: 'My document',
            },

            {
                uid: 2,
                title: 'My other document',
            },

            {
                uid: 3,
                title: 'This works like a charm',
            },

            {
                uid: 1,
                title: 'My document',
            },

            {
                uid: 2,
                title: 'My other document',
            },

            {
                uid: 3,
                title: 'This works like a charm',
            },
        ]
    }
};
