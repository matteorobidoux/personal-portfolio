import "../styles/Portfolio.css";
import PortfolioModal from "./PortfolioModal";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import projects from "../data/projects.json";
import languages from "../data/languages.json";
import employments from "../data/employments.json";
import degrees from "../data/degrees.json";

import overflow from "../images/projects/overflow.png";
import campusConnect from "../images/projects/campus_connect.png";

import java from "../images/languages/java.png";
import python from "../images/languages/python.png";
import javascript from "../images/languages/javascript.png";
import c from "../images/languages/c.png";
import html from "../images/languages/html.png";
import css from "../images/languages/css.png";
import react from "../images/languages/react.png";
import sql from "../images/languages/sql.png";
import typescript from "../images/languages/typescript.png";
import mysql from "../images/languages/mysql.png";
import kotlin from "../images/languages/kotlin.png";
import csharp from "../images/languages/csharp.png";

import { motion } from "framer-motion";

const projectImages = {
	overflow,
	campusConnect
};

const languageImages = {
	java,
	python,
	javascript,
	c,
	html,
	css,
	react,
	sql,
	typescript,
	mysql,
	kotlin,
	csharp
};

function Portfolio() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedProject, setSelectedProject] = useState(null);

	const openModal = (project) => {
		setSelectedProject(project);
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedProject(null);
	};

	return (
		<motion.div
			className="Portfolio"
			animate={{ opacity: 1, x: 0 }}
			initial={{ opacity: 0, x: 25 }}
			exit={{ opacity: 0, x: -25 }}
		>
			<h1 className="portfolio-title">Portfolio</h1>

			{/* Projects Section */}
			<div className="portfolio-projects-container">
				<h2 className="portfolio-projects-title">Projects</h2>
				<div className="portfolio-projects">
					<div className="projects-container">
						{projects.map((project, index) => (
							<div className="project-item" key={index}>
								<h2>{project.name}</h2>
								<LazyLoadImage
									src={projectImages[project.image]}
									alt={project.name}
									className="project-image"
									onClick={() => openModal(project)}
								/>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Languages & Frameworks Section */}
			<div className="portfolio-languages-container">
				<h2 className="portfolio-languages-title">Languages & Frameworks</h2>
				<div className="portfolio-languages">
					<div className="languages-container">
						{languages.map((language, index) => (
							<div className="language-item" key={index}>
								<LazyLoadImage
									src={languageImages[language.image]}
									alt={language.name}
									className="language-image"
								/>
								<h2>{language.name}</h2>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Employment History Section */}
			<div className="portfolio-employments-container">
				<h2 className="portfolio-employments-title">Employment History</h2>
				<div className="portfolio-employments">
					<div className="employments-container">
						{employments.map((employment, index) => (
							<div className="employment-item" key={index}>
								<h2>
									{employment.title} @ {employment.company}
								</h2>
								<h3>{employment.duration}</h3>
								<h3>{employment.employment}</h3>
								<h3>{employment.skills}</h3>
								<h3 className="employment-item-description">
									{employment.description}
								</h3>
								{index !== employments.length - 1 && <hr />}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Degrees and Certifications Section */}
			<div className="portfolio-degrees-container">
				<h2 className="portfolio-degrees-title">Degrees and Certifications</h2>
				<div className="portfolio-degrees">
					<div className="degrees-container">
						{degrees.map((degree, index) => (
							<div className="degree-item" key={index}>
								<h2>
									{degree.certificate} @ {degree.institute}
								</h2>
								<h3>{degree.duration}</h3>
								{index !== degrees.length - 1 && <hr />}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Portfolio Modal */}
			<PortfolioModal
				isOpen={isModalOpen}
				onClose={closeModal}
				project={selectedProject}
			/>
		</motion.div>
	);
}

export default Portfolio;
