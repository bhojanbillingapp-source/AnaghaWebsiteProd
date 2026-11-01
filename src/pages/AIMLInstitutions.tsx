import { useEffect } from "react";
import heroImage from "@/assets/industry-education.webp";

const AIMLInstitutions = () => {
  useEffect(() => {
    document.title = "AI & ML Solutions for Institutions | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "B2B AI & ML solutions for institutions and universities. Academic partnerships, intelligent learning platforms, and educational technology solutions.";
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
              AI & ML Solutions for Institutions
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              B2B Academic Partnerships - Transform education with AI-powered learning platforms and intelligent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Institutions / Universities (B2B Academic Partnerships)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Anagha Softech establishes valuable academic partnerships that foster collaboration between institutions and universities. These alliances empower higher education organizations to enhance curriculum delivery, streamline administrative processes, and access custom tech solutions for driving educational impact. We aim to integrate industry-relevant AI education within universities and colleges through curriculum partnerships, faculty enablement, and student training.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Initiatives</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI Curriculum Integration</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Co-develop undergraduate and postgraduate AI modules (e.g., Machine Learning, AI for Business, Generative AI).</li>
                    <li>• Offer credit-linked AI courses aligned with NEP/UGC standards (if in India).</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Faculty Development Programs (FDPs)</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Train faculty to deliver AI modules using industry tools and frameworks (e.g., Python, TensorFlow, LangChain).</li>
                    <li>• Certification pathways for faculty to become certified AI mentors.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Campus Innovation Labs</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Establish AI Innovation & Automation Labs on campus to support student projects, hackathons, and research.</li>
                    <li>• Provide cloud credits and tool access through industry partnerships.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMLInstitutions;

