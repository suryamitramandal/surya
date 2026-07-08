/* ============================================================
   LANGUAGE SYSTEM — Surya Mitra Mandal
   Languages: English, Hindi, Marathi
   ============================================================ */

const LANGS = {
  en: {
    /* Nav */
    nav_home:'Home', nav_about:'About', nav_leadership:'Leadership',
    nav_gallery:'Gallery', nav_event:'Events', nav_sponsors:'Sponsors',
    nav_donate:'Donate', nav_contact:'Contact',
    topbar_call:'Call Us: +91 9867648995',
    /* Home hero */
    hero_eyebrow:'Ganpati Sthapana · 2026',
    hero_h1:'Our Beloved <em>Bappa</em><br>Singh Estate Cha Raja',
    hero_sub:'Surya Mitra Mandal, Singh Estate — celebrating Ganesh Utsav with devotion, grandeur and community spirit since 2001.',
    hero_btn1:'View Event Details', hero_btn2:'Donate Now',
    countdown_label:'Countdown to Sthapana',
    cd_days:'Days', cd_hours:'Hours', cd_mins:'Mins', cd_secs:'Secs',
    /* Sections */
    about_eyebrow:'Our Story',
    about_h2:'About Surya Mitra Mandal',
    about_p1:'Founded in 2001 by local residents of Singh Estate, Kandivali East, the Surya Mitra Mandal has grown from a small community celebration into one of Mumbai\'s most celebrated Ganesh Utsav events in the suburbs.',
    about_p2:'What began with humble beginnings has become a landmark of faith, culture, and community service — uniting people across all backgrounds every year.',
    about_highlight:'"More than a festival — a movement of devotion and community love that touches thousands every year."',
    about_years:'Years of Celebration',
    about_btn:'Read Full Story',
    features_eyebrow:'What We Do',
    features_h2:'Our Values & Activities',
    f1_title:'Grand Processions',f1_desc:'Our Ganesh Visarjan processions draw thousands with dhol-tasha, cultural performances, and devotion.',
    f2_title:'Social Initiatives',f2_desc:'Blood donation camps, free medical checkups, hygiene drives — we give back to our community every year.',
    f3_title:'Cultural Programs',f3_desc:'Bhajans, kirtans, classical dance performances celebrating the rich cultural heritage of Ganesh Utsav.',
    stats_eyebrow:'By the Numbers',stats_h2:'Our Journey in Numbers',
    s1:'Years Active',s2:'Devotees Yearly',s3:'Events Organized',s4:'Social Drives',
    events_eyebrow:'Upcoming',events_h2:'Events & Programs',
    gallery_eyebrow:'Memories',gallery_h2:'Our Gallery',
    sponsors_eyebrow:'Our Partners',sponsors_h2:'Proudly Supported By',
    cta_h2:'Be Part of the Celebration',
    cta_p:'Join Surya Mitra Mandal — as a volunteer, sponsor, or devotee — and help us make Bappa\'s welcome grander every year.',
    cta_btn1:'Donate Now',cta_btn2:'Contact Us',
    /* About page */
    abt_hist_h:'History of Surya Mitra Mandal',
    abt_mission_h:'Our Mission',abt_vision_h:'Our Vision',abt_obj_h:'Our Objectives',
    abt_m1:'Grand Celebrations',abt_m1p:'Organize large-scale, culturally-rich Ganesh Utsav celebrations that bring the community together.',
    abt_m2:'Social Impact',abt_m2p:'Run health camps, blood drives, and charitable initiatives that benefit the local community year-round.',
    abt_m3:'Cultural Preservation',abt_m3p:'Keep alive the traditions, music, arts, and spiritual practices of Ganesh Chaturthi for future generations.',
    timeline_h:'Our Milestones',
    /* Leadership page */
    lead_exec:'Executive Leaders',lead_team:'Our Team',
    lead_eyebrow:'The People Behind It All',lead_h2:'Leadership & Team',
    /* Gallery page */
    gall_eyebrow:'Captured Moments',gall_h2:'Gallery',
    gall_all:'All',gall_fest:'Festival',gall_proc:'Procession',gall_team:'Team',
    /* Events page */
    evnt_eyebrow:'Programs & Events',evnt_h2:'Events',
    evnt_upcoming:'Upcoming Events',evnt_past:'Past Highlights',
    /* Sponsors page */
    spon_eyebrow:'Valued Partners',spon_h2:'Our Sponsors',
    spon_become_h:'Become a Sponsor',spon_become_p:'Join our family of sponsors and reach thousands of devotees across Mumbai.',
    spon_gold:'Organization Sponsors',spon_silver:'Community Supporters',spon_bronze:'Bronze Sponsors',
    /* Donate page */
    don_eyebrow:'Support Us',don_h2:'Make a Donation',
    don_sub:'Your contribution helps us celebrate Lord Ganesha with grandeur and support our community initiatives.',
    don_upi:'Pay via UPI',don_bank:'Bank Transfer',don_online:'Online Payment',
    don_faq:'Frequently Asked Questions',
    /* Contact page */
    cont_eyebrow:'Reach Us',cont_h2:'Contact Us',
    cont_name:'Full Name',cont_email:'Email Address',cont_phone:'Phone Number',
    cont_subject:'Subject',cont_msg:'Message',cont_submit:'Send Message',
    cont_success:'Thank you! Your message has been sent.',
    /* Footer */
    footer_tagline:'Surya Mitra Mandal — Singh Estate Cha Raja. Faith, Community, Devotion.',
    footer_quick:'Quick Links',footer_connect:'Connect',footer_contact:'Contact',
    footer_copy:'All rights reserved. Made with ❤️ by Ayush Singh.',
  },

  hi: {
    nav_home:'होम', nav_about:'हमारे बारे में', nav_leadership:'नेतृत्व',
    nav_gallery:'गैलरी', nav_event:'कार्यक्रम', nav_sponsors:'प्रायोजक',
    nav_donate:'दान करें', nav_contact:'संपर्क करें',
    topbar_call:'हमें कॉल करें: +91 9867648995',
    hero_eyebrow:'गणपती स्थापना · २०२६',
    hero_h1:'हमारे प्यारे <em>बाप्पा</em><br>सिंह इस्टेट चा राजा',
    hero_sub:'सूर्य मित्र मंडल, सिंह इस्टेट — २००१ से श्रद्धा, भव्यता और सामुदायिक भावना के साथ गणेश उत्सव मना रहा है।',
    hero_btn1:'कार्यक्रम विवरण', hero_btn2:'दान करें',
    countdown_label:'स्थापना की काउंटडाउन',
    cd_days:'दिन', cd_hours:'घंटे', cd_mins:'मिनट', cd_secs:'सेकंड',
    about_eyebrow:'हमारी कहानी',about_h2:'सूर्य मित्र मंडल के बारे में',
    about_p1:'२००१ में सिंह इस्टेट, कांदिवली पूर्व के स्थानीय निवासियों द्वारा स्थापित, सूर्य मित्र मंडल एक छोटे समुदाय उत्सव से मुंबई के उपनगरों में एक भव्य गणेश उत्सव बन गया है।',
    about_p2:'एक विनम्र शुरुआत से यह विश्वास, संस्कृति और सामुदायिक सेवा का प्रतीक बन गया है।',
    about_highlight:'"यह केवल एक त्योहार नहीं — यह लाखों दिलों को जोड़ने वाली भक्ति की लहर है।"',
    about_years:'वर्षों की उत्सव परंपरा',
    about_btn:'पूरी कहानी पढ़ें',
    features_eyebrow:'हम क्या करते हैं',features_h2:'हमारे मूल्य और गतिविधियाँ',
    f1_title:'भव्य जुलूस',f1_desc:'हमारे गणेश विसर्जन जुलूस में ढोल-ताशा, सांस्कृतिक कार्यक्रम और हजारों भक्त शामिल होते हैं।',
    f2_title:'सामाजिक पहल',f2_desc:'रक्तदान शिविर, निःशुल्क चिकित्सा जांच — हम हर साल समुदाय को वापस देते हैं।',
    f3_title:'सांस्कृतिक कार्यक्रम',f3_desc:'भजन, कीर्तन, शास्त्रीय नृत्य — गणेश उत्सव की समृद्ध सांस्कृतिक विरासत का उत्सव।',
    stats_eyebrow:'संख्याओं में',stats_h2:'हमारी यात्रा संख्याओं में',
    s1:'सक्रिय वर्ष',s2:'वार्षिक भक्त',s3:'आयोजित कार्यक्रम',s4:'सामाजिक अभियान',
    events_eyebrow:'आगामी',events_h2:'कार्यक्रम और प्रोग्राम',
    gallery_eyebrow:'यादें',gallery_h2:'हमारी गैलरी',
    sponsors_eyebrow:'हमारे साझेदार',sponsors_h2:'हमारे प्रायोजकों द्वारा समर्थित',
    cta_h2:'उत्सव का हिस्सा बनें',cta_p:'स्वयंसेवक, प्रायोजक या भक्त के रूप में जुड़ें और बाप्पा के स्वागत को और भव्य बनाएं।',
    cta_btn1:'दान करें',cta_btn2:'संपर्क करें',
    abt_hist_h:'सूर्य मित्र मंडल का इतिहास',
    abt_mission_h:'हमारा मिशन',abt_vision_h:'हमारी दृष्टि',abt_obj_h:'हमारे उद्देश्य',
    abt_m1:'भव्य उत्सव',abt_m1p:'सामुदायिक भावना के साथ बड़े पैमाने पर सांस्कृतिक गणेश उत्सव का आयोजन।',
    abt_m2:'सामाजिक प्रभाव',abt_m2p:'स्वास्थ्य शिविर, रक्तदान और धर्मार्थ पहल जो पूरे वर्ष लाभ देती हैं।',
    abt_m3:'सांस्कृतिक संरक्षण',abt_m3p:'आने वाली पीढ़ियों के लिए परंपराओं, संगीत और आध्यात्मिक प्रथाओं को जीवित रखना।',
    timeline_h:'हमारी उपलब्धियाँ',
    lead_exec:'कार्यकारी नेता',lead_team:'हमारी टीम',
    lead_eyebrow:'सबके पीछे के लोग',lead_h2:'नेतृत्व और टीम',
    gall_eyebrow:'कैप्चर किए गए पल',gall_h2:'गैलरी',
    gall_all:'सभी',gall_fest:'उत्सव',gall_proc:'जुलूस',gall_team:'टीम',
    evnt_eyebrow:'कार्यक्रम',evnt_h2:'इवेंट्स',
    evnt_upcoming:'आगामी कार्यक्रम',evnt_past:'पिछली झलकियाँ',
    spon_eyebrow:'मूल्यवान साझेदार',spon_h2:'हमारे प्रायोजक',
    spon_become_h:'प्रायोजक बनें',spon_become_p:'हमारे प्रायोजक परिवार में शामिल हों।',
    spon_gold:'कॉर्पोरेट प्रायोजक',spon_silver:'समुदाय सहयोगी',spon_bronze:'ब्रॉन्ज स्पॉन्सर',
    don_eyebrow:'हमें समर्थन करें',don_h2:'दान करें',
    don_sub:'आपका योगदान भगवान गणेश के उत्सव को भव्य बनाने में मदद करता है।',
    don_upi:'UPI से भुगतान करें',don_bank:'बैंक ट्रांसफर',don_online:'ऑनलाइन भुगतान',
    don_faq:'अक्सर पूछे जाने वाले प्रश्न',
    cont_eyebrow:'हमसे संपर्क करें',cont_h2:'संपर्क करें',
    cont_name:'पूरा नाम',cont_email:'ईमेल पता',cont_phone:'फोन नंबर',
    cont_subject:'विषय',cont_msg:'संदेश',cont_submit:'संदेश भेजें',
    cont_success:'धन्यवाद! आपका संदेश भेज दिया गया है।',
    footer_tagline:'सूर्य मित्र मंडल — सिंह इस्टेट चा राजा। आस्था, समुदाय, भक्ति।',
    footer_quick:'त्वरित लिंक',footer_connect:'जुड़ें',footer_contact:'संपर्क',
    footer_copy:'सर्वाधिकार सुरक्षित। आयुष सिंह द्वारा ❤️ के साथ बनाया गया।',
  },

  mr: {
    nav_home:'मुखपृष्ठ', nav_about:'आमच्याबद्दल', nav_leadership:'नेतृत्व',
    nav_gallery:'गॅलरी', nav_event:'कार्यक्रम', nav_sponsors:'प्रायोजक',
    nav_donate:'देणगी', nav_contact:'संपर्क',
    topbar_call:'आम्हाला कॉल करा: +91 9867648995',
    hero_eyebrow:'गणपती स्थापना · २०२६',
    hero_h1:'आमचे लाडके <em>बाप्पा</em><br>सिंह इस्टेट चा राजा',
    hero_sub:'सुर्या मित्र मंडळ, सिंह इस्टेट — २००१ पासून भक्तिभाव, दिव्यता आणि सामुदायिक आत्म्यासह गणेश उत्सव साजरा करत आहे.',
    hero_btn1:'कार्यक्रम तपशील', hero_btn2:'देणगी द्या',
    countdown_label:'स्थापना काउंटडाउन',
    cd_days:'दिवस', cd_hours:'तास', cd_mins:'मिनिटे', cd_secs:'सेकंद',
    about_eyebrow:'आमची कहाणी',about_h2:'सुर्या मित्र मंडळाबद्दल',
    about_p1:'२००१ मध्ये सिंह इस्टेट, कांदिवली पूर्व येथील स्थानिक रहिवाश्यांनी स्थापन केलेले सुर्या मित्र मंडळ एका छोट्या सामुदायिक उत्सवातून मुंबई उपनगरातील एका भव्य गणेश उत्सवात रूपांतरित झाले आहे.',
    about_p2:'विनम्र सुरुवातीपासून ते श्रद्धा, संस्कृती आणि सामुदायिक सेवेचे प्रतीक बनले आहे — दरवर्षी सर्व पार्श्वभूमीच्या लोकांना एकत्र आणत आहे.',
    about_highlight:'"हे केवळ एक सण नाही — हे भक्ती आणि सामुदायिक प्रेमाची एक चळवळ आहे जी दरवर्षी हजारो लोकांना स्पर्श करते।"',
    about_years:'वर्षांचा उत्सव',
    about_btn:'पूर्ण कथा वाचा',
    features_eyebrow:'आम्ही काय करतो',features_h2:'आमची मूल्ये आणि उपक्रम',
    f1_title:'भव्य मिरवणुका',f1_desc:'आमच्या गणेश विसर्जन मिरवणुकांमध्ये ढोल-ताशा, सांस्कृतिक कार्यक्रम आणि हजारो भाविक असतात.',
    f2_title:'सामाजिक उपक्रम',f2_desc:'रक्तदान शिबिरे, मोफत वैद्यकीय तपासणी — आम्ही दरवर्षी समाजाला परत देतो.',
    f3_title:'सांस्कृतिक कार्यक्रम',f3_desc:'भजन, कीर्तन, शास्त्रीय नृत्य — गणेश उत्सवाच्या समृद्ध सांस्कृतिक वारशाचा उत्सव.',
    stats_eyebrow:'आकड्यांमध्ये',stats_h2:'आमचा प्रवास आकड्यांमध्ये',
    s1:'सक्रिय वर्षे',s2:'वार्षिक भाविक',s3:'आयोजित कार्यक्रम',s4:'सामाजिक मोहिमा',
    events_eyebrow:'आगामी',events_h2:'कार्यक्रम व उपक्रम',
    gallery_eyebrow:'आठवणी',gallery_h2:'आमची गॅलरी',
    sponsors_eyebrow:'आमचे भागीदार',sponsors_h2:'अभिमानाने समर्थित',
    cta_h2:'उत्सवाचा भाग व्हा',cta_p:'स्वयंसेवक, प्रायोजक किंवा भाविक म्हणून जोडा आणि बाप्पाचे स्वागत अधिक भव्य करा.',
    cta_btn1:'देणगी द्या',cta_btn2:'संपर्क करा',
    abt_hist_h:'सुर्या मित्र मंडळाचा इतिहास',
    abt_mission_h:'आमचे ध्येय',abt_vision_h:'आमची दृष्टी',abt_obj_h:'आमची उद्दिष्टे',
    abt_m1:'भव्य उत्सव',abt_m1p:'सामुदायिक भावनेसह मोठ्या प्रमाणावर सांस्कृतिक गणेश उत्सवाचे आयोजन.',
    abt_m2:'सामाजिक प्रभाव',abt_m2p:'आरोग्य शिबिरे, रक्तदान आणि धर्मादाय उपक्रम जे वर्षभर फायदेशीर आहेत.',
    abt_m3:'सांस्कृतिक जतन',abt_m3p:'भावी पिढ्यांसाठी परंपरा, संगीत आणि अध्यात्मिक प्रथा जिवंत ठेवणे.',
    timeline_h:'आमचे टप्पे',
    lead_exec:'कार्यकारी नेते',lead_team:'आमची टीम',
    lead_eyebrow:'सर्वांमागील लोक',lead_h2:'नेतृत्व आणि टीम',
    gall_eyebrow:'कैद केलेले क्षण',gall_h2:'गॅलरी',
    gall_all:'सर्व',gall_fest:'उत्सव',gall_proc:'मिरवणूक',gall_team:'टीम',
    evnt_eyebrow:'कार्यक्रम',evnt_h2:'इव्हेंट्स',
    evnt_upcoming:'आगामी कार्यक्रम',evnt_past:'मागील ठळक गोष्टी',
    spon_eyebrow:'मूल्यवान भागीदार',spon_h2:'आमचे प्रायोजक',
    spon_become_h:'प्रायोजक व्हा',spon_become_p:'आमच्या प्रायोजक कुटुंबात सामील व्हा.',
    spon_gold:'कॉर्पोरेट प्रायोजक',spon_silver:'समाजाचे सहकारी',spon_bronze:'ब्रॉन्झ स्पॉन्सर',
    don_eyebrow:'आम्हाला पाठिंबा द्या',don_h2:'देणगी द्या',
    don_sub:'आपले योगदान भगवान गणेशाच्या उत्सवाला भव्य बनवण्यास मदत करते.',
    don_upi:'UPI द्वारे पेमेंट',don_bank:'बँक ट्रान्सफर',don_online:'ऑनलाइन पेमेंट',
    don_faq:'वारंवार विचारले जाणारे प्रश्न',
    cont_eyebrow:'आमच्याशी संपर्क साधा',cont_h2:'संपर्क करा',
    cont_name:'पूर्ण नाव',cont_email:'ईमेल पत्ता',cont_phone:'फोन नंबर',
    cont_subject:'विषय',cont_msg:'संदेश',cont_submit:'संदेश पाठवा',
    cont_success:'धन्यवाद! तुमचा संदेश पाठवला गेला आहे.',
    footer_tagline:'सुर्या मित्र मंडळ — सिंह इस्टेट चा राजा. श्रद्धा, समुदाय, भक्ती.',
    footer_quick:'द्रुत दुवे',footer_connect:'जोडा',footer_contact:'संपर्क',
    footer_copy:'सर्व हक्क राखीव. आयुष सिंह यांनी ❤️ ने बनवले.',
  }
};

let currentLang = localStorage.getItem('smm_lang') || 'en';

function setLang(code) {
  if (!LANGS[code]) return;
  currentLang = code;
  localStorage.setItem('smm_lang', code);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (LANGS[code][key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = LANGS[code][key];
      } else {
        el.innerHTML = LANGS[code][key];
      }
    }
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === code);
    if (btn.dataset.lang === code) btn.style.color = 'var(--clr-vermilion)';
    else btn.style.color = '';
  });
  // Set html lang attr
  document.documentElement.lang = code;
}

function t(key) {
  return (LANGS[currentLang] && LANGS[currentLang][key]) || (LANGS.en[key]) || key;
}

// Auto-apply on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => setLang(currentLang));
