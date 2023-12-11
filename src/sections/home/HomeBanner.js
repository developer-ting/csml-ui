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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/HomeBanner.module.scss";

// IMAGES //
import home_banner from "../../../public/img/home/home_banner.jpg"; 
import cricle_arrow from "../../../public/img/cricle_arrow.svg";

/** Home Hero Section */
export default function HomeBanner() {

  useEffect(() => {
    let anim = document.querySelector(".home_banner_animation");
    anim.classList.add("home_banner_scroll");
    // setTimeout(function () {
      
    // }, 600);
  }, []);

  var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 2000,
    autoplaySpeed:7000
		
	};

  
	return (
    <section className={`${styles.home_banner_wrap}`}>
      <div className={`${styles.home_banner_animation} home_banner_animation slider_white_dots`}>
        <Slider {...settings}>
          <div className={`${styles.home_banner_item}`}>
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
          </div>

          <div className={`${styles.home_banner_item}`}>
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
          </div>

          <div className={`${styles.home_banner_item}`}>
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
          </div>

        </Slider>
        <div className={`${styles.circle_right}`} >
              
              <ScrollSection
                
                
                to="crafting_section"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                <img className="" src={cricle_arrow.src} />
              </ScrollSection>
            
            </div>
      </div>
      
    </section>
  );
}
