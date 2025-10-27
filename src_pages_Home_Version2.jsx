import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import CourseCatalog from "../components/CourseCatalog";
import PricingSection from "../components/PricingSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      <HeroSection />
      <FeaturesSection />
      <CourseCatalog />
      <PricingSection />
      <ContactForm />
    </main>
  );
}