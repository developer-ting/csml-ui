// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import { ServerHeaders } from "@/utils/RequestHeaders";

// SECTIONS //
// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../../src/styles/pages/product/AmusementGames.module.scss";

//	IMAGES	//
import amusement_gamebanner from "../../public/img/product/amusement-games/amusement_gamebanner.jpg";
import amusement_gamebanner_mobile from "../../public/img/product/amusement-games/amusement_gamebanner_mobile.jpg";
import productImg from "../../public/img/product/amusement-games/product-img.png";
import plus_icon from "../../public/img/plus_icon.svg";
import closeIcn from "../../public/img/close.svg";
import popIMg from "../../public/img/product/amusement-games/pop_img.jpg";
import ytImg from "../../public/img/product/amusement-games/youtubeIcn.svg";

/** Amusement Games Page */
export default function AmusementGames({ GamesCategoriesData }) {
	console.log(GamesCategoriesData, "test");

	// const sortedData =
	// 	GamesCategoriesData?.data[0]?.attributes?.games_sub_categories?.data.sort(
	// 		(a, b) => {
	// 			return b.attributes.order - a.attributes.order;
	// 		}
	// 	);

	// console.log(sortedData, "sorted");

	const [showPopup, setShowPopup] = useState(false);
	const [mainCategoriesIndex, setMainCategoriesIndex] = useState(0);
	const [subCategoriesIndex, setSubCategoriesIndex] = useState(0);
	const [gameIndex, setGameIndex] = useState(0);
	const [subCategoryData, setSubCategoryData] = useState();
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

	const handleMainCategoriesIndex = (id) => {
		handleSubCategoriesIndex(0);
		handleGameIndex(0);
		setMainCategoriesIndex(id);
	};
	const handleSubCategoriesIndex = (id) => {
		handleGameIndex(0);
		setSubCategoriesIndex(id);
	};
	const handleGameIndex = (id) => {
		setGameIndex(id);
	};

	const activeGameCategories =
		GamesCategoriesData.data[mainCategoriesIndex].attributes.games_sub_categories
			.data[subCategoriesIndex].attributes;

	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	console.log(activeGameCategories);

	return (
		<div>
			<Head>
				<title>Arcade Games Distributor in India | CSML Group</title>
				<meta name="description" content="Discover CSML, India's top arcade games distributor, offering a wide range of exciting and interactive arcade machines for gaming zones, malls, and entertainment centers across the country." />
				<meta name="og:title" content="Arcade Games Distributor in India | CSML Group" />
				<meta name="og:description" content="Discover CSML, India's top arcade games distributor, offering a wide range of exciting and interactive arcade machines for gaming zones, malls, and entertainment centers across the country." />
				<meta name="keywords" content="Arcade Games, Arcade Games Distributor in India, Arcade Games Distributor, Arcade Games Provider in India."/>
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
				<link rel="canonical" href="https://csmlgroup.com/product/arcade-games"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.AmusementGamesPage}`}>
				<InsideBanner
					bannerTitle="Crafting Timeless Joy From <br className='hidden-xs'> Retro Gems To Futuristic Thrills"
					bannerImg={amusement_gamebanner.src}
					mobileImg={amusement_gamebanner_mobile.src}
				/>

				<section className={`${styles.GamesSection} dot_animation_box ptb_100`}>
					<div className="container">
						<div className={`${styles.games_info_sec} f_w_j`}>
							<div className={`${styles.games_filter_sec} pt_10`}>
								<div className="product_filer_sec">
									<div className="product_names">
										<a href="/new-releases" rel="noreferrer">
											<h5 className="paraTxt_18 text_600 ptb_10">New Release</h5>
										</a>
									</div>
									{GamesCategoriesData.data.map((item, mainCatIndex) => {
										return (
											<div className="product_names" key={item.attributes.CategoryNames}>
												<h5
													className="paraTxt_18 text_600 ptb_10"
													onClick={() => handleMainCategoriesIndex(mainCatIndex)}
												>
													{item.attributes.CategoryNames}
												</h5>
												{item.attributes.games_sub_categories.data
													.sort((a, b) => {
														return b.attributes.order - a.attributes.order;
													})
													.map((subCategoriesItem, subCatIndex) => {
														return (
															<h6
																className={`paraTxt_16 color_black_opacity pb_20 ${
																	subCategoriesIndex == subCatIndex && "active_product"
																}`}
																onClick={() => handleSubCategoriesIndex(subCatIndex)}
																key={subCategoriesItem.attributes.games.data.length}
															>
																{subCategoriesItem.attributes.SubCategoriesName}{" "}
																{/* <span className="product_count">
																	({subCategoriesItem.attributes.games.data.length})
																</span> */}
															</h6>
														);
													})}
											</div>
										);
									})}
								</div>
							</div>
							<div className={`${styles.games_product_sec}`}>
								<div className={`${styles.product_info_style}`}>
									<h2 className="heading_text_55 color_white pb_20">
										{activeGameCategories.SubCategoriesName}
									</h2>
									<h4 className="text_24 text_500 color_white pb_40">
										{activeGameCategories.SubCategoriesDescription}
									</h4>
									<div className={`${styles.product_info_style}`}>
										<div className="ImgHeadingArrowStyle">
											{activeGameCategories.games.data.map(
												(gamesProductItem, productItemIndex) => {
													return (
														<div
															className="BlockInsideInfo"
															key={gamesProductItem.attributes.GameName + Math.random()}
														>
															<div className="ProductImg">
																<img
																	src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${gamesProductItem.attributes.GameImg.data.attributes.url}`}
																	className="border_12"
																	alt="product img"
																/>
																{gamesProductItem.attributes.IsNew && (
																	<h6 className="NewRelease">New Releases</h6>
																)}
															</div>
															<div className="text_btn_sec f_r_aj_between">
																<h5 className="paraTxt_18 text_500 color_white">
																	{gamesProductItem.attributes.GameName}
																</h5>
																<a>
																	<button
																		className="btn_plus"
																		onClick={() => openPopup(productItemIndex)}
																	>
																		<span className={`${styles.arrow_one} arrow_one`}>
																			<img src={plus_icon.src} alt="icon" />
																		</span>
																	</button>
																</a>
															</div>
														</div>
													);
												}
											)}
										</div>
									</div>
								</div>
							</div>
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
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${activeGameCategories.games.data[gameIndex].attributes.GameImg.data.attributes.url}`}
												alt="product image"
											/>
											{activeGameCategories.games.data[gameIndex].attributes.IsNew && (
												<h6 className={styles.NewRelease}>New Releases</h6>
											)}
										</div>
										<div className={styles.popup_content_item}>
											<h3 className={`${styles.popHead} text_24`}>
												{activeGameCategories.games.data[gameIndex].attributes.GameName}
											</h3>
											<div className={`${styles.paraTxt} paraTxt_16`}>
												{parse(
													activeGameCategories.games.data[gameIndex].attributes
														.GamePopUpDescription
												)}
											</div>
											<p className={`${styles.paraTxt} paraTxt_16`}>
												{/* <strong>Dimensions</strong>:{" "} */}
												{/* {
													activeGameCategories.games.data[gameIndex].attributes
														.GameDimensions
												} */}
												{parse(
													activeGameCategories.games.data[gameIndex].attributes
														.GameDimensions
												)}
											</p>
											<div className={`${styles.btn_sec} games_popup_youtube_link pb_20`}>
												<a
													className={`${styles.watch_btn}`}
													href={
														activeGameCategories.games.data[gameIndex].attributes
															.GameYoutubeURL
													}
													rel="noreferrer"
													target="_blank"
												>
													Watch Video <img src={ytImg.src} className={styles.ytImg} alt="youtube" />
												</a>
												<a
													className={`${styles.watch_btn}`}
													href={
														activeGameCategories.games.data[gameIndex].attributes
															.GameYoutubeURLOption2
													}
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
	//
	// const GamesCategoriesRes = await fetch(
	// 	`${process.env.STRAPI_DO_BASE_URL}/api/games-categories?populate[games_sub_categories][populate]=games.GameImg`,
	// 	ServerHeaders
	// );
	const GamesCategoriesRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/games-categories?populate[games_sub_categories][populate]=games.GameImg`,
		ServerHeaders
	);
	const GamesCategoriesData = await GamesCategoriesRes.json();

	// console.log(sortedData);

	return {
		props: {
			GamesCategoriesData,
		},
		revalidate: 10,
	};
}
