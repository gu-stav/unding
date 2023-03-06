export default {
    name: {
        singular: 'page',
        plural: 'pages',
        display: 'Pages'
    },

    attributes: [
        {
            name: 'title',
            type: 'text'
        },

        {
            name: 'body',
            type: 'richtext'
        }
    ],

    async load() {
        return [
            {
                uid: 1,
                title: 'My page',
            },

            {
                uid: 2,
                title: 'My other page',
            },
        ]
    }
};
