import { Star } from "lucide-react";

const clients = [
  { name: "Tata Group", logo: "TATA" },
  { name: "Reliance Industries", logo: "RELIANCE" },
  { name: "Infosys", logo: "INFOSYS" },
  { name: "Wipro", logo: "WIPRO" },
  { name: "Mahindra", logo: "MAHINDRA" },
  { name: "Bharti Airtel", logo: "AIRTEL" },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "1000+", label: "Cases Won" },
  { value: "98%", label: "Success Rate" },
  { value: "10+", label: "Years Experience" },
];

export const HappyClientsSection = () => {
  return (
    <section className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Trusted By Many
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Our <span className="text-gradient-gold">Happy Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We've had the privilege of representing leading corporations and
            individuals across India.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-card border border-border"
            >
              <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors group"
            >
              <span className="font-serif text-lg font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {client.logo}
              </span>
            </div>
          ))}
        </div>

        {/* Rating */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-card border border-border">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-primary text-primary"
                />
              ))}
            </div>
            <span className="text-foreground font-semibold">4.9/5</span>
            <span className="text-muted-foreground text-sm">
              from 200+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
