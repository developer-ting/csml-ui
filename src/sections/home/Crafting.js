// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/Crafting.module.scss";

// IMAGES //
import cricle_img from "../../../public/img/home/cricle_img.png";

/** Home Hero Section */
export default function Crafting() {
	return (
    <section className={`${styles.crafting_wrap} ptb_100`}>
      <div className="container">
        <div className={`${styles.crafting_flex} d_f`}>
        
          <div className={`${styles.cricle_box}`}>
            <img className="" src={cricle_img.src} />
          </div>

          <div className={`${styles.left_content}`}>
            <h2 className="text_xxxxxI color_white pb_40">Crafting</h2>
            <p className="paraTxt color_white">Since our establishment in 2002, we have cultivated an extensive portfolio of entertainment solutions. Additionally, we've been the exclusive distributor for Brunswick Bowling Products USA in India & SAARC. </p>
          </div>
          <div className={`${styles.right_content} pt_40`}>
            <h2 className="heading_text_45 color_white pb_60">
              world-class entertainment <br />hubs for over 50 years
            </h2>
            <a href="#" target="_blank" rel="noreferrer">
								<button className="btn_project_default color_white">
                  About Us 
								</button>
							</a>
          </div>
        </div>
      </div>
    </section>
  );
}
