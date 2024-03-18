// MODULES //
import CountUp from "react-countup";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/about/CountPioneering.module.scss";

// IMAGES //
 import component_one from "../../../public/img/about/component_one.png";
 import component_two from "../../../public/img/about/component_two.png";

/** Home Hero Section */
export default function CountPioneering() {
	return (
		<section className={`${styles.count_pioneering_wrap} dot_animation_box pt_100`}>
			<div className="container">
        <div className={`${styles.intertainment_border} border_animation toTop`} data-scroll>
					<div className={`${styles.intertainment_flex}`}>
						<div className={`${styles.intertainment_left} border_12 d_f`}>
							<div className="dot_one dots_p"></div>
							<div className="dot_two dots_p"></div>
							<div className="dot_three dots_p"></div>
							<div className={`${styles.content_box}`}>
								
								<div className={`${styles.content_flex}`}>
									<h2 className="heading_text_55 text_800"> <CountUp end={900} enableScrollSpy />+</h2>
                  <h3 className="color_white text_sm text_700 text_upper pb_10">
                   Brunswick Bowling Lanes
								  </h3>
									<p className="text_xs color_white opacity_one">
                    Installed
									</p>
								</div>
							</div>
							<div className={`${styles.content_box}`}>
								
								<div className={`${styles.content_flex}`}>
									<h2 className="heading_text_55 text_800"> <CountUp end={17000} enableScrollSpy />+</h2>
                  <h3 className="color_white text_sm text_700 text_upper pb_10">
                    Arcade & Amusement Games
                  </h3>
									<p className="text_xs color_white opacity_one">
                    Deployed
									</p>
								</div>
							</div>
							<div className={`${styles.content_box}`}>
								
								<div className={`${styles.content_flex}`}>
									<h2 className="heading_text_55 text_800"><CountUp end={125} enableScrollSpy />+</h2>
                  <h3 className="color_white text_sm text_700 text_upper pb_10">
                    Amusement Centers
                  </h3>
									<p className="text_xs color_white opacity_one">Collaborations</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

      <div className={`${styles.pioneering_main}`}>
        <div className={`${styles.component_one}`}>
          <img className="" src={component_one.src} alt="pioneering img" />
        </div>
        <div className={`${styles.component_two}`}>
          <img className="" src={component_two.src} alt="pioneering img" />
        </div>
        <div className="container">
          <div className={`${styles.pioneering_content}`}>
            <h2 className="heading_text_55 color_white pb_30 toTop" data-scroll>Pioneering exciting possibilities</h2>
            <p className="paraTxt_18 pb_20 toTop" data-scroll>We turn visions into reality, and we excel in doing so. <span>Since 2002, our journey has been defined by a deep-rooted passion for the amusement industry, backed by over five decades of combined expertise.</span></p>
            <p className="paraTxt_18 pb_20 toTop" data-scroll>As pioneers in Indoor Amusement Centers (IAC), we offer end-to-end solutions. From initial planning and layout design to game selection, equipment logistics, and precise installation - we’ve got it all covered. Plus, our expert training and unwavering post-sales support keep the fun rolling.</p>
            <p className="paraTxt_18 pb_20 toTop" data-scroll>Our track record speaks volumes - we've installed 900+ Brunswick Bowling Lanes, deployed 17,000+ Arcade & Amusement Games, collaborated with 200+ Amusement Centers and served 125+ customers across the continent. From corporate venues to exclusive clubhouses, luxury hotels, resorts, and private villas, we've left our mark across India and the SAARC Region.</p>
          </div>
        </div>
      </div>
		</section>
	);
}
