import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import logo from "../images/logos/logo-white.png";
import "../styles/Navbar.css";

function Navbar() {
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
					<li className="navbar-contact">
						<Link to="/contact" className="navbar-right-link">
							Contact
						</Link>
					</li>
					<li className="navbar-portfolio">
						<Link to="/portfolio" className="navbar-right-link">
							Portfolio
						</Link>
					</li>
					<li className="navbar-about">
						<Link to="/about" className="navbar-right-link">
							About
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
