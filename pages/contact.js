// MODULES //
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import ContactForm from "@/components/Form";
import Loader from "@/components/Loader";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Contact.module.scss";

//	IMAGES	//
import contact_banner from "../public/img/contact/contact_banner.jpg";
import contact_banner_mobile from "../public/img/contact/contact_banner_mobile.jpg";
import Mail from "../public/img/contact/mail_icon.svg";
import Phone from "../public/img/contact/phone_icon.svg";

/** Contact Page */
export default function Contact() {
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
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/contact-page-forms`,
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
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Head>
				<title>Contact CSML: Your Trusted Bowling Equipment Distributor</title>
				<meta name="description" content="Get in touch with CSML for top-notch FEC and bowling equipment. We're here to help you with your distribution needs and inquiries." />
				<meta name="og:title" content="Contact CSML: Your Trusted Bowling Equipment Distributor" />
				<meta name="og:description" content="Get in touch with CSML for top-notch FEC and bowling equipment. We're here to help you with your distribution needs and inquiries." />
				<meta name="keywords" content="Bowling Equipment Distributor, FEC Equipment Distributor, Operations & Management of FEC & Bowling."/>
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
				<link rel="canonical" href="https://csmlgroup.com/contact"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.ContactPage}`}>
				<InsideBanner
					bannerTitle="Experience Unforgettable <br className='hidden-xs'>
				Adventures With Us"
					bannerImg={contact_banner.src}
					mobileImg={contact_banner_mobile.src}
				/>
				<section className={`${styles.contact_sec} dot_animation_box`}>
					<div className="container">
						<div className={`${styles.contact_flex} ptb_80`}>
							<div className={`${styles.contact_details} pt_80 toTop`} data-scroll>
								<p className="paraTxt color_white pb_40  opacity_one">
									Whether you have questions, need information, or want to explore how we
									can enhance your space,{" "}
									<span className="text_600">we're here to assist you.</span>
								</p>
								<div
									className={`${styles.contact_details_flex} color_white text_sm toTop`}
									data-scroll
								>
									<div className={`${styles.contact_div} pb_30`}>
										<img className="img" src={Mail.src} alt="mail icon" />
										<a href="mailto:sales@csmlindia.com" rel="noreferrer">
											sales@csmlindia.com
										</a>
									</div>
									<div className={`${styles.contact_div}`}>
										<img className="img" src={Phone.src} alt="phone icon" />
										<div className={`${styles.phone_div}`}>
											<a href="tel:+912249739659">+91 (22) 49739659</a> /{" "}
											<a href="tel:+912228302166">+91 (22) 28302166</a>
										</div>
									</div>
								</div>
							</div>
							<div
								className={`${styles.contact_main_form} border_animation toTop`}
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
										<div className={`${styles.form_field}`}>
											<select {...register("Inquiry", { required: true })}>
												<option value="">Select Inquiry Type *</option>
												<option value="Brunswick bowling">Brunswick Bowling </option>
												<option value="Amusement Games">Arcade Games</option>
												<option value="Go Karting">Go Karting </option>
												<option value="Sodikarts">Sodikarts </option>
												<option value="Trampoline">Trampoline </option>
												<option value="Softplay">Softplay </option>
												<option value="Complete FEC Set Up">Complete FEC Set Up </option>
												<option value="Lazer Tag">Lazer Tag</option>
												<option value="Others If Any pls specify">
													Others If Any pls specify
												</option>
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
									{/* <img className="" src={cricle_arrow.src} /> */}
								</div>
							</div>
						</div>
					</div>
					{/* <ContactForm /> */}
				</section>
			</main>
			<Footer />
		</div>
	);
}
