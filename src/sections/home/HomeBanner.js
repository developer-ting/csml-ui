// MODULES //
import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import * as Scroll from "react-scroll";
import {
	Link as ScrollSection,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";
// COMPONENTS //

// SECTIONS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/HomeBanner.module.scss";

// IMAGES //
import home_banner from "../../../public/img/home/home_banner.jpg";
import cricle_arrow from "../../../public/img/cricle_arrow.svg";

/** Home Hero Section */
export default function HomeBanner({ data }) {
	const [useSlider, setUseSlider] = useState(true);
	useEffect(() => {
		let anim = document.querySelector(".home_banner_animation");
		anim.classList.add("home_banner_scroll");
		// setTimeout(function () {

		// }, 600);
	}, []);

	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 2000,
		autoplaySpeed: 7000,
	};
	return (
		<section className={`${styles.home_banner_wrap}`}>
			<div
				className={`${styles.home_banner_animation} home_banner_animation slider_white_dots`}
			>
				{useSlider ? (
					<Slider {...settings}>
						{data.map((item) => {
							{
								console.log(item.attributes.BannerTitle);
							}
							return (
								<div className={`${styles.home_banner_item}`} key={item.BannerPara}>
									<div className={`${styles.banner_img}`}>
										<picture>
											<source media="(max-width:465px)" srcSet={home_banner.src} />
											<img className="width_100" src={home_banner.src} />
										</picture>
									</div>
									<div className={`${styles.banner_content}`}>
										<h1 className="heading_text_70 color_white pb_40">
											{item.attributes.BannerTitle}
										</h1>
										<p className="paraTxt color_white">{item.attributes.BannerPara}</p>
									</div>
								</div>
							);
						})}
					</Slider>
				) : (
					<video autoPlay muted loop className={styles.video_box}>
						<source src="./img/home/movie.mp4" type="video/mp4" />
					</video>
				)}

				<div className={`${styles.circle_right}`}>
					<ScrollSection
						to="crafting_section"
						spy={true}
						smooth={true}
						offset={-50}
						duration={500}
					>
						<img className="" src={cricle_arrow.src} />
					</ScrollSection>
				</div>
			</div>
		</section>
	);
}
