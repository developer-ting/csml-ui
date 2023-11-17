// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../styles/sections/home/EnthralledCustomers.module.scss";


// IMAGES //
import enrolled_img from "../../../public/img/home/enrolled_img.jpg";
import profile_img from "../../../public/img/home/profile_img.png";
import quate from "../../../public/img/home/quate.svg";


/** Home Hero Section */
export default function EnthralledCustomers() {
  var settings = {
		dots: true,
		arrows: false,
		infinite: true,
		slidesToShow: 1,
    slidesToScroll: 1,
		autoplay: true,
		pauseOnHover: false,
		speed: 2000,
    autoplaySpeed: 5000,
		
	};

	return (
    <section className={`${styles.enthralled_customers_wrap} pb_100`}>
      <div className="container">
        <div className={`${styles.section_title} toTop`} data-scroll>
          <h2 className="heading_text_55 color_white pb_20">Enthralled customers</h2>
        </div>
        <div className={`${styles.enthralled_main} toTop`} data-scroll>
          <Slider {...settings}> 
            <div className={`${styles.enthralled_item}`}>
              <div className={`${styles.enthralled_box} f_j`}>
                <div className={`${styles.enthralled_quate_top}`}>
                  <img className="" src={quate.src} alt="img" />
                </div>
                <div className={`${styles.enthralled_quate_bottom}`}>
                  <img className="" src={quate.src} alt="img" />
                </div>
                <div className={`${styles.enthralled_content}`}>
                  <p className="paraTxt">Working with CSML has been an ultimate pleasure. The team has an eye for detail & worldwide trends are well understood. Their years of experience in Indoor Amusement Center (IAC)s business yields brilliant suggestions that would ultimately make the ROI faster. CSML is one stop solution for all gaming requirements & amazing after sales services.</p>
                  <div className={`${styles.profile_flex} d_f pt_80`}>
                    <div className={`${styles.profile_img}`}>
                      <img className="" src={profile_img.src} alt="img" />
                    </div>
                    <div className={`${styles.profile_content}`}>
                      <h4 className="text_24 text_700">Mr. Rishi Shah</h4>
                      <p className="paraTxt">Founder, Shott Amusement LLP</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.enthralled_img}`}>
                  <img className="" src={enrolled_img.src} alt="img" />
                </div>
              </div>
            </div>
            
            <div className={`${styles.enthralled_item}`}>
              <div className={`${styles.enthralled_box} f_j`}>
                <div className={`${styles.enthralled_quate_top}`}>
                  <img className="" src={quate.src} alt="img" />
                </div>
                <div className={`${styles.enthralled_quate_bottom}`}>
                  <img className="" src={quate.src} alt="img" />
                </div>
                <div className={`${styles.enthralled_content}`}>
                  <p className="paraTxt">Working with CSML has been an ultimate pleasure. The team has an eye for detail & worldwide trends are well understood. Their years of experience in Indoor Amusement Center (IAC)s business yields brilliant suggestions that would ultimately make the ROI faster. CSML is one stop solution for all gaming requirements & amazing after sales services.</p>
                  <div className={`${styles.profile_flex} d_f pt_80`}>
                    <div className={`${styles.profile_img}`}>
                      <img className="" src={profile_img.src} alt="img" />
                    </div>
                    <div className={`${styles.profile_content}`}>
                      <h4 className="text_24 text_700">Mr. Rishi Shah</h4>
                      <p className="paraTxt">Founder, Shott Amusement LLP</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.enthralled_img}`}>
                  <img className="" src={enrolled_img.src} alt="img" />
                </div>
              </div>
            </div>
            <div className={`${styles.enthralled_item}`}>
              <div className={`${styles.enthralled_box} f_j`}>
                <div className={`${styles.enthralled_quate_top}`}>
                  <img className="" src={quate.src} alt="img" />
                </div>
                <div className={`${styles.enthralled_quate_bottom}`}>
                  <img className="" src={quate.src} alt="img" />
                </div>
                <div className={`${styles.enthralled_content}`}>
                  <p className="paraTxt">Working with CSML has been an ultimate pleasure. The team has an eye for detail & worldwide trends are well understood. Their years of experience in Indoor Amusement Center (IAC)s business yields brilliant suggestions that would ultimately make the ROI faster. CSML is one stop solution for all gaming requirements & amazing after sales services.</p>
                  <div className={`${styles.profile_flex} d_f pt_80`}>
                    <div className={`${styles.profile_img}`}>
                      <img className="" src={profile_img.src} alt="img" />
                    </div>
                    <div className={`${styles.profile_content}`}>
                      <h4 className="text_24 text_700">Mr. Rishi Shah</h4>
                      <p className="paraTxt">Founder, Shott Amusement LLP</p>
                    </div>
                  </div>
                </div>
                <div className={`${styles.enthralled_img}`}>
                  <img className="" src={enrolled_img.src} alt="img" />
                </div>
              </div>
            </div>
          </Slider>
          
        </div>
      </div>

    </section>
  );
}
