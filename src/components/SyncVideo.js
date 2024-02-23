// MODULES //
import { useEffect, useRef, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-video.css";

import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgVideo from "lightgallery/plugins/video";

// STYLES //
import styles from "../styles/components/sync.module.scss";

// IMAGES //
import sync_img from "../../public/img/brunswick-bowling/sync_img.jpg";
import sync_img_two from "../../public/img/brunswick-bowling/sync_img_two.jpg";
import video_img from "../../public/img/brunswick-bowling/video_img.jpg";
import play from "../../public/img/brunswick-bowling/play.svg";

/** Home Hero Section */
const SyncVideo = ({ youTube }) => {

	return (
		<section className={`${styles.sync}`}>
			
			<div className={`${styles.intertainment_right} toTop`} data-scroll>
				<LightGallery speed={500} plugins={[lgThumbnail, lgZoom, lgVideo]}>
					<a href={youTube.data[0].attributes.youTubeLink}>
						<div className={`${styles.video_box}`}>
							<img
								className={`${styles.video_img} img width_100`}
								src={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${youTube.data[0].attributes.Image.data.attributes.url}`}
							/>
							<div className={`${styles.video_play}`}>
								<img src={play.src} className={`${styles.gallery_plus}`} alt="play" />
								{/* <span>Experience Spark</span> */}
							</div>
						</div>
					</a>
				</LightGallery>
			</div>
		</section>
	);
};

export default SyncVideo;
