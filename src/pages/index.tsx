import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h1>Main Content</h1>
			<h2>Main Content</h2>
			<h3>Main Content</h3>
			<h4>Main Content</h4>
			<h5>Main Content</h5>
			<h6>Main Content</h6>
			<br />
			<p>
				Cillum duis irure minim magna sit pariatur exercitation sunt id. Aliqua
				amet veniam consectetur ea dolore cillum duis. Aute veniam aute ea
				tempor labore aliqua excepteur quis laboris adipisicing. Esse nisi ea
				velit id elit qui consectetur veniam quis officia ex do.
			</p>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
