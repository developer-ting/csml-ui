// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/BlackStripOverview.module.scss";

// IMAGES //


/** Home Hero Section */
const BlackStripOverview = ({ desc }) => {
	
	return (
		<section className={`${styles.banner_bottom_text_sec} dot_animation_box ptb_60`}>
      <div className="container">
        <p className="text_24 color_white_opacity l_h_6 toTop" data-scroll>
          {parse(desc)}
        </p>
      </div>
    </section>
	);
};

export default BlackStripOverview;
