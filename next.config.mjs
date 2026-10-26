const nextConfig = {
  reactStrictMode: true,
  // Keep hosted builds within the memory limits of smaller build containers.
  experimental: { cpus: 1 },
};
export default nextConfig;
