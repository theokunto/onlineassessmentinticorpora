module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/react', // Matched parameters can be used in the destination
                permanent: true,
            },
        ]
    },
}