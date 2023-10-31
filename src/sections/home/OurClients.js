// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/OurClients.module.scss";


// IMAGES //
import google_logo from "../../../public/img/home/google_logo.png";
import jw_marriott from "../../../public/img/home/jw_marriott.png";
import club_mahindra from "../../../public/img/home/club_mahindra.png";
import Infosys_logo from "../../../public/img/home/Infosys_logo.png";
import essel_world from "../../../public/img/home/essel_world.png";
import linkedIn_logo from "../../../public/img/home/linkedIn_logo.png";
import smaash from "../../../public/img/home/smaash.png";
import funcity from "../../../public/img/home/funcity.png";
import bosch from "../../../public/img/home/bosch.png";
import torq from "../../../public/img/home/torq.png";
import renaissance from "../../../public/img/home/renaissance.png";
import timezone from "../../../public/img/home/timezone.png";
import shott from "../../../public/img/home/shott.png";
import westin from "../../../public/img/home/westin.png";
import go_bowl from "../../../public/img/home/go_bowl.png";


/** Home Hero Section */
export default function OurClients() {
  
	return (
    <section className={`${styles.our_clients_wrap} ptb_100`}>
      <div className="container">
        <div className={`${styles.section_title}`}>
          <h2 className="heading_text_40 color_white pb_30">Our Clients</h2>
        </div>
        <div className={`${styles.clients_logo_flex} f_j`}>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={jw_marriott.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={club_mahindra.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={Infosys_logo.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={essel_world.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={linkedIn_logo.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={smaash.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={funcity.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={google_logo.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={bosch.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={torq.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={renaissance.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={timezone.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={shott.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={westin.src} alt="logo" />
          </div>
          <div className={`${styles.clients_logo_box}`}>
            <img className="" src={go_bowl.src} alt="logo" />
          </div>
        </div>
      </div>

    </section>
  );
}
