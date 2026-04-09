import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolios from "./pages/Portfolios";
import ProductsSolutions from "./pages/ProductsSolutions";
import IndustryManufacturing from "./pages/IndustryManufacturing";
import IndustryAgriculture from "./pages/IndustryAgriculture";
import IndustryFoodBeverage from "./pages/IndustryFoodBeverage";
import IndustryResidential from "./pages/IndustryResidential";
import IndustryLogistics from "./pages/IndustryLogistics";
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
					<Route path="/services" element={<Services />} />
					<Route
						path="/products-solutions"
						element={<ProductsSolutions />}
					/>
					<Route
						path="/services/industry-specific/manufacturing"
						element={<IndustryManufacturing />}
					/>
					<Route
						path="/services/industry-specific/agriculture"
						element={<IndustryAgriculture />}
					/>
					<Route
						path="/services/industry-specific/food-beverage"
						element={<IndustryFoodBeverage />}
					/>
					<Route
						path="/services/industry-specific/residential"
						element={<IndustryResidential />}
					/>
					<Route
						path="/services/industry-specific/logistics"
						element={<IndustryLogistics />}
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
