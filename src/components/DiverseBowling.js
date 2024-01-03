// MODULES //

// COMPONENTS //
import Link from "next/link";

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

// STYLES //
import styles from "../styles/components/DiverseBowling.module.scss";

// IMAGES //
import diverse_img from "../../public/img/brunswick-bowling/diverse_img.jpg";
import duckpin_social from "../../public/img/brunswick-bowling/duckpin_social.jpg";
import download from "../../public/img/download.svg";

/** Home Hero Section */
const DiverseBowling = ({ data }) => {
	// const parse = require("html-react-parser");
	return (
		<section className="ptb_100">
			<div className="container">
				<h2 className="heading_text_55 pb_50 text_center toTop" data-scroll>
					Diverse Bowling Experiences <br className="hidden-xs"></br>for Every Venue
				</h2>

				<div className={`${styles.hardwareSectionBox} f_w_j pb_40`}>
					<div className={`${styles.hardwareSectionStyle} toTop`} data-scroll>
						<div className="commonBorderAnimation whiteCommonBorderAnimation ">
							<img
								src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.data[0].attributes.Image.data.attributes.url}`}
								className="border_8 width_100"
								alt="Essential Components"
							/>
						</div>
					</div>
					<div className={`${styles.hardwareSectionStyle}`}>
						<h4 className="text_24 font_secondary text_500 pb_20 toTop" data-scroll>
							{data.data[0].attributes.title}
						</h4>
						<p
							className="paraTxt_16 font_secondary color_black_opacity l_h_6 toTop"
							data-scroll
						>
							{data.data[0].attributes.desc}
						</p>
						<div className={`${styles.specification} services_accordion_box`}>
							<Accordion allowZeroExpanded preExpanded={["a"]}>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											<div className={`${styles.accordion_title_flex}`}>
												<div className={`${styles.accordion_title_left}`}>
													<h4
														className={`${styles.title_txt} text_24 font_secondary text_500`}
													>
														Specifications
													</h4>
												</div>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<div className={`${styles.accordion_content_flex}`}>
											<div className={`${styles.accordion_content_left}`}>
												{parse(data.data[0].attributes.specifications)}
												{/* <ul>
													<li className="paraTxt_16 font_secondary color_black_opacity l_h_6">
														<span className="text_500">Lane length:</span> 88 feet, 4.5 inches
													</li>
													<li className="paraTxt_16 font_secondary color_black_opacity l_h_6">
														<span className="text_500">
															Lane width (for a pair of lanes):{" "}
														</span>{" "}
														11 feet, 6 inches
													</li>
												</ul> */}
												<div className={`${styles.btn_flex} d_f`}>
													<div className={`${styles.btn_one}`}>
														{/* <Link> */}
														<a
															className="text_xxs d_f a_center text_400"
															download
															target="_blanks"
															href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.data[0].attributes.brochure.data.attributes.url}`}
														>
															<img src={download.src} alt="download" /> Download Brochure
														</a>
														{/* </Link> */}
													</div>
													<div className={`${styles.btn_two}`}>
														{/* <Link href="#"> */}
														<a
															className="text_xxs d_f a_center text_400"
															href={data.data[0].attributes.link}
															target="_blanks"
														>
															Visit Brunswick Bowling
														</a>
														{/* </Link> */}
													</div>
												</div>
											</div>
										</div>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>

				<div className={`${styles.hardwareSectionBox} f_w_j `}>
					<div className={`${styles.hardwareSectionStyle} toTop`} data-scroll>
						<div className="commonBorderAnimation whiteCommonBorderAnimation ">
							<img
								src={duckpin_social.src}
								className="border_8 width_100"
								alt="Essential Components"
							/>
						</div>
					</div>
					<div className={`${styles.hardwareSectionStyle}`}>
						<h4 className="text_24 font_secondary text_500 pb_20 toTop" data-scroll>
							{data.data[1].attributes.title}
						</h4>
						<p
							className="paraTxt_16 font_secondary color_black_opacity l_h_6 toTop"
							data-scroll
						>
							{data.data[1].attributes.desc}
						</p>
						<div className={`${styles.specification} services_accordion_box`}>
							<Accordion allowZeroExpanded preExpanded={["a"]}>
								<AccordionItem>
									<AccordionItemHeading>
										<AccordionItemButton>
											<div className={`${styles.accordion_title_flex}`}>
												<div className={`${styles.accordion_title_left}`}>
													<h4
														className={`${styles.title_txt} text_24 font_secondary text_500`}
													>
														Specifications
													</h4>
												</div>
											</div>
										</AccordionItemButton>
									</AccordionItemHeading>
									<AccordionItemPanel>
										<div className={`${styles.accordion_content_flex}`}>
											<div className={`${styles.accordion_content_left}`}>
												{parse(data.data[1].attributes.specifications)}
												{/* <ul>
													<li className="paraTxt_16 font_secondary color_black_opacity l_h_6">
														<span className="text_500">Lane length:</span> 88 feet, 4.5 inches
													</li>
													<li className="paraTxt_16 font_secondary color_black_opacity l_h_6">
														<span className="text_500">
															Lane width (for a pair of lanes):{" "}
														</span>{" "}
														11 feet, 6 inches
													</li>
												</ul> */}
												<div className={`${styles.btn_flex} d_f`}>
													<div className={`${styles.btn_one}`}>
														{/* <Link href="#"> */}
														<a
															className="text_xxs d_f a_center text_400"
															download
															target="_blanks"
															href={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.data[1].attributes.brochure.data.attributes.url}`}
														>
															<img src={download.src} alt="download" /> Download Brochure
														</a>
														{/* </Link> */}
													</div>
													<div className={`${styles.btn_two}`}>
														{/* <Link href="#"> */}
														<a
															className="text_xxs d_f a_center text_400"
															href={data.data[1].attributes.link}
															target="_blanks"
														>
															Visit Brunswick Bowling
														</a>
														{/* </Link> */}
													</div>
												</div>
											</div>
										</div>
									</AccordionItemPanel>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DiverseBowling;
