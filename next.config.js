/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	images: {
		domains: ["img.youtube.com", "tmmcms.tinglabs.in"],
	},
};

module.exports = nextConfig;
