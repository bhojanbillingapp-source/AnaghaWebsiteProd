import { useEffect } from "react";
import heroImage from "@/assets/industry-it.webp";

const ITStaffing = () => {
  useEffect(() => {
    document.title = "IT Staffing Solutions | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Expert IT staffing services by Anagha Softech. Connect with top IT talent for temporary, permanent, and contract-to-hire positions.";
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
              IT Staffing Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Connect with top IT talent for your technology needs. Expert staffing solutions for all your IT requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Permanent IT Staffing</h2>
              <p className="text-muted-foreground leading-relaxed">
                Finding the right long-term team members is essential for sustainable growth and technical excellence. Our permanent staffing approach is designed to connect businesses with professionals who contribute stability and strategic value year after year.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold">Anagha Softech offers the following services in permanent IT staffing:</p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Recruitment of qualified, full-time IT professionals</li>
                <li>• Expertise across domains like Cloud, AI, Data Analytics, ERP, and Software Development</li>
                <li>• Streamlined end-to-end hiring process</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Contract / Temporary IT Staffing</h2>
              <p className="text-muted-foreground leading-relaxed">
                In fast-moving industries, businesses often require specialized talent for focused assignments and critical phases. Our temporary staffing solutions enable organizations to respond confidently to shifting needs and capitalize on emerging opportunities.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Deploy skilled tech professionals for short-term or project needs</li>
                <li>• Scalable workforce models with quick turnaround</li>
                <li>• Payroll and compliance handled by Anagha Softech</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Contract-To-Hire</h2>
              <p className="text-muted-foreground leading-relaxed">
                A contract-to-hire isn't just a temporary position. It is often a fully functioning role designed to meet specific business needs, such as a product launch, tech update, or project push. We understand that these roles have clear deliverables, and hence we treat contract-to-hire positions as seriously as permanent positions.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Evaluate performance before permanent hiring</li>
                <li>• Reduces hiring risk and ensures cultural fit</li>
                <li>• Ideal for fast-growing or project-driven organizations</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Executive and Leadership Hiring</h2>
              <p className="text-muted-foreground leading-relaxed">
                Executive and leadership appointments shape the vision and future direction of any organization. Our vision is to earn the trust of Indian businesses as their first choice for executive searches, connecting companies with leaders who shape both immediate results and long-term progress.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Specialized recruitment for CTOs, HR, Project Heads, and Technology Leaders</li>
                <li>• Confidential, targeted headhunting</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Offshore and Remote Staffing</h2>
              <p className="text-muted-foreground leading-relaxed">
                The world is a global village, they say. Offshore and remote staffing makes this a reality for growing businesses. Our offshore and remote staffing solutions enable organizations to collaborate smoothly and leverage global expertise. Where talent means everything and distance means nothing.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-4">
                <li>• Build dedicated remote development or support teams</li>
                <li>• Cost-efficient offshore models</li>
                <li>• 24/7 operational continuity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITStaffing;

