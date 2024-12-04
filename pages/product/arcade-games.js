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
import amusement_gamebanner from "../../public/img/product/amusement-games/Picture1.jpg";
import amusement_gamebanner_mobile from "../../public/img/product/amusement-games/Picture1.jpg";
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
				<title>CSML - Delivering Premium Arcade Games for Every Venue</title>
				<meta name="description" content="Level up your entertainment offerings with CSML! Explore our premium arcade game range designed to boost guest engagement and drive revenue in every gaming zone." />
				<meta name="og:title" content="CSML - Delivering Premium Arcade Games for Every Venue" />
				<meta name="og:description" content="Level up your entertainment offerings with CSML! Explore our premium arcade game range designed to boost guest engagement and drive revenue in every gaming zone." />
				<meta name="keywords" content="Buy Arcade Games, Arcade Games Cost, Types of Arcade Games,Arcade Games, Arcade Games Distributor in India, Arcade Games Distributor, Arcade Games Provider in India."/>
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
					isChange={true}
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
											<div className="product_names mt_20" key={item.attributes.CategoryNames}>
												{/*<h5*/}
												{/*	className="paraTxt_18 text_600 ptb_10"*/}
												{/*	onClick={() => handleMainCategoriesIndex(mainCatIndex)}*/}
												{/*>*/}
												{/*	{item.attributes.CategoryNames}*/}
												{/*</h5>*/}
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
									{
										activeGameCategories.SubCategoriesName === 'Arcade Games' ? (
												<h1 className="paraTxt_24 color_white pb_20">
												{activeGameCategories.SubCategoriesDescription}
											</h1>
										) : activeGameCategories.SubCategoriesName === 'Photo Booth' ? (
											<h4 className="text_24 text_500 color_white pb_40">
												{activeGameCategories.SubCategoriesDescription}
											</h4>
										): activeGameCategories.SubCategoriesName === 'Ticket Eater' ? (
											<h4 className="text_24 text_500 color_white pb_40">
												{activeGameCategories.SubCategoriesDescription}
											</h4>
										): null
									}
									<div className={`${styles.product_info_style}`}>
										{
											activeGameCategories.SubCategoriesName === 'Arcade Games' ? (
												<div className="row">
													<div className="col-12">
														<p className="paraTxt_16 color_white">
															Step into the electrifying universe of arcade games with CSML, your trusted distributor for premium gaming equipment! Our collection features everything from action-packed video games to immersive VR experiences and classic redemption games. Whether you're looking to upgrade your entertainment center or build a new one, our latest attractions are designed to captivate players of all ages. <br/><br/>
															With CSML's carefully curated selection of arcade games, your venue can attract more visitors, increase foot traffic, and maximize returns. Our solutions are engineered to not only engage players but also boost your bottom line by providing a high-energy experience that keeps guests coming back. Team up with CSML to transform your venue into a vibrant hub of excitement and profit. Together, we can create lasting memories and generate consistent revenue growth.
														</p>
													</div>

													<div className="col-12 pt_60">
														<h2 className="paraTxt_24 color_white pb_20">
															Full lineup of high-quality arcade games from industry-leading manufacturers
														</h2>
														<p className="paraTxt_16 color_white">
															We offer an extensive range of new and classic arcade games, perfect for creating engaging entertainment spaces. Our team of experts is dedicated to helping you select a tailored game mix that suits your business needs, audience preferences, and budget. With us, find the ideal games to enhance customer experience and maximize your investment.
														</p>
													</div>

													{/*<div className="col-12 pt_60">*/}
													{/*	<h2 className="paraTxt_24 text_500 color_white pb_20">*/}
													{/*		Level Up with These Crowd-Pleasing Arcade Games*/}
													{/*	</h2>*/}
													{/*	<p className="paraTxt_16 color_white">*/}
													{/*		Here are various types of arcade games suitable for entertainment centers and game zones, each described in a concise manner:*/}
													{/*	</p>*/}
													{/*</div>*/}
												</div>
											) : (
												<div className="row">
													<div className="col-12">
														{
															activeGameCategories.SubCategoriesName === 'Video Games' ? (
																<>
																	<h2 className="paraTxt_24 pb_10 color_white">
																		High-Performance Entertainment with Strong ROI
																	</h2>
																	<p className="paraTxt_16 pb_40 color_white">
																		Invest in cutting-edge video game attractions that offer high player engagement and repeat visits. From immersive car and bike racing to competitive solo modes, these games provide visually stunning experiences that drive foot traffic and create opportunities for consistent revenue growth.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'Shooting Games' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Precision and Profit: Capitalizing on Action-Packed Gameplay
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Shooting games are proven crowd-pleasers that blend intense action with skill-based challenges. With every shot, players are drawn into fast-paced gameplay, making these games ideal for high player retention and increased spend per visit. These attractions are designed to keep customers coming back for more.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'Ticket Redemption' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Boost Engagement and Revenue with Reward-Based Play
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Ticket redemption games provide a powerful incentive for customers to spend more time—and money—while in your venue. As players rack up tickets and exchange them for exciting prizes, they experience a sense of achievement, leading to longer play times and more repeat visits. The perfect strategy for driving both engagement and profits.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'Prize Redemption' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Incentivize Play and Maximize Profits with Prize-Based Rewards
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Prize redemption games are a proven model for increasing customer dwell time and spend. By offering a range of appealing prizes—from toys to high-tech gadgets—these games create an ongoing cycle of play and reward that enhances customer satisfaction and boosts in-venue spending.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'Table Games' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Timeless Social Entertainment for Higher Returns
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Table games like pool and air hockey offer timeless entertainment, creating a social atmosphere that encourages longer visits and increased spending. These games are ideal for venues looking to offer both competitive play and relaxed social experiences that cater to a wide range of demographics.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'VR Games' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Immersive VR Experiences Driving Premium Engagement
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Virtual reality (VR) games represent the future of arcade entertainment, offering immersive, high-impact experiences that draw in tech-savvy audiences. By incorporating VR, you can cater to a growing demand for next-generation entertainment, creating a high-margin, high-engagement attraction that encourages repeat visits and higher spend.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'Retro Games' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Reviving Nostalgia to Drive Traffic and Profit
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Classic retro games have a timeless appeal, attracting both nostalgic adults and a younger generation eager to discover arcade history. Investing in retro games offers a unique way to create a diverse entertainment experience, tapping into multiple audience segments and encouraging repeat foot traffic in your venue.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'Simulator' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Real-Life Thrills for Maximum Player Investment
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Simulators offer a unique way to immerse customers in high-adrenaline experiences, whether they're flying planes, racing cars, or exploring new worlds. These attractions deliver a unique, highly-engaging experience that commands higher ticket prices and attracts a wide range of customers, from thrill-seekers to families.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === 'Dance Machine' ? (
																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		High-Energy Fun That Drives Foot Traffic and Revenue
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Dance machines provide a fun, competitive environment that keeps players engaged and motivates them to spend more. Perfect for venues looking to capitalize on social, interactive entertainment, these machines attract groups and encourage longer sessions, which can significantly impact your bottom line.
																	</p>
																</>
															) : activeGameCategories.SubCategoriesName === "Kids Attraction" ? (

																<>
																	<h2 className="paraTxt_24 pb_20 color_white">
																		Captivating Young Audiences for Long-Term Loyalty
																	</h2>
																	<p className="paraTxt_16 pb_20 color_white">
																		Investing in safe, interactive kids' attractions offers a great opportunity to capture family audiences and create a positive environment that encourages repeat visits. These attractions foster imagination and creativity, while also promoting extended playtime, leading to increased dwell time and greater revenue per visit.
																	</p>
																</>
															) : (
																<>
																</>
															)
														}
													</div>
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
											)
										}
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
