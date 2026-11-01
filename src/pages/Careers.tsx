import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Clock, Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import heroImage from "@/assets/hero-careers.webp";
import { getJobs, type JobPost } from "@/data/jobs";
import JobApplicationForm from "@/components/JobApplicationForm";

const Careers = () => {
  const [openPositions, setOpenPositions] = useState<JobPost[]>([]);
  const [selectedJob, setSelectedJob] = useState<JobPost | null>(null);
  const [isApplicationDialogOpen, setIsApplicationDialogOpen] = useState(false);

  useEffect(() => {
    // Load jobs from data source
    setOpenPositions(getJobs());
  }, []);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Continuous learning opportunities and clear career progression paths",
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with talented professionals in a supportive team environment",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements and generous leave policies",
    },
  ];

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
              Join Our Team
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Shape the future of workforce solutions. Help organizations and individuals thrive in the AI-driven world.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting opportunities to grow your career with ANAGHA
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position) => (
              <Card
                key={position.id}
                className="group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              >
                <CardHeader>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {position.location}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {position.type}
                        </Badge>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {position.department}
                        </Badge>
                      </div>
                    </div>
                    <Button 
                      variant="cta" 
                      className="whitespace-nowrap"
                      onClick={() => {
                        setSelectedJob(position);
                        setIsApplicationDialogOpen(true);
                      }}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <CardDescription className="text-base">
                    {position.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join ANAGHA?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're building the future of HR and workforce management. Join a team that values innovation, growth, and impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-in"
              >
                <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
                  <benefit.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Dialog */}
      <Dialog open={isApplicationDialogOpen} onOpenChange={setIsApplicationDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Job Application</DialogTitle>
            <DialogDescription>
              Please fill in your details to apply for this position
            </DialogDescription>
          </DialogHeader>
          {selectedJob && (
            <JobApplicationForm
              jobTitle={selectedJob.title}
              jobId={selectedJob.id}
              onClose={() => {
                setIsApplicationDialogOpen(false);
                setSelectedJob(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Careers;
