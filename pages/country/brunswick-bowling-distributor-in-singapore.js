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
export default function brunswickbowlingdistributorinsingapore() {
    return (
        <div>
            <Head>
                <title>Exclusive Brunswick Bowling Distributor in Singapore | CSML Group</title>
                <meta name="description" content="CSML is the leading Brunswick bowling equipment distributor in Singapore, offering high-quality products and expert support for FEC & bowling centres." />
                <meta name="og:title" content="Exclusive Brunswick Bowling Distributor in Singapore | CSML Group" />
                <meta name="og:description" content="CSML is the leading Brunswick bowling equipment distributor in Singapore, offering high-quality products and expert support for FEC & bowling centres." />
                <meta name="keywords" content="Brunswick Bowling Distributor in Singapore, Brunswick Bowling Equipment Cost in Singapore, Brunswick Bowling Pinsetter. Brunswick Bowling Lane, Why Choose CSML as Brunswick Bowling Equipment Distributor, Benefits of Having Bowling Centre at FEC, Game Zone & Amusement Centre. "/>
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
                <link rel="canonical" href="https://csmlgroup.com/country/brunswick-bowling-distributor-in-singapore"/>
            </Head>
            <Header />
            <Loader />
            <main className={`${styles.GoKartingPage}`}>
                <InsideBanner
                    bannerTitle="Exclusive Brunswick Bowling Distributor in Singapore"
                    bannerImg={brunswick_banner.src}
                    mobileImg={brunswick_banner_mobile.src}
                />
                <BlackStripOverview
                    desc="CSML Group is the leading Brunswick Bowling Distributor in Singapore, providing top-tier bowling equipment .
                    As an exclusive supplier of Brunswick products, CSML ensures access to the latest technology,
                    from durable Brunswick Bowling Lanes to advanced Brunswick Bowling Pinsetter Technology,
                    tailored to meet your specific needs. Our commitment to quality, reliability, and customer
                    satisfaction has earned us a trusted reputation in the industry, helping you create memorable
                    experiences for your customers.
                    <br><br>
                    Brunswick Bowling equipment stands out for its innovation and reliability. From robust lanes and efficient pinsetters to modern scoring systems, Brunswick offers comprehensive solutions that cater to both players and operators, solidifying its leadership in the bowling industry. "
                />
                <section className={`${styles.lane_oil} pt_100 pb_60`}>
                    <div className="container">
                        <h2 className="color_black heading_text_40 pb_50 text_center toTop" data-scroll>
                            Brunswick Bowling Equipment Cost in Singapore
                        </h2>
                        <p className="global_text paraTxt_18 color_black_opacity toTop">If you’re considering setting up or upgrading a bowling centre,
                            CSML offers premium Brunswick Bowling Equipment in Singapore starting at USD30,000 *onwards per lane.
                            Our comprehensive solutions include high-quality lanes, cutting-edge pinsetters,
                            and modern scoring systems designed to deliver a seamless bowling experience.
                            Alongside expert installation and maintenance,
                            we provide dedicated guidance and training to ensure your bowling centre operates smoothly and efficiently.</p>
                    </div>
                </section>
                <section className="dot_animation_box pt_100 pb_60">
                    <div className="container">
                        <h2 className="color_white heading_text_40 pb_50 text_center toTop">
                            Benefits of adding Brunswick Bowling to Your FEC, Game Zone, & Amusement Centre
                        </h2>
                        <p className="global_text paraTxt_18 color_white_opacity text_center">
                            Choosing Brunswick Bowling equipment and solutions offers significant advantages for bowling centres. Renowned for their exceptional quality and durability, Brunswick products ensure long-term reliability, reducing maintenance costs and maximizing operational uptime. Over 70% of the world’s bowling centres use Brunswick products. Their cutting-edge designs and advanced technologies elevate the bowling experience, attracting a wide range of customers—from professional bowlers to casual players. This not only boosts foot traffic but also encourages longer stays, creating opportunities for additional revenue streams such as increased Food & Beverage (F&B) sales. The more time customers spend at the venue, the higher their F&B spending, leading to greater overall profitability. By fostering a fun and dynamic atmosphere with Brunswick’s state-of-the-art equipment, bowling centres can enhance customer engagement and drive long-term success.
                        </p>
                    </div>
                </section>
                <section className={`${styles.lane_oil} pt_100 pb_60`}>
                    <div className="container">
                        <h2 className="color_black heading_text_40 pb_50 text_center toTop" data-scroll>
                            Why Choose CSML Group as Your Trusted Brunswick Bowling Equipment Partner?
                        </h2>
                        <p className="global_text paraTxt_18 color_black_opacity toTop">
                            When it comes to outfitting your bowling centre with the best in the business, CSML Group is your go-to partner. As the leading supplier of Brunswick Bowling equipment in Singapore, we bring years of experience, a deep understanding of the entertainment industry, and a strong commitment to quality. Our exclusive partnership with Brunswick ensures you have access to the latest, cutting-edge technology and high-performance products that elevate your bowling experience.
                            <br/>
                            <br/>
                            CSML Group is more than just a supplier—we’re your full-service partner, offering expert support every step of the way. From the initial planning and design phase to seamless equipment installation and ongoing maintenance, we deliver end-to-end solutions that ensure your bowling centre runs smoothly and efficiently.
                            <br/>
                            <br/>
                            Our team of Brunswick-certified professionals is committed to precision and excellence, ensuring that every aspect of your project is executed flawlessly. Whether you’re building a new centre or upgrading existing facilities, we provide tailored guidance, ensuring your vision comes to life with exceptional results.
                            <br/>
                            <br/>
                            With CSML’s expertise and hands-on support, launching a Brunswick Bowling centre is a stress-free, seamless process, allowing you to focus on what matters most—providing top-tier entertainment and an unforgettable experience for your customers.
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
