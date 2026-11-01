import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Cloud, Code, Zap, Shield, GitBranch, Brain, Users } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const ProductEngineering = () => {
  useEffect(() => {
    document.title = "Product Engineering & Development | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "From Vision to Value, End-to-End Product Engineering That Delivers. Design, engineer, and deliver intelligent, high-performance digital products that scale seamlessly.";
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
              From Vision to Value, End-to-End Product Engineering That Delivers.
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Anagha Softech partners with global enterprises and product innovators to design, engineer, and deliver intelligent, high-performance digital products that scale seamlessly and accelerate growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                Build Your Next-Generation Product with Us
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
              Engineering the Future, One Product at a Time
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                In the digital age, great products define great businesses.
              </p>
              <p>
                Build scalable, secure, and high-performing digital products with engineering excellence. Our Product Engineering & Development services span the entire lifecycle, from ideation to deployment and continuous improvement, enabling organizations to innovate faster and deliver superior user experiences.
              </p>
              <p>
                We combine deep domain expertise, modern engineering practices, and cutting-edge technologies to create products that are robust, future-ready, and aligned with business goals. Our approach emphasizes modular architecture, cloud-native development, performance optimization, and security-by-design principles to ensure every product is resilient, flexible, and built to scale.
              </p>
              <p>
                From developing next-generation platforms and enterprise-grade applications to modernizing legacy systems and integrating AI-driven capabilities, we partner with clients to bring ideas to life with precision and speed. Whether you are building a completely new product or enhancing an existing one, our engineering excellence ensures reliability, quality, and sustained value.
              </p>
              <p>
                Anagha Softech's Product Engineering and Development services combine deep domain expertise, modern architectures, and AI-driven insights to deliver products that are faster to market, resilient, and future-ready.
              </p>
              <p>
                From concept to commercialisation, we take ownership across the entire product lifecycle, enabling enterprises to innovate continuously, adapt rapidly, and lead their markets with confidence.
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
              Comprehensive, Collaborative, and Customer-Centric
            </h2>
            <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
              We bring an agile, end-to-end engineering model designed around speed, scalability, and customer success:
            </p>
            <div className="grid md:grid-cols-5 gap-6">
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">1</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Concept & Strategy</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Define product vision, user journeys, and success metrics.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">2</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Design & Prototyping</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rapidly translate ideas into interactive, human-centred designs.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">3</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Engineering & Development</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Build scalable, secure, cloud-native, and AI-enabled products.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">4</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Testing & Quality Engineering</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ensure reliability, performance, and compliance across environments.
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border border-border/50">
                <div className="text-3xl font-bold text-secondary mb-3">5</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Deployment & Support</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Seamless rollout and continuous improvement through DevOps and managed services.
                </p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mt-12 text-center leading-relaxed">
              Our engineering teams combine creativity with precision, supported by automation, data, and AI to accelerate delivery without compromising quality.
            </p>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              End-to-End Engineering Excellence
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Code className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Product Design & Architecture</h3>
                  <p className="text-muted-foreground">Create robust, future-proof digital architectures and experiences.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Code className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Custom Software Development</h3>
                  <p className="text-muted-foreground">Build enterprise-grade, cross-platform applications tailored to your needs.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Cloud className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Cloud-Native Development</h3>
                  <p className="text-muted-foreground">Engineer scalable, resilient solutions leveraging AWS, Azure, and GCP.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Brain className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI-Driven Product Innovation</h3>
                  <p className="text-muted-foreground">Integrate data, machine learning, and predictive intelligence to power smart features.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <GitBranch className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">DevOps & Continuous Delivery</h3>
                  <p className="text-muted-foreground">Enable faster releases with automated pipelines and integrated feedback loops.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50">
                <Shield className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assurance & Testing</h3>
                  <p className="text-muted-foreground">Deliver flawless experiences through automated, intelligent testing frameworks.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg border border-border/50 md:col-span-2">
                <Zap className="w-6 h-6 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Sustenance Engineering</h3>
                  <p className="text-muted-foreground">Extend product lifespan through performance tuning, feature evolution, and technical support.</p>
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
              Elevate Customer Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              {[
                "Shorter product release cycles and faster time-to-market",
                "Reduced development costs through automation and AI-enabled delivery",
                "Improved product reliability, scalability, and maintainability",
                "Seamless integration across platforms, devices, and ecosystems",
                "Continuous innovation through agile, iterative product evolution",
                "End-to-end ownership, from design to deployment"
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
              Products Tailored to Your Industry
            </h2>
            <div className="space-y-6 mt-12">
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">BFSI</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Engineer secure digital banking products, AI-based credit risk systems, and real-time analytics platforms.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">Retail</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Develop omni-channel e-commerce solutions, personalised recommendation engines, and mobile-first platforms.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">Manufacturing</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build IoT-enabled monitoring systems and predictive maintenance applications for smart factories.
                </p>
              </div>
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-3">Healthcare & Life Sciences</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deliver patient-centric digital health platforms, analytics dashboards, and research tools with regulatory compliance.
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Why Choose Anagha Softech for Product Engineering
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-center leading-relaxed">
              Innovation Meets Discipline. Intelligence Drives Delivery.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                "Proven product engineering DNA across enterprise and consumer markets",
                "AI-driven design and development accelerators",
                "Agile delivery methodology focused on measurable business outcomes",
                "Multi-technology expertise spanning modern stacks and cloud platforms",
                "Flexible engagement models, from turnkey ownership to co-creation partnerships",
                "Global delivery capability with local agility"
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
              Let's Build What's Next.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Partner with Anagha Softech to design, develop, and deliver world-class products that inspire customers and define the future of your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80">
                  Start Your Product Journey
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Talk to Our Experts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductEngineering;

