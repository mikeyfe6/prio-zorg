import type { GatsbyConfig } from 'gatsby';

require('dotenv').config({
	// path: `.env.${process.env.NODE_ENV}`,
	path: `.env`,
});

const siteMetadata = {
	title: `Prio Zorg`,
	slogan: ``,
	description: `Eternity is een culturele instelling die zich bezighoudt met activiteiten, projecten en evenementen op het gebied van muzikale vorming en performance.`,

	siteUrl: `https://www.yourdomain.tld`,
	image: `/images/logo/pz-logo.jpg`,

	twitterUsername: `@eternitydrum`,
	facebookUrl: `https://www.facebook.com/EternityDrum/`,
	instagramUrl: `https://www.instagram.com/percussionband_eternity/`,
	linkedinUrl: `#!`,
	youtubeUrl: `https://www.youtube.com/@eternitydrum`,

	telephoneBpt: `+31 (0)20 311 39 33`,
	telephoneSeda: `+31 (0)20 773 38 88`,
	phoneRawBpt: `31203113933`,
	phoneRawSeda: `3120773388`,
	mobile: `31624255391`,

	email: `info@eternitydrum.com`,
	address: `Anton de Komplein 240`,
	postalCode: `1102 DR`,
	city: `Amsterdam-Zuidoost`,

	companyName: `Stichting Eternity Percussion`,
	kvk: `34284743`,
	btw: `NL818556286B01`,
	bank: `NL53 ABNA 0591 433 923`,

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
