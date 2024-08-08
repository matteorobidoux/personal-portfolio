import "../styles/App.css";
import AnimatedRoutes from "./AnimatedRoutes";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
	return (
		<div className="App">
			<Navbar />
			<div className="main-content">
				<AnimatedRoutes />
			</div>
			<Footer />
		</div>
	);
}

export default App;
