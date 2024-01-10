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

/** Services Page */
export default function ServiceConsultancy() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
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
					<Tabs>
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
							{/* ________repaet tabpanel_________ */}
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
					</Tabs>
					<ContactTab TabTitle="Partner with us for a successful journey in the world of entertainment centers. Your success is our unwavering commitment." />
				</section>
			</main>
			<Footer />
		</div>
	);
}
