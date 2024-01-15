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

// STYLES //
import styles from "../../src/styles/pages/services/ServiceManagement.module.scss";

//	IMAGES	//
import management_banner from "../../public/img/services_management/management_banner.jpg";
import management_banner_mobile from "../../public/img/services_management/management_banner_mobile.jpg";
import Sec1_img from "../../public/img/services_management/mangement_img.jpg";

/** Services Page */
export default function ServiceManagement() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.ServicesManagementPage}`}>
				<InsideBanner
					bannerTitle="CSML’s Commitment to Efficiency, <br/>
                    Expertise, Excellence"
					bannerImg={management_banner.src}
					mobileImg={management_banner_mobile.src}
				/>
				<section className={`${styles.service_sec1} dot_animation_box`}>
					<div className="container">
						<div className={`${styles.service_flex} pt_80`}>
							<div className={`${styles.info_bx}`}>
								<h2
									className={`${styles.info_head} heading_text_55 pb_30 toTop`}
									data-scroll
								>
									Elevate FEC Success with Our Expert Management Contract
								</h2>
								<div className={`${styles.info_para} toTop`} data-scroll>
									<p className="paraTxt_18 text_400 opacity_one">
										Experience operational excellence with our tailored Management Contract for Family Entertainment Centers (FECs. Our expert team handles day-to-day operations, from technical management to enhancing customer experiences, ensuring a thriving center.
									</p>
									<p className="paraTxt_18 text_400 opacity_one	">
										Focus on your strategic objectives while we manage operational intricacies. Our team embodies expertise, efficiency, and unwavering customer-centricity to boost profitability and uphold your FEC's reputation.
									</p>
								</div>
							</div>
							<div className={`${styles.img_bx} toTop`} data-scroll>
								<img className="img b_r_7" src={Sec1_img.src} />
							</div>
						</div>
					</div>
					<ContactTab
						TabTitle="Partner with us for a stress-free, flourishing FEC. <br/>
                        Your success is our commitment."
					/>
				</section>
			</main>
			<Footer />
		</div>
	);
}
