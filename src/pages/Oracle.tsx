import { useEffect } from "react";
import heroImage from "@/assets/industry-banking.webp";

const Oracle = () => {
  useEffect(() => {
    document.title = "Oracle ERP Implementation | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Expert Oracle ERP implementation and consulting services by Anagha Softech. Comprehensive Oracle solutions for enterprise resource planning.";
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
              Oracle ERP Implementation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Optimize your business operations with expert Oracle ERP implementation services from Anagha Softech.
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
                At Anagha Softech, the Oracle ERP Practice is dedicated to delivering powerful enterprise solutions using Oracle Fusion Cloud and E-Business Suite. We help organizations modernize their finance, HR, procurement, and supply chain functions. This allows businesses to use scalable cloud ERP platforms that increase efficiency, simplify daily operations, and encourage meaningful innovation. With Anagha by your side, you can seamlessly and confidently transition core business processes to digital environments, bringing greater transparency and collaboration to everyday workflows.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                As a result, your business organization stays more agile, ready to adapt to changes, address the challenges, and convert opportunities with ease.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Core Offerings</h2>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Oracle ERP Consulting</strong>, Assessment, roadmap design, and architecture planning.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Implementation Services</strong>, End-to-end deployment of Oracle Fusion Cloud and E-Business Suite modules.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Integration & Customization</strong>, Middleware, API, and Oracle PaaS extensions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Managed Services</strong>, Application maintenance, patching, and optimization.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span><strong className="text-foreground">Analytics & Insights</strong>, Oracle Analytics Cloud and BI Publisher dashboards.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Oracle;

