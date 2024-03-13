// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/PartnerSuperior.module.scss";

// IMAGES //
import partner_img from "../../../public/img/home/partner_img.jpg";
import partner_img_two from "../../../public/img/home/partner_img_two.jpg";
import yellow_img from "../../../public/img/home/yellow_img.jpg";
import arrow from "../../../public/img/arrow.svg";

/** Home Hero Section */
export default function PartnerSuperior({ data }) {
	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 2000,
		autoplaySpeed: 5000,
	};
	return (
		<section
			className={`${styles.partner_superior_wrap} dot_animation_box ptb_100`}
		>
			<div className="container">
				<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
					<h2 className="heading_text_55 color_white pb_20">
						Your partner in superior <br className="hidden-xs" />
						amusement experience{" "}
					</h2>
					<p className="paraTxt color_white opacity_one">
						Discover how CSML can help you achieve entertainment centre success, from
						concept to operation. Our expertise streamlines planning, design,
						logistics, staffing, pricing and support.
					</p>
				</div>

				<div className={`${styles.partner_superior_flex} f_j`}>
					<div
						className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
						data-scroll
					>
						<div className={`${styles.partner_superior_content}`}>
							<img
								className="border_8"
								src={partner_img.src}
								alt="img"
								loading="lazy"
							/>
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 color_white text_500 ">Consultancy Services</h3>
									<a href="/services/service-consultancy" rel="noreferrer">
										<button className="btn_arrow">
											<span className={`${styles.arrow_one} arrow_one`}>
												<img src={arrow.src} />
											</span>
											<span className={`${styles.arrow_two} arrow_two`}>
												<img src={arrow.src} />
											</span>
										</button>
									</a>
								</div>
								<p className="paraTxt color_white opacity_one">
									Tailored consultancy services for Indoor Amusement Centers (IAC),
									simplifying operations, ensuring seamless coordination from start to
									finish.
								</p>
							</div>
						</div>
					</div>
					<div
						className={`${styles.partner_superior_box} commonBorderAnimation toTop`}
						data-scroll
					>
						<div className={`${styles.partner_superior_content}`}>
							<img className="border_8" src={partner_img_two.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 color_white text_500">
										Management Contract - Operational Excellence
									</h3>
									<a href="/services/service-management" rel="noreferrer">
										<button className="btn_arrow">
											<span className={`${styles.arrow_one} arrow_one`}>
												<img src={arrow.src} loading="lazy" />
											</span>
											<span className={`${styles.arrow_two} arrow_two`}>
												<img src={arrow.src} loading="lazy" />
											</span>
										</button>
									</a>
								</div>
								<p className="paraTxt color_white opacity_one">
									Operational excellence is offered via FEC management contract. Our
									expert team manages day-to-day operations, allowing clients to focus on
									strategic goals.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className={`${styles.yellow_main} pt_100 toTop`} data-scroll>
					<Slider {...settings}>
						{data.map((item) => {
							return (
								<div
									className={`${styles.yellow_item}`}
									key={item.attributes.PartnersHeading}
								>
									<div className={`${styles.yellow_box} f_j`}>
										<div className="dot_two dots_p"></div>
										<div className="dot_three dots_p"></div>
										<div className={`${styles.yellow_content}`}>
											<h3 className="text_35 pb_20">{item.attributes.PartnersHeading}</h3>
											<p className="paraTxt opacity_one">{item.attributes.PartnersPara}</p>
											{/* <div className={`${styles.yellow_btn} pt_30`}>
												<a href={item.attributes.PartnersURL} rel="noreferrer">
													<span className="span_btn yellow_btn">
														<button className="btn_project_default">Learn More</button>
													</span>
												</a>
											</div> */}
										</div>
										<div className={`${styles.yellow_img}`}>
											<img
												className="border_20"
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.PartnersImg.data.attributes.url}`}
												alt="img"
												loading="lazy"
											/>
										</div>
									</div>
								</div>
							);
						})}

						{/* <div className={`${styles.yellow_item}`}>
							<div className={`${styles.yellow_box} f_j`}>
								<div className="dot_two dots_p"></div>
								<div className="dot_three dots_p"></div>
								<div className={`${styles.yellow_content}`}>
									<h3 className="text_35 pb_20">
										Elevate your home with custom entertainment solutions
									</h3>
									<p className="paraTxt opacity_one">
										Lorem Ipsum is simply dummy text of the printing and typesetting
										industry. Lorem Ipsum has been the industry's standard dummy text ever
										since the 1500s
									</p>
									<div className={`${styles.yellow_btn} pt_30`}>
										<a href="#" rel="noreferrer">
											<span className="span_btn yellow_btn">
												<button className="btn_project_default">Learn More</button>
											</span>
										</a>
									</div>
								</div>
								<div className={`${styles.yellow_img}`}>
									<img className="border_20" src={yellow_img.src} alt="img" />
								</div>
							</div>
						</div>
						<div className={`${styles.yellow_item}`}>
							<div className={`${styles.yellow_box} f_j`}>
								<div className="dot_two dots_p"></div>
								<div className="dot_three dots_p"></div>
								<div className={`${styles.yellow_content}`}>
									<h3 className="text_35 pb_20">
										Elevate your home with custom entertainment solutions
									</h3>
									<p className="paraTxt opacity_one">
										Lorem Ipsum is simply dummy text of the printing and typesetting
										industry. Lorem Ipsum has been the industry's standard dummy text ever
										since the 1500s
									</p>
									<div className={`${styles.yellow_btn} pt_30`}>
										<a href="#" rel="noreferrer">
											<span className="span_btn yellow_btn">
												<button className="btn_project_default">Learn More</button>
											</span>
										</a>
									</div>
								</div>
								<div className={`${styles.yellow_img}`}>
									<img className="border_20" src={yellow_img.src} alt="img" />
								</div>
							</div>
						</div> */}
					</Slider>
				</div>
			</div>
		</section>
	);
}
