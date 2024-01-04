// MODULES //

// COMPONENTS //
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/SparkImmersive.module.scss";

// IMAGES //

/** Home Hero Section */
const SparkImmersive = ({ data }) => {
	// const parse = require("html-react-parser");
	return (
		<section className={`${styles.spark_immersive_main}`}>
			<div className="container">
				<div className={`${styles.optimizing_flex} pt_40 d_f`}>
					<div className={`${styles.optimizing_title}`}>
						<h2 className="heading_text_55 text_700 pb_20 toTop" data-scroll>
							{data.data[0].attributes.title}
						</h2>
						<h4 className="text_24 text_600 pb_20 toTop" data-scroll>
							{data.data[0].attributes.subTitle}
						</h4>
					</div>
					<div className={`${styles.optimizing_content} toTop`} data-scroll>
						<p className="paraTxt_18 toTop" data-scroll>
							{data.data[0].attributes.desc}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SparkImmersive;
