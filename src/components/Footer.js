// MODULES //
import Link from "next/link";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Footer.module.scss";

// IMAGES //
import csml_logo from "../../public/img/csml_logo.svg";
import ting_logo from "../../public/img/ting_logo.svg";
import arrow from "../../public/img/arrow.svg"
import facebook from "../../public/img/facebook.svg"
import twitter from "../../public/img/twitter.svg"
import instagram from "../../public/img/instagram.svg"
import youtube from "../../public/img/youtube.svg"

/** Footer Component */
const Footer = () => {
	return (
		<footer className={`${styles.main_footer}`}>
			<div className={`${styles.bg_footer}`}>
				<div className={`${styles.footerMenuMain}`}>
					<div className="container">
						<div className={`${styles.footerMenuFlex}`}>
							<div className={`${styles.footerMenuItem_left}`}>
								<div className={`${styles.footerLogo}`}>
									<Link href="">
										<img src={csml_logo.src} alt="logo" />
									</Link>
								</div>
							</div>
							<div className={`${styles.footerMenuItem_center}`}>
								<div className={`${styles.footerMenuInnerFlex}`}>
									<ul className={`${styles.footerMenuInnerItem} text_reg`}>
										<li>
											<Link href="">Home</Link>
										</li>
										<li>
											<Link href="">About CSML</Link>
										</li>
										<li>
											<Link href="">Brunswick Bowling</Link>
										</li>
										<li>
											<Link href="">Amusement Games</Link>
										</li>
										<li>
											<Link href="">Sodikart</Link>
										</li>
										<li>
											<Link href="">Intercard</Link>
										</li>
										<li>
											<Link href="">Build A Center</Link>
										</li>
									</ul>

									<ul className={`${styles.footerMenuInnerItem} text_reg`}>
										<li>
											<Link href="">Maintain A Center</Link>
										</li>
										<li>
											<Link href="">Manage A Center</Link>
										</li>
										<li>
											<Link href="">Upgrade A Center</Link>
										</li>
										<li>
											<Link href="">New Releases</Link>
										</li>
										<li>
											<Link href="">Must Have</Link>
										</li>
										<li>
											<Link href="">Projects</Link>
										</li>
										<li>
											<Link href="">Contact Us</Link>
										</li>
									</ul>
									
								</div>
							</div>
							<div className={`${styles.footerMenuItem_right}`}>
								<p className="text_xs color_white pb_20">Lorem Ipsum is simply dummy text of the printing</p>
								<form>
									<div className={`${styles.input_group}`}>
										<input className={`${styles.input_field}`} type="email" name="email" id="email" placeholder="Your-email@example.com"></input>
										<button className={`${styles.btn_arrow} btn_arrow`}>
											<span className={`${styles.arrow_one} arrow_one`}><img src={arrow.src} /></span>
											<span className={`${styles.arrow_two} arrow_two`}><img src={arrow.src} /></span>
										</button>
									</div>
								</form>
								<div className={`${styles.social_media} pt_60`}>
									<h5 className="text_xs text_400 color_white pb_20">Follow Us on</h5>
									<ul className={`${styles.footerMenuInnerItem} text_reg`}>
										<li>
											<Link href="">
												<img src={facebook.src} alt="" />
											</Link>
										</li>
										<li>
											<Link href="">
												<img src={twitter.src} alt="" />
											</Link>
										</li>
										<li>
											<Link href="">
												<img src={instagram.src} alt="" />
											</Link>
										</li>
										<li>
											<Link href="">
												<img src={youtube.src} alt="" />
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
								<p className="text_xs color_white">Copyright © 2023 CSML. All Rights Reserved</p>
							</div>
							<div className={`${styles.footerBtmItem}`}>
								<Link href="">
									<img src={ting_logo.src} alt="" />
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
