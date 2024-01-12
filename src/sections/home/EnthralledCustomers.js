// MODULES //
import { useEffect, useState, useRef } from "react";

// COMPONENTS //
import EqualHeight from "@/utils/EqualHeight";
// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/EnthralledCustomers.module.scss";

// IMAGES //
import enrolled_img from "../../../public/img/home/enrolled_img.jpg";
import profile_img from "../../../public/img/home/profile_img.png";
import quate from "../../../public/img/home/quate.svg";

/** Home Hero Section */
export default function EnthralledCustomers({ enthralledData }) {
	// console.log(enthralledData);
	var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: false,
		speed: 2000,
		autoplaySpeed: 5000,
	};

	useEffect(() => {
		//EqualHeight("enthralled_box" + 100)
		// Get all elements with the class name 'equal-height'
		const elements = document.querySelectorAll(`.enthralled_box`);

		// Calculate the maximum height among all elements
		let maxHeight = 0;
		elements.forEach((element) => {
			maxHeight = Math.max(maxHeight, element.offsetHeight);
		});

		// Set the same height for all elements
		elements.forEach((element) => {
			element.style.height = `${maxHeight + 30}px`;
		});

	}, []);
	

	return (
		<section
			className={`${styles.enthralled_customers_wrap} dot_animation_box pb_100`}
		>
			<div className="container">
				<div className={`${styles.section_title} toTop`} data-scroll>
					<h2 className="heading_text_55 color_white pb_20">Enthralled customers</h2>
				</div>
				<div className={`${styles.enthralled_main} toTop`} data-scroll>
					<Slider {...settings}>
						{enthralledData.map((item) => {
							return (
								<div
									className={`${styles.enthralled_item}`}
									key={item.attributes.EnthralledDescription}
								>
									<div className={`${styles.enthralled_box} enthralled_box f_j`}>
										<div className={`${styles.enthralled_quate_top}`}>
											<img className="" src={quate.src} alt="img" />
										</div>
										<div className={`${styles.enthralled_quate_bottom}`}>
											<img className="border_20" src={quate.src} alt="img" />
										</div>
										<div className={`${styles.enthralled_img}`}>
											<img
												className=""
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.EnthralledImg.data.attributes.url}`}
												alt="img"
											/>
										</div>
										<div className={`${styles.enthralled_content}`}>
											<p className="paraTxt">{item.attributes.EnthralledDescription}</p>
											<div className={`${styles.profile_flex} d_f pt_80`}>
												<div className={`${styles.profile_img}`}>
													<img
														className=""
														src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.EnthralledThumbnail.data.attributes.url}`}
														alt="img"
													/>
												</div>
												<div className={`${styles.profile_content}`}>
													<h4 className="text_24 text_700">
														{item.attributes.EnthralledName}
													</h4>
													<p className="paraTxt">{item.attributes.EnthralledDesignation}</p>
												</div>
											</div>
										</div>
										
									</div>
								</div>
							);
						})}
					</Slider>
				</div>
			</div>
		</section>
	);
}
