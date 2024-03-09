/** @type {import('next').NextConfig} */
const nextConfig = {
 
  images: {
      domains: ['lh3.googleusercontent.com'], // Add your domain(s) here
    },
    experimental: {
      missingSuspenseWithCSRBailout: false,
    },
};

export default nextConfig;


