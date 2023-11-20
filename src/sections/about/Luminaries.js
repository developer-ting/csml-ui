// MODULES //
import Link from "next/link";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/about/Luminaries.module.scss";

// IMAGES //
  import rohit_mathur from "../../../public/img/about/rohit_mathur.jpg";
  import tyna from "../../../public/img/about/tyna.jpg";
  import sanjeev from "../../../public/img/about/sanjeev.jpg";
  import linkdin from "../../../public/img/linkdin.svg";

/** Home Hero Section */
export default function Luminaries() {
	return (
		<section className={`${styles.luminaries_wrap} ptb_100`}>
			<div className="container">
				<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
					<h2 className="heading_text_55">
            Luminaries leading the way
					</h2>
				</div>

				<div className={`${styles.luminaries_flex}`}>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={rohit_mathur.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Rohit Mathur
									</h3>
									<span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span>
								</div>
								<p className="paraTxt font_secondary">
									CEO
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={tyna.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Tyna D’Cruz
									</h3>
									<span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span>
								</div>
								<p className="paraTxt font_secondary">
									Chief Business Development Officer
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={sanjeev.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Sanjeev Sinha
									</h3>
									<span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span>
								</div>
								<p className="paraTxt font_secondary">
									Chief Technology Officer
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={rohit_mathur.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Rohit Mathur
									</h3>
									<span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span>
								</div>
								<p className="paraTxt font_secondary">
									CEO
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={tyna.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Tyna D’Cruz
									</h3>
									<span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span>
								</div>
								<p className="paraTxt font_secondary">
									Chief Business Development Officer
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={sanjeev.src} alt="img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Sanjeev Sinha
									</h3>
									<span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span>
								</div>
								<p className="paraTxt font_secondary">
									Chief Technology Officer
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
