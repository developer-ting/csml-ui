// MODULES //
import React from "react";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// STYLES //
import styles from "../../styles/sections/home/Crafting.module.scss";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

// IMAGES //
import cricle_img from "../../../public/img/home/cricle_img.png";
import video_img from "../../../public/img/home/video_img.jpg";
import play_icon from "../../../public/img/play_icon.svg";

/** Home Hero Section */
export default function Crafting({ craftingData }) {
	useEffect(() => {
		setTimeout(() => {
			gsap.registerPlugin(ScrollTrigger);
			const cricle_box = document.querySelector(".cricle_box").offsetLeft;
			const crafting_heading =
				document.querySelector(".crafting_heading").offsetWidth;
			const container_left_space =
				document.querySelector(".box_left_space").offsetLeft;
			const totalBoxW = container_left_space + cricle_box + crafting_heading + 80;
			// console.log(crafting_heading);
			const winW = window.innerWidth;
			const bannerPin = gsap.timeline({
				scrollTrigger: {
					trigger: ".crafting_wrap",
					start: "top center",
					end: "top top",
					pin: false,
					pinSpacing: true,
					scrub: true,
					// markers: false,
				},
			});
			bannerPin.to(".cricle_box", { left: totalBoxW, rotate: 360 }, 0);
		}, 500);
	}, []);
	const statsData = craftingData.attributes.StatsSection;
	console.log(craftingData);
	return (
		<section
			className={`${styles.crafting_wrap} ptb_100 crafting_wrap dot_animation_box`}
			name="crafting_section"
		>
			<section className={`${styles.crafting_section} crafting_section`}>
				<div className={`${styles.cricle_box} cricle_box hidden-xs`}>
					<img className="" src={cricle_img.src} loading="lazy" alt="cricle" />
				</div>
				<div className="container box_left_space">
					<div className={`${styles.crafting_flex} d_f`}>
						<div className={`${styles.left_content} toLeft`} data-scroll>
							<h2 className="text_xxxxxI color_white pb_30 crafting_heading">
								Crafting
							</h2>
							<h3 className="heading_text_45 color_white pb_20 visible-xs">
								World-class entertainment <br />
								hubs for over 25 years
							</h3>
							<p className="paraTxt color_white opacity_one">
								Since our establishment in 2002, we have cultivated an extensive
								portfolio of entertainment solutions. Additionally, we've been the
								exclusive distributor for Brunswick Bowling Products USA in India &
								SAARC.{" "}
							</p>
						</div>
						<div className={`${styles.right_content} toRight`} data-scroll>
							<h2 className="heading_text_45 color_white pb_60 hidden-xs">
								World-class entertainment <br />
								hubs for over 25 years
							</h2>
							<div className={`${styles.btn_height}`}>
								<a href="/about" rel="noreferrer">
									<span className="span_btn">
										<button className="btn_project_default color_white">About Us</button>
									</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container pt_100">
				<div className={`${styles.intertainment_border} commonBorderAnimation`}>
					<div className={`${styles.intertainment_flex} border_12 d_f`}>
						<div
							className={`${styles.intertainment_left} border_12 toTop`}
							data-scroll
						>
							<div className="dot_one dots_p"></div>
							<div className="dot_two dots_p"></div>
							<div className="dot_three dots_p"></div>
							{statsData.map((item) => {
								return (
									<div className={`${styles.content_box}`} key={item.StatsCount}>
										<h3 className="color_white text_sm text_700 text_upper pb_10">
											{item.StatsTitle}
										</h3>
										<div className={`${styles.content_flex} d_f`}>
											<h2 className="heading_text_55 text_800">
												<CountUp end={item.StatsCount} enableScrollSpy />+
											</h2>
											<p className="text_xxs color_white opacity_one">{item.StatsDesc}</p>
										</div>
									</div>
								);
							})}
						</div>
						<div className={`${styles.intertainment_right} toLeftOne`} data-scroll>
							{/* <div className={`${styles.video_box}`}>
                <img className="border_12 img" src={video_img.src} />
                <div className={`${styles.video_play}`}>
                  <img
                    src={play_icon.src}
                    className={`${styles.gallery_plus}`}
                    alt="play"
                  />
                  <div className={`${styles.video_play_txt}`}>
                    <p className="text_reg">Play Video</p>
                  </div>
                </div>
              </div> */}
							<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
								<a href={craftingData.attributes.link}>
									<div className={`${styles.video_box}`}>
										<img
											className={`${styles.video_img} border_12 img`}
											src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${craftingData.attributes.thumbnail.data.attributes.url}`}
											loading="lazy"
											alt=""
										/>
										<div className={`${styles.video_play}`}>
											<img
												src={play_icon.src}
												className={`${styles.gallery_plus}`}
												alt="play"
												loading="lazy"
											/>
											<div className={`${styles.video_play_txt}`}>
												<p className="text_reg">Play Video</p>
											</div>
										</div>
									</div>
								</a>
							</LightGallery>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
