
import type { Lesson } from '../../../types';

export const smartphoneLessons: Lesson[] = [
    {
        id: 'sm_l1', titleKey: 'sm_l1_title', duration: 10,
        content: [
            { type: 'paragraph', text: "नेविगेशन बार आपके फोन का स्टीयरिंग व्हील है। इसमें आपकी स्क्रीन के नीचे तीन आकृतियाँ होती हैं। 1. त्रिभुज (Back) एक 'अंडू' बटन की तरह काम करता है, जो आपको पिछली स्क्रीन पर ले जाता है। 2. वृत्त (Home) आपका एस्केप हैच है; आप कहीं भी हों, यह आपको तुरंत आपके मुख्य डैशबोर्ड पर वापस ले जाता है। 3. वर्ग (Recent Apps) आपको वे सभी ऐप्स दिखाता है जो वर्तमान में चल रहे हैं।" },
            { type: 'heading', text: "आप क्या सीखेंगे" },
            { type: 'list', text: "3 मुख्य बटन पहचानें | उनके कार्य समझें" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "वापस जाने के लिए त्रिभुज (Back) टैप करें | बाहर निकलने के लिए वृत्त (Home) टैप करें | खुले ऐप्स देखने के लिए वर्ग (Recent) टैप करें" },
            { type: 'heading', text: "छोटा कार्य" },
            { type: 'paragraph', text: "अपने फोन पर होम बटन ढूंढें। इसे दबाएं। फिर रीसेंट बटन दबाएं और एक ऐप बंद करें।" }
        ],
        quiz: {
            id: 'q_sm_1', question: "मुख्य स्क्रीन पर कौन सा बटन ले जाता है?",
            options: [{ id: 'a', text: "बैक बटन" }, { id: 'b', text: "होम बटन" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l2', titleKey: 'sm_l2_title', duration: 10,
        content: [
            { type: 'paragraph', text: "आपके फोन में 'क्विक सेटिंग्स' पैनल होता है, जो आमतौर पर स्क्रीन के ऊपर छिपा होता है। यह आपको वाईफाई, ब्लूटूथ और साउंड जैसी आवश्यक सुविधाओं तक त्वरित पहुंच प्रदान करता है। यहां एक महत्वपूर्ण नियंत्रण 'ब्राइटनेस' है। उच्च चमक बैटरी की तेजी से खपत करती है। इसके विपरीत, कम चमक बैटरी बचाती है।" },
            { type: 'heading', text: "आप क्या सीखेंगे" },
            { type: 'list', text: "सेटिंग्स कैसे खोलें | ब्राइटनेस कैसे बदलें" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "ऊपर से नीचे स्वाइप करें | ब्राइटनेस बदलने के लिए सूर्य आइकन स्लाइड करें | रात में 'आई कम्फर्ट' मोड चालू करें" },
            { type: 'heading', text: "छोटा कार्य" },
            { type: 'paragraph', text: "अपनी ब्राइटनेस 50% पर सेट करें। 'साइलेंट मोड' ढूंढें और 1 मिनट के लिए चालू करें।" }
        ],
        quiz: {
            id: 'q_sm_2', question: "क्विक सेटिंग्स कैसे खोलें?",
            options: [{ id: 'a', text: "ऊपर से नीचे स्वाइप करें" }, { id: 'b', text: "नीचे से ऊपर स्वाइप करें" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l3', titleKey: 'sm_l3_title', duration: 10,
        content: [
            { type: 'paragraph', text: "इंटरनेट आपके फोन तक दो अलग-अलग पाइपों के माध्यम से पहुंचता है। 'मोबाइल डेटा' आपके सिम कैरियर (जैसे Jio या Airtel) द्वारा प्रदान किया जाता है। 'वाईफाई' आपके फोन को स्थानीय ब्रॉडबैंड राउटर से जोड़ता है; यह उच्च गति और कम लागत प्रदान करता है, लेकिन केवल एक छोटी सीमा के भीतर काम करता है।" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "सेटिंग्स > वाईफाई पर टैप करें | इसे चालू करें | एक नेटवर्क चुनें और पासवर्ड दर्ज करें" }
        ],
        quiz: {
            id: 'q_sm_3', question: "डाउनलोड के लिए तेज़ और सस्ता क्या है?",
            options: [{ id: 'a', text: "WiFi" }, { id: 'b', text: "मोबाइल डेटा" }],
            correctOptionId: 'a'
        }
    }
];

export const computerLessons: Lesson[] = [
    {
        id: 'comp_l1', titleKey: 'comp_l1_title', duration: 15,
        content: [
            { type: 'paragraph', text: "कंप्यूटर दो प्रकार के होते हैं। 'डेस्कटॉप' एक मॉड्यूलर सिस्टम है जहां स्क्रीन (मॉनिटर), इनपुट डिवाइस (कीबोर्ड/माउस) और मस्तिष्क (सीपीयू टॉवर) अलग होते हैं। 'लैपटॉप' एक ऑल-इन-वन पोर्टेबल यूनिट है जिसमें बिल्ट-इन बैटरी होती है।" },
            { type: 'heading', text: "आप क्या सीखेंगे" },
            { type: 'list', text: "कंप्यूटर के प्रकार | कंप्यूटर के पुर्जे" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "स्क्रीन (मॉनिटर) को पहचानें | टाइपिंग बोर्ड (कीबोर्ड) को पहचानें | पॉइंटर टूल (माउस) को पहचानें" }
        ],
        quiz: {
            id: 'q_comp_1', question: "लैपटॉप है...",
            options: [{ id: 'a', text: "पोर्टेबल" }, { id: 'b', text: "डेस्क पर फिक्स्ड" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l2', titleKey: 'comp_l2_title', duration: 10,
        content: [
            { type: 'paragraph', text: "कंप्यूटर बिजली के बल्ब की तरह नहीं है; इसमें एक जटिल ऑपरेटिंग सिस्टम है जिसे 'बूट अप' (लोड) और 'शट डाउन' (सहेजें और बंद करें) की आवश्यकता होती है। सीधे बिजली काटने से फाइलें खराब हो सकती हैं। 'शट डाउन' कमांड सभी चल रहे प्रोग्रामों को सुरक्षित रूप से बंद करने का संकेत देता है।" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "पावर बटन दबाएं | स्क्रीन की प्रतीक्षा करें | स्टार्ट > पावर > शट डाउन पर क्लिक करें" }
        ],
        quiz: {
            id: 'q_comp_2', question: "कंप्यूटर बंद करने के लिए...",
            options: [{ id: 'a', text: "प्लग निकालें" }, { id: 'b', text: "शट डाउन विकल्प का उपयोग करें" }],
            correctOptionId: 'b'
        }
    }
];

export const englishLessons: Lesson[] = [
    {
        id: 'eng_l1', titleKey: 'eng_l1_title', duration: 15,
        content: [
            { type: 'paragraph', text: "अभिवादन संचार के लिए टोन सेट करते हैं। एक पेशेवर सेटिंग में, समय-आधारित अभिवादन ('Good Morning', 'Good Afternoon') सम्मान दिखाते हैं। 'Hello' तटस्थ है, जबकि 'Hi' अनौपचारिक है। समापन 'Goodbye' या 'Have a nice day' एक विनम्र अंत सुनिश्चित करता है।" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "दोस्तों को 'Hello' कहें | बॉस को 'Good Morning' कहें | जाते समय 'Goodbye' कहें" }
        ],
        quiz: {
            id: 'q_eng_1', question: "सुबह 9 बजे के लिए अभिवादन?",
            options: [{ id: 'a', text: "Good Morning" }, { id: 'b', text: "Good Night" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l2', titleKey: 'eng_l2_title', duration: 15,
        content: [
            { type: 'paragraph', text: "एक पेशेवर परिचय आपकी एलिवेटर पिच है। यह एक सरल संरचना का पालन करता है: पहचान (नाम), मूल (शहर/देश), और पेशा (नौकरी/भूमिका)। स्पष्टता कुंजी है।" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "कहें 'My name is [Name]' | कहें 'I live in [City]' | बोलते समय मुस्कुराएं" }
        ],
        quiz: {
            id: 'q_eng_2', question: "My name ___ Riya.",
            options: [{ id: 'a', text: "am" }, { id: 'b', text: "is" }],
            correctOptionId: 'b'
        }
    }
];

export const freelanceLessons: Lesson[] = [
    {
        id: 'free_l1', titleKey: 'free_l1_title', duration: 15,
        content: [
            { type: 'paragraph', text: "फ्रीलांसिंग 'अपना समय बेचने' से 'सेवा बेचने' की ओर एक बदलाव है। एक कर्मचारी के विपरीत जिसे आने के लिए भुगतान किया जाता है, एक फ्रीलांसर को परिणाम (एक लोगो, एक अनुवाद) देने के लिए भुगतान किया जाता है। यह स्वतंत्रता प्रदान करता है लेकिन आत्म-अनुशासन की आवश्यकता होती है।" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "घर से काम करने की कल्पना करें | आप अपने बॉस खुद हैं | आपको ग्राहक खोजने होंगे" }
        ],
        quiz: {
            id: 'q_free_1', question: "फ्रीलांसिंग में बॉस कौन है?",
            options: [{ id: 'a', text: "आप" }, { id: 'b', text: "सरकार" }],
            correctOptionId: 'a'
        }
    }
];

export const moneyLessons: Lesson[] = [
    {
        id: 'mon_l1', titleKey: 'mon_l1_title', duration: 10,
        content: [
            { type: 'paragraph', text: "वित्तीय साक्षरता मूल्य को पहचानने से शुरू होती है। भारतीय मुद्रा में जालसाजी को रोकने के लिए विशिष्ट विशेषताएं हैं। उच्च मूल्य वाले नोटों (₹500) पर सुरक्षा धागे, वॉटरमार्क और गुप्त चित्र सत्यापन के लिए डिज़ाइन किए गए हैं।" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "500 का नोट देखें | सुरक्षा धागे की जांच करें | वॉटरमार्क की जांच करें" }
        ],
        quiz: {
            id: 'q_mon_1', question: "500 रुपये के नोट का रंग?",
            options: [{ id: 'a', text: "स्टोन ग्रे" }, { id: 'b', text: "गुलाबी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l2', titleKey: 'mon_l2_title', duration: 15,
        content: [
            { type: 'paragraph', text: "बजटिंग प्राथमिकता तय करने की कला है। 'Need' अस्तित्व के लिए आवश्यक है (भोजन, दवा)। 'Want' एक इच्छा है (सिनेमा)। वित्तीय स्वास्थ्य पहले जरूरतों पर खर्च करने और बाद में इच्छाओं के लिए बचत करने से आता है।" },
            { type: 'heading', text: "अभी आज़माएं" },
            { type: 'checklist', text: "Need: भोजन, किराया | Want: सिनेमा, नया खिलौना | जरूरतों को प्राथमिकता दें" }
        ],
        quiz: {
            id: 'q_mon_2', question: "दवा एक...",
            options: [{ id: 'a', text: "Need" }, { id: 'b', text: "Want" }],
            correctOptionId: 'a'
        }
    }
];
