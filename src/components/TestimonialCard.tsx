import { Quote, Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  area: string;
  course: string;
  feedback: string;
  rating?: number;
}

const TestimonialCard = ({ name, area, course, feedback, rating = 5 }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border hover:shadow-elevated transition-all duration-300">
      <Quote className="w-10 h-10 text-primary/30 mb-4" />
      
      <p className="text-foreground/80 text-sm md:text-base leading-relaxed mb-6 italic">
        "{feedback}"
      </p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{area}</p>
          <p className="text-xs text-primary font-medium mt-1">{course}</p>
        </div>
        
        <div className="flex gap-0.5">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-accent text-accent" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
