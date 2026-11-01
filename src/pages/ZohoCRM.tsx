import { useEffect } from "react";
import heroImage from "@/assets/hero-services.webp";

const ZohoCRM = () => {
  useEffect(() => {
    document.title = "Expert Zoho CRM Implementation | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Zoho CRM implementation by certified partner Anagha Softech helps businesses unlock sales potential with tailored CRM solutions, automation, and expert support";
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero */}
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
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Expert Zoho CRM Implementation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              As a certified partner, Anagha Softech helps businesses unlock sales potential with tailored CRM solutions, automation, and expert support.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unlock your sales team's full potential with Anagha Softech's expert Zoho CRM implementation services. As a certified Zoho partner, we custom-design and configure CRM solutions that match the unique workflows and sales processes of your business. No matter what the size of your business is, no matter how simple or complex your processes are, we have got you covered.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Keeping it Simple</h2>
              <p className="text-muted-foreground leading-relaxed">
                We take extra caution when setting up lead management, automation, and reporting features so your team can efficiently convert potential leads into customers. At Anagha Softech, we are all about simplicity and usability. Right from creating dashboards that reflect only the most relevant and actionable information for your team, to configuring automations that streamline routine tasks effectively, we keep it all simple and easy. And what does that do? It gives your team more time to focus on what matters the most: closing deals and nurturing leads.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Extra Edge</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Not just that, Anagha Softech gives you an edge over others. Our exclusive access to Zoho's latest roadmap and tools keeps your CRM ahead of industry trends and technological advances. We learn the best practices from extensive real-world Zoho implementations so your systems are optimized for success right from the word go.
              </p>
              <div className="bg-gradient-card border border-border/50 rounded-xl p-6">
                <p className="font-semibold text-foreground mb-4">Our partner-driven advantage includes the following:</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Best practices from proven Zoho deployments across industries</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Exclusive insights and early access to new Zoho features and tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span>Comprehensive post-go-live support and training to maximize adoption and ROI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZohoCRM;


