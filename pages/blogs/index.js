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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { format } from "date-fns";

// STYLES //
import styles from "../../src/styles/pages/Blogs.module.scss";

//	IMAGES	//
import blog_banner from "../../public/img/blog/blog_banner.jpg";
import blog_banner_mobile from "../../public/img/blog/blog_banner_mobile.jpg";
import BlogImg from "../../public/img/blog/blog-img.jpg";
import arrow from "../../public/img/arrow.svg";

/** Blog Page */
export default function Blog({ BlogData }) {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.BlogPage}`}>
				<InsideBanner
					bannerTitle="Stay Plugged In with the <br className='hidden-xs'>Industry Trends"
					bannerImg={blog_banner.src}
					mobileImg={blog_banner_mobile.src}
				/>

				<section className="dot_animation_box text_center ptb_60">
					<div className="container">
						<div className="width80">
							<p className="text_24 color_white_opacity l_h_6 toTop" data-scroll>
								Stay in the loop on the latest trends, innovations, and insider
								insights. From cutting-edge setups to revolutionary gameplay, we've got
								you covered. Explore, learn, and roll with us as we redefine the arena
								gaming experience.
							</p>
						</div>
					</div>
				</section>

				<section className={`${styles.blog_main_section} ptb_80`}>
					<div className="container">
						<h2 className="heading_text_55 text_center">Blog & Articles</h2>
						<div className={`${styles.blog_info_sec} f_w_j pt_50`}>
							{BlogData.data.map((item) => {
								const dateString = item.attributes.BlogDate;
								const formattedDate = format(new Date(dateString), "dd MMMM yyyy");
								return (
									<div
										className={`${styles.blog_info} commonBorderAnimation whiteCommonBorderAnimation mb_80`}
										key={item.attributes.BlogHeading}
									>
										<div className={`${styles.blog_yellow_box}`}>
											<div className={`${styles.blog_info_style}`}>
												<img
													src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.BlogThumb.data.attributes.url}`}
													alt="Blog Img"
													className="b_r_8"
												/>
											</div>
											<div className={`${styles.blog_info_style}`}>
												<h6 className="paraTxt_16 color_black_opacity pt_20 text_500">
													{/* {item.attributes.BlogDate} */}
													{formattedDate}
												</h6>
												<h4 className="text_24 text_500 pt_10 pb_30">
													{item.attributes.BlogHeading}
												</h4>
												<a href={`/blogs/${item.attributes.BlogSlug}`} rel="noreferrer">
													<button className="btn_arrow">
														<span className={`${styles.arrow_one} arrow_one`}>
															<img src={arrow.src} alt="icon" />
														</span>
														<span className={`${styles.arrow_two} arrow_two`}>
															<img src={arrow.src} alt="icon" />
														</span>
													</button>
												</a>
											</div>

											<div className={`${styles.red_dot} ${styles.dot_top_right}`}></div>
											<div
												className={`${styles.red_dot} ${styles.dot_bottom_right}`}
											></div>
											<div className={`${styles.red_dot} ${styles.dot_bottom_left}`}></div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	// Blog
	const BlogRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/Blogs?sort=BlogDate:desc&populate=*`,
		ServerHeaders
	);
	const BlogData = await BlogRes.json();

	return {
		props: {
			BlogData,
		},
		revalidate: 10,
	};
}
