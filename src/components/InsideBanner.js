// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/InsideBanner.module.scss";

// IMAGES //
import home_banner from "../../public/img/home/home_banner.jpg";
import cricle_arrow from "../../public/img/cricle_arrow.svg";

/** Home Hero Section */
const InsideBanner = ({bannerImg, bannerTitle, mobileImg }) => {
	// const parse = require("html-react-parser");
	return (
		<section className={styles.home_banner_wrap}>
			<div className={`${styles.banner_img}`}>
				{/* <img className="width_100" src={bannerImg} /> */}
				<img
					src={bannerImg}
					alt=""
					className={`${styles.inside_banner_img} hidden-xs`}
				/>
				{mobileImg && (
					<img src={mobileImg} alt=""className={`${styles.mobileImg} visible-xs`} />
				)}
			</div>
			<div className={`${styles.banner_content}`}>
				<h1 className="text_xxl color_white">
					{/* Experience Unforgettable <br />
					Adventures with Us{" "} */}
					{parse(bannerTitle)}
				</h1>
			</div>
		</section>
	);
}

export default InsideBanner;
