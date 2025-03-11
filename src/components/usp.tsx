import React, { useState } from "react";

import * as uspStyles from "../styles/modules/usp.module.scss";

interface Service {
    name: string;
    description: string;
    iconClass: string;
    bgClass: string;
}

interface OverlayProps {
    item: Service;
    onClose: () => void;
}

// TODO: refactoren van overlay image; ipv ::after de image in gatsbyImage zetten

const Overlay: React.FC<OverlayProps> = ({ item, onClose }) => {
    const overlayClass = `${uspStyles.uspOverlay} ${uspStyles[item.bgClass]}`;

    return (
        <div className={overlayClass}>
            <div>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
            <button onClick={onClose}>Sluiten</button>
        </div>
    );
};

const Usp: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(
        null
    );
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const services: Service[] = [
        {
            name: "Coaching",
            description:
                "Waar loop je (op) vast? Wat wil je anders? Hoe wil je hieraan werken? Samen onderzoeken we het en stellen we de doelen vast",
            iconClass: "fa-solid fa-file-invoice-dollar",
            bgClass: "uspOverlayCoaching",
        },
        {
            name: "Mentoring",
            description:
                'Een ervaren persoon die met je levensdoelen stellen helpt Iemand nodig die je helpt in verschillende transitie in het leven "We are not what we know but what we are willing to learn."',
            iconClass: "fa-solid fa-hospital-user",
            bgClass: "uspOverlayMentoring",
        },
        {
            name: "Opvoedondersteuning",
            description:
                "Puberen, driftbuien, verkeerde vriendjes, gamen.... Opvoeden is niet altijd even gemakkelijk en is steun welkom",
            iconClass: "fa-solid fa-hand-holding-medical",
            bgClass: "uspOverlayOpvoedondersteuning",
        },
        {
            name: "(Scheidings)bemiddeling",
            description:
                "Een pragmatische en neutrale (cultuursensitieve) oplossing bij een (echt) scheiding of (familie) conflict nodig?",
            iconClass: "fa-solid fa-user-doctor",
            bgClass: "uspOverlayBemiddeling",
        },
    ];

    return (
        <section className={uspStyles.usp} id="usp">
            <h2>Wat we doen</h2>

            <div>
                {services.map((service, index) => (
                    <div key={index} className={uspStyles.uspButton}>
                        <button
                            onClick={() => {
                                setSelectedService(service);
                                setIsOverlayVisible(true);
                            }}
                        >
                            <i className={service.iconClass} />
                            <span>{service.name}</span>
                        </button>
                    </div>
                ))}

                {isOverlayVisible && selectedService && (
                    <Overlay
                        item={selectedService}
                        onClose={() => setIsOverlayVisible(false)}
                    />
                )}
            </div>
        </section>
    );
};

export default Usp;
