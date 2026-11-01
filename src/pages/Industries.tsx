import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Code, Heart, Landmark, Factory, GraduationCap, Building2, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import industryIT from "@/assets/industry-it.webp";
import industryHealthcare from "@/assets/industry-healthcare.webp";
import industryBanking from "@/assets/industry-banking.webp";
import industryManufacturing from "@/assets/industry-manufacturing.webp";
import industryEducation from "@/assets/industry-education.webp";
import industryPublicServices from "@/assets/industry-public-services.webp";
import heroImage from "@/assets/hero-services.webp";

const Industries = () => {
  useEffect(() => {
    document.title = "Industry Solutions | BFSI, Healthcare, Retail, Education, Manufacturing";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Deep industry expertise from Anagha Softech, driving intelligent digital impact and transformation for BFSI, healthcare, manufacturing, retail, and education.";
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  const industries = [
    {
      name: "Information Technology",
      slug: "information-technology",
      icon: Code,
      image: industryIT,
      description: "Building secure, scalable, and intelligent solutions through software development, cybersecurity, and cloud computing.",
    },
    {
      name: "Healthcare",
      slug: "healthcare",
      icon: Heart,
      image: industryHealthcare,
      description: "Enabling digital health and scientific discovery through AI-driven medical imaging, clinical data management, and compliance frameworks.",
    },
    {
      name: "BFSI Banking",
      slug: "banking",
      icon: Landmark,
      image: industryBanking,
      description: "Empowering banks, insurers, and fintechs with secure, intelligent, and personalised experiences powered by AI and automation.",
    },
    {
      name: "Retail",
      slug: "retail",
      icon: ShoppingBag,
      image: industryIT, // Using IT image as placeholder
      description: "Enabling intelligent, customer-centric commerce through omni-channel platforms, AI-powered recommendations, and supply chain automation.",
    },
    {
      name: "Manufacturing",
      slug: "manufacturing",
      icon: Factory,
      image: industryManufacturing,
      description: "Driving end-to-end transformation with IoT, analytics, and automation to enable intelligent manufacturing ecosystems.",
    },
    {
      name: "Education",
      slug: "education",
      icon: GraduationCap,
      image: industryEducation,
      description: "Connecting educational institutions with qualified professionals and implementing technical solutions for progressive learning environments.",
    },
    {
      name: "Public Services",
      slug: "public-services",
      icon: Building2,
      image: industryPublicServices,
      description: "Digital governance solutions and smart city initiatives that enhance citizen services and urban sustainability.",
    },
  ];

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
              AI-led Solutions. Industry-specific Impact.
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Deep Industry Expertise. Intelligent Digital Impact.
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Every industry has unique challenges. At Anagha Softech, we bring AI-led insight, engineering excellence, and domain intelligence to deliver outcomes that truly matter, from operational efficiency to customer experience.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const IconComponent = industry.icon;
              return (
                <Link key={industry.slug} to={`/industries/${industry.slug}`}>
                  <Card className="bg-card shadow-card border border-border/50 hover:shadow-card-hover transition-all duration-300 h-full group">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={industry.image} 
                        alt={industry.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-glow">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {industry.name}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {industry.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Partner with Anagha Softech to unlock the power of AI-led solutions tailored to your industry's unique challenges.
            </p>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 shadow-card hover:shadow-card-hover duration-300">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

