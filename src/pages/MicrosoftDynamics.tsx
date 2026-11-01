import { useEffect } from "react";
import heroImage from "@/assets/industry-it.webp";

const MicrosoftDynamics = () => {
  useEffect(() => {
    document.title = "Microsoft Dynamics ERP Implementation | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Expert Microsoft Dynamics ERP implementation and consulting services by Anagha Softech. Comprehensive Dynamics solutions for enterprise resource planning.";
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
              Microsoft Dynamics ERP Implementation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Streamline your business operations with expert Microsoft Dynamics ERP implementation from Anagha Softech.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Microsoft Dynamics ERP Solutions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Microsoft Dynamics 365 for Finance and Operations (formerly Dynamics AX) provides comprehensive ERP capabilities integrated with the Microsoft ecosystem. Anagha Softech offers expert implementation, customization, and support services for Microsoft Dynamics ERP solutions.
            </p>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Microsoft Ecosystem Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Leverage native integration with Microsoft Office 365, Power BI, Azure, and other Microsoft services. Our implementation ensures seamless connectivity across your Microsoft infrastructure for maximum productivity and efficiency.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Comprehensive ERP Modules</h3>
              <p className="text-muted-foreground leading-relaxed">
                Implement and customize modules for finance, supply chain management, manufacturing, project management, and human resources. We configure Dynamics to align with your industry-specific requirements and business processes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicrosoftDynamics;

