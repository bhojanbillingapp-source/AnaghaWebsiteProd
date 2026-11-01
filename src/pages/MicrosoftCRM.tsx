import { useEffect } from "react";
import heroImage from "@/assets/hero-services.webp";

const MicrosoftCRM = () => {
  useEffect(() => {
    document.title = "Microsoft CRM Implementation | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Expert Microsoft Dynamics 365 CRM implementation by Anagha Softech. Custom CRM solutions integrated with Microsoft ecosystem for seamless business operations.";
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
              Microsoft CRM Implementation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Leverage the power of Microsoft Dynamics 365 CRM with expert implementation services from Anagha Softech.
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
                Microsoft Dynamics 365 CRM offers a unified platform that connects customer data across multiple channels. This helps automate workflows, foster collaboration, and gain AI-driven insights for more personalized and effective customer engagement. When customers are engaged in a way that makes them feel valued, customer satisfaction and customer retention are drastically improved.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Anagha Softech, our Microsoft Dynamics 365 CRM Practice is focused on transforming customer relationships into strategic business assets. We ensure that businesses optimize their sales cycles, improve marketing ROI and deliver top quality customer service with real-time analytics and seamless integration with other Microsoft tools.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Core Offerings</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Consulting & Advisory</strong>, CRM roadmap design, process analysis, and architecture planning.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Implementation</strong>, End-to-end deployment for Sales, Marketing, and Service modules.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Customization</strong>, Power Apps, Power Automate, and low-code/no-code solutions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Managed Services</strong>, Continuous support, optimization, and user adoption programs.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Analytics</strong>, Power BI dashboards, predictive insights, and unified 360° customer view.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Value Delivered</h2>
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

export default MicrosoftCRM;

