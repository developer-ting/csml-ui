// MODULES //
import Link from "next/link";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/career/CareerSuccess.module.scss";

// IMAGES //
import success_img from "../../../public/img/career/success_img.jpg";
import tyna from "../../../public/img/about/tyna.jpg";
import sanjeev from "../../../public/img/about/sanjeev.jpg";
import linkdin from "../../../public/img/linkdin.svg";

/** Home Hero Section */
export default function CareerSuccess() {
	return (
		<section className={`${styles.luminaries_wrap} ptb_100`}>
			<div className="container">
				<div className={`${styles.section_title} pb_40`}>
					<h2 className="heading_text_55 pb_20">
            Set Sail for Career Success with Us
					</h2>
				</div>

				<div className={`${styles.luminaries_flex}`}>
					<div className={`${styles.luminaries_box} border_animation white_border_animation`}>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={success_img.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700">
                    Innovative Environment
									</h3>
								</div>
								<p className="paraTxt">
                CSML is a playground for creativity. We encourage out-of-the-box thinking and provide a platform for your ideas to come to life.
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation`}>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={success_img.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700">
                    Impactful Work
									</h3>
								</div>
								<p className="paraTxt">
                CSML is a playground for creativity. We encourage out-of-the-box thinking and provide a platform for your ideas to come to life.
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation`}>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={success_img.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700">
                    Continuous Growth
									</h3>
								</div>
								<p className="paraTxt">
                CSML is a playground for creativity. We encourage out-of-the-box thinking and provide a platform for your ideas to come to life.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
