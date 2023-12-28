// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import { ServerHeaders } from "@/utils/RequestHeaders";
// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../../src/styles/pages/product/intercard/CuttingEdge.module.scss";

// IMAGES //
import arrow from "../../../public/img/arrow.svg";

/** Home Hero Section */
const CuttingEdge = ({ cuttingEdgeData }) => {
	console.log(cuttingEdgeData);
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
	// const parse = require("html-react-parser");
	return (
		<div className={`${styles.ecommerce_slider_main} ptb_100 toTop`} data-scroll>
			<div className="container">
				<div className={`${styles.title_txt} pb_20`}>
					<h2 className="heading_text_45 text_700 pb_20 toTop" data-scroll>
						Cutting Edge Software
					</h2>
				</div>
			</div>

			<div className={`${styles.partner_superior_flex} toTop`} data-scroll>
				<Slider {...settings}>
					{cuttingEdgeData.map((item) => {
						return (
							<div className={`${styles.showcase_box}`} key={item.attributes.Headline}>
								<div className={`${styles.showcase_content}`}>
									<div
										className={`${styles.img_box} commonBorderAnimation whiteCommonBorderAnimation`}
									>
										<div className="dot_one dots_p"></div>
										<div className="dot_two dots_p"></div>
										<div className="dot_three dots_p"></div>
										<img
											className="border_8"
											src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.Thumbnail.data.attributes.url}`}
											alt="img"
										/>
									</div>
									<div className={`${styles.desc_box}`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 text_700 pb_20">
												{item.attributes.Headline}
											</h3>
											<a href={item.attributes.Link} rel="noreferrer">
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
	);
};

export default CuttingEdge;
