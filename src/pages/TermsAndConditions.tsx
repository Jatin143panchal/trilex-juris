import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
          Terms & <span className="text-gradient-gold">Conditions</span>
        </h1>
        <p className="text-muted-foreground mb-8 text-sm">Last updated: April 10, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the website of Tri Lex & Juris Law Firm ("the Firm"), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. No Attorney-Client Relationship</h2>
            <p className="text-muted-foreground leading-relaxed">
              Visiting this website or submitting a consultation request does not create an attorney-client relationship. Such a relationship is established only through a formal engagement letter signed by the Firm. Information shared through the website contact form is not protected by attorney-client privilege until formal engagement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Use of Website</h2>
            <p className="text-muted-foreground leading-relaxed">You agree to use this website only for lawful purposes. You shall not:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Transmit any material that is defamatory, offensive, or otherwise objectionable</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Use the website to send unsolicited commercial communications</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content on this website, including text, graphics, logos, and images, is the property of Tri Lex & Juris Law Firm and is protected by intellectual property laws. No content may be reproduced, distributed, or used without prior written consent from the Firm.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Consultation Requests</h2>
            <p className="text-muted-foreground leading-relaxed">
              Submitting a consultation request through our website does not guarantee legal representation. The Firm reserves the right to accept or decline any matter at its sole discretion based on conflict checks, area of expertise, and capacity.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tri Lex & Juris Law Firm shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website. The Firm makes no warranties about the accuracy, completeness, or reliability of information presented on the website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">7. Third-Party Links</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to third-party websites. These links are provided for convenience only. The Firm does not endorse or assume responsibility for the content or practices of any linked websites.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">8. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions are governed by and construed in accordance with the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of the courts in Noida / Gautam Budh Nagar, Uttar Pradesh.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">9. Modifications</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Firm reserves the right to update these Terms and Conditions at any time without prior notice. Continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">10. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms and Conditions, contact:<br />
              <strong className="text-foreground">Tri Lex & Juris Law Firm</strong><br />
              H-81, Sector 63, Noida, Uttar Pradesh<br />
              Email: <a href="mailto:contact@trilexjuris.com" className="text-primary hover:underline">contact@trilexjuris.com</a><br />
              Phone: 9354777703
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;
