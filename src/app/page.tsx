import Header from '@/components/layout/Header';
import HeroSection from '@/components/sections/HeroSection';
import PortfolioDisplay from '@/components/sections/PortfolioDisplay';
import ProcessOverview from '@/components/sections/ProcessOverview';
import TeamShowcase from '@/components/sections/TeamShowcase';
import AIConceptGenerator from '@/components/sections/AIConceptGenerator';
import ContactForm from '@/components/sections/ContactForm';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <PortfolioDisplay />
        <ProcessOverview />
        <TeamShowcase />
        <AIConceptGenerator />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
