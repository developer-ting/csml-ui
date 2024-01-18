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
import styles from "../../../styles/sections/product/gokarting/ElectricKarts.module.scss";

// IMAGES //
import closeIcn from "../../../../public/img/close.svg";
import plus_icon from "../../../../public/img/plus_icon.svg";
import sodi_rxs_2 from "../../../../public/img/product/go-karting/sodi_rxs_2.jpg";
import sodi_lrx_kids from "../../../../public/img/product/go-karting/sodi_lrx_kids.jpg";
import sodi_x2drive from "../../../../public/img/product/go-karting/sodi_x2drive.jpg";

/** Home Hero Section */
const ElectricKarts = ({ data }) => {
	console.log(data.data);

	const [showPopup, setShowPopup] = useState(false);
	const [gameIndex, setGameIndex] = useState(0);
	/** openPopup function */
	const openPopup = (id) => {
		setShowPopup(true);
		handleGameIndex(id);
		const bodyTg = document.querySelector("body");
		bodyTg.style.overflow = "hidden";
	};
	/** closePopup function */
	const closePopup = () => {
		setShowPopup(false);
		const bodyTg = document.querySelector("body");
		bodyTg.style.overflow = "unset";
	};
	const handleGameIndex = (id) => {
		setGameIndex(id);
	};

	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
		autoplaySpeed: 5000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					autoplay: true,
				},
			},
		],
		afterChange: (i) => {
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
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	// const parse = require("html-react-parser");
	return (
		<div
			className={`${styles.ecommerce_slider_main} pt_60 pb_100 toTop`}
			data-scroll
		>
			<div className="container">
				<div className={`${styles.title_txt} pb_30`}>
					<h2 className="heading_text_40 text_700 toTop" data-scroll>
						Electric Karts
					</h2>
				</div>
			</div>

			<div className={`${styles.partner_superior_flex} toTop`} data-scroll>
				<Slider {...settings}>
					{data.data[0].attributes.electrickarts.map((item, productItemIndex) => {
						return (
							<div className={`${styles.showcase_box}`}>
								<div className={`${styles.showcase_content}`}>
									{/* {console.log(item)} */}
									<div
										className={`${styles.img_box} commonBorderAnimation whiteCommonBorderAnimation`}
									>
										<div className="dot_one dots_p"></div>
										<div className="dot_two dots_p"></div>
										<div className="dot_three dots_p"></div>
										<img
											className="border_8"
											src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.Image.data.attributes.url}`}
											alt="img"
										/>
									</div>
									<div className={`${styles.desc_box}`}>
										<div className={`${styles.desc_title} f_j`}>
											<h3 className="text_24 text_700 pb_20">{item.title}</h3>
											<a>
												<button
													className="btn_plus"
													onClick={() => openPopup(productItemIndex)}
												>
													<span className={`${styles.arrow_one} arrow_one`}>
														<img src={plus_icon.src} />
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

			{showPopup && (
				<div className={styles.popup_overlay}>
					<div className={styles.popup_content}>
						<div className={styles.popup_content_inner}>
							<div className={styles.popup_header}>
								<button onClick={closePopup}>
									<img src={closeIcn.src} alt="" />
								</button>
							</div>
							<div className={styles.popup_body}>
								<div className={`${styles.popup_flx} row`}>
									<div className={styles.popup_img_item}>
										<img
											src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${data.data[0].attributes.electrickarts[gameIndex].Image.data.attributes.url}`}
											alt=""
										/>
									</div>
									<div className={styles.popup_content_item}>
										<h3 className={`${styles.popHead} text_24`}>
											{data.data[0].attributes.electrickarts[gameIndex].title}
										</h3>
										<div className={`${styles.paraTxt} paraTxt_16`}>
											{parse(data.data[0].attributes.electrickarts[gameIndex].desc)}
										</div>
										<div className={`${styles.li_text} pt_30`}>
											<h4 className="text_md text_500 pb_20">Dimensions</h4>
											{/* {parse(data.data[0].attributes.electrickarts[gameIndex].ulList)} */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ElectricKarts;
