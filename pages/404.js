// MODULES //
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Head from "next/head";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/PageNotFound.module.scss";

//	IMAGES	//
import csml_logo from "../public/img/csml_logo.svg";

/** Home Page */
export default function PageNotFound() {
	return (
		<div>
			<main className={`${styles.PageNotFound} f_w_a_j_center dot_animation_box`}>
				<div className={`${styles.PageContent} text_center`}>
					<img
						src={csml_logo.src}
						className={`${styles.noscroll_logo}`}
						alt="csml_logo"
					/>
					<h1 className="text_35 color_white pt_30 pb_40">
						This page could not be found.
					</h1>
					<div className={`${styles.btn}`}>
						<a href="https://csmlindia.com" rel="noreferrer">
							<span className="span_btn">
								<button className="btn_project_default color_white">
									Homepage Link
								</button>
							</span>
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
