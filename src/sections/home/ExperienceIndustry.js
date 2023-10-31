// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/ExperienceIndustry.module.scss";


// IMAGES //

/** Home Hero Section */
export default function ExperienceIndustry() {
  
	return (
    <section className={`${styles.experience_industry_wrap} ptb_100`}>
      <div className="container">
        <div className={`${styles.section_title} pb_40`}>
          <h2 className="heading_text_55 pb_20">Experience the industry's first and best</h2>
        </div>
        <div className={`${styles.partner_superior_flex} f_j`}>
          <div className={`${styles.partner_superior_box}`}>
            <div className="dot_one dots_p"></div>
            <div className="dot_two dots_p"></div>
            <div className="dot_three dots_p"></div>
            <h3 className="paraTxt text_700 pb_20">Pioneers of amusement solutions </h3>
            <p className="paraTxt">As leaders of Indoor Amusement Centers (IAC) development, we provide comprehensive, end-to-end solutions.</p>
          </div>
          <div className={`${styles.partner_superior_box}`}>
            <div className="dot_one dots_p"></div>
            <div className="dot_two dots_p"></div>
            <div className="dot_three dots_p"></div>
            <h3 className="paraTxt text_700 pb_20">Partnered with the best</h3>
            <p className="paraTxt">As leaders of Indoor Amusement Centers (IAC) development, we provide comprehensive, end-to-end solutions.</p>
          </div>

          <div className={`${styles.partner_superior_box}`}>
            <div className="dot_one dots_p"></div>
            <div className="dot_two dots_p"></div>
            <div className="dot_three dots_p"></div>
            <h3 className="paraTxt text_700 pb_20">Investment excellence partner </h3>
            <p className="paraTxt">As leaders of Indoor Amusement Centers (IAC) development, we provide comprehensive, end-to-end solutions.</p>
          </div>

          <div className={`${styles.partner_superior_box}`}>
            <div className="dot_one dots_p"></div>
            <div className="dot_two dots_p"></div>
            <div className="dot_three dots_p"></div>
            <h3 className="paraTxt text_700 pb_20">Launch success partner</h3>
            <p className="paraTxt">As leaders of Indoor Amusement Centers (IAC) development, we provide comprehensive, end-to-end solutions.</p>
          </div>
          
        </div>
        <div className={`${styles.btn_box} pt_40`}>
          <a href="#" target="_blank" rel="noreferrer">
            <button className="btn_project_default">
              Learn More
            </button>
          </a>
        </div>
      </div>

    </section>
  );
}
