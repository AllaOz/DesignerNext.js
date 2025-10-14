/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: ['./src'],
    },
    images: {
        domains: ['localhost'],
    },
}

module.exports = nextConfig
