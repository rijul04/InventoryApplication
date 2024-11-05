// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Optional: Add options for @svgr/webpack if needed
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
