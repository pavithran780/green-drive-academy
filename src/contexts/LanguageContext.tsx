import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface Translations {
  [key: string]: {
    en: string;
    ta: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { en: 'Home', ta: 'முகப்பு' },
  'nav.about': { en: 'About', ta: 'எங்களைப் பற்றி' },
  'nav.services': { en: 'Courses & Services', ta: 'பயிற்சி & சேவைகள்' },
  'nav.stories': { en: 'Student Stories', ta: 'மாணவர் அனுபவங்கள்' },
  'nav.contact': { en: 'Contact', ta: 'தொடர்புகொள்ள' },
  'nav.alumni': { en: 'Alumni', ta: 'முன்னாள் மாணவர்கள்' },

  // Common
  'common.callNow': { en: 'Call Now', ta: 'இப்போது அழைக்கவும்' },
  'common.whatsapp': { en: 'WhatsApp', ta: 'வாட்ஸ்அப்' },
  'common.enquireNow': { en: 'Enquire Now', ta: 'விசாரிக்க' },
  'common.bookDemo': { en: 'Book Demo Class', ta: 'டெமோ பதிவு செய்ய' },
  'common.learnMore': { en: 'Learn More', ta: 'மேலும் அறிய' },
  'common.contactUs': { en: 'Contact Us', ta: 'தொடர்பு கொள்ளுங்கள்' },
  'common.viewAll': { en: 'View All', ta: 'அனைத்தும் பார்க்க' },

  // Hero
  'hero.title': { en: 'Beginner Driving Classes, Licence & RC Renewal in Salem', ta: 'சேலத்தில் ஆரம்ப ஓட்டுநர் பயிற்சி, உரிமம் & RC புதுப்பித்தல்' },
  'hero.subtitle': { en: 'We train complete beginners with confidence, help you clear RTO tests, and handle licence and RC renewal paperwork for you.', ta: 'புதிதாக கற்பவர்களுக்கு நம்பிக்கையுடன் பயிற்சி அளிக்கிறோம், RTO தேர்வுகளில் தேர்ச்சி பெற உதவுகிறோம், உரிமம் மற்றும் RC புதுப்பித்தல் ஆவணங்களை கையாளுகிறோம்.' },

  // Services
  'services.title': { en: 'Our Services', ta: 'எங்கள் சேவைகள்' },
  'services.driving': { en: 'Beginner Car Driving', ta: 'ஆரம்ப கார் ஓட்டுதல்' },
  'services.drivingDesc': { en: 'Complete training for absolute beginners with dual-control cars', ta: 'இரட்டை கட்டுப்பாட்டு கார்களில் முழுமையான பயிற்சி' },
  'services.twowheeler': { en: 'Two-Wheeler Training', ta: 'இரு சக்கர வாகன பயிற்சி' },
  'services.twowheelerDesc': { en: 'Scooter and bike training for all skill levels', ta: 'அனைத்து நிலை மாணவர்களுக்கான ஸ்கூட்டர் மற்றும் பைக் பயிற்சி' },
  'services.licence': { en: 'Licence Services', ta: 'உரிம சேவைகள்' },
  'services.licenceDesc': { en: 'Learner, Permanent, Renewal & Address Change', ta: 'கற்றல், நிரந்தர, புதுப்பித்தல் & முகவரி மாற்றம்' },
  'services.rc': { en: 'RC & Vehicle Paperwork', ta: 'RC & வாகன ஆவணங்கள்' },
  'services.rcDesc': { en: 'RC renewal, hypothecation removal & more', ta: 'RC புதுப்பித்தல், அடமானம் நீக்கம் & மேலும்' },

  // Why Choose Us
  'why.title': { en: 'Why Choose Us?', ta: 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?' },
  'why.experience': { en: '15+ Years Experience', ta: '15+ ஆண்டுகள் அனுபவம்' },
  'why.passRate': { en: '95% Pass Rate', ta: '95% தேர்ச்சி விகிதம்' },
  'why.safety': { en: 'Dual Control & Safety', ta: 'இரட்டை கட்டுப்பாடு & பாதுகாப்பு' },
  'why.flexible': { en: 'Flexible Timings', ta: 'நெகிழ்வான நேரங்கள்' },
  'why.friendly': { en: 'Friendly Trainers', ta: 'நட்பான பயிற்சியாளர்கள்' },
  'why.pickup': { en: 'Pick-up & Drop', ta: 'பிக்-அப் & டிராப்' },

  // Testimonials
  'testimonials.title': { en: 'What Our Students Say', ta: 'எங்கள் மாணவர்கள் என்ன சொல்கிறார்கள்' },

  // About Page
  'about.title': { en: 'About Our Institute', ta: 'எங்கள் நிறுவனத்தைப் பற்றி' },
  'about.story': { en: 'Our Story', ta: 'எங்கள் கதை' },
  'about.storyText': { en: 'Established in 2008, Salem Driving Institute has been a trusted name in driver education. We started with a simple mission: to create confident, safe drivers who respect road rules and fellow commuters.', ta: '2008 இல் நிறுவப்பட்ட சேலம் டிரைவிங் இன்ஸ்டிடியூட் ஓட்டுநர் கல்வியில் நம்பகமான பெயர். சாலை விதிகளை மதிக்கும் நம்பிக்கையான, பாதுகாப்பான ஓட்டுநர்களை உருவாக்குவது எங்கள் நோக்கம்.' },
  'about.mission': { en: 'Our Mission', ta: 'எங்கள் நோக்கம்' },
  'about.missionText': { en: 'To promote a safe driving culture in Salem by training beginners with patience, building their confidence, and ensuring they understand and follow all road safety rules.', ta: 'பொறுமையுடன் ஆரம்பகர்களுக்கு பயிற்சி அளித்து, அவர்களின் நம்பிக்கையை வளர்த்து, சாலை பாதுகாப்பு விதிகளை புரிந்துகொள்ள உதவுவது.' },
  'about.instructors': { en: 'Our Instructors', ta: 'எங்கள் பயிற்சியாளர்கள்' },
  'about.vehicles': { en: 'Our Vehicles', ta: 'எங்கள் வாகனங்கள்' },
  'about.vehiclesText': { en: 'Our training fleet includes modern cars with dual-control systems, ABS brakes, and airbags. All vehicles are regularly maintained and fully insured for your safety.', ta: 'எங்கள் பயிற்சி வாகனங்கள் இரட்டை கட்டுப்பாட்டு அமைப்புகள், ABS பிரேக்குகள், ஏர்பேக்குகள் கொண்டவை. அனைத்து வாகனங்களும் தொடர்ந்து பராமரிக்கப்பட்டு காப்பீடு செய்யப்பட்டுள்ளன.' },

  // Courses Page
  'courses.title': { en: 'Courses & Services', ta: 'பயிற்சிகள் & சேவைகள்' },
  'courses.drivingCourses': { en: 'Driving Courses', ta: 'ஓட்டுநர் பயிற்சிகள்' },
  'courses.licenceServices': { en: 'Licence Services', ta: 'உரிம சேவைகள்' },
  'courses.rcServices': { en: 'RC & Paperwork', ta: 'RC & ஆவணங்கள்' },
  'courses.beginner': { en: 'Beginner Car Driving Course', ta: 'ஆரம்ப கார் ஓட்டுநர் பயிற்சி' },
  'courses.refresher': { en: 'Refresher Course', ta: 'புத்துணர்ச்சி பயிற்சி' },
  'courses.duration': { en: 'Duration', ta: 'காலம்' },
  'courses.includes': { en: 'What You\'ll Learn', ta: 'என்ன கற்றுக்கொள்வீர்கள்' },
  'courses.days': { en: 'days', ta: 'நாட்கள்' },

  // Contact Page
  'contact.title': { en: 'Contact Us', ta: 'எங்களை தொடர்பு கொள்ளுங்கள்' },
  'contact.getInTouch': { en: 'Get In Touch', ta: 'தொடர்பு கொள்ளுங்கள்' },
  'contact.address': { en: 'Address', ta: 'முகவரி' },
  'contact.phone': { en: 'Phone', ta: 'தொலைபேசி' },
  'contact.email': { en: 'Email', ta: 'மின்னஞ்சல்' },
  'contact.enquiryForm': { en: 'Send an Enquiry', ta: 'விசாரணை அனுப்புங்கள்' },
  'contact.name': { en: 'Your Name', ta: 'உங்கள் பெயர்' },
  'contact.phoneNumber': { en: 'Phone Number', ta: 'தொலைபேசி எண்' },
  'contact.emailOptional': { en: 'Email (Optional)', ta: 'மின்னஞ்சல் (விருப்பம்)' },
  'contact.serviceType': { en: 'Service Type', ta: 'சேவை வகை' },
  'contact.message': { en: 'Message', ta: 'செய்தி' },
  'contact.submit': { en: 'Submit Enquiry', ta: 'விசாரணை அனுப்பு' },
  'contact.thankYou': { en: 'Thank you! We will contact you soon.', ta: 'நன்றி! விரைவில் தொடர்பு கொள்வோம்.' },

  // Student Stories
  'stories.title': { en: 'Student Stories', ta: 'மாணவர் கதைகள்' },
  'stories.gallery': { en: 'Photo Gallery', ta: 'புகைப்பட தொகுப்பு' },
  'stories.testimonials': { en: 'Testimonials', ta: 'சான்றுகள்' },
  'stories.shareFeedback': { en: 'Share Your Feedback', ta: 'உங்கள் கருத்தை பகிருங்கள்' },

  // Alumni
  'alumni.title': { en: 'Our Alumni Network', ta: 'எங்கள் முன்னாள் மாணவர்கள்' },
  'alumni.subtitle': { en: 'Join thousands of confident drivers trained at our institute', ta: 'எங்கள் நிறுவனத்தில் பயிற்சி பெற்ற ஆயிரக்கணக்கான நம்பிக்கையான ஓட்டுநர்களுடன் இணையுங்கள்' },

  // Footer
  'footer.tagline': { en: 'Your trusted partner for driving education in Salem', ta: 'சேலத்தில் ஓட்டுநர் கல்விக்கான உங்கள் நம்பகமான கூட்டாளி' },
  'footer.quickLinks': { en: 'Quick Links', ta: 'விரைவு இணைப்புகள்' },
  'footer.servingAreas': { en: 'Serving Salem and nearby areas', ta: 'சேலம் மற்றும் அருகிலுள்ள பகுதிகளுக்கு சேவை' },
  'footer.copyright': { en: '© 2024 Salem Driving Institute. All rights reserved.', ta: '© 2024 சேலம் டிரைவிங் இன்ஸ்டிடியூட். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
