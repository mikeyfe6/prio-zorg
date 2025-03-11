import * as React from "react";

import { Link } from "gatsby";

import { StaticImage } from "gatsby-plugin-image";

import {
    Navigation,
    Pagination,
    A11y,
    Parallax,
    Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/parallax";
import "swiper/scss/autoplay";
import "swiper/scss/a11y";

import * as heroStyles from "../../styles/modules/hero.module.scss";

// TODO: toon/hide hero button op basis van pagina

const Hero: React.FC = () => {
    return (
        <section className={heroStyles.hero}>
            <Swiper
                modules={[A11y, Parallax, Autoplay, Navigation, Pagination]}
                slidesPerView={1}
                loop
                parallax
                navigation
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: true,
                }}
                className={heroStyles.heroWrapper}
            >
                <SwiperSlide className={heroStyles.heroSlide}>
                    <div className={heroStyles.heroImage}>
                        <StaticImage
                            src="../../images/hero/hands.jpg"
                            alt="hero 1"
                            layout="fullWidth"
                        />
                    </div>
                    <div className={heroStyles.heroSlideBox}>
                        <h1>Welkom bij Prio Zorg</h1>

                        <div className={heroStyles.heroSlideButtons}>
                            <Link to="/over-ons/">Meer over ons</Link>
                            <Link to="/contact/">Neem contact op</Link>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className={heroStyles.heroSlide}>
                    <div className={heroStyles.heroImage}>
                        <StaticImage
                            src="../../images/hero/future.jpg"
                            alt="hero 2"
                            layout="fullWidth"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide className={heroStyles.heroSlide}>
                    <div className={heroStyles.heroImage}>
                        <StaticImage
                            src="../../images/hero/jump.jpg"
                            alt="hero 3"
                            layout="fullWidth"
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Hero;
