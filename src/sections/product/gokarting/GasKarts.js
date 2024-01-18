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
import styles from "../../../styles/sections/product/gokarting/GasKarts.module.scss";

// IMAGES //
import closeIcn from "../../../../public/img/close.svg";
import plus_icon from "../../../../public/img/plus_icon.svg";
import sodi_rt10 from "../../../../public/img/product/go-karting/sodi_rt10.jpg";
import sodi_lr5_kids from "../../../../public/img/product/go-karting/sodi_lr5_kids.jpg";
import sodi_2drive from "../../../../public/img/product/go-karting/sodi_2drive.jpg";

/** Home Hero Section */
const GasKarts = ({ data }) => {
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
		<div className={`${styles.ecommerce_slider_main} toTop`} data-scroll>
			<div className="container">
				<div className={`${styles.title_txt} pb_30`}>
					<h2 className="heading_text_40 text_700 toTop" data-scroll>
						Gas Karts
					</h2>
				</div>
			</div>

			<div className={`${styles.partner_superior_flex} toTop`} data-scroll>
				<Slider {...settings}>
					{data.data[0].attributes.gaskarts.map((item, productItemIndex) => {
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
					{/* <div className={`${styles.showcase_box}`}>
						<div
							className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}
						>
							<div className={`${styles.img_box}`}>
								<img className="border_8" src={sodi_rt10.src} alt="img" />
							</div>
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 pb_20">SODI RT10</h3>
									<a>
										<button className="btn_plus">
											<span className={`${styles.arrow_one} arrow_one`}>
												<img src={plus_icon.src} />
											</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.showcase_box}`}>
						<div
							className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}
						>
							<div className={`${styles.img_box} `}>
								<img className="border_8" src={sodi_lr5_kids.src} alt="img" />
							</div>
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 pb_20">SODI LR5 (KIDS)</h3>
									<a>
										<button className="btn_plus">
											<span className={`${styles.arrow_one} arrow_one`}>
												<img src={plus_icon.src} />
											</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className={`${styles.showcase_box}`}>
						<div
							className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}
						>
							<div className={`${styles.img_box}`}>
								<img className="border_8" src={sodi_2drive.src} alt="img" />
							</div>
							<div className={`${styles.desc_box}`}>
								<div className={`${styles.desc_title} f_j`}>
									<h3 className="text_24 text_700 pb_20">SODI 2DRIVE</h3>
									<a>
										<button className="btn_plus">
											<span className={`${styles.arrow_one} arrow_one`}>
												<img src={plus_icon.src} />
											</span>
										</button>
									</a>
								</div>
							</div>
						</div>
					</div> */}
				</Slider>
			</div>

			{showPopup && (
				<>
					{/* {popUpData.map((item, productItemIndex) => {
						return ( */}
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
											{/* <img
											src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${popUpData.PopUpImage.data.attributes.url}`}
											alt=""
										/> */}
										</div>
										<div className={styles.popup_content_item}>
											<h3 className={`${styles.popHead} text_24`}>
												{data.data[0].attributes.gaskarts[gameIndex].title}
											</h3>
											<div className={`${styles.paraTxt} paraTxt_16`}>
												{parse(data.data[0].attributes.gaskarts[gameIndex].desc)}
											</div>
											<div className={`${styles.li_text} pt_30`}>
												<h4 className="text_md text_500 pb_20">Project Highlights</h4>
												{/* {parse(imgData.attributes.popDesc)} */}gui
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* );
					})} */}
				</>
			)}
		</div>
	);
};

export default GasKarts;
