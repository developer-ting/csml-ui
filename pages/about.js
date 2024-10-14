// MODULES //
import ScrollOut from "scroll-out";
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import CountPioneering from "@/sections/about/CountPioneering";
import OurVision from "@/sections/about/OurVision";
import AboutFeedback from "@/sections/about/AboutFeedback";
import Luminaries from "@/sections/about/Luminaries";
import ExcellenceEntertainment from "@/sections/about/ExcellenceEntertainment";
import Loader from "@/components/Loader";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/About.module.scss";

//	IMAGES	//
import about_banner from "../public/img/about/about_banner1.jpg";
import about_banner_mobile from "../public/img/about/about_banner1.jpg";

/** Home Page */
export default function About() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Head>
				<title>Leading Brunswick Bowling Distributor & Arcade Game Provider in India | CSML Group</title>
				<meta name="description" content="Discover CSML Group, the top distributor of Brunswick bowling equipment and a premier provider of arcade games in India. Elevate your entertainment spaces with our high-quality products and expert service." />
				<meta name="og:title" content="Leading Brunswick Bowling Distributor & Arcade Game Provider in India | CSML Group" />
				<meta name="og:description" content="Discover CSML Group, the top distributor of Brunswick bowling equipment and a premier provider of arcade games in India. Elevate your entertainment spaces with our high-quality products and expert service." />
				<meta name="keywords" content="Brunswick Bowling Distributor in India, Arcade Game Provider in India, Arcade Games Machine Provider, Arcade Games Machine Provider in India, Amusement Games Provider, Adventure Games Provider, Adventure Games Provider in India."/>
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
				<link rel="canonical" href="https://csmlgroup.com/about"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.about_page}`}>
				<InsideBanner
					bannerTitle="Over 2 Decades Of Unlocking
        <br className='hidden-xs'> Entertainment In Every Space"
					bannerImg={about_banner.src}
					mobileImg={about_banner_mobile.src}
				/>
				<CountPioneering />
				<OurVision />
				<AboutFeedback />
				<ExcellenceEntertainment />
				<Luminaries />
			</main>
			<Footer />
		</div>
	);
}
