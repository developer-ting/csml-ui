// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import { ServerHeaders } from "@/utils/RequestHeaders";
// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../../src/styles/pages/product/ElectricKarts.module.scss";

// IMAGES //
import plus_icon from "../../../public/img/plus_icon.svg";
import sodi_rxs_2 from "../../../public/img/product/go-karting/sodi_rxs_2.jpg";
import sodi_lrx_kids from "../../../public/img/product/go-karting/sodi_lrx_kids.jpg";
import sodi_x2drive from "../../../public/img/product/go-karting/sodi_x2drive.jpg";

/** Home Hero Section */
const ElectricKarts = () => {
	// console.log(cuttingEdgeData);
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: true,
		speed: 1000,
    autoplaySpeed: 5000,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
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
		setProgressWidth((currInd / 4) * 100);
	};
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	// const parse = require("html-react-parser");
	return (
		<div className={`${styles.ecommerce_slider_main} pt_60 pb_100 toTop`} data-scroll>
			<div className="container">
				<div className={`${styles.title_txt} pb_30`}>
					<h2 className="heading_text_40 text_700 toTop" data-scroll>
            Electric Karts
					</h2>
				</div>
			</div>

			<div className={`${styles.partner_superior_flex} toTop`} data-scroll>
				<Slider {...settings}>
          <div className={`${styles.showcase_box}`}>
            <div className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}>
              <div
                className={`${styles.img_box}`}
              >
                <img
                  className="border_8"
                  src={sodi_rxs_2.src}
                  alt="img"
                />
              </div>
              <div className={`${styles.desc_box}`}>
                <div className={`${styles.desc_title} f_j`}>
                  <h3 className="text_24 text_700 pb_20">
                    SODI RXS/2
                  </h3>
                  <a>
                    <button className="btn_plus">
                      <span className={`${styles.arrow_one} arrow_one`}>
                        <img src={plus_icon.src} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.showcase_box}`}>
            <div className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}>
              <div
                className={`${styles.img_box}`}
              >
                <img
                  className="border_8"
                  src={sodi_lrx_kids.src}
                  alt="img"
                />
              </div>
              <div className={`${styles.desc_box}`}>
                <div className={`${styles.desc_title} f_j`}>
                  <h3 className="text_24 text_700 pb_20">
                    SODI LRX (KIDS)
                  </h3>
                  <a>
                    <button className="btn_plus">
                      <span className={`${styles.arrow_one} arrow_one`}>
                        <img src={plus_icon.src} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.showcase_box}`}>
            <div className={`${styles.showcase_content} commonBorderAnimation whiteCommonBorderAnimation`}>
              <div
                className={`${styles.img_box}`}
              >
                <img
                  className="border_8"
                  src={sodi_x2drive.src}
                  alt="img"
                />
              </div>
              <div className={`${styles.desc_box}`}>
                <div className={`${styles.desc_title} f_j`}>
                  <h3 className="text_24 text_700 pb_20">
                  SODI X2DRIVE
                  </h3>
                  <a>
                    <button className="btn_plus">
                      <span className={`${styles.arrow_one} arrow_one`}>
                        <img src={plus_icon.src} />
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
				</Slider>
			</div>
		</div>
	);
};

export default ElectricKarts;
