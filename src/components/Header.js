// MODULES //
import React, { useEffect, useState } from "react";
// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Header.module.scss";

// IMAGES //
import csml_logo from "../../public/img/csml_logo.svg";

/** Header Component */
const Header = () => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		let hamburger = document.getElementById("hamburger");
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
			if (window.scrollY > 50) {
				hamburger.classList.add(`${styles.ham_style}`);
			} else {
				hamburger.classList.remove(`${styles.ham_style}`);
			}
		});

		let calHeight = document.querySelector("header");
		let height = calHeight.offsetHeight + "px";
		// console.log(height);

		document.documentElement.style.setProperty("--headerHeight", height);
	}, []);
	return (
		<header id="hamburger"
				className={`${styles.main_header} ${scroll ? styles.scrolled_bg : " "}`}
			>
				<div className="container">
					<div className={`${styles.header_box}`}>
						<div className={`${styles.header_logo}`}>
							<a href="/">
								<img
									src={csml_logo.src}
									className={`${styles.noscroll_logo}`}
									alt="csml_logo"
								/>
								<img
									src={csml_logo.src}
									className={`${styles.scrolled_logo}`}
									alt="scrolled_logo"
								/>
							</a>
						</div>
						<div className={`${styles.header_list} ${styles.header_list_mobile}`}>
							<div className={styles.menu_title}>
								<div className={styles.title}> 
									<a href="#" className="btn_two color_white">
										Contact us
									</a>
								</div>
								<div className={styles.humberg}>
									<p>
										<span></span>
										<span></span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
	);
};

export default Header;
