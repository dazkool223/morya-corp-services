/** @type {import('next').NextConfig} */
import bundleAnalyzer from "@next/bundle-analyzer";
const nextConfig = {
  basePath: "/morya-corp-services",
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer(nextConfig);
