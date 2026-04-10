import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock, MessageCircle, Scale, Gavel } from "lucide-react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919354777703";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    details: ["H-81, Sector 63, Noida", "Uttar Pradesh – Serving Nationwide"],
  },
  {
    icon: Phone,
    title: "Phone Numbers",
    details: ["9354777703", "9999668409", "9990444453"],
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["contact@trilexjuris.com"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: By Appointment"],
  },
];

type ConsultationType = "legal-advisory" | "court-consultation" | "";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    consultationType: "" as ConsultationType,
    legalMatterType: "",
    caseDescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConsultationTypeChange = (type: ConsultationType) => {
    setFormData({ ...formData, consultationType: type });
  };

  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to database
      const { error } = await supabase.from("consultation_requests").insert({
        full_name: formData.fullName.trim(),
        phone_number: formData.phoneNumber.trim(),
        email: formData.email.trim(),
        legal_matter_type: `${formData.consultationType === "legal-advisory" ? "Legal Advisory" : "Court Consultation"} - ${formData.legalMatterType}`,
        case_description: formData.caseDescription.trim(),
      });

      if (error) {
        console.error("Error saving consultation request:", error);
      }

      // Create WhatsApp message
      const consultationLabel = formData.consultationType === "legal-advisory" 
        ? "Legal Advisory" 
        : "Court Consultation";

      const message = `*New ${consultationLabel} Request - Tri Lex & Juris*
    
*Name:* ${formData.fullName}
*Phone:* ${formData.phoneNumber}
*Email:* ${formData.email}
*Consultation Type:* ${consultationLabel}
*Legal Matter:* ${formData.legalMatterType}
*Case Details:* ${formData.caseDescription}`;

      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");

      toast({
        title: "Request Submitted!",
        description: "Redirecting you to WhatsApp to complete your consultation booking.",
      });

      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        email: "",
        consultationType: "",
        legalMatterType: "",
        caseDescription: "",
      });
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Schedule a <span className="text-gradient-gold">Consultation</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to discuss your legal needs? Contact Tri Lex & Juris today for a 
            strategic consultation with our expert legal team.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-gradient-card border border-border">
              <h3 className="font-serif text-2xl font-bold mb-6">
                Request Consultation
              </h3>

              {/* Consultation Type Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-3">
                  Select Consultation Type
                </label>
                <div className="grid sm:grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => handleConsultationTypeChange("legal-advisory")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                      formData.consultationType === "legal-advisory"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      formData.consultationType === "legal-advisory"
                        ? "bg-gradient-gold"
                        : "bg-secondary"
                    }`}>
                      <Scale className={`w-5 h-5 ${
                        formData.consultationType === "legal-advisory"
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Get Legal Advisory</p>
                      <p className="text-xs text-muted-foreground">Corporate & Business Law</p>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleConsultationTypeChange("court-consultation")}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 flex items-center gap-3 ${
                      formData.consultationType === "court-consultation"
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      formData.consultationType === "court-consultation"
                        ? "bg-gradient-gold"
                        : "bg-secondary"
                    }`}>
                      <Gavel className={`w-5 h-5 ${
                        formData.consultationType === "court-consultation"
                          ? "text-primary-foreground"
                          : "text-muted-foreground"
                      }`} />
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-foreground">Book Court Consultation</p>
                      <p className="text-xs text-muted-foreground">Litigation & Court Cases</p>
                    </div>
                  </button>
                </div>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name
                    </label>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-secondary border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="bg-secondary border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-secondary border-border focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Legal Matter Type
                  </label>
                  <select
                    name="legalMatterType"
                    value={formData.legalMatterType}
                    onChange={handleChange}
                    className="w-full h-10 px-3 rounded-md bg-secondary border border-border text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  >
                    <option value="">Select a practice area</option>
                    <option value="Commercial & Corporate Litigation">Commercial & Corporate Litigation</option>
                    <option value="Civil & Property Disputes">Civil & Property Disputes</option>
                    <option value="White-Collar Crime">White-Collar Crime & Economic Offences</option>
                    <option value="Insolvency & Recovery">Insolvency & Recovery Proceedings</option>
                    <option value="Arbitration">Arbitration & Dispute Resolution</option>
                    <option value="Regulatory & Compliance">Regulatory & Compliance Litigation</option>
                    <option value="Cyber & Technology Law">Cyber & Technology Law</option>
                    <option value="Family & Matrimonial">Family & Matrimonial Law</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Describe Your Case
                  </label>
                  <Textarea
                    name="caseDescription"
                    value={formData.caseDescription}
                    onChange={handleChange}
                    placeholder="Please provide a brief description of your legal matter..."
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                    required
                  />
                </div>

                {/* I Agree Checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="agree-terms"
                    checked={agreedToTerms}
                    onCheckedChange={(checked) => setAgreedToTerms(checked === true)}
                    className="mt-1"
                  />
                  <label htmlFor="agree-terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <Link to="/privacy-policy" className="text-primary hover:underline" target="_blank">Privacy Policy</Link>,{" "}
                    <Link to="/terms-and-conditions" className="text-primary hover:underline" target="_blank">Terms & Conditions</Link>, and{" "}
                    <Link to="/disclaimer" className="text-primary hover:underline" target="_blank">Disclaimer</Link>.
                    I understand that submitting this form does not create an attorney-client relationship.
                  </label>
                </div>

                <Button 
                  variant="gold" 
                  size="xl" 
                  className="w-full"
                  disabled={!formData.consultationType || !agreedToTerms || isSubmitting}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {isSubmitting ? "Submitting..." : "Schedule via WhatsApp"}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                    <info.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {info.title}
                    </h4>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="p-6 rounded-xl bg-gradient-gold text-primary-foreground">
              <h4 className="font-serif text-xl font-bold mb-2">
                Urgent Legal Help?
              </h4>
              <p className="opacity-90 text-sm mb-4">
                For urgent legal matters, call us directly for immediate assistance.
              </p>
              <a
                href="tel:9354777703"
                className="inline-flex items-center gap-2 font-semibold"
              >
                <Phone className="w-5 h-5" />
                9354777703
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
