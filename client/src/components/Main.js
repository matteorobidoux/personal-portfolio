import "../styles/Main.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function Main() {
	// Declare desc_text outside of useEffect to make it accessible in the entire component
	const desc_text =
		"Hey! That's me... the guy who created this whole hunk of junk! Check it out!";

	// State to hold the displayed text
	const [displayedText, setDisplayedText] = useState("");

	useEffect(() => {
		let index = 0;

		// Typing effect function
		const typeWriter = () => {
			if (index < desc_text.length) {
				setDisplayedText(desc_text.substring(0, index + 1)); // Update displayed text
				index++;
				setTimeout(typeWriter, 100); // Call typeWriter recursively for typing effect
			}
		};

		typeWriter(); // Start the typing effect
	}, [desc_text]); // Dependency array includes desc_text

	return (
		<motion.div
			className="Main"
			animate={{ opacity: 1, x: 0 }}
			initial={{ opacity: 0, x: 50 }}
			exit={{ opacity: 0, x: -50 }}
		>
			<div className="cover">
				<div className="name">
					<h1 className="name-text">Matteo Robidoux</h1>
				</div>
				<div className="title">
					<h3 className="title-text">Software Developer</h3>
				</div>
				<div className="desc">
					<h2 className="desc-text">
						{displayedText}
						<span className="blinking-cursor">|</span>
					</h2>
				</div>
			</div>
		</motion.div>
	);
}

export default Main;
