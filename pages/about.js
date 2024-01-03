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
import about_banner from "../public/img/about/about_banner.jpg";
import about_banner_mobile from "../public/img/about/about_banner_mobile.jpg";

/** Home Page */
export default function About() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.about_page}`}>
				<InsideBanner
					bannerTitle="Over 2 decades of unlocking
        <br className='hidden-xs'> entertainment in every space"
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
