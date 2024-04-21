import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as headerStyles from '../styles/modules/header.module.scss';

const Header: React.FC = () => {
	const data = useStaticQuery(graphql`
		query {
			pzLogo: file(relativePath: { eq: "pz-logo.jpg" }) {
				childImageSharp {
					gatsbyImageData
				}
			}
		}
	`);

	const pzLogo = getImage(data.pzLogo.childImageSharp.gatsbyImageData);

	return (
		<header className={headerStyles.header}>
			<div className={headerStyles.logo}>
				{pzLogo && <GatsbyImage image={pzLogo} alt='PZ Logo' />}
			</div>

			<div className={headerStyles.menu}>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/over-ons'>Over Ons</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
