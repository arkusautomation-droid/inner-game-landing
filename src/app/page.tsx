import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ChaptersSection from "@/components/sections/ChaptersSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import QuotesSection from "@/components/sections/QuotesSection";
import AuthorSection from "@/components/sections/AuthorSection";
import AudienceSection from "@/components/sections/AudienceSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ChaptersSection />
      <BenefitsSection />
      <QuotesSection />
      <AuthorSection />
      <AudienceSection />
      <CTASection />
      <Footer />
    </main>
  );
}
