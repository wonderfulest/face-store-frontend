/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                // destination: 'http://localhost:8088/api/:path*',
                destination: 'https://api.wristo.io/api/:path*',
            },
        ];
    },
    images: {
        unoptimized: true,
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
