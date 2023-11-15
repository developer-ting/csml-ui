// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //
import parse from "html-react-parser";

// STYLES //
import styles from "../styles/components/ContactTab.module.scss";

// IMAGES //
import home_banner from "../../public/img/home/home_banner.jpg";
import cricle_arrow from "../../public/img/cricle_arrow.svg";

/** Home Hero Section */
const ContactTab = () => {
	// const parse = require("html-react-parser");
	return (
		<section className={`${styles.contact_tab} ptb_80`}>
			<div className="container">
				<div className={`${styles.contact_main_bx}`}>
					<div className={`${styles.contactinside}`}>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.inside_flex}`}>
							<div className={`${styles.text_bx} text_24`}>
								Partner with us for a stress-free, flourishing FEC.
								<br /> Your success is our commitment.
							</div>
							<div className={`${styles.btn_bx}`}>
								<a href="#" rel="noreferrer">
									<button className="btn_project_default yellow_btn">Contact Us</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactTab;
