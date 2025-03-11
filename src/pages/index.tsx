import * as React from "react";

import type { HeadFC, PageProps } from "gatsby";

import { Seo } from "../components/seo";

import Layout from "../components/layout";

import Usp from "../components/ui/usp";
// import Actual from '../components/actual';

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <p className="prio-intro">
                <span className="prio-title">Prio Zorg</span> is een dynamische
                hulpverleningsorganisatie die jongeren ondersteunt op weg naar
                zelfredzaamheid en een betekenisvol leven. Wanneer
                jongvolwassenen vastlopen en de regie over hun leven kwijt zijn,
                staat Prio Zorg klaar met deskundige begeleiding, coaching,
                mentoring en (opvoed)ondersteuning.
                <br />
                <br />
                Met gepaste interventies zet Prio Zorg de jongeren weer in hun
                kracht en verliest hierbij het bijbehorend gezin niet uit het
                oog. Bij Prio Zorg geloven we dat met een integrale aanpak
                iedereen weer met vertrouwen en veerkracht de toekomst kan
                treden.
            </p>

            <Usp />
            {/* <Actual /> */}
        </Layout>
    );
};

export default IndexPage;

export const Head: HeadFC = () => <Seo />;
