import * as React from "react";

import { useSiteMetadata } from "../../hooks/use-site-metadata";

import * as formStyles from "../../styles/modules/forms/form.module.scss";

const Form: React.FC = () => {
    const {
        companyName,
        address,
        postalCode,
        city,
        // phone,
        // phoneRaw,
        email,
        kvk,
        btw,
        bank,
    } = useSiteMetadata();

    return (
        <div className={formStyles.form}>
            <div>
                <ul>
                    <li>{companyName}</li>
                    <li>{address}</li>
                    <li>
                        {postalCode} {city}
                    </li>
                    {/* <li>
						<span>Telefoon:</span> <a href={`tel:${phoneRaw}`}>{phone}</a>
					</li> */}
                    <li>
                        <span>E-mailadres:</span>{" "}
                        <a href={`mailto:${email}`}>{email}</a>
                    </li>
                    <li>
                        <span>KVK:</span> {kvk}
                    </li>
                    <li>
                        <span>BTW:</span> {btw}
                    </li>
                    <li>
                        <span>IBAN:</span> {bank}
                    </li>
                </ul>
            </div>
            <form
                name="pz-form"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                action="/success/"
            >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="pz-form" />

                <h5>Vul hieronder je gegevens in</h5>
                <div>
                    <label htmlFor="formFirstName">Voornaam</label>
                    <input
                        type="text"
                        name="firstName"
                        id="formFirstName"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formLastName">Achternaam</label>
                    <input
                        type="text"
                        name="lastName"
                        id="formLastName"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="formCompany">Bedrijfsnaam</label>
                    <input type="text" name="company" id="formCompany" />
                </div>
                <div>
                    <label htmlFor="formPhoneNr">Telefoonnummer</label>
                    <input type="tel" name="phone" id="formPhoneNr" required />
                </div>
                <div>
                    <label htmlFor="formEmail">E-mailadres</label>
                    <input type="email" name="email" id="formEmail" required />
                </div>
                <div>
                    <label htmlFor="formMessage">Bericht</label>
                    <textarea
                        name="message"
                        id="formMessage"
                        rows={7}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Versturen</button>
                </div>
            </form>
        </div>
    );
};

export default Form;
