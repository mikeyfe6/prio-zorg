import React, { useState } from "react";

import * as actualStyles from "../styles/modules/actual.module.scss";

interface Item {
    header: string;
    content: string;
}

const Actual: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const data: Item[] = [
        {
            header: "Actualiteit 1",
            content:
                "Content 1: Exercitation laboris nostrud elit culpa excepteur incididunt qui minim fugiat minim tempor ad nostrud. Nulla id velit ex anim incididunt nisi consectetur dolore sit nulla veniam laboris sint. Exercitation eu consequat voluptate officia tempor ea aute ipsum id. Voluptate qui sint officia mollit laborum ullamco culpa deserunt id cillum adipisicing commodo et. Ea eu proident do aliqua aute aliquip sit velit ex qui sint culpa.",
        },
        {
            header: "Actualiteit 2",
            content:
                "Content 2: Exercitation laboris nostrud elit culpa excepteur incididunt qui minim fugiat minim tempor ad nostrud. Nulla id velit ex anim incididunt nisi consectetur dolore sit nulla veniam laboris sint. Exercitation eu consequat voluptate officia tempor ea aute ipsum id.",
        },
        {
            header: "Actualiteit 3",
            content:
                "Content 3: Exercitation laboris nostrud elit culpa excepteur incididunt qui minim fugiat minim tempor ad nostrud. Nulla id velit ex anim incididunt nisi consectetur dolore sit nulla veniam laboris sint. Exercitation eu consequat voluptate officia tempor ea aute ipsum id. Voluptate qui sint officia mollit laborum ullamco culpa deserunt id cillum adipisicing commodo et.",
        },
    ];

    return (
        <section
            className={`${actualStyles.actual} ${actualStyles.collapsible}`}
        >
            <div className={actualStyles.headers}>
                {data.map((item, index) => (
                    <h4
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`${actualStyles.header} ${
                            activeIndex === index ? actualStyles.active : ""
                        }`}
                    >
                        {item.header}
                    </h4>
                ))}
            </div>
            <div className={actualStyles.content}>
                <p>{activeIndex !== null && data[activeIndex].content}</p>
            </div>
        </section>
    );
};

export default Actual;
