import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Clock, Award, ArrowRight } from "lucide-react";

const benefits = [
  {
    icon: GraduationCap,
    title: "Learn from Experts",
    description:
      "Work directly with senior advocates and gain hands-on experience in real cases.",
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description:
      "Get personalized guidance from experienced lawyers throughout your internship.",
  },
  {
    icon: Clock,
    title: "Flexible Duration",
    description:
      "Choose from 1-month, 3-month, or 6-month internship programs based on your availability.",
  },
  {
    icon: Award,
    title: "Certificate & Letter",
    description:
      "Receive a certificate of completion and recommendation letter for future opportunities.",
  },
];

const openings = [
  {
    title: "Legal Research Intern",
    duration: "3-6 Months",
    type: "Full-time / Part-time",
  },
  {
    title: "Litigation Intern",
    duration: "1-3 Months",
    type: "Full-time",
  },
  {
    title: "Corporate Law Intern",
    duration: "3-6 Months",
    type: "Full-time",
  },
];

const WHATSAPP_NUMBER = "919876543210"; // Replace with actual number

export const InternshipSection = () => {
  const handleApply = (position: string) => {
    const message = encodeURIComponent(
      `Hello! I'm interested in applying for the ${position} position at Apex Law Firm. Please share more details.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <section id="internship" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Join Our Team
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Internship <span className="text-gradient-gold">Opportunities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Launch your legal career with hands-on experience at one of the
            leading law firms. We welcome law students passionate about making a
            difference.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center mb-4 shadow-gold group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Open Positions */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-serif text-2xl font-bold text-center mb-8">
            Current Openings
          </h3>
          <div className="space-y-4">
            {openings.map((opening, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors gap-4"
              >
                <div>
                  <h4 className="font-semibold text-foreground text-lg">
                    {opening.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 inline mr-1" />
                      {opening.duration}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {opening.type}
                    </span>
                  </div>
                </div>
                <Button
                  variant="gold"
                  onClick={() => handleApply(opening.title)}
                >
                  Apply via WhatsApp
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
