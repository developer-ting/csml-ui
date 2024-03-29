// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../../src/components/Footer";
import Header from "../../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImagePara from "@/components/ImagePara";
import { icashierData } from "@/data/data-file-1";
import BlackStripOverview from "@/components/BlackStripOverview";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../../src/styles/pages/product/intercard/Icashier.module.scss";

//	IMAGES	//
import icashier_banner from "../../../public/img/product/intercard/icashier/icashier_banner.jpg";
import icashier_banner_mobile from "../../../public/img/product/intercard/icashier/icashier_banner_mobile.jpg";

/** Icashier Page */
export default function Icashier() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.icashier_main}`}>
				<InsideBanner
					bannerTitle="Mobility Meets Efficiency"
					bannerImg={icashier_banner.src}
					mobileImg={icashier_banner_mobile.src}
				/>
				<BlackStripOverview desc="iCASHIER offers a comprehensive suite of solutions designed to streamline and enhance various aspects of business operations." />
				<section className={`${styles.intercard} ptb_100`}>
					<div className="container">
						<div className={`${styles.title_txt} `}>
							<h2 className="heading_text_55 pb_40 toTop" data-scroll>
								Effortless Operations, <br className="hidden-xs" />
								Comprehensive Solutions
							</h2>
						</div>
						{icashierData.map((item, index) => (
							<ImagePara
								key={index}
								title={item.title}
								desc={item.desc}
								boxImg={item.image.src}
							/>
						))}
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}
