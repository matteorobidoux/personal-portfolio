import { Routes, Route } from "react-router-dom";
import Main from "./Main";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
	return (
		<div className="AnimatedRoutes">
			<AnimatePresence>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/portfolio" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="*" element={<Main />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
}

export default AnimatedRoutes;
