import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import * as uspStyles from '../styles/modules/usp.module.scss';

const Usp: React.FC = () => {
	return (
		<section className={uspStyles.usp}>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-file-invoice-dollar' />
					USP Item 1
				</a>
			</div>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-hospital-user' />
					USP Item 2
				</a>
			</div>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-hand-holding-medical' />
					USP Item 3
				</a>
			</div>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-user-doctor' />
					USP Item 4
				</a>
			</div>
		</section>
	);
};

export default Usp;
