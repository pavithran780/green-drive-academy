import { Phone, MessageCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20 gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            {t('language') === 'ta' ? 'இன்றே உங்கள் பயணத்தை தொடங்குங்கள்' : 'Start Your Journey Today'}
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            {t('language') === 'ta' 
              ? 'எங்களை தொடர்பு கொண்டு உங்கள் கேள்விகளுக்கு பதில் பெறுங்கள்' 
              : 'Contact us now and get all your questions answered'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+919876543210">
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="w-full sm:w-auto gap-3 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <Phone className="w-5 h-5" />
                {t('common.callNow')}
              </Button>
            </a>
            
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
              <Button 
                size="xl" 
                className="w-full sm:w-auto gap-3 bg-coral text-coral-foreground hover:bg-coral/90 shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t('common.whatsapp')}
              </Button>
            </a>
            
            <Link to="/contact">
              <Button 
                variant="heroOutline" 
                size="xl" 
                className="w-full sm:w-auto gap-3 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20"
              >
                <FileText className="w-5 h-5" />
                {t('common.enquireNow')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
