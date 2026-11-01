import { useEffect } from "react";
import { BarChart3, Database, Zap, Brain } from "lucide-react";
import heroImage from "@/assets/hero-services.webp";

const DataAnalytics = () => {
  useEffect(() => {
    document.title = "Data & Analytics | Anagha Softech";
    const meta = document.querySelector('meta[name="description"]');
    const content = "Empower smarter decision-making with real-time insights, advanced analytics, and intelligent automation. Transform data into strategic advantage.";
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
              Data & Analytics
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Empower smarter decision-making with real-time insights and intelligent automation
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Empower smarter decision-making with real-time insights, advanced analytics, and intelligent automation. Our Data & Analytics services help organizations harness the full value of their data, transforming raw information into actionable intelligence that drives growth, efficiency, and innovation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We bring together modern data platforms, AI/ML models, and automated workflows to enable predictive, prescriptive, and real-time analytics. From building scalable data architectures and integrating disparate data sources to deploying advanced dashboards, AI engines, and decision automation capabilities, we ensure your organization becomes truly data-driven.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach focuses on improving data quality, democratizing insights across teams, and embedding intelligence into everyday processes. Whether you're optimizing operations, enhancing customer experiences, detecting risks proactively, or uncovering new business opportunities, we help you translate data into strategic advantage.
            </p>

            {/* Key Capabilities */}
            <div className="mt-12 grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Database className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Data Architecture</h3>
                <p className="text-muted-foreground">
                  Design and build scalable data platforms that integrate, store, and process data efficiently.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <BarChart3 className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Advanced Analytics</h3>
                <p className="text-muted-foreground">
                  Deploy predictive and prescriptive analytics models to uncover insights and drive decisions.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Brain className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">AI/ML Solutions</h3>
                <p className="text-muted-foreground">
                  Build and deploy machine learning models for intelligent automation and decision support.
                </p>
              </div>

              <div className="p-6 bg-muted/30 rounded-lg border border-border/50">
                <Zap className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Real-Time Insights</h3>
                <p className="text-muted-foreground">
                  Create interactive dashboards and real-time analytics for instant decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataAnalytics;

