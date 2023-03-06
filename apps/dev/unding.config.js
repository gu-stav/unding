import GitHub from '@auth/core/providers/github';

// content schemas
import article from './content-schemas/article';
import pages from './content-schemas/pages';

// component overwrites
import NewHeader from './NewHeader.svelte';

export const auth = () => ({
    providers: [
        GitHub({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ]
});

export const components = {
    Header: NewHeader
};

export const schema = [
    article,
    pages
];
