// MODULES //
import { useState, useEffect, useRef } from "react";

// COMPONENTS //
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../src/styles/pages/Details.module.scss";

//	IMAGES	//
import career_banner from "../public/img/career/career_banner.jpg";
import career_banner_mobile from "../public/img/career/career_banner_mobile.jpg";

import {ServerHeaders} from "@/utils/RequestHeaders";
import HowToApply from "@/sections/career/HowToApply";
import parse from "html-react-parser";
import Head from "next/head";


/** Home Page */
export default function Details({ careerData }) {
    useEffect(() => {
    }, []);
    console.log('Client-side data:', careerData);
    const details = careerData?.data.attributes.Description || '';
    const title = careerData?.data.attributes.Title || '';
    return (
        <div>
            <Head>
                <title>Explore Exciting Career Opportunities with CSML Group</title>
                <meta name="description" content="Discover how a career with CSML can shape your future. Unlock your potential and thrive in a dynamic tech environment!" />
                <meta name="og:title" content="Explore Exciting Career Opportunities with CSML Group" />
                <meta name="og:description" content="Discover how a career with CSML can shape your future. Unlock your potential and thrive in a dynamic tech environment!" />
                <meta name="keywords" content="Career Opportunity, Career with CSML, Career"/>
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
                <link rel="canonical" href="https://csmlgroup.com/career"/>
            </Head>
            <Header />
            <Loader />
            <main className={`${styles.career_page}`}>
                <InsideBanner
                    bannerTitle="Start Your Adventure <br className='hidden-xs'>With CSML"
                    bannerImg={career_banner.src}
                    mobileImg={career_banner_mobile.src}
                />
                <section className={styles.details_section}>
                    <div className="container">
                        <h2 className="heading_text_45 pb_20">
                            {title}
                        </h2>
                        <div className={styles.global_text}>
                            {parse(details)}
                        </div>

                    </div>
                </section>
                <HowToApply careerData={careerData} />
            </main>
            <Footer />
        </div>
    );
}

export async function getServerSideProps(query) {
    try {
        const id  = query.query.id; // Access `id` query parameter
        const CareerRes = await fetch(
            `${process.env.STRAPI_DO_BASE_URL}/api/job-lists/${id}`,
            ServerHeaders
        );
        const careerData = await CareerRes.json();
        return {
            props: {
                careerData,
            },
        };
    } catch (error) {
        return {
            props: {
                careerData: null, // Handle error state or fallback data
            },
        };
    }
}
