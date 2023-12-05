// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/career/JoinPioneering.module.scss";

// IMAGES //

/** Home Hero Section */
export default function JoinPioneering() {
	return (
		<section className={`${styles.join_pioneering_wrap} dot_animation_box ptb_100`}>
			
      <div className={`${styles.pioneering_main}`}>
        
        <div className="container">
          <div className={`${styles.pioneering_content}`}>
            <h2 className="heading_text_55 color_white pb_30 toTop" data-scroll>Join The Pioneering Force <br className='hidden-xs'></br> in the Amusement Industry</h2>
            <p className="paraTxt_18 color_white pb_20 toTop opacity_one" data-scroll>Welcome to the CSML family! We're thrilled that you're considering a  career with us. At CSML, 
              we believe in pushing boundaries, fostering creativity, and creating spaces that inspire joy and 
              excitement. If you're passionate about revolutionizing the amusement industry, we want to hear from you.</p>
          </div>
        </div>
      </div>
		</section>
	);
}
