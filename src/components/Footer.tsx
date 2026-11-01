import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import logo from "@/assets/log3.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img src={logo} alt="ANAGHA SOFTECH PRIVATE LIMITED" className="h-24 mb-4" />
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Transform your workforce with AI innovation. Bridging human expertise and artificial intelligence.
            </p>
            <div className="flex gap-3">
              <a
                href="https://x.com/AnaghaSoft"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-card"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/anaghasoftech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-card"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact Us</h4>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:contact@anaghasoft.ai" className="text-foreground hover:text-primary transition-colors font-medium">
                    contact@anaghasoft.ai
                  </a>
                </div>
              </div>

              {/* Addresses */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Head Office */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Head Office</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Ground floor 1-4-190/84 & 85 part,<br />
                      Sri Kamakshi Nilayam, Sainikpuri<br />
                      Hyderabad, Telangana,<br />
                      India - 500094
                    </p>
                  </div>
                </div>

                {/* Bengaluru Center */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-2">Bengaluru Center</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      #385, 7th Main<br />
                      ITI Layout, Mallatha halli<br />
                      Bengaluru - 560056
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} ANAGHA SOFTECH PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
