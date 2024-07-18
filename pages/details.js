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


/** Home Page */
export default function Details({ careerData }) {
    useEffect(() => {
    }, []);
    console.log('Client-side data:', careerData);
    const details = careerData?.data.attributes.Description || '';
    return (
        <div>
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
                        <div>
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
