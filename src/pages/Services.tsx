import { useState } from 'react';
import { Car, Bike, FileCheck, FileText, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import CTASection from '@/components/CTASection';

type TabType = 'driving' | 'licence' | 'rc';

const Services = () => {
  const [activeTab, setActiveTab] = useState<TabType>('driving');
  const { t, language } = useLanguage();

  const tabs = [
    { id: 'driving' as TabType, label: t('courses.drivingCourses'), icon: Car },
    { id: 'licence' as TabType, label: t('courses.licenceServices'), icon: FileCheck },
    { id: 'rc' as TabType, label: t('courses.rcServices'), icon: FileText },
  ];

  const drivingCourses = [
    {
      name: language === 'ta' ? 'ஆரம்ப கார் ஓட்டுநர் பயிற்சி' : 'Beginner Car Driving Course',
      forWhom: language === 'ta' ? 'முழு ஆரம்பகர்களுக்கு, எந்த அனுபவமும் தேவையில்லை' : 'Complete beginners, no prior experience needed',
      duration: '20-25',
      schedule: language === 'ta' ? 'வாரத்திற்கு 5 நாட்கள், 45 நிமிடம் ஒவ்வொரு வகுப்பும்' : '5 days/week, 45 mins each class',
      includes: [
        language === 'ta' ? 'அடிப்படை கட்டுப்பாடுகள் & கிளட்ச்/கியர் கையாளுதல்' : 'Basic controls & clutch/gear handling',
        language === 'ta' ? 'தொடங்குதல் & மென்மையாக நிறுத்துதல்' : 'Starting & stopping smoothly',
        language === 'ta' ? 'U-டர்ன், பார்க்கிங், ரிவர்சிங்' : 'U-turns, parking, reversing',
        language === 'ta' ? 'சரிவு தொடக்கம் (ஹில் ஸ்டார்ட்)' : 'Slope start (hill start)',
        language === 'ta' ? 'நகர போக்குவரத்து & சிக்னல்கள்' : 'City traffic & signals',
        language === 'ta' ? 'லேன் ஒழுங்கு & அடிப்படை நெடுஞ்சாலை விதிகள்' : 'Lane discipline & basic highway rules',
      ],
      addons: language === 'ta' ? 'பிக்-அப்/டிராப் (கூடுதல்), கூடுதல் பயிற்சி மணிநேரம்' : 'Pick-up/Drop (extra), extra practice hours',
    },
    {
      name: language === 'ta' ? 'புத்துணர்ச்சி பயிற்சி' : 'Refresher Course',
      forWhom: language === 'ta' ? 'உரிமம் உள்ளவர்கள் ஆனால் நம்பிக்கை இல்லாதவர்கள்' : 'Those with licence but lacking confidence',
      duration: '10-15',
      schedule: language === 'ta' ? 'வாரத்திற்கு 4-5 நாட்கள், 45 நிமிடம்' : '4-5 days/week, 45 mins',
      includes: [
        language === 'ta' ? 'நம்பிக்கை மீட்பு பயிற்சி' : 'Confidence rebuilding',
        language === 'ta' ? 'நெரிசலான போக்குவரத்து ஓட்டுதல்' : 'Busy traffic driving',
        language === 'ta' ? 'பார்க்கிங் தேர்ச்சி' : 'Parking mastery',
        language === 'ta' ? 'இரவு/மழை நிலைகள்' : 'Night/rain conditions',
      ],
      addons: language === 'ta' ? 'நெடுஞ்சாலை பயிற்சி (கூடுதல்)' : 'Highway training (extra)',
    },
    {
      name: language === 'ta' ? 'இரு சக்கர வாகன பயிற்சி' : 'Two-Wheeler Training',
      forWhom: language === 'ta' ? 'ஸ்கூட்டர் அல்லது பைக் கற்க விரும்புபவர்கள்' : 'Those wanting to learn scooter or bike',
      duration: '10-15',
      schedule: language === 'ta' ? 'வாரத்திற்கு 5 நாட்கள், 30-45 நிமிடம்' : '5 days/week, 30-45 mins',
      includes: [
        language === 'ta' ? 'சமநிலை & கட்டுப்பாடு' : 'Balance & control',
        language === 'ta' ? 'கிளட்ச் கட்டுப்பாடு (பைக்குக்கு)' : 'Clutch control (for bikes)',
        language === 'ta' ? 'போக்குவரத்து விதிகள் & சிக்னல்கள்' : 'Traffic rules & signals',
        language === 'ta' ? 'பாதுகாப்பான சாலை பயன்பாடு' : 'Safe road usage',
      ],
      addons: '',
    },
  ];

  const licenceServices = [
    {
      name: language === 'ta' ? 'கற்றல் உரிமம்' : 'Learner Licence',
      description: language === 'ta' 
        ? 'உங்கள் கற்றல் உரிமத்திற்கான விண்ணப்பம் மற்றும் ஸ்லாட் முன்பதிவு' 
        : 'Application and slot booking for your learner licence',
      documents: [
        language === 'ta' ? 'ஆதார் கார்டு' : 'Aadhar Card',
        language === 'ta' ? 'வயது சான்று (பிறப்பு சான்றிதழ் / பள்ளி சான்றிதழ்)' : 'Age proof (birth certificate / school certificate)',
        language === 'ta' ? 'முகவரி சான்று' : 'Address proof',
        language === 'ta' ? 'பாஸ்போர்ட் அளவு புகைப்படம்' : 'Passport size photo',
      ],
      steps: [
        language === 'ta' ? 'உங்கள் ஆவணங்களை எங்களிடம் கொடுங்கள்' : 'Share your documents with us',
        language === 'ta' ? 'நாங்கள் ஆன்லைன் படிவங்களை நிரப்பி RTO ஸ்லாட் முன்பதிவு செய்கிறோம்' : 'We fill online forms and book RTO slot',
        language === 'ta' ? 'நீங்கள் RTO-க்கு பயோமெட்ரிக்ஸ் / தேர்வுக்கு செல்கிறீர்கள்' : 'You visit RTO for biometrics / test',
        language === 'ta' ? 'உங்கள் கற்றல் உரிமம் வழங்கப்படும்' : 'Your learner licence is issued',
      ],
    },
    {
      name: language === 'ta' ? 'நிரந்தர உரிமம்' : 'Permanent Licence',
      description: language === 'ta' 
        ? 'RTO தேர்வு தயாரிப்பு மற்றும் ஸ்லாட் முன்பதிவு' 
        : 'RTO test preparation and slot booking',
      documents: [
        language === 'ta' ? 'கற்றல் உரிமம்' : 'Learner licence',
        language === 'ta' ? 'ஆதார் கார்டு' : 'Aadhar Card',
        language === 'ta' ? 'முகவரி சான்று' : 'Address proof',
        language === 'ta' ? 'பாஸ்போர்ட் அளவு புகைப்படம்' : 'Passport size photo',
      ],
      steps: [
        language === 'ta' ? 'தேர்வுக்கு முழுமையான பயிற்சி' : 'Complete training for the test',
        language === 'ta' ? 'நாங்கள் RTO தேர்வு ஸ்லாட் முன்பதிவு செய்கிறோம்' : 'We book RTO test slot',
        language === 'ta' ? 'தேர்வு நாளில் வழிகாட்டுதல்' : 'Guidance on test day',
        language === 'ta' ? 'தேர்ச்சிக்குப் பின் உரிமம் வழங்கப்படும்' : 'Licence issued after passing',
      ],
    },
    {
      name: language === 'ta' ? 'உரிமம் புதுப்பித்தல்' : 'Licence Renewal',
      description: language === 'ta' 
        ? 'காலாவதியான உரிமத்தை புதுப்பிக்க உதவி' 
        : 'Help with renewing expired licence',
      documents: [
        language === 'ta' ? 'பழைய உரிமம்' : 'Old licence',
        language === 'ta' ? 'ஆதார் கார்டு' : 'Aadhar Card',
        language === 'ta' ? 'முகவரி சான்று' : 'Address proof',
        language === 'ta' ? 'மருத்துவ சான்றிதழ் (வயது 40+க்கு)' : 'Medical certificate (for age 40+)',
      ],
      steps: [
        language === 'ta' ? 'ஆவணங்களை சமர்ப்பிக்கவும்' : 'Submit documents',
        language === 'ta' ? 'நாங்கள் புதுப்பித்தல் விண்ணப்பிக்கிறோம்' : 'We apply for renewal',
        language === 'ta' ? 'RTO வருகை (தேவைப்பட்டால்)' : 'RTO visit (if required)',
        language === 'ta' ? 'புதிய உரிமம் வழங்கப்படும்' : 'New licence issued',
      ],
    },
    {
      name: language === 'ta' ? 'முகவரி மாற்றம் / நகல் உரிமம்' : 'Address Change / Duplicate Licence',
      description: language === 'ta' 
        ? 'உரிமத்தில் முகவரி மாற்றம் அல்லது தொலைந்த உரிமத்திற்கு நகல்' 
        : 'Address change in licence or duplicate for lost licence',
      documents: [
        language === 'ta' ? 'தற்போதைய உரிமம் (நகலுக்கு FIR)' : 'Current licence (FIR for duplicate)',
        language === 'ta' ? 'புதிய முகவரி சான்று' : 'New address proof',
        language === 'ta' ? 'ஆதார் கார்டு' : 'Aadhar Card',
      ],
      steps: [
        language === 'ta' ? 'ஆவணங்களை சமர்ப்பிக்கவும்' : 'Submit documents',
        language === 'ta' ? 'நாங்கள் விண்ணப்பத்தை செயலாக்குகிறோம்' : 'We process the application',
        language === 'ta' ? 'புதுப்பிக்கப்பட்ட உரிமம் வழங்கப்படும்' : 'Updated licence issued',
      ],
    },
  ];

  const rcServices = [
    {
      name: language === 'ta' ? 'RC புதுப்பித்தல்' : 'RC Renewal',
      documents: [
        language === 'ta' ? 'பழைய RC' : 'Old RC',
        language === 'ta' ? 'காப்பீடு நகல்' : 'Insurance copy',
        language === 'ta' ? 'PUC சான்றிதழ்' : 'PUC certificate',
        language === 'ta' ? 'உரிமையாளர் ஆதார்' : 'Owner Aadhar',
      ],
      steps: [
        language === 'ta' ? 'ஆவணங்களை சமர்ப்பிக்கவும்' : 'Submit documents',
        language === 'ta' ? 'நாங்கள் புதுப்பித்தல் விண்ணப்பிக்கிறோம்' : 'We apply for renewal',
        language === 'ta' ? 'வாகன ஆய்வு (தேவைப்பட்டால்)' : 'Vehicle inspection (if needed)',
        language === 'ta' ? 'புதிய RC வழங்கப்படும்' : 'New RC issued',
      ],
    },
    {
      name: language === 'ta' ? 'RC முகவரி மாற்றம்' : 'RC Address Change',
      documents: [
        language === 'ta' ? 'தற்போதைய RC' : 'Current RC',
        language === 'ta' ? 'புதிய முகவரி சான்று' : 'New address proof',
        language === 'ta' ? 'காப்பீடு நகல்' : 'Insurance copy',
      ],
      steps: [
        language === 'ta' ? 'ஆவணங்களை சமர்ப்பிக்கவும்' : 'Submit documents',
        language === 'ta' ? 'நாங்கள் விண்ணப்பத்தை செயலாக்குகிறோம்' : 'We process application',
        language === 'ta' ? 'புதிய முகவரியுடன் RC வழங்கப்படும்' : 'RC with new address issued',
      ],
    },
    {
      name: language === 'ta' ? 'அடமானம் நீக்கம்' : 'Hypothecation Removal',
      documents: [
        language === 'ta' ? 'RC' : 'RC',
        language === 'ta' ? 'கடன் முடிவு கடிதம் (NOC)' : 'Loan closure letter (NOC)',
        language === 'ta' ? 'படிவம் 35' : 'Form 35',
        language === 'ta' ? 'உரிமையாளர் ஆதார்' : 'Owner Aadhar',
      ],
      steps: [
        language === 'ta' ? 'வங்கியிடமிருந்து NOC பெறுங்கள்' : 'Get NOC from bank',
        language === 'ta' ? 'ஆவணங்களை சமர்ப்பிக்கவும்' : 'Submit documents',
        language === 'ta' ? 'நாங்கள் RTO-யில் செயலாக்குகிறோம்' : 'We process at RTO',
        language === 'ta' ? 'சுத்தமான RC வழங்கப்படும்' : 'Clean RC issued',
      ],
    },
    {
      name: language === 'ta' ? 'நகல் RC' : 'Duplicate RC',
      documents: [
        language === 'ta' ? 'FIR நகல் (தொலைந்திருந்தால்)' : 'FIR copy (if lost)',
        language === 'ta' ? 'ஆதார் கார்டு' : 'Aadhar Card',
        language === 'ta' ? 'காப்பீடு நகல்' : 'Insurance copy',
      ],
      steps: [
        language === 'ta' ? 'FIR தாக்கல் செய்யுங்கள் (தொலைந்திருந்தால்)' : 'File FIR (if lost)',
        language === 'ta' ? 'ஆவணங்களை சமர்ப்பிக்கவும்' : 'Submit documents',
        language === 'ta' ? 'நகல் RC விண்ணப்பம்' : 'Duplicate RC application',
        language === 'ta' ? 'புதிய RC வழங்கப்படும்' : 'New RC issued',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t('courses.title')}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ta' 
                ? 'ஓட்டுநர் பயிற்சி முதல் RTO ஆவண வேலைகள் வரை அனைத்தும்' 
                : 'From driving training to RTO paperwork, we cover everything'}
            </p>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 md:mx-0 md:px-0 md:justify-center">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium text-sm whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-soft'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Driving Courses */}
          {activeTab === 'driving' && (
            <div className="space-y-8">
              {drivingCourses.map((course, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{course.name}</h3>
                      <p className="text-muted-foreground mb-4">{course.forWhom}</p>
                      
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-sm">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-foreground font-medium">{course.duration} {t('courses.days')}</span>
                        </div>
                        <div className="text-sm text-muted-foreground">{course.schedule}</div>
                      </div>
                      
                      <h4 className="font-semibold text-foreground mb-3">{t('courses.includes')}:</h4>
                      <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                        {course.includes.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      {course.addons && (
                        <p className="text-sm text-muted-foreground italic">
                          <span className="font-medium">{language === 'ta' ? 'கூடுதல்:' : 'Add-ons:'}</span> {course.addons}
                        </p>
                      )}
                    </div>
                    
                    <div className="lg:w-48">
                      <a href="tel:+919876543210">
                        <Button variant="accent" className="w-full">
                          {t('common.enquireNow')}
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Licence Services */}
          {activeTab === 'licence' && (
            <div className="space-y-8">
              {licenceServices.map((service, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        {language === 'ta' ? 'தேவையான ஆவணங்கள்:' : 'Documents Required:'}
                      </h4>
                      <ul className="space-y-2">
                        {service.documents.map((doc, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ChevronRight className="w-4 h-4 text-primary" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        {language === 'ta' ? 'செயல்முறை:' : 'Process:'}
                      </h4>
                      <ol className="space-y-2">
                        {service.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 text-xs font-bold">
                              {i + 1}
                            </span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <a href="tel:+919876543210">
                      <Button variant="accent">
                        {t('common.enquireNow')}
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* RC Services */}
          {activeTab === 'rc' && (
            <div className="space-y-8">
              <p className="text-center text-muted-foreground mb-8">
                {language === 'ta' 
                  ? 'PUC மற்றும் காப்பீடு புதுப்பித்தலுக்கும் வழிகாட்டுதல் வழங்குகிறோம்' 
                  : 'We also provide guidance for PUC and insurance renewal'}
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {rcServices.map((service, index) => (
                  <div key={index} className="bg-card rounded-2xl p-6 shadow-card border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-4">{service.name}</h3>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground text-sm mb-2">
                        {language === 'ta' ? 'ஆவணங்கள்:' : 'Documents:'}
                      </h4>
                      <ul className="space-y-1">
                        {service.documents.map((doc, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-3 h-3 text-primary" />
                            {doc}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-foreground text-sm mb-2">
                        {language === 'ta' ? 'செயல்முறை:' : 'Steps:'}
                      </h4>
                      <ol className="space-y-1">
                        {service.steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary font-medium">{i + 1}.</span>
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <a href="tel:+919876543210">
                      <Button variant="outline" size="sm" className="w-full">
                        {t('common.contactUs')}
                      </Button>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  );
};

export default Services;
