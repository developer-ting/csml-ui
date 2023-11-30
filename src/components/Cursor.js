// MODULES //
import React, { useState, useEffect } from "react";
// COMPONENTS //
// SECTIONS //
// PLUGINS //
// STYLES //
// IMAGES //
/** Footer Component */

const Cursor = ({ showCursor }) => {
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [hovered, setHovered] = useState(false);
	useEffect(() => {
		const handleMouseMove = (e) => {
			setPosition({ x: e.clientX, y: e.clientY });
		};

		const handleMouseEnter = () => {
			setHovered(true);
		};

		const handleMouseLeave = () => {
			setHovered(false);
		};

		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseenter", handleMouseEnter);
		document.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			document.removeEventListener("mouseenter", handleMouseEnter);
			document.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);
	return showCursor ? (
		<div
			className={`${hovered ? "hovered" : ""} cursor_pointer`}
			style={{ left: `${position.x}px`, top: `${position.y}px` }}
		>
			<p>
				<span>Drag</span> or Click
			</p>
		</div>
	) : null;
};

export default Cursor;
