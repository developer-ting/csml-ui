// MODULES //
import React from "react";
import { useEffect, useState, useRef } from "react";
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
export default function Crafting() {
	
	useEffect(() => {
		setTimeout(() => {
			gsap.registerPlugin(ScrollTrigger);
			const cricle_box = document.querySelector(".cricle_box").offsetLeft;
			const crafting_heading =
				document.querySelector(".crafting_heading").offsetWidth;
			const totalBoxW = cricle_box + crafting_heading + 150;
			console.log(cricle_box);
			console.log(crafting_heading);
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
	return (
		<section className={`${styles.crafting_wrap} ptb_100 crafting_wrap`}>
			<section className={`${styles.crafting_section} crafting_section`}>
				<div className={`${styles.cricle_box} cricle_box hidden-xs`}>
					<img className="" src={cricle_img.src} />
				</div>
				<div className="container box_left_space">
					<div className={`${styles.crafting_flex} d_f`}>
						<div className={`${styles.left_content} toLeft`} data-scroll>
							<h2 className="text_xxxxxI color_white pb_40 crafting_heading">
								Crafting
							</h2>
							<p className="paraTxt color_white">
								Since our establishment in 2002, we have cultivated an extensive
								portfolio of entertainment solutions. Additionally, we've been the
								exclusive distributor for Brunswick Bowling Products USA in India &
								SAARC.{" "}
							</p>
						</div>
						<div className={`${styles.right_content} toRight`} data-scroll>
							<h2 className="heading_text_45 color_white pb_60">
								world-class entertainment <br />
								hubs for over 50 years
							</h2>
							<div className={`${styles.btn_height}`}>
								<a href="#" rel="noreferrer">
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
				<div className={`${styles.intertainment_border} border_animation`}>
					<div className={`${styles.intertainment_flex} d_f`}>
						<div className={`${styles.intertainment_left} toTop`} data-scroll>
							<div className="dot_one dots_p"></div>
							<div className="dot_two dots_p"></div>
							<div className="dot_three dots_p"></div>
							<div className={`${styles.content_box}`}>
								<h3 className="color_white text_sm text_700 text_upper pb_10">
									Entertainment Centres
								</h3>
								<div className={`${styles.content_flex} d_f`}>
									<h2 className="heading_text_55 text_800">200+</h2>
									<p className="text_xxs color_white">
										From concept to creationn we build premier amusement experiences
									</p>
								</div>
							</div>
							<div className={`${styles.content_box}`}>
								<h3 className="color_white text_sm text_700 text_upper pb_10">
									Premium Bowling Centres{" "}
								</h3>
								<div className={`${styles.content_flex} d_f`}>
									<h2 className="heading_text_55 text_800">900+</h2>
									<p className="text_xxs color_white">
										Served across India and the SAARC region
									</p>
								</div>
							</div>
							<div className={`${styles.content_box}`}>
								<h3 className="color_white text_sm text_700 text_upper pb_10">
									Happy Customers
								</h3>
								<div className={`${styles.content_flex} d_f`}>
									<h2 className="heading_text_55 text_800">125+</h2>
									<p className="text_xxs color_white">Across the continent</p>
								</div>
							</div>
						</div>
						<div className={`${styles.intertainment_right} toLeft`} data-scroll>
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
								<a href="https://youtu.be/75yhYazRwRs?feature=shared">
									<div className={`${styles.video_box}`}>
										<img
											className={`${styles.video_img} border_12 img`}
											src={video_img.src}
										/>
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
