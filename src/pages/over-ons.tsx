import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
	return <Layout>Over ons</Layout>;
};

export default AboutPage;

export const Head: HeadFC = () => <title>Over Ons</title>;
