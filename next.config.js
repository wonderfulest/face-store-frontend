/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["res.cloudinary.com", "garmin-face.s3.ap-southeast-2.amazonaws.com"],
    },
};

module.exports = nextConfig;
