/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'app')],
    },
    output: 'export',
    images: {
        loader: "custom",
        unoptimized: true,
    },
    // webpack: (config, options) => {
    //     // config.optimization.minimize = false;
    //     return config
    // },
}

module.exports = nextConfig
