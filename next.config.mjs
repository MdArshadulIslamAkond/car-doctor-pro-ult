/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
        after: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            port: "",
            pathname: "/**",
          },
        ],
      },
};

export default nextConfig;
