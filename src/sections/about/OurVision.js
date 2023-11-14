// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/about/OurVision.module.scss";

// IMAGES //
 import our_vision from "../../../public/img/about/our_vision.jpg";

/** Home Hero Section */
export default function OurVision() {
	return (
		<section className={`${styles.our_vision_wrap}`}>
      <div className={`${styles.our_vision_flex} d_f`}>
        <div className={`${styles.our_vision_box}`}>
          <img className="width_100" src={our_vision.src} alt="our vision" />
        </div>
        <div className={`${styles.our_vision_box}`}>
          <div className={`${styles.our_vision_content}`}>
            <h2 className="heading_text_55 pb_30">Our vision</h2>
            <p className="paraTxt_18 pb_20">CSML envisions a world where every space is a canvas 
            for boundless entertainment, where creativity knows no 
            bounds, and where guests experience unforgettable 
            moments of joy and excitement</p>
          </div>
        </div>
      </div>
		</section>
	);
}
