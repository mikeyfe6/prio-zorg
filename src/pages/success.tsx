import * as React from 'react';

import { Link, HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const SuccessPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h3>Bedankt voor je bericht!</h3>
			<br />
			<Link to='/'>Ga terug naar de homepage</Link>.
		</Layout>
	);
};

export default SuccessPage;

export const Head: HeadFC = () => <Seo title='Bedankt !' />;

// TODO: succespage werkt nog niet voor formulierinzending!
