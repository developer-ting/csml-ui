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
import menu_down_aarow from "../../public/img/menu_down_aarow.svg";

/** Header Component */
const Header = () => {
	const [sidebarActive, setSidebarActive] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [toggleState, settoggleState] = useState(0);

	const toggleTab = (index) => {
		if (toggleState == index) {
			return settoggleState(null);
		}
		settoggleState(index);
	};

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

						<div
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
                <ul className={`${styles.list_ul}`}>
                  <li onClick={() => setSidebarActive(!sidebarActive)}>
                    <Link href="">
                      <a className="heading_text_40 m_r">About Us</a>
                    </Link>
                  </li>
                  <li className={`${styles.sub_menu_box} ${toggleState === 1 && styles.drop_down_active}`}
											onMouseEnter={() => toggleTab(1)}
											onMouseLeave={() => toggleTab(1)}
									>
                    <div className={`${styles.sub_menu_flex} d_f`}>
											<a className="heading_text_40 m_r">Product portfolio</a>
											<img
												src={menu_down_aarow.src}
												className={`${styles.menu_down_aarow}`}
												alt="down"
											/>
										</div>
										<div className={`${styles.sub_menu_list}`}>
											<p onClick={() => setSidebarActive(!sidebarActive)}>
												<Link href="">
													<a className="text_reg text_500">Consultancy Services</a>
												</Link>
											</p>
											<p onClick={() => setSidebarActive(!sidebarActive)}>
												<Link href="">
													<a className="text_reg text_500">Management Contract </a>
												</Link>
											</p>
										</div>
                  </li>
                  <li onClick={() => setSidebarActive(!sidebarActive)}>
                    <Link href="">
                      <a className="heading_text_40 m_r">New Releases</a>
                    </Link>
                  </li>
                  

									<li className={`${styles.sub_menu_box} ${toggleState === 2 && styles.drop_down_active}`}
											onMouseEnter={() => toggleTab(2)}
											onMouseLeave={() => toggleTab(2)}
									>
                    <div className={`${styles.sub_menu_flex} d_f`}>
											<a className="heading_text_40 m_r">Services</a>
											<img
												src={menu_down_aarow.src}
												className={`${styles.menu_down_aarow}`}
												alt="down"
											/>
										</div>
										<div className={`${styles.sub_menu_list}`}>
											<p onClick={() => setSidebarActive(!sidebarActive)}>
												<Link href="">
													<a className="text_reg text_500">Consultancy Services</a>
												</Link>
											</p>
											<p onClick={() => setSidebarActive(!sidebarActive)}>
												<Link href="">
													<a className="text_reg text_500">Management Contract </a>
												</Link>
											</p>
										</div>
                  </li>

                </ul>
								<div className={`${styles.bottom_list}`}>
									<ul>
										<li onClick={() => setSidebarActive(!sidebarActive)}>
											<Link href="">
												<a className="text_reg text_500">Careers</a>
											</Link>
										</li>

										<li onClick={() => setSidebarActive(!sidebarActive)}>
											<Link href="">
												<a className="text_reg text_500">Projects</a>
											</Link>
										</li>

										<li onClick={() => setSidebarActive(!sidebarActive)}>
											<Link href="">
												<a className="text_reg text_500">Contact</a>
											</Link>
										</li>

									</ul>
								</div>
              </div>
            </div>
						
					</div>
				</div>
			</header>
	);
};

export default Header;
