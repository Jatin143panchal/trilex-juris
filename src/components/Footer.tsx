import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.jpeg";

const footerLinks = {
  services: [
    { label: "Commercial Litigation", href: "#practice" },
    { label: "Civil & Property Disputes", href: "#practice" },
    { label: "White-Collar Crime", href: "#practice" },
    { label: "Arbitration", href: "#practice" },
    { label: "Cyber & Technology Law", href: "#practice" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
    { label: "Internship", href: "#internship" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy", isRoute: true },
    { label: "Terms & Conditions", href: "/terms-and-conditions", isRoute: true },
    { label: "Disclaimer", href: "/disclaimer", isRoute: true },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Linkedin, href: "#" },
  { icon: Instagram, href: "#" },
];

export const Footer = () => {
  return (
    <footer className="bg-navy-light border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Tri Lex & Juris Logo" className="w-14 h-14 rounded-lg object-cover" />
              <div>
                <span className="font-serif text-xl font-bold text-foreground">
                  TRI LEX
                </span>
                <span className="font-serif text-xl font-bold text-primary">
                  {" "}& JURIS
                </span>
                <p className="text-xs text-muted-foreground tracking-widest -mt-1">
                  ADVOCATES & LEGAL EXPERTS
                </p>
              </div>
            </a>
            <p className="text-muted-foreground mb-4 max-w-sm">
              A premier litigation-focused law firm delivering decisive legal strategy, 
              uncompromising advocacy, and commercially sound solutions.
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              📍 H-81, Sector 63, Noida, Uttar Pradesh
              <br />
              📞 9354777703 | 9999668409 | 9990444453
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Tri Lex & Juris Law Firm. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Strategic. Relentless. Unyielding.
          </p>
        </div>
      </div>
    </footer>
  );
};
