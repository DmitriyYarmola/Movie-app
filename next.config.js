/** @type {import('next').NextConfig} */
const { withEffectoReactAliases } = require('effector-next/tools')
const withVanillaExtract = require('vanilla-extract-plugin-nextjs')
const enhance = withEffectoReactAliases()
module.exports = enhance(
	withVanillaExtract({
		reactStrictMode: false,
		images: {
			domains: ['image.tmdb.org'],
		},
		webpack(config) {
			// console.log('config', config)
			// config.module.rules.push({
			// 	test: /\.svg$/,
			// 	loader: 'svg-sprite-loader',
			// })
			return config
		},
	})
)
