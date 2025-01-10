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
import styles from "../../src/styles/components/LaserTagTestimonial.module.scss";

// IMAGES //
import quate from "../../public/img/home/quate.svg";

/** Home Hero Section */
export default function LaserTagTestimonial({ TestimonialsData }) {
	 console.log(TestimonialsData);
	var settings = {
		lazyLoad: "ondemand",
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

	return (
		<section
			className={`${styles.enthralled_customers_wrap} dot_animation_box ptb_100`}
		>
			<div className="container">
				<div className={`${styles.section_title} toTop demo_txt`} data-scroll>
					<h2 className="heading_text_55 color_white pb_20">Testimonials</h2>
				</div>
				<div className={`${styles.enthralled_main} toTop`} data-scroll>
					<Slider {...settings}>
						{TestimonialsData.map((item) => {
							return (
								<div
									className={`${styles.enthralled_item}`}
									key={item.attributes.LaserTagDescription}
								>
									<div className={`${styles.enthralled_box} enthralled_box f_j`}>
										<div className={`${styles.enthralled_quate_top}`}>
											<img className="" src={quate.src} alt="img" loading="lazy" />
										</div>
										<div className={`${styles.enthralled_quate_bottom}`}>
											<img className="" src={quate.src} alt="img" loading="lazy" />
										</div>
										<div className={`${styles.enthralled_img}`}>
											<img
												className="border_20"
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.LaserTagImg.data.attributes.url}`}
												alt="enthralled img"
												loading="lazy"
											/>
										</div>
										<div className={`${styles.enthralled_content}`}>
											<p className="paraTxt mt_20">{item.attributes.LaserTagDescription}</p>
											<div className={`${styles.profile_flex} d_f pt_80`}>
												<div className={`${styles.profile_img}`}>
													<img
														className=""
														src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.LaserTagThumbnail.data.attributes.url}`}
														alt="profile img"
														loading="lazy"
													/>
												</div>
												<div className={`${styles.profile_content}`}>
													<h4 className="text_24 text_700">
														{item.attributes.LaserTagName}
													</h4>
													<p className="paraTxt">{item.attributes.LaserTagDesignation}</p>
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
