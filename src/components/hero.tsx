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
				className={heroStyles.heroWrapper}>
				<SwiperSlide className={heroStyles.heroSlide}>
					<div className={heroStyles.heroImage}>
						<StaticImage
							src='../images/stockimg.jpg'
							alt='hero 1'
							layout='fullWidth'
						/>
					</div>
					<div className={heroStyles.heroSlideBox}>
						<h2>Maak kennis met Prio Zorg</h2>
						<p>
							Aute reprehenderit nulla consectetur ipsum. Esse fugiat ad magna
							eu adipisicing est excepteur sit magna qui. Amet ut laboris sunt
							elit veniam esse. In ullamco deserunt eiusmod ex do id anim.
							Pariatur ullamco aute aliquip elit exercitation exercitation id
							non proident do sunt. Culpa qui id commodo do laborum proident
							aliquip.
						</p>

						<div className={heroStyles.heroSlideButtons}>
							<a href='#!'>button 1</a>
							<a href='#!'>langere button 2</a>
						</div>
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
					<div className={heroStyles.heroSlideBox}>
						<p>
							Aute reprehenderit nulla consectetur ipsum. Esse fugiat ad magna
							eu adipisicing est excepteur sit magna qui. Amet ut laboris sunt
							elit veniam esse. In ullamco deserunt eiusmod ex do id anim.
							Pariatur ullamco aute aliquip elit exercitation exercitation id
							non proident do sunt. Culpa qui id commodo do laborum proident
							aliquip.
						</p>
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
					<div className={heroStyles.heroSlideBox}>
						<p>
							Aute reprehenderit nulla consectetur ipsum. Esse fugiat ad magna
							eu adipisicing est excepteur sit magna qui. Amet ut laboris sunt
							elit veniam esse. In ullamco deserunt eiusmod ex do id anim.
							Pariatur ullamco aute aliquip elit exercitation exercitation id
							non proident do sunt. Culpa qui id commodo do laborum proident
							aliquip.
						</p>
					</div>
				</SwiperSlide>
			</Swiper>
			{/* <div className={heroStyles.heroBox}>yooo</div> */}
		</section>
	);
};

export default Hero;
