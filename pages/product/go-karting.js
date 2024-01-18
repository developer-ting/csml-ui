// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";
import { ServerHeaders } from "@/utils/RequestHeaders";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImagePara from "@/components/ImagePara";
// import data from "../../pages/data-file-1";
import Data from "@/data/data-file-1";
import GasKarts from "@/sections/product/gokarting/GasKarts";
import ElectricKarts from "@/sections/product/gokarting/ElectricKarts";
// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../src/styles/pages/product/GoKarting.module.scss";

//	IMAGES	//
import closeIcn from "../../public/img/close.svg";
import banner from "../../public/img/product/go-karting/go-karting-banner.jpg";
import go_karting_banner_mobile from "../../public/img/product/go-karting/go-karting-banner_mobile.jpg";
import entertainmentCenterImg1 from "../../public/img/product/go-karting/entertainment-center-img1.jpg";
import entertainmentCenterImg2 from "../../public/img/product/go-karting/entertainment-center-img2.jpg";
import entertainmentCenterImg3 from "../../public/img/product/go-karting/entertainment-center-img3.jpg";
import sadikartImg1 from "../../public/img/product/go-karting/sadikart-img1.jpg";
import sadikartImg2 from "../../public/img/product/go-karting/sadikart-img2.jpg";
import timingSoftwareImg1 from "../../public/img/product/go-karting/timing-software-img1.jpg";
import timingSoftwareImg2 from "../../public/img/product/go-karting/timing-software-img2.jpg";
import safetyBarriersImg1 from "../../public/img/product/go-karting/safety-barriers-img1.jpg";
import safetyBarriersImg2 from "../../public/img/product/go-karting/safety-barriers-img2.jpg";
import safetyBarriersImg3 from "../../public/img/product/go-karting/safety-barriers-img3.jpg";
import sodikart from "../../public/img/product/go-karting/sodikart.jpg";
import timing_sof1 from "../../public/img/product/go-karting/timing_sof1.jpg";
import plus_icon from "../../public/img/up_icon.svg";
import plus_icon1 from "../../public/img/plus_icon.svg";

/** Go Karting Page */
export default function GoKarting({ kartsTagData }) {
	const electricData = kartsTagData.data[0].attributes.electrickarts;
	const gasData = kartsTagData.data[0].attributes.gaskarts;
	const [showPopup, setShowPopup] = useState(false);
	const [gameIndex, setGameIndex] = useState(0);
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

	var settingsElectric = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
		autoplaySpeed: 5000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
				},
			},
		],
		afterChange: (i) => {
			fillProgress(i + 1);
		},
	};

	var settingsGas = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
		autoplaySpeed: 5000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
				},
			},
		],
		afterChange: (i) => {
			fillProgress(i + 1);
		},
	};

	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
				},
			},
		],
		afterChange: (i) => {
			fillProgress(i + 1);
		},
	};

	const [progressWidth, setProgressWidth] = useState(0);
	useEffect(() => {
		fillProgress(1);
		ScrollOut({
			once: true,
		});
	}, []);
	const fillProgress = (currInd) => {
		setProgressWidth((currInd / 3) * 100);
	};

	useEffect(() => {
		/** Function to set equal height of passed element in the DOM */
		// Get all elements with the class name 'equal-height'
		const elements = document.querySelectorAll(`.desc_box_he`);

		// Calculate the maximum height among all elements
		let maxHeight = 0;
		elements.forEach((element) => {
			maxHeight = Math.max(maxHeight, element.offsetHeight);
		});

		// Set the same height for all elements
		elements.forEach((element) => {
			element.style.height = `${maxHeight}px`;
		});
	}, []);

	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.GoKartingPage}`}>
				<InsideBanner
					bannerTitle="Get Racing With <br className='hidden-xs'>Go-Karting"
					bannerImg={banner.src}
					mobileImg={go_karting_banner_mobile.src}
				/>

				<section
					className={`${styles.banner_bottom_text_sec} dot_animation_box ptb_60`}
				>
					<div className="container">
						<p className="text_24 color_white_opacity l_h_6 toTop" data-scroll>
							Infuse a burst of excitement into your center with the thrilling world of
							Go Karting with CSML and Sodikart! A source of joy for all age groups,
							enhance your facility's charm with high-quality rental karts and advanced
							software and hardware. This winning combination ensures a perfect balance
							of safety and entertainment, elevating the overall experience for your
							visitors.
						</p>
					</div>
				</section>

				<section className={`${styles.entertainmentCenter} ptb_100`}>
					<div className="container">
						<div
							className={`${styles.entertainmentCenterContent} pb_40 toTop`}
							data-scroll
						>
							<h2 className="heading_text_55 pb_20">
								Speed into Excitement with Go Karting
							</h2>
							<p className="paraTxt_18 color_black_opacity l_h_6">
								Prepare for the exhilaration of go-karting—an adventure tailored for
								enthusiasts of all ages and skill levels! Thoughtful investments in
								precision-designed tracks, high-quality karts, and rigorous safety
								measures guarantee an unmatched experience for customers. In an
								exclusive partnership with CSML, SODIKART, a global leader in karting,
								has firmly established its presence in India, securing a significant
								role in the entertainment scene. Go-karting delivers a thrilling
								experience that harmonizes excitement, competition, and sheer enjoyment.
								Perfect for corporate events and parties, it seamlessly blends fun with
								friendly competition, offering an unforgettable experience for all
								participants.
							</p>
						</div>

						<div
							className={`${styles.entertainmentCenterImgBox} commonBorderAnimation whiteCommonBorderAnimation toTop`}
							data-scroll
						>
							<div className={`${styles.entertainmentCenterImgBoxStyle}`}>
								<img src={entertainmentCenterImg1.src} alt="Entertainment Center Img" />
							</div>
							<div className={`${styles.entertainmentCenterImgBoxStyle}`}>
								<div className={`${styles.entertainmentCenterImgBoxStyleRight}`}>
									<img
										src={entertainmentCenterImg3.src}
										alt="Entertainment Center Img"
									/>
								</div>
								<div className={`${styles.entertainmentCenterImgBoxStyleRight}`}>
									<img
										src={entertainmentCenterImg2.src}
										alt="Entertainment Center Img"
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className={`${styles.service_sec1} dot_animation_box`}>
					<div className="container">
						<div className={`${styles.service_flex} ptb_80`}>
							<div className={`${styles.info_bx} toTop`} data-scroll>
								<h2 className={`${styles.info_head} heading_text_55 pb_30 `}>
									SODIKART
								</h2>
								<p className={`${styles.info_para} paraTxt_18 text_400 opacity_one`}>
									SODIKART, a global karting powerhouse, has firmly established its
									dominance in India through an exclusive partnership with CSML. As the
									key player in every facet of the karting experience, SODIKART stands
									out nationally. Renowned for innovative leadership marked by daring
									strategies and patented innovations, the brand not only thrives
									globally but also holds a strong financial position in the karting
									market across five continents.
								</p>
								<p className={`${styles.info_para} paraTxt_18 text_400 opacity_one`}>
									CSML plays a pivotal role in ensuring the seamless distribution of
									SODIKART, ushering in a new era of karting excellence in India.
								</p>
							</div>
							<div
								className={`${styles.img_bx} commonBorderAnimation toTop`}
								data-scroll
							>
								<img className="img border_8" src={sodikart.src} />
							</div>
						</div>
					</div>
					{/* <ContactForm /> */}
				</section>

				<section className={`${styles.karts_main} pt_100`}>
					<div className="container">
						<div className={`${styles.karts_title} pb_40 `}>
							<h2 className="heading_text_55 pb_10 toTop" data-scroll>
								KARTS
							</h2>
							<p className="paraTxt_18 text_600 toTop" data-scroll>
								Professional grade Rental Karts for Unmatched Performance
							</p>
						</div>
					</div>
					<div className={`${styles.ecommerce_slider_main} toTop`} data-scroll>
						<div className="container">
							<div className={`${styles.title_txt} pb_30`}>
								<h2 className="heading_text_40 text_700 toTop" data-scroll>
									Gas Karts
								</h2>
							</div>
						</div>

						<div className={`${styles.partner_superior_flex_new} toTop`} data-scroll>
							<Slider {...settingsGas}>
								{gasData.map((item, productItemIndex) => {
									return (
										<div className={`${styles.showcase_box}`}>
											<div className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}>
												<div
													className={`${styles.img_box}`}
												>
													<img
														className="border_8"
														src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.Image.data.attributes.url}`}
														alt="img"
													/>
												</div>
												<div className={`${styles.desc_box}`}>
													<div className={`${styles.desc_title} f_j`}>
														<h3 className="text_24 text_700 pb_20">{item.title}</h3>
														<a>
															<button
																className="btn_plus"
																onClick={() => openPopup(productItemIndex)}
															>
																<span className={`${styles.arrow_one} arrow_one`}>
																	<img src={plus_icon1.src} />
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
					</div>
					{/* <GasKarts data={kartsTagData} /> */}
					{/* <ElectricKarts data={kartsTagData} /> */}

					<div
						className={`${styles.ecommerce_slider_main} pt_60 pb_100 toTop`}
						data-scroll
					>
						<div className="container">
							<div className={`${styles.title_txt} pb_30`}>
								<h2 className="heading_text_40 text_700 toTop" data-scroll>
									Electric Karts
								</h2>
							</div>
						</div>

						<div className={`${styles.partner_superior_flex_new} toTop`} data-scroll>
							<Slider {...settingsElectric}>
								{electricData.map((item, productItemIndex) => {
									return (
										<div className={`${styles.showcase_box}`}>
											<div className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}>
												{/* {console.log(item)} */}
												<div
													className={`${styles.img_box}`}
												>
													
													<img
														className="border_8"
														src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.Image.data.attributes.url}`}
														alt="img"
													/>
												</div>
												<div className={`${styles.desc_box}`}>
													<div className={`${styles.desc_title} f_j`}>
														<h3 className="text_24 text_700 pb_20">{item.title}</h3>
														<a>
															<button
																className="btn_plus"
																onClick={() => openPopup(productItemIndex)}
															>
																<span className={`${styles.arrow_one} arrow_one`}>
																	<img src={plus_icon1.src} />
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
					</div>
				</section>

				<section
					className={`${styles.sadikartTimingSoftware} dot_animation_box ptb_100`}
				>
					<div className="container">
						<div className={`${styles.title_text} pb_40 toTop`} data-scroll>
							<h2 className="heading_text_55 color_white pb_30 text_center">
								Timing Software
							</h2>
							<p className="paraTxt_18 color_white pb_20 opacity_one">
								RaceFacer, distributed by CSML, serves as crucial go-kart timing
								software and a social network for karting, enhancing the overall
								experience at leisure go-karting tracks. Its importance stems from
								several reasons, making it an essential component for enthusiasts and
								track operators alike.
							</p>
						</div>
						<div className={`${styles.partner_superior_flex} d_f`}>
							<div
								className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className={`${styles.partner_superior_content}`}>
									<img className="border_8" src={timing_sof1.src} alt="img" />
									<div className={`${styles.desc_box} desc_box_he`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 color_white text_500 ">Safety</h3>
										</div>
										<p className="paraTxt color_white">
											Ensures races are safe for both experienced and inexperienced
											drivers.
										</p>
									</div>
								</div>
							</div>
							<div
								className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className={`${styles.partner_superior_content}`}>
									<img className="border_8" src={timing_sof1.src} alt="img" />
									<div className={`${styles.desc_box} desc_box_he`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 color_white text_500">
												Performance Monitoring
											</h3>
										</div>
										<p className="paraTxt color_white">
											Helps drivers track and improve lap times for self-improvement and
											friendly competition.
										</p>
									</div>
								</div>
							</div>
							<div
								className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className={`${styles.partner_superior_content}`}>
									<img className="border_8" src={timing_sof1.src} alt="img" />
									<div className={`${styles.desc_box} desc_box_he`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 color_white text_500 ">
												Challenges & Competitions
											</h3>
										</div>
										<p className="paraTxt color_white">
											llows exciting challenges like fastest lap times, time trials, or
											endurance races.
										</p>
									</div>
								</div>
							</div>
							<div
								className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className={`${styles.partner_superior_content}`}>
									<img className="border_8" src={timing_sof1.src} alt="img" />
									<div className={`${styles.desc_box} desc_box_he`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 color_white text_500">Feedback</h3>
										</div>
										<p className="paraTxt color_white">
											Provides valuable insights on driving skills, aiding skill
											enhancement and confidence building.
										</p>
									</div>
								</div>
							</div>
							<div
								className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className={`${styles.partner_superior_content}`}>
									<img className="border_8" src={timing_sof1.src} alt="img" />
									<div className={`${styles.desc_box} desc_box_he`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 color_white text_500 ">
												Spectator Engagement
											</h3>
										</div>
										<p className="paraTxt color_white">
											Displays real-time race results, creating an engaging experience for
											spectators.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* <h2
							className="heading_text_55 color_white pt_100 pb_50 text_center toTop"
							data-scroll
						>
							Timing Software
						</h2>
						<div className={`${styles.luminaries_flex} toTop`}>
							<div
								className={`${styles.luminaries_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className="dot_one dots_p"></div>
								<div className="dot_two dots_p"></div>
								<div className="dot_three dots_p"></div>
								<div className={`${styles.luminaries_content}`}>
									<img className="border_8" src={timingSoftwareImg1.src} alt="img" />
									<div className={`${styles.desc_box}`}>
										<div className={`${styles.desc_title}`}>
											<h3 className="text_24 text_600">Innovative Environment</h3>
											<img className="img" src={plus_icon.src} />
										</div>
										<p className="paraTxt_18 l_h_4 pt_20">
											Elevate go-karting with advanced timing software, offering precise
											data, real-time results, customizable displays, efficient race
											management, insightful analysis and enhanced customer engagement.
										</p>
									</div>
								</div>
							</div>
							<div
								className={`${styles.luminaries_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className="dot_one dots_p"></div>
								<div className="dot_two dots_p"></div>
								<div className="dot_three dots_p"></div>
								<div className={`${styles.luminaries_content}`}>
									<img className="border_8" src={timingSoftwareImg2.src} alt="img" />
									<div className={`${styles.desc_box}`}>
										<div className={`${styles.desc_title}`}>
											<h3 className="text_24 text_600">Continuous Growth</h3>
											<img className="img" src={plus_icon.src} />
										</div>
										<p className="paraTxt_18 l_h_4 pt_20">
											Seamlessly integrates with various timing hardware systems,
											transmitting lap times, updating profiles and generating
											comprehensive reports for optimized resource utilization.
										</p>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</section>

				<section className={`${styles.hardwareSection} pt_100 pb_60`}>
					<div className="container">
						<div>
							<h2 className="heading_text_55 pb_20 toTop" data-scroll>
								Timing Hardware
							</h2>
							<p
								className="paraTxt_18 color_black_opacity l_h_6 pb_40 toTop"
								data-scroll
							>
								Creating a safe and thrilling go-karting experience relies on strategic
								investments in high-quality hardware, <br className="hidden-xs" />
								establishing an environment that prioritizes safety and enhances
								enjoyment:
							</p>
						</div>
						{Data.map((item, index) => (
							<ImagePara
								key={index}
								title={item.title}
								desc={item.desc}
								boxImg={item.image.src}
							/>
						))}
					</div>
				</section>

				<section
					className={`${styles.safety_barriers_section} dot_animation_box ptb_100`}
				>
					<div className={`${styles.our_guiding_values_main}`}>
						<div className={`${styles.life_csml_content} toTop`} data-scroll>
							<h2 className="heading_text_55 color_white pb_40">Safety Barriers</h2>
						</div>
						<div className={`${styles.partner_superior_flex} toTop`} data-scroll>
							<Slider {...settings}>
								<div className={`${styles.partner_superior_box} commonBorderAnimation`}>
									<div className={`${styles.partner_superior_content}`}>
										<img
											className="border_8 width_100"
											src={safetyBarriersImg1.src}
											alt="img"
										/>
										<div className={`${styles.desc_box}`}>
											<div className={`${styles.desc_title} pb_20 f_j`}>
												<h3 className="text_24 color_white text_500 ">
													FIA Approved Guardians
												</h3>
											</div>
											<p className="paraTxt_18 color_white_opacity">
												CSML introduces FIA approved Go Kart Safety Barriers, crafted with
												precision to redefine safety standards in go-karting.
											</p>
										</div>
									</div>
								</div>
								<div className={`${styles.partner_superior_box} commonBorderAnimation`}>
									<div className={`${styles.partner_superior_content}`}>
										<img
											className="border_8 width_100"
											src={safetyBarriersImg2.src}
											alt="img"
										/>
										<div className={`${styles.desc_box}`}>
											<div className={`${styles.desc_title} pb_20 f_j`}>
												<h3 className="text_24 color_white text_500">
													Versatile Protection
												</h3>
											</div>
											<p className="paraTxt_18 color_white_opacity">
												These barriers absorb impact forces, offer adaptable configurations,
												enhance visibility, ensure quick installation and redefine
												durability with robust materials.
											</p>
										</div>
									</div>
								</div>
								<div className={`${styles.partner_superior_box} commonBorderAnimation`}>
									<div className={`${styles.partner_superior_content}`}>
										<img
											className="border_8 width_100"
											src={safetyBarriersImg3.src}
											alt="img"
										/>
										<div className={`${styles.desc_box}`}>
											<div className={`${styles.desc_title} pb_20 f_j`}>
												<h3 className="text_24 color_white text_500">
													Customization for Safety
												</h3>
											</div>
											<p className="paraTxt_18 color_white_opacity">
												Blend aesthetics and safety with customizable options, providing a
												safer and more enjoyable go-karting experience where every twist and
												turn is backed by security.
											</p>
										</div>
									</div>
								</div>
							</Slider>
						</div>
					</div>
					<div className="container">
						<div className={`${styles.progress_div} pb_100 toTop`} data-scroll>
							<div className={`${styles.progress_bar}`}>
								<div
									style={{ width: `${progressWidth}%` }}
									className={`${styles.color_div}`}
								></div>
							</div>
						</div>
					</div>
				</section>

				{showPopup && (
					<div className={styles.popup_overlay}>
						<div className={styles.popup_content}>
							<div className={styles.popup_content_inner}>
								<div className={styles.popup_header}>
									<button onClick={closePopup}>
										<img src={closeIcn.src} alt="" />
									</button>
								</div>
								<div className={styles.popup_body}>
									<div className={`${styles.popup_flx} row`}>
										<div className={styles.popup_img_item}>
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${electricData[gameIndex].Image.data.attributes.url}`}
												alt=""
											/>
										</div>
										<div className={styles.popup_content_item}>
											<h3 className={`${styles.popHead} text_24`}>
												{electricData[gameIndex].title}
											</h3>
											<div className={`${styles.paraTxt} paraTxt_16`}>
												{parse(electricData[gameIndex].desc)}
											</div>
											<div className={`${styles.li_text} pt_10`}>
												<h4 className="text_md text_500 pb_20">Dimensions</h4>
												{parse(electricData[gameIndex].ulList)}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{showPopup && (
					<div className={styles.popup_overlay}>
						<div className={styles.popup_content}>
							<div className={styles.popup_content_inner}>
								<div className={styles.popup_header}>
									<button onClick={closePopup}>
										<img src={closeIcn.src} alt="" />
									</button>
								</div>
								<div className={styles.popup_body}>
									<div className={`${styles.popup_flx} row`}>
										<div className={styles.popup_img_item}>
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${gasData[gameIndex].Image.data.attributes.url}`}
												alt=""
											/>
										</div>
										<div className={styles.popup_content_item}>
											<h3 className={`${styles.popHead} text_24`}>
												{gasData[gameIndex].title}
											</h3>
											<div className={`${styles.paraTxt} paraTxt_16`}>
												{parse(gasData[gameIndex].desc)}
											</div>
										</div>
									</div>
									<div className={`${styles.li_text} pt_10`}>
										<h4 className="text_md text_500 pb_20">Dimensions</h4>
										{parse(gasData[gameIndex].ulList)}
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
	const kartsTagRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/karts-gas-electrics?populate[gaskarts][populate]=Image&populate[electrickarts][populate]=Image`,
		ServerHeaders
	);
	const kartsTagData = await kartsTagRes.json();

	return {
		props: {
			kartsTagData,
		},
		revalidate: 10,
	};
}
