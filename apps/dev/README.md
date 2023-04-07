# @unding/studio development environment

## Setup

1. Create an `.env` file with all variables needed to create an auth provider

2. Setup a configuration `unding.config.js`

```js
export const config = ({ env }) => {
    return {
        prefix: 'unding',

        auth: {
            providers: [
                GitHub({
                    clientId: env.PRIVATE_GITHUB_ID,
                    clientSecret: env.PRIVATE_GITHUB_SECRET
                })
            ]
        }
    };
}

export const schema = [
    {
        name: {
            singular: 'article',
            plural: 'articles',
            display: 'Articles'
        },

        attributes: [
            {
                name: 'title',
                label: 'Title',
                description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                readOnly: false,
                required: true,
                type: 'text',
            }
        ],

        async load(filter) {
            // return data
        }
    }
];

3. Start development server

```
pnpm dev
```
