import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
          Legal <span className="text-gradient-gold">Disclaimer</span>
        </h1>
        <p className="text-muted-foreground mb-8 text-sm">Last updated: April 10, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. General Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              The information provided on this website is for general informational purposes only. It does not constitute legal advice, and no attorney-client relationship is created by accessing or using this website. For specific legal guidance, please schedule a formal consultation with Tri Lex & Juris Law Firm.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. No Guarantee of Results</h2>
            <p className="text-muted-foreground leading-relaxed">
              Past results, case studies, and testimonials mentioned on this website do not guarantee or predict similar outcomes in future matters. Each legal case is unique, and results depend on the specific facts and circumstances involved. The success rate and statistics mentioned on this website are indicative and based on the Firm's overall experience.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. Professional Responsibility</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tri Lex & Juris Law Firm and its advocates are governed by the rules of the Bar Council of India. This website is not intended as solicitation or advertisement in violation of the Bar Council of India Rules. The content is provided purely for informational purposes in compliance with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Bar Council of India Compliance</h2>
            <p className="text-muted-foreground leading-relaxed">
              As per the rules of the Bar Council of India, advocates and law firms are not permitted to solicit work or advertise. By accessing this website, you acknowledge that:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>There has been no advertisement, solicitation, or inducement by the Firm or its members</li>
              <li>You are seeking information about the Firm of your own accord</li>
              <li>No information on this website should be construed as advertising or solicitation</li>
              <li>The Firm is not liable for any consequence arising from your action based on the website content</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Accuracy of Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we strive to keep the information on this website accurate and up-to-date, Tri Lex & Juris makes no representations or warranties about the completeness, accuracy, or reliability of the content. Laws and regulations change frequently, and the information on this website may not reflect the most current legal developments.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">6. External Links Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              This website may contain links to external websites. Tri Lex & Juris does not control and is not responsible for the content, privacy policies, or practices of any third-party websites. The inclusion of external links does not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              Under no circumstances shall Tri Lex & Juris Law Firm, its partners, associates, or employees be liable for any loss or damage arising from reliance on the information provided on this website. Users are advised to seek independent legal advice before taking any action based on the content of this website.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">8. I Agree / User Acknowledgment</h2>
            <p className="text-muted-foreground leading-relaxed">
              By continuing to use this website and submitting any form or request, you acknowledge that you have read, understood, and agree to the terms of this Disclaimer, our Privacy Policy, and Terms & Conditions.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">9. Contact</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any questions regarding this disclaimer, please contact:<br />
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

export default Disclaimer;
