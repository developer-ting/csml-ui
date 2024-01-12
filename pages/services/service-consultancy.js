// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import ContactTab from "@/components/ContactTab";
import Loader from "@/components/Loader";
// SECTIONS //

// PLUGINS //
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import "react-tabs/style/react-tabs.css";
import styles from "../../src/styles/pages/services/ServiceConsultancy.module.scss";

//	IMAGES	//
import consultancy_banner from "../../public/img/services_consultancy/consultancy_banner.jpg";
import consultancy_banner_mobile from "../../public/img/services_consultancy/consultancy_banner_mobile.jpg";
import Sec1_img from "../../public/img/services_consultancy/consultancy_img.jpg";
import Tabs_img1 from "../../public/img/services_consultancy/tab_img1.jpg";
import Tabs_img2 from "../../public/img/services_consultancy/tab_img2.jpg";
import Tabs_img3 from "../../public/img/services_consultancy/tab_img3.jpg";

import turning_vision_into_reality from "../../public/img/services_consultancy/turning_vision_into_reality.jpg";
import planning_and_layout_design from "../../public/img/services_consultancy/planning_and_layout_design.jpg";
import suggestive_game from "../../public/img/services_consultancy/suggestive_game.jpg";
import exclusive_istribution from "../../public/img/services_consultancy/exclusive_istribution.jpg";
import tailored_amusement_equipment_selection from "../../public/img/services_consultancy/tailored_amusement_equipment_selection.jpg";
import logistics_mport from "../../public/img/services_consultancy/logistics_mport.jpg";
import installation_training from "../../public/img/services_consultancy/installation_training.jpg";
import pre_post_operation_support_services from "../../public/img/services_consultancy/pre_post_operation_support_services.jpg";

/** Services Page */
export default function ServiceConsultancy() {
  const [isShowMore, setIsShowMore] = useState(false);
	/** toggleReadMoreLess function */
	const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };

	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	var settings = {
		pauseOnHover: false,
		arrows: false,
		centerMode: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					variableWidth: true,
				},
			},
			{
				breakpoint: 767,
				settings: {
					// // autoplay: true,
					// slidesToShow: 1,
					// // slidesToScroll: 1,
					variableWidth: true,
				},
			},
		],
	};
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.ServicesConsultancyPage}`}>
				<InsideBanner
					bannerTitle="Services Aligned with your FEC Success"
					bannerImg={consultancy_banner.src}
					mobileImg={consultancy_banner_mobile.src}
				/>
				<section className={`${styles.service_sec1} dot_animation_box`}>
					<div className="container">
						<div className={`${styles.service_flex} ptb_80`}>
							<div className={`${styles.info_bx} toTop`} data-scroll>
								<h2 className={`${styles.info_head} heading_text_55 pb_30 `}>
									Turnkey Consultancy Solution for Entertainment Center Success
								</h2>
								<p className={`${styles.info_para} paraTxt_18 text_400 opacity_one`}>
									CSML is the pioneering force behind exceptional Indoor Amusement
									Centers (IAC). We specialize in turning ordinary spaces into
									extraordinary amusement centers. Our consultancy services are designed
									to guide you through every step of the process, from conceptualization
									to execution.As industry pioneers in Indoor Amusement Centers (IAC), we
									offer meticulously tailored end-to-end solutions to streamline the
									complexities of managing multiple providers.
								</p>
							</div>
							<div className={`${styles.img_bx} toTop`} data-scroll>
								<img className="img b_r_7" src={Sec1_img.src} />
							</div>
						</div>
					</div>
					{/* <ContactForm /> */}
				</section>
				<section className={`${styles.service_tabsec} pt_80`}>
					<div className="container">
						<h2
							className={`${styles.sec_title} heading_text_55 pb_50 toTop`}
							data-scroll
						>
							Comprehensive Services for
							<br /> Your Center Success
						</h2>
					</div>

					<div className={`${styles.for_item} ${styles.for_item_full} pb_60`}>
							<Slider
								{...settings}
								asNavFor={nav1}
								ref={(slider2) => setNav2(slider2)}
								swipeToSlide={true}
								focusOnSelect={true}
								variableWidth={true}
							>
								<div className={`${styles.slide_item}`}>
									<p>Turning Vision into Reality</p>
								</div>
								<div className={`${styles.slide_item}`}>
									<p>Planning and Layout Design</p>
								</div>
								<div className={`${styles.slide_item}`}>
									<p>Suggestive Game Mix</p>
								</div>
								<div className={`${styles.slide_item}`}>
									<p>Exclusive Distribution</p>
								</div>
								<div className={`${styles.slide_item}`}>
									<p>Tailored Amusement Equipment Selection</p>
								</div>
								<div className={`${styles.slide_item}`}>
									<p>Logistics & Import</p>
								</div>
								<div className={`${styles.slide_item}`}>
									<p>Installation & Training</p>
								</div>
								<div className={`${styles.slide_item}`}>
									<p>Pre & Post Operation Support Services</p>
								</div>
							</Slider>
						</div>

					<div className="container">
						<Slider
							className={`${styles.nav_item} toTop`}
							asNavFor={nav2}
							arrows={false}
							fade={true}
							// speed={1200}
							slidesToShow={1}
							ref={(slider1) => setNav1(slider1)}
						>
							<div className={`${styles.slide_item_two}`}>
								<div className={`${styles.tabs_bx}`}>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={turning_vision_into_reality.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
										 Turning Vision into Reality
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											Our expertise in optimizing available space transforms it into a
											bespoke arcade amusement hub. We provide specialized layout plans
											designed to suit your location, complete with electrical layout
											plans, operating manuals, and ongoing support.
											
										</p>
									</div>
								</div>
							</div>
							<div className={`${styles.slide_item_two}`}>
								<div className={`${styles.tabs_bx}`}>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={planning_and_layout_design.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Planning and Layout Design
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											Our expertise in optimizing available space transforms it into a bespoke arcade amusement hub. We provide specialized layout plans designed to suit your location, complete with electrical layout plans, operating manuals, and ongoing support.
										</p>
									</div>
								</div>
							</div>

							<div className={`${styles.slide_item_two}`}>
								<div className={`${styles.tabs_bx}`} >
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={suggestive_game.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Suggestive Game Mix
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											At CSML, we go beyond providing amusement equipment; we craft unforgettable experiences. Our approach is rooted in the thorough consideration of your target audience's demographics, age groups, spending capacity, and budget range. We take pride in offering a selection of amusement equipment that not only drives high revenue but also resonates with the interests of your guests.
										</p>
									</div>
								</div>
							</div>

							<div className={`${styles.slide_item_two}`}>
									<div className={`${styles.tabs_bx}`} >
										<div
											className={`${styles.tabs_img}  border_animation white_border_animation`}
										>
											<img className="img border_8" src={exclusive_istribution.src} />
										</div>
										<div className={`${styles.tabs_info}`}>
											<p className={`${styles.info_title} font_secondary`}>
											Exclusive Distribution
											</p>
											<p
												className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
											>
												What sets us apart is our exclusive distribution of industry-leading brands. Our substantial buying power and involvement in multiple projects enable us to offer competitive prices without compromising on quality. This ensures that you receive top-notch amusement equipment that aligns with your budgetary requirements.
											</p>
										</div>
									</div>
							</div>

							<div className={`${styles.slide_item_two}`}>
									<div className={`${styles.tabs_bx}`}>
										<div
											className={`${styles.tabs_img}  border_animation white_border_animation`}
										>
											<img className="img border_8" src={tailored_amusement_equipment_selection.src} />
										</div>
										<div className={`${styles.tabs_info}`}>
											<p className={`${styles.info_title} font_secondary`}>
												Tailored Amusement Equipment Selection
											</p>
											<p
												className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
											>
												With our expertise, we assist you in selecting the ideal blend of amusement equipment, catering to high-thrill experiences and family-friendly attractions. This guarantees that your entertainment center becomes a town favorite, leaving visitors with cherished memories.
											</p>
										</div>
									</div>
							</div>
							<div className={`${styles.slide_item_two}`}>
									<div className={`${styles.tabs_bx}`}>
										<div
											className={`${styles.tabs_img}  border_animation white_border_animation`}
										>
											<img className="img border_8" src={logistics_mport.src} />
										</div>
										<div className={`${styles.tabs_info}`}>
											<p className={`${styles.info_title} font_secondary`}>
												Logistics & Import
											</p>
											<p
												className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
											>
												We simplify the entire process of obtaining amusement equipment from worldwide suppliers. From overseeing ocean freight to managing import clearance, we ensure a seamless journey for the equipment to reach your location.
											</p>
										</div>
									</div>
							</div>
							<div className={`${styles.slide_item_two}`}>
									<div className={`${styles.tabs_bx}`} >
										<div
											className={`${styles.tabs_img}  border_animation white_border_animation`}
										>
											<img className="img border_8" src={installation_training.src} />
										</div>
										<div className={`${styles.tabs_info}`}>
											<p className={`${styles.info_title} font_secondary`}>
												Installation & Training
											</p>
											<p
												className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
											>
												Our skilled installers take charge of setting up and thoroughly testing the amusement equipment, ensuring flawless operation. Furthermore, our comprehensive training program empowers your staff with hands-on experience in operating the machines and equips them with the essential knowledge to ensure seamless venue operations.
											</p>
										</div>
									</div>
							</div>
							<div className={`${styles.slide_item_two}`}>
									<div className={`${styles.tabs_bx}`}>
										<div
											className={`${styles.tabs_img}  border_animation white_border_animation`}
										>
											<img className="img border_8" src={pre_post_operation_support_services.src} />
										</div>
										<div className={`${styles.tabs_info}`}>
											<p className={`${styles.info_title} font_secondary`}>
											Pre & Post Operation Support Services
											</p>
											<p
												className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
											>
												At CSML, our dedication to your success extends beyond just consultancy and equipment. With our Pre & Post Operation Support services, we ensure that your operations run seamlessly by providing the essential resources and guidance you need.
											</p>
											{isShowMore && (
													<div className="pt_20">
														<h4 className="paraTxt_18 font_secondary text_500">
															Recruitment Checklist
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Our detailed staffing guide helps you assemble the right team, ensuring efficiency and excellence in your operations.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
														 Pricing Structure
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Optimize your revenue with our expert suggestions for pricing games, activities, and party packages.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
														 Operational Supplies
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Stay stocked and prepared with our comprehensive list of redemption tickets, gifts, and spares.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
														 Gift Categories
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Enhance the customer experience with our curated gift category recommendations, adding that extra touch to your center.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
														 Pay-out Settings
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Fine-tune prize/ticket game payout settings with expert guidance to ensure optimal player engagement and operational efficiency.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
														Checklist Creation
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Efficiently manage your operations with our comprehensive checklists, covering everything from daily operations to asset management, maintenance, housekeeping, and more.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
															Debit Card System
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Equip your team for success with thorough Debit Card system training, catering to back-office owners, managers, cashiers, and redemption staff.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
														  Redemption Counter
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Enhance customer satisfaction by setting up an efficient redemption counter with our assistance.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
															On-Job Training
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															We provide a 7-day training program to assist your team in achieving smooth operations and equipment maintenance.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
															SOPs (Standard Operating Procedures)
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															We offer a comprehensive set of Standard Operating Procedures to streamline your operations further.
														</p>
														<h4 className="paraTxt_18 font_secondary text_500 pt_10">
															Post-Opening Support
														</h4>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															For two months following your center's grand opening, we offer expert guidance and support to ensure your success.
														</p>
														<p
															className={`${styles.info_desc} text_xs font_secondary opacity_one`}
														>
															Partner with us for a successful journey in the world of entertainment centers. Your success is our unwavering commitment.
														</p>
													</div>
												)}

												<a className="pt_20 paraTxt_18 font_secondary opacity_one" onClick={toggleReadMoreLess}>
													{isShowMore ? "Read Less" : "Read More"}
												</a>
										</div>
									</div>
							</div>
							

						</Slider>
					</div>

					{/* <Tabs>
						<TabList>
							<Tab>Planning and Layout Design</Tab>
							<Tab>Exclusive Distribution</Tab>
							<Tab>Tailored Amusement Equipment Selection</Tab>
							<Tab>Logistics & Import</Tab>
							<Tab>Installation & Training</Tab>
							<Tab>Pre & Post Operation Support Services</Tab>
						</TabList>
						<div className="container">
							<TabPanel>
								<div className={`${styles.tabs_bx} toTop`} data-scroll>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={Tabs_img1.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Planning and Layout Design
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											Our expertise in optimizing available space transforms it into a
											bespoke arcade amusement hub. We provide specialized layout plans
											designed to suit your location, complete with electrical layout
											plans, operating manuals, and ongoing support.
										</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className={`${styles.tabs_bx} `}>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={Tabs_img2.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Exclusive Distribution
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											What sets us apart is our exclusive distribution of industry-leading
											brands. Our substantial buying power and involvement in multiple
											projects enable us to offer competitive prices without compromising
											on quality. This ensures that you receive top-notch amusement
											equipment that aligns with your budgetary requirements.
										</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className={`${styles.tabs_bx} `}>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={Tabs_img3.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Tailored Amusement Equipment Selection
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											At CSML, we specialize in curating a diverse mix of entertainment
											equipment tailored to high-thrill and family-friendly experiences. We
											prioritize creating unforgettable experiences by analyzing your
											audience's demographics, age groups, and budget considerations. Our
											goal is to maximize revenue while appealing to your guests' specific
											interests.
										</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className={`${styles.tabs_bx} toTop`} data-scroll>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={Tabs_img1.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Planning and Layout Design
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											Our expertise in optimizing available space transforms it into a
											bespoke arcade amusement hub. We provide specialized layout plans
											designed to suit your location, complete with electrical layout
											plans, operating manuals, and ongoing support.
										</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className={`${styles.tabs_bx} `}>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={Tabs_img2.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Exclusive Distribution
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											What sets us apart is our exclusive distribution of industry-leading
											brands. Our substantial buying power and involvement in multiple
											projects enable us to offer competitive prices without compromising
											on quality. This ensures that you receive top-notch amusement
											equipment that aligns with your budgetary requirements.
										</p>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className={`${styles.tabs_bx} `}>
									<div
										className={`${styles.tabs_img}  border_animation white_border_animation`}
									>
										<img className="img border_8" src={Tabs_img3.src} />
									</div>
									<div className={`${styles.tabs_info}`}>
										<p className={`${styles.info_title} font_secondary`}>
											Tailored Amusement Equipment Selection
										</p>
										<p
											className={`${styles.info_desc} paraTxt_18 font_secondary opacity_one`}
										>
											At CSML, we specialize in curating a diverse mix of entertainment
											equipment tailored to high-thrill and family-friendly experiences. We
											prioritize creating unforgettable experiences by analyzing your
											audience's demographics, age groups, and budget considerations. Our
											goal is to maximize revenue while appealing to your guests' specific
											interests.
										</p>
									</div>
								</div>
							</TabPanel>
						</div>
					</Tabs> */}
					<ContactTab TabTitle="Partner with us for a successful journey in the world of entertainment centers. Your success is our unwavering commitment." />
				</section>
			</main>
			<Footer />
		</div>
	);
}
