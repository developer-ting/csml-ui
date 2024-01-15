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
			<Header />
			<Loader />
			<main className={`${styles.SoftplayMain}`}>
				<InsideBanner
					bannerTitle="Softplay fun for you <br className='hidden-xs'>little ones"
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
