/** @type {import('next').NextConfig} */
const { withEffectoReactAliases } = require('effector-next/tools')
const withVanillaExtract = require('vanilla-extract-plugin-nextjs')

const enhance = withEffectoReactAliases()
module.exports = enhance(
	withVanillaExtract({
		reactStrictMode: false,
		images: {
			domains: ['images.pexels.com'],
		},
	})
)
