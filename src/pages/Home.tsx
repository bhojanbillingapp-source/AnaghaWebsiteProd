import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Target, TrendingUp, Zap, Code, Heart, Landmark, Factory, GraduationCap, Building2, ShoppingBag, Brain, BarChart3, Settings, GitBranch, ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-home.webp";
import heroServices from "@/assets/hero-services.webp";
import featureComprehensive from "@/assets/feature-comprehensive.webp";
import featureFuture from "@/assets/feature-future.webp";
import featureScalable from "@/assets/feature-scalable.webp";
import workflowApproach from "@/assets/workflow-approach.webp";
import missionVision from "@/assets/mission-vision.webp";
import industryIT from "@/assets/industry-it.webp";
import industryHealthcare from "@/assets/industry-healthcare.webp";
import industryBanking from "@/assets/industry-banking.webp";
import industryManufacturing from "@/assets/industry-manufacturing.webp";
import industryEducation from "@/assets/industry-education.webp";
import industryPublicServices from "@/assets/industry-public-services.webp";
import serviceProductEngineering from "@/assets/service-product-engineering.webp";
import serviceDigitalTransformation from "@/assets/service-digital-transformation.webp";
import serviceAIModernization from "@/assets/service-ai-modernization.webp";
import serviceDataAnalytics from "@/assets/service-data-analytics.webp";
import serviceAutomationTesting from "@/assets/service-automation-testing.webp";
import serviceDevOps from "@/assets/service-devops.webp";

// Import client logos
import client1 from "@/assets/clients/2tripteo.webp";
import client2 from "@/assets/clients/8 millets.webp";
import client3 from "@/assets/clients/Adroit neo teach solutions.webp";
import client4 from "@/assets/clients/Alanis trading and co.webp";
import client5 from "@/assets/clients/Apollo cliinc.webp";
import client6 from "@/assets/clients/Apollo dialysis clinics.webp";
import client7 from "@/assets/clients/Apollo helath and hospitals.webp";
import client8 from "@/assets/clients/CREST.webp";
import client9 from "@/assets/clients/Deep sight labs.webp";
import client10 from "@/assets/clients/EPTRI.webp";
import client11 from "@/assets/clients/Holidays to compare.webp";
import client12 from "@/assets/clients/Homefoods.webp";
import client13 from "@/assets/clients/Idea entity.webp";
import client14 from "@/assets/clients/Indian American dental Hospital.webp";
import client15 from "@/assets/clients/JBA holding company.webp";
import client16 from "@/assets/clients/Mahatma gandhi cancer hospital & Research institute.webp";
import client17 from "@/assets/clients/Nightingale hospital.webp";
import client18 from "@/assets/clients/Organic OTC.webp";
import client19 from "@/assets/clients/Poojadtore.com.webp";
import client20 from "@/assets/clients/Raminfo.webp";
import client21 from "@/assets/clients/Rancher.webp";
import client22 from "@/assets/clients/SNR.webp";
import client23 from "@/assets/clients/Sattwa.webp";
import client24 from "@/assets/clients/Sunshine hospitals .webp";
import client25 from "@/assets/clients/University of silicon andhra.webp";
import client26 from "@/assets/clients/Yagya center.webp";
import client27 from "@/assets/clients/ZAVIS.webp";
import client28 from "@/assets/clients/auto products ltd.webp";
import client29 from "@/assets/clients/axiscurve.webp";
import client30 from "@/assets/clients/california and southern oregon.webp";
import client31 from "@/assets/clients/chippers tree services.webp";
import client32 from "@/assets/clients/coolflos engineers pvt ltd.webp";
import client33 from "@/assets/clients/gamebit ventures.webp";
import client34 from "@/assets/clients/grocerdeals.webp";
import client35 from "@/assets/clients/hazel.webp";
import client36 from "@/assets/clients/hebeon.webp";
import client37 from "@/assets/clients/ivis.webp";
import client38 from "@/assets/clients/one hour online.webp";
import client39 from "@/assets/clients/panther construction inc.webp";
import client40 from "@/assets/clients/research media group.webp";
import client41 from "@/assets/clients/revere.webp";
import client42 from "@/assets/clients/rup.webp";
import client43 from "@/assets/clients/sampradaya.webp";
import client44 from "@/assets/clients/silicon andhra.webp";
import client45 from "@/assets/clients/skills inventions.webp";
import client46 from "@/assets/clients/skin perfect.webp";
import client47 from "@/assets/clients/sunshine hospitals.webp";
import client48 from "@/assets/clients/taeon.webp";
import client49 from "@/assets/clients/tuskerIO.webp";

const Home = () => {
  const [hoveredIndustry, setHoveredIndustry] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "Anagha Softech | AI-led IT Services, Digital Transformation & Product Engineering";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Anagha Softech, a global IT and digital engineering company in Hyderabad, delivers innovative solutions across AI modernization, product engineering, workforce transformation, and enterprise automation.";
    if (meta) {
      meta.setAttribute("content", content);
    } else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = content;
      document.head.appendChild(m);
    }
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, []);

  const heroSlides = [
    {
      image: heroImage,
      tagline: "Trust. Transformation. Agility.",
      title: "Transform Today.",
      titleLine2: "Lead Tomorrow.",
      subtitle: "AI-led Modernization & Digital Engineering for Enterprises",
      description: "We help enterprises reimagine their business through intelligent digital transformation, product engineering excellence, and AI-powered innovation.",
      primaryCTA: "Start Your Transformation",
      primaryLink: "/contact",
      secondaryCTA: "Explore Our Services",
      secondaryLink: "/services",
    },
    {
      image: featureFuture,
      tagline: "Intelligence-Driven Solutions",
      title: "AI-led Modernization Services",
      subtitle: "Transform Legacy Systems into Intelligent Platforms",
      description: "Revitalize legacy systems, modernize platforms, and infuse AI into every layer of your business to achieve new levels of agility, resilience, and performance.",
      primaryCTA: "Know More",
      primaryLink: "/services/ai-ml/ai-led-modernization",
      secondaryCTA: "Learn More",
      secondaryLink: "/services",
    },
    {
      image: industryIT,
      tagline: "Engineering Excellence",
      title: "Product Engineering & Development",
      subtitle: "From Vision to Value, End-to-End Product Engineering",
      description: "Partner with us to design, engineer, and deliver intelligent, high-performance digital products that scale seamlessly and accelerate growth.",
      primaryCTA: "Build Your Product",
      primaryLink: "/services/product-engineering",
      secondaryCTA: "View All Services",
      secondaryLink: "/services",
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % 3);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + 3) % 3);
  };

  const clientLogos = [
    client1, client2, client3, client4, client5, client6, client7, client8, client9, client10,
    client11, client12, client13, client14, client15, client16, client17, client18, client19, client20,
    client21, client22, client23, client24, client25, client26, client27, client28, client29, client30,
    client31, client32, client33, client34, client35, client36, client37, client38, client39, client40,
    client41, client42, client43, client44, client45, client46, client47, client48, client49
  ];

  const industries = [
    {
      id: 0,
      slug: "information-technology",
      icon: Code,
      title: "Information Technology",
      snippet: "Building secure, scalable, and intelligent solutions through software development, cybersecurity, and cloud computing. Empowering the IT ecosystem with cutting-edge technologies.",
      image: industryIT,
    },
    {
      id: 1,
      slug: "healthcare",
      icon: Heart,
      title: "Healthcare",
      snippet: "Enabling digital health and scientific discovery through AI-driven medical imaging, clinical data management, and compliance frameworks.",
      image: industryHealthcare,
    },
    {
      id: 2,
      slug: "banking",
      icon: Landmark,
      title: "BFSI Banking",
      snippet: "Empowering banks, insurers, and fintechs with secure, intelligent, and personalised experiences powered by AI, data, and automation.",
      image: industryBanking,
    },
    {
      id: 3,
      slug: "retail",
      icon: ShoppingBag,
      title: "Retail",
      snippet: "Enabling intelligent, customer-centric commerce through omni-channel platforms, AI-powered recommendations, and supply chain automation.",
      image: industryIT,
    },
    {
      id: 4,
      slug: "manufacturing",
      icon: Factory,
      title: "Manufacturing",
      snippet: "Driving end-to-end transformation with IoT, analytics, and automation to enable intelligent manufacturing ecosystems.",
      image: industryManufacturing,
    },
    {
      id: 5,
      slug: "education",
      icon: GraduationCap,
      title: "Education",
      snippet: "Connecting educational institutions with qualified professionals and implementing technical solutions for progressive learning environments.",
      image: industryEducation,
    },
    {
      id: 6,
      slug: "public-services",
      icon: Building2,
      title: "Public Services",
      snippet: "Digital governance solutions and smart city initiatives that enhance citizen services and urban sustainability.",
      image: industryPublicServices,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Slide Images */}
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
        ))}
        
        {/* Slide Content */}
        <div className="relative container mx-auto px-6 py-20 md:py-32 w-full">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex items-center transition-opacity duration-1000 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="max-w-5xl mx-auto text-center w-full">
                <p className="text-lg md:text-xl text-primary-foreground/90 mb-4 font-semibold animate-fade-in">
                  {slide.tagline}
                </p>
                <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight tracking-tight animate-fade-in">
                  {slide.title}
                  {slide.titleLine2 && (
                    <>
                      <br />
                      {slide.titleLine2}
                    </>
                  )}
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in">
                  {slide.subtitle}
                </p>
                <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl mx-auto animate-fade-in">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
                  <Link to={slide.primaryLink}>
                    <Button variant="default" size="xl" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-elegant hover:shadow-glow animate-scale-in">
                      {slide.primaryCTA}
                    </Button>
                  </Link>
                  <Link to={slide.secondaryLink}>
                    <Button variant="outline" size="xl" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 animate-scale-in">
                      {slide.secondaryCTA}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-background transition-all duration-300 shadow-elegant hover:shadow-glow"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-background transition-all duration-300 shadow-elegant hover:shadow-glow"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-foreground" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-secondary w-8"
                  : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to modernize, transform, and scale your business
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <Link to="/services/product-engineering" className="group">
              <div className="relative h-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceProductEngineering} 
                    alt="Product Engineering"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-glow">
                      <Code className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Product Engineering & Development
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Build scalable, secure, and high-performing digital products with engineering excellence.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services/digital-transformation" className="group">
              <div className="relative h-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceDigitalTransformation} 
                    alt="Digital Transformation"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-glow">
                      <TrendingUp className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Digital Transformation
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Unlock new business models and drive operational excellence through digital innovation.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services/ai-ml/ai-led-modernization" className="group">
              <div className="relative h-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceAIModernization} 
                    alt="AI-led Modernization"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-glow">
                      <Brain className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    AI-led Modernization
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Transform legacy systems into intelligent, cloud-native platforms with AI-driven insights.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services/data-analytics" className="group">
              <div className="relative h-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceDataAnalytics} 
                    alt="Data & Analytics"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-glow">
                      <BarChart3 className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Data & Analytics
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Empower smarter decision-making with real-time insights and intelligent automation.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services/automation-testing" className="group">
              <div className="relative h-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceAutomationTesting} 
                    alt="Automation & Testing"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-glow">
                      <Settings className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    Automation & Testing
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ensure quality, stability, and scalability through intelligent automation and robust testing.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>

            <Link to="/services/devops" className="group">
              <div className="relative h-full rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 bg-card">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={serviceDevOps} 
                    alt="DevOps"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center shadow-glow">
                      <GitBranch className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    DevOps
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Accelerate delivery and achieve continuous innovation with a unified DevOps approach.
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:translate-x-2 transition-transform">
                    Learn more <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="hover:bg-muted">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Anagha Softech Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Anagha Softech?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine engineering excellence, AI-led innovation, and deep industry expertise to deliver measurable business outcomes
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={Target}
              title="Engineering Excellence"
              description="Proven product engineering DNA across enterprise and consumer markets. We deliver scalable, secure, and high-performing digital products."
              image={featureComprehensive}
            />
            <FeatureCard
              icon={Brain}
              title="AI-Led Innovation"
              description="Transform legacy systems and drive modernization with AI-driven insights, automation, and intelligent solutions."
              image={featureFuture}
            />
            <FeatureCard
              icon={Zap}
              title="Global Delivery"
              description="Local expertise with global reach. Delivery teams across India, Middle East, North America, and Europe."
              image={featureScalable}
            />
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Industries We Empower
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering specialized workforce solutions and cutting-edge technology across key sectors
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Industry Image */}
              <div className="relative h-full min-h-[500px] rounded-xl overflow-hidden shadow-elegant border border-border/30 animate-fade-in">
                {industries.map((industry, index) => (
                  <img
                    key={industry.id}
                    src={industry.image}
                    alt={industry.title}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                      hoveredIndustry === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>

              {/* Right side - Industry List */}
              <div className="space-y-4">
                {industries.map((industry, index) => {
                  const IconComponent = industry.icon;
                  return (
                    <Link
                      key={industry.id}
                      to={`/industries/${industry.slug}`}
                      onMouseEnter={() => setHoveredIndustry(index)}
                      className={`group p-6 rounded-lg border transition-all duration-300 cursor-pointer animate-fade-in block ${
                        hoveredIndustry === index
                          ? "bg-card border-primary/50 shadow-card-hover -translate-x-2"
                          : "bg-card/50 border-border/30 hover:bg-card hover:shadow-card"
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            hoveredIndustry === index
                              ? "bg-primary/20 shadow-glow"
                              : "bg-accent"
                          }`}
                        >
                          <IconComponent
                            className={`w-6 h-6 transition-colors duration-300 ${
                              hoveredIndustry === index ? "text-primary" : "text-accent-foreground"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                            {industry.title}
                          </h3>
                          <p
                            className={`text-muted-foreground text-sm leading-relaxed transition-all duration-300 ${
                              hoveredIndustry === index
                                ? "opacity-100 max-h-32"
                                : "opacity-0 max-h-0 overflow-hidden"
                            }`}
                          >
                            {industry.snippet}
                          </p>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-background border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 max-w-6xl mx-auto">
            <div className="text-center animate-scale-in">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">16+</div>
              <p className="text-base text-muted-foreground">Years of Industry Experience</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">50+</div>
              <p className="text-base text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">99%</div>
              <p className="text-base text-muted-foreground">Client Satisfaction</p>
            </div>
            <div className="text-center animate-scale-in">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">7</div>
              <p className="text-base text-muted-foreground">Industries Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logo Slider */}
      <section className="py-24 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're proud to partner with industry leaders across diverse sectors
            </p>
          </div>

          <div className="relative space-y-8">
            {/* Row 1 - Scrolls left to right */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
              
              <div className="flex gap-8 animate-scroll">
                {clientLogos.slice(0, 17).map((logo, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-36 h-20 flex items-center justify-center bg-card/30 rounded-lg border border-border/30 p-3 hover:bg-card hover:shadow-card transition-all duration-300"
                  >
                    <img 
                      src={logo}
                      alt={`Client ${index + 1}`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {clientLogos.slice(0, 17).map((logo, index) => (
                  <div 
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 w-36 h-20 flex items-center justify-center bg-card/30 rounded-lg border border-border/30 p-3 hover:bg-card hover:shadow-card transition-all duration-300"
                  >
                    <img 
                      src={logo}
                      alt={`Client ${index + 1}`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 2 - Scrolls right to left */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
              
              <div className="flex gap-8 animate-scroll-reverse">
                {clientLogos.slice(17, 33).map((logo, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-36 h-20 flex items-center justify-center bg-card/30 rounded-lg border border-border/30 p-3 hover:bg-card hover:shadow-card transition-all duration-300"
                  >
                    <img 
                      src={logo}
                      alt={`Client ${index + 18}`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {clientLogos.slice(17, 33).map((logo, index) => (
                  <div 
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 w-36 h-20 flex items-center justify-center bg-card/30 rounded-lg border border-border/30 p-3 hover:bg-card hover:shadow-card transition-all duration-300"
                  >
                    <img 
                      src={logo}
                      alt={`Client ${index + 18}`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Row 3 - Scrolls left to right */}
            <div className="relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
              
              <div className="flex gap-8 animate-scroll">
                {clientLogos.slice(33).map((logo, index) => (
                  <div 
                    key={index}
                    className="flex-shrink-0 w-36 h-20 flex items-center justify-center bg-card/30 rounded-lg border border-border/30 p-3 hover:bg-card hover:shadow-card transition-all duration-300"
                  >
                    <img 
                      src={logo}
                      alt={`Client ${index + 34}`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
                {/* Duplicate for seamless loop */}
                {clientLogos.slice(33).map((logo, index) => (
                  <div 
                    key={`duplicate-${index}`}
                    className="flex-shrink-0 w-36 h-20 flex items-center justify-center bg-card/30 rounded-lg border border-border/30 p-3 hover:bg-card hover:shadow-card transition-all duration-300"
                  >
                    <img 
                      src={logo}
                      alt={`Client ${index + 34}`}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="animate-fade-in order-2 md:order-1">
                <div className="rounded-xl overflow-hidden shadow-elegant border border-border/30 hover:shadow-glow transition-all duration-300">
                  <img 
                    src={missionVision} 
                    alt="Anagha Softech - Global IT Modernization and Digital Engineering"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              {/* Right side - Text */}
              <div className="animate-fade-in order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Anagha Softech is a Global IT Modernization and Digital Engineering company that helps enterprises reimagine their business through AI-led modernization, Digital Transformation, and intelligent product engineering.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Headquartered in Hyderabad, Telangana, we are a technology-driven, business-focused, and people-centric organization that blends data-driven strategies with human insight to deliver meaningful impact.
                </p>
                <div className="space-y-3 mb-8">
                  {[
                    "AI-led Modernization & Digital Transformation",
                    "Product Engineering & Development Excellence",
                    "Deep Industry Expertise Across 7 Sectors",
                    "Global Delivery with Local Agility"
                  ].map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                      <p className="text-muted-foreground">{point}</p>
                    </div>
                  ))}
                </div>
                <Link to="/about">
                  <Button variant="default" size="lg" className="shadow-elegant hover:shadow-glow">
                    Learn More About Us
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers consistent results
            </p>
          </div>

          {/* Workflow Image */}
          <div className="max-w-4xl mx-auto mb-16 animate-fade-in">
            <div className="rounded-lg overflow-hidden shadow-elegant border border-border/30">
              <img 
                src={workflowApproach} 
                alt="Our Workflow Approach"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
            <div className="relative animate-fade-in">
              <div className="bg-card p-8 rounded-lg border border-border/30 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Understand</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">We analyze your unique needs and organizational culture</p>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-card p-8 rounded-lg border border-border/30 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Strategize</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Develop customized solutions aligned with your goals</p>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-card p-8 rounded-lg border border-border/30 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Execute</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Implement with precision and attention to detail</p>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="bg-card p-8 rounded-lg border border-border/30 shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold mb-6">
                  4
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">Optimize</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">Continuously improve and measure outcomes</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-gradient-overlay relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        <div className="relative container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Partner with Anagha Softech to unlock the power of AI-led modernization, digital transformation, and intelligent product engineering. Let's build the future together.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/contact">
                <Button variant="default" size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-elegant hover:shadow-glow">
                  Start Your Transformation
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="hover:bg-muted border-2">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
