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
import videoDestop from "../../../public/img/home/video-Desktop.png";

/** Home Hero Section */
export default function HomeBanner({ data }) {
	const [useSlider, setUseSlider] = useState(data.attributes.isSlider);
	const [windowLoaded, setWindowLoaded] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Use JavaScript to check the screen width and add the appropriate video

	useEffect(() => {
		const isDesktop = window.innerWidth >= 767;
		let anim = document.querySelector(".home_banner_animation");
		anim.classList.add("home_banner_scroll");
		// setTimeout(function () {

		// }, 600);
		if (isDesktop) {
			setIsDesktop(true);
		} else {
			setIsDesktop(false);
		}
		if (!isDesktop) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
		/** handleWindowLoad function */
		const handleWindowLoad = () => {
			console.log("load sudya");
		};
		/** handleWindowLoad function */
		function handleWindowLoad1() {
			setWindowLoaded(true);
			console.log("load sudya");
		}

		// Listen for the window load event
		window.addEventListener("load", handleWindowLoad1());

		// function addVideo(containerId, videoSrc, width, height) {
		// 	var container = document.getElementById(containerId);
		// 	var video = document.createElement("video");
		// 	// video.width = width;
		// 	// video.height = height;
		// 	video.loop = true;
		// 	video.controls = false;
		// 	video.autoplay = true;
		// 	video.playsinline = true;
		// 	video.muted = true;

		// 	var source = document.createElement("source");
		// 	source.src = videoSrc;
		// 	source.type = "video/mp4";

		// 	video.appendChild(source);
		// 	container.appendChild(video);
		// }
		// window.addEventListener("resize", function () {
		// 	var desktopVideoContainer = document.getElementById("desktopVideoContainer");
		// 	var mobileVideoContainer = document.getElementById("mobileVideoContainer");

		// 	desktopVideoContainer.innerHTML = "";
		// 	mobileVideoContainer.innerHTML = "";

		// 	if (window.innerWidth > 600) {
		// 		addVideo(
		// 			"desktopVideoContainer",
		// 			`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.attributes.homeBannerVideo.bannerVideo.data.attributes.url}`
		// 		);
		// 	} else {
		// 		addVideo(
		// 			"mobileVideoContainer",
		// 			`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.attributes.homeBannerVideo.bannerMobileVideo.data.attributes.url}`
		// 		);
		// 	}
		// });
		// window.dispatchEvent(new Event("resize"));
		return () => {
			window.removeEventListener("load", handleWindowLoad);
		};
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
	const bannerSlider = data.attributes.homeBannerSlider;
	console.log(data.attributes.isSlider);
	console.log(data);
	return (
		<section className={`${styles.home_banner_wrap}`}>
			<div
				className={`${styles.home_banner_animation} home_banner_animation slider_white_dots`}
			>
				{useSlider ? (
					<Slider {...settings}>
						{bannerSlider.map((item) => {
							return (
								<div className={`${styles.home_banner_item}`} key={item.BannerPara}>
									<div className={`${styles.banner_img}`}>
										<picture>
											<source
												media="(max-width:767px)"
												srcSet={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.bannerMobile.data.attributes.url}`}
											/>
											<img
												className="width_100"
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.bannerImage.data.attributes.url}`}
											/>
										</picture>
									</div>
									<div className={`${styles.banner_content}`}>
										<h1 className="heading_text_70 color_white pb_40">
											{item.BannerTitle}
										</h1>
										<p className="paraTxt color_white">{item.BannerPara}</p>
									</div>
								</div>
							);
						})}
					</Slider>
				) : (
					<>
						{/* <video
							webkit-playsinline=""
							playsinline=""
							autoPlay
							muted
							loop
							className={`${styles.video_box} hidden-xs`}
						>
							<source
								src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.attributes.homeBannerVideo.bannerVideo.data.attributes.url}`}
								type="video/mp4"
							/>
						</video>
						<video
							webkit-playsinline=""
							playsinline=""
							autoPlay
							muted
							loop
							className={`${styles.video_box} visible-xs`}
						>
							<source
								src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.attributes.homeBannerVideo.bannerMobileVideo.data.attributes.url}`}
								type="video/mp4"
							/>
						</video> */}
						{windowLoaded && isDesktop && (
							<video
								playsInline
								autoPlay
								muted
								loop
								className={`${styles.video_box} hidden-xs`}
							>
								<source
									src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.attributes.homeBannerVideo.bannerVideo.data.attributes.url}`}
									type="video/mp4"
								/>
							</video>
						)}
						{windowLoaded && isMobile && (
							<video
								playsInline
								autoPlay
								muted
								loop
								className={`${styles.video_box} visible-xs`}
							>
								<source
									src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.attributes.homeBannerVideo.bannerMobileVideo.data.attributes.url}`}
									type="video/mp4"
								/>
							</video>
						)}

						{/* <div id="mobileVideoContainer"></div> */}
						<div className={`${styles.banner_content}`}>
							<h1 className="heading_text_70 color_white pb_40">
								{data.attributes.homeBannerVideo.videoTitle}
							</h1>
						</div>
					</>
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
