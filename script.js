/* =============================================================
   SURAKSHA AI – Emergency Assistance Platform
   script.js – Complete Production JavaScript
   ============================================================= */

'use strict';

// ============================================================
// LANGUAGE CONTENT DATABASE
// ============================================================

const LANG_CONTENT = {
  en: {
    tagline: 'Emergency Assistance Platform',
    'hero-badge-text': '🇮🇳 Powered by Government of India',
    'hero-title': 'Emergency Help,<br /><span class="hero-title-accent">Just One Tap Away</span>',
    'hero-subtitle': 'Instant access to emergency helplines, safety procedures, and nearby services across India.',
    'stat-label-1': 'Universal Emergency',
    'stat-label-2': 'Always Available',
    'stat-label-3': 'Service Categories',
    'stat-card-1': 'National Emergency',
    'stat-card-2': 'Ambulance Service',
    'stat-card-3': 'Fire Service',
    'stat-card-4': 'Police Control',
    'stat-card-5': 'Women Helpline',
    'stat-card-6': 'Health Helpline',
    'hero-cta-text': 'Get Emergency Help',
    'hero-cta-secondary-text': 'Find Nearby Services',
    'categories-title': 'Select Emergency Type',
    'categories-subtitle': 'Choose the type of emergency to get immediate assistance and step-by-step guidance',
    'nearby-title': 'Nearby Emergency Services',
    'nearby-subtitle': 'Emergency facilities near your detected location',
    'nearby-note-text': 'Enable location for precise results. Showing representative emergency facilities.',
    'tips-title': 'Essential Safety Tips',
    'tips-subtitle': 'Be prepared before emergencies strike',
    'tip-heading-1': 'Save Emergency Contacts',
    'tip-text-1': 'Store all emergency numbers (112, 108, 100, 101, 1091) in your phone with the ICE (In Case of Emergency) prefix.',
    'tip-heading-2': 'Emergency Kit at Home',
    'tip-text-2': 'Keep a basic first aid kit, torch, extra medicines, water, and important documents ready at all times.',
    'tip-heading-3': 'Know Your Exits',
    'tip-text-3': 'Identify emergency exits in your building, workplace, and public spaces. Practice evacuation drills.',
    'tip-heading-4': 'Family Safety Plan',
    'tip-text-4': 'Create a family emergency plan with a designated meeting point and contact person outside the affected area.',
    'footer-desc': 'Your trusted emergency assistance platform for citizens across India. Available 24/7 in multiple languages.',
    'footer-lang-note': 'Available in English, Hindi & Kannada',
    'footer-copyright': '© 2025 SurakshaAI. Built for citizen safety. Designed with ❤️ in India.',
    'footer-links-1': 'Quick Numbers',
    'footer-links-2': 'Government Portals',
    'footer-links-3': 'Disclaimer',
    'footer-disclaimer-text': 'SurakshaAI is an informational platform. For life-threatening emergencies, always call 112 directly. This app does not replace official emergency services.',
    'status-text': 'Live Services Active',
    'sos-label': 'Emergency SOS',
    'sos-modal-subtitle': 'Your location is being shared. Who do you need?',
    'sos-opt-1': 'Ambulance',
    'sos-opt-2': 'Police',
    'sos-opt-3': 'Fire Service',
    'sos-opt-4': 'All Services',
    'sos-close-text': 'Cancel',
    'helpline-title': 'Emergency Helplines',
    'steps-title': 'Immediate Safety Steps',
    'guidance-title': 'Government Guidance',
    'checklist-title': 'Emergency Procedure Checklist',
    'back-btn-text': 'Back',
    'voice-read-text': 'Read Aloud',
    'call-now-text': 'Call Emergency Now',
    'voice-indicator-text': 'Reading aloud...',
    location_detecting: '📡 Detecting your location...',
    location_denied: '📍 Location access denied',
    location_error: '📍 Location unavailable',
    voice_started: '🔊 Voice assistance enabled',
    voice_stopped: '🔇 Voice assistance stopped',
    sos_activated: '🚨 SOS Alert Activated!',
    call_connecting: '📞 Connecting call to ',
  },
  hi: {
    tagline: 'आपातकालीन सहायता प्लेटफ़ॉर्म',
    'hero-badge-text': '🇮🇳 भारत सरकार द्वारा संचालित',
    'hero-title': 'आपातकालीन मदद,<br /><span class="hero-title-accent">बस एक टैप पर</span>',
    'hero-subtitle': 'भारत भर में आपातकालीन हेल्पलाइन, सुरक्षा प्रक्रियाओं और नजदीकी सेवाओं तक तत्काल पहुँच।',
    'stat-label-1': 'सार्वभौमिक आपातकाल',
    'stat-label-2': 'हमेशा उपलब्ध',
    'stat-label-3': 'सेवा श्रेणियाँ',
    'stat-card-1': 'राष्ट्रीय आपातकाल',
    'stat-card-2': 'एम्बुलेंस सेवा',
    'stat-card-3': 'अग्निशमन सेवा',
    'stat-card-4': 'पुलिस नियंत्रण',
    'stat-card-5': 'महिला हेल्पलाइन',
    'stat-card-6': 'स्वास्थ्य हेल्पलाइन',
    'hero-cta-text': 'आपातकालीन सहायता लें',
    'hero-cta-secondary-text': 'नजदीकी सेवाएँ खोजें',
    'categories-title': 'आपातकाल का प्रकार चुनें',
    'categories-subtitle': 'तत्काल सहायता और चरण-दर-चरण मार्गदर्शन के लिए आपातकाल का प्रकार चुनें',
    'nearby-title': 'नजदीकी आपातकालीन सेवाएँ',
    'nearby-subtitle': 'आपके स्थान के पास आपातकालीन सुविधाएँ',
    'nearby-note-text': 'सटीक परिणामों के लिए स्थान सक्षम करें। प्रतिनिधि सुविधाएँ दिखाई जा रही हैं।',
    'tips-title': 'आवश्यक सुरक्षा सुझाव',
    'tips-subtitle': 'आपातकाल से पहले तैयार रहें',
    'tip-heading-1': 'आपातकालीन संपर्क सहेजें',
    'tip-text-1': 'सभी आपातकालीन नंबर (112, 108, 100, 101, 1091) ICE (In Case of Emergency) उपसर्ग के साथ फोन में सहेजें।',
    'tip-heading-2': 'घर पर आपातकालीन किट',
    'tip-text-2': 'प्राथमिक चिकित्सा किट, टॉर्च, अतिरिक्त दवाएँ, पानी और महत्वपूर्ण दस्तावेज हमेशा तैयार रखें।',
    'tip-heading-3': 'निकास जानें',
    'tip-text-3': 'अपनी इमारत, कार्यस्थल और सार्वजनिक स्थानों में आपातकालीन निकास की पहचान करें।',
    'tip-heading-4': 'पारिवारिक सुरक्षा योजना',
    'tip-text-4': 'निर्धारित मिलन स्थान और प्रभावित क्षेत्र के बाहर संपर्क व्यक्ति के साथ पारिवारिक आपातकालीन योजना बनाएँ।',
    'footer-desc': 'भारत भर के नागरिकों के लिए आपका विश्वसनीय आपातकालीन सहायता प्लेटफ़ॉर्म।',
    'footer-lang-note': 'अंग्रेजी, हिंदी और कन्नड़ में उपलब्ध',
    'footer-copyright': '© 2025 SurakshaAI. नागरिक सुरक्षा के लिए बनाया गया। भारत में ❤️ के साथ डिज़ाइन किया गया।',
    'footer-links-1': 'त्वरित नंबर',
    'footer-links-2': 'सरकारी पोर्टल',
    'footer-links-3': 'अस्वीकरण',
    'footer-disclaimer-text': 'SurakshaAI एक सूचना प्लेटफ़ॉर्म है। जीवन-घातक आपातकाल में हमेशा सीधे 112 पर कॉल करें।',
    'status-text': 'सेवाएँ सक्रिय हैं',
    'sos-label': 'आपातकालीन SOS',
    'sos-modal-subtitle': 'आपका स्थान साझा किया जा रहा है। आपको किसकी जरूरत है?',
    'sos-opt-1': 'एम्बुलेंस',
    'sos-opt-2': 'पुलिस',
    'sos-opt-3': 'अग्निशमन',
    'sos-opt-4': 'सभी सेवाएँ',
    'sos-close-text': 'रद्द करें',
    'helpline-title': 'आपातकालीन हेल्पलाइन',
    'steps-title': 'तत्काल सुरक्षा कदम',
    'guidance-title': 'सरकारी मार्गदर्शन',
    'checklist-title': 'आपातकालीन प्रक्रिया चेकलिस्ट',
    'back-btn-text': 'वापस',
    'voice-read-text': 'ज़ोर से पढ़ें',
    'call-now-text': 'अभी कॉल करें',
    'voice-indicator-text': 'ज़ोर से पढ़ा जा रहा है...',
    location_detecting: '📡 आपका स्थान पहचाना जा रहा है...',
    location_denied: '📍 स्थान पहुँच अस्वीकृत',
    location_error: '📍 स्थान अनुपलब्ध',
    voice_started: '🔊 वॉयस सहायता सक्षम',
    voice_stopped: '🔇 वॉयस सहायता बंद',
    sos_activated: '🚨 SOS अलर्ट सक्रिय!',
    call_connecting: '📞 कॉल जोड़ी जा रही है ',
  },
  kn: {
    tagline: 'ತುರ್ತು ಸಹಾಯ ವೇದಿಕೆ',
    'hero-badge-text': '🇮🇳 ಭಾರತ ಸರ್ಕಾರದಿಂದ ಚಾಲಿತ',
    'hero-title': 'ತುರ್ತು ಸಹಾಯ,<br /><span class="hero-title-accent">ಒಂದೇ ಟ್ಯಾಪ್‌ನಲ್ಲಿ</span>',
    'hero-subtitle': 'ಭಾರತಾದ್ಯಂತ ತುರ್ತು ಸಹಾಯವಾಣಿ, ಸುರಕ್ಷತಾ ಕಾರ್ಯವಿಧಾನಗಳು ಮತ್ತು ಸಮೀಪದ ಸೇವೆಗಳಿಗೆ ತಕ್ಷಣದ ಪ್ರವೇಶ.',
    'stat-label-1': 'ಸಾರ್ವತ್ರಿಕ ತುರ್ತು',
    'stat-label-2': 'ಯಾವಾಗಲೂ ಲಭ್ಯ',
    'stat-label-3': 'ಸೇವಾ ವಿಭಾಗಗಳು',
    'stat-card-1': 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು',
    'stat-card-2': 'ಆಂಬ್ಯುಲೆನ್ಸ್ ಸೇವೆ',
    'stat-card-3': 'ಅಗ್ನಿಶಾಮಕ ಸೇವೆ',
    'stat-card-4': 'ಪೊಲೀಸ್ ನಿಯಂತ್ರಣ',
    'stat-card-5': 'ಮಹಿಳಾ ಸಹಾಯವಾಣಿ',
    'stat-card-6': 'ಆರೋಗ್ಯ ಸಹಾಯವಾಣಿ',
    'hero-cta-text': 'ತುರ್ತು ಸಹಾಯ ಪಡೆಯಿರಿ',
    'hero-cta-secondary-text': 'ಸಮೀಪದ ಸೇವೆಗಳು',
    'categories-title': 'ತುರ್ತು ವಿಧ ಆಯ್ಕೆ ಮಾಡಿ',
    'categories-subtitle': 'ತಕ್ಷಣದ ಸಹಾಯ ಮತ್ತು ಹಂತ-ಹಂತದ ಮಾರ್ಗದರ್ಶನಕ್ಕಾಗಿ ತುರ್ತು ವಿಧ ಆಯ್ಕೆ ಮಾಡಿ',
    'nearby-title': 'ಸಮೀಪದ ತುರ್ತು ಸೇವೆಗಳು',
    'nearby-subtitle': 'ನಿಮ್ಮ ಸ್ಥಳದ ಸಮೀಪದ ತುರ್ತು ಸೌಲಭ್ಯಗಳು',
    'nearby-note-text': 'ನಿಖರ ಫಲಿತಾಂಶಗಳಿಗಾಗಿ ಸ್ಥಳ ಸಕ್ರಿಯಗೊಳಿಸಿ. ಪ್ರತಿನಿಧಿ ಸೌಲಭ್ಯಗಳನ್ನು ತೋರಿಸಲಾಗುತ್ತಿದೆ.',
    'tips-title': 'ಅಗತ್ಯ ಸುರಕ್ಷತಾ ಸಲಹೆಗಳು',
    'tips-subtitle': 'ತುರ್ತು ಪರಿಸ್ಥಿತಿ ಮೊದಲು ಸಿದ್ಧರಾಗಿ',
    'tip-heading-1': 'ತುರ್ತು ಸಂಪರ್ಕಗಳು ಉಳಿಸಿ',
    'tip-text-1': 'ಎಲ್ಲಾ ತುರ್ತು ಸಂಖ್ಯೆಗಳನ್ನು (112, 108, 100, 101, 1091) ಫೋನ್‌ನಲ್ಲಿ ICE ಉಪಸರ್ಗದೊಂದಿಗೆ ಉಳಿಸಿ.',
    'tip-heading-2': 'ಮನೆಯಲ್ಲಿ ತುರ್ತು ಕಿಟ್',
    'tip-text-2': 'ಮೂಲ ಪ್ರಥಮ ಚಿಕಿತ್ಸಾ ಕಿಟ್, ಟಾರ್ಚ್, ಹೆಚ್ಚುವರಿ ಔಷಧಗಳು, ನೀರು ಮತ್ತು ಮುಖ್ಯ ದಾಖಲೆಗಳನ್ನು ಯಾವಾಗಲೂ ಸಿದ್ಧವಾಗಿ ಇಡಿ.',
    'tip-heading-3': 'ನಿರ್ಗಮನ ದ್ವಾರಗಳನ್ನು ತಿಳಿಯಿರಿ',
    'tip-text-3': 'ನಿಮ್ಮ ಕಟ್ಟಡ, ಕಾರ್ಯಸ್ಥಳ ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸ್ಥಳಗಳಲ್ಲಿ ತುರ್ತು ನಿರ್ಗಮನ ದ್ವಾರಗಳನ್ನು ಗುರುತಿಸಿ.',
    'tip-heading-4': 'ಕುಟುಂಬ ಸುರಕ್ಷತಾ ಯೋಜನೆ',
    'tip-text-4': 'ನಿರ್ದಿಷ್ಟ ಸಭೆ ಸ್ಥಳ ಮತ್ತು ಪ್ರಭಾವಿತ ಪ್ರದೇಶದ ಹೊರಗೆ ಸಂಪರ್ಕ ವ್ಯಕ್ತಿಯೊಂದಿಗೆ ಕುಟುಂಬ ತುರ್ತು ಯೋಜನೆ ರಚಿಸಿ.',
    'footer-desc': 'ಭಾರತಾದ್ಯಂತ ನಾಗರಿಕರಿಗೆ ನಿಮ್ಮ ವಿಶ್ವಾಸಾರ್ಹ ತುರ್ತು ಸಹಾಯ ವೇದಿಕೆ.',
    'footer-lang-note': 'ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ ಮತ್ತು ಕನ್ನಡದಲ್ಲಿ ಲಭ್ಯ',
    'footer-copyright': '© 2025 SurakshaAI. ನಾಗರಿಕ ಸುರಕ್ಷತೆಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ. ❤️ ಭಾರತದಲ್ಲಿ ವಿನ್ಯಾಸ.',
    'footer-links-1': 'ತ್ವರಿತ ಸಂಖ್ಯೆಗಳು',
    'footer-links-2': 'ಸರ್ಕಾರಿ ಪೋರ್ಟಲ್',
    'footer-links-3': 'ಹಕ್ಕು ನಿರಾಕರಣೆ',
    'footer-disclaimer-text': 'SurakshaAI ಒಂದು ಮಾಹಿತಿ ವೇದಿಕೆ. ಜೀವ-ಬೆದರಿಕೆ ತುರ್ತು ಪರಿಸ್ಥಿತಿಯಲ್ಲಿ ಯಾವಾಗಲೂ ನೇರವಾಗಿ 112 ಗೆ ಕರೆ ಮಾಡಿ.',
    'status-text': 'ಸೇವೆಗಳು ಸಕ್ರಿಯ',
    'sos-label': 'ತುರ್ತು SOS',
    'sos-modal-subtitle': 'ನಿಮ್ಮ ಸ್ಥಳ ಹಂಚಿಕೊಳ್ಳಲಾಗುತ್ತಿದೆ. ನಿಮಗೆ ಯಾರು ಬೇಕು?',
    'sos-opt-1': 'ಆಂಬ್ಯುಲೆನ್ಸ್',
    'sos-opt-2': 'ಪೊಲೀಸ್',
    'sos-opt-3': 'ಅಗ್ನಿಶಾಮಕ',
    'sos-opt-4': 'ಎಲ್ಲಾ ಸೇವೆಗಳು',
    'sos-close-text': 'ರದ್ದು',
    'helpline-title': 'ತುರ್ತು ಸಹಾಯವಾಣಿ',
    'steps-title': 'ತಕ್ಷಣದ ಸುರಕ್ಷತಾ ಹಂತಗಳು',
    'guidance-title': 'ಸರ್ಕಾರಿ ಮಾರ್ಗದರ್ಶನ',
    'checklist-title': 'ತುರ್ತು ಕಾರ್ಯವಿಧಾನ ಪರಿಶೀಲನ ಪಟ್ಟಿ',
    'back-btn-text': 'ಹಿಂದೆ',
    'voice-read-text': 'ಓದಿ ಕೇಳಿ',
    'call-now-text': 'ಈಗ ಕರೆ ಮಾಡಿ',
    'voice-indicator-text': 'ಓದಲಾಗುತ್ತಿದೆ...',
    location_detecting: '📡 ನಿಮ್ಮ ಸ್ಥಳ ಪತ್ತೆ ಮಾಡಲಾಗುತ್ತಿದೆ...',
    location_denied: '📍 ಸ್ಥಳ ಪ್ರವೇಶ ನಿರಾಕರಿಸಲಾಗಿದೆ',
    location_error: '📍 ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ',
    voice_started: '🔊 ಧ್ವನಿ ಸಹಾಯ ಸಕ್ರಿಯ',
    voice_stopped: '🔇 ಧ್ವನಿ ಸಹಾಯ ನಿಲ್ಲಿಸಲಾಗಿದೆ',
    sos_activated: '🚨 SOS ಎಚ್ಚರಿಕೆ ಸಕ್ರಿಯ!',
    call_connecting: '📞 ಕರೆ ಸಂಪರ್ಕಿಸಲಾಗುತ್ತಿದೆ ',
  }
};

// ============================================================
// EMERGENCY CATEGORIES DATA
// ============================================================

const EMERGENCY_CATEGORIES = [
  {
    id: 'medical',
    icon: '🚑',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.1)',
    border: 'rgba(239,68,68,0.2)',
    shadow: 'rgba(239,68,68,0.3)',
    number: '108',
    name: { en: 'Medical', hi: 'चिकित्सा', kn: 'ವೈದ್ಯಕೀಯ' },
    desc: {
      en: 'Injury, heart attack, poisoning',
      hi: 'चोट, दिल का दौरा, जहर',
      kn: 'ಗಾಯ, ಹೃದಯಾಘಾತ, ವಿಷ'
    },
    helplines: [
      { icon: '🚑', name: { en: 'Ambulance (National)', hi: 'एम्बुलेंस', kn: 'ಆಂಬ್ಯುಲೆನ್ಸ್' }, num: '108' },
      { icon: '🏥', name: { en: 'Health Helpline', hi: 'स्वास्थ्य हेल्पलाइन', kn: 'ಆರೋಗ್ಯ ಸಹಾಯವಾಣಿ' }, num: '104' },
      { icon: '🆘', name: { en: 'National Emergency', hi: 'राष्ट्रीय आपातकाल', kn: 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು' }, num: '112' },
    ],
    steps: {
      en: ['Stay calm and assess the situation safely', 'Call 108 immediately for ambulance', 'Do not move the injured person unless in danger', 'Apply pressure to bleeding wounds with clean cloth', 'Keep the patient awake and talking if conscious', 'Clear the airway if person is unconscious', 'Perform CPR if trained and person is unresponsive', 'Guide the ambulance to your exact location'],
      hi: ['शांत रहें और स्थिति का सुरक्षित आकलन करें', 'तुरंत 108 पर एम्बुलेंस के लिए कॉल करें', 'घायल व्यक्ति को तब तक न हिलाएँ जब तक खतरा न हो', 'साफ कपड़े से रक्तस्राव वाले घाव पर दबाव डालें', 'यदि होश में हो तो मरीज को जगाए रखें', 'यदि बेहोश हो तो वायुमार्ग साफ करें', 'यदि प्रशिक्षित हों तो CPR करें', 'एम्बुलेंस को अपने सटीक स्थान पर मार्गदर्शन करें'],
      kn: ['ಶಾಂತವಾಗಿರಿ ಮತ್ತು ಪರಿಸ್ಥಿತಿ ನಿರ್ಣಯಿಸಿ', 'ತಕ್ಷಣ 108 ಗೆ ಕರೆ ಮಾಡಿ', 'ಅಪಾಯವಿಲ್ಲದಿದ್ದರೆ ಗಾಯಾಳುವನ್ನು ಸ್ಥಳಾಂತರಿಸಬೇಡಿ', 'ಸ್ವಚ್ಛ ಬಟ್ಟೆಯಿಂದ ರಕ್ತಸ್ರಾವಕ್ಕೆ ಒತ್ತಡ ಹಾಕಿ', 'ರೋಗಿ ಎಚ್ಚರಾಗಿದ್ದರೆ ಮಾತಾಡಿಸಿ', 'ಅರಿವಳಿಕೆಯಾಗಿದ್ದರೆ ಉಸಿರಾಟ ಮಾರ್ಗ ತೆರೆದಿರಿ', 'ತರಬೇತಿ ಇದ್ದರೆ CPR ಮಾಡಿ', 'ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗೆ ನಿಮ್ಮ ನಿಖರ ಸ್ಥಳ ತಿಳಿಸಿ'],
    },
    guidance: {
      en: 'Under National Health Mission, free ambulance services (108) are available across India. AIIMS and government hospitals provide free emergency treatment under Ayushman Bharat scheme.',
      hi: 'राष्ट्रीय स्वास्थ्य मिशन के तहत भारत भर में मुफ्त एम्बुलेंस सेवाएँ (108) उपलब्ध हैं। आयुष्मान भारत योजना के तहत AIIMS और सरकारी अस्पताल निःशुल्क आपातकालीन उपचार प्रदान करते हैं।',
      kn: 'ರಾಷ್ಟ್ರೀಯ ಆರೋಗ್ಯ ಮಿಷನ್ ಅಡಿ ಭಾರತಾದ್ಯಂತ ಉಚಿತ ಆಂಬ್ಯುಲೆನ್ಸ್ ಸೇವೆ (108) ಲಭ್ಯ. ಆಯುಷ್ಮಾನ್ ಭಾರತ ಯೋಜನೆ ಅಡಿ ಉಚಿತ ತುರ್ತು ಚಿಕಿತ್ಸೆ ಲಭ್ಯ.',
    },
    guidanceLink: 'https://nhp.gov.in',
    checklist: {
      en: ['Called 108 Ambulance', 'Stopped bleeding / applied first aid', 'Patient kept conscious and talking', 'Airway kept clear', 'Location shared with emergency responders', 'Emergency contact informed', 'Valuables and ID secured'],
      hi: ['108 एम्बुलेंस को कॉल किया', 'रक्तस्राव रोका / प्राथमिक चिकित्सा की', 'मरीज को होश में रखा', 'वायुमार्ग साफ रखा', 'आपातकालीन दल के साथ स्थान साझा किया', 'आपातकालीन संपर्क को सूचित किया', 'कीमती सामान और पहचान पत्र सुरक्षित किया'],
      kn: ['108 ಆಂಬ್ಯುಲೆನ್ಸ್ ಕರೆ ಮಾಡಿದ್ದಾರೆ', 'ರಕ್ತಸ್ರಾವ ನಿಲ್ಲಿಸಿ / ಪ್ರಥಮ ಚಿಕಿತ್ಸೆ ನೀಡಿದ್ದಾರೆ', 'ರೋಗಿ ಎಚ್ಚರಾಗಿದ್ದಾರೆ', 'ಉಸಿರಾಟ ಮಾರ್ಗ ತೆರೆದಿದೆ', 'ಸ್ಥಳ ಹಂಚಿಕೊಂಡಿದ್ದಾರೆ', 'ಸಂಪರ್ಕ ವ್ಯಕ್ತಿ ತಿಳಿಸಿದ್ದಾರೆ', 'ದಾಖಲೆಗಳು ಸುರಕ್ಷಿತ'],
    },
    primaryNumber: '108',
  },
  {
    id: 'police',
    icon: '👮',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.2)',
    shadow: 'rgba(59,130,246,0.3)',
    number: '100',
    name: { en: 'Police', hi: 'पुलिस', kn: 'ಪೊಲೀಸ್' },
    desc: {
      en: 'Crime, theft, violence, threat',
      hi: 'अपराध, चोरी, हिंसा, धमकी',
      kn: 'ಅಪರಾಧ, ಕಳ್ಳತನ, ಹಿಂಸೆ, ಬೆದರಿಕೆ'
    },
    helplines: [
      { icon: '👮', name: { en: 'Police Control Room', hi: 'पुलिस नियंत्रण कक्ष', kn: 'ಪೊಲೀಸ್ ನಿಯಂತ್ರಣ ಕಕ್ಷ' }, num: '100' },
      { icon: '🆘', name: { en: 'National Emergency', hi: 'राष्ट्रीय आपातकाल', kn: 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು' }, num: '112' },
      { icon: '🕵️', name: { en: 'Anti-Terror Squad', hi: 'आतंकवाद विरोधी दस्ता', kn: 'ಭಯೋತ್ಪಾದನಾ ವಿರೋಧಿ' }, num: '1090' },
    ],
    steps: {
      en: ['Immediately move to a safe location', 'Call 100 (Police) or 112 (Emergency)', 'Do not confront the perpetrator directly', 'Preserve evidence – do not touch the crime scene', 'Note key details: description, vehicle number, direction of escape', 'Inform trusted neighbors or family', 'File an FIR at the nearest police station', 'Follow up with police for case status'],
      hi: ['तुरंत सुरक्षित स्थान पर जाएँ', '100 (पुलिस) या 112 (आपातकाल) पर कॉल करें', 'अपराधी का सीधे सामना न करें', 'सबूत संरक्षित करें – अपराध स्थल को न छुएँ', 'मुख्य विवरण नोट करें: विवरण, वाहन नंबर, भागने की दिशा', 'विश्वसनीय पड़ोसियों या परिवार को सूचित करें', 'निकटतम पुलिस स्टेशन में FIR दर्ज करें', 'मामले की स्थिति के लिए पुलिस से संपर्क करें'],
      kn: ['ತಕ್ಷಣ ಸುರಕ್ಷಿತ ಸ್ಥಳಕ್ಕೆ ಸರಿಯಿರಿ', '100 (ಪೊಲೀಸ್) ಅಥವಾ 112 ಗೆ ಕರೆ ಮಾಡಿ', 'ಅಪರಾಧಿಯನ್ನು ನೇರವಾಗಿ ಎದುರಿಸಬೇಡಿ', 'ಸಾಕ್ಷ್ಯ ಸಂರಕ್ಷಿಸಿ', 'ವಿವರಗಳನ್ನು ಗಮನಿಸಿ', 'ಕುಟುಂಬಕ್ಕೆ ತಿಳಿಸಿ', 'ಹತ್ತಿರದ ಠಾಣೆಯಲ್ಲಿ FIR ದಾಖಲಿಸಿ', 'ತನಿಖೆ ಅನುಸರಿಸಿ'],
    },
    guidance: {
      en: 'Under CCTNS (Crime and Criminal Tracking Network & Systems), police can access real-time data. You can file e-FIR online via the Citizen Portal of your state police.',
      hi: 'CCTNS (अपराध और अपराधी ट्रैकिंग नेटवर्क) के तहत पुलिस रीयल-टाइम डेटा तक पहुँच सकती है। आप अपने राज्य पुलिस के नागरिक पोर्टल के माध्यम से ऑनलाइन e-FIR दर्ज कर सकते हैं।',
      kn: 'CCTNS ಅಡಿ ಪೊಲೀಸ್ ನೈಜ-ಸಮಯ ಡೇಟಾ ಪ್ರವೇಶಿಸಬಹುದು. ರಾಜ್ಯ ಪೊಲೀಸ್ ನಾಗರಿಕ ಪೋರ್ಟಲ್ ಮೂಲಕ ಆನ್‌ಲೈನ್ e-FIR ದಾಖಲಿಸಬಹುದು.',
    },
    guidanceLink: 'https://mha.gov.in',
    checklist: {
      en: ['Moved to safe location', 'Called 100 or 112', 'Avoided confrontation', 'Evidence preserved', 'Key details noted', 'Trusted person informed', 'FIR filed or planned', 'Stayed in safe place till police arrived'],
      hi: ['सुरक्षित स्थान पर गए', '100 या 112 कॉल किया', 'टकराव से बचे', 'सबूत संरक्षित किए', 'मुख्य विवरण नोट किए', 'विश्वसनीय व्यक्ति को सूचित किया', 'FIR दर्ज की या योजना बनाई', 'पुलिस आने तक सुरक्षित स्थान पर रहे'],
      kn: ['ಸುರಕ್ಷಿತ ಸ್ಥಳಕ್ಕೆ ಸರಿದಿದ್ದಾರೆ', '100 ಅಥವಾ 112 ಕರೆ ಮಾಡಿದ್ದಾರೆ', 'ಎದುರಾಟ ತಪ್ಪಿಸಿದ್ದಾರೆ', 'ಸಾಕ್ಷ್ಯ ಸಂರಕ್ಷಿಸಿದ್ದಾರೆ', 'ವಿವರಗಳನ್ನು ನಮೂದಿಸಿದ್ದಾರೆ', 'ನಂಬಿಕಸ್ಥ ವ್ಯಕ್ತಿಗೆ ತಿಳಿಸಿದ್ದಾರೆ', 'FIR ದಾಖಲಿಸಿದ್ದಾರೆ', 'ಪೊಲೀಸ್ ಬರುವ ತನಕ ಸುರಕ್ಷಿತ'],
    },
    primaryNumber: '100',
  },
  {
    id: 'fire',
    icon: '🔥',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.1)',
    border: 'rgba(249,115,22,0.2)',
    shadow: 'rgba(249,115,22,0.3)',
    number: '101',
    name: { en: 'Fire', hi: 'आग', kn: 'ಬೆಂಕಿ' },
    desc: {
      en: 'Building fire, gas leak, explosion',
      hi: 'इमारत में आग, गैस रिसाव, विस्फोट',
      kn: 'ಕಟ್ಟಡ ಬೆಂಕಿ, ಗ್ಯಾಸ್ ಸೋರಿಕೆ, ಸ್ಫೋಟ'
    },
    helplines: [
      { icon: '🔥', name: { en: 'Fire Service', hi: 'अग्निशमन सेवा', kn: 'ಅಗ್ನಿಶಾಮಕ ಸೇವೆ' }, num: '101' },
      { icon: '🆘', name: { en: 'National Emergency', hi: 'राष्ट्रीय आपातकाल', kn: 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು' }, num: '112' },
      { icon: '🚑', name: { en: 'Ambulance', hi: 'एम्बुलेंस', kn: 'ಆಂಬ್ಯುಲೆನ್ಸ್' }, num: '108' },
    ],
    steps: {
      en: ['Activate fire alarm immediately', 'Call 101 (Fire Service) right away', 'Evacuate using stairs – never use elevators', 'Close doors behind you to slow fire spread', 'Stay low under smoke to breathe cleaner air', 'Do not re-enter burning building for any reason', 'Meet at the designated assembly point', 'Wait for fire fighters and give full information'],
      hi: ['तुरंत फायर अलार्म सक्रिय करें', 'तुरंत 101 (अग्निशमन सेवा) पर कॉल करें', 'सीढ़ियों का उपयोग करके निकलें – लिफ्ट का कभी उपयोग न करें', 'आग फैलने को धीमा करने के लिए दरवाजे बंद करें', 'साफ हवा पाने के लिए धुएँ के नीचे झुककर चलें', 'किसी भी कारण से जलती इमारत में वापस न जाएँ', 'निर्धारित असेंबली पॉइंट पर मिलें', 'दमकलकर्मियों की प्रतीक्षा करें और पूरी जानकारी दें'],
      kn: ['ತಕ್ಷಣ ಅಗ್ನಿ ಅಲಾರಮ್ ಸಕ್ರಿಯಗೊಳಿಸಿ', 'ತಕ್ಷಣ 101 ಗೆ ಕರೆ ಮಾಡಿ', 'ಮೆಟ್ಟಿಲಿನಲ್ಲಿ ಹೋಗಿ – ಲಿಫ್ಟ್ ಬಳಸಬೇಡಿ', 'ಬೆಂಕಿ ಹರಡದಂತೆ ಬಾಗಿಲು ಮುಚ್ಚಿ', 'ಹೊಗೆ ಕೆಳಗೆ ತೆವಳಿ', 'ಯಾವ ಕಾರಣಕ್ಕೂ ಕಟ್ಟಡಕ್ಕೆ ಮರಳಬೇಡಿ', 'ಸಭಾ ಸ್ಥಳದಲ್ಲಿ ಸೇರಿ', 'ಅಗ್ನಿಶಾಮಕ ತಂಡ ಬರುವ ತನಕ ಕಾಯಿರಿ'],
    },
    guidance: {
      en: 'National Disaster Management Authority (NDMA) provides fire safety guidelines. All commercial buildings must have fire NOC and regular safety audits as per National Building Code.',
      hi: 'राष्ट्रीय आपदा प्रबंधन प्राधिकरण (NDMA) अग्नि सुरक्षा दिशानिर्देश प्रदान करता है। सभी व्यावसायिक भवनों में राष्ट्रीय भवन संहिता के अनुसार अग्नि NOC और नियमित सुरक्षा ऑडिट होना चाहिए।',
      kn: 'NDMA ಅಗ್ನಿ ಸುರಕ್ಷತಾ ಮಾರ್ಗದರ್ಶಿ ಒದಗಿಸುತ್ತದೆ. ಎಲ್ಲಾ ವಾಣಿಜ್ಯ ಕಟ್ಟಡಗಳಿಗೆ ಅಗ್ನಿ NOC ಮತ್ತು ನಿಯಮಿತ ಸುರಕ್ಷತಾ ಲೆಕ್ಕಪರಿಶೋಧನೆ ಕಡ್ಡಾಯ.',
    },
    guidanceLink: 'https://ndma.gov.in',
    checklist: {
      en: ['Fire alarm activated', 'Called 101 Fire Service', 'All occupants evacuated', 'Used stairs (not elevator)', 'Stayed low under smoke', 'Doors closed to slow fire', 'Assembly point reached', 'Headcount done at assembly'],
      hi: ['फायर अलार्म सक्रिय किया', '101 अग्निशमन को कॉल किया', 'सभी को निकाला', 'सीढ़ियों का उपयोग किया', 'धुएँ के नीचे रहे', 'दरवाजे बंद किए', 'असेंबली पॉइंट पहुँचे', 'हेडकाउंट किया'],
      kn: ['ಅಗ್ನಿ ಅಲಾರಮ್ ಸಕ್ರಿಯ', '101 ಕರೆ ಮಾಡಿದ್ದಾರೆ', 'ಎಲ್ಲರನ್ನೂ ತೆರವು ಮಾಡಿದ್ದಾರೆ', 'ಮೆಟ್ಟಿಲ ಬಳಸಿದ್ದಾರೆ', 'ಹೊಗೆ ಕೆಳಗೆ ತೆವಳಿದ್ದಾರೆ', 'ಬಾಗಿಲು ಮುಚ್ಚಿದ್ದಾರೆ', 'ಸಭಾ ಸ್ಥಳ ತಲುಪಿದ್ದಾರೆ', 'ಮಾಥಾ ಎಣಿಕೆ ಮಾಡಿದ್ದಾರೆ'],
    },
    primaryNumber: '101',
  },
  {
    id: 'women',
    icon: '👩‍⚕️',
    color: '#ec4899',
    bg: 'rgba(236,72,153,0.1)',
    border: 'rgba(236,72,153,0.2)',
    shadow: 'rgba(236,72,153,0.3)',
    number: '1091',
    name: { en: 'Women Safety', hi: 'महिला सुरक्षा', kn: 'ಮಹಿಳಾ ಸುರಕ್ಷತೆ' },
    desc: {
      en: 'Harassment, domestic violence, stalking',
      hi: 'उत्पीड़न, घरेलू हिंसा, पीछा करना',
      kn: 'ಕಿರುಕುಳ, ಗೃಹ ಹಿಂಸೆ, ಬೆನ್ನತ್ತುವಿಕೆ'
    },
    helplines: [
      { icon: '👩', name: { en: 'Women Helpline', hi: 'महिला हेल्पलाइन', kn: 'ಮಹಿಳಾ ಸಹಾಯವಾಣಿ' }, num: '1091' },
      { icon: '🛡️', name: { en: 'Nirbhaya Helpline', hi: 'निर्भया हेल्पलाइन', kn: 'ನಿರ್ಭಯಾ ಸಹಾಯವಾಣಿ' }, num: '181' },
      { icon: '👮', name: { en: 'Police', hi: 'पुलिस', kn: 'ಪೊಲೀಸ್' }, num: '100' },
    ],
    steps: {
      en: ['Move immediately to a public or safe space', 'Call 1091 (Women Helpline) or 112', 'Alert people around you if in public', 'Use the Shake/SOS feature on your phone', 'Document evidence (photos, screenshots, voice notes)', 'Do not negotiate with the harasser', 'File a complaint with police station or online', 'Seek legal help from DLSA (District Legal Services Authority)'],
      hi: ['तुरंत किसी सार्वजनिक या सुरक्षित स्थान पर जाएँ', '1091 (महिला हेल्पलाइन) या 112 पर कॉल करें', 'यदि सार्वजनिक जगह पर हों तो आसपास के लोगों को सतर्क करें', 'अपने फोन पर Shake/SOS सुविधा का उपयोग करें', 'सबूत दस्तावेज करें (फोटो, स्क्रीनशॉट, वॉयस नोट्स)', 'उत्पीड़नकर्ता के साथ बातचीत न करें', 'पुलिस स्टेशन या ऑनलाइन शिकायत दर्ज करें', 'DLSA से कानूनी सहायता लें'],
      kn: ['ತಕ್ಷಣ ಸಾರ್ವಜನಿಕ ಅಥವಾ ಸುರಕ್ಷಿತ ಸ್ಥಳಕ್ಕೆ ಹೋಗಿ', '1091 ಅಥವಾ 112 ಗೆ ಕರೆ ಮಾಡಿ', 'ಸಾರ್ವಜನಿಕ ಸ್ಥಳದಲ್ಲಿದ್ದರೆ ಜನರ ಗಮನ ಸೆಳೆಯಿರಿ', 'ಫೋನ್‌ನ SOS ಸೌಲಭ್ಯ ಬಳಸಿ', 'ಸಾಕ್ಷ್ಯ ದಾಖಲಿಸಿ', 'ಕಿರಿಕಿರಿಯ ವ್ಯಕ್ತಿಯೊಂದಿಗೆ ಮಾತಾಡಬೇಡಿ', 'ಪೊಲೀಸ್ ದೂರು ದಾಖಲಿಸಿ', 'DLSA ಕಾನೂನು ಸಹಾಯ ಪಡೆಯಿರಿ'],
    },
    guidance: {
      en: 'Protection of Women from Domestic Violence Act 2005 and POCSO Act provide strong legal protections. One Stop Centres (Sakhi) provide shelter, police help, legal aid, medical, and psycho-social support.',
      hi: 'घरेलू हिंसा से महिलाओं की सुरक्षा अधिनियम 2005 और POCSO अधिनियम मजबूत कानूनी सुरक्षा प्रदान करते हैं। वन स्टॉप सेंटर (सखी) आश्रय, पुलिस सहायता, कानूनी सहायता, चिकित्सा और मनोसामाजिक सहायता प्रदान करते हैं।',
      kn: 'ಮಹಿಳೆಯರ ರಕ್ಷಣೆ ಕಾಯ್ದೆ 2005 ಮತ್ತು POCSO ಕಾಯ್ದೆ ಬಲವಾದ ಕಾನೂನು ರಕ್ಷಣೆ ಒದಗಿಸುತ್ತದೆ. ಒನ್ ಸ್ಟಾಪ್ ಸೆಂಟರ್ (ಸಖಿ) ಆಶ್ರಯ, ಪೊಲೀಸ್ ಸಹಾಯ, ಕಾನೂನು, ವೈದ್ಯಕೀಯ ನೆರವು ನೀಡುತ್ತದೆ.',
    },
    guidanceLink: 'https://wcd.nic.in',
    checklist: {
      en: ['Moved to safe location', 'Called 1091 or 112', 'Informed trusted person', 'Evidence documented', 'Did not engage with harasser', 'Complaint filed', 'Legal help sought', 'Support system activated'],
      hi: ['सुरक्षित स्थान पर गई', '1091 या 112 कॉल किया', 'विश्वसनीय व्यक्ति को सूचित किया', 'सबूत दस्तावेज किए', 'उत्पीड़नकर्ता से नहीं जुड़ी', 'शिकायत दर्ज की', 'कानूनी सहायता ली', 'सहायता प्रणाली सक्रिय की'],
      kn: ['ಸುರಕ್ಷಿತ ಸ್ಥಳಕ್ಕೆ ಸರಿದಿದ್ದಾರೆ', '1091 ಕರೆ ಮಾಡಿದ್ದಾರೆ', 'ನಂಬಿಕಸ್ಥ ವ್ಯಕ್ತಿಗೆ ತಿಳಿಸಿದ್ದಾರೆ', 'ಸಾಕ್ಷ್ಯ ದಾಖಲಿಸಿದ್ದಾರೆ', 'ಕಿರಿಕಿರಿ ವ್ಯಕ್ತಿ ತಪ್ಪಿಸಿದ್ದಾರೆ', 'ದೂರು ದಾಖಲಿಸಿದ್ದಾರೆ', 'ಕಾನೂನು ಸಹಾಯ ಪಡೆದಿದ್ದಾರೆ', 'ಸಹಾಯ ಜಾಲ ಸಕ್ರಿಯ'],
    },
    primaryNumber: '1091',
  },
  {
    id: 'disaster',
    icon: '🌊',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.1)',
    border: 'rgba(139,92,246,0.2)',
    shadow: 'rgba(139,92,246,0.3)',
    number: '1078',
    name: { en: 'Disaster Response', hi: 'आपदा प्रतिक्रिया', kn: 'ದುರಂತ ಪ್ರತಿಕ್ರಿಯೆ' },
    desc: {
      en: 'Flood, earthquake, cyclone, landslide',
      hi: 'बाढ़, भूकंप, चक्रवात, भूस्खलन',
      kn: 'ಪ್ರವಾಹ, ಭೂಕಂಪ, ಚಂಡಮಾರುತ, ಭೂಕುಸಿತ'
    },
    helplines: [
      { icon: '🌊', name: { en: 'NDMA Helpline', hi: 'NDMA हेल्पलाइन', kn: 'NDMA ಸಹಾಯವಾಣಿ' }, num: '1078' },
      { icon: '🆘', name: { en: 'National Emergency', hi: 'राष्ट्रीय आपातकाल', kn: 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು' }, num: '112' },
      { icon: '🏛️', name: { en: 'State Disaster Mgmt', hi: 'राज्य आपदा प्रबंधन', kn: 'ರಾಜ್ಯ ದುರಂತ ನಿರ್ವಹಣೆ' }, num: '1070' },
    ],
    steps: {
      en: ['Move to higher ground immediately (for floods)', 'Drop, Cover, and Hold On (for earthquakes)', 'Stay away from windows and exterior walls', 'Evacuate as directed by authorities', 'Take emergency kit: water, food, documents, medicines', 'Follow official warnings and alerts', 'Do not spread unverified information', 'Register at relief camps for assistance'],
      hi: ['तुरंत ऊँचे स्थान पर जाएँ (बाढ़ के लिए)', 'झुकें, ढकें और पकड़ें (भूकंप के लिए)', 'खिड़कियों और बाहरी दीवारों से दूर रहें', 'अधिकारियों के निर्देशानुसार निकलें', 'आपातकालीन किट लें: पानी, भोजन, दस्तावेज, दवाएँ', 'आधिकारिक चेतावनियों का पालन करें', 'असत्यापित जानकारी न फैलाएँ', 'सहायता के लिए राहत शिविरों में पंजीकरण करें'],
      kn: ['ತಕ್ಷಣ ಎತ್ತರದ ಸ್ಥಳಕ್ಕೆ ಹೋಗಿ (ಪ್ರವಾಹಕ್ಕಾಗಿ)', 'ಬಗ್ಗಿ, ಮರೆಮಾಡಿ, ಹಿಡಿಯಿರಿ (ಭೂಕಂಪಕ್ಕಾಗಿ)', 'ಕಿಟಕಿಗಳಿಂದ ದೂರ ಇರಿ', 'ಅಧಿಕಾರಿಗಳ ಆಜ್ಞೆ ಪಾಲಿಸಿ', 'ತುರ್ತು ಕಿಟ್ ಒಯ್ಯಿರಿ', 'ಅಧಿಕೃತ ಎಚ್ಚರಿಕೆ ಅನುಸರಿಸಿ', 'ಅಸ್ಥಿರ ಮಾಹಿತಿ ಹರಡಬೇಡಿ', 'ಪರಿಹಾರ ಶಿಬಿರದಲ್ಲಿ ನೋಂದಾಯಿಸಿ'],
    },
    guidance: {
      en: 'NDMA (National Disaster Management Authority) coordinates disaster response in India. NDRF (National Disaster Response Force) teams are deployed for rescue. Visit ndma.gov.in for preparedness guidelines.',
      hi: 'NDMA (राष्ट्रीय आपदा प्रबंधन प्राधिकरण) भारत में आपदा प्रतिक्रिया का समन्वय करता है। NDRF (राष्ट्रीय आपदा प्रतिक्रिया बल) दल बचाव के लिए तैनात किए जाते हैं।',
      kn: 'NDMA ಭಾರತದಲ್ಲಿ ದುರಂತ ಪ್ರತಿಕ್ರಿಯೆ ಸಂಯೋಜಿಸುತ್ತದೆ. NDRF ತಂಡಗಳು ರಕ್ಷಣಾ ಕಾರ್ಯಾಚರಣೆಗೆ ನಿಯೋಜಿಸಲ್ಪಡುತ್ತವೆ.',
    },
    guidanceLink: 'https://ndma.gov.in',
    checklist: {
      en: ['Moved to safe/higher ground', 'Emergency kit prepared', 'Family members accounted for', 'Official alerts being followed', 'Not spreading rumours', 'Registered at relief camp', 'Documents secured', 'Staying updated via official channels'],
      hi: ['सुरक्षित/ऊँचे स्थान पर गए', 'आपातकालीन किट तैयार की', 'परिवार के सदस्यों का हिसाब लगाया', 'आधिकारिक अलर्ट का पालन कर रहे हैं', 'अफवाहें नहीं फैला रहे', 'राहत शिविर में पंजीकृत', 'दस्तावेज सुरक्षित किए', 'आधिकारिक चैनलों से अपडेट ले रहे हैं'],
      kn: ['ಸುರಕ್ಷಿತ ಸ್ಥಳಕ್ಕೆ ಸರಿದಿದ್ದಾರೆ', 'ತುರ್ತು ಕಿಟ್ ತಯಾರಿಸಿದ್ದಾರೆ', 'ಕುಟುಂಬ ಸದಸ್ಯರ ಲೆಕ್ಕ ಇದೆ', 'ಅಧಿಕೃತ ಎಚ್ಚರಿಕೆ ಅನುಸರಿಸುತ್ತಿದ್ದಾರೆ', 'ವದಂತಿ ಹರಡುತ್ತಿಲ್ಲ', 'ಶಿಬಿರದಲ್ಲಿ ನೋಂದಾಯಿಸಿದ್ದಾರೆ', 'ದಾಖಲೆಗಳು ಸುರಕ್ಷಿತ', 'ಅಧಿಕೃತ ಮಾಹಿತಿ ಪಡೆಯುತ್ತಿದ್ದಾರೆ'],
    },
    primaryNumber: '1078',
  },
  {
    id: 'child',
    icon: '🧒',
    color: '#f59e0b',
    bg: 'rgba(245,158,11,0.1)',
    border: 'rgba(245,158,11,0.2)',
    shadow: 'rgba(245,158,11,0.3)',
    number: '1098',
    name: { en: 'Child Help', hi: 'बाल सहायता', kn: 'ಮಕ್ಕಳ ಸಹಾಯ' },
    desc: {
      en: 'Missing child, abuse, trafficking',
      hi: 'लापता बच्चा, दुर्व्यवहार, तस्करी',
      kn: 'ಕಾಣೆಯಾದ ಮಗು, ದುರ್ಬಳಕೆ, ಕಳ್ಳಸಾಗಣೆ'
    },
    helplines: [
      { icon: '🧒', name: { en: 'Childline India', hi: 'चाइल्डलाइन इंडिया', kn: 'ಚೈಲ್ಡ್‌ಲೈನ್ ಇಂಡಿಯಾ' }, num: '1098' },
      { icon: '🔍', name: { en: 'Missing Child Portal', hi: 'लापता बच्चा पोर्टल', kn: 'ಕಾಣೆ ಮಗು ಪೋರ್ಟಲ್' }, num: '100' },
      { icon: '🆘', name: { en: 'National Emergency', hi: 'राष्ट्रीय आपातकाल', kn: 'ರಾಷ್ಟ್ರೀಯ ತುರ್ತು' }, num: '112' },
    ],
    steps: {
      en: ['Call 1098 (Childline) immediately', 'Provide child\'s physical description and last known location', 'Report to nearest police station and request AMBER Alert', 'Share recent photo of the child on local WhatsApp groups', 'Visit trackyourchild.in portal for missing child registration', 'Contact school, relatives, and known places', 'Do not share child\'s personal details on social media', 'Cooperate fully with police investigation'],
      hi: ['तुरंत 1098 (चाइल्डलाइन) पर कॉल करें', 'बच्चे का शारीरिक विवरण और अंतिम ज्ञात स्थान प्रदान करें', 'निकटतम पुलिस स्टेशन में रिपोर्ट करें और AMBER Alert का अनुरोध करें', 'स्थानीय WhatsApp ग्रुप में बच्चे की हालिया फोटो साझा करें', 'लापता बच्चे के पंजीकरण के लिए trackyourchild.in पोर्टल देखें', 'स्कूल, रिश्तेदारों और जाने-माने स्थानों से संपर्क करें', 'बच्चे का व्यक्तिगत विवरण सोशल मीडिया पर साझा न करें', 'पुलिस जांच में पूरा सहयोग करें'],
      kn: ['ತಕ್ಷಣ 1098 ಗೆ ಕರೆ ಮಾಡಿ', 'ಮಗುವಿನ ಭೌತಿಕ ವಿವರ ಮತ್ತು ಕೊನೆಯ ಸ್ಥಳ ತಿಳಿಸಿ', 'ಹತ್ತಿರದ ಠಾಣೆಗೆ ವರದಿ ಮಾಡಿ', 'ಮಗುವಿನ ಇತ್ತೀಚಿನ ಫೋಟೋ ಹಂಚಿಕೊಳ್ಳಿ', 'trackyourchild.in ಗೆ ನೋಂದಾಯಿಸಿ', 'ಶಾಲೆ, ಸಂಬಂಧಿಕರ ಬಳಿ ವಿಚಾರಿಸಿ', 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ಖಾಸಗಿ ವಿವರ ಹಂಚಬೇಡಿ', 'ಪೊಲೀಸ್ ತನಿಖೆಯಲ್ಲಿ ಸಹಕರಿಸಿ'],
    },
    guidance: {
      en: 'CHILDLINE (1098) is a 24x7 free emergency phone service for children in crisis. Track your child portal (trackthemissing.nic.in) helps trace missing children. POCSO Act protects children from sexual offences.',
      hi: 'CHILDLINE (1098) संकट में बच्चों के लिए 24x7 मुफ्त आपातकालीन फोन सेवा है। Track your child पोर्टल लापता बच्चों को ट्रैक करने में मदद करता है। POCSO अधिनियम बच्चों को यौन अपराधों से बचाता है।',
      kn: 'CHILDLINE (1098) ಸಂಕಷ್ಟದಲ್ಲಿರುವ ಮಕ್ಕಳಿಗಾಗಿ 24x7 ಉಚಿತ ತುರ್ತು ಫೋನ್ ಸೇವೆ. Track your child ಪೋರ್ಟಲ್ ಕಾಣೆ ಮಕ್ಕಳನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.',
    },
    guidanceLink: 'https://trackthemissing.nic.in',
    checklist: {
      en: ['Called 1098 Childline', 'Police complaint filed (FIR)', 'Recent photo ready for sharing', 'School and relatives informed', 'Missing child portal updated', 'Local community alerted', 'Not sharing sensitive info on social media', 'Cooperating with authorities'],
      hi: ['1098 चाइल्डलाइन को कॉल किया', 'पुलिस शिकायत दर्ज की (FIR)', 'साझा करने के लिए हालिया फोटो तैयार', 'स्कूल और रिश्तेदारों को सूचित किया', 'लापता बच्चे पोर्टल अपडेट किया', 'स्थानीय समुदाय को सतर्क किया', 'सोशल मीडिया पर संवेदनशील जानकारी साझा नहीं की', 'अधिकारियों के साथ सहयोग कर रहे हैं'],
      kn: ['1098 ಕರೆ ಮಾಡಿದ್ದಾರೆ', 'FIR ದಾಖಲಿಸಿದ್ದಾರೆ', 'ಫೋಟೋ ತಯಾರಿಸಿದ್ದಾರೆ', 'ಶಾಲೆ ಮತ್ತು ಸಂಬಂಧಿಕರಿಗೆ ತಿಳಿಸಿದ್ದಾರೆ', 'ಪೋರ್ಟಲ್ ನವೀಕರಿಸಿದ್ದಾರೆ', 'ಸಮುದಾಯಕ್ಕೆ ತಿಳಿಸಿದ್ದಾರೆ', 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ವಿವರ ಹಂಚಿಲ್ಲ', 'ಅಧಿಕಾರಿಗಳಿಗೆ ಸಹಕರಿಸುತ್ತಿದ್ದಾರೆ'],
    },
    primaryNumber: '1098',
  },
  {
    id: 'blood',
    icon: '🩸',
    color: '#dc2626',
    bg: 'rgba(220,38,38,0.1)',
    border: 'rgba(220,38,38,0.2)',
    shadow: 'rgba(220,38,38,0.3)',
    number: '104',
    name: { en: 'Blood Emergency', hi: 'रक्त आपातकाल', kn: 'ರಕ್ತ ತುರ್ತು' },
    desc: {
      en: 'Urgent blood requirement, donors',
      hi: 'तत्काल रक्त की आवश्यकता, दाताओं',
      kn: 'ತುರ್ತು ರಕ್ತದ ಅವಶ್ಯಕತೆ, ದಾನಿಗಳು'
    },
    helplines: [
      { icon: '🩸', name: { en: 'Health Helpline', hi: 'स्वास्थ्य हेल्पलाइन', kn: 'ಆರೋಗ್ಯ ಸಹಾಯವಾಣಿ' }, num: '104' },
      { icon: '🏥', name: { en: 'Red Cross Blood Bank', hi: 'रेड क्रॉस ब्लड बैंक', kn: 'ರೆಡ್ ಕ್ರಾಸ್ ಬ್ಲಡ್ ಬ್ಯಾಂಕ್' }, num: '18001806127' },
      { icon: '🚑', name: { en: 'Ambulance', hi: 'एम्बुलेंस', kn: 'ಆಂಬ್ಯುಲೆನ್ಸ್' }, num: '108' },
    ],
    steps: {
      en: ['Identify the required blood group immediately', 'Contact nearest government hospital blood bank', 'Call 104 or visit e-Rakt Kosh portal (www.eraktkosh.in)', 'Post urgent request on social media with blood group and hospital', 'Contact local blood donor clubs and associations', 'Check with Red Cross Society for availability', 'Ensure compatibility testing before transfusion', 'Stay at the hospital and coordinate with medical team'],
      hi: ['तुरंत आवश्यक रक्त समूह पहचानें', 'निकटतम सरकारी अस्पताल के ब्लड बैंक से संपर्क करें', '104 पर कॉल करें या e-Rakt Kosh पोर्टल देखें', 'रक्त समूह और अस्पताल के साथ सोशल मीडिया पर तत्काल अनुरोध पोस्ट करें', 'स्थानीय रक्तदाता क्लब और संघों से संपर्क करें', 'उपलब्धता के लिए रेड क्रॉस सोसायटी से जाँचें', 'ट्रांसफ्यूजन से पहले संगतता परीक्षण सुनिश्चित करें', 'अस्पताल में रहें और चिकित्सा दल के साथ समन्वय करें'],
      kn: ['ತಕ್ಷಣ ಅಗತ್ಯ ರಕ್ತ ಗುಂಪು ಗುರುತಿಸಿ', 'ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆ ರಕ್ತ ಬ್ಯಾಂಕ್ ಸಂಪರ್ಕಿಸಿ', '104 ಗೆ ಕರೆ ಮಾಡಿ ಅಥವಾ e-Rakt Kosh ಪೋರ್ಟಲ್ ನೋಡಿ', 'ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮದಲ್ಲಿ ತುರ್ತು ಮನವಿ ಹಾಕಿ', 'ಸ್ಥಳೀಯ ರಕ್ತದಾನ ಸಂಘ ಸಂಪರ್ಕಿಸಿ', 'ರೆಡ್ ಕ್ರಾಸ್ ಸಂಪರ್ಕಿಸಿ', 'ರಕ್ತ ಪರೀಕ್ಷೆ ಖಚಿತಪಡಿಸಿ', 'ಆಸ್ಪತ್ರೆಯಲ್ಲಿ ತಂಡದೊಂದಿಗೆ ಸಮನ್ವಯ ಮಾಡಿ'],
    },
    guidance: {
      en: 'e-Rakt Kosh is India\'s National Blood Bank Management Information System. All government blood banks are listed here. Blood donation is voluntary and free – blood banks cannot charge for blood.',
      hi: 'e-Rakt Kosh भारत का राष्ट्रीय ब्लड बैंक प्रबंधन सूचना प्रणाली है। सभी सरकारी ब्लड बैंक यहाँ सूचीबद्ध हैं। रक्तदान स्वैच्छिक और निःशुल्क है।',
      kn: 'e-Rakt Kosh ಭಾರತದ ರಾಷ್ಟ್ರೀಯ ರಕ್ತ ಬ್ಯಾಂಕ್ ಮಾಹಿತಿ ವ್ಯವಸ್ಥೆ. ಎಲ್ಲಾ ಸರ್ಕಾರಿ ರಕ್ತ ಬ್ಯಾಂಕ್ ಇಲ್ಲಿ ಪಟ್ಟಿಮಾಡಲಾಗಿದೆ. ರಕ್ತದಾನ ಸ್ವಯಂಪ್ರೇರಿತ ಮತ್ತು ಉಚಿತ.',
    },
    guidanceLink: 'https://eraktkosh.in',
    checklist: {
      en: ['Blood group identified', 'Nearest blood bank contacted', 'e-Rakt Kosh checked', 'Social media appeal posted', 'Blood donor contacts informed', 'Red Cross contacted', 'Cross-matching arranged', 'Medical team coordinated with'],
      hi: ['रक्त समूह की पहचान की', 'निकटतम ब्लड बैंक से संपर्क किया', 'e-Rakt Kosh जाँचा', 'सोशल मीडिया अपील पोस्ट की', 'रक्तदाता संपर्कों को सूचित किया', 'रेड क्रॉस से संपर्क किया', 'क्रॉस-मैचिंग की व्यवस्था की', 'चिकित्सा दल के साथ समन्वय किया'],
      kn: ['ರಕ್ತ ಗುಂಪು ಗುರುತಿಸಿದ್ದಾರೆ', 'ರಕ್ತ ಬ್ಯಾಂಕ್ ಸಂಪರ್ಕಿಸಿದ್ದಾರೆ', 'e-Rakt Kosh ಪರಿಶೀಲಿಸಿದ್ದಾರೆ', 'ಮನವಿ ಹಾಕಿದ್ದಾರೆ', 'ದಾನಿಗಳಿಗೆ ತಿಳಿಸಿದ್ದಾರೆ', 'ರೆಡ್ ಕ್ರಾಸ್ ಸಂಪರ್ಕಿಸಿದ್ದಾರೆ', 'ಕ್ರಾಸ್-ಮ್ಯಾಚಿಂಗ್ ತಯಾರಿಸಿದ್ದಾರೆ', 'ತಂಡದೊಂದಿಗೆ ಸಮನ್ವಯ ಮಾಡಿದ್ದಾರೆ'],
    },
    primaryNumber: '104',
  },
];

// ============================================================
// NEARBY SERVICES DATA
// ============================================================

const NEARBY_SERVICES = {
  hospitals: [
    { name: 'AIIMS Hospital', address: 'Ansari Nagar, New Delhi – 110029', distance: '0.8 km', status: 'Open', type: 'hospitals', icon: '🏥', phone: '011-26588500' },
    { name: 'Rajiv Gandhi Government Hospital', address: 'Park Town, Chennai – 600003', distance: '1.2 km', status: 'Open', type: 'hospitals', icon: '🏥', phone: '044-25305000' },
    { name: 'Victoria Hospital', address: 'Kalasipalyam, Bengaluru – 560002', distance: '2.1 km', status: 'Open', type: 'hospitals', icon: '🏥', phone: '080-26701150' },
    { name: 'Seth GS Medical College', address: 'Parel, Mumbai – 400012', distance: '3.4 km', status: 'Open', type: 'hospitals', icon: '🏥', phone: '022-24136051' },
    { name: 'PGI Hospital', address: 'Sector 12, Chandigarh – 160012', distance: '4.7 km', status: 'Open', type: 'hospitals', icon: '🏥', phone: '0172-2747585' },
    { name: 'Osmania General Hospital', address: 'Afzalgunj, Hyderabad – 500012', distance: '5.2 km', status: 'Open', type: 'hospitals', icon: '🏥', phone: '040-24600424' },
  ],
  police: [
    { name: 'Central Police Station', address: 'MG Road, City Center – 560001', distance: '0.5 km', status: 'Open', type: 'police', icon: '👮', phone: '100' },
    { name: 'Traffic Police HQ', address: 'Brigade Road, City Center – 560025', distance: '1.8 km', status: 'Open', type: 'police', icon: '👮', phone: '103' },
    { name: 'Women Police Station', address: 'Residency Road – 560025', distance: '2.3 km', status: 'Open', type: 'police', icon: '👮', phone: '1091' },
    { name: 'Cyber Crime Cell', address: 'Infantry Road – 560001', distance: '3.0 km', status: 'Open', type: 'police', icon: '👮', phone: '1930' },
    { name: 'Railway Police Station', address: 'City Railway Station – 560023', distance: '4.1 km', status: 'Open', type: 'police', icon: '👮', phone: '139' },
    { name: 'Highway Patrol Unit', address: 'National Highway Ring Road', distance: '6.5 km', status: 'Open', type: 'police', icon: '👮', phone: '100' },
  ],
  fire: [
    { name: 'Central Fire Station', address: 'Swami Vivekananda Road – 560001', distance: '1.1 km', status: 'Open', type: 'fire', icon: '🔥', phone: '101' },
    { name: 'North Zone Fire Station', address: 'Rajajinagar – 560010', distance: '3.2 km', status: 'Open', type: 'fire', icon: '🔥', phone: '101' },
    { name: 'South Fire Brigade', address: 'Jayanagar – 560041', distance: '4.8 km', status: 'Open', type: 'fire', icon: '🔥', phone: '101' },
    { name: 'Industrial Fire Unit', address: 'Peenya Industrial Area – 560058', distance: '7.2 km', status: 'Open', type: 'fire', icon: '🔥', phone: '101' },
    { name: 'Airport Fire Station', address: 'Kempegowda International Airport', distance: '28 km', status: 'Open', type: 'fire', icon: '🔥', phone: '101' },
    { name: 'East Zone Fire Station', address: 'Whitefield Road – 560066', distance: '15 km', status: 'Open', type: 'fire', icon: '🔥', phone: '101' },
  ],
  blood: [
    { name: 'Red Cross Blood Bank', address: 'Near Central Hospital – 560002', distance: '0.9 km', status: 'Open', type: 'blood', icon: '🩸', phone: '18001806127' },
    { name: 'Government Blood Bank', address: 'District Hospital Complex – 560040', distance: '2.5 km', status: 'Open', type: 'blood', icon: '🩸', phone: '104' },
    { name: 'Sankalp Blood Centre', address: 'Koramangala – 560034', distance: '3.7 km', status: 'Open', type: 'blood', icon: '🩸', phone: '080-25534137' },
    { name: 'Lions Club Blood Bank', address: 'Shivajinagar – 560001', distance: '4.4 km', status: 'Open', type: 'blood', icon: '🩸', phone: '080-22200200' },
    { name: 'Rotary Blood Bank', address: 'Malleswaram – 560003', distance: '5.1 km', status: 'Open', type: 'blood', icon: '🩸', phone: '080-23461001' },
    { name: 'Narayana Health Blood Bank', address: 'Bommasandra – 560099', distance: '12 km', status: 'Open', type: 'blood', icon: '🩸', phone: '1800-843-6500' },
  ],
};

// ============================================================
// APP STATE
// ============================================================

let currentLang = 'en';
let currentCategory = null;
let currentNearbyFilter = 'hospitals';
let isSpeaking = false;
let speechUtterance = null;
let userLocation = null;
let mobileMenuOpen = false;

// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

function initApp() {
  renderCategories();
  renderNearby('hospitals');
  setupNavbarScroll();
  setupIntersectionObserver();
  updateLanguage('en');
}

// ============================================================
// LANGUAGE SYSTEM
// ============================================================

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === `lang-${lang}`);
    btn.setAttribute('aria-pressed', btn.id === `lang-${lang}` ? 'true' : 'false');
  });
  updateLanguage(lang);
  if (currentCategory !== null) {
    renderDetail(currentCategory);
  }
}

function updateLanguage(lang) {
  const content = LANG_CONTENT[lang];
  if (!content) return;

  for (const [id, text] of Object.entries(content)) {
    if (id.startsWith('location_') || id.startsWith('voice_') ||
        id.startsWith('sos_') || id.startsWith('call_')) continue;

    const el = document.getElementById(id);
    if (!el) continue;

    if (el.tagName === 'BUTTON' || el.tagName === 'SPAN' || el.tagName === 'P' || el.tagName === 'DIV') {
      if (el.innerHTML !== text) el.innerHTML = text;
    } else {
      if (el.textContent !== text) el.textContent = text;
    }
  }

  // Update document language
  document.documentElement.lang = lang === 'kn' ? 'kn' : lang === 'hi' ? 'hi' : 'en';

  // Re-render categories with new language
  renderCategories();
  renderNearby(currentNearbyFilter);
}

// ============================================================
// CATEGORIES
// ============================================================

function renderCategories() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;

  grid.innerHTML = EMERGENCY_CATEGORIES.map((cat, index) => `
    <div class="category-card"
         id="cat-card-${cat.id}"
         role="listitem"
         tabindex="0"
         onclick="selectCategory(${index})"
         onkeydown="if(event.key==='Enter'||event.key===' ') selectCategory(${index})"
         aria-label="${cat.name[currentLang]} emergency"
         style="--cat-color: ${cat.color}; --cat-bg: ${cat.bg}; --cat-border: ${cat.border}; --cat-shadow: ${cat.shadow};"
    >
      <div class="cat-icon-wrapper">
        <span aria-hidden="true">${cat.icon}</span>
      </div>
      <div class="cat-name">${cat.name[currentLang]}</div>
      <div class="cat-desc">${cat.desc[currentLang]}</div>
      <div class="cat-number">${cat.number}</div>
    </div>
  `).join('');
}

function selectCategory(index) {
  currentCategory = index;
  const cat = EMERGENCY_CATEGORIES[index];

  // Mark active
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
  const activeCard = document.getElementById(`cat-card-${cat.id}`);
  if (activeCard) activeCard.classList.add('active');

  renderDetail(index);
  scrollToSection('detail-section');
}

// ============================================================
// EMERGENCY DETAIL PANEL
// ============================================================

function renderDetail(index) {
  const cat = EMERGENCY_CATEGORIES[index];
  const lang = currentLang;

  // Show section
  const section = document.getElementById('detail-section');
  section.style.display = 'block';

  // Header
  document.getElementById('detail-icon').textContent = cat.icon;
  document.getElementById('detail-title').textContent = cat.name[lang];
  document.getElementById('detail-subtitle').textContent = cat.desc[lang];
  document.getElementById('call-number-display').textContent = cat.primaryNumber;

  // Helplines
  const helplineContainer = document.getElementById('helpline-numbers');
  helplineContainer.innerHTML = cat.helplines.map(h => `
    <div class="helpline-item" onclick="callNumber('${h.num}')" role="button" tabindex="0"
         onkeydown="if(event.key==='Enter') callNumber('${h.num}')"
         aria-label="Call ${h.name[lang]} at ${h.num}">
      <div class="helpline-icon-wrapper"><span aria-hidden="true">${h.icon}</span></div>
      <div class="helpline-info">
        <div class="helpline-name">${h.name[lang]}</div>
        <div class="helpline-num">${h.num}</div>
      </div>
      <button class="helpline-call-btn" aria-label="Call ${h.num}">📞 Call</button>
    </div>
  `).join('');

  // Steps
  const stepsList = document.getElementById('steps-list');
  stepsList.innerHTML = cat.steps[lang].map((step, i) => `
    <li class="step-item" role="listitem">
      <div class="step-num">${i + 1}</div>
      <div class="step-text">${step}</div>
    </li>
  `).join('');

  // Guidance
  document.getElementById('guidance-text').textContent = cat.guidance[lang];
  const guidanceLink = document.getElementById('guidance-link');
  guidanceLink.href = cat.guidanceLink;

  // Checklist
  const checklistContainer = document.getElementById('checklist-items');
  checklistContainer.innerHTML = cat.checklist[lang].map((item, i) => `
    <div class="checklist-item" role="listitem" tabindex="0"
         onclick="toggleChecklist(this)"
         onkeydown="if(event.key==='Enter'||event.key===' ') toggleChecklist(this)"
         aria-checked="false">
      <div class="checklist-checkbox" aria-hidden="true"></div>
      <div class="checklist-text">${item}</div>
    </div>
  `).join('');
}

function toggleChecklist(item) {
  item.classList.toggle('checked');
  item.setAttribute('aria-checked', item.classList.contains('checked') ? 'true' : 'false');
}

function closeDetail() {
  stopVoice();
  const section = document.getElementById('detail-section');
  section.style.display = 'none';
  document.querySelectorAll('.category-card').forEach(c => c.classList.remove('active'));
  currentCategory = null;
  scrollToSection('categories');
}

function callEmergency() {
  if (currentCategory === null) return;
  const cat = EMERGENCY_CATEGORIES[currentCategory];
  callNumber(cat.primaryNumber);
}

// ============================================================
// CALL FUNCTION
// ============================================================

function callNumber(number) {
  const lang = LANG_CONTENT[currentLang];
  showToast('📞', `${lang.call_connecting}${number}`);
  window.location.href = `tel:${number}`;
}

// ============================================================
// NEARBY SERVICES
// ============================================================

function filterNearby(type) {
  currentNearbyFilter = type;
  document.querySelectorAll('.nearby-tab').forEach(tab => {
    tab.classList.remove('active');
    tab.setAttribute('aria-selected', 'false');
  });
  const activeTab = document.getElementById(`tab-${type}`);
  if (activeTab) {
    activeTab.classList.add('active');
    activeTab.setAttribute('aria-selected', 'true');
  }
  renderNearby(type);
}

function renderNearby(type) {
  const grid = document.getElementById('nearby-grid');
  if (!grid) return;

  const services = NEARBY_SERVICES[type] || [];

  grid.innerHTML = services.map(s => `
    <div class="nearby-card type-${s.type}" role="listitem" tabindex="0">
      <div class="nearby-card-top">
        <div class="nearby-icon type-${s.type}" aria-hidden="true">${s.icon}</div>
        <div class="nearby-distance">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="12" height="12"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
          ${s.distance}
        </div>
      </div>
      <div class="nearby-name">${s.name}</div>
      <div class="nearby-address">${s.address}</div>
      <div class="nearby-status open"><span aria-label="Open">24/7 Open</span></div>
      <div class="nearby-card-actions">
        <button class="nearby-action-btn primary" onclick="callNumber('${s.phone}')" aria-label="Call ${s.name}">📞 Call Now</button>
        <button class="nearby-action-btn secondary" onclick="openDirections('${s.name}')" aria-label="Get directions to ${s.name}">🗺️ Directions</button>
      </div>
    </div>
  `).join('');
}

function openDirections(name) {
  const query = encodeURIComponent(name + ' emergency');
  if (userLocation) {
    window.open(`https://www.google.com/maps/search/${query}/@${userLocation.lat},${userLocation.lng},14z`, '_blank');
  } else {
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  }
}

// ============================================================
// GEOLOCATION
// ============================================================

function detectLocation() {
  const locationText = document.getElementById('location-text');
  const lang = LANG_CONTENT[currentLang];

  if (!navigator.geolocation) {
    if (locationText) locationText.textContent = lang.location_error;
    showToast('📍', lang.location_error);
    return;
  }

  if (locationText) locationText.textContent = lang.location_detecting;
  showToast('📡', lang.location_detecting);

  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude: lat, longitude: lng } = position.coords;
      userLocation = { lat, lng };

      // Reverse geocode with Nominatim
      fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`, {
        headers: { 'Accept-Language': 'en' }
      })
      .then(r => r.json())
      .then(data => {
        const city = data.address?.city || data.address?.town || data.address?.village || 'Your Area';
        const state = data.address?.state || '';
        const locationStr = `📍 ${city}${state ? ', ' + state : ''}`;
        if (locationText) locationText.textContent = locationStr;
        showToast('✅', `Location detected: ${city}`);
      })
      .catch(() => {
        const locationStr = `📍 ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
        if (locationText) locationText.textContent = locationStr;
        showToast('✅', 'Location detected');
      });
    },
    (error) => {
      const msg = error.code === 1 ? lang.location_denied : lang.location_error;
      if (locationText) locationText.textContent = msg;
      showToast('📍', msg);
    },
    { timeout: 10000, enableHighAccuracy: true }
  );
}

// ============================================================
// VOICE ASSISTANCE
// ============================================================

function toggleVoice() {
  if (isSpeaking) {
    stopVoice();
  } else {
    if (currentCategory !== null) {
      readInstructions();
    } else {
      const lang = LANG_CONTENT[currentLang];
      const welcomeText = currentLang === 'hi'
        ? 'SurakshaAI में आपका स्वागत है। आपातकाल का प्रकार चुनें।'
        : currentLang === 'kn'
        ? 'SurakshaAI ಗೆ ಸ್ವಾಗತ. ತುರ್ತು ವಿಧ ಆಯ್ಕೆ ಮಾಡಿ.'
        : 'Welcome to SurakshaAI. Your emergency assistance platform. Select an emergency type to get help.';
      speak(welcomeText);
    }
  }
}

function readInstructions() {
  if (currentCategory === null) return;

  const cat = EMERGENCY_CATEGORIES[currentCategory];
  const lang = currentLang;

  const text = [
    cat.name[lang] + ' Emergency.',
    'Call ' + cat.primaryNumber + ' immediately.',
    'Immediate steps:',
    ...cat.steps[lang].map((s, i) => `Step ${i + 1}: ${s}`)
  ].join('. ');

  speak(text);

  const btn = document.getElementById('voice-read-btn');
  if (btn) btn.classList.add('speaking');
}

function speak(text) {
  stopVoice();

  if (!('speechSynthesis' in window)) {
    showToast('❌', 'Voice not supported in this browser');
    return;
  }

  speechUtterance = new SpeechSynthesisUtterance(text);
  speechUtterance.rate = 0.92;
  speechUtterance.pitch = 1;
  speechUtterance.volume = 1;

  // Set language
  const langMap = { en: 'en-IN', hi: 'hi-IN', kn: 'kn-IN' };
  speechUtterance.lang = langMap[currentLang] || 'en-IN';

  speechUtterance.onstart = () => {
    isSpeaking = true;
    showVoiceIndicator(true);
    const btn = document.getElementById('voice-nav-btn');
    if (btn) btn.classList.add('active');
    showToast('🔊', LANG_CONTENT[currentLang].voice_started);
  };

  speechUtterance.onend = () => {
    isSpeaking = false;
    showVoiceIndicator(false);
    const btn = document.getElementById('voice-nav-btn');
    if (btn) btn.classList.remove('active');
    const readBtn = document.getElementById('voice-read-btn');
    if (readBtn) readBtn.classList.remove('speaking');
  };

  speechUtterance.onerror = () => {
    isSpeaking = false;
    showVoiceIndicator(false);
  };

  window.speechSynthesis.speak(speechUtterance);
}

function stopVoice() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
  isSpeaking = false;
  showVoiceIndicator(false);
  const navBtn = document.getElementById('voice-nav-btn');
  if (navBtn) navBtn.classList.remove('active');
  const readBtn = document.getElementById('voice-read-btn');
  if (readBtn) readBtn.classList.remove('speaking');

  if (isSpeaking) {
    showToast('🔇', LANG_CONTENT[currentLang].voice_stopped);
  }
}

function showVoiceIndicator(show) {
  const indicator = document.getElementById('voice-indicator');
  if (!indicator) return;
  if (show) {
    indicator.classList.add('show');
  } else {
    indicator.classList.remove('show');
  }
}

// ============================================================
// SOS SYSTEM
// ============================================================

function triggerSOS() {
  // Flash the screen red
  document.body.style.background = 'rgba(220,38,38,0.15)';
  setTimeout(() => { document.body.style.background = ''; }, 300);

  const modal = document.getElementById('sos-modal');
  if (modal) {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  // Also attempt to detect location
  detectLocation();

  // SOS voice announcement
  const lang = LANG_CONTENT[currentLang];
  showToast('🚨', lang.sos_activated);

  // Speak SOS message
  speak(currentLang === 'hi'
    ? 'SOS अलर्ट। आपकी लोकेशन साझा की जा रही है।'
    : currentLang === 'kn'
    ? 'SOS ಎಚ್ಚರಿಕೆ. ನಿಮ್ಮ ಸ್ಥಳ ಹಂಚಿಕೊಳ್ಳಲಾಗುತ್ತಿದೆ.'
    : 'SOS Alert Activated. Your location is being shared. Please select emergency service.'
  );
}

function closeSOS() {
  const modal = document.getElementById('sos-modal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  stopVoice();
}

// Close modal on overlay click
document.addEventListener('click', (e) => {
  const modal = document.getElementById('sos-modal');
  if (modal && e.target === modal) {
    closeSOS();
  }
});

// Close modal on ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeSOS();
    if (mobileMenuOpen) toggleMobileMenu();
  }
});

// ============================================================
// TOAST NOTIFICATION
// ============================================================

let toastTimer = null;

function showToast(icon, message) {
  const toast = document.getElementById('toast');
  const toastIcon = document.getElementById('toast-icon');
  const toastMsg = document.getElementById('toast-msg');

  if (!toast || !toastIcon || !toastMsg) return;

  toastIcon.textContent = icon;
  toastMsg.textContent = message;
  toast.classList.add('show');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}

// ============================================================
// MOBILE MENU
// ============================================================

function toggleMobileMenu() {
  mobileMenuOpen = !mobileMenuOpen;
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');

  if (menu) menu.classList.toggle('open', mobileMenuOpen);
  if (hamburger) hamburger.classList.toggle('open', mobileMenuOpen);
}

// ============================================================
// NAVBAR SCROLL EFFECT
// ============================================================

function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (navbar) {
      if (scrollY > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    lastScroll = scrollY;
  }, { passive: true });
}

// ============================================================
// SCROLL TO SECTION
// ============================================================

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 68;
  const elTop = el.getBoundingClientRect().top + window.scrollY - navHeight - 20;

  window.scrollTo({ top: elTop, behavior: 'smooth' });
}

// ============================================================
// INTERSECTION OBSERVER (Scroll Animations)
// ============================================================

function setupIntersectionObserver() {
  const elements = document.querySelectorAll(
    '.stat-card, .category-card, .nearby-card, .tip-card, .detail-card'
  );

  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(25px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// Re-run observer after content loads
function refreshObserver() {
  setTimeout(setupIntersectionObserver, 100);
}
