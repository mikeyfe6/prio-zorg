import React, { useState } from "react";

import { GatsbyImage } from "gatsby-plugin-image";
import { useSrcImages } from "../../hooks/use-src-image";

import * as uspStyles from "../../styles/modules/ui/usp.module.scss";

interface Service {
    name: string;
    description: string;
    iconClass: string;
    image: string;
}

interface OverlayProps {
    item: Service;
    onClose: () => void;
}

const Overlay: React.FC<OverlayProps> = ({ item, onClose }) => {
    const images = useSrcImages();
    const imageKey = item.image as keyof typeof images;
    const image = images[imageKey];

    return (
        <div className={uspStyles.uspOverlay}>
            <div className={uspStyles.uspContent}>
                <h4>{item.name}</h4>
                <p>{item.description}</p>
            </div>
            <button onClick={onClose}>Sluiten</button>

            {image && (
                <div
                    className={`${uspStyles.uspImage} ${uspStyles[item.image]}`}
                >
                    <GatsbyImage image={image} alt={item.name} />
                </div>
            )}
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
            image: "coaching",
        },
        {
            name: "Mentoring",
            description:
                'Een ervaren persoon die met je levensdoelen stellen helpt Iemand nodig die je helpt in verschillende transitie in het leven "We are not what we know but what we are willing to learn."',
            iconClass: "fa-solid fa-hospital-user",
            image: "mentoring",
        },
        {
            name: "Opvoedondersteuning",
            description:
                "Puberen, driftbuien, verkeerde vriendjes, gamen.... Opvoeden is niet altijd even gemakkelijk en is steun welkom",
            iconClass: "fa-solid fa-hand-holding-medical",
            image: "opvoedondersteuning",
        },
        {
            name: "(Scheidings)bemiddeling",
            description:
                "Een pragmatische en neutrale (cultuursensitieve) oplossing bij een (echt) scheiding of (familie) conflict nodig?",
            iconClass: "fa-solid fa-user-doctor",
            image: "bemiddeling",
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
