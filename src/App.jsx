import { Header }             from './components/Header';
import { Hero }               from './components/Hero';
import { ProblemSection }     from './components/ProblemSection';
import { SolutionSection }    from './components/SolutionSection';
import { ServicesSection }    from './components/ServicesSection';
import { AudienceSection }    from './components/AudienceSection';
import { PricingSection }     from './components/PricingSection';
import { ProcessSection }     from './components/ProcessSection';
import { PortfolioSection }   from './components/PortfolioSection';
import { TrustSection }       from './components/TrustSection';
import { MidCTASection }      from './components/MidCTASection';
import { TestimonialsSection} from './components/TestimonialsSection';
import { FAQSection }         from './components/FAQSection';
import { ContactSection }     from './components/ContactSection';
import { Footer }             from './components/Footer';
import { WhatsAppFloat }      from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <AudienceSection />
        <PricingSection />
        <ProcessSection />
        <PortfolioSection />
        <TrustSection />
        <MidCTASection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      <div className="divider" aria-hidden />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
