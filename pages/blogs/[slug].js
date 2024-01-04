// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import Loader from "@/components/Loader";

// SECTIONS //

// utils //
import { ServerHeaders } from "@/utils/RequestHeaders";

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import parse from "html-react-parser";
import { FacebookShareButton, TwitterShareButton } from "react-share";

// STYLES //
import styles from "../../src/styles/pages/Blogs.module.scss";

//	IMAGES	//
import BlogBanner from "../../public/img/blog/blog-inside-banner.jpg";
import BlogImg from "../../public/img/blog/blog-img.jpg";
import arrow from "../../public/img/arrow.svg";
import facebook from "../../public/img/facebook.svg";
import twitter from "../../public/img/twitter.svg";
import instagram from "../../public/img/instagram.svg";

/** Blog Page */
export default function BlogInside({ BlogData, RelatedBlogData }) {
	const [blogURL, setBlogURL] = useState("");

	useEffect(() => {
		const url = window.location.href;
		setBlogURL(url);
	}, []);

	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.BlogInsideSection}`}>
				<section className="coming_from_cms dot_animation_box page_space">
					<div className="container">
						<h1>{BlogData?.BlogHeading}</h1>
						<br />
						<div className="blog_info">
							<h6>{BlogData?.BlogDate}</h6>
							<h6>5 Min Read</h6>
							<div className="share_sec">
								<h6>Share</h6>
								<div className="share_icon">
									<TwitterShareButton url={blogURL}>
										<a>
											<img src={twitter.src} alt="" />
										</a>
									</TwitterShareButton>
									<FacebookShareButton url={blogURL}>
										<a>
											<img src={facebook.src} alt="" />
										</a>
									</FacebookShareButton>
									{/* <a href="">
										<img src={instagram.src} alt="" />
									</a> */}
								</div>
							</div>
						</div>
						<br />
						<img
							src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${BlogData?.BlogInsideBanner.data.attributes.url}`}
							alt="Blog Inside Img"
						/>
						<br />
						{parse(BlogData?.BlogContent)}
					</div>
				</section>

				<section className={`${styles.blog_main_section} pt_80 pb_40`}>
					<div className="container">
						<h2 className="heading_text_55 text_center">Others Blog & Articles</h2>
						<div className={`${styles.blog_info_sec} f_w_j pt_50`}>
							{RelatedBlogData?.map((item) => {
								return (
									<div
										className={`${styles.blog_info} commonBorderAnimation whiteCommonBorderAnimation mb_80`}
									>
										<div className={`${styles.blog_info_style}`}>
											<img
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.BlogThumb?.data.attributes.url}`}
												alt="Blog Img"
												className="b_r_8"
											/>
										</div>
										<div className={`${styles.blog_info_style}`}>
											<h6 className="paraTxt_16 color_black_opacity pt_20 text_500">
												{item.attributes.BlogDate}
											</h6>
											<h4 className="text_24 text_500 pt_10 pb_30">
												{item.attributes.BlogHeading}
											</h4>
											<a href={`/blogs/${item.attributes.BlogSlug}`} rel="noreferrer">
												<button className="btn_arrow">
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
			</main>
			<Footer />
		</div>
	);
}
export async function getStaticPaths() {
	const BlogRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/Blogs?populate=*`,
		ServerHeaders
	);
	const BlogData = await BlogRes.json();
	return {
		paths: BlogData.data.map((item) => ({
			params: {
				slug: `${item.attributes.BlogSlug}`,
			},
		})),
		fallback: "blocking", // false or "blocking"
	};
}

export async function getStaticProps({ params }) {
	const BlogRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/Blogs?filters[BlogSlug][$eq]=${params.slug}&populate=*`,
		ServerHeaders
	);
	const BlogData = await BlogRes.json();

	const RelatedBlogRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/Blogs?filters[BlogSlug][$ne]=${params.slug}&populate=*`,
		ServerHeaders
	);
	const RelatedBlogData = await RelatedBlogRes.json();
	return {
		props: {
			BlogData: BlogData.data[0].attributes,
			RelatedBlogData: RelatedBlogData.data,
		},
		revalidate: 10,
	};
}
