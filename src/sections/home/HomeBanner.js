// MODULES //
import { useRef } from 'react';
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/HomeBanner.module.scss";

// IMAGES //
import home_banner from "../../../public/img/home/home_banner.jpg"; 
import cricle_arrow from "../../../public/img/cricle_arrow.svg";

/** Home Hero Section */
export default function HomeBanner() {
  
	return (
    <section className={styles.home_banner_wrap}>
      <div className={`${styles.banner_img}`}>
        <img className="width_100" src={home_banner.src} />
        
      </div>
      <div className={`${styles.banner_content}`}>
        <h1 className="heading_text_70 color_white pb_40">The architects of amusement </h1>
        <p className="paraTxt color_white">Turning entertainment dreams into reality with premium amusement solutions</p>
      </div>
      <div className={`${styles.circle_right}`} >
       <img className="" src={cricle_arrow.src} />
      </div>
    </section>
  );
}
