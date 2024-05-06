import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
	return <Layout>Over ons</Layout>;
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title='Over Ons' />;
