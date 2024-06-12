import * as React from 'react';

import { Link, HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const NotFoundPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			Sorry 😔, we couldn’t find what you were looking for.
			<br />
			{process.env.NODE_ENV === 'development' ? (
				<>
					<br />
					Try creating a page in <code>src/pages/</code>.
					<br />
				</>
			) : null}
			<br />
			<Link to='/'>Go home</Link>.
		</Layout>
	);
};

export default NotFoundPage;

export const Head: HeadFC = () => <Seo title='Oeps... Niet gevonden!' />;
