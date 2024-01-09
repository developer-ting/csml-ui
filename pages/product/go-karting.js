// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImagePara from "@/components/ImagePara";
// import data from "../../pages/data-file-1";
import Data from "@/data/data-file-1";
// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../src/styles/pages/product/GoKarting.module.scss";

//	IMAGES	//
import banner from "../../public/img/product/go-karting/go-karting-banner.jpg";
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

/** Go Karting Page */
export default function GoKarting() {
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

	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.GoKartingPage}`}>
				<InsideBanner
					bannerTitle="Get Racing with Go-Karting"
					bannerImg={banner.src}
					mobileImg={banner.src}
				/>

				<section
					className={`${styles.banner_bottom_text_sec} dot_animation_box ptb_60`}
				>
					<div className="container">
						<p className="text_24 color_white_opacity l_h_6 toTop" data-scroll>
							Revitalize your entertainment center with versatile go-karting experience
							suitable for pure enjoyment at its finest.
						</p>
					</div>
				</section>

				<section className={`${styles.entertainmentCenter} ptb_100`}>
					<div className="container">
						<div className={`${styles.entertainmentCenterContent} pb_40 `}>
							<h2 className="heading_text_55 pb_20 toTop" data-scroll>
								Rev Up Your Entertainment Center with Go-Karting
							</h2>
							<p className="paraTxt_18 color_black_opacity l_h_6 toTop" data-scroll>
								Rev up your excitement with go-karting—an exhilarating, all-encompassing
								experience that captivates enthusiasts of every age and skill level!
								Strategic investments in meticulously designed tracks, high-quality
								karts and stringent safety measures ensure an unmatched adventure for
								patrons. Go-karting transcends conventional entertainment norms,
								providing a unique blend of adrenaline, competition and pure enjoyment.
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

				<section
					className={`${styles.sadikartTimingSoftware} dot_animation_box ptb_100`}
				>
					<div className="container">
						<h2
							className="heading_text_55 color_white pb_50 text_center toTop"
							data-scroll
						>
							SODIKART
						</h2>
						<div className={`${styles.partner_superior_flex} f_j`}>
							<div
								className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className={`${styles.partner_superior_content}`}>
									<img className="border_8" src={sadikartImg1.src} alt="img" />
									<div className={`${styles.desc_box}`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 color_white text_500 ">Global Dominance</h3>
										</div>
										<p className="paraTxt color_white">
											SODIKART, a global karting powerhouse, is distributed worldwide by
											CSML, leading every aspect of the karting experience.
										</p>
									</div>
								</div>
							</div>
							<div
								className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
								data-scroll
							>
								<div className={`${styles.partner_superior_content}`}>
									<img className="border_8" src={sadikartImg2.src} alt="img" />
									<div className={`${styles.desc_box}`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 color_white text_500">
												Innovative Leadership
											</h3>
										</div>
										<p className="paraTxt color_white">
											Renowned for daring strategies and patented innovations, SODIKART
											thrives as a financially robust entity on five continents, securing a
											pivotal position in the karting market.
										</p>
									</div>
								</div>
							</div>
						</div>

						<h2
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
										</div>
										<p className="paraTxt_18 l_h_4 pt_20">
											Seamlessly integrates with various timing hardware systems,
											transmitting lap times, updating profiles and generating
											comprehensive reports for optimized resource utilization.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className={`${styles.hardwareSection} pt_100 pb_60`}>
					<div className="container">
						<h2 className="heading_text_55 pb_50 toTop" data-scroll>
							Timing Hardware
						</h2>
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
			</main>
			<Footer />
		</div>
	);
}
