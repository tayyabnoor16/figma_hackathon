import path from 'path';

// Get the directory name equivalent in ES Modules
const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, 'src'), // Resolves the '@' alias to the 'src' folder
    };
    return config;
  },
  reactStrictMode: true, // Enabling React Strict Mode for development
};

export default nextConfig;


