import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	// path: `.env.${process.env.NODE_ENV}`,
	path: `.env`,
});

const siteMetadata = {
	title: `Prio Zorg`,
	slogan: `Waar goede zorg voorrang heeft`,
	description: `Prio Zorg is een dynamische hulpverleningsorganisatie die jongeren ondersteunt op weg naar zelfredzaamheid en betekenisvol leven. Wanneer jongvolwassenen vastlopen en de regie over hun leven kwijt zijn, staat Prio Zorg klaar met deskundige begeleiding, coaching, mentoring en (opvoed)ondersteuning.`,

	siteUrl: `https://prio-zorg.nl`,
	image: `/pz-logo.jpg`,

	twitterUsername: ``,
	facebookUrl: ``,
	instagramUrl: ``,
	linkedinUrl: `https://www.linkedin.com/in/prio-zorg-a4b783285/`,
	youtubeUrl: ``,

	phone: ``,
	phoneRaw: ``,
	mobile: ``,
	mobileRaw: ``,

	email: `info@prio-zorg.nl`,
	address: `Sleewijkstraat 54`,
	postalCode: `1104 TW`,
	city: `Amsterdam`,

	companyName: `Prio Zorg`,
	kvk: `84381000`,
	btw: `NL003955140B97`,
	bank: `NL47 KNAB 0418 057 419`,

	bgWebColor: `#181a37`,
	bgThemeColor: `#f6ce0e`,
};

const config: GatsbyConfig = {
	siteMetadata: siteMetadata,
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'GTM-5VSHWND5',

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: false,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: { platform: 'gatsby' },

				// Specify optional GTM environment details.
				// gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
				// gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
				// dataLayerName: 'YOUR_DATA_LAYER_NAME',

				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to gatsby-route-change
				// routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
				// Defaults to false
				enableWebVitalsTracking: true,
				// Defaults to https://www.googletagmanager.com
				// selfHostedOrigin: 'YOUR_SELF_HOSTED_ORIGIN',
				// Defaults to gtm.js
				// selfHostedPath: 'YOUR_SELF_HOSTED_PATH',
			},
		},
		{
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: 'https://prio-zorg.nl',
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-robots-txt',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				icon: 'src/images/logo/pz-logo.jpg',
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		'gatsby-plugin-offline',
	],
};

export default config;
