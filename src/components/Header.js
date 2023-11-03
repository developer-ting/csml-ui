// MODULES //
import React, { useEffect, useState } from "react";
// COMPONENTS //
import Link from "next/link";
// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Header.module.scss";

// IMAGES //
import csml_logo from "../../public/img/csml_logo.svg";
import close from "../../public/img/close.svg";

/** Header Component */
const Header = () => {
	const [sidebarActive, setSidebarActive] = useState(false);
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
								<div
									onClick={() => setSidebarActive(!sidebarActive)}
									className={`${styles.humberg} ${
										sidebarActive ? styles.close_icon : ""
									}`}
								>
									<p>
										<span></span>
										<span></span>
									</p>
								</div>
							</div>
						</div>

						{/* <div
              className={`${styles.menu_right_open} ${
                sidebarActive ? styles.active : ""
              }`}
            >
              <div className={`${styles.menu_list}`}>
								<div 
								onClick={() => setSidebarActive(!sidebarActive)}
								className={`${styles.close_box}`}
								>
									<img
										src={close.src}
										className={`${styles.close_arrow}`}
										alt="close"
									/>
								</div>
                <ul>
                  <li onClick={() => setSidebarActive(!sidebarActive)}>
                    <Link href="">
                      <a className="heading_text_40 m_r">About Us</a>
                    </Link>
                  </li>
                  <li onClick={() => setSidebarActive(!sidebarActive)}>
                    <Link href="">
                      <a className="heading_text_40 m_r">Product portfolio</a>
                    </Link>
                  </li>
                  <li onClick={() => setSidebarActive(!sidebarActive)}>
                    <Link href="">
                      <a className="heading_text_40 m_r">New Releases</a>
                    </Link>
                  </li>
                  <li onClick={() => setSidebarActive(!sidebarActive)}>
                    <Link href="">
                      <a className="heading_text_40 m_r">Services</a>
                    </Link>
                  </li>

                </ul>
              </div>
            </div> */}

					</div>
				</div>
			</header>
	);
};

export default Header;
