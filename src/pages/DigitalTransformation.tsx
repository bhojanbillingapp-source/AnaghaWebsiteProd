import { useEffect } from "react";
import { TrendingUp, Users, Cloud, Brain } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const DigitalTransformation = () => {
  useEffect(() => {
    document.title = "Digital Transformation | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Unlock new business models, drive operational excellence, and elevate customer experiences through digital innovation and transformation.";
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
              Digital Transformation
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Unlock new business models, drive operational excellence, and elevate customer experiences
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unlock new business models, drive operational excellence, and elevate customer experiences through digital innovation. Our Digital Transformation services empower organizations to rethink how they operate, deliver value, and compete in a rapidly evolving digital world.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We help enterprises modernize their core systems, digitize customer journeys, and adopt cutting-edge technologies such as cloud, automation, data analytics, and AI. By combining strategic insight with hands-on execution, we enable businesses to transition seamlessly from legacy processes to agile, intelligent, and connected environments.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our holistic transformation approach focuses on people, processes, and platforms, ensuring that technology investments translate into measurable business outcomes. Whether reimagining workflows, creating omni-channel experiences, leveraging predictive insights, or introducing new digital business models, we partner with clients to accelerate innovation and build sustainable competitive advantage.
            </p>

            {/* Key Capabilities */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <TrendingUp className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Strategic Consulting</h3>
                <p className="text-muted-foreground">
                  Define transformation roadmaps aligned with business objectives and market opportunities.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Cloud className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Cloud Migration</h3>
                <p className="text-muted-foreground">
                  Seamlessly migrate legacy systems to modern cloud platforms for scalability and agility.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Users className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Customer Experience</h3>
                <p className="text-muted-foreground">
                  Design and implement omni-channel experiences that engage and delight customers.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Brain className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">AI & Automation</h3>
                <p className="text-muted-foreground">
                  Integrate AI and automation to streamline operations and enable intelligent decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;

