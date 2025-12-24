import { Car, Bike, FileCheck, FileText, Shield, Clock, Users, MapPin, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';

const Index = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      icon: Car,
      title: t('services.driving'),
      description: t('services.drivingDesc'),
    },
    {
      icon: Bike,
      title: t('services.twowheeler'),
      description: t('services.twowheelerDesc'),
    },
    {
      icon: FileCheck,
      title: t('services.licence'),
      description: t('services.licenceDesc'),
    },
    {
      icon: FileText,
      title: t('services.rc'),
      description: t('services.rcDesc'),
    },
  ];

  const whyChooseUs = [
    { icon: Award, text: t('why.experience') },
    { icon: CheckCircle, text: t('why.passRate') },
    { icon: Shield, text: t('why.safety') },
    { icon: Clock, text: t('why.flexible') },
    { icon: Users, text: t('why.friendly') },
    { icon: MapPin, text: t('why.pickup') },
  ];

  const testimonials = [
    {
      name: 'Priya S.',
      area: 'Hasthampatti, Salem',
      course: language === 'ta' ? 'ஆரம்ப கார் பயிற்சி' : 'Beginner Car Course',
      feedback: language === 'ta' 
        ? 'நான் மிகவும் பயந்து கொண்டிருந்தேன், ஆனால் பயிற்சியாளர் மிகவும் பொறுமையாக இருந்தார். இப்போது நான் நம்பிக்கையுடன் ஓட்டுகிறேன்!'
        : 'I was very nervous about driving, but the instructor was so patient. Now I drive with full confidence!',
    },
    {
      name: 'Kumar R.',
      area: 'Suramangalam, Salem',
      course: language === 'ta' ? 'நிரந்தர உரிமம்' : 'Permanent Licence',
      feedback: language === 'ta'
        ? 'RTO தேர்வுக்கு நன்றாக தயார் செய்தார்கள். முதல் முயற்சியிலேயே தேர்ச்சி பெற்றேன்!'
        : 'They prepared me very well for the RTO test. I passed on my first attempt!',
    },
    {
      name: 'Lakshmi M.',
      area: 'Fairlands, Salem',
      course: language === 'ta' ? 'RC புதுப்பித்தல்' : 'RC Renewal',
      feedback: language === 'ta'
        ? 'RC புதுப்பித்தல் வேலையை மிகவும் எளிதாக செய்தார்கள். எல்லா ஆவணங்களையும் அவர்களே கையாண்டார்கள்.'
        : 'RC renewal was made so easy. They handled all the paperwork themselves.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-warm-yellow rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-warm-yellow/20 text-warm-yellow-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in border border-warm-yellow/30">
              <CheckCircle className="w-4 h-4 text-warm-yellow" />
              <span>{language === 'ta' ? 'சேலத்தின் நம்பகமான டிரைவிங் நிறுவனம்' : 'Salem\'s Trusted Driving Institute'}</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <a href="tel:+919876543210">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  {t('common.callNow')} / {t('common.whatsapp')}
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  {t('common.bookDemo')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
            <path d="M0,60 C360,120 1080,0 1440,60 L1440,120 L0,120 Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground">
              {language === 'ta' 
                ? 'உங்கள் எல்லா ஓட்டுநர் மற்றும் வாகன தேவைகளுக்கும் ஒரே இடம்' 
                : 'Your one-stop solution for all driving and vehicle needs'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('why.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-4 md:p-6 text-center shadow-soft hover:shadow-card transition-all duration-300 border border-border"
              >
                <div className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('testimonials.title')}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/stories">
              <Button variant="outline" size="lg">
                {t('common.viewAll')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default Index;
