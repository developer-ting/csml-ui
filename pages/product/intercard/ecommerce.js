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
import BlackStripOverview from "@/components/BlackStripOverview";
import {
	ecommerceYellowCardData,
	ecommerceHowItWorksData,
	ecommerceBonusFeatureData,
} from "@/data/data-file-1";
import CardHoverYellow from "@/components/CardHoverYellow";
import CardIcon from "@/components/CardIcon";

// SECTIONS //
// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../../src/styles/pages/product/intercard/Ecommerce.module.scss";

//	IMAGES	//
import ecommerce_banner from "../../../public/img/product/intercard/ecommerce/ecommerce_banner.jpg";

export default function Ecommerce() {
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: false,
		speed: 1000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					autoplay: true,
				},
			},
		],
		afterChange: (i) => {
			fillProgress(i + 1);
		},
		// prevArrow: (
		// 	<button className={`${styles.prevarrow} about_prevarrow`}>
		// 		<Image src={arrow_slider.src} alt="arrow" width={40} height={40} />
		// 	</button>
		// ),
		// nextArrow: (
		// 	<button className={`${styles.nextarrow} about_nextarrow`}>
		// 		<Image src={arrow_slider.src} alt="arrow" width={40} height={40} />
		// 	</button>
		// ),
	};

	const [progressWidth, setProgressWidth] = useState(0);
	useEffect(() => {
		fillProgress(1);
	}, []);
	const fillProgress = (currInd) => {
		setProgressWidth((currInd / 6) * 100);
	};
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.ecommerce_main}`}>
				<InsideBanner
					bannerTitle="Effortless, Contactless, Flawless"
					bannerImg={ecommerce_banner.src}
					mobileImg={ecommerce_banner.src}
				/>
				<BlackStripOverview
					desc="Intercard E-Commerce Hand: Simplifying Contactless Transactions
          Step into the era of effortless transactions with Intercard's advanced E-Commerce Technology. Enhance your customer experience by providing a user-friendly, remote platform for purchasing game cards, packages, or gift cards from the comfort of their homes or while on the move."
				/>

				<section className={`${styles.intercard} ptb_100`}>
					<div className="container">
						<div className={`${styles.title_txt} `}>
							<h2 className="heading_text_55 pb_40 toTop" data-scroll>
								Advantages of Intercard’s <br className="hidden-xs" />
								E-Commerce Technology
							</h2>
						</div>
						{/* {iedgeData.map((item, index) => (
                <ImagePara
                  key={index}
                  title={item.title}
                  desc={item.desc}
                  boxImg={item.image.src}
                />
              ))} */}
					</div>
					<div className={`${styles.ecommerce_slider_main} toTop`} data-scroll>
						<div className={`${styles.partner_superior_flex}`}>
							<Slider {...settings}>
								{ecommerceYellowCardData.map((item, index) => (
									<CardHoverYellow
										key={index}
										title={item.title}
										desc={item.desc}
										boxImg={item.image.src}
									/>
								))}
							</Slider>
						</div>
					</div>
				</section>
				<section className={`${styles.how_it_works} ptb_100 dot_animation_box`}>
					<div className="container">
						<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
							<h2 className="heading_text_55 color_white ">How It Works</h2>
						</div>
						<div className={`${styles.how_it_works_flex} toTop`} data-scroll>
							{/* <CardIcon /> */}
							{ecommerceHowItWorksData.map((item, index) => (
								<CardIcon
									key={index}
									title={item.title}
									desc={item.desc}
									boxIcon={item.image.src}
								/>
							))}
						</div>
					</div>
				</section>

				<section className={`${styles.bonus_feature} ptb_100`}>
					<div className="container">
						{ecommerceBonusFeatureData.map((item, index) => (
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
