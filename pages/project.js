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
import services_banner from "../public/img/project/banner.jpg";

/** Services Page */
export default function Project({ projectsData }) {
	return (
		<div>
			<Header />
			<Loader />
			<main className={`${styles.ServicesConsultancyPage}`}>
				<InsideBanner
					bannerTitle="Journey through Our Diverse Projects"
					bannerImg={services_banner.src}
					mobileImg={services_banner.src}
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
		`${process.env.STRAPI_DO_BASE_URL}/api/projects?populate=*`,
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
