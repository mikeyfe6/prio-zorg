import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	// path: `.env.${process.env.NODE_ENV}`,
	path: `.env`,
});

const siteMetadata = {
	title: `Prio Zorg`,
	slogan: ``,
	description: `Priozorg is een dynamische hulpverleningsorganisatie die jongeren ondersteunt op weg naar zelfredzaamheid en betekenisvol leven. Wanneer jongvolwassenen vastlopen en de regie over hun leven kwijt zijn, staat Priozorg klaar met deskundige begeleiding, coaching, mentoring en (opvoed)ondersteuning.`,

	siteUrl: `https://prio-zorg.nl`,
	image: `/images/logo/pz-logo.jpg`,

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
			resolve: 'gatsby-source-contentful',
			options: {
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				host: process.env.CONTENTFUL_HOST,
			},
		},
		'gatsby-plugin-image',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sass',
		'gatsby-plugin-sitemap',
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
	],
};

export default config;
