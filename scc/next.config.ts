import type { NextConfig } from "next";

// Security headers are enforced by public/staticwebapp.config.json (Azure Static Web Apps).
// next.config `headers()` has no effect with `output: 'export'` since there is no Next.js server at runtime.
const nextConfig: NextConfig = {
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

