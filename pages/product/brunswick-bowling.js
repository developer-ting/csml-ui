// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";
import { ServerHeaders } from "@/utils/RequestHeaders";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImagePara from "@/components/ImagePara";
import { centerStageFurniture } from "@/data/data-file-1";

import Lanes from "@/components/Lanes";
import SyncSlider from "@/components/SyncSlider";
import Accessories from "@/components/Accessories";
import CardHoverYellow from "@/components/CardHoverYellow";
import BlackStripOverview from "@/components/BlackStripOverview";
import Sync from "@/components/Sync";
import DiverseBowling from "@/components/DiverseBowling";
import SparkImmersive from "@/components/SparkImmersive";
import LaneMaintenance from "@/components/LaneMaintenance";
import SyncVideo from "@/components/SyncVideo";
// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../src/styles/pages/brunswick-bowling.module.scss";

//	IMAGES	//
import brunswick_banner from "../../public/img/brunswick-bowling/brunswick_banner.jpg";
import brunswick_banner_mobile from "../../public/img/brunswick-bowling/brunswick_banner_mobile.jpg";

/** Go Karting Page */
export default function BrunswickBowling({
	laneSliderData,
	sparesSliderData,
	accessoriesSliderData,
	diverseData,
	syncscoringsData,
	sparkimmersivesData,
	oilingmachinesData,
	lanemaintenancesData,
	pinsettersData,
}) {
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.GoKartingPage}`}>
				<InsideBanner
					bannerTitle="Redefining Amusement with <br/>
                    Bowling Brilliance"
					bannerImg={brunswick_banner.src}
					mobileImg={brunswick_banner_mobile.src}
				/>
				<BlackStripOverview
					desc="CSML is the exclusive distributor of Brunswick Bowling in India and the
							SAARC region. Over the last 25 years, they have jointly set industry
							standards. Their diverse product range simplifies entertainment center
							setup with customizable bowling alleys."
				/>

				<DiverseBowling data={diverseData} />
				<Sync data={syncscoringsData} />
				<SyncVideo youTube={sparkimmersivesData} />
				<SparkImmersive data={sparkimmersivesData} />
				<Lanes data={laneSliderData} />
				<section className="pt_60 pb_100">
					<div className="container">
						<h2 className="heading_text_55 pb_50 text_center toTop" data-scroll>
							Pinsetters
						</h2>
						<div className={`${styles.pinsetters}`}>
							{pinsettersData.data.map((item, index) => (
								<CardHoverYellow
									full
									key={index}
									title={item.attributes.title}
									desc={item.attributes.desc}
									boxImg={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.Image.data.attributes.url}`}
								/>
							))}
						</div>
					</div>
				</section>
				<Accessories data={accessoriesSliderData} />
				<section className="pt_100 pb_60">
					<div className="container">
						{centerStageFurniture.map((item, index) => (
							<ImagePara
								key={index}
								title={item.title}
								desc={item.desc}
								boxImg={item.image.src}
							/>
						))}
					</div>
				</section>

				<SyncSlider data={sparesSliderData} />
				<LaneMaintenance laneData={lanemaintenancesData} />

				<section className="pt_100 pb_60">
					<div className="container">
						<h2 className="heading_text_55 pb_50 toTop" data-scroll>
							Lane Oiling Machine
						</h2>
						{oilingmachinesData.data.map((item, index) => (
							<ImagePara
								key={index}
								title={item.attributes.title}
								desc={item.attributes.desc}
								boxImg={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.Image.data.attributes.url}`}
							/>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

// data featch in brunswick-bowling //

export async function getStaticProps() {
	//
	const lanes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/lanes?populate=*`,
		ServerHeaders
	);
	const sparesConsummables = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/spares-consummables?populate=*`,
		ServerHeaders
	);
	const accessories = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/accessories?populate[0]=LaneAccessorie.ImageUrl&populate[1]=MaskingUnits.ImageUrl`,
		ServerHeaders
	);
	const diverse = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/diverse-bowlings?populate=*`,
		ServerHeaders
	);
	const syncscorings = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/sync-scorings?populate=*`,
		ServerHeaders
	);
	const sparkimmersives = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/spark-immersives?populate=*`,
		ServerHeaders
	);
	const oilingmachines = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/oiling-machines?populate=*`,
		ServerHeaders
	);
	const lanemaintenances = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/lane-maintenances?populate=*`,
		ServerHeaders
	);
	const pinsetters = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/pinsetters?populate=*`,
		ServerHeaders
	);
	const laneSliderData = await lanes.json();
	const sparesSliderData = await sparesConsummables.json();
	const accessoriesSliderData = await accessories.json();
	const diverseData = await diverse.json();
	const syncscoringsData = await syncscorings.json();
	const sparkimmersivesData = await sparkimmersives.json();
	const oilingmachinesData = await oilingmachines.json();
	const lanemaintenancesData = await lanemaintenances.json();
	const pinsettersData = await pinsetters.json();

	return {
		props: {
			laneSliderData,
			sparesSliderData,
			accessoriesSliderData,
			diverseData,
			syncscoringsData,
			sparkimmersivesData,
			oilingmachinesData,
			lanemaintenancesData,
			pinsettersData,
		},
		revalidate: 10,
	};
}
