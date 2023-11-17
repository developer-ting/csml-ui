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
const ContactTab = ({ TabTitle }) => {
	// const parse = require("html-react-parser");
	return (
		<section className={`${styles.contact_tab} ptb_80`}>
			<div className="container">
				<div className={`${styles.contact_main_bx}  border_animation`}>
					<div className={`${styles.contactinside}`}>
						<div className="dot_one dots_p"></div>
						<div className="dot_two dots_p"></div>
						<div className="dot_three dots_p"></div>
						<div className={`${styles.inside_flex}`}>
							<div className={`${styles.text_bx} text_24`}>{parse(TabTitle)}</div>
							<div className={`${styles.btn_bx}`}>
								<a href="#" rel="noreferrer">
								<span className="span_btn yellow_btn">
								<button className="btn_project_default ">Contact Us</button>
								</span>
									
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
