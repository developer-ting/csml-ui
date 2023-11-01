// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/ProductCatalogue.module.scss";


// IMAGES //
import showcase from "../../../public/img/home/showcase.jpg";
import arrow from "../../../public/img/arrow.svg";


/** Home Hero Section */
export default function ProductCatalogue() {
  var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
    slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 1000,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
          slidesToScroll: 2,
				},
			},
		],
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
	return (
    <section className={`${styles.product_catalogue_wrap} ptb_100`}>
      <div className="container">
        <div className={`${styles.section_title}`}>
          <h2 className="heading_text_55 pb_40">Our product catalogue</h2>
        </div>
        <div className={`${styles.product_main}`}>
          <Slider {...settings}>
            <div className={`${styles.product_box}`}>
              <div className={`${styles.img_box}`}>
                <div className={`${styles.product_img}`}>
                  <img className="border_8" src={showcase.src} alt="img" />
                </div>
                <div className={`${styles.desc_title} f_j`}>
                  <h3 className="text_24 color_white text_400 pb_20">Arcade Games</h3>
                  <a href="#" rel="noreferrer">
                    <button className="btn_arrow">
                      <span className={`${styles.arrow_one} arrow_one`}><img src={arrow.src} /></span>
                      <span className={`${styles.arrow_two} arrow_two`}><img src={arrow.src} /></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.product_box}`}>
              <div className={`${styles.img_box}`}>
                <div className={`${styles.product_img}`}>
                  <img className="border_8" src={showcase.src} alt="img" />
                </div>
                <div className={`${styles.desc_title} f_j`}>
                  <h3 className="text_24 color_white text_400 pb_20">Arcade Games</h3>
                  <a href="#" rel="noreferrer">
                    <button className="btn_arrow">
                      <span className={`${styles.arrow_one} arrow_one`}><img src={arrow.src} /></span>
                      <span className={`${styles.arrow_two} arrow_two`}><img src={arrow.src} /></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.product_box}`}>
              <div className={`${styles.img_box}`}>
                <div className={`${styles.product_img}`}>
                  <img className="border_8" src={showcase.src} alt="img" />
                </div>
                <div className={`${styles.desc_title} f_j`}>
                  <h3 className="text_24 color_white text_400 pb_20">Arcade Games</h3>
                  <a href="#" rel="noreferrer">
                    <button className="btn_arrow">
                      <span className={`${styles.arrow_one} arrow_one`}><img src={arrow.src} /></span>
                      <span className={`${styles.arrow_two} arrow_two`}><img src={arrow.src} /></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className={`${styles.product_box}`}>
              <div className={`${styles.img_box}`}>
                <div className={`${styles.product_img}`}>
                  <img className="border_8" src={showcase.src} alt="img" />
                </div>
                <div className={`${styles.desc_title} f_j`}>
                  <h3 className="text_24 color_white text_400 pb_20">Arcade Games</h3>
                  <a href="#" rel="noreferrer">
                    <button className="btn_arrow">
                      <span className={`${styles.arrow_one} arrow_one`}><img src={arrow.src} /></span>
                      <span className={`${styles.arrow_two} arrow_two`}><img src={arrow.src} /></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>

    </section>
  );
}
