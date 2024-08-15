import "../styles/About.css";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import me from "../images/about/profile.png";
import about from "../data/about/about.json";

function About() {
	return (
		<motion.div
			className="About"
			animate={{ opacity: 1, x: 0 }}
			initial={{ opacity: 0, x: 50 }}
			exit={{ opacity: 0, x: -50 }}
		>
			<h1 className="about-title">About</h1>
			<div className="about-container">
				<div className="about-image-container">
					<LazyLoadImage src={me} alt="Matteo Robidoux" className="me" />{" "}
				</div>
				<div className="about-text-container">
					<h1 className="about-text-title"> I'm Matteo Robidoux,</h1>
					<h2 className="about-text-content">{about.description}</h2>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
