import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as footerStyles from '../styles/modules/footer.module.scss';

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

	return (
		<footer className={footerStyles.footer}>
			<div className={footerStyles.footerTopBar}>
				<div className={footerStyles.footerTopWrapper}>
					<div className={footerStyles.list}>
						<h6>Prio Zorg</h6>
						<ul>
							<li>Straat</li>
							<li>Plaats</li>
							<li>Kvk</li>
						</ul>
					</div>

					<div className={footerStyles.list}>
						<h6>Algemeen</h6>
						<ul>
							<li>Over Prio Zorg</li>
							<li>Vacatures</li>
							<li></li>
						</ul>
					</div>

					<div className={footerStyles.socials}>
						<h6>Volg Ons</h6>
						<ul>
							<li>
								<a href='#!'>
									<i className='fa-brands fa-facebook' />
								</a>
							</li>
							<li>
								<a href='#!'>
									<i className='fa-brands fa-instagram' />{' '}
								</a>
							</li>
							<li>
								<a href='#!'>
									<i className='fa-brands fa-linkedin' />{' '}
								</a>
							</li>
						</ul>
					</div>
					<div className={footerStyles.logo}>
						{pzLogo && <GatsbyImage image={pzLogo} alt='PZ Logo' />}
					</div>
				</div>
			</div>
			<div className={footerStyles.footerBottomBar}>
				<div className={footerStyles.footerBottomWrapper}>
					<div>
						<b>©</b> 2024 · Prio Zorg
					</div>
					<div>Powered by Menefex</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
