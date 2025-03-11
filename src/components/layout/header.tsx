import React, { useState } from "react";

import { graphql, useStaticQuery, Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Hamburger from "./hamburger";

import * as headerStyles from "../../styles/modules/header.module.scss";

const Header: React.FC = () => {
    const data = useStaticQuery(graphql`
        query {
            pzLogo: file(relativePath: { eq: "logo/pz-logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const pzLogo = getImage(data.pzLogo.childImageSharp.gatsbyImageData);

    return (
        <header className={headerStyles.header}>
            <div className={headerStyles.headerContainer}>
                <div className={headerStyles.logo}>
                    <Link to="/">
                        {pzLogo && <GatsbyImage image={pzLogo} alt="PZ Logo" />}
                    </Link>
                </div>

                <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />

                <div className={headerStyles.menu}>
                    <ul>
                        <li>
                            <Link to="/" activeClassName={headerStyles.active}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/over-ons"
                                activeClassName={headerStyles.active}
                            >
                                Over Ons
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                activeClassName={headerStyles.active}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                <div
                    className={`${headerStyles.mobile} ${
                        isOpen ? headerStyles.open : ""
                    }`}
                >
                    <ul>
                        <li>
                            <Link to="/" activeClassName={headerStyles.active}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/over-ons"
                                activeClassName={headerStyles.active}
                            >
                                Over Ons
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                activeClassName={headerStyles.active}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;
