import { useEffect } from "react";
import { GitBranch, Rocket, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const DevOps = () => {
  useEffect(() => {
    document.title = "DevOps Services | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Accelerate delivery, improve collaboration, and achieve continuous innovation with unified DevOps approach. Streamline software delivery lifecycle.";
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
              DevOps
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Accelerate delivery, improve collaboration, and achieve continuous innovation
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Accelerate delivery, improve collaboration, and achieve continuous innovation with a unified DevOps approach. Our DevOps services streamline the entire software delivery lifecycle, integrating development, operations, and quality teams to build, deploy, and scale applications faster and more reliably.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We modernize application delivery through automation, CI/CD pipelines, infrastructure as code, cloud-native practices, and continuous monitoring. By eliminating silos and creating a culture of shared responsibility, we ensure that software moves from ideation to production seamlessly, securely, and with minimal manual intervention.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our DevOps framework enhances agility, reduces deployment risks, and improves system resilience. From optimizing build and release processes to implementing automated testing, containerization, and observability platforms, we help enterprises deliver high-quality releases at speed.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether modernizing legacy systems, enabling microservices architectures, or creating a fully automated DevOps ecosystem, we empower organizations to innovate faster, respond to market needs quickly, and maintain operational excellence.
            </p>

            {/* Key Capabilities */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <GitBranch className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">CI/CD Pipelines</h3>
                <p className="text-muted-foreground">
                  Build automated pipelines for continuous integration and deployment to accelerate releases.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Rocket className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Infrastructure as Code</h3>
                <p className="text-muted-foreground">
                  Manage infrastructure through code for consistency, versioning, and rapid provisioning.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Shield className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Security & Compliance</h3>
                <p className="text-muted-foreground">
                  Integrate security into the DevOps pipeline with automated scanning and compliance checks.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Monitoring & Observability</h3>
                <p className="text-muted-foreground">
                  Implement comprehensive monitoring and observability for proactive issue detection and resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;

