// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/Showcase.module.scss";

// IMAGES //
import showcase from "../../../public/img/home/showcase.jpg";
import surat from "../../../public/img/home/surat.jpg";
import bengaluru from "../../../public/img/home/bengaluru.jpg";
import showcase_two from "../../../public/img/home/showcase_two.jpg";
import showcase_three from "../../../public/img/home/showcase_three.jpg";
import arrow from "../../../public/img/arrow.svg";

/** Home Hero Section */
export default function Showcase({ showcaseData }) {
	// console.log(showcaseData);
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
		setProgressWidth((currInd / showcaseData.length) * 100);
	};

	return (
		<section className={`${styles.showcase_wrap} dot_animation_box pb_100`}>
			<div className="container">
				<div className={`${styles.section_title} pb_30 f_j toTop`} data-scroll>
					<h2 className="heading_text_55 color_white">A showcase of success </h2>
					<div className={`${styles.btn_height}`}>
						<a href="#" rel="noreferrer">
							<span className="span_btn">
								<button className="btn_project_default color_white">View All</button>
							</span>
						</a>
					</div>
				</div>
				<div className={`${styles.showcase_main} toTop`} data-scroll>
					<Slider {...settings}>
						{showcaseData.map((item) => {
							return (
								<div
									className={`${styles.showcase_box}`}
									key={item.attributes.ShowcaseHeading}
								>
									<div className={`${styles.showcase_content}`}>
										<div className={`${styles.img_box} commonBorderAnimation`}>
											<div className="dot_one dots_p"></div>
											<div className="dot_two dots_p"></div>
											<div className="dot_three dots_p"></div>
											<img
												className="border_8"
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.ShowcaseImg.data.attributes.url}`}
												alt="img"
											/>
										</div>
										<div className={`${styles.desc_box}`}>
											<div className={`${styles.desc_title} f_j`}>
												<h3 className="text_24 color_white text_400 pb_20">
													{item.attributes.ShowcaseHeading}
												</h3>
												<a href={item.attributes.ShowcaseURL} rel="noreferrer">
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
		</section>
	);
}
