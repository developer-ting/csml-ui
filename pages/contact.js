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

		const { Name, Email, CompanyName, PhoneNumber, Inquiry, Comments } = data;

		await fetch("/api/sendEmail", {
			method: "POST",
			body: JSON.stringify({
				Name,
				Email,
				CompanyName,
				PhoneNumber,
				Inquiry,
				Comments,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data && data.id) {
					alert(
						`Thank you for your interest ${Name}! We will get back to you soon!`
					);
				}
			})
			.catch((err) => {
				alert("Ooops! unfortunately some error has occurred.");
			});
	};
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.ContactPage}`}>
				<InsideBanner
					bannerTitle="Experience Unforgettable <br className='hidden-xs'>
				Adventures with Us"
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
										<img className="img" src={Mail.src} />
										<a href="mailto:sales@csmlindia.com" rel="noreferrer">
											sales@csmlindia.com
										</a>
									</div>
									<div className={`${styles.contact_div}`}>
										<img className="img" src={Phone.src} />
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
