/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/diaspora-conference",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
