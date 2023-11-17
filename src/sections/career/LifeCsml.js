// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/career/LifeCsml.module.scss";

// IMAGES //
import life_img_one from "../../../public/img/career/life_img_one.jpg";
import life_img_two from "../../../public/img/career/life_img_two.jpg";
import life_img_three from "../../../public/img/career/life_img_three.jpg";

/** Home Hero Section */
export default function LifeCsml() {
  var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
    slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		responsive: [
      {
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
          slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
          slidesToScroll: 1,
				},

			},
		],
    afterChange: (i) => {
			fillProgress(i + 1);
		},
		// prevArrow: (
		// 	<button className={`${styles.prevarrow} about_prevarrow`}>
		// 		<Image src={arrow_slider.src} alt="arrow" width={40} height={40} />
		// 	</button>
		// ),
		// nextArrow: (
		// 	<button className={`${styles.nextarrow} about_nextarrow`}>
		// 		<Image src={arrow_slider.src} alt="arrow" width={40} height={40} />
		// 	</button>
		// ),
	};

  const [progressWidth, setProgressWidth] = useState(0);
	useEffect(() => {
		fillProgress(1);
	}, []);
	const fillProgress = (currInd) => {
		setProgressWidth((currInd / 6) * 100);
	};
	return (
		<section className={`${styles.life_csml_wrap} pb_100`}>
			
      <div className={`${styles.life_csml_main}`}>
        
        <div className="container">
          <div className={`${styles.life_csml_content}`}>
            <h2 className="heading_text_55 pb_30 toTop" data-scroll>Life at CSML</h2>
            <p className="paraTxt_18 pb_10 toTop" data-scroll>Discover what it's like to be a part of the CSML team. From team-building activities to celebrating milestones, we believe in creating a positive and engaging work environment. </p>
            <p className="paraTxt_18 pb_10 toTop" data-scroll>As leaders in the amusement industry, we are committed to transforming spaces into unforgettable experiences. We are constantly on the lookout for passionate, driven, and talented individuals who share our vision and want to be part of our journey. </p>
          </div>
          <div className={`${styles.showcase_main} pt_40 toTop`} data-scroll>
            <Slider {...settings}>
              <div className={`${styles.showcase_box}`}>
                <div className={`${styles.showcase_content}`}>
                  <div className={`${styles.img_box}`}>
                    <img className="border_8" src={life_img_one.src} alt="img" />
                  </div>
                </div>
              </div>
              <div className={`${styles.showcase_box}`}>
                <div className={`${styles.showcase_content}`}>
                  <div className={`${styles.img_box}`}>
                    <img className="border_8" src={life_img_two.src} alt="img" />
                  </div>
                </div>
              </div>
              <div className={`${styles.showcase_box}`}>
                <div className={`${styles.showcase_content}`}>
                  <div className={`${styles.img_box}`}>
                    <img className="border_8" src={life_img_three.src} alt="img" />
                  </div>
                </div>
              </div>
              <div className={`${styles.showcase_box}`}>
                <div className={`${styles.showcase_content}`}>
                  <div className={`${styles.img_box}`}>
                    <img className="border_8" src={life_img_one.src} alt="img" />
                  </div>
                </div>
              </div>
              <div className={`${styles.showcase_box}`}>
                <div className={`${styles.showcase_content}`}>
                  <div className={`${styles.img_box}`}>
                    <img className="border_8" src={life_img_two.src} alt="img" />
                  </div>
                </div>
              </div>
              <div className={`${styles.showcase_box}`}>
                <div className={`${styles.showcase_content}`}>
                  <div className={`${styles.img_box}`}>
                    <img className="border_8" src={life_img_three.src} alt="img" />
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <div className={`${styles.progress_div} pb_100`}>
            <div className={`${styles.progress_bar}`}>
              <div
                style={{ width: `${progressWidth}%` }}
                className={`${styles.color_div}`}
              ></div>
            </div>
          </div>
        </div>
      </div>
		</section>
	);
}
