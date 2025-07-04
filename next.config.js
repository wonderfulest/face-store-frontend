/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        unoptimized: true,
        domains: ["res.cloudinary.com", "garmin-face.s3.ap-southeast-2.amazonaws.com", "files.wristo.io", "files.garminface.com"],
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
            {
                protocol: 'https',
                hostname: 'files.wristo.io',
            },
            {
                protocol: 'https',
                hostname: 'files.garminface.com',
            },
        ],
    },
};

module.exports = nextConfig;
