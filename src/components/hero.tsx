import React from 'react';

import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';

import {
	Navigation,
	Pagination,
	// Scrollbar,
	A11y,
	Parallax,
	Autoplay,
} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
// import 'swiper/scss/scrollbar';
import 'swiper/scss/parallax';
import 'swiper/scss/autoplay';
import 'swiper/scss/a11y';

import '../styles/swiper.scss';

import * as heroStyles from '../styles/modules/hero.module.scss';

const Hero: React.FC = () => {
	return (
		<section className={heroStyles.hero}>
			<Swiper
				modules={[A11y, Parallax, Autoplay, Navigation, Pagination]}
				spaceBetween={10}
				slidesPerView={1}
				loop={true}
				parallax={true}
				navigation
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
				}}
				className={heroStyles.heroWrapper}>
				<SwiperSlide className={heroStyles.heroSlide}>
					<div className={heroStyles.heroImage}>
						<StaticImage
							src='../images/stockimg.jpg'
							alt='hero 1'
							layout='fullWidth'
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className={heroStyles.heroSlide}>
					<div className={heroStyles.heroImage}>
						<StaticImage
							src='../images/stockimg.jpg'
							alt='hero 2'
							layout='fullWidth'
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide className={heroStyles.heroSlide}>
					<div className={heroStyles.heroImage}>
						<StaticImage
							src='../images/stockimg.jpg'
							alt='hero 3'
							layout='fullWidth'
						/>
					</div>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Hero;
