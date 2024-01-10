// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";
import { useForm } from "react-hook-form";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../../src/components/Footer";
import Header from "../../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImagePara from "@/components/ImagePara";
import BlackStripOverview from "@/components/BlackStripOverview";
import { ecommerceYellowCardData } from "@/data/data-file-1";
import CardHoverYellow from "@/components/CardHoverYellow";
// import CuttingEdge from "@/components/CuttingEdge";
import CuttingEdge from "@/sections/intercard/CuttingEdge";
import { ServerHeaders } from "@/utils/RequestHeaders";

// SECTIONS //
// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// STYLES //
import styles from "../../../src/styles/pages/product/intercard/DebitCardSystem.module.scss";

//	IMAGES	//
import debit_banner from "../../../public/img/product/intercard/debit-card-system/debit_banner.jpg";
import debit_banner_mobile from "../../../public/img/product/intercard/debit-card-system/debit_banner_mobile.jpg";
import live_customer from "../../../public/img/product/intercard/debit-card-system/live_customer.gif";
import cost_effective from "../../../public/img/product/intercard/debit-card-system/cost_effective.gif";
import state_security from "../../../public/img/product/intercard/debit-card-system/state_security.gif";
import durability from "../../../public/img/product/intercard/debit-card-system/durability.gif";
import reliability from "../../../public/img/product/intercard/debit-card-system/reliability.gif";
import iWave from "../../../public/img/product/intercard/debit-card-system/iWave.jpg";
import video_img from "../../../public/img/product/intercard/debit-card-system/video_img.jpg";
import video_img_mobile from "../../../public/img/product/intercard/debit-card-system/video_img_mobile.jpg";
import play from "../../../public/img/product/intercard/debit-card-system/play.svg";

export default function DebitCardSystem({
	ReadersData,
	FutureData,
	CuttingEdgeData,
}) {
	const [isSubmited, setIsSubmited] = useState(false);
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

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
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
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/intercard-debit-card-forms`,
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
		<div>
			<Header />
			<Loader />
			<main className={`${styles.debit_card_main}`}>
				<InsideBanner
					bannerTitle="Intercard x CSML <br /> Partner With The Experts"
					bannerImg={debit_banner.src}
					mobileImg={debit_banner_mobile.src}
				/>
				<BlackStripOverview desc="Intercard and CSML collaborate to enhance amusement center efficiency with a robust cashless system, ensuring seamless operation, data security and personalized solutions supported by local experts." />

				<section className={`${styles.intercard} ptb_100`}>
					<div className="container">
						<div className={`${styles.title_txt} pb_40`}>
							<h2 className="heading_text_55 pb_20 toTop" data-scroll>
								Intercard Business Benefits
							</h2>
							<p className="paraTxt_18 pb_20  toTop" data-scroll>
								Intercard's cashless technology empowers our amusement business partners
								to potentially boost sales by up to 30%, enhance marketing initiatives,
								and reduce operating costs. Our bespoke cloud-based systems are
								adaptable to facilities of any size, ranging from single venues to
								sprawling networks of up to a hundred locations. What distinguishes
								Intercard is its in-house development of both hardware and software,
								further supported by 24/7 live service and global support.
							</p>
						</div>
						<div className={`${styles.debit_icon_flex} toTop`} data-scroll>
							<div className={`${styles.debit_icon_item}`}>
								<img
									className={`${styles.debit_icon} pb_20`}
									src={live_customer.src}
									alt="img"
								/>
								<p className="paraTxt text_600 pb_20 l_h_3">Live Customer Service</p>
								<p className="paraTxt_18 l_h_3">Always available, 24/7</p>
							</div>
							<div className={`${styles.debit_icon_item}`}>
								<img
									className={`${styles.debit_icon} pb_20`}
									src={cost_effective.src}
									alt="img"
								/>
								<p className="paraTxt text_600 pb_20 l_h_3">Cost Effective</p>
								<p className="paraTxt_18 l_h_3">
									Boasting the lowest total cost of ownership
								</p>
							</div>
							<div className={`${styles.debit_icon_item}`}>
								<img
									className={`${styles.debit_icon} pb_20`}
									src={state_security.src}
									alt="img"
								/>
								<p className="paraTxt text_600 pb_20 l_h_3">
									State Of The Art Security
								</p>
								<p className="paraTxt_18 l_h_3">Operating with zero-fault tolerance</p>
							</div>
							<div className={`${styles.debit_icon_item}`}>
								<img
									className={`${styles.debit_icon} pb_20`}
									src={durability.src}
									alt="img"
								/>
								<p className="paraTxt text_600 pb_20 l_h_3">Durability</p>
								<p className="paraTxt_18 l_h_3">Offering the longest warranty</p>
							</div>
							<div className={`${styles.debit_icon_item}`}>
								<img
									className={`${styles.debit_icon} pb_20`}
									src={reliability.src}
									alt="img"
								/>
								<p className="paraTxt text_600 pb_20 l_h_3">Reliability</p>
								<p className="paraTxt_18 l_h_3">
									Constructing all hardware & software in-house
								</p>
							</div>
						</div>
					</div>
				</section>

				<div className={`${styles.ecommerce_slider_main} pb_100 toTop`} data-scroll>
					<div className="container">
						<div className={`${styles.title_txt} pb_20`}>
							<h2 className="heading_text_55 pb_20 toTop" data-scroll>
								Readers
							</h2>
						</div>
					</div>

					<div className={`${styles.partner_superior_flex} toTop`} data-scroll>
						<Slider {...settings}>
							{ReadersData.data.map((item) => {
								return (
									<div
										className={`${styles.luminaries_box} border_animation white_border_animation`}
										key={item.attributes.ReaderHeadline}
									>
										<div className="dot_one dots_p"></div>
										<div className="dot_two dots_p"></div>
										<div className="dot_three dots_p"></div>
										<div className={`${styles.luminaries_content}`}>
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.ReaderThumbnail.data.attributes.url}`}
												alt="img"
											/>
											<h3 className="text_24 text_700 pt_30">
												{item.attributes.ReaderHeadline}
											</h3>
											<div className={`${styles.desc_box}`}>
												<div className={`${styles.desc_title}`}>
													<h3 className="text_24 text_700">
														{item.attributes.ReaderHeadline}
													</h3>
												</div>
												<p className="paraTxt">{item.attributes.ReaderDescription}</p>
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

				<section className={`${styles.future_proof} ptb_100 dot_animation_box`}>
					<div className="container">
						<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
							<h2 className="heading_text_45 color_white text_700">
								Future-Proof Your Arcade Fun <br className="hidden-xs" />
								With CSML and Intercard
							</h2>
						</div>
						<div className={`${styles.intertainment_border} commonBorderAnimation`}>
							<div className={`${styles.intertainment_right} toTop`} data-scroll>
								<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
									<a href={FutureData.data.attributes.FutureVideoURL}>
										<div className={`${styles.video_box}`}>
											<img
												className={`${styles.video_img} border_20 img hidden-xs`}
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${FutureData.data.attributes.FutureThumbnail.data.attributes.url}`}
											/>
											<img
												className={`${styles.video_img_mobile} border_20 img visible-xs`}
												src={video_img_mobile.src}
											/>
											<div className={`${styles.video_play}`}>
												<img
													src={play.src}
													className={`${styles.gallery_plus}`}
													alt="play"
												/>
											</div>
										</div>
									</a>
								</LightGallery>
							</div>
						</div>

						<div className={`${styles.brochure_box} pt_100 toTop`} data-scroll>
							<div className={`${styles.contactinside}`}>
								<div className={`${styles.inside_flex}`}>
									<div className={`${styles.text_bx} paraTxt`}>
										Click on Brochure button to know more.
									</div>
									<div className={`${styles.btn_bx}`}>
										<a
											href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${FutureData.data.attributes.DownloadBrochurePDF.data.attributes.url}`}
											target="_blank"
											rel="noreferrer"
										>
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

				<CuttingEdge cuttingEdgeData={CuttingEdgeData.data} />

				<section className={`${styles.request_quate} ptb_100 dot_animation_box`}>
					<div className="container">
						<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
							<h2 className="heading_text_45 color_white pb_20 text_700">
								Request Your Intercard Quote
							</h2>
							<p className="paraTxt_18 pb_20 color_white_opacity toTop" data-scroll>
								Experience the future of secure and efficient transactions with
								Intercard, <br class="hidden-xs"></br>your trusted partner in payment
								solutions.
							</p>
						</div>
						<div
							className={`${styles.luminaries_box} commonBorderAnimation toTop`}
							data-scroll
						>
							<div className={`${styles.contact_form}`}>
								<div className="dot_one dots_p"></div>
								<div className="dot_two dots_p"></div>
								<div className="dot_three dots_p"></div>
								<form
									className={`${styles.form_main}`}
									onSubmit={handleSubmit(onSubmit)}
								>
									<div className={`${styles.form_row}`}>
										<div className={`${styles.form_field}`}>
											<input
												className=""
												type="text"
												name="Name"
												placeholder="Name *"
												{...register("Name", {
													required: true,
													maxLength: 79,
												})}
											/>
											{errors.Name && (
												<p className={`${styles.errors_msg}`}>This field is required</p>
											)}
										</div>
										<div className={`${styles.form_field}`}>
											<input
												className=""
												type="text"
												name="Cname"
												placeholder="Company Name *"
												{...register("CompanyName", {
													required: true,
													maxLength: 79,
												})}
											/>
											{errors.CompanyName && (
												<p className={`${styles.errors_msg}`}>This field is required</p>
											)}
										</div>
									</div>
									<div className={`${styles.form_row}`}>
										<div className={`${styles.form_field}`}>
											<input
												className=""
												type="email"
												name="Email"
												placeholder="Email *"
												{...register("Email", {
													required: true,
													pattern: /^\S+@\S+$/i,
												})}
											/>
											{errors.Email && (
												<p className={`${styles.errors_msg}`}>This field is required</p>
											)}
										</div>
										<div className={`${styles.form_field}`}>
											<input
												className=""
												type="tel"
												name="phoneNumber"
												placeholder="Phone Number *"
												{...register("PhoneNumber", {
													required: true,
													pattern: /^[0-9]{10}$/i,
												})}
											/>
											{errors.PhoneNumber && (
												<p className={`${styles.errors_msg}`}>This field is required</p>
											)}
										</div>
									</div>

									<div className={`${styles.form_row}`}>
										<div className={`${styles.form_field}`}>
											<select {...register("Inquiry", { required: true })}>
												<option value="">Services Interested In *</option>
												<option value="Customer Care">Customer Care</option>
												<option value="Domestic Market Inquiry">
													Domestic Market Inquiry
												</option>
												<option value="Exports Inquiry">Exports Inquiry</option>
												<option value="Vendor Registration">Vendor Registration</option>
											</select>
											{errors.Inquiry && (
												<p className={`${styles.errors_msg}`}>This field is required</p>
											)}
										</div>
										<div className={`${styles.form_field}`}>
											<textarea
												className=""
												type="text"
												name="Help"
												placeholder="Additional Comments *"
												{...register("Comments", {
													required: true,
													maxLength: 79,
												})}
											/>
											{errors.Comments && (
												<p className={`${styles.errors_msg}`}>This field is required</p>
											)}
										</div>
									</div>
									<div className={`${styles.btn_box}`}>
										<a href="#" rel="noreferrer">
											<span className="span_btn white_btn">
												<button className="btn_project_default">Submit</button>
											</span>
										</a>
									</div>
									{isSubmited && (
										<p className={`${styles.thank_you} para_sm mt_20`}>
											Thank you for your message. Someone from our team will get back
											shortly!
										</p>
									)}
								</form>
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	// Readers
	const ReadersRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/intercard-debit-card-readers?populate=*`,
		ServerHeaders
	);
	const ReadersData = await ReadersRes.json();

	// Future
	const FutureRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/intercard-debit-card-future?populate=*`,
		ServerHeaders
	);
	const FutureData = await FutureRes.json();

	// Cutting Edge
	const CuttingEdgeRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/intercard-cutting-edge-softwares?populate=*`,
		ServerHeaders
	);
	const CuttingEdgeData = await CuttingEdgeRes.json();

	return {
		props: {
			ReadersData,
			FutureData,
			CuttingEdgeData,
		},
		revalidate: 10,
	};
}
