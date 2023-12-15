// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/CardIcon.module.scss";

// IMAGES //


/** Home Hero Section */
const CardIcon = ({ boxIcon, title, desc}) => {
	
	return (
		<div className={`${styles.card_box}`}>
      <img className={`${styles.card_box_icon} pb_30`} src={boxIcon} alt="img" />
      <p className="paraTxt color_white text_600 pb_10">{title}</p>
      <p className="paraTxt_18 color_white color_white_opacity l_h_5">{desc}</p>
    </div>
	);
};

export default CardIcon;
