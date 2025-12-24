import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from 'sonner';

const Contact = () => {
  const { t, language } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    preferredTime: '',
    message: '',
  });

  const serviceTypes = [
    { value: 'driving', label: language === 'ta' ? 'ஓட்டுநர் பயிற்சி' : 'Driving Course' },
    { value: 'licence', label: language === 'ta' ? 'உரிம சேவைகள்' : 'Licence Services' },
    { value: 'rc', label: language === 'ta' ? 'RC & ஆவணங்கள்' : 'RC & Paperwork' },
    { value: 'other', label: language === 'ta' ? 'மற்றவை' : 'Other' },
  ];

  const preferredTimes = [
    { value: 'morning', label: language === 'ta' ? 'காலை (6-10 AM)' : 'Morning (6-10 AM)' },
    { value: 'midday', label: language === 'ta' ? 'மதியம் (10 AM-2 PM)' : 'Midday (10 AM-2 PM)' },
    { value: 'afternoon', label: language === 'ta' ? 'பிற்பகல் (2-6 PM)' : 'Afternoon (2-6 PM)' },
    { value: 'evening', label: language === 'ta' ? 'மாலை (6-8 PM)' : 'Evening (6-8 PM)' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast.error(language === 'ta' ? 'பெயர் மற்றும் தொலைபேசி எண் தேவை' : 'Name and phone number are required');
      return;
    }

    if (formData.phone.length < 10) {
      toast.error(language === 'ta' ? 'சரியான தொலைபேசி எண்ணை உள்ளிடவும்' : 'Please enter a valid phone number');
      return;
    }

    // Simulate form submission
    setIsSubmitted(true);
    toast.success(t('contact.thankYou'));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen gradient-hero flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center bg-card rounded-2xl p-8 shadow-elevated">
            <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'ta' ? 'நன்றி!' : 'Thank You!'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t('contact.thankYou')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+919876543210">
                <Button variant="default" className="w-full sm:w-auto gap-2">
                  <Phone className="w-4 h-4" />
                  {t('common.callNow')}
                </Button>
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                <Button variant="whatsapp" className="w-full sm:w-auto gap-2">
                  <MessageCircle className="w-4 h-4" />
                  {t('common.whatsapp')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ta' 
                ? 'எங்களை தொடர்பு கொள்ள எளிதான வழிகள்' 
                : 'Easy ways to reach us'}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {t('contact.getInTouch')}
              </h2>
              
              <div className="space-y-6">
                <a 
                  href="tel:+919876543210" 
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contact.phone')}</h3>
                    <p className="text-primary text-lg font-medium">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">+91 87654 32109</p>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-success/30 hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-success flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-success-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <p className="text-success text-lg font-medium">+91 98765 43210</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'ta' ? 'உடனடி பதில்' : 'Quick response'}
                    </p>
                  </div>
                </a>
                
                <a 
                  href="mailto:info@salemdriving.com"
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-card transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contact.email')}</h3>
                    <p className="text-foreground">info@salemdriving.com</p>
                  </div>
                </a>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center shadow-soft">
                    <MapPin className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t('contact.address')}</h3>
                    <p className="text-muted-foreground">
                      123, Main Road, Near Bus Stand,<br />
                      Salem - 636001, Tamil Nadu
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shadow-soft">
                    <Clock className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {language === 'ta' ? 'வேலை நேரம்' : 'Working Hours'}
                    </h3>
                    <p className="text-muted-foreground">
                      {language === 'ta' ? 'திங்கள் - சனி: காலை 6 - இரவு 8' : 'Mon - Sat: 6 AM - 8 PM'}<br />
                      {language === 'ta' ? 'ஞாயிறு: காலை 7 - பகல் 1' : 'Sunday: 7 AM - 1 PM'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">
                    {language === 'ta' ? 'Google Map இங்கே' : 'Google Map Here'}
                  </p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div>
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {t('contact.enquiryForm')}
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.name')} *
                    </label>
                    <Input
                      type="text"
                      placeholder={language === 'ta' ? 'உங்கள் பெயர்' : 'Enter your name'}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.phoneNumber')} *
                    </label>
                    <Input
                      type="tel"
                      placeholder="9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.emailOptional')}
                    </label>
                    <Input
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.serviceType')}
                    </label>
                    <Select 
                      value={formData.serviceType}
                      onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={language === 'ta' ? 'சேவையை தேர்ந்தெடுக்கவும்' : 'Select a service'} />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {language === 'ta' ? 'தொடர்பு கொள்ள விரும்பும் நேரம்' : 'Preferred Contact Time'}
                    </label>
                    <Select 
                      value={formData.preferredTime}
                      onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder={language === 'ta' ? 'நேரத்தை தேர்ந்தெடுக்கவும்' : 'Select preferred time'} />
                      </SelectTrigger>
                      <SelectContent>
                        {preferredTimes.map((time) => (
                          <SelectItem key={time.value} value={time.value}>
                            {time.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.message')}
                    </label>
                    <Textarea
                      placeholder={language === 'ta' ? 'உங்கள் செய்தி...' : 'Your message...'}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" variant="accent" size="lg" className="w-full gap-2">
                    <Send className="w-5 h-5" />
                    {t('contact.submit')}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
