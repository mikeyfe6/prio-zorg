import React from 'react';

import * as formStyles from '../styles/modules/form.module.scss';

const Form: React.FC = () => {
	return (
		<div className={formStyles.form}>
			<div>
				<ul>
					<li>Prio Zorg</li>
					<li>Sleewijkstraat 54</li>
					<li>1104 TW Amsterdam</li>
					<li>
						<span>Telefoon:</span>{' '}
						<a href='tel:31612345678'>+31 (0) 612 345 678</a>
					</li>
					<li>
						<span>Emailadres:</span>{' '}
						<a href='mailto:priozorg@test.nl'>priozorg@test.nl</a>
					</li>
					<li>
						<span>KVK:</span> 84381000
					</li>
					<li>
						<span>BTW:</span> NL003955140B97
					</li>
					<li>
						<span>IBAN:</span> NL47KNAB0418057419
					</li>
				</ul>
			</div>
			<form
				name='priozorg-netlifyform'
				method='POST'
				data-netlify='true'
				data-netlify-honeypot='bot-field'
				action='/success/'>
				<input type='hidden' name='form-name' value='priozorg-netlifyform' />

				<h5>Vul hieronder je gegevens in</h5>
				<div>
					<label htmlFor='formFirstName'>Voornaam</label>
					<input type='text' name='firstName' id='formFirstName' />
				</div>
				<div>
					<label htmlFor='formLastName'>Achternaam</label>
					<input type='text' name='lastName' id='formLastName' />
				</div>
				<div>
					<label htmlFor='formCompany'>Bedrijfsnaam</label>
					<input type='text' name='company' id='formCompany' />
				</div>
				<div>
					<label htmlFor='formPhoneNr'>Telefoonnummer</label>
					<input type='tel' name='phone' id='formPhoneNr' />
				</div>
				<div>
					<label htmlFor='formEmail'>Emailadress</label>
					<input type='email' name='email' id='formEmail' />
				</div>
				<div>
					<label htmlFor='formMessage'>Bericht</label>
					<textarea name='message' id='formMessage' rows={7} />
				</div>
				<div>
					<button type='submit'>Versturen</button>
				</div>
			</form>
		</div>
	);
};

export default Form;
