// MODULES //
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// COMPONENTS //
import AccessoriesCard from "./AccessoriesCard";

// SECTIONS //

// PLUGINS //

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../styles/components/accessories.module.scss";

// IMAGES //
import Accessories_img from "../../public/img/brunswick-bowling/accessories.jpg";

/** Home Hero Section */
const Accessories = ({ data }) => {
	const sliderRef = useRef();
	const [count, setCount] = useState(1);

	var settings1 = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		// fade: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		speed: 1000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					// variableWidth: false,
					autoplay: true,
				},
			},
		],
		afterChange: (i) => {
			setCount(i + 1);
			fillProgress(i + 1);
		},
	};

	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		// fade: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		speed: 1000,
		variableWidth: true,
		afterChange: (i) => {
			setCount(i + 1);
			fillProgress(i + 1);
		},
	};

	const [progressWidth, setProgressWidth] = useState(0);

	useEffect(() => {
		fillProgress(1);
	}, []);

	const fillProgress = (currInd) => {
		setProgressWidth((currInd / 4) * 100);
	};
	return (
		<div className={`${styles.accessories} ptb_100`}>
			<div className="container">
				<h2 className="heading_text_55 pb_50 color_white toTop" data-scroll>
					Accessories To Elevate <br className="hidden-xs" />
					Your Center Success
				</h2>
				<div className={`${styles.Lane_accessories}`}>
					<h3 className="text_l color_white text_400 pb_40">Lane Accessories</h3>
					<div className={`${styles.slider_section}`}>
						<Slider {...settings} ref={sliderRef}>
							{data.data[0].attributes.LaneAccessorie.map((item, ind) => {
								return (
									<div className={`${styles.slid_item} color_white`}>
										<AccessoriesCard
											title={item.title}
											boxImg={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.ImageUrl.data.attributes.url}`}
											desc={item.desc}
										/>
									</div>
								);
							})}
						</Slider>
						<div className={`${styles.progress_div} container`}>
							<div className={`${styles.progress_bar}`}>
								<div
									style={{ width: `${progressWidth}%` }}
									className={`${styles.color_div}`}
								></div>
							</div>
						</div>
					</div>
					<h3 className="text_l color_white text_400 pt_80 pb_40">Masking Units</h3>
					<div className={`${styles.slider_section}`}>
						<Slider {...settings1} ref={sliderRef}>
							{data.data[0].attributes.MaskingUnits.map((item, ind) => {
								return (
									<div className={`${styles.slid_item} color_white`}>
										<AccessoriesCard
											title={item.title}
											boxImg={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.ImageUrl.data.attributes.url}`}
											desc={item.desc}
										/>
									</div>
								);
							})}
						</Slider>
						<div className={`${styles.progress_div} container`}>
							<div className={`${styles.progress_bar}`}>
								<div
									style={{ width: `${progressWidth}%` }}
									className={`${styles.color_div}`}
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Accessories;
