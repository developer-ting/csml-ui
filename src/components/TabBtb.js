// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../src/styles/components/TabBtn.module.scss";

// IMAGES //

/** tab button*/
const TabBtb = ({
	title,
	white,
	black,
	isActive,
	onClickHandler,
	activeCategory,
}) => {
	return (
		<>
			{onClickHandler ? (
				<div
					className={`${styles.tab_button} ${white && styles.color_white} ${
						black && styles.color_black
					}`}
					onClick={() => onClickHandler(title)}
				>
					<p className={`text_md ${isActive && styles.activeTab}`}>{title}</p>
				</div>
			) : (
				<div
					className={`${styles.tab_button} ${white && styles.color_white} ${
						black && styles.color_black
					}`}
				>
					<p className={`text_md ${isActive && styles.activeTab}`}>{title}</p>
				</div>
			)}
		</>
	);
};

export default TabBtb;
