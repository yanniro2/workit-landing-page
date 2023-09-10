/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {}
=======
const nextConfig = {
  // Enable React Strict Mode for development
  reactStrictMode: true,

  // Enable SWC minification for production builds
  swcMinify: true,

  // Change the output directory for export
  output: "my-exported-files",

  // Add custom configuration options
  customOption: "custom-value",

  images: {
    loader: "custom",
    loaderFile: "./src/my-loader.ts", // Updated path to my-loader.ts
  },
};
>>>>>>> 96f3826 (first commit)

module.exports = {
  distDir: "out",
};
