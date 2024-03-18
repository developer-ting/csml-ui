// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/AccessoriesCard.module.scss";

// IMAGES //

/** Home Hero Section */
const AccessoriesCard = ({ boxImg, title, desc }) => {
	return (
		<div className={`${styles.accessories_card} f_w_a`}>
			<div className={`${styles.img}`}>
				<img className={`${styles.accessories_card_img}`} src={boxImg} alt="accessories img" />
			</div>
			<div className={`${styles.info}`}>
				<p className="text_md color_white text_500 pb_10">{title}</p>
				<p className="paraTxt_18 color_white_opacity l_h_6 text_100">{desc}</p>
			</div>
		</div>
	);
};

export default AccessoriesCard;
