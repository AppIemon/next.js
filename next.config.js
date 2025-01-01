/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    // 정적 파일 제공 설정
    webpack: (config) => {
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        return config;
    },
    // 이미지 및 파일 도메인 설정
    images: {
        domains: ['localhost'],
    },

    output: 'standalone'
}
  
module.exports = {};