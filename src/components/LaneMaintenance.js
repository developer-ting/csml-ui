// MODULES //

// COMPONENTS //
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/LaneMaintenance.module.scss";

// IMAGES //
import lane_img from "../../public/img/brunswick-bowling/lane_img.png";

/** Home Hero Section */
const LaneMaintenance = () => {
	// const parse = require("html-react-parser");
	return (
    <section className={`${styles.GamesSection} dot_animation_box ptb_100`}>
    <div className="container">
      <div className={`${styles.games_info_main}`}>
        <h2 className="heading_text_40 color_white text_center pb_30">
          Lane Maintenance
        </h2>
        <div className={`${styles.games_info_sec} f_w_j`}>

          <div className={`${styles.games_filter_sec} pt_10`}>
            <div className="product_filer_sec">
              
              <div className="product_names" >
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20 `}>
                  Lane Cleaner
                </h6>
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20 `}>
                  Control Lane Conditioner
                </h6>
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20`}>
                  Universal Pin Cleaner
                </h6>
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20`}>
                  Lane Maintenance <br />Applicator
                </h6>
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20`}>
                  Approach Mop
                </h6>
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20`}>
                  Brunswick Lane Maid
                </h6>
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20 active_product`}>
                  Precision Gutter and <br />Capping Mops
                </h6>
                <h6
                  className={`paraTxt_16 color_black_opacity pb_20`}>
                  Ball Ramp
                </h6>
              </div>
              
            </div>
          </div>
          <div className={`${styles.games_product_sec}`}>
            <div className={`${styles.product_info_style} d_f`}>
              <div className={`${styles.product_info_img}`}>
                <img
                  className={`${styles.lane_img} img width_100`}
                  src={lane_img.src}
                />
              </div>
              <div className={`${styles.product_info_content}`}>
                <h2 className="text_35 color_white text_700 pb_20 toTop" data-scroll>
                Precision Gutter and Capping Mops
                </h2>
                <p className="paraTxt_18 color_white_opacity toTop" data-scroll>The mop head, crafted from robust woven yarn, adeptly captures dust from caps and gutters. Heavy-duty reinforced stitching ensures the lint-free yarn remains securely in place. The swivel handle facilitates easy operation, making these mops convenient for cleaning caps and gutters. With various mop sizes available, they cater to different areas of the lanes for comprehensive maintenance.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
		
	);
};

export default LaneMaintenance;
