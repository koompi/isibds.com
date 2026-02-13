import HeroSection from "../components/home/HeroSection";
import VisionValuesSection from "../components/home/VisionValuesSection";
import CompanyProfileSection from "../components/home/CompanyProfileSection";
import ServicesSection from "../components/home/ServicesSection";
import PortfoliosHighlightSection from "../components/home/PortfoliosHighlightSection";
import TechnologySection from "../components/home/TechnologySection";
import PeopleCultureSection from "../components/home/PeopleCultureSection";
import CTASection from "../components/home/CTASection";

const Home = () => {
	return (
		<div className="min-h-screen">
			<HeroSection />
			<VisionValuesSection />
			<CompanyProfileSection />
			<ServicesSection />
			<PortfoliosHighlightSection />
			<TechnologySection />
			<PeopleCultureSection />
			<CTASection />
		</div>
	);
};

export default Home;
