import HeroSection from "../components/home/HeroSection";
import VisionValuesSection from "../components/home/VisionValuesSection";
import CompanyProfileSection from "../components/home/CompanyProfileSection";
import ServicesSection from "../components/home/ServicesSection";
import PortfoliosHighlightSection from "../components/home/PortfoliosHighlightSection";
import TechnologySection from "../components/home/TechnologySection";
import PeopleCultureSection from "../components/home/PeopleCultureSection";
import CTASection from "../components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Home = () => {
	return (
		<div className="min-h-screen">
			<Helmet>
				<title>ISI Building Solutions | Cambodia&apos;s Leader in Pre-Engineered Buildings &amp; Steel Structures</title>
				<meta name="description" content="ISI Building Solutions is Cambodia&apos;s first and leading manufacturer of pre-engineered steel buildings, heavy steel structures, and architectural roofing solutions." />
				<meta property="og:title" content="ISI Building Solutions | Cambodia&apos;s Leader in Pre-Engineered Buildings &amp; Steel Structures" />
				<meta property="og:description" content="ISI Building Solutions is Cambodia&apos;s first and leading manufacturer of pre-engineered steel buildings, heavy steel structures, and architectural roofing solutions." />
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://isibds.com/" />
				<link rel="canonical" href="https://isibds.com/" />
				<script type="application/ld+json">{`
					{
						"@context": "https://schema.org",
						"@type": "Organization",
						"name": "ISI Building Solutions",
						"url": "https://isibds.com",
						"logo": "https://isibds.com/logo.png",
						"description": "Cambodia's first and leading manufacturer of pre-engineered steel buildings and steel structures.",
						"address": {
							"@type": "PostalAddress",
							"streetAddress": "ISI Park National Road 2, Phum Kraing Sbov, Preah Puth Commune",
							"addressLocality": "Kandal Steung District",
							"addressRegion": "Kandal Province",
							"addressCountry": "KH"
						},
						"email": "sales@isibds.com",
						"sameAs": [
							"https://isibds.com"
						]
					}
				`}</script>
			</Helmet>
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
