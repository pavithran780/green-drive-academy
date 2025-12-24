import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FloatingButtons = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[hsl(142,70%,45%)] text-[hsl(0,0%,100%)] px-4 py-3 rounded-full shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105"
        aria-label={t('common.whatsapp')}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="hidden md:block font-semibold">{t('common.whatsapp')}</span>
      </a>
      
      <a
        href="tel:+919876543210"
        className="group flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105 animate-bounce-gentle"
        aria-label={t('common.callNow')}
      >
        <Phone className="w-6 h-6" />
        <span className="hidden md:block font-semibold">{t('common.callNow')}</span>
      </a>
    </div>
  );
};

export default FloatingButtons;
