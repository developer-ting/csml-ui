// MODULES //
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/career/HowToApply.module.scss";

// IMAGES //
import how_to_apply from "../../../public/img/career/how_to_apply.jpg";

/** Home Hero Section */
export default function HowToApply({careerData}) {
  const [isSubmited, setIsSubmited] = useState(false);

  const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
    const { attributes } = careerData.data;

	const onSubmit = async (data) => {
    console.log(data);
    // const file = data.uploadResume;
		async function sendMedia() {
			const file = data.UploadResume[0];

			const formData = new FormData();
			formData.append("files", file, `${file.name}`);

			const requestOptions = {
				method: "POST",
				headers: {
					Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
				},
				body: formData,
				redirect: "follow",
			};

			const res = await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/upload`,
				requestOptions
			);

			if (!res.ok) {
				throw Error("Something went wrong!");
			}

			const result = await res.json();

			console.log(result[0].id);

			return result[0].id;

			console.log(file);
		}

		const fileId = await sendMedia();

		const Headers = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
			},
			body: JSON.stringify({
				data: { ...data, UploadResume: fileId },
			}),
		};

		async function sendData() {
			await fetch(
				`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}/api/career-page-forms`,
				Headers
			)
				.then((data) => data.json())
				.then(async (data) => {

					// Send email
					await fetch('/api/send-email', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ formData: data,image:fileId }), // Send form data for the email
					});

					console.log("success"), reset(), setIsSubmited(true);
				})
				.catch((err) => console.log(err));
		}

		sendData();
		
	};
  
	return (
		<section className={`${styles.how_apply_wrap} ptb_100`}>
			
      <div className="container">
       
        <div className={`${styles.service_flex}`}>
          <div className={`${styles.info_bx} toTop`} data-scroll>
            <h2 className={`${styles.info_head} heading_text_55 pb_30`}>
              Belong to CSML
            </h2>
            <p className={`${styles.info_para} paraTxt_18 text_400 pb_10 toTop`} data-scroll>
              We are constantly on the lookout for passionate, driven, and talented individuals who share our vision and want to be part of our journey.
              If you're ready to take the next step in your career and become part of the CSML family, <span className="text_600">please send your resume and a cover letter to <a href="mailto:hr@csmlindia.com">hr@csmlindia.com</a></span>
            </p>
            <p className={`${styles.info_para} paraTxt_18 text_400 pb_10 toTop`} data-scroll>
            In your cover letter, state your reasons for joining and how you can contribute. Alternatively, explore our job openings below.
            </p>
            {/* <div className={`${styles.btn_box} pt_30 toTop`} data-scroll>
              <a href="#" rel="noreferrer">
                <span className="span_btn white_btn">
                  <button className="btn_project_default">Explore Opportunities</button>
                </span>
              </a>
            </div> */}
          </div>
          <div className={`${styles.img_bx} toTop`} data-scroll>
            {/* <img className="img border_8" src={how_to_apply.src} /> */}
            <div className={`${styles.contact_form}`}>
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
                  {/*<select {...register("Position", { required: true })}>*/}
                  {/*  <option value="">Choose position *</option>*/}
                  {/*  <option value="Accounts">Accounts</option>*/}
                  {/*  <option value="Sales">Sales</option>*/}
                  {/*  <option value="Marketing">Marketing </option>*/}
                  {/*  <option value="Technical">Technical </option>*/}
                  {/*  <option value="IT">IT </option>*/}
                  {/*  <option value="HR">HR </option>*/}
                  {/*  <option value="Administration">Administration </option>*/}
                  {/*  <option value="Others If Any pls specify">*/}
                  {/*    Others If Any pls specify*/}
                  {/*  </option>*/}
                  {/*</select>*/}
                  {/*{errors.Position && (*/}
                  {/*  <p className={`${styles.errors_msg}`}>This field is required</p>*/}
                  {/*)}*/}
					<input
						className={styles.position}
						type="text"
						name="Position"
						value={attributes.Title}
						placeholder="Position"
						{...register("Position", {
							required: true
						})}
					/>
                </div>
                <div className={`${styles.form_field}`}>
                  <input
                    className=""
                    type="text"
                    name="EmploymentStatus"
                    placeholder="Notice Period *"
                    {...register("EmploymentStatus", {
                      required: true,
                      maxLength: 79,
                    })}
                  />
                  {errors.EmploymentStatus && (
                    <p className={`${styles.errors_msg}`}>This field is required</p>
                  )}
                </div>

                <div className={`${styles.form_field} ${styles.fileBorder}`}>
                  <input
                    className={`${styles.fileInput}`}
                    type="file"
                    name="UploadResume"
                    id="fileResume"
                    placeholder="Upload resume *"
                    accept=".pdf,.doc,.docx"
                    {...register("UploadResume", {
                      required: true,
                      maxLength: 79,
                    })}
                  />
                  
                  {errors.UploadResume && (
                    <p className={`${styles.errors_msg}`}>This field is required</p>
                  )}
                </div>
                
                {/*<div className={`${styles.form_field}`}>*/}
                {/*  <textarea*/}
                {/*    className=""*/}
                {/*    type="text"*/}
                {/*    name="remarks"*/}
                {/*    placeholder="Remarks, If Any "*/}
                {/*    {...register("Remarks", {*/}
                {/*      maxLength: 79,*/}
                {/*    })}*/}
                {/*  />*/}
                {/*   {errors.Remarks && (*/}
                {/*    <p className={`${styles.errors_msg}`}>Only 80 Characters are allowed</p>*/}
                {/*  )}*/}
                {/*</div>*/}
                <div className={`${styles.btn_box}`}>
                  <a href="#" rel="noreferrer">
                    <span className="span_btn white_btn">
                      <button className="btn_project_default">Submit</button>
                    </span>
                  </a>
                </div>
                {isSubmited && (
                  <p className={`${styles.thank_you} para_sm mt_20`}>
					  Thank you for your interest in CSML!&nbsp;&nbsp;Our team will get in touch with you shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
		</section>
	);
}
