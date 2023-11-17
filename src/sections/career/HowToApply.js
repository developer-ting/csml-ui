// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/career/HowToApply.module.scss";

// IMAGES //
import how_to_apply from "../../../public/img/career/how_to_apply.jpg";

/** Home Hero Section */
export default function HowToApply() {
  
	return (
		<section className={`${styles.how_apply_wrap} ptb_100`}>
			
      <div className="container">
       
        <div className={`${styles.service_flex}`}>
          <div className={`${styles.info_bx} toTop`} data-scroll>
            <h2 className={`${styles.info_head} heading_text_55 pb_30`}>
              How to apply
            </h2>
            <p className={`${styles.info_para} paraTxt_18 text_400 pb_10 toTop`} data-scroll>
              We are constantly on the lookout for passionate, driven, and talented individuals who share our vision and want to be part of our journey.
              If you're ready to take the next step in your career and become part of the CSML family, <span className="text_600">please send your resume and a cover letter to <a href="mailto:hr@csmlindia.com">hr@csmlindia.com</a></span>
            </p>
            <p className={`${styles.info_para} paraTxt_18 text_400 pb_10`}>
            In your cover letter, state your reasons for joining and how you can contribute. Alternatively, explore our job openings below.
            </p>
            <div className={`${styles.btn_box} pt_30 toTop`} data-scroll>
              <a href="#" rel="noreferrer">
                <span className="span_btn white_btn">
                  <button className="btn_project_default">Explore Opportunities</button>
                </span>
              </a>
            </div>
          </div>
          <div className={`${styles.img_bx} border_animation white_border_animation toTop`} data-scroll>
            <img className="img" src={how_to_apply.src} />
          </div>
        </div>
      </div>
		</section>
	);
}
