import { useEffect } from "react";
import heroImage from "@/assets/feature-future.webp";

const AIMLStudents = () => {
  useEffect(() => {
    document.title = "AI & ML Learning for Students & Professionals | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "B2C Learning Pathways - AI-powered personalized learning solutions for students and professionals. Career development and skill enhancement platforms.";
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
              AI & ML Learning Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              B2C Learning Pathways - Personalized learning experiences powered by AI for students and professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Students & Professionals (B2C Learning Pathways)</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Anagha Softech creates personalized learning pathways for students and professionals seeking growth. Our objective is to empower individuals with hands-on AI skills to enhance employability and enable career transitions into data science, AI engineering, and automation roles. Not only that, our platform also connects learners to courses, certifications, and mentorship opportunities tailored to individual career goals and skill levels.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Key Initiatives</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Modular Learning Tracks</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Offer structured, level-based programs: AI Foundations → Applied AI → Agentic AI → Industry Projects.</li>
                    <li>• Self-paced and mentor-led formats.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">AI Career Accelerator Program</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• A 6-month guided program that combines learning, mentorship, and capstone projects.</li>
                    <li>• Includes portfolio development and interview preparation.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Certifications & Badging</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Industry-recognized micro-certifications (AI Essentials, AI Workflow Developer, AI Agent Builder).</li>
                    <li>• Integration with LinkedIn and job platforms.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Community & Events</h3>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li>• Regular hackathons, live workshops, and alumni mentoring circles.</li>
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

export default AIMLStudents;

