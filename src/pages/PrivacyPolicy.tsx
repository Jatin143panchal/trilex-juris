import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16 max-w-4xl">
        <h1 className="font-serif text-3xl md:text-4xl font-bold mb-2">
          Privacy <span className="text-gradient-gold">Policy</span>
        </h1>
        <p className="text-muted-foreground mb-8 text-sm">Last updated: April 10, 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-foreground/90">
          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tri Lex & Juris Law Firm ("we," "our," or "the Firm") is committed to protecting the privacy and confidentiality of all personal information entrusted to us. This Privacy Policy explains how we collect, use, store, and protect your information when you visit our website or engage our legal services.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">2. Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, and any details you provide through our consultation request form.</li>
              <li><strong className="text-foreground">Case Details:</strong> Information about your legal matter that you voluntarily share with us.</li>
              <li><strong className="text-foreground">Usage Data:</strong> Browser type, IP address, pages visited, and time spent on our website, collected automatically through cookies and analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">3. How We Use Your Information</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>To respond to your consultation requests and legal inquiries</li>
              <li>To provide legal services and communicate with you about your matter</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations and professional regulations</li>
              <li>To send relevant legal updates with your consent</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">4. Confidentiality & Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              All information shared with Tri Lex & Juris is treated with the highest level of confidentiality. We employ industry-standard security measures including encryption, access controls, and secure storage to protect your data. Attorney-client privilege applies to all communications related to legal representation.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">5. Information Sharing</h2>
            <p className="text-muted-foreground leading-relaxed">
              We do not sell, trade, or rent your personal information. We may share information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
              <li>With your explicit consent</li>
              <li>As required by law, regulation, or court order</li>
              <li>To protect our legal rights or defend against legal claims</li>
              <li>With trusted service providers who assist in operating our website (bound by confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">6. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website may use cookies to enhance your browsing experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at <a href="mailto:contact@trilexjuris.com" className="text-primary hover:underline">contact@trilexjuris.com</a>.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-bold text-foreground mb-3">8. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              For any privacy-related concerns, please contact:<br />
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

export default PrivacyPolicy;
