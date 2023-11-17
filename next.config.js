/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'app')],
    },
    output: 'export',
}

module.exports = nextConfig
