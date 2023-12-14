// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/CardHoverYellow.module.scss";

// IMAGES //
import success_img from "../../public/img/career/success_img.jpg";

/** Home Hero Section */
const CardHoverYellow = () => {
	
	return (
		<div
        className={`${styles.luminaries_box} border_animation white_border_animation`}
      >
        <div className="dot_one dots_p"></div>
        <div className="dot_two dots_p"></div>
        <div className="dot_three dots_p"></div>
        <div className={`${styles.luminaries_content}`}>
          <img className="border_8" src={success_img.src} alt="img" />
          <div className={`${styles.desc_box}`}>
            <div className={`${styles.desc_title}`}>
              <h3 className="text_24 text_700">Innovative Environment</h3>
            </div>
            <p className="paraTxt">
              CSML is a playground for creativity. We encourage out-of-the-box
              thinking and provide a platform for your ideas to come to life.
            </p>
          </div>
        </div>
      </div>
	);
};

export default CardHoverYellow;
