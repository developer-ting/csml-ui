// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/home/ProductCatalogue.module.scss";


// IMAGES //
//import cricle_img from "../../../public/img/home/cricle_img.png";


/** Home Hero Section */
export default function ProductCatalogue() {
	return (
    <section className={`${styles.product_catalogue_wrap} ptb_100`}>
      <div className="container">
        <div className={`${styles.section_title}`}>
          <h2 className="heading_text_55 pb_40">Our product catalogue</h2>
        </div>
      </div>

    </section>
  );
}
