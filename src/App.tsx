import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolios from "./pages/Portfolios";
import Team from "./pages/Team";
import BuildingSystems from "./pages/BuildingSystems";
import DesignBuild from "./pages/DesignBuild";
import Technology from "./pages/Technology";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/about/team" element={<Team />} />
					<Route path="/services" element={<Services />} />
					<Route
						path="/services/building-systems"
						element={<BuildingSystems />}
					/>
					<Route
						path="/services/design-build"
						element={<DesignBuild />}
					/>
					<Route path="/technology" element={<Technology />} />
					<Route path="/portfolios" element={<Portfolios />} />
					<Route path="/careers" element={<Careers />} />
					<Route path="/contact" element={<Contact />} />
					<Route
						path="*"
						element={<div className="pt-24 text-center">404 - Not Found</div>}
					/>
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
