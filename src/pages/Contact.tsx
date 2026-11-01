import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Linkedin, Twitter, CheckCircle } from "lucide-react";
import { z } from "zod";
import heroImage from "@/assets/hero-contact.webp";
import emailjs from '@emailjs/browser';

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  organisation: z.string().trim().min(1, { message: "Organisation is required" }).max(100),
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  phone: z.string().trim().min(1, { message: "Contact number is required" }).max(20),
  subject: z.string().trim().min(1, { message: "Subject/Area of Interest is required" }).max(200),
  message: z.string().trim().min(10, { message: "Message must be at least 10 characters" }).max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    organisation: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setIsSubmitting(true);

    try {
      // Validate form data
      contactSchema.parse(formData);

      // CAPTCHA verification is disabled
      // To enable: set VITE_TURNSTILE_SITE_KEY and uncomment below
      // if (!turnstileToken) {
      //   setTurnstileError("Please complete the CAPTCHA verification.");
      //   setIsSubmitting(false);
      //   return;
      // }

      // Submit form to worker endpoint
      const response =  await emailjs.send(
                      'service_pawt3e4',
                      'template_px8ru19',
                      {
                        name: formData.name,
                        organisation: formData.organisation,
                        email: formData.email,
                        phone: formData.phone,
                        subject: formData.subject,
                        message: formData.message,
                      },
                      'pBnMwhDR2DeerEU16'
                    );
      console.log('email js reponse' + response);
      const data =  response.status;

      if (!data) {
        throw new Error();
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll connect with you within one business day.",
      });

      // Reset form   
      setFormData({
        name: "",
        organisation: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form and try again.",
          variant: "destructive",
        });
      } else {
        // Handle API errors
        toast({
          title: "Error sending message",
          description: error instanceof Error ? error.message : "Please try again later.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <p className="text-lg text-primary-foreground/80 mb-4 font-semibold">
              Trust. Transformation. Agility.
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Your Next Breakthrough Starts with a Conversation.
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-4">
              We're here to help you transform faster, innovate smarter, and achieve measurable results.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Whether you're exploring AI-led modernisation, digital transformation, or a strategic partnership, let's talk.
            </p>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Local Expertise. Global Delivery.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With delivery teams and partners across India, the Middle East, North America, and Europe, Anagha Softech combines global reach with regional insight to deliver seamless, scalable transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Why Connect with Us Section */}``
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              We're Not Just a Vendor, We're Your Transformation Partner.
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Rapid response and consultative engagement",
                "Direct access to domain and technology experts",
                "Flexible models for proof-of-concept and strategic advisory",
                "Proven success across BFSI, Retail, Manufacturing, and Healthcare"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Reach Out to Us
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-slide-in">
                <h3 className="text-2xl font-bold text-foreground mb-6">Corporate Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Head Office</p>
                      <p className="text-muted-foreground leading-relaxed">
                        Ground floor 1-4-190/84 & 85 part,<br />
                        Sri Kamakshi Nilayam, Sainikpuri<br />
                        Hyderabad, Telangana,<br />
                        India - 500094
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Bengaluru Center</p>
                      <p className="text-muted-foreground leading-relaxed">
                        #385, 7th Main<br />
                        ITI Layout, Mallatha halli<br />
                        Bengaluru - 560056
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:Contact@anaghasoft.ai" className="text-foreground hover:text-primary transition-colors font-medium">
                        Contact@anaghasoft.ai
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">LinkedIn</p>
                      <a href="https://www.linkedin.com/company/anaghasoftech/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
                        Connect with us
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Twitter className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Twitter</p>
                      <a href="https://x.com/AnaghaSoft" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors font-medium">
                        @AnaghaSoft
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enquiry Form */}
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-foreground mb-6">We'd Love to Hear from You</h3>
                <p className="text-muted-foreground mb-8">
                  Please fill in your details and we'll connect within one business day.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="organisation">Organisation *</Label>
                    <Input
                      id="organisation"
                      name="organisation"
                      value={formData.organisation}
                      onChange={handleChange}
                      className={errors.organisation ? "border-destructive" : ""}
                    />
                    {errors.organisation && (
                      <p className="text-sm text-destructive mt-1">{errors.organisation}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="phone">Contact Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject / Area of Interest *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., AI-led Modernization, Digital Transformation, Product Engineering"
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Cloudflare Turnstile - DISABLED */}
                 
                  <Button
                    type="submit"
                    variant="secondary"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? "Sending..." : "Let's Connect"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
