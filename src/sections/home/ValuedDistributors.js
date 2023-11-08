// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/ValuedDistributors.module.scss";

// IMAGES //
import sodikart from "../../../public/img/home/sodikart.png";
import sega_logo from "../../../public/img/home/sega_logo.png";
import brunswick from "../../../public/img/home/brunswick.png";
import tm_logo from "../../../public/img/home/tm_logo.png";
import raw_logo from "../../../public/img/home/raw_logo.png";
import lai_logo from "../../../public/img/home/lai_logo.png";
import funshare from "../../../public/img/home/funshare.png";
import cheer from "../../../public/img/home/cheer.png";

/** Home Hero Section */
export default function ValuedDistributors() {
	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 3,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
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

	return (
		<section className={`${styles.valued_distributors_wrap} pb_100`}>
			<div className="container">
				<div className={`${styles.section_title}`}>
					<h2 className="heading_text_40 pb_20">Our valued distributors </h2>
				</div>
				<div
					className={`${styles.valued_distributors_border} border_animation white_border_animation`}
				>
					<div className="dot_one dots_p"></div>
					<div className="dot_two dots_p"></div>
					<div className="dot_three dots_p"></div>
					<div className={`${styles.valued_logo}`}>
						<Slider {...settings}>
							<div className={`${styles.valued_item}`}>
								<img className="" src={sodikart.src} alt="logo" />
							</div>
							<div className={`${styles.valued_item}`}>
								<img className="" src={sega_logo.src} alt="logo" />
							</div>
							<div className={`${styles.valued_item}`}>
								<img className="" src={brunswick.src} alt="logo" />
							</div>
							<div className={`${styles.valued_item}`}>
								<img className="" src={tm_logo.src} alt="logo" />
							</div>
							<div className={`${styles.valued_item}`}>
								<img className="" src={raw_logo.src} alt="logo" />
							</div>
							<div className={`${styles.valued_item}`}>
								<img className="" src={lai_logo.src} alt="logo" />
							</div>
							<div className={`${styles.valued_item}`}>
								<img className="" src={funshare.src} alt="logo" />
							</div>
							<div className={`${styles.valued_item}`}>
								<img className="" src={cheer.src} alt="logo" />
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
}
