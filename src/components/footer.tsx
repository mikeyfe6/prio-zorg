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
							<li>Sleewijkstraat 54</li>
							<li>1104 TW Amsterdam</li>
							<li>
								<a href='tel:31612345678'>
									<i className='fa-solid fa-phone fa-lg' />
									<span>+31 (0) 612 345 678</span>
								</a>
							</li>
							<li>
								<a href='mailto:priozorg@test.nl'>
									<i className='fa-solid fa-envelope fa-lg' />
									<span>priozorg@test.nl</span>
								</a>
							</li>
							<li>KVK: 84381000</li>
							<li>BTW: NL003955140B97</li>
							<li>IBAN: NL47KNAB0418057419</li>
						</ul>
					</div>

					<div className={footerStyles.general}>
						<h6>Algemeen</h6>
						<ul>
							<li>
								<Link to='/'>Over Prio Zorg</Link>
							</li>
							<li>
								<Link to='/'>Vacatures</Link>
							</li>
							<li></li>
						</ul>
					</div>

					<div className={footerStyles.socials} id='footer-socials'>
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
									href='https://www.linkedin.com/in/prio-zorg-a4b783285/'
									rel='noopener noreferrer'
									target='_blank'>
									<i className='fa-brands fa-linkedin' />{' '}
								</a>
							</li>
						</ul>
					</div>
					<div className={footerStyles.logo} id='footer-logo'>
						{pzLogo && (
							<Link to='/'>
								<GatsbyImage image={pzLogo} alt='PZ Logo' />
							</Link>
						)}
					</div>
				</div>
			</div>
			<div className={footerStyles.footerBottomBar} id='footer-bottombar'>
				<div className={footerStyles.footerBottomWrapper}>
					<div>
						<b>©</b> 2024 · Prio Zorg
					</div>
					<div>
						Powered by{' '}
						<a
							href='https://menefex.nl/'
							rel='noopener noreferrer'
							target='_blank'>
							Menefex
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
