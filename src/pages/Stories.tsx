import { Link } from 'react-router-dom';
import { Camera, Star, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import TestimonialCard from '@/components/TestimonialCard';
import CTASection from '@/components/CTASection';

const Stories = () => {
  const { t, language } = useLanguage();

  const galleryImages = [
    { id: 1, caption: language === 'ta' ? 'பயிற்சி வாகனம்' : 'Training Vehicle' },
    { id: 2, caption: language === 'ta' ? 'வெற்றிகரமான மாணவர்' : 'Successful Student' },
    { id: 3, caption: language === 'ta' ? 'தத்துவ வகுப்பு' : 'Theory Class' },
    { id: 4, caption: language === 'ta' ? 'பயிற்சி நிலையம்' : 'Training Ground' },
    { id: 5, caption: language === 'ta' ? 'உரிம தேர்வு தயாரிப்பு' : 'Licence Test Prep' },
    { id: 6, caption: language === 'ta' ? 'நிறுவன வளாகம்' : 'Institute Campus' },
  ];

  const testimonials = [
    {
      name: 'Priya Shanmugam',
      area: 'Hasthampatti, Salem',
      course: language === 'ta' ? 'ஆரம்ப கார் பயிற்சி' : 'Beginner Car Course',
      feedback: language === 'ta' 
        ? 'நான் மிகவும் பயந்து கொண்டிருந்தேன், ஸ்டியரிங் பிடிக்கவே பயமாக இருந்தது. ஆனால் முருகன் சார் மிகவும் பொறுமையாக இருந்தார். இப்போது நான் நம்பிக்கையுடன் சேலம் நகரத்தில் ஓட்டுகிறேன்!'
        : 'I was very nervous about driving, even scared to hold the steering. But Murugan sir was so patient with me. Now I drive confidently in Salem city!',
      rating: 5,
    },
    {
      name: 'Kumar Rajan',
      area: 'Suramangalam, Salem',
      course: language === 'ta' ? 'நிரந்தர உரிமம்' : 'Permanent Licence',
      feedback: language === 'ta'
        ? 'RTO தேர்வுக்கு நன்றாக தயார் செய்தார்கள். எல்லா சிக்கலான பகுதிகளையும் பயிற்சி செய்தோம். முதல் முயற்சியிலேயே தேர்ச்சி பெற்றேன்!'
        : 'They prepared me very well for the RTO test. We practiced all the tricky parts. I passed on my first attempt!',
      rating: 5,
    },
    {
      name: 'Lakshmi Mohan',
      area: 'Fairlands, Salem',
      course: language === 'ta' ? 'RC புதுப்பித்தல்' : 'RC Renewal',
      feedback: language === 'ta'
        ? 'RC புதுப்பித்தல் வேலையை மிகவும் எளிதாக செய்தார்கள். எல்லா ஆவணங்களையும் அவர்களே கையாண்டார்கள். நான் வேலைக்கு செல்ல முடிந்தது.'
        : 'RC renewal was made so easy. They handled all the paperwork themselves. I could continue going to work without any hassle.',
      rating: 5,
    },
    {
      name: 'Senthil Kumar',
      area: 'Ammapet, Salem',
      course: language === 'ta' ? 'புத்துணர்ச்சி பயிற்சி' : 'Refresher Course',
      feedback: language === 'ta'
        ? '10 வருடங்களுக்கு முன் உரிமம் வாங்கினேன், ஆனால் ஓட்டவில்லை. இந்த பயிற்சி மூலம் என் நம்பிக்கையை திரும்ப பெற்றேன். இப்போது தினமும் ஓட்டுகிறேன்!'
        : 'Got my licence 10 years ago but never drove. This refresher course gave me my confidence back. Now I drive daily!',
      rating: 5,
    },
    {
      name: 'Meena Devi',
      area: 'Kondalampatti, Salem',
      course: language === 'ta' ? 'இரு சக்கர வாகன பயிற்சி' : 'Two-Wheeler Training',
      feedback: language === 'ta'
        ? 'பெண் பயிற்சியாளர் இல்லாவிட்டாலும், ஆண் பயிற்சியாளர்கள் மிகவும் மரியாதையாகவும் தொழில்முறையாகவும் இருந்தார்கள். மிகவும் நன்றி!'
        : 'Even though there was no female instructor, the male instructors were very respectful and professional. Very grateful!',
      rating: 5,
    },
    {
      name: 'Rajesh Venkat',
      area: 'Gugai, Salem',
      course: language === 'ta' ? 'கற்றல் உரிமம்' : 'Learner Licence',
      feedback: language === 'ta'
        ? 'எல்லா ஆன்லைன் வேலைகளையும் அவர்களே செய்தார்கள். நான் RTO-க்கு ஒரு முறை மட்டுமே சென்றேன். மிகவும் வசதியாக இருந்தது.'
        : 'They did all the online work themselves. I only had to visit RTO once. Very convenient service.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('stories.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ta' 
                ? 'எங்கள் மாணவர்களின் வெற்றிக் கதைகள் மற்றும் அனுபவங்கள்' 
                : 'Success stories and experiences from our students'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="w-6 h-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('stories.gallery')}
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <div 
                key={image.id} 
                className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl overflow-hidden group"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary/40" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-3">
                  <p className="text-primary-foreground text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-8">
            <Star className="w-6 h-6 text-accent" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              {t('stories.testimonials')}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Share Feedback */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center mb-6 shadow-soft">
              <MessageSquare className="w-8 h-8 text-primary-foreground" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {t('stories.shareFeedback')}
            </h2>
            <p className="text-muted-foreground mb-8">
              {language === 'ta' 
                ? 'எங்கள் நிறுவனத்தில் பயிற்சி பெற்றீர்களா? உங்கள் அனுபவத்தை பகிருங்கள்!' 
                : 'Trained at our institute? Share your experience with others!'}
            </p>
            
            <Link to="/contact">
              <Button variant="accent" size="lg">
                {t('stories.shareFeedback')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Stories;
