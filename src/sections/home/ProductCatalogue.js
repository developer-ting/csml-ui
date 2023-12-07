// MODULES //
import React, { useEffect, useState, useRef } from "react";
// COMPONENTS //
import Cursor from "@/components/Cursor";
// SECTIONS //

// PLUGINS //
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { gsap } from "gsap";
import Draggable from "gsap/dist/Draggable";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
// STYLES //
import styles from "../../styles/sections/home/ProductCatalogue.module.scss";
// IMAGES //
import showcase from "../../../public/img/home/home_banner.jpg";
import arrow from "../../../public/img/arrow.svg";

/** Home Hero Section */
export default function ProductCatalogue() {
	const [showCursor, setShowCursor] = useState(false);
	const dragSliderInfo = [
		{
			title: "Brunswick Bowling",
			imgUrl: showcase.src,
			link: "https://www.instagram.com/csmlindia/?hl=en",
		},
		{
			title: "Arcade Games",
			imgUrl: showcase.src,
			link: "https://www.instagram.com/csmlindia/?hl=en",
		},
		{
			title: "Trampoline",
			imgUrl: showcase.src,
			link: "https://www.instagram.com/csmlindia/?hl=en",
		},
		{
			title: "Soft Play",
			imgUrl: showcase.src,
			link: "https://www.instagram.com/csmlindia/?hl=en",
		},
		{
			title: "Laser Tag",
			imgUrl: showcase.src,
			link: "https://www.instagram.com/csmlindia/?hl=en",
		},
	];
	const n = dragSliderInfo.length;
	let parallax = [];
	let clamp = gsap.utils.clamp(0, 1);
	let currentX = 0;

	// Set the initial snap value
	const snap = gsap.utils.pipe(
		gsap.utils.snap(450),
		gsap.utils.clamp(n * -450, 0)
	);
	const sliderRef = useRef(null);
	useEffect(() => {
		// use for cursor animation start

		// use for cursor animation end

		let x,
			normalize = gsap.utils.mapRange(window.innerWidth, -400, 0, 1);

		const updateParallax = () => {
			x = gsap.getProperty("#slides", "x") + window.innerWidth / 2;
			normalize = gsap.utils.mapRange(window.innerWidth, -400, 0, 1);

			parallax.forEach((animation, i) => {
				const progress = clamp(normalize(x + i * 450));
				animation.progress(progress);

				// Add "active" class to the center item and remove it from others
				const centerIndex = Math.round(progress * (n - 1));
				const isActive = i === centerIndex;
				const element = animation.targets()[0].parentNode; // Use targets() instead of vars.targets

				element.classList.toggle("active", isActive);
			});
		};
		const scrollSlider = () => {
			const viewportWidth = window.innerWidth;
			const sliderWidth = n * 450;

			if (sliderRef.current) {
				// Check if the slider is wider than the viewport
				if (sliderWidth > viewportWidth) {
					const scrollLeft = sliderWidth - viewportWidth;
					sliderRef.current.scrollLeft = scrollLeft;
				}
			}
		};

		// Initialize parallax slider
		const initParallaxSlider = () => {
			gsap.set("#slides", { width: n * 450, rotation: 3 }); // Rotate the entire slider by 5 degrees

			for (let i = 0; i < n; i++) {
				let box = document.createElement("div");
				let img = new Image();
				let link = document.createElement("a");

				gsap.set(box, {
					width: 400,
					height: 475,
					overflow: "hidden",
					position: "absolute",
					top: 50,
					left: i * 450,
					attr: { class: "box b" + i },
					innerHTML: `<span class="innerbox" style="font-size:20px">${dragSliderInfo[i].title} <a class="drag_link" href="${dragSliderInfo[i].link}" rel="noreferrer">
                    <button class="btn_arrow">
                      <span class="arrow_one"><img src="${arrow.src}"/></span>
                      <span class="arrow_two"><img src="${arrow.src}" }/></span>
                    </button>
                  </a></span>`,
					background: "#333",
				});

				gsap.set(img, {
					position: "absolute",
					left: -300,
					// attr: { src: "https://picsum.photos/id/" + (i + 10) + "/700/600/" },
					attr: { src: `${dragSliderInfo[i].imgUrl}` },
					// attr: { src: `${imageUrls[i]}` },
				});
				parallax[i] = gsap.to(img, { x: 300, ease: "none", paused: true });

				box.appendChild(img);
				box.appendChild(link);
				document.getElementById("slides").appendChild(box);
			}

			Draggable.create("#slides", {
				type: "x",
				bounds: { left: window.innerWidth / 2, width: 1 },
				zIndexBoost: false,
				onDrag: updateParallax,
				inertia: true,
				throwResistance: 8000,
				onRelease: function () {
					currentX = this.endX;
				},
				onThrowUpdate: updateParallax,
				snap: snap,
			});

			const sliderPin = gsap.timeline({
				scrollTrigger: {
					trigger: "#slides",
					start: "top center",
					end: "top top",
					pin: false,
					pinSpacing: true,
					scrub: true,
					onUpdate: updateParallax,
					// markers: false,
				},
			});
			sliderPin.fromTo("#slides", { left: window.innerWidth / 2 }, { left: 0 }, 0);

			// Scroll the slider when it's wider than the viewport
			// scrollSlider();
		};

		// Initialize the parallax slider and set up event listeners
		initParallaxSlider();

		// Update draggable bounds onResize
		const handleResize = () => {
			Draggable.get("#slides").applyBounds({
				left: window.innerWidth / 2,
				width: 1,
			});
			updateParallax();
			// scrollSlider();
		};

		// Event listeners
		window.addEventListener("resize", handleResize);

		return () => {
			// Clean up event listeners on unmount
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return (
		<section
			className={`${styles.product_catalogue_wrap} product_catalogue_wrap ptb_100`}
			onMouseEnter={() => setShowCursor(true)}
			onMouseLeave={() => setShowCursor(false)}
		>
			<div className="container">
				<div className={`${styles.section_title}`}>
					<h2 className="heading_text_55 pb_40">Our product catalogue</h2>
				</div>
			</div>
			<div className="slideMain" ref={sliderRef}>
				<div id="slides" />
			</div>
			<Cursor showCursor={showCursor} />
		</section>
	);
}
