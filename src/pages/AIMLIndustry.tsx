import { useEffect } from "react";
import heroImage from "@/assets/feature-future.webp";

const AIMLIndustry = () => {
  useEffect(() => {
    document.title = "AI & ML Industry Upskilling Solutions | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "B2B Enterprise Solutions for industry upskilling. AI-powered training platforms and workforce development solutions for organizations.";
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
              AI & ML Industry Upskilling
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              B2B Enterprise Solutions - Transform your workforce with AI-powered upskilling and training platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Industry Upskilling (B2B Enterprise Solutions)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                For organizations committed to workforce development, Anagha Softech offers proven enterprise upskilling solutions. The service equips companies with targeted programs, integrated platforms, and analytics to identify gaps and advance team capabilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                By supporting continuous learning and skill upgrades, we empower businesses to meet industry standards, improve performance, and maintain a competitive edge in evolving markets.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Initiatives</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Corporate AI Readiness Assessments</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Evaluate current workforce capability and AI maturity.</li>
                    <li>• Tailor training to roles (e.g., business analysts, engineers, operations teams).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Customized AI Upskilling Programs</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Role-based learning: AI for Managers, AI for Developers, AI for Operations.</li>
                    <li>• Focus on use cases like predictive analytics, process automation, and AI agents.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Enterprise Automation Projects</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Jointly implement AI-driven process automation pilots.</li>
                    <li>• Use frameworks like LangChain, n8n, or OpenAI API integrations.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Leadership & Strategy Workshops</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Executive-level sessions on AI governance, ethics, and innovation strategy.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMLIndustry;

