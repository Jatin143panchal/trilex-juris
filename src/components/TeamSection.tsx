
const team = [
  {
    name: "Adv. Dhruv Singh",
    role: "Founder & Managing Partner",
    specialty: "Litigation & Dispute Resolution",
    description:
      "Leading the firm's litigation practice with sharp focus on high-stakes commercial litigation, corporate disputes, and complex legal conflicts. Known for strategic clarity and commanding courtroom advocacy.",
  },
  {
    name: "Adv. Neeshu Chandpuriya",
    role: "Co-Founder & Partner",
    specialty: "Litigation & Legal Strategy",
    description:
      "Core practice in civil and commercial litigation, procedural strategy, and dispute structuring. Recognized for analytical depth and command over procedural law.",
  },
  {
    name: "Adv. Prachi Sharma",
    role: "Co-Founder & Partner",
    specialty: "Corporate Advisory & Dispute Resolution",
    description:
      "Specializing in corporate advisory, regulatory matters, and dispute resolution. Known for structured advisory approach and strong documentation.",
  },
];

export const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Founding Partners
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Expert <span className="text-gradient-gold">Legal Team</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The founding partners bring together courtroom strength, strategic litigation 
            planning, and corporate legal intelligence with a singular objective: to deliver 
            decisive legal outcomes through preparation, pressure, and precision.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-full h-full rounded-full bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
                  <span className="text-3xl font-serif font-bold text-primary-foreground">
                    {member.name
                      .replace("Adv. ", "")
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-primary/50 transition-colors" />
              </div>

              {/* Info */}
              <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium text-sm mb-2">
                {member.role}
              </p>
              <p className="text-muted-foreground text-sm mb-3">
                {member.specialty}
              </p>
              <p className="text-muted-foreground/80 text-xs mb-4 leading-relaxed">
                {member.description}
              </p>

                          </div>
          ))}
        </div>
      </div>
    </section>
  );
};
