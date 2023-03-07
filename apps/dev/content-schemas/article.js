const FIXTURE = [
    {
        uid: 1,
        title: 'A document',
        readers: 10
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
        uid: 4,
        title: 'My document',
    },

    {
        uid: 5,
        title: 'Any other document',
    },

    {
        uid: 6,
        title: 'This works like a charm',
    },

    {
        uid: 7,
        title: 'My document',
    },

    {
        uid: 8,
        title: 'My other document',
    },

    {
        uid: 9,
        title: 'This works like a charm',
    },

    {
        uid: 10,
        title: 'My document',
    },

    {
        uid: 11,
        title: 'My other document',
    },

    {
        uid: 12,
        title: 'This works like a charm',
    },

    {
        uid: 13,
        title: 'Blogpost document',
    },

    {
        uid: 14,
        title: 'My other document',
    },

    {
        uid: 15,
        title: 'This works like a charm',
    },

    {
        uid: 16,
        title: 'My document',
    },

    {
        uid: 17,
        title: 'My other document',
    },

    {
        uid: 18,
        title: 'This works like a charm',
    },

    {
        uid: 19,
        title: 'My document',
    },

    {
        uid: 20,
        title: 'My other document',
    },

    {
        uid: 21,
        title: 'This works like a charm',
    },
];

export default {
    name: {
        singular: 'article',
        plural: 'articles',
        display: 'Articles'
    },

    attributes: [
        {
            name: 'title',
            // TODO:
            // how to do i18n?
            label: 'Title',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
            readOnly: false,
            required: true,
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
            width: 12
        },

        {
            name: 'readers',
            type: 'number',
            readOnly: true,
        },

        {
            name: 'bla',
            type: 'number',
            width: 12
        },

        {
            name: 'blubb',
            description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            type: 'number',
            width: 12
        },

        {
            name: 'test',
            required: true,
            type: 'number',
            width: 12
        },

        {
            name: 'body',
            type: 'richtext',
            width: 12
        }
    ],

    // TODO: Nest in actions: create, read, update, delete?
    // TODO: is this the integration point between an sdk and capi or should this be left as is?
    async load(filter) {
        if (filter?.where?.uid) {
            return FIXTURE.find(document => document.uid == filter.where.uid);
        }

        return FIXTURE;
    }
};
