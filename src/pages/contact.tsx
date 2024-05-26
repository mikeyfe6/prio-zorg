import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const ContactPage: React.FC<PageProps> = () => {
	return <Layout>
                <h2>Contact</h2>
                <br />
                <p>[Hier komt het formulier]</p>
            </Layout>;
};

export default ContactPage;

export const Head: HeadFC = () => <Seo title='Contact' />;
