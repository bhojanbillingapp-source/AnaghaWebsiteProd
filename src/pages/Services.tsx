import { useEffect } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import { Cloud, Brain, Users, Database, Code, TrendingUp, BarChart3, Settings, GitBranch } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const Services = () => {
  useEffect(() => {
    document.title = "IT Services & Solutions | AI Modernisation, Product Engineering, Staffing & ERP";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Explore Anagha Softech's core technology services: AI-led modernization, custom product engineering, enterprise staffing, and ERP solutions for sustainable business growth.";
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
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Comprehensive technology and workforce solutions designed to transform your business and drive organizational success
            </p>
          </div>
        </div>
      </section>

      {/* Engineering & Development Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Code className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Engineering & Development</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Build scalable, secure, and high-performing digital products with engineering excellence. From ideation to deployment, we enable organizations to innovate faster and deliver superior user experiences.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/services/product-engineering">
                <ServiceCard
                  icon={Code}
                  title="Product Engineering & Development"
                  description="Full lifecycle product development from ideation to deployment. Build scalable, secure, and high-performing digital products with engineering excellence."
                />
              </Link>
              <Link to="/services/digital-transformation">
                <ServiceCard
                  icon={TrendingUp}
                  title="Digital Transformation"
                  description="Unlock new business models, drive operational excellence, and elevate customer experiences through digital innovation."
                />
              </Link>
              <Link to="/services/data-analytics">
                <ServiceCard
                  icon={BarChart3}
                  title="Data & Analytics"
                  description="Empower smarter decision-making with real-time insights, advanced analytics, and intelligent automation."
                />
              </Link>
              <Link to="/services/automation-testing">
                <ServiceCard
                  icon={Settings}
                  title="Automation, Testing & Managed Services"
                  description="Ensure quality, stability, and scalability through intelligent automation, robust testing, and continuous optimization."
                />
              </Link>
              <Link to="/services/devops">
                <ServiceCard
                  icon={GitBranch}
                  title="DevOps"
                  description="Accelerate delivery, improve collaboration, and achieve continuous innovation with a unified DevOps approach."
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Cloud className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Cloud Services</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Transform your customer relationships with industry-leading CRM solutions. Our certified experts deliver end-to-end implementations that enhance sales productivity, improve customer engagement, and accelerate ROI.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/services/zoho-crm">
                <ServiceCard
                  icon={Cloud}
                  title="Zoho CRM"
                  description="Certified partner-led CRM implementations tailored to your sales workflows with automation, integrations, and post-deployment support."
                />
              </Link>
              <Link to="/services/salesforce">
                <ServiceCard
                  icon={Cloud}
                  title="Salesforce"
                  description="Empower organizations with Salesforce platform expertise. End-to-end solutions including consulting, implementation, custom development, and managed services."
                />
              </Link>
              <Link to="/services/microsoft-crm">
                <ServiceCard
                  icon={Cloud}
                  title="Microsoft CRM"
                  description="Unified Dynamics 365 CRM platform that connects customer data across channels, automates workflows, and delivers AI-driven insights for personalized engagement."
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AI & ML Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Brain className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI & ML Solutions</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              AI training is crucial for both individuals and organizations because it drives innovation and efficiency across industries, and improves decision-making through data analysis. Anagha Softech provides AI training to individuals, institutions and organizations that are committed to workplace development.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/services/ai-ml/institutions">
                <ServiceCard
                  icon={Brain}
                  title="Institutions / Universities"
                  description="B2B Academic Partnerships - Establish valuable partnerships that enhance curriculum delivery, streamline administrative processes, and integrate industry-relevant AI education."
                />
              </Link>
              <Link to="/services/ai-ml/students-professionals">
                <ServiceCard
                  icon={Brain}
                  title="Students & Professionals"
                  description="B2C Learning Pathways - Personalized learning experiences powered by AI. Empower individuals with hands-on AI skills to enhance employability and enable career transitions."
                />
              </Link>
              <Link to="/services/ai-ml/industry-upskilling">
                <ServiceCard
                  icon={Brain}
                  title="Industry Upskilling"
                  description="B2B Enterprise Solutions - Proven enterprise upskilling solutions with targeted programs, integrated platforms, and analytics to identify gaps and advance team capabilities."
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Staffing Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Users className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Staffing Solutions</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Connect with top talent across industries. From permanent placements to temporary staffing and contract-to-hire arrangements, we provide flexible engagement models that suit your project timelines and business requirements.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <Link to="/services/staffing/it-staffing">
                <ServiceCard
                  icon={Users}
                  title="IT Staffing"
                  description="Comprehensive IT staffing solutions including permanent, contract, contract-to-hire, executive hiring, and offshore/remote staffing. Expertise across Cloud, AI, Data Analytics, ERP, and Software Development."
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Services */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center mb-8">
              <Database className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">ERP Solutions</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
              Empower enterprises to achieve operational excellence with comprehensive ERP solutions. From strategic planning to support and optimization, we cover the full spectrum of ERP lifecycle to streamline workflows and drive business growth.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to="/services/erp/sap">
                <ServiceCard
                  icon={Database}
                  title="SAP"
                  description="SAP S/4HANA, Business One, and BTP solutions. Full spectrum services from consulting and implementation to customization, integration, and managed services."
                />
              </Link>
              <Link to="/services/erp/oracle">
                <ServiceCard
                  icon={Database}
                  title="Oracle"
                  description="Oracle Fusion Cloud and E-Business Suite solutions. Modernize finance, HR, procurement, and supply chain functions with scalable cloud ERP platforms."
                />
              </Link>
              <Link to="/services/erp/microsoft-dynamics">
                <ServiceCard
                  icon={Database}
                  title="Microsoft Dynamics"
                  description="Comprehensive ERP capabilities integrated with Microsoft ecosystem. Streamline business operations with seamless connectivity across your Microsoft infrastructure."
                />
              </Link>
              <Link to="/services/salesforce">
                <ServiceCard
                  icon={Database}
                  title="Salesforce"
                  description="Salesforce Sales Cloud solutions covering lead and opportunity management. Full spectrum services including territory management, forecasting, CPQ, and AI-powered Einstein Lead Scoring."
                />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-overlay">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Workforce?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Let's discuss how our services can help you achieve your organizational goals
            </p>
            <a href="/contact">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-11 px-8 shadow-card hover:shadow-card-hover duration-300">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
