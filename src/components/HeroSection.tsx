import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">
              Strategic. Relentless. Unyielding.
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 animate-fade-up [animation-delay:100ms]">
            Leading Full-Spectrum{" "}
            <span className="text-gradient-gold">Law Firm in India</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:200ms]">
            Tri Lex & Juris combines decades of legal excellence, strategic advocacy, 
            and client-centric services to deliver robust legal solutions for individuals 
            and corporations alike.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:300ms]">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              variant="goldOutline"
              size="xl"
              className="group"
              asChild
            >
              <a href="tel:9354777703">
                <Phone className="w-5 h-5" />
                Call: 9354777703
              </a>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-20 max-w-4xl mx-auto animate-fade-up [animation-delay:400ms]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-2xl bg-gradient-card border border-border shadow-card">
            <StatItem number="10+" label="Years Experience" />
            <StatItem number="500+" label="Cases Handled" />
            <StatItem number="95%" label="Success Rate" />
            <StatItem number="24/7" label="Client Support" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="font-serif text-3xl md:text-4xl font-bold text-gradient-gold mb-1">
      {number}
    </div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);
