import React from 'react';

import * as formStyles from '../styles/modules/formStyles.module.scss';

const Form: React.FC = () => {
	return (
		<div className={formStyles.form}>
			<div>
				<h3>Dit is intro tekst betreft de contactformulier</h3>
				<p>
					Est amet laboris et ad mollit officia commodo qui duis esse qui
					exercitation in excepteur. Culpa sunt sit exercitation laboris
					occaecat non cupidatat sint dolore ullamco ut fugiat culpa. Deserunt
					exercitation sint sint irure aute aute pariatur aliqua.
				</p>
				<p>
					Est amet laboris et ad mollit officia commodo qui duis esse qui
					exercitation in excepteur. Culpa sunt sit exercitation laboris
					occaecat non cupidatat sint dolore ullamco ut fugiat culpa. Deserunt
					exercitation sint sint irure aute aute pariatur aliqua.
				</p>
				<p>
					Est amet laboris et ad mollit officia commodo qui duis esse qui
					exercitation in excepteur. Culpa sunt sit exercitation laboris
					occaecat non cupidatat sint dolore ullamco ut fugiat culpa. Deserunt
					exercitation sint sint irure aute aute pariatur aliqua.
				</p>
			</div>
			<form
				name='priozorg-netlifyform'
				method='POST'
				data-netlify='true'
				netlify-honeypot='bot-field'
				action='/success/'>
				<input type='hidden' name='bot-field' />
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
