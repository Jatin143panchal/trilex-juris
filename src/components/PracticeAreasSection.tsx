import { Button } from "@/components/ui/button";
import {
  Scale,
  Gavel,
  Building2,
  Users,
  FileText,
  ArrowRight,
  Shield,
  Laptop,
  Landmark,
} from "lucide-react";

const WHATSAPP_NUMBER = "919354777703";

const practiceAreas = [
  {
    number: "01",
    icon: Scale,
    title: "Commercial & Corporate Litigation",
    description:
      "High-stakes shareholder conflicts, breach of contract, joint venture disputes, oppression and mismanagement matters, and corporate fraud litigation with strategy-led, evidence-driven approach.",
    cta: "Get Legal Advisory",
  },
  {
    number: "02",
    icon: Gavel,
    title: "Civil & Property Disputes",
    description:
      "High-value civil litigation including property disputes, title conflicts, possession suits, injunctions, recovery matters, and specific performance actions with early interim reliefs.",
    cta: "Book Court Consultation",
  },
  {
    number: "03",
    icon: Shield,
    title: "White-Collar Crime & Economic Offences",
    description:
      "Financial crimes, corporate fraud, cheating, criminal breach of trust, and regulatory prosecutions. We represent promoters, directors, and professionals in investigations and trials.",
    cta: "Get Legal Advisory",
  },
  {
    number: "04",
    icon: Landmark,
    title: "Insolvency & Recovery Proceedings",
    description:
      "Representing financial creditors, operational creditors, corporates, and promoters in insolvency matters with focus on speed, enforcement, and asset protection.",
    cta: "Book Court Consultation",
  },
  {
    number: "05",
    icon: FileText,
    title: "Arbitration & Dispute Resolution",
    description:
      "Domestic arbitration, contractual dispute resolution, and enforcement proceedings structured for maximum tactical advantage before arbitral tribunals or courts.",
    cta: "Get Legal Advisory",
  },
  {
    number: "06",
    icon: Building2,
    title: "Regulatory & Compliance Litigation",
    description:
      "Assisting corporates and professionals in regulatory actions, show-cause notices, compliance disputes, and statutory proceedings with litigation-ready advisory.",
    cta: "Book Court Consultation",
  },
  {
    number: "07",
    icon: Laptop,
    title: "Cyber & Technology Law",
    description:
      "Handling cybercrime complaints, digital frauds, data misuse, online defamation, and technology-driven offences with digital risk management and enforcement strategy.",
    cta: "Get Legal Advisory",
  },
  {
    number: "08",
    icon: Users,
    title: "Family & Matrimonial Law",
    description:
      "Specialized legal services including divorce, matrimonial disputes, domestic violence cases, child custody, and maintenance matters handled with sensitivity.",
    cta: "Book Court Consultation",
  },
];

export const PracticeAreasSection = () => {
  const handleWhatsAppClick = (service: string, ctaType: string) => {
    const message = `Hello Tri Lex & Juris,

I am interested in ${ctaType} regarding:
*Service:* ${service}

Please contact me to discuss further.`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="practice" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Core Practice Areas
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Areas of <span className="text-gradient-gold">Practice</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive legal services across all major areas of law, delivered
            with strategic litigation and decisive execution for maximum legal leverage.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreas.map((area, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-gold"
            >
              {/* Number & Icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl font-serif font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {area.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
                  <area.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-serif text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {area.description}
              </p>

              {/* CTA */}
              <Button
                variant="goldOutline"
                size="sm"
                className="w-full group/btn"
                onClick={() => handleWhatsAppClick(area.title, area.cta)}
              >
                {area.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
