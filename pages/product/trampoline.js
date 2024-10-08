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
import { trampolineData } from "@/data/data-file-1";
import BlackStripOverview from "@/components/BlackStripOverview";
import TextImgBox from "@/components/TextImgBox";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../src/styles/pages/product/Trampoline.module.scss";

//	IMAGES	//
import trampoline_banner from "../../public/img/product/trampoline/trampoline_banner.jpg";
import trampoline_banner_mobile from "../../public/img/product/trampoline/trampoline_banner_mobile.jpg";
import leftBoxImg from "../../public/img/product/trampoline/leftBoxImg.jpg";
import right_box_img from "../../public/img/product/trampoline/right_box_img.jpg";
import rightBoxImg from "../../public/img/product/trampoline/rightBoxImg.jpg";

/** Trampoline Page */
export default function Trampoline() {
	return (
		<div>
			<Head>
				<title>Top Trampoline Distributor in India – CSML Group</title>
				<meta name="description" content="CSML is a trusted trampoline distributor in India, supplying durable and high-quality trampolines for Family Entertainment Centers (FEC). Explore our wide range with nationwide delivery and excellent customer service." />
				<meta name="og:title" content="Top Trampoline Distributor in India – CSML Group" />
				<meta name="og:description" content="CSML is a trusted trampoline distributor in India, supplying durable and high-quality trampolines for Family Entertainment Centers (FEC). Explore our wide range with nationwide delivery and excellent customer service." />
				<meta name="keywords" content="Trampoline, Trampoline Distributor, Trampoline Distributor in India, Trampoline for Family Entertainment Centers, Trampoline for Theme Park, Trampoline for Adventure Parks"/>
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
				<link rel="canonical" href="https://csmlgroup.com/product/trampoline"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.TrampolineMain}`}>
				<InsideBanner
					bannerTitle="Creating Adventure For All <br className='hidden-xs'>Ages With CSML"
					bannerImg={trampoline_banner.src}
					mobileImg={trampoline_banner_mobile.src}
				/>
				<BlackStripOverview desc="CSML crafts innovative, safe-themed fun parks, offering children the perfect environment for thrilling adventures. Designed and installed with strict adherence to the latest safety standards, our globally sourced attractions ensure a delightful and memorable experience for children and their friends." />

				<TextImgBox
					sectionHeading="Unleash Joy with CSML's <br>  
					Globally-Designed Adventure Zones"
					sectionDesc="Positioned as a pioneer in trampoline park design and installation, CSML collaborates with premier global manufacturers for unparalleled expertise and innovation. Our commitment lies in delivering high-quality, safe, and exhilarating experiences, establishing us as a preferred supplier for a diverse range of indoor play spaces."
					leftBoxImg={leftBoxImg.src}
					rightBoxImg={right_box_img.src}
				/>

				<section className="dot_animation_box pt_100 pb_40">
					<div className="container">
						{trampolineData.map((item, index) => (
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
