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
				Priozorg is ontstaan uit een dringende behoefte om jongvolwassenen te
				helpen die vastlopen en de regie over hun leven kwijt zijn. De oprichter
				van Priozorg zag hoe veel jongeren worstelden met complexe uitdagingen
				en besloot een organisatie op te richten die hen kon ondersteunen in hun
				zoektocht naar stabiliteit en zelfredzaamheid.
			</p>
			<p>
				Met een duidelijk doel voor ogen, begon Priozorg een breed scala aan
				diensten aan te bieden, waaronder begeleiding, coaching, mentoring,
				(opvoed)ondersteuning en bemiddeling. Deze diensten richten zich niet
				alleen op jongvolwassenen, maar ook op hun gezinnen, waarbij de nadruk
				ligt op een holistische benadering van zorg en ondersteuning.
			</p>
			<p>
				Vanaf het begin heeft Priozorg kwaliteit als kernwaarde omarmd. De
				organisatie streeft ernaar om door middel van een professionele en op
				maat gemaakte aanpak de best mogelijke ondersteuning te bieden. Dit
				blijkt uit de inzet van een toegewijd team van experts, die allemaal
				dezelfde passie delen: jongvolwassenen helpen om weer op weg te komen en
				een betekenisvol leven op te bouwen.
			</p>

			<p>
				Priozorg streeft ernaar die aanvulling in de hulpverleningssector te
				zijn, waar bij kwaliteit en persoonlijke aandacht altijd voorop staat.
			</p>
		</Layout>
	);
};

export default AboutPage;

export const Head: HeadFC = () => <Seo title='Over Ons' />;
