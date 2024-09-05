import * as React from 'react';

import { Link } from 'gatsby';
import type { HeadFC, PageProps } from 'gatsby';

import { Seo } from '../components/seo';

import Layout from '../components/layout';

const AboutPage: React.FC<PageProps> = () => {
	return (
		<Layout>
			<h2>Over Prio Zorg</h2>
			<p>
				Ik ben Clyde en heb sinds 2003 de hulpverlening als vakgebied, waar ik
				met diverse doelgroepen en op verschillende niveau's heb gewerkt.
				Hierbij is we in de loop van tijd een sterke nadruk op ambulante
				persoonlijke begeleiding komen te liggen. Mijn gedrevenheid en vermogen
				om de taal van de cliënt te verstaan, maken dat ik effectief kan
				communiceren en verbinden.
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
