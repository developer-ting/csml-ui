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
import Link from "next/link";
// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Career.module.scss";

//	IMAGES	//
import career_banner from "../public/img/career/career_banner.jpg";
import career_banner_mobile from "../public/img/career/career_banner_mobile.jpg";
import OurGuidingValues from "@/sections/career/OurGuidingValues";
import CsmlExperience from "@/sections/career/CsmlExperience";
import HowToApply from "@/sections/career/HowToApply";
import {ServerHeaders} from "@/utils/RequestHeaders";
import {format} from "date-fns";

/** Home Page */
export default function Career({ careerData }) {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	console.log(careerData)
	return (
		<div>
			<Head>
				<title>Explore Exciting Career Opportunities with CSML Group</title>
				<meta name="description" content="Discover how a career with CSML can shape your future. Unlock your potential and thrive in a dynamic tech environment!" />
				<meta name="og:title" content="Explore Exciting Career Opportunities with CSML Group" />
				<meta name="og:description" content="Discover how a career with CSML can shape your future. Unlock your potential and thrive in a dynamic tech environment!" />
				<meta name="keywords" content="Career Opportunity, Career with CSML, Career"/>
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
				<link rel="canonical" href="https://csmlgroup.com/career"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.career_page}`}>
				<InsideBanner
					bannerTitle="Start Your Adventure <br className='hidden-xs'>With CSML"
					bannerImg={career_banner.src}
					mobileImg={career_banner_mobile.src}
				/>
				<JoinPioneering />
				<CareerSuccess />
				<LifeCsml />
				<OurGuidingValues />
				<section className="container">
					<h2 className={styles.title}>Job Openings</h2>
				</section>
				<section className={styles.details_section}>
					<div className="container">
						{	careerData.data.map((item,row)=>{
							return (
								<div className={styles.jobCard}>
									<div className={styles.jobDetails}>
										<h2 className={styles.jobTitle}>{item.attributes.Title}</h2>
										<h4 className={styles.jobSubtitle}>{item.attributes.Subtitle}</h4>
									</div>
									<div className={styles.jobAction}>
										<p className={styles.location}>Location</p>
										<p className={styles.city}>{item.attributes.Location}</p>
									</div>
									<div className={styles.jobAction}>
										<p className={styles.posted}>Posted</p>
										<p className={styles.postedDate}>
											{format(new Date(item.attributes.Date), "dd MMMM, yyyy")}
										</p>
									</div>
									<div className={styles.jobActions}>
										<Link href={`/details?id=${item.id}`}>
											<button className={styles.applyNow}>Apply Now</button>
										</Link>
									</div>
								</div>
							);
						})
						}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const CareerRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/job-lists?sort=Date:desc&populate=*`,
		ServerHeaders
	);
	const careerData = await CareerRes.json();

	return {
		props: {
			careerData,
		},
		revalidate: 10,
	};
}
