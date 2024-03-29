// MODULES //
import ScrollOut from "scroll-out";
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import HomeBanner from "@/sections/home/HomeBanner";
import Crafting from "@/sections/home/Crafting";
import ProductCatalogue from "@/sections/home/ProductCatalogue";
import ProductCatalogue2 from "@/sections/home/ProductCatalogue2";
import ValuedDistributors from "@/sections/home/ValuedDistributors";
import PartnerSuperior from "@/sections/home/PartnerSuperior";
import ExperienceIndustry from "@/sections/home/ExperienceIndustry";
import OurClients from "@/sections/home/OurClients";
import Showcase from "@/sections/home/Showcase";
import EnthralledCustomers from "@/sections/home/EnthralledCustomers";
import Loader from "@/components/Loader";
// UTILS //
import { ServerHeaders } from "@/utils/RequestHeaders";

// SECTIONS //
import ParallaxSlider from "@/sections/home/ParallaxSlider";
import ParallaxSlider2 from "@/sections/home/ParallaxSlider2";
// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Home.module.scss";

/** Home Page */
export default function Home({
	ValuedDistributorsData,
	PartenrsSliderData,
	ClientLogosData,
	ShowcaseSliderData,
	EnthralledSliderData,
	craftingStatsData,
	BannerData,
}) {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	//console.log(ClientLogosData, "pramod");
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.index_page}`}>
				<HomeBanner data={BannerData.data} />
				<Crafting craftingData={craftingStatsData.data} />
				{/* <ParallaxSlider2 /> */}
				{/* <ParallaxSlider /> */}
				<ProductCatalogue />
				{/* <ProductCatalogue2 /> */}
				<ValuedDistributors valuedData={ValuedDistributorsData.data} />
				<PartnerSuperior data={PartenrsSliderData.data} />
				<ExperienceIndustry />

				<section className={`${styles.bg_black}`}>
					<OurClients clientsData={ClientLogosData.data} />
					<Showcase showcaseData={ShowcaseSliderData.data} />
					<EnthralledCustomers enthralledData={EnthralledSliderData.data} />
				</section>
			</main>
			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	// valued distributors
	const ValuedDistributorsRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/home-valued-distributors?populate=*`,
		ServerHeaders
	);
	const ValuedDistributorsData = await ValuedDistributorsRes.json();

	// partners sliders
	const PartenrsSlideRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/partners-sliders?populate=*`,
		ServerHeaders
	);
	const PartenrsSliderData = await PartenrsSlideRes.json();

	// home client logos
	const ClientLogosRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/home-client-logos?sort=order:desc&populate=*`,
		ServerHeaders
	);
	const ClientLogosData = await ClientLogosRes.json();

	// home showcase success sliders
	const ShowcaseSliderRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/home-showcase-success-sliders?populate=*`,
		ServerHeaders
	);
	const ShowcaseSliderData = await ShowcaseSliderRes.json();

	// home enthralled sliders
	const EnthralledSliderRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/home-enthralled-sliders?sort=order:desc&populate=*`,
		ServerHeaders
	);
	const EnthralledSliderData = await EnthralledSliderRes.json();
	// home crafting stats data
	const craftingStatsRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/home-stats-section?populate=*`,
		ServerHeaders
	);
	const craftingStatsData = await craftingStatsRes.json();

	// home banner  data
	const BannerRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/home-bannerv2?populate[0]=homeBannerSlider.bannerImage&populate[1]=homeBannerVideo.bannerVideo&populate[2]=homeBannerSlider.bannerMobile&populate[3]=homeBannerVideo.bannerMobileVideo`,
		ServerHeaders
	);
	const BannerData = await BannerRes.json();

	return {
		props: {
			ValuedDistributorsData,
			PartenrsSliderData,
			ClientLogosData,
			ShowcaseSliderData,
			EnthralledSliderData,
			craftingStatsData,
			BannerData,
		},
		revalidate: 10,
	};
}
