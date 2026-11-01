import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sparkles, Users, Zap, GitBranch, Code, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const VibeCoding = () => {
  useEffect(() => {
    document.title = "Vibe Coding as a Service | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Bring energy, intelligence, and agility into your development ecosystem with Vibe Coding as a Service. AI-assisted development with collaborative workspaces.";
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
      {/* Hero Section */}
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
              Vibe Coding as a Service
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Bring energy, intelligence, and agility into your development ecosystem with Vibe Coding as a Service, a next-generation offering that redefines how teams code, collaborate, and innovate.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Vibe Coding fuses AI-assisted development, collaborative workspaces, and continuous feedback loops to create an adaptive environment where developers thrive. Whether you're modernizing legacy systems, accelerating product delivery, or empowering cross-functional teams, Vibe Coding makes the coding experience smarter, faster, and more human.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Key Offerings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border/50">
                <Sparkles className="w-8 h-8 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI-powered Code Generation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Intelligent suggestions and AI-powered code generation for faster delivery and enhanced productivity.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border/50">
                <Users className="w-8 h-8 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Real-time Collaboration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Real-time pair programming and team collaboration environment for seamless teamwork and knowledge sharing.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border/50">
                <Code className="w-8 h-8 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Code Quality Insights</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Code quality insights and continuous improvement recommendations to maintain high standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border/50">
                <GitBranch className="w-8 h-8 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">CI/CD Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated integration with CI/CD and DevOps pipelines for streamlined development workflows.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-lg border border-border/50 md:col-span-2">
                <Zap className="w-8 h-8 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Custom Vibe Setups</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Custom vibe setups aligned with team culture, tools, and preferred frameworks for optimal developer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Why Vibe Coding?
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Accelerate development cycles with AI-assisted coding",
                "Enhance team collaboration and knowledge sharing",
                "Improve code quality through continuous insights",
                "Streamline workflows with automated integrations",
                "Customize environment to match team preferences",
                "Enable faster innovation and product delivery"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Transform Your Development Experience
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience the future of coding with Vibe Coding as a Service. Let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  Explore More Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VibeCoding;

