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
