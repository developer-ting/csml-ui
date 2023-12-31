// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../../src/components/Footer";
import Header from "../../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImagePara from "@/components/ImagePara";
import BlackStripOverview from "@/components/BlackStripOverview";
import {
	shindiggerPlanSmarter,
	shindiggerCraftSteps,
} from "@/data/data-file-1";
import CardIcon from "@/components/CardIcon";

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../../src/styles/pages/product/intercard/Shindigger.module.scss";

//	IMAGES	//
import shindigger_banner from "../../../public/img/product/intercard/shindigger/shindigger_banner.jpg";

export default function Shindigger() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.shindigger_main}`}>
				<InsideBanner
					bannerTitle="Effortless Party Planning with <br>Shindigger party booking software"
					bannerImg={shindigger_banner.src}
					mobileImg={shindigger_banner.src}
				/>
				<BlackStripOverview desc="Our intuitive platform ensures a seamless experience for both hosts and guests, revolutionizing the way you celebrate. Shindigger is more than just a reservation system; it's your ticket to hassle-free party planning." />

				<section className={`${styles.intercard} ptb_100`}>
					<div className="container">
						<div className={`${styles.title_txt} `}>
							<h2 className="heading_text_55 pb_40 toTop" data-scroll>
								Plan Smarter, Party Harder <br className="hidden-xs" />
								with Shindigger
							</h2>
						</div>
						{shindiggerPlanSmarter.map((item, index) => (
							<ImagePara
								key={index}
								title={item.title}
								desc={item.desc}
								boxImg={item.image.src}
							/>
						))}

						<div className={`${styles.brochure_box} pt_60 toTop`} data-scroll>
							<div className={`${styles.contactinside}`}>
								<div className={`${styles.inside_flex}`}>
									<div className={`${styles.text_bx} paraTxt`}>
										Click on Brochure button to know more about Shindigger
									</div>
									<div className={`${styles.btn_bx}`}>
										<a href="#" rel="noreferrer">
											<span className="span_btn yellow_btn">
												<button className="btn_project_default ">Download Brochure</button>
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className={`${styles.how_it_works} ptb_100 dot_animation_box`}>
					<div className="container">
						<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
							<h2 className="heading_text_55 color_white ">
								Craft Your Shindig in 5 Simple Steps
							</h2>
						</div>
						<div className={`${styles.how_it_works_flex} toTop`} data-scroll>
							{/* <CardIcon /> */}
							{shindiggerCraftSteps.map((item, index) => (
								<CardIcon
									key={index}
									title={item.title}
									desc={item.desc}
									boxIcon={item.image.src}
								/>
							))}
						</div>

						<div className="pt_100">
							<div
								className={`${styles.contact_main_bx_bottom} border_animation toTop`}
								data-scroll
							>
								<div className={`${styles.contactinside}`}>
									<div className="dot_one dots_p"></div>
									<div className="dot_two dots_p"></div>
									<div className="dot_three dots_p"></div>
									<div className={`${styles.inside_flex}`}>
										<div className={`${styles.text_bx} text_24 opacity_one text_500`}>
											With Shindigger, your upcoming celebration is just a few clicks away.{" "}
											<br className={`${styles.hidden_991}`} />{" "}
											<a className="" href="">
												Join us
											</a>{" "}
											in making party planning as enjoyable as the celebrations themselves!
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
