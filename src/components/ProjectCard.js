// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import TabBtb from "@/components/TabBtb";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../../src/styles/pages/project.module.scss";

// IMAGES //
import arrow from "../../public/img/arrow.svg";
import closeIcn from "../../public/img/close.svg";
import services_banner from "../../public/img/project/banner.jpg";
import ProductBox from "@/components/ProductBox";

/** Home Hero Section */
const ProjectCard = (data) => {
	/** unique Values Array */
	const uniqueValuesArray = Array.from(
		new Set(data.data.data.map((item) => item.attributes.title))
	);

	const uniqueValuesArrayDesc = Array.from(
		new Set(data.data.data.map((item) => item.attributes.titleDesc))
	);

	const [selectedTabValue, setSelectTabValue] = useState(uniqueValuesArray[0]);

	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);

	console.log(uniqueValuesArrayDesc);
	const [alldata, setallData] = useState(
		data.data.data.filter(
			(item) => item.attributes.title === data.data.data[0].attributes.title
		)
	);

	// console.log(alldata.data.attributes);

	/** getSlectVal */
	function getSlectVal(selectedValue, isTitleDesc) {
		setSelectTabValue(selectedValue);
		const filteredData = data.data.data.filter((item) =>
			isTitleDesc
				? item.attributes.titleDesc === selectedValue
				: item.attributes.title === selectedValue
		);
		setallData(filteredData);
	}

	return (
		<section className="ptb_100 dot_animation_box">
			<div className="container">
				<div className={`${styles.project_section}`}>
					<div className={`${styles.tab_section}`}>
						{uniqueValuesArray.map((title, index) => (
							<TabBtb
								key={index}
								title={title}
								white
								onClickHandler={getSlectVal}
								isActive={selectedTabValue === title ? true : false}
							/>
						))}
					</div>
					{/* {alldata.map((item, index) => ( */}
					<h2 className="heading_text_45 text_700 color_white ptb_60">
						{alldata[0].attributes.titleDesc}
					</h2>
					{/* ))} */}
					<div className={`${styles.tab_info}`}>
						{alldata.map((item, index) => (
							<ProductBox
								red
								imgData={alldata[index]}
								key={index}
								index={index}
								title={item.attributes.productTitle}
								ProductImg={`${process.env.NEXT_PUBLIC_STRAPI_DO_BASE_URL}${item?.attributes?.imageUrl?.data?.attributes?.url || ''}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProjectCard;
