// MODULES //
import Link from "next/link";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/about/ExcellenceEntertainment.module.scss";

// IMAGES //
import family from "../../../public/img/about/family.jpg";
import hotel_img from "../../../public/img/about/hotel_img.jpg";
import restaurants_img from "../../../public/img/about/restaurants_img.jpg";
import club_houses from "../../../public/img/about/club_houses.jpg";
import corporates from "../../../public/img/about/corporates.jpg";
import private_homes from "../../../public/img/about/private_homes.jpg";
import arrow from "../../../public/img/arrow.svg";

/** Home Hero Section */
export default function ExcellenceEntertainment() {
	return (
		<section
			className={`${styles.excellence_entertainment_wrap} dot_animation_box pb_100`}
		>
			<div className="container">
				<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
					<h2 className="heading_text_55 color_white pb_20">
						Excellence in entertainment, <br className="hidden-xs" />
						across sectors
					</h2>
				</div>

				<div className={`${styles.excellence_entertainment_flex} border_animation`}>
					<div
						className={`${styles.excellence_entertainment_box} border_12 f_j toTop`}
						data-scroll
					>
						<div className={`${styles.excellence_entertainment_content} `}>
							<img className="border_8" src={family.src} alt="family img" />
						</div>
						<div className={`${styles.desc_box}`}>
							<div className={`${styles.desc_title} f_j`}>
								<h3 className="text_20 text_700 color_white">
									Family Entertainment Centers
								</h3>
								{/* <span href="#" rel="noreferrer">
									<Link href="">
										<img src={arrow.src} alt="" />
									</Link>
								</span> */}
							</div>
							<p className="paraTxt color_white">
								We create all-age amusement zones in malls or standalone properties with
								arcade games, bowling, and more, all under one roof.
							</p>
						</div>
					</div>
					<div
						className={`${styles.excellence_entertainment_box} border_12 f_j toTop`}
						data-scroll
					>
						<div className={`${styles.excellence_entertainment_content} `}>
							<img className="border_8" src={hotel_img.src} alt="hotel img" />
						</div>
						<div className={`${styles.desc_box}`}>
							<div className={`${styles.desc_title} f_j`}>
								<h3 className="text_20 text_700 color_white">Hotels & Resorts</h3>
								{/* <span href="#" rel="noreferrer">
									<Link href="">
										<img src={arrow.src} alt="" />
									</Link>
								</span> */}
							</div>
							<p className="paraTxt color_white">
								We help elevate guest experiences by adding on-property entertainment
								options to increase revenue.
							</p>
						</div>
					</div>
					<div
						className={`${styles.excellence_entertainment_box} border_12 f_j toTop`}
						data-scroll
					>
						<div className={`${styles.excellence_entertainment_content} `}>
							<img className="border_8" src={restaurants_img.src} alt="Restaurants img" />
						</div>
						<div className={`${styles.desc_box}`}>
							<div className={`${styles.desc_title} f_j`}>
								<h3 className="text_20 text_700 color_white">Restaurants & Bars</h3>
								{/* <span href="#" rel="noreferrer">
									<Link href="">
										<img src={arrow.src} alt="" />
									</Link>
								</span> */}
							</div>
							<p className="paraTxt color_white">
								Enhancing the dining experience by adding recreational amenities that
								encourage patrons to stay longer and order more food, boosting revenue.
							</p>
						</div>
					</div>
					<div
						className={`${styles.excellence_entertainment_box} border_12 f_j toTop`}
						data-scroll
					>
						<div className={`${styles.excellence_entertainment_content} `}>
							<img className="border_8" src={club_houses.src} alt="Club Houses img" />
						</div>
						<div className={`${styles.desc_box}`}>
							<div className={`${styles.desc_title} f_j`}>
								<h3 className="text_20 text_700 color_white">
									Club Houses & Condominiums
								</h3>
								{/* <span href="#" rel="noreferrer">
									<Link href="">
										<img src={arrow.src} alt="" />
									</Link>
								</span> */}
							</div>
							<p className="paraTxt color_white">
								Providing residents with in-house entertainment options like bowling,
								arcade games, adding value to your property.
							</p>
						</div>
					</div>
					<div
						className={`${styles.excellence_entertainment_box} border_12 f_j toTop`}
						data-scroll
					>
						<div className={`${styles.excellence_entertainment_content} `}>
							<img className="border_8" src={corporates.src} alt="Corporates img" />
						</div>
						<div className={`${styles.desc_box}`}>
							<div className={`${styles.desc_title} f_j`}>
								<h3 className="text_20 text_700 color_white">Corporates</h3>
								{/* <span href="#" rel="noreferrer">
									<Link href="">
										<img src={arrow.src} alt="" />
									</Link>
								</span> */}
							</div>
							<p className="paraTxt color_white">
								Offering activity options such as bowling, arcade and retro games
								within your corporate premise to refresh and recharge your workforce.
							</p>
						</div>
					</div>
					<div
						className={`${styles.excellence_entertainment_box} border_12 f_j toTop`}
						data-scroll
					>
						<div className={`${styles.excellence_entertainment_content} `}>
							<img className="border_8" src={private_homes.src} alt="Private Homes img" />
						</div>
						<div className={`${styles.desc_box}`}>
							<div className={`${styles.desc_title} f_j`}>
								<h3 className="text_20 text_700 color_white">Private Homes</h3>
								{/* <span href="#" rel="noreferrer">
									<Link href="">
										<img src={arrow.src} alt="" />
									</Link>
								</span> */}
							</div>
							<p className="paraTxt color_white">
								Bringing luxury gaming options like bowling to VR experiences and more
								to private residences for personalized entertainment.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
