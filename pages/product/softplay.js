// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImageParaBlackBg from "@/components/ImageParaBlack";
import { softplayData } from "@/data/data-file-1";
import BlackStripOverview from "@/components/BlackStripOverview";
import TextImgBox from "@/components/TextImgBox";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../src/styles/pages/product/Trampoline.module.scss";

//	IMAGES	//
import softplay_banner from "../../public/img/product/softplay/softplay_banner.jpg";
import softplay_banner_mobile from "../../public/img/product/softplay/softplay_banner_mobile.jpg";
import leftBoxImg from "../../public/img/product/softplay/leftBoxImg.jpg";
import right_box_img from "../../public/img/product/softplay/right_box_img.jpg";
import rightBoxImg from "../../public/img/product/trampoline/rightBoxImg.jpg";

/** Softplay Page */
export default function Softplay() {
	return (
		<div>
			<Head>
				<title>Creating Soft Play Arenas for Safe Family Fun | CSML Group</title>
				<meta name="description" content="Learn how CSML creates soft play arenas that ensure a safe, fun-filled space for children to explore and play, perfect for family entertainment center & theme parks." />
				<meta name="og:title" content="Creating Soft Play Arenas for Safe Family Fun | CSML Group" />
				<meta name="og:description" content="Learn how CSML creates soft play arenas that ensure a safe, fun-filled space for children to explore and play, perfect for family entertainment center & theme parks." />
				<meta name="keywords" content="Creating Soft Play Arenas, Creating Soft Play Arenas for Family Fun, Soft Play Provider in India, Soft Play Arenas for Theme Parks."/>
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
				<link rel="canonical" href="https://csmlgroup.com/product/softplay"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.SoftplayMain}`}>
				<InsideBanner
					bannerTitle="SoftPlay Fun For Your <br className='hidden-xs'>Little Ones"
					bannerImg={softplay_banner.src}
					mobileImg={softplay_banner_mobile.src}
				/>
				<BlackStripOverview desc="While creating Softplay arenas, our commitment lies in creating magical spaces where children can explore, play, and have fun, with the guarantee that every aspect of the play area is designed with safety as the top priority." />

				<TextImgBox
					sectionHeading="CSML SoftPlay Area:<br> 
					Where Safety Meets Adventure"
					sectionDesc="At CSML, we take pride in our commitment to crafting innovative and safe-themed fun parks, providing children with the perfect environment to embark on thrilling adventures. Our parks are meticulously built and installed, adhering strictly to the latest safety standards and collaborating with leading manufacturers and brands globally."
					leftBoxImg={leftBoxImg.src}
					rightBoxImg={right_box_img.src}
				/>

				<section className="dot_animation_box pt_100 pb_40">
					<div className="container">
						{softplayData.map((item, index) => (
							<ImageParaBlackBg
								key={index}
								titleBlackBg={item.title}
								descBlackBg={item.desc}
								boxImgBlackBg={item.image.src}
							/>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
