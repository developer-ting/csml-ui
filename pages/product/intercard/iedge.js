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
import { iedgeData } from "@/data/data-file-1";
import BlackStripOverview from "@/components/BlackStripOverview";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../../src/styles/pages/product/intercard/Iedge.module.scss";

//	IMAGES	//
import iedge_banner from "../../../public/img/product/intercard/iedge/iedge_banner.jpg";
import iedge_banner_mobile from "../../../public/img/product/intercard/iedge/iedge_banner_mobile.jpg";

/** Iedge Page */
export default function Iedge() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.iedge_main}`}>
				<InsideBanner
					bannerTitle="The Future At Your Edge With Intercard <br className='hidden-xs'> 
          Mobile App Collection"
					bannerImg={iedge_banner.src}
					mobileImg={iedge_banner_mobile.src}
				/>
				<BlackStripOverview desc="Welcome to The Edge, where innovation converges with entertainment. Elevate your arcade or gaming center with Intercard's state-of-the-art Mobile App Collection designed to transform your operations." />

				<section className={`${styles.intercard} ptb_100`}>
					<div className="container">
						<div className={`${styles.title_txt} `}>
							<h2 className="heading_text_55 pb_40 toTop" data-scroll>
								Unlock New Heights of <br className="hidden-xs" />
								Efficiency with Intercard
							</h2>
						</div>
						{iedgeData.map((item, index) => (
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
