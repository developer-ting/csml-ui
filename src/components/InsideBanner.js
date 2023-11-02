// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/InsideBanner.module.scss";

// IMAGES //
import home_banner from "../../public/img/home/home_banner.jpg";
import cricle_arrow from "../../public/img/cricle_arrow.svg";

/** Home Hero Section */
export default function InsideBanner() {
	return (
		<section className={styles.home_banner_wrap}>
			<div className={`${styles.banner_img}`}>
				<img className="width_100" src={home_banner.src} />
			</div>
			<div className={`${styles.banner_content}`}>
				<h1 className="text_xxl color_white pb_60">
					Experience Unforgettable <br />
					Adventures with Us{" "}
				</h1>
			</div>
		</section>
	);
}
