import { useState, useEffect, useRef } from "react";
import csml_logo from "../../public/img/csml_logo.svg";

const Loader = () => {
	useEffect(() => {
		let anim = document.querySelector(".loader_overlay");
		setTimeout(function () {
			anim.classList.add("start");
		}, 500);
		setTimeout(function () {
			// anim.style.display = "none";
			anim.style.opacity = "0";
			anim.style.zIndex = "unset";
		}, 2500);
	}, []);
	return (
		<div className="loader_overlay" id="loader_ani">
			<div className="container">
				<img src={csml_logo.src} alt="loader logo" />
			</div>
		</div>
	);
};

export default Loader;
