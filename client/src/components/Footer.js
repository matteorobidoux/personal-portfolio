import "../styles/Footer.css";
import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-tag">© Matteo Robidoux. 2024</div>
			<nav className="footer-links">
				<ul>
					<li>
						<a
							href="https://www.linkedin.com/in/matteo-robidoux-736062264/"
							className="footer-link"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="LinkedIn"
						>
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://github.com/matteorobidoux"
							className="footer-link"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="GitHub"
						>
							GitHub
						</a>
					</li>
					<li>
						<a
							href="mailto:matteorobidoux@gmail.com"
							className="footer-link"
							aria-label="Email Matteo Robidoux"
						>
							matteorobidoux@gmail.com
						</a>
					</li>
				</ul>
			</nav>
		</footer>
	);
}

export default Footer;
