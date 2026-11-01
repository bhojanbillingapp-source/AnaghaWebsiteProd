import { useEffect } from "react";
import heroImage from "@/assets/hero-services.webp";

const Salesforce = () => {
  useEffect(() => {
    document.title = "Salesforce Implementation | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Expert Salesforce implementation services by Anagha Softech. Custom CRM solutions, automation, and integration services to transform your sales operations.";
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
              Salesforce Implementation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transform your sales operations with expert Salesforce implementation services from Anagha Softech.
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
                At Anagha Softech, our Salesforce Practice is committed to empowering organizations to unlock the transformative power of the Salesforce platform. Our team of certified Salesforce professionals and deep domain experts uses agile delivery methodologies in providing end-to-end solutions that meet client goals. We work with an aim of driving meaningful business transformation and through customized Salesforce we enhance operational efficiency and customer engagement for businesses.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Core Offerings</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Salesforce Consulting & Advisory</strong>, Business process assessment, roadmap design, and system optimization.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Implementation Services</strong>, End-to-end configuration, deployment, and integration across Salesforce Clouds.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Custom Development</strong>, Lightning Components, Apex, Flows, and AI-powered automation.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Managed Services</strong>, Continuous support, enhancements, and release management.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Integration & Analytics</strong>, Seamless integration with ERP, HRMS, and BI tools like Tableau and Power BI.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Industry Focus</h2>
              <p className="text-muted-foreground leading-relaxed">
                Banking & Financial Services, Healthcare, Manufacturing, Education, Staffing & Recruitment
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Value Delivered</h2>
              <p className="text-muted-foreground mb-4">When you choose Anagha Softech, you can be assured of the following values:</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Improved sales productivity and pipeline visibility.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Enhanced customer experience through 360° engagement.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Reduced operational costs via automation and analytics.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Accelerated ROI on Salesforce investments.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Salesforce;

