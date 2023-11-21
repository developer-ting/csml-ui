import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/dist/Draggable";
import { useState } from "react";
import showcase from "../../../public/img/home/home_banner.jpg";
gsap.registerPlugin(Draggable);
// STYLES //
import styles from "../../styles/sections/home/ProductCatalogue.module.scss";
export default function ParallaxSlider() {
	const imageUrls = [
		showcase.src,
		showcase.src,
		showcase.src,
		showcase.src,
		showcase.src,
	];
	const n = imageUrls.length;
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
		let x,
			normalize = gsap.utils.mapRange(window.innerWidth, -400, 0, 1);

		const updateParallax = () => {
			x = gsap.getProperty("#slides", "x") + window.innerWidth / 2;
			normalize = gsap.utils.mapRange(window.innerWidth, -400, 0, 1);

			parallax.forEach((animation, i) =>
				animation.progress(clamp(normalize(x + i * 450)))
			);
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
					background: "#333",
				});

				gsap.set(img, {
					position: "absolute",
					left: -300,
					// attr: { src: "https://picsum.photos/id/" + (i + 10) + "/700/600/" },
					attr: { src: `${imageUrls[i]}` },
				});
				console.log(imageUrls[i]);
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
		<>
			<div className={`${styles.section_title}`}>
				<h2 className="heading_text_55 pb_40">Our product catalogue</h2>
			</div>
			<div className="slideMain" ref={sliderRef}>
				<div id="slides" />
			</div>
		</>
	);
}
