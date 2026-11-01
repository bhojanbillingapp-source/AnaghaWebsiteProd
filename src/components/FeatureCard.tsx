import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image?: string;
}

const FeatureCard = ({ icon: Icon, title, description, image }: FeatureCardProps) => {
  return (
    <div className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50 animate-fade-in overflow-hidden">
      {image && (
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      {!image && (
        <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:shadow-glow transition-shadow duration-300">
          <Icon className="w-7 h-7 text-accent-foreground" />
        </div>
      )}
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
