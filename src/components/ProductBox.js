// MODULES //
import { useEffect, useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import arrow from "../../public/img/arrow.svg";
import closeIcn from "../../public/img/close.svg";
import styles from "../../src/styles/components/ProductBox.module.scss";

// IMAGES //
import services_banner from "../../public/img/project/banner.jpg";

/** tab button*/
const ProductBox = ({ title, red, ProductImg, index }) => {
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

	return (
		<>
			<div className="commonBorderAnimation">
				<div className="ProductImg">
					<img src={ProductImg} className="border_12" alt="product img" />
				</div>
				<div className={`${styles.product_bottom_box} text_btn_sec f_r_aj_between`}>
					<h5 className="text_md text_500 color_white">{title}</h5>
					<a href="#" rel="noreferrer">
						<button className="btn_arrow" onClick={() => openPopup(index)}>
							<span className={`${styles.arrow_one} arrow_one`}>
								<img src={arrow.src} />
							</span>
							<span className={`${styles.arrow_two} arrow_two`}>
								<img src={arrow.src} />
							</span>
						</button>
					</a>
					<div className={`${red && styles.color_red} dot_two dots_p`}></div>
					<div className={`${red && styles.color_red} dot_three dots_p`}></div>
				</div>
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
										<h1>HIHGLIFJPOE;JRG</h1>
										{/* <img
											src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${activeGameCategories.games.data[gameIndex].attributes.GameImg.data.attributes.url}`}
											alt=""
										/> */}
									</div>
									<div className={styles.popup_content_item}>
										<h3 className={`${styles.popHead} text_24`}>
											{/* {activeGameCategories.games.data[gameIndex].attributes.GameName} */}
										</h3>
										<p className={`${styles.paraTxt} paraTxt_16`}>
											{/* {
												activeGameCategories.games.data[gameIndex].attributes
													.GameDescription
											} */}
											lkok
										</p>
										<p className={`${styles.paraTxt} paraTxt_16`}>
											<strong>Dimensions</strong>:
											{/* {
												activeGameCategories.games.data[gameIndex].attributes.GameDimensions
											} */}
											kjfeopjf
										</p>
										<div className={styles.btn_sec}>
											<a className={`${styles.watch_btn}`} href="eijfi" rel="noreferrer">
												Watch Video
												{/* <img src={ytImg.src} className={styles.ytImg} alt="" /> */}
											</a>
										</div>
									</div>
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
