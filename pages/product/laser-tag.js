// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import BlackStripOverview from "@/components/BlackStripOverview";
import TextImgBox from "@/components/TextImgBox";
import { ServerHeaders } from "@/utils/RequestHeaders";
import LaserTagTestimonial from "@/components/LaserTagTestimonial";

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from "html-react-parser";

// STYLES //
import styles from "../../src/styles/pages/product/LaserTag.module.scss";

//	IMAGES	//
import laser_tag_banner from "../../public/img/product/laser-tag/Picture5.png";
import laser_tag_banner_mobile from "../../public/img/product/laser-tag/Picture5.png";
import leftBoxImg from "../../public/img/product/laser-tag/leftBoxImg.jpg";
import rightBoxImg from "../../public/img/product/laser-tag/rightBoxImg.jpg";
import premium_quality_systems_1 from "../../public/img/product/laser-tag/premium_quality_systems_1.jpg";
import futuristic_img from "../../public/img/product/laser-tag/futuristic_img.jpg";
import premium_phaser from "../../public/img/product/laser-tag/premium_phaser.jpg";
import system from "../../public/img/product/laser-tag/system.jpg";
import elements from "../../public/img/product/laser-tag/elements.jpg";
import optimizing_img from "../../public/img/product/laser-tag/optimizing_img.jpg";
import design from "../../public/img/product/laser-tag/design.jpg";
import plus_icon from "../../public/img/plus_icon.svg";
import closeIcn from "../../public/img/close.svg";

/** Softplay Page */
export default function LaserTag({ LaserTagData, LaserTagTestimonialsData }) {
	console.log(LaserTagData);
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: false,
		speed: 1000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					autoplay: true,
				},
			},
		],
		afterChange: (i) => {
			fillProgress(i + 1);
		},
		// prevArrow: (
		// 	<button className={`${styles.prevarrow} about_prevarrow`}>
		// 		<Image src={arrow_slider.src} alt="arrow" width={40} height={40} />
		// 	</button>
		// ),
		// nextArrow: (
		// 	<button className={`${styles.nextarrow} about_nextarrow`}>
		// 		<Image src={arrow_slider.src} alt="arrow" width={40} height={40} />
		// 	</button>
		// ),
	};

	const [showPopup, setShowPopup] = useState(false);
	const [gameIndex, setGameIndex] = useState(0);
	const popUpData = LaserTagData.data[gameIndex].attributes;
	/** openPopup function */
	const openPopup = (id) => {
		setShowPopup(true);
		handleGameIndex(id);
		const bodyTg = document.querySelector("body");
		bodyTg.style.overflow = "hidden";
	};
	/** closePopup function */
	const closePopup = () => {
		setShowPopup(false);
		const bodyTg = document.querySelector("body");
		bodyTg.style.overflow = "unset";
	};
	const handleGameIndex = (id) => {
		setGameIndex(id);
	};

	const [progressWidth, setProgressWidth] = useState(0);
	useEffect(() => {
		fillProgress(1);
	}, []);
	const fillProgress = (currInd) => {
		setProgressWidth((currInd / 4) * 100);
	};
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Head>
				<title>Elevate Your Venue with Premium Laser Tag Equipment</title>
				<meta name="description" content="Explore CSML's premium laser tag equipment perfect for every arena, game zone, and entertainment center. High quality and reliable gear for a thrilling experience." />
				<meta name="og:title" content="Find the Best Laser Tag Equipment Distributor in India | CSML Group" />
				<meta name="og:description" content="Explore CSML's premium laser tag equipment perfect for every arena, game zone, and entertainment center. High quality and reliable gear for a thrilling experience." />
				<meta name="keywords" content="Laser Tag, Laser Tag Equipment, Laser Tag Arena, Indoor Laser Tag, Laser Tag Cost,Best Laser Tag Equipment, Best Laser Tag Equipment in India, Best Laser Tag Equipment Distributor in India, Laser Tag Equipment Distributor in India, Laser Tag Equipment, Laser Tag Equipment for Entertainment Centers"/>
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
				<meta
					property="og:image"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<meta
					property="og:image:secure_url"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<meta httpEquiv="revisit-after" content="3 days"/>
				<link rel="icon" href="/img/favicon.png" />
				<link rel="canonical" href="https://csmlgroup.com/product/laser-tag"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.LaserTagMain}`}>
				<InsideBanner
					bannerTitle="Delivering The Ultimate <br>Laser Tag Experience"
					bannerImg={laser_tag_banner.src}
					mobileImg={laser_tag_banner_mobile.src}
					alt1="Laser Tag"
					alt2="Laser Tag"
					isChange={true}
				/>
				<BlackStripOverview desc="Laserblast, in an exclusive partnership with CSML, distributes its cutting-edge Laser Tag equipment in India. With decades of engineering excellence, Laserblast ensures robust, reliable, and resilient products. <br> As a dynamic industry leader for over 22 years, Laserblast, now distributed by CSML in India, brings the most reliable and advanced Laser Tag equipment, offering a fast ROI attraction to boost profits at FECs." />

				<section className={`${styles.how_apply_wrap} ptb_100`}>
					<div className="container">
						<h1 className={`heading_text_55 pb_20 toTop text_center`}>Premium Laser Tag Equipment built with Innovative Technology</h1>
						<p className="paraTxt_18 l_h_5">
							When it comes to premium laser tag equipment, Laserblast stands at the forefront, offering one of the most powerful and sophisticated systems available. As the exclusive distributor, CSML Group brings this cutting-edge technology to laser tag arenas, game zones, and entertainment centers, providing unparalleled performance and durability. With a diverse range of over 30 captivating game formats, Laserblast ensures an exhilarating and unique experience for every player. Regular, complimentary updates keep your arena at the forefront of innovation, introducing the latest game modes and features to maintain player engagement and encourage repeat visits
						</p>
					</div>
				</section>


				<section className={`${styles.how_apply_wrap} ptb_100`}>
					<div className="container">
						<h2 className={`heading_text_55 pb_20 toTop text_center`}>Laser Tag Equipment for Every Arena – High Quality Gear at Competitive Prices!</h2>
						<p className="paraTxt_18 l_h_5">
							Turn your venue into an action-packed <b>laser tag arena</b> with our state-of-the-art equipment designed for endless fun that brings repeat value. Whether you're opening a new entertainment destination or upgrading your current centre we provide tailored solutions and packages to meet your needs.
						</p>
						<br/>
						<p className="paraTxt_18 l_h_5">
							To learn more about laser tag costs, contact our expert team for the perfect solution tailored for your laser tag arena.
						</p>
					</div>
				</section>

				<section className={`${styles.how_apply_wrap} dot_animation_box ptb_100`}>
					<div className="container">
						<h2 className={`heading_text_55 pb_20 toTop text_center color_white`}>Unmatched Features for the Ultimate Laser Tag Experience</h2>
						<p className="paraTxt_18 l_h_5 color_white">
							Laserblast delivers unmatched features for the ultimate laser tag experience. With over 30 dynamic game formats, it ensures every session feels fresh and thrilling. Designed for durability and top-tier performance, it’s ideal for arenas, game zones, and entertainment centers. Free regular updates keep your system on the cutting edge with the latest game modes, ensuring players are always engaged and eager to return. Available through CSML, your official Laserblast distributor.
						</p>
					</div>
				</section>




				<TextImgBox
					sectionHeading="Premium Quality Laser Tag Systems"
					sectionDesc="<span className='text_700'>Cyberblast Pro</span> from Laserblast, is the most powerful laser tag system you will ever find in the market. It is also the most sophisticated high-quality laser tag with over 30 game formats and free access to new formats."
					leftBoxImg={premium_quality_systems_1.src}
					rightBoxImg={rightBoxImg.src}
				/>

				<div className={`${styles.ecommerce_slider_main} pb_100 toTop`} data-scroll>
					<div className="container">
						<div className={`${styles.title_txt} pb_20`}>
							<h2 className="heading_text_55 text_700 pb_20 toTop" data-scroll>
								Features that tag it superior
							</h2>
						</div>
					</div>

					<div className={`${styles.partner_superior_flex} toTop`} data-scroll>
						<Slider {...settings}>
							{LaserTagData.data.map((item, productItemIndex) => {
								return (
									<div className={`${styles.showcase_box}`}>
										<div className={`${styles.showcase_content}`}>
											<div
												className={`${styles.img_box} commonBorderAnimation whiteCommonBorderAnimation`}
											>
												<div className="dot_one dots_p"></div>
												<div className="dot_two dots_p"></div>
												<div className="dot_three dots_p"></div>
												<img
													className="border_8"
													src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.Image.data.attributes.url}`}
													alt="img"
												/>
											</div>
											<div className={`${styles.desc_box}`}>
												<div className={`${styles.desc_title} f_j`}>
													<h3 className="text_24 text_700 pb_20">
														{item.attributes.Heading}
													</h3>
													<a>
														<button
															className="btn_plus"
															onClick={() => openPopup(productItemIndex)}
														>
															<span className={`${styles.arrow_one} arrow_one`}>
																<img src={plus_icon.src} alt="icon" />
															</span>
														</button>
													</a>
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</Slider>
					</div>

					<div className="container">
						<div className={`${styles.progress_div} pb_100`}>
							<div className={`${styles.progress_bar}`}>
								<div
									style={{ width: `${progressWidth}%` }}
									className={`${styles.color_div}`}
								></div>
							</div>
						</div>
					</div>
				</div>

				<section
					className={`${styles.optimizing_section} dot_animation_box pb_100`}
				>
					<div className={`${styles.full_img} toTop`} data-scroll>
						<img className="border_8 width_100" src={optimizing_img.src} alt="optimizing img" />
					</div>
					<div className="container">
						<div className={`${styles.optimizing_flex} ptb_40 d_f`}>
							<div className={`${styles.optimizing_title}`}>
								<h2
									className="heading_text_55 color_white text_700 pb_20 toTop mobile_center"
									data-scroll
								>
									Optimizing Every Space For The Best Experience
								</h2>
							</div>
							<div className={`${styles.optimizing_content} toTop`} data-scroll>
								<p className="paraTxt_18 pb_20 color_white_opacity toTop" data-scroll>
									The Cyberblast Phaser system is versatile, accommodating Laser Tag
									arenas from 1000 to 5000 square feet. For optimal gameplay, it's
									recommended to have at least 2000-5000 square feet of space.
									Multi-level Laser Tag, where feasible and compliant with regulations,
									consistently outperforms single-level setups.
								</p>
								<p className="paraTxt_18 pb_20 color_white_opacity toTop" data-scroll>
									Ideal gameplay typically requires a minimum of 2000 sq. ft and 16
									players, with our recommendation falling in the range of 2500-3500 sq.
									ft and 20-30 players for an enhanced experience.
								</p>
							</div>
						</div>

						<div className={`${styles.optimizing_table} d_f`}>
							<div className={`${styles.table_box} toTop`} data-scroll>
								<h6 className="paraTxt color_white text_600 pb_20">
									Ideal space allocation example:
								</h6>
								<table border="1" cellpadding="10" cellspacing="0">
									<tbody>
										<tr>
											<td>Vesting Room</td>
											<td>250 SF</td>
										</tr>
										<tr>
											<td>Briefing Room</td>
											<td>150 SF</td>
										</tr>
										<tr>
											<td>Per Player</td>
											<td>7-8 SF</td>
										</tr>
										<tr>
											<td>Players</td>
											<td>20</td>
										</tr>
										<tr>
											<td>Total</td>
											<td>3000 SF</td>
										</tr>
									</tbody>
								</table>
								<p className="paraTxt_18 pt_20 color_white_opacity toTop" data-scroll>
									Every arena throughput varies, and the objective is to maximize the
									number of players passing through your arena each hour.
								</p>
							</div>
							<div className={`${styles.table_box} toTop`} data-scroll>
								<h6 className="paraTxt color_white text_600 pb_20">
									Laser Tag Game Rotation Stages{" "}
								</h6>
								<table border="1" cellpadding="10" cellspacing="0">
									<tbody>
										<tr>
											<td className={`${styles.yellow_td}`}>Stage</td>
											<td className={`${styles.yellow_td}`}>Duration</td>
										</tr>
										<tr>
											<td>Briefing</td>
											<td>2-4 minutes</td>
										</tr>
										<tr>
											<td>Vesting</td>
											<td>1-2 minutes</td>
										</tr>
										<tr>
											<td>Game Play</td>
											<td>1-2 minutes</td>
										</tr>
										<tr>
											<td>De-Vest</td>
											<td>1-2 minutes</td>
										</tr>
										<tr>
											<td>Score</td>
											<td>1-2 minutes</td>
										</tr>
										<tr>
											<td>Games per hour</td>
											<td>3-4 games</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</section>
				<section className={`${styles.how_apply_wrap} ptb_100`}>
					<div className="container">
					<h2 className={`${styles.info_head} heading_text_55 pb_30 hidden-xs`}>Design</h2>
						<div className={`${styles.service_flex}`}>
							<div className={`${styles.info_bx} toTop`} data-scroll>
								<h2 className={`${styles.info_head} heading_text_55 pb_30 mobile_center visible-xs`}>Design</h2>
								<p
									className={`${styles.info_para} paraTxt_18 color_black_opacity text_400 pb_10 toTop`}
									data-scroll
								>
									Building an exciting arena with eye-catching designs is among the most
									important factors in the success of any Laser Tag centre. The arena by
									itself must be a memorable experience for your guests.
								</p>
								<p
									className={`${styles.info_para} paraTxt_18 color_black_opacity text_400 pb_10 toTop`}
									data-scroll
								>
									We provide a fun, functional and competitive layout tailored to your
									available space using our 3d modelling software and extensive
									experience. We provide an arena package including partition layouts &
									details, electrical requirements and suggested audio/ special effects.
									We recommend having the arena themed or painted by a professional.
								</p>
								<p
									className={`${styles.info_para} paraTxt_18 text_400 pb_10 toTop`}
									data-scroll
								>
									We provide innovative layouts tailored to your floor plan, creating a
									standout experience for guests. The evolution of Laser Tag preferences
									towards multi-attraction centers has made complementary offerings like
									bowling, escape rooms, and game rooms essential for a modern Laser Tag
									experience.
								</p>
							</div>
							<div className={`${styles.img_bx} toTop`} data-scroll>
								<img className="img border_8" src={design.src} alt="design" />
							</div>
						</div>
					</div>
				</section>

				<LaserTagTestimonial TestimonialsData={LaserTagTestimonialsData.data} />

				{showPopup && (
					<div className={styles.popup_overlay}>
						<div className={styles.popup_content}>
							<div className={styles.popup_content_inner}>
								<div className={styles.popup_header}>
									<button onClick={closePopup}>
										<img src={closeIcn.src} alt="icon" />
									</button>
								</div>
								<div className={styles.popup_body}>
									<div className={`${styles.popup_flx} row`}>
										<div className={styles.popup_img_item}>
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${popUpData.PopUpImage.data.attributes.url}`}
												alt="product img"
											/>
										</div>
										<div className={styles.popup_content_item}>
											<h3 className={`${styles.popHead} text_24`}>{popUpData.Heading}</h3>
											<div className={`${styles.paraTxt} paraTxt_16`}>
												{parse(popUpData.Description)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	//Features that tag it superior
	const LaserTagRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/laser-tag-features-tags?populate=*`,
		ServerHeaders
	);
	const LaserTagData = await LaserTagRes.json();

	// home enthralled sliders
	const LaserTagTestimonials = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/laser-tag-testimonials?sort=order:desc&populate=*`,
		ServerHeaders
	);
	const LaserTagTestimonialsData = await LaserTagTestimonials.json();

	return {
		props: {
			LaserTagData,
			LaserTagTestimonialsData,
		},
		revalidate: 10,
	};
}
