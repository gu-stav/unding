export default {
    name: {
        singular: 'page',
        plural: 'pages',
        display: 'Pages'
    },

    attributes: {
        title: {
            type: 'text'
        },

        body: {
            type: 'richtext'
        }
    },

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
