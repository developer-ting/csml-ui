// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import { ServerHeaders } from "@/utils/RequestHeaders";
// SECTIONS //
// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../src/styles/pages/NewReleases.module.scss";

//	IMAGES	//
import new_releases_banner from "../public/img/new-releases/new_releases_banner.jpg";
import new_releases_banner_mobile from "../public/img/new-releases/new_releases_banner_mobile.jpg";
import productImg from "../public/img/new-releases/product-img.png";
import arrow from "../public/img/arrow.svg";
import closeIcn from "../public/img/close.svg";
import popIMg from "../public/img/product/amusement-games/pop_img.jpg";
import ytImg from "../public/img/product/amusement-games/youtubeIcn.svg";

/** New Releases Page */
export default function NewReleases({ GamesData }) {
	// console.log(GamesData);

	const [showPopup, setShowPopup] = useState(false);
	const [gameIndex, setGameIndex] = useState(0);
	const popUpGame = GamesData.data[gameIndex].attributes;
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

	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.NewReleasesPage}`}>
				<InsideBanner
					bannerTitle="Discover fresh adventures with <br/> our new releases"
					bannerImg={new_releases_banner.src}
					mobileImg={new_releases_banner_mobile.src}
				/>

				<section
					className={`${styles.NewReleasesSection} dot_animation_box ptb_100`}
				>
					<div className="container">
						<h2 className="heading_text_55 color_white pb_40 toTop" data-scroll>
							New Releases
						</h2>
						<div className="ImgHeadingArrowStyle">
							{GamesData.data.map((item, productItemIndex) => {
								return (
									<div className="BlockInsideInfo" key={item.attributes.GameName}>
										<div className="ProductImg">
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.GameImg.data.attributes.url}`}
												className="border_12"
												alt="product img"
											/>
										</div>
										<div className="text_btn_sec f_r_aj_between">
											<h5 className="paraTxt_18 text_500 color_white">
												{item.attributes.GameName}
											</h5>
											<a>
												<button
													className="btn_arrow"
													onClick={() => openPopup(productItemIndex)}
												>
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
								);
							})}
						</div>
					</div>
				</section>

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
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${popUpGame.GameImg.data.attributes.url}`}
												alt=""
											/>
										</div>
										<div className={styles.popup_content_item}>
											<h3 className={`${styles.popHead} text_24`}>{popUpGame.GameName}</h3>
											<div className={`${styles.paraTxt} paraTxt_16`}>
												{parse(popUpGame.GamePopUpDescription)}
											</div>
											{/* <p className={`${styles.paraTxt} paraTxt_16`}>
												<strong>Dimensions</strong>: {popUpGame.GameDimensions}
											</p>  */}
											<p className={`${styles.paraTxt} paraTxt_16`}>
												{parse(popUpGame.GameDimensions)}
											</p>
											<div className={styles.btn_sec}>
												<a
													className={`${styles.watch_btn}`}
													href={popUpGame.GameYoutubeURL}
													rel="noreferrer"
													target="_blank"
												>
													Watch Video
												</a>
												<img src={ytImg.src} className={styles.ytImg} alt="" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	//New Releases
	const GamesRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/games?populate=*&filters[IsNew][$eq]=true`,
		ServerHeaders
	);
	const GamesData = await GamesRes.json();

	return {
		props: {
			GamesData,
		},
		revalidate: 10,
	};
}
