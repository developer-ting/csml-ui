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
  import amit_thapar from "../../../public/img/about/amit_thapar.jpg";
  import amol_shelke from "../../../public/img/about/amol_shelke.jpg";
  import deepak_jha from "../../../public/img/about/deepak_jha.jpg";
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
							<img className="border_8" src={rohit_mathur.src} alt="rohit img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Rohhit Mathur 
									</h3>
									{/* <span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span> */}
								</div>
								<p className="paraTxt font_secondary opacity_two">
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
							<img className="border_8" src={tyna.src} alt="tyna img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
									 Tyna D’Cruz
									</h3>
									{/* <span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span> */}
								</div>
								<p className="paraTxt font_secondary opacity_two">
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
							<img className="border_8" src={sanjeev.src} alt="sanjeev img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
									 Sanjeev Sinha
									</h3>
									{/* <span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span> */}
								</div>
								<p className="paraTxt font_secondary opacity_two">
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
							<img className="border_8" src={amit_thapar.src} alt="amit img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
									  Amit Thapar
									</h3>
									{/* <span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span> */}
								</div>
								<p className="paraTxt font_secondary opacity_two">
									Chief Commercial Officer
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={amol_shelke.src} alt="amol img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
										Amol Shelke 
									</h3>
									{/* <span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span> */}
								</div>
								<p className="paraTxt font_secondary opacity_two">
									Senior Account Manager
								</p>
							</div>
						</div>
					</div>
					<div className={`${styles.luminaries_box} border_animation white_border_animation toTop`} data-scroll>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.luminaries_content}`}>
							<img className="border_8" src={deepak_jha.src} alt="deepak img" />
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 font_secondary">
									 Deepak Jha
									</h3>
									{/* <span href="#" rel="noreferrer">
										<Link href="">
											<img src={linkdin.src} alt="" />
										</Link>
									</span> */}
								</div>
								<p className="paraTxt font_secondary opacity_two">
									Manager Bowling Service & IT
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
