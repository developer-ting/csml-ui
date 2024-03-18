// MODULES //
import { useRef, useEffect, useState } from "react";
// COMPONENTS //
// SECTIONS //
// PLUGINS //
// STYLES //
import styles from "../../styles/pages/product/PopUp.module.scss";
// IMAGES //
import closeIcn from "../../../public/img/close.svg";
/** popUp Section */
const popUp = () => {
	return (
		<div className={styles.popup_overlay}>
			<div className={styles.popup_content}>
				<div className={styles.popup_content_inner}>
					<div className="container">
						<div className={styles.popup_header}>
							<button onClick={onClose}>
								<img src={closeIcn.src} alt="icon" />
							</button>
						</div>
						<div className={styles.popup_body}>
							<h1>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
								commodi soluta animi architecto impedit nesciunt maiores vero dolores
								laudantium, distinctio et quo, veniam pariatur, provident temporibus?
								Officiis architecto perferendis veniam.
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default popUp;
