import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { PracticeAreasSection } from "@/components/PracticeAreasSection";
import { TeamSection } from "@/components/TeamSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { HappyClientsSection } from "@/components/HappyClientsSection";
import { BlogSection } from "@/components/BlogSection";
import { InternshipSection } from "@/components/InternshipSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PracticeAreasSection />
        <TeamSection />
        <TestimonialsSection />
        <HappyClientsSection />
        <BlogSection />
        <InternshipSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
