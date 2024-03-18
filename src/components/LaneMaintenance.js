// MODULES //
import { useState } from "react";

// COMPONENTS //
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/LaneMaintenance.module.scss";

// IMAGES //
import lane_img from "../../public/img/brunswick-bowling/lane_img.png";

/** Home Hero Section */
const LaneMaintenance = ({ laneData }) => {
	// const parse = require("html-react-parser");
	const [activeCategory, setActiveCategory] = useState(0);
	const [data, setData] = useState(
		laneData.data.filter(
			(item) => item.attributes.title == laneData.data[0].attributes.title
		)
	);
	/** getSlectVal */
	function getSlectVal(e) {
		const selectedValue = e.target.innerText;
		const filteredData = laneData.data.filter(
			(item) => item.attributes.title == selectedValue
		);
		setData(filteredData);
	}
	console.log(data);

	return (
		<section className={`${styles.GamesSection} dot_animation_box ptb_100`}>
			<div className="container">
				<div className={`${styles.games_info_main}`}>
					<h2 className="heading_text_40 color_white text_center pb_30">
						Lane Maintenance
					</h2>
					<div className={`${styles.games_info_sec} f_w_j`}>
						<div className={`${styles.games_filter_sec} pt_10`}>
							<div className="product_filer_sec">
								<div className="product_names">
									{laneData.data.map((item, ind) => {
										return (
											<h6
												key={ind}
												onClick={(e) => {
													getSlectVal(e);
													setActiveCategory(ind);
												}}
												className={`paraTxt_16 color_black_opacity pb_20 ${
													activeCategory === ind && "active_product"
												}`}
											>
												{item.attributes.title}
											</h6>
										);
									})}

									{/* <h6 className={`paraTxt_16 color_black_opacity pb_20 `}>
										Control Lane Conditioner
									</h6>
									<h6 className={`paraTxt_16 color_black_opacity pb_20`}>
										Universal Pin Cleaner
									</h6>
									<h6 className={`paraTxt_16 color_black_opacity pb_20`}>
										Lane Maintenance <br />
										Applicator
									</h6>
									<h6 className={`paraTxt_16 color_black_opacity pb_20`}>
										Approach Mop
									</h6>
									<h6 className={`paraTxt_16 color_black_opacity pb_20`}>
										Brunswick Lane Maid
									</h6>
									<h6 className={`paraTxt_16 color_black_opacity pb_20 active_product`}>
										Precision Gutter and <br />
										Capping Mops
									</h6>
									<h6 className={`paraTxt_16 color_black_opacity pb_20`}>Ball Ramp</h6> */}
								</div>
							</div>
						</div>
						<div className={`${styles.games_product_sec}`}>
							{data.map((item, ind) => {
								return (
									<div className={`${styles.product_info_style} d_f`}>
										<div className={`${styles.product_info_img}`}>
											<img
												className={`${styles.lane_img} img width_100`}
												alt="product img"
												src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item.attributes.Image.data.attributes.url}`}
											/>
										</div>
										<div className={`${styles.product_info_content}`}>
											<h2 className="text_35 color_white text_700 pb_20 toTop" data-scroll>
												{item.attributes.subTitle}
											</h2>
											<p className="paraTxt_18 color_white_opacity toTop" data-scroll>
												{item.attributes.desc}
											</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LaneMaintenance;
