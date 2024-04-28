import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import Layout from '../components/layout';

const ContactPage: React.FC<PageProps> = () => {
	return <Layout>Contact</Layout>;
};

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>;
