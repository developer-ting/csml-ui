// MODULES //
import Link from "next/link";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/about/AboutFeedback.module.scss";

// IMAGES //
  import quate from "../../../public/img/about/quate.svg";
  import feedback_img from "../../../public/img/about/feedback_img.png";

/** Home Hero Section */
export default function AboutFeedback() {
	return (
		<section className={`${styles.about_feedback_wrap} pt_100`}>
			<div className="container">
      <img className={`${styles.feedback_img}`} src={feedback_img.src} alt="img" />
				<div className={`${styles.section_title} pb_40`}>
          <img src={quate.src} alt="img" />
					<h2 className="heading_text_55 pb_20 pt_10">
            Lorem ipsum 
            <br className="hidden-xs" /> dolor sit amet
					</h2>
          <p className="paraTxt_18 color_white">With a single-minded focus, I began my journey with a mission to transform entertainment places, and today I am glad to say that every bowling and amusement center CSML has developed stands and shines successfully regardless of the years. CSML strives to deliver entertainment with absolute honesty, value, and quality in order to maintain goodwill for us and our clients.</p>
				</div>
			</div>
		</section>
	);
}
