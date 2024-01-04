// MODULES //
import ScrollOut from "scroll-out";
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import JoinPioneering from "@/sections/career/JoinPioneering";
import CareerSuccess from "@/sections/career/CareerSuccess";
import LifeCsml from "@/sections/career/LifeCsml";
import Loader from "@/components/Loader";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Career.module.scss";

//	IMAGES	//
import career_banner from "../public/img/career/career_banner.jpg";
import Career_bnner_mobile from "../public/img/career/Career_bnner_mobile.jpg";
import OurGuidingValues from "@/sections/career/OurGuidingValues";
import CsmlExperience from "@/sections/career/CsmlExperience";
import HowToApply from "@/sections/career/HowToApply";

/** Home Page */
export default function Career() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.career_page}`}>
				<InsideBanner
					bannerTitle="Start Your Adventure with CSML"
					bannerImg={career_banner.src}
					mobileImg={Career_bnner_mobile.src}
				/>
				<JoinPioneering />
				<CareerSuccess />
				<LifeCsml />
				<OurGuidingValues />
				<CsmlExperience />
				<HowToApply />
			</main>
			<Footer />
		</div>
	);
}
