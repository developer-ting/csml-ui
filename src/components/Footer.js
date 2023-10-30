// MODULES //

// COMPONENTS //

// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Footer.module.scss";

/** Footer Component */
const Footer = () => {
	return (
		<footer className={`${styles.main_footer}`}>
			<p>© {new Date().getFullYear()} Copyright</p>
		</footer>
	);
};

export default Footer;
