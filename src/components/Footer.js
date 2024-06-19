// MODULES //
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from "react";
import Link from "next/link";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Footer.module.scss";

// IMAGES //
import csml_logo from "../../public/img/csml_logo.svg";
import ting_logo from "../../public/img/ting_logo.svg";
import arrow from "../../public/img/arrow.svg";
import facebook from "../../public/img/facebook.svg";
import twitter from "../../public/img/twitter.svg";
import instagram from "../../public/img/instagram.svg";
import youtube from "../../public/img/youtube.svg";
import linkedin from "../../public/img/linkedin.svg";
import white_down_arrow from "../../public/img/white_down_arrow.svg";

/** Footer Component */
const Footer = () => {
	const currentYear = new Date().getFullYear();
	const [toggleState, settoggleState] = useState(0);

	const toggleTab = (index) => {
		if (toggleState == index) {
			return settoggleState(null);
		}
		settoggleState(index);
	};

	const [isSubmited, setIsSubmited] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const Headers = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
			},
			body: JSON.stringify({
				data: data,
			}),
		};

		async function sendData() {
			await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/footer-newsletter-forms`,
				Headers
			)
				.then((data) => data.json())
				.then((data) => {
					reset(), setIsSubmited(true);
				})
				.catch((err) => console.log(err));
		}

		sendData();
	};

	return (
		<footer className={`${styles.main_footer}`}>
			<div className={`${styles.bg_footer}`}>
				<div className={`${styles.footerMenuMain}`}>
					<div className="container">
						<div className={`${styles.footerMenuFlex}`}>
							<div className={`${styles.footerMenuItem_left}`}>
								<div className={`${styles.footerLogo}`}>
									<Link href="/">
										<a>
											<img src={csml_logo.src} alt="logo" />
										</a>
									</Link>
								</div>
							</div>
							<div className={`${styles.footerMenuItem_center}`}>
								<div className={`${styles.footerMenuInnerFlex}`}>
									<ul className={`${styles.footerMenuInnerItem} text_reg`}>
										<li>
											<Link href="/about">About Us</Link>
										</li>
										<li
											className={`${styles.sub_menu_box} ${
												toggleState === 1 && styles.drop_down_active
											}`}
											onClick={() => toggleTab(1)}
										>
											<div className={`${styles.sub_menu_flex} d_f`}>
												<a className="">Product Portfolio</a>
												<img
													src={white_down_arrow.src}
													className={`${styles.white_down_arrow}`}
													alt="down"
												/>
											</div>
											<div className={`${styles.sub_menu_list}`}>
												<p>
													<Link href="/product/brunswick-bowling">
														<a className="">Brunswick Bowling</a>
													</Link>
												</p>
												<p>
													<Link href="/product/arcade-games">
														<a className="">Arcade Games</a>
													</Link>
												</p>
												<p>
													<Link href="/product/trampoline">
														<a className="">Trampoline</a>
													</Link>
												</p>
												<p>
													<Link href="/product/softplay">
														<a className="">Soft Play</a>
													</Link>
												</p>
												<p>
													<Link href="/product/laser-tag">
														<a className="">Laser Tag</a>
													</Link>
												</p>
												<p>
													<Link href="/product/go-karting">
														<a className="">Go Karting</a>
													</Link>
												</p>
												<p>
													<Link href="/product/intercard/debit-card-system">
														<a className="">Intercard</a>
													</Link>
												</p>
											</div>
										</li>
										<li>
											<Link href="/new-releases">New Releases</Link>
										</li>
										<li
											className={`${styles.sub_menu_box} ${
												toggleState === 2 && styles.drop_down_active
											}`}
											onClick={() => toggleTab(2)}
										>
											<div className={`${styles.sub_menu_flex} d_f`}>
												<a className="">Services</a>
												<img
													src={white_down_arrow.src}
													className={`${styles.white_down_arrow}`}
													alt="down"
												/>
											</div>
											<div className={`${styles.sub_menu_list}`}>
												<p>
													<Link href="/services/service-consultancy">
														<a className="">Consultancy Services</a>
													</Link>
												</p>
												<p>
													<Link href="/services/service-management">
														<a className="">Management Contract </a>
													</Link>
												</p>
											</div>
										</li>
										<li>
											<Link href="/privacy-policy">Privacy Policy</Link>
										</li>
									</ul>

									<ul className={`${styles.footerMenuInnerItem} text_reg`}>
										<li>
											<Link href="/project">Projects</Link>
										</li>
										<li>
											<Link href="/career">Careers</Link>
										</li>
										<li>
											<Link href="/contact">Contact Us</Link>
										</li>
										<li>
											<Link href="/blogs">Blog</Link>
										</li>
										<li>
											
											<Link href="/img/pdf/footer_brochure.pdf">
											<a target="_blank" rel="noreferrer" className="">Brochure</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
							<div className={`${styles.footerMenuItem_right}`}>
								<p className="text_xs color_white opacity_one pb_20 l_h_6">
									Subscribe now to stay updated on industry trends and insights for your
									FEC's success.
								</p>
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className={`${styles.input_group}`}>
										<input
											className={`${styles.input_field}`}
											type="email"
											name="email"
											id="email"
											placeholder="Your-email@example.com"
											{...register("Email", {
												required: true,
												pattern: /^\S+@\S+$/i,
											})}
										></input>
										{errors.Email && (
											<p className={`${styles.errors_msg}`}>This field is required</p>
										)}
										<button className={`${styles.btn_arrow} btn_arrow`}>
											<span className={`${styles.arrow_one} arrow_one`}>
												<img src={arrow.src} alt="arrow" />
											</span>
											<span className={`${styles.arrow_two} arrow_two`}>
												<img src={arrow.src} alt="arrow" />
											</span>
										</button>
										{isSubmited && (
											<p className={`${styles.thank_you} para_sm mt_20`}>
												Thank you for your subscription. Stay tuned for valuable industry
												insights and updates.
											</p>
										)}
									</div>
								</form>
								<div className={`${styles.social_media} pt_30`}>
									<h5 className="text_xs text_400 color_white pb_20 opacity_two">
										Follow Us on
									</h5>
									<ul className={`${styles.footerMenuInnerItem} text_reg`}>
										<li>
											<Link href="https://www.facebook.com/CompleteSportsAndManagement/">
												<a target="_blank" rel="noreferrer">
													<img src={facebook.src} alt="facebook" />
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/CsmlGroup">
												<a target="_blank" rel="noreferrer">
													<img src={twitter.src} alt="twitter" />
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/csmlgroup/">
												<a target="_blank" rel="noreferrer">
													<img src={instagram.src} alt="instagram" />
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://www.youtube.com/@csmlgroup8994">
												<a target="_blank" rel="noreferrer">
													<img src={youtube.src} alt="youtube" />
												</a>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/company/csmlindia/">
												<a target="_blank" rel="noreferrer">
													<img src={linkedin.src} alt="linkedin" />
												</a>
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={`${styles.footerBtm}`}>
					<div className="container">
						<div className={`${styles.footerBtmFlex} f_w_j a_center`}>
							<div className={`${styles.footerBtmItem}`}>
								<p className="text_xs">Copyright © {currentYear} CSML GROUP. All Rights Reserved</p>
							</div>
							<div className={`${styles.footerBtmItem}`}>
								<Link href="https://www.ting.in/">
									<a className="text_reg text_500" target="_blank" rel="noreferrer">
										<img src={ting_logo.src} alt="ting logo" />
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
