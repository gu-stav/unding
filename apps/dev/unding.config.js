import GitHub from "@auth/core/providers/github";

export const studio = () => ({
    auth: {
        providers: [
            GitHub({
                clientId: process.env.GITHUB_ID,
                clientSecret: process.env.GITHUB_SECRET
            })
        ]
    }
})

export const schema = () => ([
    {
        name: {
            singular: 'article',
            plural: 'articles',
            display: 'Articles'
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
    },

    {
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
    }
])
