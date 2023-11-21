// import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Draggable from "gsap/dist/Draggable";
import { useState, useEffect, useRef } from "react";
import showcase from "../../../public/img/home/home_banner.jpg";
gsap.registerPlugin(Draggable);

export default function ParallaxSlider() {
	const slidesRef = useRef(null);
	const [currentX, setCurrentX] = useState(0);
	const n = 15; // Number of slides

	useEffect(() => {
		let parallax = [];
		let clamp = gsap.utils.clamp(0, 1);
		gsap.set("#slides", { width: n * 450, rotation: 3 }); // Rotate the entire slider by 5 degrees
		// Populate slide boxes
		for (let i = 0; i < n; i++) {
			const box = document.createElement("div");
			const img = new Image();
			const link = document.createElement("a");

			gsap.set(box, {
				width: 400,
				height: 600,
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
				attr: { src: `https://picsum.photos/id/${i + 10}/700/600/` },
			});

			parallax[i] = gsap.to(img, { x: 300, ease: "none", paused: true });

			gsap.set(link, {
				position: "absolute",
				textAlign: "center",
				width: 105,
				height: 70,
				paddingTop: "7px",
				top: 490,
				left: -25,
				rotation: 90,
				fontSize: "45px",
				color: "#000",
				background: "#fff",
				mixBlendMode: "lighten",
				textDecoration: "none",
				innerHTML: '<span style="font-size:20px">IMG </span>' + (i + 1),
				attr: {
					class: "imgLink",
					href: `https://picsum.photos/id/${i + 10}/700/600/`,
					target: "_blank",
				},
			});

			box.appendChild(img);
			box.appendChild(link);
			slidesRef.current.appendChild(box);
		}

		// Clone the slides for infinite looping
		for (let i = 0; i < n; i++) {
			const clone = slidesRef.current.children[i].cloneNode(true);
			gsap.set(clone, { left: (n + i) * 450 });
			slidesRef.current.appendChild(clone);
		}
		const handleDrag = (direction) => {
			if (direction === "next" && currentX <= -450) {
				// If dragging past the last slide, instantly jump to the first slide
				gsap.set("#slides", { x: 0 });
				setCurrentX(0);
			} else if (direction === "prev" && currentX >= -450 * (2 * n - 1)) {
				// If dragging past the first slide, instantly jump to the last slide
				gsap.set("#slides", { x: -450 * (2 * n - 1) });
				setCurrentX(-450 * (2 * n - 1));
			}
		};

		// Draggable.create("#slides", {
		// 	type: "x",
		// 	bounds: { left: innerWidth / 2, width: 1 },
		// 	zIndexBoost: false,
		// 	onDrag: (e) => {
		// 		const direction = e.deltaX > 0 ? "next" : "prev";
		// 		handleDrag(direction);
		// 		updateParallax();
		// 	},
		// 	inertia: true,
		// 	throwResistance: 8000,
		// 	onRelease: function () {
		// 		setCurrentX(this.endX);
		// 	},
		// 	onThrowUpdate: updateParallax,
		// 	snap: (value) => Math.round(value / 450) * 450,
		// });

		Draggable.create("#slides", {
			type: "x",
			bounds: { minX: -450 * n, maxX: 0 },
			zIndexBoost: false,
			onDrag: updateParallax,
			inertia: true,
			throwResistance: 8000,
			snap: {
				x: (value) => Math.round(value / 450) * 450,
			},
		});

		function updateParallax() {
			let x = gsap.getProperty(slidesRef.current, "x");
			parallax.forEach((animation, i) =>
				animation.progress(clamp((x + i * 450) / (2 * n * 450)))
			);
		}
	}, []);

	const handleButtonClick = (direction) => {
		let nextX;

		if (direction === "next") {
			nextX = currentX - 450;
		} else {
			nextX = currentX + 450;
		}

		gsap.to(slidesRef.current, {
			x: nextX,
			duration: 0.3,
			onUpdate: updateParallax,
			overwrite: true,
		});
		setCurrentX(nextX);
	};
	return (
		<div id="carousel">
			<div id="slides" ref={slidesRef}></div>
		</div>
	);
}
