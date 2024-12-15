/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: false,
        domains: ["res.cloudinary.com", "garmin-face.s3.ap-southeast-2.amazonaws.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "garmin-face.s3.ap-southeast-2.amazonaws.com",
            },
            {
                protocol: 'https',
                hostname: '**.vercel.app',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '**',
            },
        ],
    },
};

module.exports = nextConfig;
