// MODULES //

// COMPONENTS //
import Head from "next/head";
import Script from "next/script";

// SECTIONS //

// PLUGINS //

// STYLES //
import "../src/styles/globals/globals.scss";

/** App Page */
function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-6GD93ZX4D1"
				strategy="afterInteractive"
			></Script>
			<Script id="google-analytics" strategy="afterInteractive">
				{`window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', 'G-6GD93ZX4D1');`}
			</Script>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
