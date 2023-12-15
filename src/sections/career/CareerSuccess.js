// MODULES //
import Link from "next/link";

// COMPONENTS //
import {careeerYellowCardData} from "../../../pages/data-file-1"
import CardHoverYellow from "@/components/CardHoverYellow";
// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../styles/sections/career/CareerSuccess.module.scss";

// IMAGES //

//console.log(careeerYellowCardData);
/** Home Hero Section */
export default function CareerSuccess() {
	
	return (
		<section className={`${styles.luminaries_wrap} ptb_100`}>
			<div className="container">
				<div className={`${styles.section_title} pb_40 toTop`} data-scroll>
					<h2 className="heading_text_55 pb_20">
						Set Sail for Career Success with Us
					</h2>
				</div>

				<div className={`${styles.luminaries_flex} toTop`} data-scroll>
					
					
					{careeerYellowCardData.map((item, index) => (
							<CardHoverYellow
								key={index}
								title={item.title}
								desc={item.desc}
								boxImg={item.image.src}
							/>
						))}
					
				</div>
			</div>
		</section>
	);
}
