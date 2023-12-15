// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/ImagePara.module.scss";

// IMAGES //
import userFriendly from "../../public/img/product/go-karting/user-friendly.jpg";

/** Home Hero Section */
const ImagePara = ({ boxImg, title, desc }) => {
	// const parse = require("html-react-parser");
	return (
		<div className={`${styles.hardwareSectionBox} f_w_j a_center pb_40`}>
			<div
				className={`${styles.hardwareSectionStyle} commonBorderAnimation whiteCommonBorderAnimation toTop`}
				data-scroll
			>
				<img
					src={boxImg}
					className="border_8 width_100"
					alt="Essential Components"
				/>
			</div>
			<div className={`${styles.hardwareSectionStyle}`}>
				<h4 className="text_24 text_700 pb_20 toTop" data-scroll>
					{title}
				</h4>
				<p className="paraTxt_18 color_black_opacity l_h_6 toTop" data-scroll>
					{parse(desc)}
				</p>
			</div>
		</div>
	);
};

export default ImagePara;
