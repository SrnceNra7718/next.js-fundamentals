import type { NextConfig } from 'next'

interface CustomNextConfig extends NextConfig {
  eslint?: {
    ignoreDuringBuilds: boolean
  }
}

const nextConfig: CustomNextConfig = {
  cacheComponents: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default nextConfig
