import * as React from 'react';

import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

import Usp from '../components/usp';
import Actual from '../components/actual';

const IndexPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<Usp />
			{/* <h1>Main Content</h1>
			<h2>Main Content</h2>
			<h3>Main Content</h3>
			<h4>Main Content</h4>
			<h5>Main Content</h5>
			<h6>Main Content</h6>
			<br /> */}
			<p className='prio-intro'>
				<span className='prio-title'>Priozorg</span> is een dynamische
				hulpverleningsorganisatie die jongeren ondersteunt op weg naar
				zelfredzaamheid en betekenisvol leven. Wanneer jongvolwassenen vastlopen
				en de regie over hun leven kwijt zijn, staat Priozorg klaar met
				deskundige begeleiding, coaching, mentoring en (opvoed)ondersteuning.
				Met gepaste interventies zet Priozorg de jongeren weer in hun kracht en
				verliest hierbij het bijbehorend gezin niet uit het oog. Bij Priozorg
				geloven we dat met een integrale aanpak iedereen weer met vertrouwen en
				veerkracht de toekomst kan treden.
			</p>
			<Actual />
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
