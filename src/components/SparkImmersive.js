// MODULES //

// COMPONENTS //
import Link from "next/link";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/SparkImmersive.module.scss";

// IMAGES //

/** Home Hero Section */
const SparkImmersive = () => {
	// const parse = require("html-react-parser");
	return (
      <section className={`${styles.spark_immersive_main}`}>
        <div className="container">
          <div className={`${styles.optimizing_flex} pt_40 d_f`}>
            <div className={`${styles.optimizing_title}`}>
              <h2 className="heading_text_55 text_700 pb_20 toTop" data-scroll>
                Spark®Immersive Bowling 
              </h2>
              <h4 className="text_24 text_600 pb_20 toTop" data-scroll>
                Light it Up with Spark!
              </h4>
            </div>
            <div className={`${styles.optimizing_content} toTop`} data-scroll>
              <p className="paraTxt_18 toTop" data-scroll>Spark is the future of bowling. It surrounds the bowler in a mesmerizing, one-of-a-kind experience as it delivers the latest technology and entertainment trends to your lanes. It seamlessly integrates advanced technology into the bowling experience. Combining projection mapping and sophisticated software, this innovative system transforms lanes into dynamic, immersive playgrounds. Spark responds with stunning visuals and effects as your bowling ball glides down the lane. These captivating features make Spark the perfect choice for families, professionals, millennials, and anyone seeking an unforgettable and tech-enhanced bowling adventure.</p>
            </div>
          </div>
        </div>
      </section>
		
	);
};

export default SparkImmersive;
