/** @type {import('next').NextConfig} */
const { withEffectoReactAliases } = require('effector-next/tools')
const path = require('path')

const enhance = withEffectoReactAliases()
module.exports = enhance({
	reactStrictMode: true,
	sassOptions: {
		prependData: `@import "@/styles/variables.scss";`,
	},
})
