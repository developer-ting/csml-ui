// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/career/CsmlExperience.module.scss";

// IMAGES //
import reddy_img from "../../../public/img/career/reddy_img.jpg";
import quate from "../../../public/img/career/quate.svg";

/** Home Hero Section */
export default function CsmlExperience() {
  
	return (
		<section className={`${styles.csml_experience_wrap} pb_100`}>
			
      <div className="container">
        <div className={`${styles.csml_experience_title} toTop`} data-scroll>
          <h2 className="heading_text_55 color_white pb_40">The CSML Experience</h2>
        </div>
        <div className={`${styles.enthralled_item}`}>
          <div className={`${styles.enthralled_box} f_j toTop`} data-scroll>
            <div className={`${styles.enthralled_quate_top}`}>
              <img className="" src={quate.src} alt="img" />
            </div>
            <div className={`${styles.enthralled_quate_bottom}`}>
              <img className="" src={quate.src} alt="img" />
            </div>
            <div className={`${styles.enthralled_img}`}>
              <img className="" src={reddy_img.src} alt="img" />
            </div>
            <div className={`${styles.enthralled_content}`}>
              <p className="paraTxt">CSML Bowling installed the most amazing two-lane bowling alley at our home! They were quick, efficient and so easy to work with from the very beginning while in design to the spotless installation. The finished product has been such a fun!</p>
              <p className="paraTxt pt_10">Installers were very professional and personal. We thoroughly enjoyed their interactions and the training they provided. Our installation was in the basement floor which required special effort and some tricky maneuvers.</p>
              <div className={`${styles.profile_flex} d_f pt_40`}>
                
                <div className={`${styles.profile_content}`}>
                  <h4 className="text_24 text_700">Mr. Reddy</h4>
                  <p className="paraTxt">Hyd- Private home</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
		</section>
	);
}
