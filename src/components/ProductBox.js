// MODULES //
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from "html-react-parser";

// STYLES //
import plus_icon from "../../public/img/plus_icon.svg";
import closeIcn from "../../public/img/close.svg";
import styles from "../../src/styles/components/ProductBox.module.scss";

// IMAGES //
import services_banner from "../../public/img/project/banner.jpg";

/** tab button*/
const ProductBox = ({ title, red, ProductImg, index, imgData }) => {
	const sliderRef = useRef();
	const [showPopup, setShowPopup] = useState(false);

	/** openPopup function */
	const openPopup = (id) => {
		setShowPopup(true);
		const bodyTg = document.querySelector("body");
		bodyTg.style.overflow = "hidden";
	};
	/** closePopup function */
	const closePopup = () => {
		setShowPopup(false);
		const bodyTg = document.querySelector("body");
		bodyTg.style.overflow = "unset";
	};

	var settings = {
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 1,
		autoplay: true,
		// fade: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		speed: 1000,

		// prevArrow: (
		// 	<button className={`${styles.prevarrow} about_prevarrow`}>
		// 		<Image src={slider_aarow_prev.src} alt="arrow" width={9} height={15} />
		// 	</button>
		// ),
		// nextArrow: (
		// 	<button className={`${styles.nextarrow} about_nextarrow`}>
		// 		<Image src={slider_aarow_next.src} alt="arrow" width={9} height={15} />
		// 	</button>
		// ),
	};

	// console.log(imgData);
	return (
		<>
			<div className="commonBorderAnimation">
				<div className="ProductImg">
					<img src={ProductImg} className="border_12" alt="product img" />
				</div>
				<div className={`${styles.product_bottom_box} text_btn_sec f_r_aj_between`}>
					<h5 className="text_md text_500 color_white">{title}</h5>
					<div rel="noreferrer">
						<button className="btn_plus" onClick={() => openPopup(index)}>
							<span className={`${styles.arrow_one} arrow_one`}>
								<img src={plus_icon.src} alt="icon" />
							</span>
						</button>
					</div>
					<div className={`${red && styles.color_red} dot_two dots_p`}></div>
					<div className={`${red && styles.color_red} dot_three dots_p`}></div>
				</div>
			</div>

			{showPopup && (
				<div className={styles.popup_overlay}>
					<div className={styles.popup_content}>
						<div className={styles.popup_content_inner}>
							<div className={`${styles.popup_header}`}>
								<button onClick={closePopup}>
									<img src={closeIcn.src} alt="icon" />
								</button>
							</div>
							<div className={styles.popup_body}>
								<h4 className="heading_text_55 pb_20">
									{imgData.attributes.productTitle}
								</h4>
								<div className={`${styles.popup_flx}`}>
									<Slider {...settings} ref={sliderRef}>
										{imgData.attributes.ImagePopUrl.data.map((item, ind) => {
											return (
												<div className={`${styles.slid_item} color_white`}>
													<img
													alt="product popup"
														src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.url}`}
													/>
												</div>
											);
										})}
									</Slider>
								</div>
								<div className={`${styles.li_text} pt_30`}>
									<h4 className="text_md text_500 pb_20">Project Highlights</h4>
									{parse(imgData.attributes.popDesc)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProductBox;
