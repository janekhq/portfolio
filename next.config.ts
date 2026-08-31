import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/pl/about-janek',
                permanent: false,
            },
            {
                source: '/about-janek',
                destination: '/pl/about-janek',
                permanent: false,
            },
        ];
    },
};

export default nextConfig
