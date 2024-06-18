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
			<Head>
				<title>CSML GROUP</title>
				<meta name="description" content="CSML GROUP is an exclusive Brunswick bowling distributor in India. We also setup arcade games machine, amusement games and adventure games across India." />
				<meta name="og:title" content="CSML GROUP" />
				<meta name="og:description" content="CSML GROUP is an exclusive Brunswick bowling distributor in India. We also setup arcade games machine, amusement games and adventure games across India." />
				<meta
					property="og:image"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<meta
					property="og:image:secure_url"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<link rel="icon" href="/img/favicon.png" />
			</Head>
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
