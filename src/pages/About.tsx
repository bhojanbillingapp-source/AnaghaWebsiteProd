import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Target } from "lucide-react";
import heroImage from "@/assets/hero-about.webp";

const About = () => {
  useEffect(() => {
    document.title = "About Anagha Softech | Business-Focused, People-Centric IT Solutions";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Discover Anagha Softech, blending tech innovation, data strategies, and human insight to deliver impactful, scalable, and secure digital transformation for enterprises.";
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
      {/* Header */}
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
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Who we are
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Anagha Softech is a Global IT Modernization and Digital Engineering company with <strong className="text-foreground">16+ years of industry experience</strong> that helps enterprises reimagine their business through AI-led modernization, Digital Transformation, and intelligent product engineering. Headquartered in Hyderabad, Telangana, we are a technology-driven, business-focused, and people-centric organization that blends data-driven strategies with human insight to deliver meaningful impact to our endeavors.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With Innovation as our DNA, we provide end-to-end solutions to drive enterprises to reimagine their Business and Technology Landscape to drive significant business outcomes through AI-powered automation, enterprise transformation, Domain lead consulting and digital operations, empowering businesses to enhance performance, scale efficiently, and stay ahead in a rapidly evolving digital landscape.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our expertise extends across all key Industry Domains - BFSI, Healthcare & Life Sciences, Hi-Tech, Retail & Manufacturing, where we combine engineering excellence with deep domain knowledge to drive improvements to business KPI's. Guided by a strong commitment to quality, scalability, security, and compliance, Anagha Softech continues to enable clients to grow sustainably, adapt quickly, and lead confidently in an era defined by intelligence and agility.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed font-semibold">
              At Anagha Softech, we believe the future belongs to those who transform boldly and act with agility, and we empower our clients to do exactly that.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-slide-in">
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-secondary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  To be the Trusted Technology partner enabling enterprises to modernise, innovate, and scale through Intelligent Digital transformation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We aim to redefine the way organisations leverage technology, not just to stay relevant, but to lead the future.
                </p>
              </div>
              
              <div className="animate-slide-in">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-secondary mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">Mission</h2>
                </div>
                <ul className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>To deliver measurable business value through innovation, engineering excellence, and intelligence-driven solutions.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>To create digital ecosystems that are smarter, faster, and more resilient.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>To empower people, partners, and clients through collaboration and trust.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>To shape the future of IT with AI-led transformation as our foundation.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              Leadership
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <Card className="bg-card shadow-card border border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">SK</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Sreedhar K
                  </h3>
                  <p className="text-muted-foreground">
                    Chief Operating Officer
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card border border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">HN</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Himabindu Nuggu
                  </h3>
                  <p className="text-muted-foreground">
                    Chief Financial Officer
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card border border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">BS</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Bhuvana Sindhuja
                  </h3>
                  <p className="text-muted-foreground">
                    Chief Human Resource Officer
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card shadow-card border border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <span className="text-4xl text-muted-foreground">HK</span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Hemanth Kumar
                  </h3>
                  <p className="text-muted-foreground">
                    Lead - Operations
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusion Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Inclusion
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Anagha Softech, inclusion is more than a policy, it is the foundation of our workplace culture. We create an environment where people from all backgrounds, perspectives, and experiences are welcomed and heard. Our teams thrive on collaboration and respect, ensuring that every employee has the opportunity to grow, contribute, and lead. By fostering openness and representation, we strengthen not only our workforce but also the value we deliver to clients and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              Values
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12 text-center">
              Our culture is built on principles that define everything we do
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Trust</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The cornerstone of every partnership we build. We believe in long-term relationships grounded in transparency and integrity.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Transformation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We challenge the status quo and drive continuous evolution, in technology, processes, and business models.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Agility</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We move fast, adapt faster, and deliver outcomes that keep pace with a dynamic market.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We foster creativity and experimentation to build solutions that deliver lasting impact.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
