import { LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link = '/services' }: ServiceCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/20">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-soft">
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" />
      </div>
      
      <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">{description}</p>
      
      <Link to={link}>
        <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark font-semibold">
          {t('common.learnMore')} →
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCard;
