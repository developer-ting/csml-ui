// MODULES //
import { useEffect, useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// STYLES //
import styles from "../styles/components/sync.module.scss";

// IMAGES //
import sync_img from "../../public/img/brunswick-bowling/sync_img.jpg";
import sync_img_two from "../../public/img/brunswick-bowling/sync_img_two.jpg";
import video_img from "../../public/img/brunswick-bowling/video_img.jpg";
import play from "../../public/img/brunswick-bowling/play.svg";

/** Home Hero Section */
const Sync = () => {
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
	return (
		<section className={`${styles.sync} dot_animation_box pt_100`}>
			<div className="container">
				<div className={`${styles.sync_info}`}>
					<h2 className="heading_text_55 color_white pb_30 text_center toTop" data-scroll>
						SYNC Scoring System – The world’s <br />
						fastest-selling bowling scoring system
					</h2>
					<h4 className="text_24 text_600 color_white pb_20 text_center">It’s all in Sync®</h4>
					<p className="paraTxt_18 color_white_opacity l_h_6 text_center">
					Brunswick's Sync® Center Operations is the industry's top-scoring and management system. This cloud-based technology automates marketing, offers powerful management tools and enhances the guest experience. Since its 2015 release, Brunswick has remained committed to improving operations and profitability while addressing challenges.</p>
				</div>
			</div>
			<div className={`${styles.ecommerce_slider_main} pt_40 toTop`} data-scroll>
				<div className={`${styles.partner_superior_flex}`}>
					<Slider {...settings}>
						<div className={`${styles.luminaries_box}`}>
							<div className={`${styles.luminaries_content}`}>
								<img className="border_8" src={sync_img.src} alt="img" />
								<div className={`${styles.desc_box}`}>
									<div className={`${styles.desc_title}`}>
										<h3 className="text_24 color_white text_600 pb_20">Sync Prima</h3>
									</div>
									<p className="paraTxt_16 l_h_6 color_white">Experience the pinnacle of center operating software with Sync Prima™ from Brunswick. This cutting-edge solution offers unparalleled scoring capabilities, incorporating advanced mobile and self-service technologies. </p>
								</div>
							</div>
						</div>
						<div className={`${styles.luminaries_box}`}>
							<div className={`${styles.luminaries_content}`}>
								<img className="border_8" src={sync_img_two.src} alt="img" />
								<div className={`${styles.desc_box}`}>
									<div className={`${styles.desc_title}`}>
										<h3 className="text_24 color_white text_600 pb_20">SYNC® Scoring Consoles High-Tech, Long-lasting Hardware</h3>
									</div>
									<p className="paraTxt_16 l_h_6 color_white">Revolutionize your bowling center experience with SYNC® Scoring Consoles. Available in sleek Black and Titanium, these state-of-the-art tablets or keypads seamlessly integrate with the Brunswick Cloud, ensuring effortless </p>
								</div>
							</div>
						</div>
						<div className={`${styles.luminaries_box}`}>
							<div className={`${styles.luminaries_content}`}>
								<img className="border_8" src={sync_img_two.src} alt="img" />
								<div className={`${styles.desc_box}`}>
									<div className={`${styles.desc_title}`}>
										<h3 className="text_24 color_white text_600 pb_20">Sync® Games <br className="hiiden-xs" />Games for all Guests</h3>
									</div>
									<p className="paraTxt_16 l_h_6 color_white">Introducing SYNC® GAMES, a seamless and exhilarating addition to your bowling experience. These user-friendly games, including E-Z Bowling, Rival Rumble, Pinpix, Angry Birds Bowling, and more, are designed </p>
								</div>
							</div>
						</div>
						<div className={`${styles.luminaries_box}`}>
							<div className={`${styles.luminaries_content}`}>
								<img className="border_8" src={sync_img_two.src} alt="img" />
								<div className={`${styles.desc_box}`}>
									<div className={`${styles.desc_title}`}>
										<h3 className="text_24 color_white text_600 pb_20">Crown® Advantage™</h3>
									</div>
									<p className="paraTxt_16 l_h_6 color_white">Crown Advantage™, the pioneer in all-inclusive centre operating subscriptions. This groundbreaking solution offers a comprehensive package that includes cutting-edge Sync software updates and a </p>
								</div>
							</div>
						</div>
						
					</Slider>
				</div>
			</div>
			<div className="container pb_100">
				<div className={`${styles.progress_div} pb_100`}>
					<div className={`${styles.progress_bar}`}>
						<div
							style={{ width: `${progressWidth}%` }}
							className={`${styles.color_div}`}
						></div>
					</div>
				</div>
			</div>
			<div className={`${styles.intertainment_right} toTop`} data-scroll>
				<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
					<a href="https://youtu.be/75yhYazRwRs?feature=shared">
						<div className={`${styles.video_box}`}>
							<img
								className={`${styles.video_img} img width_100`}
								src={video_img.src}
							/>
							<div className={`${styles.video_play}`}>
								<img
									src={play.src}
									className={`${styles.gallery_plus}`}
									alt="play"
								/>
							</div>
						</div>
					</a>
				</LightGallery>
			</div>
		</section>
	);
};

export default Sync;
