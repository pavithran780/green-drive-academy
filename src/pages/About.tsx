import { Shield, Award, Users, Car, CheckCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import CTASection from '@/components/CTASection';

const About = () => {
  const { t, language } = useLanguage();

  const instructors = [
    {
      name: language === 'ta' ? 'முருகன் சுப்பிரமணியன்' : 'Murugan Subramanian',
      experience: '18 years',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம்' : 'Tamil, English',
      speciality: language === 'ta' ? 'பயமுள்ள ஆரம்பகர்கள் மற்றும் பெண்கள்' : 'Nervous beginners & women learners',
    },
    {
      name: language === 'ta' ? 'செல்வராஜ் கணேஷ்' : 'Selvaraj Ganesh',
      experience: '12 years',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம், ஹிந்தி' : 'Tamil, English, Hindi',
      speciality: language === 'ta' ? 'RTO தேர்வு தயாரிப்பு' : 'RTO test preparation',
    },
    {
      name: language === 'ta' ? 'பிரகாஷ் குமார்' : 'Prakash Kumar',
      experience: '10 years',
      languages: language === 'ta' ? 'தமிழ், ஆங்கிலம்' : 'Tamil, English',
      speciality: language === 'ta' ? 'நகர போக்குவரத்து & நெடுஞ்சாலை பயிற்சி' : 'City traffic & highway training',
    },
  ];

  const vehicleFeatures = [
    language === 'ta' ? 'இரட்டை கட்டுப்பாட்டு அமைப்பு' : 'Dual-control system',
    language === 'ta' ? 'ABS பிரேக்குகள்' : 'ABS brakes',
    language === 'ta' ? 'ஏர்பேக்குகள்' : 'Airbags',
    language === 'ta' ? 'முழு காப்பீடு' : 'Full insurance',
    language === 'ta' ? 'தொடர்ந்த பராமரிப்பு' : 'Regular maintenance',
    language === 'ta' ? 'ஏர் கண்டிஷனர்' : 'Air conditioning',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ta' 
                ? '2008 முதல் சேலத்தில் நம்பகமான ஓட்டுநர் கல்வி' 
                : 'Trusted driver education in Salem since 2008'}
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t('about.story')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.storyText')}
              </p>
              
              <h3 className="text-xl font-bold text-foreground mb-3">
                {t('about.mission')}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 md:p-12">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                    <p className="text-sm text-muted-foreground">{language === 'ta' ? 'ஆண்டுகள்' : 'Years'}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
                    <p className="text-sm text-muted-foreground">{language === 'ta' ? 'மாணவர்கள்' : 'Students'}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">95%</div>
                    <p className="text-sm text-muted-foreground">{language === 'ta' ? 'தேர்ச்சி' : 'Pass Rate'}</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8</div>
                    <p className="text-sm text-muted-foreground">{language === 'ta' ? 'வாகனங்கள்' : 'Vehicles'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('about.instructors')}
            </h2>
            <p className="text-muted-foreground">
              {language === 'ta' 
                ? 'அனுபவமிக்க மற்றும் பொறுமையான பயிற்சியாளர்கள்' 
                : 'Experienced and patient instructors'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mb-4 shadow-soft">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2">{instructor.name}</h3>
                
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Award className="w-4 h-4 text-primary" />
                    {instructor.experience} {language === 'ta' ? 'அனுபவம்' : 'experience'}
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    {instructor.languages}
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <Shield className="w-4 h-4 text-primary" />
                    {instructor.speciality}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 flex items-center justify-center aspect-video">
                <Car className="w-32 h-32 text-primary/50" />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                {t('about.vehicles')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('about.vehiclesText')}
              </p>
              
              <div className="grid grid-cols-2 gap-3">
                {vehicleFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default About;
