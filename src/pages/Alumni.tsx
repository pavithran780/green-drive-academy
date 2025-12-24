import { Link } from 'react-router-dom';
import { Users, Award, Car, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import CTASection from '@/components/CTASection';

const Alumni = () => {
  const { t, language } = useLanguage();

  const stats = [
    { 
      icon: Users, 
      value: '10,000+', 
      label: language === 'ta' ? 'பயிற்சி பெற்ற மாணவர்கள்' : 'Students Trained' 
    },
    { 
      icon: Award, 
      value: '95%', 
      label: language === 'ta' ? 'தேர்ச்சி விகிதம்' : 'Pass Rate' 
    },
    { 
      icon: Car, 
      value: '15+', 
      label: language === 'ta' ? 'ஆண்டுகள் அனுபவம்' : 'Years Experience' 
    },
    { 
      icon: MapPin, 
      value: '50+', 
      label: language === 'ta' ? 'பகுதிகளுக்கு சேவை' : 'Areas Served' 
    },
  ];

  const successStories = [
    {
      name: 'Karthik S.',
      year: '2019',
      achievement: language === 'ta' 
        ? 'இப்போது Ola-வில் ஓட்டுநராக பணிபுரிகிறார்' 
        : 'Now working as an Ola driver',
      location: 'Salem City',
    },
    {
      name: 'Divya R.',
      year: '2020',
      achievement: language === 'ta' 
        ? 'அலுவலகத்திற்கு தினமும் கார் ஓட்டுகிறார்' 
        : 'Drives to office daily',
      location: 'Hasthampatti',
    },
    {
      name: 'Suresh M.',
      year: '2018',
      achievement: language === 'ta' 
        ? 'சொந்த டிரான்ஸ்போர்ட் வணிகம் நடத்துகிறார்' 
        : 'Runs own transport business',
      location: 'Ammapet',
    },
    {
      name: 'Priya K.',
      year: '2021',
      achievement: language === 'ta' 
        ? 'முதல் முயற்சியில் உரிமம் பெற்றார்' 
        : 'Got licence in first attempt',
      location: 'Fairlands',
    },
    {
      name: 'Mohan V.',
      year: '2017',
      achievement: language === 'ta' 
        ? 'டிரைவிங் இன்ஸ்ட்ரக்டராக மாறினார்' 
        : 'Became a driving instructor',
      location: 'Suramangalam',
    },
    {
      name: 'Lakshmi A.',
      year: '2022',
      achievement: language === 'ta' 
        ? 'பயமின்றி நகரத்தில் ஓட்டுகிறார்' 
        : 'Drives confidently in city traffic',
      location: 'Kondalampatti',
    },
  ];

  const areas = [
    'Salem City', 'Hasthampatti', 'Suramangalam', 'Ammapet', 'Fairlands', 
    'Kondalampatti', 'Gugai', 'Shevapet', 'Omalur', 'Mettur', 'Attur', 'Edappadi'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6 shadow-soft">
              <Users className="w-10 h-10 text-primary-foreground" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('alumni.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t('alumni.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-8 h-8 text-primary-foreground/70 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === 'ta' ? 'வெற்றிக் கதைகள்' : 'Success Stories'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'ta' 
                ? 'எங்கள் முன்னாள் மாணவர்கள் இன்று என்ன செய்கிறார்கள்' 
                : 'What our alumni are doing today'}
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-lg">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{story.name}</h3>
                    <p className="text-xs text-muted-foreground">
                      {language === 'ta' ? 'வருடம்' : 'Year'}: {story.year}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2 mb-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80 text-sm">{story.achievement}</p>
                </div>
                
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  {story.location}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === 'ta' ? 'எங்கள் சேவை பகுதிகள்' : 'Areas We Serve'}
            </h2>
            <p className="text-muted-foreground">
              {language === 'ta' 
                ? 'சேலம் மற்றும் அருகிலுள்ள பகுதிகளில் இருந்து மாணவர்கள்' 
                : 'Students from Salem and nearby areas'}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card rounded-full text-sm font-medium text-foreground border border-border shadow-soft"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Join Network */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {language === 'ta' 
                ? 'எங்கள் குடும்பத்தில் இணையுங்கள்' 
                : 'Join Our Family'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === 'ta' 
                ? 'இன்றே உங்கள் ஓட்டுநர் பயணத்தை தொடங்குங்கள்' 
                : 'Start your driving journey today'}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services">
                <Button variant="default" size="lg">
                  {language === 'ta' ? 'பயிற்சிகளை பார்க்க' : 'View Courses'}
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="accent" size="lg">
                  {t('common.enquireNow')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Alumni;
