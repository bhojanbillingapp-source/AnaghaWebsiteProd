import { useEffect } from "react";
import { Settings, Shield, Monitor, Cloud } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const AutomationTesting = () => {
  useEffect(() => {
    document.title = "Automation, Testing & Managed Services | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Ensure quality, stability, and scalability through intelligent automation, robust testing, and continuous optimization. Streamline operations and deliver consistent outcomes.";
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
              Automation, Testing & Managed Services
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Ensure quality, stability, and scalability through intelligent automation and continuous optimization
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ensure quality, stability, and scalability across your technology landscape through intelligent automation, robust testing, and continuous optimisation. Our Automation, Testing & Managed Services are designed to streamline operations, reduce manual effort, and deliver consistent, high-performance outcomes.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We implement end-to-end automation frameworks that accelerate delivery cycles, improve accuracy, and enhance productivity, whether for applications, infrastructure, or business processes. Our comprehensive testing services cover functional, performance, security, usability, and regression testing, ensuring every release is reliable, secure, and ready for scale.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With our Managed Services model, organizations gain round-the-clock monitoring, proactive issue resolution, and continuous improvement of their IT ecosystems. We leverage modern tools, DevOps practices, and AI-driven insights to optimize performance, minimize downtime, and ensure seamless operations.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              From automating repetitive workflows and validating system performance to managing entire application environments, we help businesses operate with greater stability, agility, and cost efficiency, so they can focus on innovation and growth.
            </p>

            {/* Key Capabilities */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Settings className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Process Automation</h3>
                <p className="text-muted-foreground">
                  Automate business processes, workflows, and repetitive tasks to improve efficiency and reduce errors.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Monitor className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Comprehensive Testing</h3>
                <p className="text-muted-foreground">
                  Functional, performance, security, and usability testing to ensure quality and reliability.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Cloud className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Managed Services</h3>
                <p className="text-muted-foreground">
                  24/7 monitoring, proactive support, and continuous optimization of IT environments.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Shield className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  End-to-end QA frameworks ensuring every release meets quality standards and business requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomationTesting;

