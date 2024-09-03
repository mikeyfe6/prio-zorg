import * as React from 'react';

import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h2>Over ons</h2>
			<p>
				Ik ben Clyde en ik werk al lange tijd in de hulpverlening, waar ik met
				diverse doelgroepen heb gewerkt, zowel op groepsniveau als ambulant, met
				een sterke focus op het laatste. Mijn gedrevenheid en vermogen om de
				taal van de cliënt te verstaan, maken dat ik effectief kan communiceren
				en verbinden.
			</p>
			<p>
				Daarnaast ben ik cultuursensitief en empathisch, wat mij helpt om de
				context en gevoelens van mijn cliënten beter te begrijpen. Mijn
				analytische vaardigheden stellen mij in staat om snel te identificeren
				waar cliënten of processen vastlopen. De laatste jaren richt mijn
				begeleiding zich vooral op jongeren en hun ouders, waarbij ik hen
				ondersteun in hun groeiproces en help bij het overwinnen van obstakels.
				Hoe groot of hoe klein deze ook zijn.
			</p>
		</Layout>
	);
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title='Over Ons' />;
