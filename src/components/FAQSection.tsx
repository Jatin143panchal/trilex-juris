import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What type of matters does Tri Lex & Juris Law Firm specialize in?",
    answer:
      "Tri Lex & Juris Law Firm primarily specializes in high-stakes litigation, complex commercial disputes, corporate conflicts, white-collar crime, and regulatory enforcement matters. Our focus is on cases that demand strategic depth, courtroom dominance, and decisive execution.",
  },
  {
    question: "Do you represent corporate clients and business entities?",
    answer:
      "Yes. We regularly represent corporations, startups, directors, promoters, and business entities in litigation, advisory, and dispute resolution matters. Our legal strategies are aligned with commercial objectives and risk mitigation.",
  },
  {
    question: "Is the firm litigation-driven or advisory-focused?",
    answer:
      "We are a litigation-first firm. While we provide advisory and compliance support, our core strength lies in aggressive dispute resolution, trial advocacy, and enforcement proceedings. Every advisory is structured with potential litigation outcomes in mind.",
  },
  {
    question: "How does the firm approach complex litigation?",
    answer:
      "Our approach is strategy-led and outcome-oriented. Each matter begins with in-depth legal analysis, risk assessment, and tactical planning. We focus on controlling proceedings, leveraging procedural law, and applying pressure where it matters most.",
  },
  {
    question: "Does the firm handle urgent and time-sensitive matters?",
    answer:
      "Absolutely. We are equipped to handle urgent filings, interim reliefs, injunctions, anticipatory actions, and emergency hearings. Speed, precision, and preparedness are integral to our litigation practice.",
  },
  {
    question: "How does Tri Lex & Juris ensure confidentiality?",
    answer:
      "Confidentiality is non-negotiable. All client matters are handled with strict professional secrecy, controlled access, and disciplined internal processes, ensuring complete protection of sensitive legal and commercial information.",
  },
  {
    question: "Can individuals approach the firm for representation?",
    answer:
      "Yes. We represent individuals, professionals, and high-net-worth clients in select matters where strong legal intervention and strategic litigation are required. Engagements are undertaken selectively to maintain quality and effectiveness.",
  },
  {
    question: "How can a client initiate engagement with the firm?",
    answer:
      "Engagement begins with a strategic consultation, followed by a clear scope of work and litigation roadmap. We believe in clarity, accountability, and decisive action from day one. You can contact us via phone or WhatsApp.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-navy-light">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-32">
            <span className="text-primary font-medium tracking-widest uppercase text-sm">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Common <span className="text-gradient-gold">Legal Questions</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Find answers to commonly asked questions about our legal services.
              Can't find what you're looking for? Contact us directly.
            </p>

            {/* Contact Info */}
            <div className="p-6 rounded-2xl bg-gradient-card border border-border">
              <h3 className="font-semibold text-foreground mb-2">
                Still have questions?
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Our team is here to help you with any legal inquiries.
              </p>
              <a
                href="tel:9354777703"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
              >
                Call us: 9354777703
              </a>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-gradient-card border border-border rounded-xl px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
