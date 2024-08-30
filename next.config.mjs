/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: 'localhost',
            }
        ],
        domains: ["localhost:1337"]
    },
    env: {
        NEXT_PULBIC_PUBLISHABLE_KEY: process.env.NEXT_PULBIC_PUBLISHABLE_KEY,
        NEXT_PULBIC_API_TOKEN: process.env.NEXT_PULBIC_API_TOKEN,
        NEXT_PULBIC_SEND_MAIL: process.env.NEXT_PULBIC_SEND_MAIL,
        Secret_key: process.env.Secret_key,
    },
};

export default nextConfig;
