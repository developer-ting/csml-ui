// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/CardHoverYellow.module.scss";

// IMAGES //
import plus_icon from "../../public/img/up_icon.svg";

/** Home Hero Section */
const CardHoverYellow = ({ boxImg, title, desc, full, new_style }) => {
	return (
		<div
			className={`${styles.luminaries_box} ${
				new_style && styles.new_box
			} border_animation white_border_animation`}
		>
			<div className="dot_one dots_p"></div>
			<div className="dot_two dots_p"></div>
			<div className="dot_three dots_p"></div>
			<div className={`${styles.luminaries_content}`}>
				<img className="border_8" src={boxImg} alt="card yellow img" />
				<div className={`${styles.desc_box} ${full && styles.full_height}`}>
					<div className={`${styles.desc_title}`}>
						<h3 className="text_24 text_700">{title}</h3>
						<img className="img" src={plus_icon.src} alt="plus icon" />
					</div>
					<p className="paraTxt">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default CardHoverYellow;
