// MODULES //
import { useEffect, useRef, useState } from "react";

// COMPONENTS //

import CardHoverYellow from "@/components/CardHoverYellow";
import TabBtb from "@/components/TabBtb";

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../src/styles/pages/brunswick-bowling.module.scss";

// IMAGES //

/** Home Hero Section */
const SyncSlider = (data) => {
	const allData = data.data.data;
	// console.log(allData);
	const [nav1, setNav1] = useState();
	const [nav2, setNav2] = useState();
	const [alldata, setallData] = useState(
		allData.filter(
			(item) => item.attributes.category == allData[0].attributes.category
		)
	);

	var settings = {
		pauseOnHover: false,
		arrows: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					autoplay: false,
					slidesToShow: 2,
					// slidesToScroll: 1,
					variableWidth: true,
				},
			},
		],
	};
	var settings1 = {
		pauseOnHover: false,
		arrows: false,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					// autoplay: true,
					slidesToShow: 1,
					// slidesToScroll: 1,
					variableWidth: true,
				},
			},
			{
				breakpoint: 991,
				settings: {
					autoplay: true,
					slidesToShow: 2,
					// slidesToScroll: 1,
					// variableWidth: true,
				},
			},
		],
	};

	/** unique Values Array */
	const uniqueValuesArray = Array.from(
		new Set(allData.map((item) => item.attributes.category))
	);

	const [selectedTabValue, setSelectTabValue] = useState(uniqueValuesArray[0]);

	/** getSlectVal */
	function getSlectVal(selectedValue) {
		setSelectTabValue(selectedValue);
		const filteredData = allData.filter(
			(item) => item.attributes.category == selectedValue
		);
		setallData(filteredData);
	}

	return (
		<section className={`${styles.spares} pb_100`}>
			<div className="container">
				<h2 className="heading_text_55 pb_50 toTop text_center" data-scroll>
					Spares and Consumables
				</h2>
				<div className={`${styles.slider_section}`}>
					<div className={`${styles.for_item} pb_60`}>
						<Slider
							{...settings}
							asNavFor={nav1}
							ref={(slider2) => setNav2(slider2)}
							slidesToShow={3}
							swipeToSlide={true}
							focusOnSelect={true}
							variableWidth={true}
						>
							{uniqueValuesArray.map((title, index) => (
								<div className={`${styles.slide_item}`}>
									<TabBtb
										key={index}
										title={title}
										onClickHandler={getSlectVal}
										isActive={selectedTabValue === title ? true : false}
									/>
								</div>
							))}
						</Slider>
					</div>
					<Slider
						className={`${styles.nav_item} toTop`}
						{...settings1}
						asNavFor={nav2}
						arrows={false}
						ref={(slider1) => setNav1(slider1)}
					>
						{alldata.map((item, index) => (
							<div className={`${styles.slide_item}`}>
								<CardHoverYellow
									new_style
									title={item.attributes.title}
									desc={item.attributes.desc}
									boxImg={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.logoUrl.data.attributes.url}`}
								/>
							</div>
						))}
					</Slider>
				</div>
			</div>
		</section>
	);
};

export default SyncSlider;
