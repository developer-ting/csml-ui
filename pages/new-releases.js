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
import new_releases_banner from "../public/img/new-releases/Picture3.jpg";
import new_releases_banner_mobile from "../public/img/new-releases/Picture3.jpg";
import productImg from "../public/img/new-releases/product-img.png";
import plus_icon from "../public/img/plus_icon.svg";
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
			<Head>
				<title>Discover Fresh Arrivals for Game Zone & Family Entertainment Centers | CSML Group</title>
				<meta name="description" content="Explore exciting new arrivals for Game Zone and Family Entertainment Centers by CSML. Dive into the latest adventures and thrilling gaming experiences today!" />
				<meta name="og:title" content="Discover Fresh Arrivals for Game Zone & Family Entertainment Centers | CSML Group" />
				<meta name="og:description" content="Explore exciting new arrivals for Game Zone and Family Entertainment Centers by CSML. Dive into the latest adventures and thrilling gaming experiences today!" />
				<meta name="keywords" content="Fresh Arrival for Game Zone, New Arrival at Game Zone, Fresh Arrival at Family Entertainment Centers, New Arrival at Family Entertainment Center, New Game Arrival."/>
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
				<meta
					property="og:image"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<meta
					property="og:image:secure_url"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<meta httpEquiv="revisit-after" content="3 days"/>
				<link rel="icon" href="/img/favicon.png" />
				<link rel="canonical" href="https://csmlgroup.com/new-releases"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.NewReleasesPage}`}>
				<InsideBanner
					bannerTitle="Discover Fresh Adventures With <br/> Our New Releases"
					bannerImg={new_releases_banner.src}
					mobileImg={new_releases_banner_mobile.src}
					alt1="New Release Arcade Games"
					alt2="New Release Arcade Games"
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
										<img src={closeIcn.src} alt="icon" />
									</button>
								</div>
								<div className={styles.popup_body}>
									<div className={`${styles.popup_flx} row`}>
										<div className={styles.popup_img_item}>
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${popUpGame.GameImg.data.attributes.url}`}
												alt="product img"
											/>
											{popUpGame.IsNew && (
												<h6 className={styles.NewRelease}>New Releases</h6>
											)}
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
											<div className={`${styles.btn_sec} games_popup_youtube_link pb_20`}>
												<a
													className={`${styles.watch_btn}`}
													href={popUpGame.GameYoutubeURL}
													rel="noreferrer"
													target="_blank"
												>
													Watch Video <img src={ytImg.src} className={styles.ytImg} alt="youtube" />
												</a>
												<a
													className={`${styles.watch_btn}`}
													href={popUpGame.GameYoutubeURLOption2}
													rel="noreferrer"
													target="_blank"
												>
													Watch Video <img src={ytImg.src} className={styles.ytImg} alt="youtube" />
												</a>
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
