// MODULES //
import Link from "next/link";
import { useRef, useEffect } from 'react';
import * as Scroll from "react-scroll";
import {
  Link as ScrollSection,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
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

  useEffect(() => {
    let anim = document.querySelector(".home_banner_top");
    setTimeout(function () {
      anim.classList.add("home_banner_scroll");
    }, 500);
  }, []);
  
	return (
    <section className={`${styles.home_banner_wrap} home_banner_top`}>
      <div className={`${styles.banner_img}`}>
        <img className="width_100" src={home_banner.src} />
        {/* <video autoPlay muted loop className={styles.video_box}>         
          <source src="./img/home/movie.mp4" type="video/mp4"/>       
        </video> */}
      </div>
      <div className={`${styles.banner_content}`}>
        <h1 className="heading_text_70 color_white pb_40">The architects of amusement </h1>
        <p className="paraTxt color_white">Turning entertainment dreams into reality with premium amusement solutions</p>
      </div>
      <div className={`${styles.circle_right}`} >
        
        <ScrollSection
          
          activeClass="active"
          to="about_us"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className={`${styles.menu_link} `}
        >
          <img className="" src={cricle_arrow.src} />
        </ScrollSection>
       
      </div>
    </section>
  );
}
