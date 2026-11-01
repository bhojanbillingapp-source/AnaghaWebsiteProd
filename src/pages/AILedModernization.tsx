import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, Database, Shield, Zap, GitBranch, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const AILedModernization = () => {
  useEffect(() => {
    document.title = "AI-led Modernization | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Transform today, lead tomorrow with AI-driven modernization frameworks. Accelerate transformation, optimize operations, and unlock intelligent business value.";
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
            <p className="text-lg text-primary-foreground/80 mb-4 font-semibold">
              Trust. Transformation. Agility.
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Transform Today. Lead Tomorrow, with AI-led Modernisation.
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Reinvent your enterprise landscape with Anagha Softech's AI-driven modernisation frameworks, designed to accelerate transformation, optimise operations, and unlock intelligent business value.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Start Your Modernisation Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Empowering Enterprises through Intelligence and Agility
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In a world where technology evolves faster than business models, modernisation is no longer optional, it's imperative.
              </p>
              <p>
                AnaghaSoft helps global organisations revitalise legacy systems, modernise platforms, and infuse AI into every layer of their business to achieve new levels of agility, resilience, and performance.
              </p>
              <p>
                Our AI-led approach combines automation, data intelligence, and engineering excellence to help enterprises simplify complexity, drive innovation, and stay ahead of change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              AI at the Core of Transformation
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
              Anagha Softech's modernisation methodology is built on three pillars:
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">1</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Assess and Align</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Evaluate your current IT landscape, define strategic modernisation goals, and align them with business outcomes.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">2</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Automate and Optimise</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Integrate AI-driven automation, analytics, and DevOps practices to boost efficiency and reliability.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">3</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Transform and Scale</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deploy modern cloud-native, data-centric platforms to enable continuous innovation and scale.
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mt-12 text-center leading-relaxed">
              We bring together proven frameworks, AI-led insights, and deep industry knowledge to transform legacy environments into intelligent digital ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Comprehensive Modernisation Services for the AI Era
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Cloud className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Application Modernisation</h3>
                  <p className="text-muted-foreground">Refactor legacy systems into scalable, cloud-native architectures.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Database className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Data Modernisation</h3>
                  <p className="text-muted-foreground">Build unified, AI-ready data platforms for better decisions and insights.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Cloud className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Migration & Optimisation</h3>
                  <p className="text-muted-foreground">Seamless transition to multi-cloud and hybrid environments.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Zap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Intelligent Automation</h3>
                  <p className="text-muted-foreground">Integrate AI and RPA to optimise processes and reduce manual effort.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <GitBranch className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">API & Integration Modernisation</h3>
                  <p className="text-muted-foreground">Enable interoperability across systems and platforms.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Shield className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Security and Compliance Modernisation</h3>
                  <p className="text-muted-foreground">Embed proactive, AI-driven security for enterprise resilience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Turn Legacy into Leverage
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {[
                "Accelerate innovation and time-to-market",
                "Improve performance, scalability, and resilience",
                "Reduce technical debt and operational costs",
                "Enhance customer experiences through intelligent automation",
                "Enable data-driven decisions and predictive insights",
                "Build a foundation for continuous digital growth"
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

      {/* Industry Use Cases Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Modernisation That Matters, Across Industries
            </h2>
            <div className="space-y-6 mt-12">
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">BFSI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Migrate core banking and risk systems to AI-enabled, cloud-native platforms for faster, more secure operations.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">Retail</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deploy intelligent analytics and automation to transform supply chains and customer engagement.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">Manufacturing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Modernise ERP and factory systems with IoT and AI to enable smart, predictive production.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare & Life Sciences</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transition to secure digital platforms that enhance patient care, research, and compliance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Why Choose Anagha Softech for Modernisation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Our AI-led edge ensures your transformation delivers tangible results.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Proven AI-first modernisation frameworks",
                "Deep experience across legacy and emerging technologies",
                "Strong product engineering DNA with global delivery capability",
                "Agile, transparent, and outcome-focused delivery model",
                "Long-term partnership approach built on trust and flexibility"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                  <p className="text-lg text-muted-foreground">{point}</p>
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
              Modernise with Confidence. Transform with Intelligence.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Partner with Anagha Softech to unlock the power of AI-led modernisation and build a smarter, future-ready enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  Talk to Our Experts
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

export default AILedModernization;

