import { Shield, Target, Lock, Zap } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Litigation-First DNA",
    description:
      "Built by litigators, for litigated outcomes with strategic precision.",
  },
  {
    icon: Shield,
    title: "Corporate Intelligence",
    description:
      "Law aligned with business realities for maximum legal leverage.",
  },
  {
    icon: Lock,
    title: "High Confidentiality",
    description:
      "Absolute discretion in sensitive matters with strict professional secrecy.",
  },
  {
    icon: Zap,
    title: "Aggressive Courtroom Strategy",
    description:
      "Tactical, assertive, and disciplined approach to every case.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              About Tri Lex & Juris
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Strategic Legal{" "}
              <span className="text-gradient-gold">Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Tri Lex & Juris Law Firm is a premier litigation-focused law firm 
              delivering decisive legal strategy, uncompromising advocacy, and 
              commercially sound solutions. Built for complex disputes and 
              high-stakes matters, we represent corporations, institutions, 
              high-net-worth individuals, and enterprises with precision and force.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The name <strong className="text-foreground">Tri Lex</strong> embodies our three strategic 
              pillars—Law, Strategy, and Enforcement, while <strong className="text-foreground">Juris</strong> reflects 
              our command over jurisprudence and procedural excellence.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We operate at the intersection of courtroom aggression and corporate 
              intelligence, ensuring our clients are always steps ahead—legally 
              and tactically. We do not merely litigate—we control narratives, 
              manage risk, and secure outcomes.
            </p>

            {/* Feature Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-card border border-border shadow-elevated">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold animate-pulse">
                    <Shield className="w-16 h-16 text-primary-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    Litigation with Leverage
                  </h3>
                  <p className="text-muted-foreground">
                    Aggressive Advocacy. Calculated Outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
