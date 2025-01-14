// MODULES //
import { useEffect, useRef, useState } from "react";
import ScrollOut from "scroll-out";
import { ServerHeaders } from "@/utils/RequestHeaders";

// COMPONENTS //
import Head from "next/head";
import Footer from "../../src/components/Footer";
import Header from "../../src/components/Header";
import InsideBanner from "@/components/InsideBanner";
import Loader from "@/components/Loader";
import ImagePara from "@/components/ImagePara";
import { centerStageFurniture } from "@/data/data-file-1";

import Lanes from "@/components/Lanes";
import SyncSlider from "@/components/SyncSlider";
import Accessories from "@/components/Accessories";
import CardHoverYellow from "@/components/CardHoverYellow";
import BlackStripOverview from "@/components/BlackStripOverview";
import Sync from "@/components/Sync";
import DiverseBowling from "@/components/DiverseBowling";
import SparkImmersive from "@/components/SparkImmersive";
import LaneMaintenance from "@/components/LaneMaintenance";
import SyncVideo from "@/components/SyncVideo";
// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// STYLES //
import styles from "../../src/styles/pages/brunswick-bowling.module.scss";

//	IMAGES	//
import brunswick_banner from "../../public/img/brunswick-bowling/brunswick_banner.jpg";
import brunswick_banner_mobile from "../../public/img/brunswick-bowling/brunswick_banner_mobile.jpg";

/** Go Karting Page */
export default function brunswickbowlingdistributorinMalaysia() {
    return (
        <div>
            <Head>
                <title>Exclusive Brunswick Bowling Distributor in Malaysia | CSML Group</title>
                <meta name="description" content="CSML is the leading Brunswick bowling equipment distributor in Malaysia, offering high-quality products and expert support for FEC & bowling centres." />
                <meta name="og:title" content="Exclusive Brunswick Bowling Distributor in Malaysia | CSML Group" />
                <meta name="og:description" content="CSML is the leading Brunswick bowling equipment distributor in Malaysia, offering high-quality products and expert support for FEC & bowling centres." />
                <meta name="keywords" content="Brunswick Bowling Distributor in Malaysia, Brunswick Bowling Equipment Cost in Malaysia, Brunswick Bowling Pinsetter. Brunswick Bowling Lane, Why Choose CSML as Brunswick Bowling Equipment Distributor, Benefits of Having Bowling Centre at FEC, Game Zone & Amusement Centre."/>
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
                <link rel="canonical" href="https://csmlgroup.com/country/brunswick-bowling-distributor-in-Malaysia"/>
            </Head>
            <Header />
            <Loader />
            <main className={`${styles.GoKartingPage}`}>
                <InsideBanner
                    bannerTitle="Exclusive Brunswick Bowling Distributor for New Projects in Malaysia"
                    bannerImg={brunswick_banner.src}
                    mobileImg={brunswick_banner_mobile.src}
                />
                <BlackStripOverview
                    desc="CSML Group is the exclusive distributor of Brunswick Bowling equipment in Malaysia for new start-up projects. We specialize in helping new ventures set up high-quality bowling centres, providing access to the latest Brunswick products tailored for your specific needs. Whether you're launching a new bowling centre, FEC (Family Entertainment Centre), or game zone, we ensure that you receive the most advanced, reliable bowling equipment backed by Brunswick’s world-renowned technology and innovation.
                    <br><br>
                    Our commitment to quality, reliability, and customer satisfaction has established CSML as a trusted partner for bowling operators in Malaysia, enabling you to create exceptional experiences for your customers from the ground up."
                />
                <section className={`${styles.lane_oil} pt_100 pb_60`}>
                    <div className="container">
                        <h2 className="color_black heading_text_40 pb_50 text_center toTop" data-scroll>
                            Brunswick Bowling Equipment: Innovation and Reliability
                        </h2>
                        <p className="global_text paraTxt_18 color_black_opacity toTop">Brunswick Bowling equipment is synonymous with quality, innovation, and durability. From high-performance bowling lanes to advanced pinsetters and modern scoring systems, Brunswick offers a complete suite of solutions designed to meet the needs of both players and operators. With Brunswick equipment, your new bowling centre will benefit from state-of-the-art technology that maximizes operational efficiency and enhances the overall bowling experience.</p>
                    </div>
                </section>
                <section className="dot_animation_box pt_100 pb_60">
                    <div className="container">
                        <h2 className="color_white heading_text_40 pb_50 text_center toTop">
                            Brunswick Bowling Equipment Cost for New Projects in Malaysia
                        </h2>
                        <p className="global_text paraTxt_18 color_white_opacity text_center">
                            For new start-up projects, CSML offers premium Brunswick Bowling Equipment in Malaysia, starting from USD30,000 per lane*. Our comprehensive solutions include high-quality bowling lanes, advanced pinsetters, modern scoring systems, and expert guidance to ensure the success of your project. From planning and design to installation and ongoing maintenance, CSML Group provides full support throughout the entire process, ensuring a seamless and hassle-free experience.
                        </p>
                    </div>
                </section>
                <section className={`${styles.lane_oil} pt_100 pb_60`}>
                    <div className="container">
                        <h2 className="color_black heading_text_40 pb_50 text_center toTop" data-scroll>
                            Benefits of Adding Brunswick Bowling to Your FEC, Game Zone, or Amusement Centre
                        </h2>
                        <p className="global_text paraTxt_18 color_black_opacity toTop">
                            Choosing Brunswick Bowling equipment for your new project brings numerous benefits. Renowned for its exceptional durability and performance, Brunswick equipment ensures long-term reliability, minimizing maintenance costs and maximizing operational uptime. With over 70% of the world’s bowling centres using Brunswick products, you can be confident in the quality and performance of your investment.
                            <br/>
                            <br/>
                            Brunswick’s cutting-edge designs and advanced technologies elevate the customer experience, making your bowling centre more attractive to a wide variety of customers, from professional bowlers to casual players. This can lead to increased foot traffic, longer customer stays, and higher Food & Beverage (F&B) sales, generating additional revenue streams and boosting overall profitability.
                        </p>
                    </div>
                </section>
                <section className={`dot_animation_box pt_100 pb_60`}>
                    <div className="container">
                        <h2 className="color_white heading_text_40 pb_50 text_center toTop" data-scroll>
                            Why Choose CSML Group for Your New Brunswick Bowling Centre
                        </h2>
                        <p className="global_text paraTxt_18 color_white_opacity text_center">
                            As the exclusive partner for new start-up projects, CSML Group is the ideal choice for your Brunswick Bowling equipment needs in Malaysia. With years of experience in the bowling and entertainment industry, CSML’s certified team offers expert advice and guidance through every stage of your project. We provide end-to-end support, from initial planning and design to equipment installation and long-term maintenance, ensuring that your new bowling centre operates smoothly and efficiently from day one.
                            <br/>
                            <br/>
                            Our experienced staff is well-equipped to assist in every aspect of setting up your new centre, guiding you through each phase of development to ensure the highest level of quality and precision. With CSML’s expert assistance, launching your Brunswick Bowling centre will be a seamless and stress-free experience, allowing you to focus on creating the best entertainment experience for your customers.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
