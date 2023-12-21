// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../src/styles/components/TabBtn.module.scss";

// IMAGES //

/** tab button*/
const TabBtb = ({ title, white, black }) => {
	return (
		<div
			className={`${styles.tab_button} ${white && styles.color_white} ${
				black && styles.color_black
			}`}
		>
			<p className="text_md">{title}</p>
		</div>
	);
};

export default TabBtb;
