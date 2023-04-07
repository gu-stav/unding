import GitHub from '@auth/core/providers/github';

// content schemas
import article from './content-schemas/article';
import pages from './content-schemas/pages';

// component overwrites
import NewHeader from './NewHeader.svelte';

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

export const components = {
    Header: NewHeader
};

export const schema = [
    article,
    pages
];
