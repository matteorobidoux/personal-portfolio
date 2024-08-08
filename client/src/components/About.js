import "../styles/About.css";
import { motion } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import me from "../images/about/profile.png";

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
					<h2 className="about-text-content">
						a passionate computer science student currently advancing my
						knowledge through a Bachelor's program at Concordia University. My
						journey began at Dawson College, where I completed a rigorous
						three-year Computer Science program and earned my College
						Certificate. These experiences have provided me with a strong
						foundation in software development, algorithm design, and data
						analysis. I am committed to using my skills to tackle complex
						problems and create within the industry. Outside of my academic
						pursuits, I enjoy working on personal projects, playing sports and
						relaxing with a hot cup of coffee. Please explore my portfolio to
						see my work and learn more about my path in computer science!
					</h2>
				</div>
			</div>
		</motion.div>
	);
}

export default About;
