// MODULES //

// COMPONENTS //
import Head from "next/head";
import Script from "next/script";

// SECTIONS //

// PLUGINS //

// STYLES //
import "../src/styles/globals/globals.scss";
import styles from "../src/styles/pages/PageNotFound.module.scss";
import csml_logo from "../public/img/csml_logo.svg";

/** App Page */
function MyApp({ Component, pageProps }) {

	const isUnderMaintenance = true
	// If under maintenance, render nothing to avoid showing the normal content
	if (isUnderMaintenance) {
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
							We are currently undergoing maintenance
						</h1>
						<p className="color_white">Sorry for the inconvenience. Please check back later.</p>
					</div>
				</main>
			</div>
		);
	}

	// return (
	// 	<>
	// 		<Script
	// 			async
	// 			src="https://www.googletagmanager.com/gtag/js?id=G-6GD93ZX4D1"
	// 			strategy="afterInteractive"
	// 		></Script>
	// 		<Script id="google-analytics" strategy="afterInteractive">
	// 			{`window.dataLayer = window.dataLayer || [];
	// 			function gtag(){dataLayer.push(arguments);}
	// 			gtag('js', new Date());
	// 			gtag('config', 'G-6GD93ZX4D1');`}
	// 		</Script>
	//
	// 		<Component {...pageProps} />
	// 	</>
	// );
}

export default MyApp;
