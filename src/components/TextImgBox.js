// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/TextImgBox.module.scss";

// IMAGES //

/** Home Hero Section */
const TextImgBox = ({
	leftBoxImg,
	rightBoxImg,
	sectionHeading,
	sectionDesc,
}) => {
	return (
		<div className="container">
			<div className={`${styles.TextImgBox} text_center ptb_80`}>
				<div className={`${styles.TextBox} text_center pb_40`}>
					<h2 className="heading_text_55 pb_20 toTop">{parse(sectionHeading)}</h2>
					<p className="paraTxt_18 l_h_5">{parse(sectionDesc)}</p>
				</div>
				<div
					className={`${styles.ImgBoxes} commonBorderAnimation whiteCommonBorderAnimation`}
				>
					<img className={`${styles.card_box_icon} border_8`} src={leftBoxImg} alt="img" />
					<img className={`${styles.card_box_icon} border_8`} src={rightBoxImg} alt="img" />
				</div>
			</div>
		</div>
	);
};

export default TextImgBox;
