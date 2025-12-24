import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/stories', label: t('nav.stories') },
    { to: '/contact', label: t('nav.contact') },
    { to: '/alumni', label: t('nav.alumni') },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-card/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-primary flex items-center justify-center shadow-soft">
              <span className="text-primary-foreground font-bold text-lg md:text-xl">SD</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-foreground text-sm md:text-base leading-tight">Salem Driving</h1>
              <p className="text-xs text-muted-foreground">Institute</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? 'bg-primary/10 text-primary'
                    : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            <LanguageToggle />
            
            <a href="tel:+919876543210" className="hidden md:flex">
              <Button variant="call" size="sm" className="gap-2">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{t('common.callNow')}</span>
              </Button>
            </a>
            
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hidden md:flex">
              <Button variant="whatsapp" size="sm" className="gap-2">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden xl:inline">{t('common.whatsapp')}</span>
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            
            <div className="flex gap-3 mt-4 pt-4 border-t border-border">
              <a href="tel:+919876543210" className="flex-1">
                <Button variant="call" className="w-full gap-2">
                  <Phone className="w-5 h-5" />
                  {t('common.callNow')}
                </Button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="whatsapp" className="w-full gap-2">
                  <MessageCircle className="w-5 h-5" />
                  {t('common.whatsapp')}
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
