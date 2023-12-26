// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/ImageParaBlackBg.module.scss";

// IMAGES //
import userFriendly from "../../public/img/product/go-karting/user-friendly.jpg";

/** Home Hero Section */
const ImageParaBlackBg = ({ boxImgBlackBg, titleBlackBg, descBlackBg }) => {
	return (
		<div className={`${styles.contentImgSectionBox} f_w_j a_center pb_60`}>
			<div
				className={`${styles.contentImgStyle} commonBorderAnimation toTop`}
				data-scroll
			>
				<img src={boxImgBlackBg} className="border_8 width_100" alt="Img" />
			</div>
			<div className={`${styles.contentImgStyle}`}>
				<h4 className="text_24 text_700 pb_20 toTop color_white" data-scroll>
					{titleBlackBg}
				</h4>
				<p className="paraTxt_18 color_white_opacity l_h_6 toTop" data-scroll>
					{parse(descBlackBg)}
				</p>
			</div>
		</div>
	);
};

export default ImageParaBlackBg;
