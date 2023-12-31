// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/ExperienceIndustry.module.scss";

// IMAGES //

/** Home Hero Section */
export default function ExperienceIndustry() {
	return (
		<section className={`${styles.experience_industry_wrap} ptb_100`}>
			<div className="container">
				<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
					<h2 className="heading_text_55 pb_20">
						Experience the industry's first and best
					</h2>
				</div>
				<div className={`${styles.partner_superior_flex} f_j toTop`} data-scroll>
					<div
						className={`${styles.partner_superior_box} border_8 border_animation white_border_animation`}
					>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<h3 className="paraTxt text_700 pb_20">
							Pioneers of amusement solutions{" "}
						</h3>
						<p className="paraTxt opacity_two">
							As leaders of Indoor Amusement Centers (IAC) development, we provide
							comprehensive, end-to-end solutions.
						</p>
					</div>
					<div
						className={`${styles.partner_superior_box} border_8 border_animation white_border_animation`}
					>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<h3 className="paraTxt text_700 pb_20">Partnered with the best</h3>
						<p className="paraTxt opacity_two">
							We have a vast premium arcade machine inventory from trusted global
							manufacturers.{" "}
						</p>
					</div>

					<div
						className={`${styles.partner_superior_box} border_8 border_animation white_border_animation`}
					>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<h3 className="paraTxt text_700 pb_20">Investment excellence partner </h3>
						<p className="paraTxt opacity_two">
							We offer market insights, and custom business models to ensure you make
							informed investments.
						</p>
					</div>

					<div
						className={`${styles.partner_superior_box} border_8 border_animation white_border_animation`}
					>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<h3 className="paraTxt text_700 pb_20">Launch success partner</h3>
						<p className="paraTxt opacity_two">
							We offer re-launch support through a proficient team that handles setup,
							maintenance, and post-sales support.
						</p>
					</div>
				</div>
				<div className={`${styles.btn_box} pt_40 toTop`} data-scroll>
					<a href="/about" rel="noreferrer">
						<span className="span_btn white_btn">
							<button className="btn_project_default">Learn More</button>
						</span>
					</a>
				</div>
			</div>
		</section>
	);
}
