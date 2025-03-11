import React from "react";

import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { useSiteMetadata } from "../hooks/use-site-metadata";

import * as footerStyles from "../styles/modules/footer.module.scss";

const Footer: React.FC = () => {
    const data = useStaticQuery(graphql`
        query {
            pzLogo: file(relativePath: { eq: "logo/pz-logo.jpg" }) {
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
    `);

    const pzLogo = getImage(data.pzLogo.childImageSharp.gatsbyImageData);

    const {
        companyName,
        address,
        postalCode,
        city,
        phone,
        phoneRaw,
        email,
        kvk,
        btw,
        bank,
    } = useSiteMetadata();

    const currentYear = new Date().getFullYear();

    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.footerTopBar}>
                <div className={footerStyles.footerTopWrapper}>
                    <div className={footerStyles.list}>
                        <h6>{companyName}</h6>
                        <ul>
                            <li>{address}</li>
                            <li>
                                {postalCode} {city}
                            </li>
                            {/* <li>
								<a href={`tel:${phoneRaw}`}>
									<i className='fa-solid fa-phone fa-lg' />
									<span>{phone}</span>
								</a>
							</li> */}
                            <li>
                                <a href={`mailto:${email}`}>
                                    <i className="fa-solid fa-envelope fa-lg" />
                                    <span>{email}</span>
                                </a>
                            </li>
                            <li>KVK: {kvk}</li>
                            <li>BTW: {btw}</li>
                            <li>IBAN: {bank}</li>
                        </ul>
                    </div>

                    <div className={footerStyles.general}>
                        <h6>Algemeen</h6>
                        <ul>
                            <li>
                                <Link to="/over-ons/">Over Prio Zorg</Link>
                            </li>
                            <li>
                                <Link to="/contact/">Contact</Link>
                            </li>
                            <li></li>
                        </ul>
                    </div>

                    <div className={footerStyles.socials} id="footer-socials">
                        <h6>Volg Ons</h6>
                        <ul>
                            {/* <li>
								<a href='#!'>
									<i className='fa-brands fa-facebook' />
								</a>
							</li> */}
                            {/* <li>
								<a href='#!'>
									<i className='fa-brands fa-instagram' />{' '}
								</a>
							</li> */}
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/prio-zorg-a4b783285/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin" />{" "}
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={footerStyles.logo} id="footer-logo">
                        {pzLogo && (
                            <Link to="/">
                                <GatsbyImage image={pzLogo} alt="PZ Logo" />
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <div className={footerStyles.footerBottomBar} id="footer-bottombar">
                <div className={footerStyles.footerBottomWrapper}>
                    <div>
                        <b>©</b> {currentYear} · {companyName}
                    </div>
                    <div>
                        Webcrafted by{" "}
                        <a
                            href="https://menefex.nl/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Menefex
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
