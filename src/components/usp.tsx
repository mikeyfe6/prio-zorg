import React from 'react';

import * as uspStyles from '../styles/modules/usp.module.scss';

const Usp: React.FC = () => {
	return (
		<section className={uspStyles.usp} id='usp'>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-file-invoice-dollar' />
					Coaching
				</a>
			</div>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-hospital-user' />
					Mentoring
				</a>
			</div>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-hand-holding-medical' />
					(Opvoed) ondersteuning
				</a>
			</div>
			<div>
				<a href='#!'>
					<i className='fa-solid fa-user-doctor' />
					Bemiddeling
				</a>
			</div>
		</section>
	);
};

export default Usp;
