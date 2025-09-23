import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translations for multiple languages
const resources = {
  en: {
    translation: {
      "HOME": "HOME",
      "ABOUT US": "ABOUT US",
      "LANGUAGE": "LANGUAGE",
      "SIGN UP": "SIGN UP",
      "PanchArogya": "PanchArogya",
      "HOLISTIC HEALING": "HOLISTIC HEALING",
      "Rediscover Yourself with Holistic Healing": "Rediscover Yourself with Holistic Healing",
      "Experience the ancient wisdom of Ayurveda for a balanced and healthy life.": "Experience the ancient wisdom of Ayurveda for a balanced and healthy life.",
      "AYURVEDIC PANCHKARMA TREATMENT": "AYURVEDIC PANCHKARMA TREATMENT",
      "Listed beneath are some of the Ayurvedic therapies included in the programme:": "Listed beneath are some of the Ayurvedic therapies included in the programme:",
      "ABHYANGA": "ABHYANGA",
      "Vaman": "Vaman",
      "Virechan": "Virechan",
      "Vasti": "Vasti",
      "Nasya": "Nasya",
      "Raktamokshana": "Raktamokshana",
      "Therapeutic emesis": "Therapeutic emesis",
      "Purgation therapy": "Purgation therapy",
      "Medicated enema": "Medicated enema",
      "Nasal administration": "Nasal administration",
      "Bloodletting": "Bloodletting",
      "Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.": "Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.",
      "Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.": "Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.",
      "Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.": "Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.",
      "Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.": "Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.",
      "Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections.": "Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections."
    }
  },
  hi: {
    translation: {
      "HOME": "मुख्य पृष्ठ",
      "ABOUT US": "हमारे बारे में",
      "LANGUAGE": "भाषा",
      "SIGN UP": "साइन अप करें",
      "PanchArogya": "पंच आरोग्य",
      "HOLISTIC HEALING": "समग्र उपचार",
      "Rediscover Yourself with Holistic Healing": "समग्र उपचार से खुद को फिर से खोजें",
      "Experience the ancient wisdom of Ayurveda for a balanced and healthy life.": "संतुलित और स्वस्थ जीवन के लिए आयुर्वेद के प्राचीन ज्ञान का अनुभव करें।",
      "AYURVEDIC PANCHKARMA TREATMENT": "आयुर्वेदिक पंचकर्म उपचार",
      "Listed beneath are some of the Ayurvedic therapies included in the programme:": "कार्यक्रम में शामिल कुछ आयुर्वेदिक उपचार नीचे सूचीबद्ध हैं:",
      "ABHYANGA": "अभ्यंग",
      "Vaman": "वमन",
      "Virechan": "विरेचन",
      "Vasti": "वस्ती",
      "Nasya": "नस्य",
      "Raktamokshana": "रक्तमोक्षण",
      "Therapeutic emesis": "चिकित्सीय उल्टी",
      "Purgation therapy": "शुद्धिकरण उपचार",
      "Medicated enema": "औषधीय एनिमा",
      "Nasal administration": "नाक से दवा",
      "Bloodletting": "रक्तमोक्षण",
      "Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.": "वमन एक चिकित्सीय वमन प्रक्रिया है जिसका उपयोग शरीर से विकृत कफ को बाहर निकालने के लिए किया जाता है।",
      "Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.": "विरेचन एक औषधीय शोधन चिकित्सा है जो शरीर को पित्त दोषों से शुद्ध करती है।",
      "Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.": "वस्ति को सबसे प्रभावशाली पंचकर्म चिकित्सा माना जाता है। इसमें औषधीय तेल और काढ़ों को बड़ी आंत में प्रविष्ट कराया जाता है।",
      "Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.": "नस्य में औषधीय तेल को नाक के माध्यम से दिया जाता है। यह सिर की नाड़ियों को शुद्ध और खुला रखने में मदद करता है।",
      "Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections.": "रक्तमोक्षण एक ऐसी प्रक्रिया है जिसका उपयोग रक्त को शुद्ध करने के लिए किया जाता है। यह विभिन्न त्वचा रोगों और पुरानी संक्रमणों में अत्यधिक प्रभावी है।"
    }
  },
  bn: {
    translation: {
      "HOME": "হোম",
      "ABOUT US": "আমাদের সম্পর্কে",
      "LANGUAGE": "ভাষা",
      "SIGN UP": "সাইন আপ",
      "PanchArogya": "পঞ্চআরোগ্য",
      "HOLISTIC HEALING": "হোলিস্টিক হিলিং",
      "Rediscover Yourself with Holistic Healing": "হোলিস্টিক হিলিংয়ের মাধ্যমে নিজেকে পুনরায় আবিষ্কার করুন",
      "Experience the ancient wisdom of Ayurveda for a balanced and healthy life.": "একটি ভারসাম্যপূর্ণ এবং সুস্থ জীবনের জন্য আয়ুর্বেদের প্রাচীন জ্ঞান অনুভব করুন।",
      "AYURVEDIC PANCHKARMA TREATMENT": "আয়ুর্বেদিক পঞ্চকর্মা চিকিৎসা",
      "Listed beneath are some of the Ayurvedic therapies included in the programme:": "নীচে প্রোগ্রামে অন্তর্ভুক্ত কিছু আয়ুর্বেদিক থেরাপি তালিকাভুক্ত করা হয়েছে:",
      "ABHYANGA": "অভ্যঙ্গ",
      "Vaman": "বমন",
      "Virechan": "বিরেচন",
      "Vasti": "বস্তি",
      "Nasya": "নস্য",
      "Raktamokshana": "রক্তমোক্ষণ",
      "Therapeutic emesis": "থেরাপিউটিক বমি",
      "Purgation therapy": "শোধন থেরাপি",
      "Medicated enema": "ঔষধযুক্ত এনিমা",
      "Nasal administration": "নাকের মাধ্যমে ঔষধ প্রয়োগ",
      "Bloodletting": "রক্তমোক্ষণ",
      "Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.": "বমন হলো একটি চিকিৎসাগত বমি প্রক্রিয়া যা দেহ থেকে বিকৃত কফ নির্গত করতে ব্যবহৃত হয়।",
      "Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.": "বিরেচন হলো একটি ঔষধযুক্ত শোধন থেরাপি যা শরীরকে পিত্তের বিষাক্ত পদার্থ থেকে পরিশোধন করে।",
      "Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.": "বস্তি সবচেয়ে শক্তিশালী পঞ্চকর্ম চিকিৎসা হিসাবে বিবেচিত হয়। এতে ভেষজ তেল এবং ডেকোশন কোলনে প্রবেশ করানো হয়।",
      "Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.": "নস্য হলো নাকের মাধ্যমে ওষুধযুক্ত তেল দেওয়া। এটি মাথার নালী পরিষ্কার এবং খোলার জন্য সাহায্য করে।",
      "Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections.": "রক্তমোক্ষণ হলো রক্ত পরিষ্কার করার একটি প্রক্রিয়া। এটি বিভিন্ন চর্মরোগ এবং দীর্ঘস্থায়ী সংক্রমণের জন্য অত্যন্ত কার্যকর।"
    }
  },
  mr: {
    translation: {
      "HOME": "मुख्यपृष्ठ",
      "ABOUT US": "आमच्याबद्दल",
      "LANGUAGE": "भाषा",
      "SIGN UP": "साइन अप करा",
      "PanchArogya": "पंचारोग्य",
      "HOLISTIC HEALING": "समग्र उपचार",
      "Rediscover Yourself with Holistic Healing": "समग्र उपचाराने स्वतःला पुन्हा शोधा",
      "Experience the ancient wisdom of Ayurveda for a balanced and healthy life.": "संतुलित आणि निरोगी जीवनासाठी आयुर्वेदाच्या प्राचीन ज्ञानाचा अनुभव घ्या.",
      "AYURVEDIC PANCHKARMA TREATMENT": "आयुर्वेदिक पंचकर्म उपचार",
      "Listed beneath are some of the Ayurvedic therapies included in the programme:": "कार्यक्रमात समाविष्ट असलेल्या काही आयुर्वेदिक उपचारांची यादी खाली दिली आहे:",
      "ABHYANGA": "अभ्यंग",
      "Vaman": "वमन",
      "Virechan": "विरेचन",
      "Vasti": "वस्ती",
      "Nasya": "नस्य",
      "Raktamokshana": "रक्तमोक्षण",
      "Therapeutic emesis": "चिकित्सीय उलटी",
      "Purgation therapy": "शुद्धीकरण उपचार",
      "Medicated enema": "औषधी एनीमा",
      "Nasal administration": "नाकातून औषध",
      "Bloodletting": "रक्तमोक्षण",
      "Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.": "वमन ही एक चिकित्सीय उलटी प्रक्रिया आहे जी शरीरातून विकृत कफ बाहेर काढण्यासाठी वापरली जाते.",
      "Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.": "विरेचन ही एक औषधीय शोधन चिकित्सा आहे जी शरीराला पित्तातील विषारी पदार्थांपासून स्वच्छ करते.",
      "Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.": "वस्ती ही सर्वात प्रभावशाली पंचकर्म चिकित्सा मानली जाते. यात चरबीच्या कोलनमध्ये औषधी तेले आणि काढे दिले जातात.",
      "Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.": "नस्य ही औषधीय तेल नाकेद्वारे देण्याची प्रक्रिया आहे. हे डोक्याच्या नलिकांना शुद्ध करण्यास आणि उघडण्यास मदत करते.",
      "Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections.": "रक्तमोक्षण ही रक्त शुद्ध करण्यासाठी वापरली जाणारी प्रक्रिया आहे. हे विविध त्वचा रोग आणि दीर्घकालीन संसर्गांवर अत्यंत प्रभावी आहे."
    }
  },
  ur: {
    translation: {
      "HOME": "ہوم",
      "ABOUT US": "ہمارے بارے میں",
      "LANGUAGE": "زبان",
      "SIGN UP": "سائن اپ کریں",
      "PanchArogya": "پانچ آرگیا",
      "HOLISTIC HEALING": "ہولسٹک ہیلنگ",
      "Rediscover Yourself with Holistic Healing": "ہولسٹک ہیلنگ سے خود کو دوبارہ دریافت کریں",
      "Experience the ancient wisdom of Ayurveda for a balanced and healthy life.": "متوازن اور صحت مند زندگی کے لیے آیوروید کی قدیم حکمت کا تجربہ کریں۔",
      "AYURVEDIC PANCHKARMA TREATMENT": "آیورویدک پنچکرما علاج",
      "Listed beneath are some of the Ayurvedic therapies included in the programme:": "پروگرام میں شامل کچھ آیورویدک تھراپیوں کی فہرست درج ذیل ہے:",
      "ABHYANGA": "ابھیانگ",
      "Vaman": "وامن",
      "Virechan": "وریچن",
      "Vasti": "واستی",
      "Nasya": "نسیا",
      "Raktamokshana": "رکٹا موکشانا",
      "Therapeutic emesis": "علاج کے لیے قے",
      "Purgation therapy": "صفائی کا علاج",
      "Medicated enema": "طبی اینیما",
      "Nasal administration": "ناک کے ذریعے دوائی",
      "Bloodletting": "خون کا اخراج",
      "Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.": "وامن ایک طبی الٹی کا عمل ہے جسے جسم سے خراب کافہ نکالنے کے لیے استعمال کیا جاتا ہے۔",
      "Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.": "وریچن ایک دوائی سے بھرپور صفائی کا علاج ہے جو جسم کو پتہ کے زہریلے مواد سے پاک کرتا ہے۔",
      "Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.": "واستی کو سب سے طاقتور پنجکرما تھراپی سمجھا جاتا ہے۔ اس میں جڑی بوٹیوں کے تیل اور علاج کے محلول کو بڑی آنت میں دیا جاتا ہے۔",
      "Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.": "نسیا دوا کا تیل ناک کے ذریعے دیا جاتا ہے۔ یہ سر کے راستوں کی صفائی اور کھولنے میں مدد دیتا ہے۔",
      "Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections.": "رکٹا موکشانا ایک ایسا عمل ہے جو خون کی صفائی کے لیے استعمال ہوتا ہے۔ یہ مختلف جلد کے امراض اور دائمی انفیکشنز کے لیے بہت موثر ہے۔"
    }
  },
  ta: {
    translation: {
      "HOME": "முகப்பு",
      "ABOUT US": "எங்களைப் பற்றி",
      "LANGUAGE": "மொழி",
      "SIGN UP": "பதிவு செய்க",
      "PanchArogya": "பஞ்சஆரோக்யா",
      "HOLISTIC HEALING": "முழுமையான சிகிச்சை",
      "Rediscover Yourself with Holistic Healing": "முழுமையான சிகிச்சையுடன் உங்களை மீண்டும் கண்டறியவும்",
      "Experience the ancient wisdom of Ayurveda for a balanced and healthy life.": "சமநிலையான மற்றும் ஆரோக்கியமான வாழ்க்கைக்காக ஆயுர்வேதத்தின் பண்டைய ஞானத்தை அனுபவிக்கவும்.",
      "AYURVEDIC PANCHKARMA TREATMENT": "ஆயுர்வேத பஞ்சகர்மா சிகிச்சை",
      "Listed beneath are some of the Ayurvedic therapies included in the programme:": "திட்டத்தில் சேர்க்கப்பட்டுள்ள சில ஆயுர்வேத சிகிச்சைகள் கீழே பட்டியலிடப்பட்டுள்ளன:",
      "ABHYANGA": "அப்யங்கா",
      "Vaman": "வாமன்",
      "Virechan": "விரேசன்",
      "Vasti": "வஸ்தி",
      "Nasya": "நஸ்யா",
      "Raktamokshana": "ரக்த மோசனம்",
      "Therapeutic emesis": "சிகிச்சை வாந்தி",
      "Purgation therapy": "சுத்திகரிப்பு சிகிச்சை",
      "Medicated enema": "மருத்துவ எனிமா",
      "Nasal administration": "மூக்கு வழியாக மருந்து",
      "Bloodletting": "இரத்தம் வெளியேற்றல்",
      "Vaman is a therapeutic vomiting procedure used to expel vitiated Kapha from the body.": "வாமன் என்பது உடலில் மோசமான கபாவை வெளியேற்ற பயன்படுத்தப்படும் மருத்துவ உடன் கொந்தளிப்புச் செயல்முறை ஆகும்.",
      "Virechan is a medicated purgation therapy which cleanses the body from Pitta toxins.": "விரேசன் என்பது உடலை பித்தம் விஷத்திலிருந்து சுத்திகரிக்கும் மருந்து சுத்திகரிப்பு சிகிச்சை ஆகும்.",
      "Vasti is considered the most powerful Panchakarma therapy. It involves the administration of herbal oils and decoctions into the colon.": "வஸ்தியை மிகவும் சக்திவாய்ந்த பஞ்சகர்ம சிகிச்சையாக கருதுகிறார்கள். இதில் மூலிகை எண்ணெய்கள் மற்றும் கசாயங்கள் குடல் வழியாக கொடுக்கப்படுகின்றன.",
      "Nasya is the administration of medicated oil through the nasal passage. It helps in cleansing and opening the channels of the head.": "நஸ்யா என்பது மூக்கு வழியாக மருந்தாக எண்ணெய் கொடுக்கும் சிகிச்சை ஆகும். அது தலை வாயில்களை சுத்தம் செய்யவும் திறக்கவும் உதவுகிறது.",
      "Rakta Mokshana is a procedure used to cleanse the blood. It is highly effective for various skin diseases and chronic infections.": "ரக்த மோசனம் என்பது இரத்தத்தை சுத்திசெய்ய பயன்படுத்தப்படும் ஒரு செயல்முறை ஆகும். இது பலவிதமான தோல் நோய்கள் மற்றும் முற்காலமான தொற்றுகளுக்கு மிகவும் பயனுள்ளது."
    }
  }
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;