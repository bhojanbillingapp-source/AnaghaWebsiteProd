import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/log3.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openIndustry, setOpenIndustry] = useState<string | null>(null);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  // Close dropdowns when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsIndustriesOpen(false);
    setOpenCategory(null);
    setOpenIndustry(null);
    setHoveredDropdown(null);
  }, [location.pathname]);

  const navItems = [
    { name: "Who we are", path: "/about" },
    { name: "What we do", path: "/services", hasDropdown: true, type: "services" },
    { name: "Industries", path: "/industries", hasDropdown: true, type: "industries" },
    { name: "Clients", path: "/clients" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const universalDescription = "We partner with you to build resilient, future-ready organizations that thrive in complexity, embrace innovation, and turn challenges into opportunities for sustainable growth.";

  const servicesCategories = [
    {
      name: "Engineering & Development",
      items: [
        { name: "Product Engineering & Development", path: "/services/product-engineering", description: "Build scalable, secure, and high-performing digital products with engineering excellence" },
        { name: "Digital Transformation", path: "/services/digital-transformation", description: "Unlock new business models and drive operational excellence through digital innovation" },
        { name: "Data & Analytics", path: "/services/data-analytics", description: "Empower smarter decision-making with real-time insights and intelligent automation" },
        { name: "Automation, Testing & Managed Services", path: "/services/automation-testing", description: "Ensure quality, stability, and scalability through intelligent automation" },
        { name: "DevOps", path: "/services/devops", description: "Accelerate delivery and achieve continuous innovation with unified DevOps approach" },
      ],
    },
    {
      name: "Cloud",
      items: [
        { name: "Zoho CRM", path: "/services/zoho-crm", description: "Comprehensive CRM for growing businesses" },
        { name: "Salesforce", path: "/services/salesforce", description: "World's #1 CRM platform" },
        { name: "Microsoft CRM", path: "/services/microsoft-crm", description: "Integrated business applications" },
      ],
    },
    {
      name: "AI & ML",
      items: [
        { name: "AI-led Modernization", path: "/services/ai-ml/ai-led-modernization", description: "Transform today, lead tomorrow with AI-driven modernization frameworks" },
        { name: "Vibe Coding as a Service", path: "/services/ai-ml/vibe-coding", description: "AI-assisted development with collaborative workspaces and continuous feedback" },
        { name: "AI Training", path: "", description: "", isHeader: true },
        { name: "Institutions & Universities", path: "/services/ai-ml/institutions", description: "B2B Academic Partnerships for educational excellence", group: "AI Training" },
        { name: "Students & Professionals", path: "/services/ai-ml/students-professionals", description: "B2C Learning Pathways for career growth", group: "AI Training" },
        { name: "Industry Upskilling", path: "/services/ai-ml/industry-upskilling", description: "B2B Enterprise Solutions for workforce transformation", group: "AI Training" },
      ],
    },
    {
      name: "Staffing",
      items: [
        { name: "IT Staffing", path: "/services/staffing/it-staffing", description: "Technology professionals and specialists" },
      ],
    },
    {
      name: "ERP",
      items: [
        { name: "SAP", path: "/services/erp/sap", description: "Industry-leading ERP solutions" },
        { name: "Oracle", path: "/services/erp/oracle", description: "Comprehensive business management" },
        { name: "Microsoft Dynamics", path: "/services/erp/microsoft-dynamics", description: "Integrated business applications" },
      ],
    },
  ];

  const industriesData = [
    {
      name: "Information Technology",
      slug: "information-technology",
      description: "Building secure, scalable, and intelligent solutions through software development, cybersecurity, and cloud computing. Empowering the IT ecosystem with cutting-edge technologies.",
      details: [
        "Software Development & Digital Transformation",
        "Cybersecurity Solutions",
        "Cloud Infrastructure & Optimization",
        "Technology Workforce Solutions"
      ]
    },
    {
      name: "Healthcare",
      slug: "healthcare",
      description: "Enabling digital health and scientific discovery through AI-driven medical imaging, clinical data management, and compliance frameworks.",
      details: [
        "Digital Health Platforms & Telemedicine",
        "AI-Driven Medical Imaging",
        "Clinical Data Management",
        "R&D Informatics & Laboratory Automation"
      ]
    },
    {
      name: "BFSI Banking",
      slug: "banking",
      description: "Empowering banks, insurers, and fintechs with secure, intelligent, and personalised experiences powered by AI, data, and automation.",
      details: [
        "Core Banking & Legacy Modernisation",
        "Intelligent Risk & Compliance Analytics",
        "AI-Based Credit Decisioning",
        "Digital Onboarding Platforms"
      ]
    },
    {
      name: "Retail",
      slug: "retail",
      description: "Enabling intelligent, customer-centric commerce through omni-channel platforms, AI-powered recommendations, and supply chain automation.",
      details: [
        "Omni-Channel Retail & E-Commerce",
        "AI-Powered Recommendation Engines",
        "Supply Chain Visibility & Automation",
        "Customer Engagement & Loyalty"
      ]
    },
    {
      name: "Manufacturing",
      slug: "manufacturing",
      description: "Driving end-to-end transformation with IoT, analytics, and automation to enable intelligent manufacturing ecosystems.",
      details: [
        "Smart Factory & IoT Integration",
        "Predictive Maintenance & Quality Analytics",
        "ERP & MES Modernisation",
        "Supply Chain Digitalisation"
      ]
    },
    {
      name: "Education",
      slug: "education",
      description: "Connecting educational institutions with qualified professionals and implementing technical solutions for progressive learning environments.",
      details: [
        "Academic & Technical Staffing",
        "EdTech Implementation",
        "Digital Learning Platforms",
        "Institutional Development"
      ]
    },
    {
      name: "Public Services",
      slug: "public-services",
      description: "Digital governance solutions and smart city initiatives that enhance citizen services and urban sustainability.",
      details: [
        "Digital Governance Solutions",
        "Smart City & Urban Solutions",
        "E-Governance Platforms",
        "Citizen Service Portals"
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className="sticky top-0 z-50 bg-background/98 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20 relative">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-opacity hover:opacity-80">
            <img src={logo} alt="ANAGHA SOFTECH" className="h-24" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer group relative"
                    onMouseEnter={() => {
                      if (closeTimerRef.current) {
                        clearTimeout(closeTimerRef.current);
                        closeTimerRef.current = null;
                      }
                      setHoveredDropdown(item.type || "");
                      if (item.type === "services") {
                        setOpenCategory(servicesCategories[0].name);
                      } else if (item.type === "industries") {
                        setOpenIndustry(industriesData[0].name);
                      }
                    }}
                    onMouseLeave={() => {
                      // Delay closing to allow moving to dropdown
                      closeTimerRef.current = setTimeout(() => {
                        setHoveredDropdown(null);
                      }, 200);
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`text-base font-medium tracking-wide transition-colors hover:text-primary ${
                        isActive(item.path) || location.pathname.startsWith(item.path)
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                      onClick={() => {
                        setHoveredDropdown(null);
                        setOpenCategory(null);
                        setOpenIndustry(null);
                      }}
                    >
                      {item.name}
                    </Link>
                    <ChevronDown className="w-4 h-4 text-foreground group-hover:text-primary transition-colors" />
                    
                    {/* Invisible bridge to prevent gap between menu and dropdown */}
                    <div
                      className="absolute left-0 right-0 top-full h-2 bg-transparent"
                      onMouseEnter={() => {
                        if (closeTimerRef.current) {
                          clearTimeout(closeTimerRef.current);
                          closeTimerRef.current = null;
                        }
                        setHoveredDropdown(item.type || "");
                      }}
                    />
                    
                    {/* Full-width TCS-style Dropdown Panel */}
                    <div
                      className={`fixed left-0 right-0 top-20 bg-background border-b border-border/50 shadow-2xl z-50 transition-all duration-300 ${
                        hoveredDropdown === item.type ? "visible opacity-100 translate-y-0" : "invisible opacity-0 translate-y-2 pointer-events-none"
                      }`}
                      onMouseEnter={() => {
                        if (closeTimerRef.current) {
                          clearTimeout(closeTimerRef.current);
                          closeTimerRef.current = null;
                        }
                        setHoveredDropdown(item.type || "");
                        if (item.type === "services") {
                          setOpenCategory(servicesCategories[0].name);
                        } else if (item.type === "industries") {
                          setOpenIndustry(industriesData[0].name);
                        }
                      }}
                      onMouseLeave={() => {
                        setHoveredDropdown(null);
                      }}
                    >
                      <div className="container mx-auto px-6 py-12">
                        <div className="max-w-7xl mx-auto">
                          {item.type === "services" ? (
                            <div className="grid grid-cols-12 gap-12">
                              {/* Left Column - Description */}
                              <div className="col-span-4 pr-8 border-r border-border/30">
                                <h2 className="text-2xl font-bold text-foreground mb-6 leading-tight">
                                  Trust Transformation Agility
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                                  {universalDescription}
                                </p>
                                <Link 
                                  to="/services"
                                  onClick={() => {
                                    setHoveredDropdown(null);
                                    setOpenCategory(null);
                                  }}
                                >
                                  <Button variant="outline" size="lg" className="group/btn">
                                    Explore All Services
                                    <span className="ml-2 transition-transform group-hover/btn:translate-x-1">→</span>
                                  </Button>
                                </Link>
                              </div>

                              {/* Middle Column - Main Categories */}
                              <div className="col-span-2">
                                <div className="space-y-1">
                                  {servicesCategories.map((category) => (
                                    <div
                                      key={category.name}
                                      className={`px-4 py-4 rounded-md cursor-pointer transition-all border-l-2 ${
                                        openCategory === category.name
                                          ? "bg-muted/50 border-primary text-primary"
                                          : "border-transparent text-foreground hover:bg-muted/30 hover:border-border"
                                      }`}
                                      onMouseEnter={() => setOpenCategory(category.name)}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-lg font-semibold">{category.name}</span>
                                        <ChevronDown className="w-5 h-5 -rotate-90" />
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Right Columns - Submenu Items */}
                              <div className="col-span-6">
                                {servicesCategories.map((category) => (
                                  <div
                                    key={category.name}
                                    className={`transition-opacity duration-200 ${
                                      openCategory === category.name ? "opacity-100" : "opacity-0 hidden"
                                    }`}
                                  >
                                    <div className="space-y-6">
                                      {(() => {
                                        const groupedItems: { [key: string]: Array<{ name: string; path: string; description: string }> } = {};
                                        
                                        category.items.forEach((item) => {
                                          if (item.isHeader) {
                                            // Skip header items - they're just markers
                                            return;
                                          } else if (item.group) {
                                            // Add to the specified group
                                            if (!groupedItems[item.group]) {
                                              groupedItems[item.group] = [];
                                            }
                                            groupedItems[item.group].push({
                                              name: item.name,
                                              path: item.path,
                                              description: item.description
                                            });
                                          } else {
                                            // Add to ungrouped items
                                            if (!groupedItems['']) {
                                              groupedItems[''] = [];
                                            }
                                            groupedItems[''].push({
                                              name: item.name,
                                              path: item.path,
                                              description: item.description
                                            });
                                          }
                                        });

                                        // Find header names from items
                                        const headerNames = new Set<string>();
                                        category.items.forEach((item) => {
                                          if (item.isHeader) {
                                            headerNames.add(item.name);
                                          }
                                        });

                                        return Object.entries(groupedItems).map(([groupName, items]) => (
                                          <div key={groupName || 'ungrouped'}>
                                            {groupName && headerNames.has(groupName) && (
                                              <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide">
                                                {groupName}
                                              </h4>
                                            )}
                                            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                                              {items.map((subItem) => (
                                                <Link
                                                  key={subItem.path}
                                                  to={subItem.path}
                                                  className="group/link block p-3 rounded-md hover:bg-muted/30 transition-colors"
                                                  onClick={() => {
                                                    setHoveredDropdown(null);
                                                    setOpenCategory(null);
                                                  }}
                                                >
                                                  <div className="text-base font-semibold text-foreground group-hover/link:text-primary transition-colors mb-1">
                                                    {subItem.name}
                                                  </div>
                                                  <div className="text-sm text-muted-foreground leading-relaxed">
                                                    {subItem.description}
                                                  </div>
                                                </Link>
                                              ))}
                                            </div>
                                          </div>
                                        ));
                                      })()}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-12 gap-12">
                              {/* Left Column - Industries Description */}
                              <div className="col-span-4 pr-8 border-r border-border/30">
                                <h2 className="text-2xl font-bold text-foreground mb-6 leading-tight">
                                  Industries We Empower
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                  Delivering specialized workforce solutions and cutting-edge technology across key sectors, transforming challenges into opportunities for growth and innovation.
                                </p>
                              </div>

                              {/* Middle Column - Industries List */}
                              <div className="col-span-3">
                                <div className="space-y-1">
                                  {industriesData.map((industry) => (
                                    <Link
                                      key={industry.name}
                                      to={`/industries/${industry.slug}`}
                                      className={`block px-4 py-4 rounded-md cursor-pointer transition-all border-l-2 ${
                                        openIndustry === industry.name
                                          ? "bg-muted/50 border-primary text-primary"
                                          : "border-transparent text-foreground hover:bg-muted/30 hover:border-border"
                                      }`}
                                      onMouseEnter={() => setOpenIndustry(industry.name)}
                                      onClick={() => {
                                        setHoveredDropdown(null);
                                        setOpenIndustry(null);
                                      }}
                                    >
                                      <div className="flex items-center justify-between">
                                        <span className="text-base font-semibold">{industry.name}</span>
                                        <ChevronDown className="w-5 h-5 -rotate-90" />
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Right Columns - Industry Details */}
                              <div className="col-span-5">
                                {industriesData.map((industry) => (
                                  <div
                                    key={industry.name}
                                    className={`transition-opacity duration-200 ${
                                      openIndustry === industry.name ? "opacity-100" : "opacity-0 hidden"
                                    }`}
                                  >
                                    <div className="p-4 bg-muted/20 rounded-lg border border-border/30">
                                      <h3 className="text-xl font-bold text-foreground mb-4">{industry.name}</h3>
                                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                                        {industry.description}
                                      </p>
                                      <div className="space-y-2">
                                        {industry.details.map((detail, idx) => (
                                          <div key={idx} className="flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                            <span className="text-sm text-foreground">{detail}</span>
                                          </div>
                                        ))}
                                      </div>
                                      <Link 
                                        to={`/industries/${industry.slug}`}
                                        className="inline-block mt-6"
                                        onClick={() => {
                                          setIsDropdownHovered(false);
                                          setOpenIndustry(null);
                                        }}
                                      >
                                        <Button variant="default" size="sm">
                                          Learn More
                                        </Button>
                                      </Link>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-base font-medium tracking-wide transition-colors hover:text-primary ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-foreground hover:bg-muted transition-colors z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        </div>
      </nav>
      
      {/* Mobile Navigation - Rendered outside nav for proper z-index */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 z-[55]"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          {/* Menu Content */}
          <div className="md:hidden fixed inset-y-0 left-0 right-0 top-20 bg-background z-[60] overflow-y-auto shadow-2xl">
            <div className="flex flex-col space-y-2 px-4 py-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <div 
                        className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:text-primary cursor-pointer transition-colors"
                        onClick={() => item.type === "services" ? setIsServicesOpen(!isServicesOpen) : setIsIndustriesOpen(!isIndustriesOpen)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown 
                          className={`w-5 h-5 transition-transform ${(item.type === "services" && isServicesOpen) || (item.type === "industries" && isIndustriesOpen) ? 'rotate-180' : ''}`}
                        />
                      </div>
                      {item.type === "services" && isServicesOpen && (
                        <div className="ml-4 space-y-2">
                          <Link
                            to="/services"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                            className={`block px-4 py-3 text-base transition-colors hover:text-primary rounded-md font-semibold ${
                              isActive("/services") && !location.pathname.startsWith("/services/")
                                ? "bg-muted text-primary"
                                : "text-foreground"
                            }`}
                          >
                            All Services
                          </Link>
                          {servicesCategories.map((category) => (
                            <div key={category.name} className="ml-2">
                              <div className="px-4 py-3 text-base font-semibold text-primary">
                                {category.name}
                              </div>
                              <div className="ml-4 space-y-1">
                                {category.items.map((subItem, index) => {
                                  // Skip header items in mobile menu
                                  if (subItem.isHeader) {
                                    return (
                                      <div key={`header-${index}`} className="px-4 py-2 text-sm font-bold text-primary uppercase tracking-wide">
                                        {subItem.name}
                                      </div>
                                    );
                                  }
                                  return (
                                    <Link
                                      key={subItem.path}
                                      to={subItem.path}
                                      onClick={() => {
                                        setIsMenuOpen(false);
                                        setIsServicesOpen(false);
                                      }}
                                      className={`block px-4 py-3 text-base transition-colors hover:text-primary rounded-md ${
                                        isActive(subItem.path)
                                          ? "bg-muted text-primary"
                                          : "text-foreground"
                                      }`}
                                    >
                                      {subItem.name}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                      {item.type === "industries" && isIndustriesOpen && (
                        <div className="ml-4 space-y-2">
                          <Link
                            to="/industries"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsIndustriesOpen(false);
                            }}
                            className="block px-4 py-3 text-base transition-colors hover:text-primary rounded-md font-semibold text-foreground"
                          >
                            All Industries
                          </Link>
                          {industriesData.map((industry) => (
                            <Link
                              key={industry.slug}
                              to={`/industries/${industry.slug}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsIndustriesOpen(false);
                              }}
                              className={`block px-4 py-3 text-base transition-colors hover:text-primary rounded-md ${
                                isActive(`/industries/${industry.slug}`)
                                  ? "bg-muted text-primary"
                                  : "text-foreground"
                              }`}
                            >
                              {industry.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block text-base font-medium transition-colors hover:text-primary px-4 py-3 rounded-md ${
                        isActive(item.path)
                          ? "bg-muted text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
