// MODULES //

// COMPONENTS //
import Head from "next/head";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ProjectCard from "@/components/ProjectCard";
import { ServerHeaders } from "@/utils/RequestHeaders";
// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/project.module.scss";

//	IMAGES	//
import project_banner from "../public/img/project/Picture4.jpg";
import project_banner_mobile from "../public/img/project/Picture4.jpg";

/** Services Page */
export default function Project({ projectsData }) {
	return (
		<div>
			<Head>
				<title>Explore Our Diverse Projects | CSML Group</title>
				<meta name="description" content="Discover the variety of innovative projects at CSML. From FEC to Go Karting, see how we make an impact across multiple game zones!" />
				<meta name="og:title" content="Explore Our Diverse Projects | CSML Group" />
				<meta name="og:description" content="Discover the variety of innovative projects at CSML. From FEC to Go Karting, see how we make an impact across multiple game zones!" />
				<meta name="keywords" content="FEC, Family Entertainment Centers, Go Karting, Bowl & Bar, Family Entertainment Centers Projects, Go Karting Projects, Bowling Projects, Bowling & Bar Projects"/>
				<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/>
				<meta
					property="og:image"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<meta
					property="og:image:secure_url"
					content="https://csml-frontend.netlify.app/img/og-image.jpg"
				/>
				<meta httpEquiv="revisit-after" content="3 days"/>
				<link rel="icon" href="/img/favicon.png" />
				<link rel="canonical" href="https://csmlgroup.com/project"/>
			</Head>
			<Header />
			<Loader />
			<main className={`${styles.ServicesConsultancyPage}`}>
				<InsideBanner
					bannerTitle="Journey Through Our <br className='hidden-xs'>Diverse Projects"
					bannerImg={project_banner.src}
					mobileImg={project_banner_mobile.src}
					alt1="Projects"
					alt2="Projects"
				/>
				<ProjectCard data={projectsData} />
			</main>
			<Footer />
		</div>
	);
}

// data featch in projects //

export async function getStaticProps() {
	//
	const GamesCategoriesRes = await fetch(
		`${process.env.STRAPI_DO_BASE_URL}/api/projects?sort=order:desc&populate=*`,
		ServerHeaders
	);
	const projectsData = await GamesCategoriesRes.json();

	return {
		props: {
			projectsData,
		},
		revalidate: 10,
	};
}
