// MODULES //
import { useEffect, useState } from "react";

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/career/OurGuidingValues.module.scss";

// IMAGES //
import guiding_values from "../../../public/img/career/guiding_values.jpg";
import dream_big from "../../../public/img/career/dream_big.jpg";
import complete_win from "../../../public/img/career/complete_win.jpg";
import make_fun from "../../../public/img/career/make_fun.jpg";
import make_difference_every_day from "../../../public/img/career/make_difference_every_day.jpg";
import creativity_innovation from "../../../public/img/career/creativity_innovation.jpg";
import relationship_matter from "../../../public/img/career/relationship_matter.jpg";

/** Home Hero Section */
export default function OurGuidingValues() {
  var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 2,
    slidesToScroll: 1,
		autoplay: false,
		pauseOnHover: false,
		speed: 1000,
    variableWidth: true,
		responsive: [
      
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          autoplay: true,
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
		<section className={`${styles.our_guiding_values_wrap} dot_animation_box ptb_100`}>
			
      <div className={`${styles.our_guiding_values_main}`}>
        <div className={`${styles.life_csml_content} toTop`} data-scroll>
          <h2 className="heading_text_55 color_white pb_40">Our Values / Ethos</h2>
        </div>
        <div className={`${styles.partner_superior_flex} toTop`} data-scroll>
          <Slider {...settings}>
            <div className={`${styles.partner_superior_box} border_animation`}>
              <div className={`${styles.partner_superior_content}`}>
                {/* <img className="border_8 width_100" src={dream_big.src} alt="img" /> */}
                <div className={`${styles.desc_box}`}>
                  <div className={`${styles.desc_title} f_j`}>
                    <h3 className="text_24 color_white text_500 ">
                      Dream Big
                    </h3>
                    
                  </div>
                  <p className="paraTxt color_white opacity_one">
                    Foster grand ambitions and explore boundless horizons, aiming for exceptional achievements and continuous self-improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.partner_superior_box} border_animation`}>
              <div className={`${styles.partner_superior_content}`}>
                {/* <img className="border_8 width_100" src={complete_win.src} alt="img" /> */}
                <div className={`${styles.desc_box}`}>
                  <div className={`${styles.desc_title} f_j`}>
                    <h3 className="text_24 color_white text_500">
                      Compete to Win
                    </h3>
                  </div>
                  <p className="paraTxt color_white opacity_one">
                    Pursue excellence relentlessly, constantly pushing your limits and seeking innovative ways to triumph in all endeavours.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.partner_superior_box} border_animation`}>
              <div className={`${styles.partner_superior_content}`}>
                {/* <img className="border_8 width_100" src={make_fun.src} alt="img" /> */}
                <div className={`${styles.desc_box}`}>
                  <div className={`${styles.desc_title} f_j`}>
                    <h3 className="text_24 color_white text_500">
                      Make Every Experience Fun
                    </h3>
                  </div>
                  <p className="paraTxt color_white opacity_one">
                    Inject enthusiasm and excitement into every task, ensuring that joy and passion are integral to your journey.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.partner_superior_box} border_animation`}>
              <div className={`${styles.partner_superior_content}`}>
                {/* <img className="border_8 width_100" src={make_difference_every_day.src} alt="img" /> */}
                <div className={`${styles.desc_box}`}>
                  <div className={`${styles.desc_title} f_j`}>
                    <h3 className="text_24 color_white text_500">
                      Make a Difference Every Day
                    </h3>
                  </div>
                  <p className="paraTxt color_white opacity_one">
                    Contribute positively and meaningfully to our mission by continuously improving and leaving a lasting impact.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.partner_superior_box} border_animation`}>
              <div className={`${styles.partner_superior_content}`}>
                {/* <img className="border_8 width_100" src={creativity_innovation.src} alt="img" /> */}
                <div className={`${styles.desc_box}`}>
                  <div className={`${styles.desc_title} f_j`}>
                    <h3 className="text_24 color_white text_500">
                      Creativity & Innovation
                    </h3>
                  </div>
                  <p className="paraTxt color_white opacity_one">
                    Cultivate original ideas and embrace pioneering approaches to problem-solving, constantly pushing the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.partner_superior_box} border_animation`}>
              <div className={`${styles.partner_superior_content}`}>
                {/* <img className="border_8 width_100" src={relationship_matter.src} alt="img" /> */}
                <div className={`${styles.desc_box}`}>
                  <div className={`${styles.desc_title} f_j`}>
                    <h3 className="text_24 color_white text_500">
                      Relationships Matter
                    </h3>
                  </div>
                  <p className="paraTxt color_white opacity_one">
                    Promote teamwork, nurture respect, and build strong, lasting connections within our community, recognizing the importance of collaboration.
                  </p>
                </div>
              </div>
            </div>

          </Slider>
				</div>
      </div>
      <div className="container">
				<div className={`${styles.progress_div} pb_100`}>
					<div className={`${styles.progress_bar}`}>
						<div
							style={{ width: `${progressWidth}%` }}
							className={`${styles.color_div}`}
						></div>
					</div>
				</div>
			</div>
		</section>
	);
}
