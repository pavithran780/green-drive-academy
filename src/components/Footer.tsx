import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/stories', label: t('nav.stories') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/alumni', label: t('nav.alumni') },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                <span className="font-bold text-xl">SD</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Salem Driving</h3>
                <p className="text-sm text-primary-foreground/70">Institute</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">{t('contact.title')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91 98765 43210</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@salemdriving.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@salemdriving.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>123, Main Road, Near Bus Stand, Salem - 636001, Tamil Nadu</span>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Working Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span>6 AM - 8 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>7 AM - 1 PM</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-primary-foreground/60">
              {t('footer.servingAreas')}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-sm text-primary-foreground/70">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
