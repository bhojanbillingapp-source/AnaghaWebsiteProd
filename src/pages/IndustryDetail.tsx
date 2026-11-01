import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Code, Heart, Landmark, Factory, GraduationCap, Building2, ShoppingBag, CheckCircle } from "lucide-react";
import industryIT from "@/assets/industry-it.webp";
import industryHealthcare from "@/assets/industry-healthcare.webp";
import industryBanking from "@/assets/industry-banking.webp";
import industryManufacturing from "@/assets/industry-manufacturing.webp";
import industryEducation from "@/assets/industry-education.webp";
import industryPublicServices from "@/assets/industry-public-services.webp";

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();

  const industries: Record<string, {
    title: string;
    icon: any;
    image: string;
    content: {
      intro: string;
      sections?: {
        subtitle?: string;
        description: string;
        list?: string[];
      }[];
    };
  }> = {
    "information-technology": {
      title: "Information Technology",
      icon: Code,
      image: industryIT,
      content: {
        intro: "In an increasingly digital world, the Information Technology industry plays a pivotal role in building secure, scalable, and intelligent solutions that shape the future of business. At Anagha Softech, we empower the IT ecosystem through our expertise in software development, cybersecurity, and cloud computing. Our teams develop robust software solutions that drive digital transformation, enhance data security, and optimize cloud infrastructures for performance and scalability.",
        sections: [
          {
            description: "We have established partnerships with several leading technology firms, delivering cutting-edge solutions and upskilling their workforce through hands-on training in the latest technologies.",
          },
        ],
      },
    },
    "healthcare": {
      title: "Healthcare",
      icon: Heart,
      image: industryHealthcare,
      content: {
        intro: "Enabling Digital Health and Scientific Discovery",
        sections: [
          {
            description: "The healthcare and life sciences sector is being transformed by data, connectivity, and AI. Anagha Softech helps healthcare providers, research institutions, and life sciences enterprises enhance patient outcomes, accelerate discovery, and ensure compliance.",
          },
          {
            subtitle: "Key Focus Areas:",
            list: [
              "Digital health platforms and telemedicine integration",
              "AI-driven medical imaging and diagnostics",
              "Clinical data management and analytics",
              "R&D informatics and laboratory automation",
              "Compliance and regulatory data frameworks",
            ],
          },
          {
            subtitle: "Impact:",
            list: [
              "Improved patient outcomes and operational efficiency",
              "Accelerated research and clinical innovation",
              "Secure, compliant, and interoperable digital ecosystems",
            ],
          },
          {
            description: "We have implemented a range of technical solutions, including website development, for several leading healthcare providers such as Apollo Hospitals, Sunshine Hospitals, and Mahatma Gandhi Hospital.",
          },
        ],
      },
    },
    "banking": {
      title: "BFSI Banking",
      icon: Landmark,
      image: industryBanking,
      content: {
        intro: "The BFSI industry is rapidly evolving, from regulatory pressures to digital-first customer demands. Anagha Soft empowers banks, insurers, and fintechs to deliver secure, intelligent, and personalised experiences powered by AI, data, and automation.",
        sections: [
          {
            subtitle: "Key Focus Areas:",
            list: [
              "Core banking and legacy modernisation",
              "Intelligent risk and compliance analytics",
              "AI-based credit decisioning and fraud detection",
              "Digital onboarding and customer experience platforms",
              "Cloud-native and API-driven financial ecosystems",
            ],
          },
          {
            subtitle: "Impact:",
            list: [
              "Faster time-to-market for new financial products",
              "Improved compliance and operational transparency",
              "Enhanced customer loyalty through seamless digital experiences",
            ],
          },
          {
            subtitle: "Achievements:",
            list: [
              "TOGAF framework implemented successfully in 5 banks",
              "TOGAF practitioner trainers trained 20+ batches",
            ],
          },
        ],
      },
    },
    "manufacturing": {
      title: "Manufacturing",
      icon: Factory,
      image: industryManufacturing,
      content: {
        intro: "Manufacturers worldwide are embracing digital and AI technologies to achieve smarter operations and predictive efficiency. Anagha Soft drives end-to-end transformation by integrating IoT, analytics, and automation to enable intelligent manufacturing ecosystems.",
        sections: [
          {
            subtitle: "Key Focus Areas:",
            list: [
              "Smart factory enablement and IoT integration",
              "Predictive maintenance and AI-driven quality analytics",
              "ERP and MES modernisation",
              "Supply chain digitalisation",
              "Edge computing and connected asset management",
            ],
          },
          {
            subtitle: "Impact:",
            list: [
              "Reduced downtime and maintenance costs",
              "Improved quality and throughput",
              "Real-time operational visibility across plants and networks",
            ],
          },
          {
            description: "Our team has deployed advanced, state-of-the-art technologies for engineering enterprises, optimizing manufacturing processes, reducing operational costs and cycle times, and resulting in substantial financial gains.",
          },
        ],
      },
    },
    "education": {
      title: "Education",
      icon: GraduationCap,
      image: industryEducation,
      content: {
        intro: "We connect educational institutions and edtech organizations with qualified academic, technical, and administrative professionals. Our end-to-end recruitment support covers both traditional campus roles and emerging digital learning positions. From classroom teaching to online learning operations, our recruitment services strengthen institutional capacity and promote progressive, quality-driven learning environments.",
        sections: [
          {
            description: "We have implemented a range of technical solutions in the education sector, including projects for the University of Silicon Andhra, Andhra Pradesh, Environment Protection and Research media group.",
          },
        ],
      },
    },
    "retail": {
      title: "Retail",
      icon: ShoppingBag,
      image: industryIT,
      content: {
        intro: "Enabling Intelligent, Customer-Centric Commerce",
        sections: [
          {
            description: "Today's retail customers demand instant, personalised experiences across every channel. Anagha Soft helps retailers harness AI, analytics, and digital platforms to deliver omni-channel, data-driven customer journeys.",
          },
          {
            subtitle: "Key Focus Areas:",
            list: [
              "Omni-channel retail and e-commerce platforms",
              "AI-powered recommendation and pricing engines",
              "Supply chain visibility and automation",
              "Data analytics for consumer insights and inventory optimisation",
              "Customer engagement and loyalty applications",
            ],
          },
          {
            subtitle: "Impact:",
            list: [
              "Increased sales through personalised engagement",
              "Improved inventory and fulfilment accuracy",
              "Enhanced operational agility and customer satisfaction",
            ],
          },
        ],
      },
    },
    "public-services": {
      title: "Public Services",
      icon: Building2,
      image: industryPublicServices,
      content: {
        intro: "",
        sections: [
          {
            subtitle: "Digital Governance Solutions",
            description: "A nation's progress is measured by the efficiency of the government policies and their execution, along with citizen participation. Anagha places citizen-centric government operations at front and centre of its Digital Governance Solutions. By modernizing digital platforms and enhancing service delivery processes, Anagha helps governments achieve greater accountability, improve efficiency, streamline workflows, and foster seamless interaction between authorities and citizens.",
            list: [
              "e-Governance application development and modernization",
              "Citizen service portals and grievance redressal systems",
              "Workflow automation for government departments",
              "Online document verification and digital signature integration",
            ],
          },
          {
            subtitle: "Smart City & Urban Solutions",
            description: "Urban solutions use technology like the Internet of Things (IoT), AI, and data analytics to create more efficient, sustainable, and livable urban environments. Anagha Softech offers Smart City and Urban Solutions that address challenges in areas like mobility, energy, public safety, and resource management by connecting infrastructure, improving services, and providing citizens with more convenience.",
            list: [
              "Integrated command and control systems (ICCC)",
              "Smart infrastructure monitoring and IoT integration",
              "Urban planning and resource management dashboards",
              "GIS-based mapping and spatial data services",
            ],
          },
          {
            description: "We have led the architecture, development, and implementation of digital transformation initiatives for vital government services, modernizing legacy systems with the latest technologies and best practices.",
          },
        ],
      },
    },
  };

  const industry = industryId ? industries[industryId] : null;

  if (!industry) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Industry Not Found</h1>
          <Link to="/">
            <Button variant="default">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = industry.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url(${industry.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 py-20">
          <Link to="/industries" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Industries</span>
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center shadow-glow">
                <IconComponent className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground">
                {industry.title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {industry.content.intro && (
              <div className="mb-12">
                {industry.content.intro.length < 100 ? (
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                    {industry.content.intro}
                  </h2>
                ) : (
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {industry.content.intro}
                  </p>
                )}
              </div>
            )}

            {industry.content.sections && industry.content.sections.map((section, index) => (
              <div key={index} className="mb-12">
                {section.subtitle && (
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    {section.subtitle}
                  </h2>
                )}
                
                {section.description && (
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {section.description}
                  </p>
                )}

                {section.list && (
                  <ul className="space-y-3">
                    {section.list.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-lg text-muted-foreground leading-relaxed flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help you achieve your goals in the {industry.title.toLowerCase()} sector
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact">
                <Button variant="default" size="lg" className="shadow-elegant hover:shadow-glow">
                  Get in Touch
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="hover:bg-muted">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
