import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Vinay Singh",
    role: "Business Owner",
    content:
      "I approached Apex Law Firm for property documentation and legal verification. The entire process was transparent, fast, and handled with utmost care. They explained every step in detail and made sure there were no hidden issues. Truly one of the most reliable firms.",
    rating: 5,
  },
  {
    name: "Ayush Sharma",
    role: "Corporate Client",
    content:
      "What impressed me most about Apex Law Firm is their honesty and depth of experience. They don't overpromise, but they deliver strong results. Their decades in the field truly reflect in how efficiently they handle even complex cases. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Malhotra",
    role: "Family Case Client",
    content:
      "During my divorce proceedings, the team at Apex Law Firm stood by me like family. They handled every aspect with sensitivity and professionalism. I'm grateful for their support during such a difficult time.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Our Testimonials
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Happy Clients{" "}
            <span className="text-gradient-gold">Feedback</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our satisfied clients about their experience working with
            our dedicated legal team.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold mb-6">
                <Quote className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-gradient-card border border-border">
            <div className="text-center">
              <span className="font-serif text-4xl font-bold text-gradient-gold">
                10+
              </span>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <p className="text-foreground/80 max-w-xs text-left">
              Trusted by hundreds of clients across all practice areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
