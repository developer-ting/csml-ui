// MODULES //
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "../../../node_modules/gsap/ScrollTrigger";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/about/OurVision.module.scss";

// IMAGES //
import our_vision from "../../../public/img/about/our_vision.jpg";
import our_mission from "../../../public/img/about/our_mission.jpg";

/** Home Hero Section */
export default function OurVision() {
	useEffect(() => {
		setTimeout(() => {
			gsap.registerPlugin(ScrollTrigger);
			const card_width = document.querySelector(".our_vision_flex").offsetWidth;
			const card_count = document.querySelectorAll(".our_vision_flex").length;
			const timeline_four = gsap.timeline({
				scrollTrigger: {
					trigger: ".our_vision_wrap",
					start: "center center",
					end: "center top",
					pin: true,
					pinSpacing: true,
					scrub: 1,
					// markers: true,
				},
			});
			timeline_four.add(
				gsap.timeline().to(".our_vision_flex", { x: -(card_width * 1) }, 0)
			);
		}, 500);
	}, []);
	return (
		<section className={`${styles.our_vision_wrap} our_vision_wrap`}>
			<div className={`${styles.our_vision_flex} d_f our_vision_flex`}>
				<div className={`${styles.our_vision_box}`}>
					<img className="" src={our_vision.src} alt="our vision" />
				</div>
				<div className={`${styles.our_vision_box}`}>
					<div className="dot_one dots_p"></div>
					<div className="dot_two dots_p"></div>
					<div className="dot_three dots_p"></div>
					<div className={`${styles.our_vision_content}`}>
						<h2 className="heading_text_55 pb_30">Our vision</h2>
						<p className="paraTxt_18 pb_20">
							CSML envisions a world where every space is a canvas for boundless
							entertainment, where creativity knows no bounds, and where guests
							experience unforgettable moments of joy and excitement
						</p>
					</div>
				</div>
			</div>
			<div className={`${styles.our_vision_flex} d_f our_vision_flex`}>
				<div className={`${styles.our_vision_box}`}>
					<img className="" src={our_mission.src} alt="our mission" />
				</div>
				<div className={`${styles.our_vision_box}`}>
					<div className="dot_one dots_p"></div>
					<div className="dot_two dots_p"></div>
					<div className="dot_three dots_p"></div>
					<div className={`${styles.our_vision_content}`}>
						<h2 className="heading_text_55 pb_30">Our mission</h2>
						<p className="paraTxt_18 pb_20">
							We strive to create world-class indoor amusement centers, setting new
							standards in creativity, quality, and guest satisfaction in Amusement
							Industry. We're dedicated to delivering innovative, world-class solutions
							that exceed our clients expectations and captivate their audiences.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
