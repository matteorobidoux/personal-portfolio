import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../images/logos/logo-white.webp";
import "../styles/Navbar.css";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 900) {
				setMenuOpen(false);
				animateHamburger(false);
			}
		};

		const handleClickOutside = (e) => {
			if (menuOpen && !e.target.closest(".nav-dropdown")) {
				setMenuOpen(false);
				animateHamburger(false);
			}
		};

		window.addEventListener("resize", handleResize);
		document.addEventListener("click", handleClickOutside);

		return () => {
			window.removeEventListener("resize", handleResize);
			document.removeEventListener("click", handleClickOutside);
		};
	}, [menuOpen]);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
		animateHamburger(!menuOpen);
	};

	const animateHamburger = (animate) => {
		const bars = document.querySelectorAll(".bar");
		bars.forEach((bar) => {
			bar.classList.toggle("animate", animate);
		});
	};

	return (
		<nav className="nav">
			<div className="nav-left">
				<ul className="navbar-home-list">
					<li className="navbar-home-el">
						<Link to="/">
							<div className="border-container">
								<LazyLoadImage
									src={logo}
									alt="MR Logo"
									className="navbar-logo"
								/>
							</div>
						</Link>
					</li>
				</ul>
			</div>
			<div className="nav-right">
				<ul>
					<li className="navbar-about">
						<Link to="/about" className="navbar-right-link">
							About
						</Link>
					</li>
					<li className="navbar-portfolio">
						<Link to="/portfolio" className="navbar-right-link">
							Portfolio
						</Link>
					</li>
					<li className="navbar-contact">
						<Link to="/contact" className="navbar-right-link">
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<div className={`nav-dropdown ${menuOpen ? "active" : ""}`}>
				<div className="hamburger-menu" onClick={toggleMenu}>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<div className="nav-dropdown-links" onClick={toggleMenu}>
					<Link to="/about" className="nav-dropdown-link">
						About
					</Link>
					<Link to="/portfolio" className="nav-dropdown-link">
						Portfolio
					</Link>
					<Link to="/contact" className="nav-dropdown-link">
						Contact
					</Link>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
