import { useEffect } from "react";
import heroImage from "@/assets/industry-manufacturing.webp";

const SAP = () => {
  useEffect(() => {
    document.title = "SAP Implementation & Consulting | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Expert SAP implementation and consulting services by Anagha Softech. End-to-end SAP solutions for enterprise resource planning.";
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
              SAP Implementation & Consulting
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Transform your business operations with expert SAP implementation and consulting services from Anagha Softech.
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
                Anagha Softech's SAP Practice is focused on empowering enterprises to achieve operational excellence by leveraging SAP S/4HANA, SAP Business One, and SAP BTP solutions. From strategic planning to support and optimization, Anagha Softech covers the full spectrum of ERP lifecycle. We help organizations streamline their workflows, enhance organizational transparency, and make data-driven decisions that drive business growth. Our expertise lies across multiple SAP modules and industries, with a flexible implementation framework that aligns with client needs for cloud or on-premise solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Core Offerings</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">SAP Consulting & Advisory</strong>, Business case assessment, roadmap creation, and architecture design.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">SAP Implementation</strong>, SAP S/4HANA, Business One, and BTP deployment for core and industry modules.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Customization & Integration</strong>, ABAP, Fiori, and API integrations with third-party applications.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Managed Services</strong>, Application support, system optimization, and continuous improvement.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Analytics & Reporting</strong>, Embedded analytics, SAP Analytics Cloud, and Power BI integration.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SAP;

