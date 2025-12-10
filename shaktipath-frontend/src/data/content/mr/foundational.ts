


import type { Lesson } from '../../../types';

export const smartphoneLessons: Lesson[] = [
    {
        id: 'sm_l1', 
        title: 'बटणे आणि चिन्हे (नेव्हिगेशन)', 
        duration: 8,
        content: [
            { type: 'paragraph', text: "तुमच्या फोनची स्क्रीन नेव्हिगेट करण्यासाठी खाली तीन बटणे असतात. १. त्रिकोण (बॅक) म्हणजे 'मागे जा'. २. वर्तुळ (होम) तुम्हाला मुख्य स्क्रीनवर घेऊन जाते. ३. चौकोन (रिसेंट) उघडे ॲप्स दाखवते." },
            { type: 'video', text: "0spySgHG8A4" },
            { type: 'heading', text: "पर्याय A: ३-बटण नेव्हिगेशन" },
            { type: 'list', text: "१. बॅक (त्रिकोण) — मागील स्क्रीनवर जाण्यासाठी. | २. होम (वर्तुळ) — मुख्य स्क्रीनवर जाण्यासाठी. | ३. रिसेंट ॲप्स (चौकोन) — ॲप्स बदलण्यासाठी." },
            { type: 'heading', text: "पर्याय B: जेश्चर नेव्हिगेशन" },
            { type: 'list', text: "होमवर जा: खालून वर स्वाइप करा. | उघडे ॲप्स पहा: वर स्वाइप करून धरा. | मागे जा: डाव्या किंवा उजव्या कडेने स्वाइप करा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "होम स्क्रीनवर जा | एक ॲप उघडा | एकदा मागे जा | रिसेंट ॲप्स उघडून एक ॲप बंद करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "कॅल्क्युलेटर उघडा, होम दाबा, नंतर रिसेंट ॲप्स उघडून पुन्हा कॅल्क्युलेटरवर जा." }
        ],
        quiz: {
            id: 'q_sm_1', 
            question: "मुख्य स्क्रीनवर जाण्यासाठी कोणते बटण दाबावे?",
            options: [{ id: 'a', text: "बॅक" }, { id: 'b', text: "होम" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l2', 
        title: 'स्पर्श, टायपिंग आणि आवाज', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "तुमचा फोन विविध स्पर्श समजतो: टॅप, डबल टॅप, लॉंग प्रेस (दाबून धरणे), स्वाइप, पिंच (झूम). टायपिंगसाठी व्हॉइस टायपिंग (बोलून लिहिणे) सोपे आहे." },
            { type: 'video', text: "VBnDcogaTzY" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "स्पर्श क्रिया वापरणे | मराठी/इंग्रजी कीबोर्ड बदलणे | व्हॉइस टायपिंग वापरणे" },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'Gboard Marathi typing'" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "ॲप आयकॉनवर लॉंग प्रेस करा | फोटोमध्ये झूम करण्यासाठी पिंच करा | कीबोर्ड उघडा आणि भाषा बदला" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "टाइप करा: 'माझे नाव ____ आहे.' नंतर तेच वाक्य बोलून टाइप करण्याचा प्रयत्न करा." }
        ],
        quiz: {
            id: 'q_sm_2', 
            question: "लॉंग प्रेस केल्यावर काय होते?",
            options: [{ id: 'a', text: "काहीच नाही" }, { id: 'b', text: "अधिक पर्याय उघडतात" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l3', 
        title: 'महत्वाच्या सेटिंग्ज', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "सेटिंग्ज फोनला आरामदायक बनवतात. ब्राइटनेस, आवाज, भाषा आणि फॉन्ट साईज बद्दल जाणून घ्या." },
            { type: 'video', text: "_tfD_lKnVNs" },
            { type: 'heading', text: "मुख्य बदल" },
            { type: 'list', text: "ब्राइटनेस: बॅटरी वाचवण्यासाठी किंवा उन्हात पाहण्यासाठी. | आवाज: रिंग, व्हायब्रेट किंवा सायलेंट. | भाषा: इंग्रजी + मराठी जोडा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "ब्राइटनेस बदला | भाषा सेटिंग्ज तपासा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "फॉन्ट साईज वाढवा आणि वाचायला सोपे वाटते का ते पहा." }
        ],
        quiz: {
            id: 'q_sm_3', 
            question: "बॅटरी वाचवण्यासाठी तुम्ही काय करावे?",
            options: [{ id: 'a', text: "ब्राइटनेस कमी करा" }, { id: 'b', text: "ब्राइटनेस वाढवा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l4', 
        title: 'वायफाय आणि डेटा', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "वायफाय पैसे वाचवते. डेटा बाहेर असताना वापरा. वायफाय कनेक्ट करणे, डेटा चालू/बंद करणे आणि डेटा सेव्हर वापरणे शिका." },
            { type: 'video', text: "G8pOIStJE0A" },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'WiFi connect kaise kare Marathi'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "वायफाय नेटवर्कशी कनेक्ट करा आणि एक YouTube व्हिडिओ उघडा." }
        ],
        quiz: {
            id: 'q_sm_4', 
            question: "कोणते सहसा मोफत किंवा अमर्यादित असते?",
            options: [{ id: 'a', text: "मोबाईल डेटा" }, { id: 'b', text: "वायफाय" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l5', 
        title: 'फोनची काळजी आणि स्टोरेज', 
        duration: 8,
        content: [
            { type: 'paragraph', text: "पूर्ण भरलेला फोन स्लो होतो. स्टोरेज तपासणे, मोठ्या फाइल्स डिलीट करणे आणि SD कार्ड वापरणे शिका." },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'Phone storage khali kaise kare Marathi'" },
            { type: 'heading', text: "ॲक्शन प्लॅन" },
            { type: 'checklist', text: "उपलब्ध स्टोरेज तपासा | मोठ्या फाइल्स (व्हिडिओ) ओळखा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "नको असलेले जुने व्हिडिओ डिलीट करून 100MB जागा रिकामी करा." }
        ],
        quiz: {
            id: 'q_sm_5', 
            question: "फोन स्लो झाल्यास काय तपासावे?",
            options: [{ id: 'a', text: "बॅटरीचा रंग" }, { id: 'b', text: "स्टोरेज स्पेस" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l6', 
        title: 'ॲप बेसिक्स', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "सुरक्षित डाउनलोडसाठी प्ले स्टोअर वापरा. इंस्टॉल करणे, अपडेट करणे, रिव्ह्यू तपासणे आणि परवानग्या (Permissions) समजून घेणे शिका." },
            { type: 'video', text: "C7kEEklJ4H8" },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'Play Store se app kaise download kare Marathi'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एक ॲप अपडेट करा आणि काय बदलले ते पहा." }
        ],
        quiz: {
            id: 'q_sm_6', 
            question: "ॲप्स कुठून डाउनलोड करावेत?",
            options: [{ id: 'a', text: "प्ले स्टोअर" }, { id: 'b', text: "अनोळखी वेबसाइट" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l7', 
        title: 'इंटरनेट सुरक्षा', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "सुरक्षा हे एक कौशल्य आहे. स्क्रीन लॉक, मजबूत पिन, OTP कधीही शेअर न करणे आणि घोटाळे ओळखणे याबद्दल शिका." },
            { type: 'video', text: "cgX2wgscZwE" },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'Online scam se kaise bache Marathi'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "स्क्रीन लॉक सेट करा (पिन किंवा पॅटर्न)." }
        ],
        quiz: {
            id: 'q_sm_7', 
            question: "तुम्ही तुमचा OTP शेअर करावा का?",
            options: [{ id: 'a', text: "हो, बँकेला" }, { id: 'b', text: "कधीच नाही, कोणालाही नाही" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l8', 
        title: 'कामासाठी व्हॉट्सॲप', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "व्हॉट्सॲप हे कामाचे साधन आहे. ग्रुपमधील व्यावसायिक वर्तन, डॉक्युमेंट पाठवणे आणि व्हॉइस नोट्स बद्दल शिका." },
            { type: 'video', text: "SPIya6v3Ybk" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका प्रॅक्टिस ग्रुपमध्ये PDF किंवा फोटो पाठवा." }
        ],
        quiz: {
            id: 'q_sm_8', 
            question: "अधिकृत कागदपत्रांसाठी कसे पाठवावे?",
            options: [{ id: 'a', text: "फोटो म्हणून" }, { id: 'b', text: "डॉक्युमेंट म्हणून" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l9', 
        title: 'कामासाठी ईमेल', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "नोकरी आणि अधिकृत कामासाठी ईमेल विश्वास निर्माण करतो. जीमेल तयार करणे, विषय (Subject) लिहिणे आणि फाइल जोडणे शिका." },
            { type: 'video', text: "x_Ah3NrPcu8" },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'Gmail use Marathi'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका लहान इंटर्नशिपसाठी अर्ज करणारा ईमेल ड्राफ्ट करा." }
        ],
        quiz: {
            id: 'q_sm_9', 
            question: "ईमेलमधील 'Subject' कशासाठी असतो?",
            options: [{ id: 'a', text: "तुमचे नाव" }, { id: 'b', text: "ईमेलचा थोडक्यात सारांश" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l10', 
        title: 'फाइल्स आणि फोल्डर्स', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "फाइल्स व्यवस्थित ठेवल्यास काम सोपे होते. डाउनलोड्स, फोटो, फोल्डर तयार करणे आणि फाइल्सचे नाव बदलणे शिका." },
            { type: 'video', text: "xyh6sAJ4Wxo" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "फोल्डर्स तयार करा: Work, School, Personal." }
        ],
        quiz: {
            id: 'q_sm_10', 
            question: "डाउनलोड केलेल्या फाइल्स कुठे जातात?",
            options: [{ id: 'a', text: "डाउनलोड फोल्डर" }, { id: 'b', text: "कुठेच नाही" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l11', 
        title: 'गुगल ड्राइव्ह बेसिक्स', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "फोन हरवला तरी ड्राइव्हमुळे कागदपत्रे सुरक्षित राहतात. फोल्डर तयार करणे, फाइल अपलोड करणे आणि लिंक शेअर करणे शिका." },
            { type: 'video', text: "AcoNlNBtTlQ" },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'Google Drive folder banana Marathi'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "'ShaktiPath Practice' नावाचे फोल्डर ड्राइव्हमध्ये बनवा आणि त्यात एक फोटो अपलोड करा." }
        ],
        quiz: {
            id: 'q_sm_11', 
            question: "फोन हरवला तर ड्राइव्ह फाइल्स सुरक्षित असतात का?",
            options: [{ id: 'a', text: "हो" }, { id: 'b', text: "नाही" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l12', 
        title: 'फोनवर गुगल डॉक्स', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "डॉक्स वापरून तुम्ही रेझ्युमे बनवू शकता. नवीन डॉक्युमेंट तयार करणे, टायटल देणे आणि ड्राइव्हवर सेव्ह करणे शिका." },
            { type: 'video', text: "H-rPbF1HLhs" },
            { type: 'heading', text: "YouTube वर शोधा" },
            { type: 'paragraph', text: "'Google Docs mobile Marathi'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "स्वतःबद्दल ५ ओळींचा एक छोटा बायो तयार करा." }
        ],
        quiz: {
            id: 'q_sm_12', 
            question: "गुगल डॉक्स कशासाठी आहे?",
            options: [{ id: 'a', text: "कागदपत्रे लिहिण्यासाठी" }, { id: 'b', text: "व्हिडिओ एडिट करण्यासाठी" }],
            correctOptionId: 'a'
        }
    }
];

export const computerLessons: Lesson[] = [
    {
        id: 'comp_l1', 
        title: 'लॅपटॉप आणि डेस्कटॉप', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "संगणक तुम्हाला अभ्यास करण्यास, नोकरीसाठी अर्ज करण्यास आणि कागदपत्रे तयार करण्यास मदत करतो. दोन सामान्य प्रकार आहेत: डेस्कटॉप (एका जागेवर स्थिर, वेगळे भाग) आणि लॅपटॉप (सर्व-इन-वन, वाहून नेण्याजोगा)." },
            { type: 'video', text: "zbLNSJEgS08" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "डेस्कटॉपचे भाग ओळखणे | लॅपटॉपचे भाग ओळखणे | प्रत्येक कुठे उपयोगी आहे हे समजणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "मॉनिटरकडे बोट दाखवा | CPU शोधा | कीबोर्ड शोधा | माउस शोधा | लॅपटॉप असल्यास टचपॅड शोधा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "लिहा किंवा बोला: 'मी कोणता संगणक जास्त वापरतो/वापरते - लॅपटॉप की डेस्कटॉप? का?'" }
        ],
        quiz: {
            id: 'q_comp_1', 
            question: "वाहून नेण्यासाठी कोणता संगणक सोपा आहे?",
            options: [{ id: 'a', text: "डेस्कटॉप" }, { id: 'b', text: "लॅपटॉप" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l2', 
        title: 'चालू/बंद करणे आणि सुरक्षित शट डाऊन', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "संगणक चालू करणे सोपे आहे. योग्यरित्या बंद करणे तितकेच महत्वाचे आहे. सुरक्षित शट डाऊनमुळे फाइल्स हरवत नाहीत आणि सिस्टम चांगली राहते." },
            { type: 'video', text: "0UttU0Aw148" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "पॉवर बटण शोधणे | लॉगिन समजून घेणे | सुरक्षितपणे शट डाऊन करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "पॉवर बटण दाबा | स्क्रीन लोड होण्याची वाट पहा | गरज असल्यास पिन/पासवर्ड टाका | स्टार्ट मेनूवर क्लिक करा | शट डाऊन वर क्लिक करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "चालू करा → कॅल्क्युलेटर उघडा → बंद करा → सुरक्षित शट डाऊन करा." }
        ],
        quiz: {
            id: 'q_comp_2', 
            question: "संगणक बंद करण्याचा सर्वात सुरक्षित मार्ग कोणता?",
            options: [{ id: 'a', text: "पॉवर बटण दाबून ठेवणे" }, { id: 'b', text: "शट डाऊन पर्याय वापरणे" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l3', 
        title: 'कीबोर्ड आणि माउस बेसिक्स', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "कीबोर्ड तुम्हाला टाइप करण्यास मदत करतो. माउस तुम्हाला निवडण्यास आणि उघडण्यास मदत करतो. हे शिकणे संगणक साक्षरतेची पहिली पायरी आहे." },
            { type: 'video', text: "K_OYP4fYYbw" },
            { type: 'video', text: "xDzDBfq_H7k" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "लेफ्ट क्लिक, राइट क्लिक, डबल क्लिक | वर आणि खाली स्क्रोल करणे | महत्त्वाच्या की (Enter, Backspace, Space, Shift)" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "एका चिन्हावर सिंगल-क्लिक करा | उघडण्यासाठी डबल-क्लिक करा | राइट-क्लिक करून पर्याय पहा | कोणत्याही पानावर स्क्रोल व्हील वापरा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "पेंट (किंवा कोणतेही ड्रॉइंग ॲप) उघडा. एक साधे फूल किंवा चौकोन काढा. ॲप बंद करा." }
        ],
        quiz: {
            id: 'q_comp_3', 
            question: "कोणती क्रिया सहसा ॲप उघडते?",
            options: [{ id: 'a', text: "सिंगल क्लिक" }, { id: 'b', text: "डबल क्लिक" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l4', 
        title: 'टायपिंग सराव', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "टायपिंग हे शाळा आणि नोकरीसाठी एक शक्तिशाली कौशल्य आहे. हळू सुरुवात करा आणि अचूकतेवर लक्ष केंद्रित करा." },
            { type: 'video', text: "PLvq_lmbe4u0tTDy17dTX5K8a1wMOZbGAG&index=28" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "Space, Enter, Backspace वापरणे | मोठ्या अक्षरांसाठी Shift वापरणे | लहान वाक्ये आत्मविश्वासाने टाइप करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "तुमचे पूर्ण नाव टाइप करा | तुमच्या शाळेचे/कॉलेजचे नाव टाइप करा | तुमचे शहर/गाव टाइप करा | एक मोठे अक्षर टाइप करण्यासाठी Shift वापरा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "हे टाइप करा: 'My name is _____. I live in _____. I want to learn computer skills.'" }
        ],
        quiz: {
            id: 'q_comp_4', 
            question: "कोणती की अक्षरे मोठी (Capital) करते?",
            options: [{ id: 'a', text: "Enter" }, { id: 'b', text: "Shift" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l5', 
        title: 'विंडोज बेसिक्स — डेस्कटॉप, टास्कबार, स्टार्ट मेनू', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "डेस्कटॉप हे तुमचे मुख्य कामाचे ठिकाण आहे. टास्कबार उघडे ॲप्स दाखवतो. स्टार्ट मेनू तुम्हाला ॲप्स आणि सेटिंग्ज शोधण्यास मदत करतो." },
            { type: 'video', text: "KfBDtvMag3o" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "डेस्कटॉप, टास्कबार, स्टार्ट ओळखणे | ॲप्स उघडणे आणि बंद करणे | ॲप्स दरम्यान बदलणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "स्टार्ट मेनूवर क्लिक करा | सेटिंग्ज उघडा | कॅल्क्युलेटर उघडा | विंडो मिनिमाइज आणि मॅक्सिमाइज करा | उघडे ॲप्स पाहण्यासाठी टास्कबार पहा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "दोन ॲप्स उघडा (कॅल्क्युलेटर + नोटपॅड). टास्कबार वापरून त्यांच्यात स्विच करा." }
        ],
        quiz: {
            id: 'q_comp_5', 
            question: "ॲप्स शोधण्यासाठी तुम्ही सहसा कुठे क्लिक करता?",
            options: [{ id: 'a', text: "स्टार्ट मेनू" }, { id: 'b', text: "रीसायकल बिन" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l6', 
        title: 'फाइल्स आणि फोल्डर व्यवस्थापन', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "फोल्डर्स तुमचे काम व्यवस्थित ठेवतात. फाइल्स म्हणजे फोल्डरमधील कागदपत्रे, फोटो किंवा नोट्स. हे संगणक अभ्यासक्रमातील एक मुख्य कौशल्य आहे." },
            { type: 'video', text: "AfHJRPt144s" },
            { type: 'video', text: "TikopIbmLpA" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "फोल्डर तयार करणे | फाइल/फोल्डरचे नाव बदलणे | कॉपी, पेस्ट, डिलीट करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "फाइल एक्सप्लोरर उघडा | 'My Work' नावाचे फोल्डर तयार करा | त्याचे नाव बदलून 'My Work 2025' करा | 'My Certificates' नावाचे दुसरे फोल्डर तयार करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "३ फोल्डर्स तयार करा: 1. School, 2. Work, 3. Personal" }
        ],
        quiz: {
            id: 'q_comp_6', 
            question: "फोल्डर कशासाठी वापरले जाते?",
            options: [{ id: 'a', text: "फाइल्स व्यवस्थित करण्यासाठी" }, { id: 'b', text: "इंटरनेट स्पीड बदलण्यासाठी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l7', 
        title: 'Google docs प्रोसेसिंग बेसिक्स', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "वर्ड प्रोसेसिंग तुम्हाला पत्रे, रेझ्युमे आणि असाइनमेंट तयार करण्यास मदत करते. हे कौशल्य डिजिटल साक्षरतेचा एक भाग आहे." },
            { type: 'video', text: "5wJOaZQhz_Y" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "नवीन डॉक्युमेंट तयार करणे | बोल्ड, अंडरलाइन, बुलेट्स वापरणे | तुमचे काम योग्यरित्या सेव्ह करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "Word / Google Docs उघडा | शीर्षक टाइप करा: My Introduction | ४-५ ओळी लिहा | ३ बुलेट पॉइंट्स जोडा | फाइल सेव्ह करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "१ पानाचे डॉक्युमेंट तयार करा: 'My Skills and Goals'. तुमच्याकडे असलेली ३ कौशल्ये आणि तुम्हाला शिकायची असलेली ३ कौशल्ये लिहा." }
        ],
        quiz: {
            id: 'q_comp_7', 
            question: "पॉइंट्स नीट मांडण्यासाठी कोणते फिचर मदत करते?",
            options: [{ id: 'a', text: "बुलेट्स (Bullets)" }, { id: 'b', text: "झूम (Zoom)" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l8', 
        title: 'इंटरनेट बेसिक्स + सुरक्षित ब्राउझिंग', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "इंटरनेट तुम्हाला शिकण्यास आणि संवाद साधण्यास मदत करते. सुरक्षित वापर आत्मविश्वास वाढवतो. तुम्ही कशावर क्लिक करताय याची नेहमी काळजी घ्या." },
             { type: 'video', text: "7gHWWeExSqU" },
            { type: 'video', text: "FZSEkgPGspE" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "ब्राउझर उघडणे | माहिती शोधणे | सुरक्षित आणि संशयास्पद लिंक्स ओळखणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "ब्राउझर उघडा | शोधा: 'best study tips for students' | १ निकाल उघडा | मागे जा | टॅब बंद करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका लहान करिअर ध्येयासाठी शोधा: 'basic typing jobs for students'. तुम्ही काय शिकलात ते २ गोष्टी लिहा." }
        ],
        quiz: {
            id: 'q_comp_8', 
            question: "जर लिंक विचित्र दिसत असेल तर काय करावे?",
            options: [{ id: 'a', text: "लवकर क्लिक करा" }, { id: 'b', text: "टाळा (Avoid it)" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l9', 
        title: 'कामासाठी ईमेल (संगणक)', 
        duration: 12,
        content: [
            { type: 'paragraph', text: "शाळा, इंटर्नशिप आणि औपचारिक संवादासाठी ईमेल वापरला जातो. हे शिकणे डिजिटल साक्षरतेसाठी महत्वाचे आहे." },
            { type: 'video', text: "vZB9Ipk9fpE" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "विषय ओळ (Subject line) | व्यावसायिक अभिवादन आणि शेवट | अटॅचमेंट्स" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "Gmail उघडा | Compose वर क्लिक करा | विषय जोडा | ३-४ ओळी लिहा | ड्राफ्ट म्हणून सेव्ह करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका शिक्षकाला/मेंटरला ईमेल ड्राफ्ट करा: विषय: मार्गदर्शनासाठी विनंती. मुख्य भाग: ४-५ विनम्र ओळी." }
        ],
        quiz: {
            id: 'q_comp_9', 
            question: "विषय (Subject) का महत्त्वाचा आहे?",
            options: [{ id: 'a', text: "ते ईमेल कशाबद्दल आहे हे सांगते" }, { id: 'b', text: "ते इमोजी जोडते" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l10', 
        title: 'प्रिंटिंग आणि PDF सेव्ह करणे', 
        duration: 8,
        content: [
            { type: 'paragraph', text: "कधीकधी तुम्हाला प्रिंटची गरज असते. अनेकदा, तुम्ही प्रोफेशनल दिसण्यासाठी PDF म्हणून सेव्ह करू शकता." },
            { type: 'video', text: "OvxaGKsklY0" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "प्रिंट प्रिव्ह्यू | योग्य प्रिंटर निवडणे | डॉक्युमेंट PDF म्हणून सेव्ह करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "कोणतेही डॉक्युमेंट उघडा | File → Print वर क्लिक करा | प्रिंट प्रिव्ह्यू पहा | उपलब्ध असल्यास Save as PDF निवडा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचे 'My Introduction' डॉक्युमेंट PDF म्हणून सेव्ह करा." }
        ],
        quiz: {
            id: 'q_comp_10', 
            question: "प्रिंट प्रिव्ह्यू काय दाखवते?",
            options: [{ id: 'a', text: "प्रिंट केल्यावर डॉक्युमेंट कसे दिसेल" }, { id: 'b', text: "तुमच्या फोनची बॅटरी" }],
            correctOptionId: 'a'
        }
    }
];

export const englishLessons: Lesson[] = [
    {
        id: 'eng_l1', 
        title: 'अभिवादन (Greetings)', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "नमस्कारानंतर इंग्रजीत एक छोटी ओळ बोलणे ही कामासाठी पहिली पायरी आहे. एका वाक्यानेही तुम्ही आत्मविश्वासपूर्ण दिसू शकता." },
            { type: 'video', text: "WRRhLVSpRA" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "नम्रपणे हॅलो म्हणा | वेळेनुसार अभिवादन करा (Good Morning/Evening) | निरोप घ्या (Goodbye)" },
            { type: 'heading', text: "महत्वाचे शब्द" },
            { type: 'list', text: "Hello / Hi | Good morning | Good afternoon | Good evening | Good night | Thank you | Bye / Goodbye" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "म्हणा: Hello | म्हणा: Good morning | म्हणा: Good evening | म्हणा: Thank you | म्हणा: Goodbye" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "आज इंग्रजीत २ लोकांचे अभिवादन करा: १. 'Good morning.' २. 'Hello.'" }
        ],
        quiz: {
            id: 'q_eng_1', 
            question: "सकाळी ९ वाजता कोणते अभिवादन योग्य आहे?",
            options: [{ id: 'a', text: "Good night" }, { id: 'b', text: "Good morning" }, { id: 'c', text: "Good evening" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l2', 
        title: 'परिचय (Introduction)', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "स्वतःची ओळख देताना फक्त २-३ साध्या इंग्रजी वाक्यांचा सराव पुरेसा आहे. ते लहान आणि स्पष्ट असावे." },
            { type: 'video', text: "n4gK-OHU_k" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "तुमचे नाव सांगा | तुम्ही कुठून आलात ते सांगा | तुमची भूमिका सांगा (विद्यार्थी/शिकणारे) | एक नम्र शेवटचे वाक्य वापरा" },
            { type: 'heading', text: "महत्वाची वाक्ये" },
            { type: 'list', text: "My name is ____ . | I am from ____ . | I live in ____ . | I am a student. | I am learning English. | Nice to meet you." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'My name is...' वाक्यात तुमचे नाव भरा | २ वेळा मोठ्याने म्हणा | 'I am from...' मध्ये तुमचे गाव/शहर भरा | २ वेळा मोठ्याने म्हणा | म्हणा: Nice to meet you" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "१० सेकंदाची व्हॉइस नोट रेकॉर्ड करा: 'My name is ____. I am from ____. I am a student.'" }
        ],
        quiz: {
            id: 'q_eng_2', 
            question: "कोणते वाक्य तुमचे ठिकाण सांगते?",
            options: [{ id: 'a', text: "I am from ____" }, { id: 'b', text: "Nice to meet you" }, { id: 'c', text: "Hello" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l3',
        title: 'संख्या, तारखा आणि वेळ',
        duration: 15,
        content: [
            { type: 'paragraph', text: "संख्या तुम्हाला फोन नंबर, वय आणि तारखा आत्मविश्वासाने सांगण्यास मदत करतात." },
            { type: 'video', text: "ZkEnJeh8O5Q" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "१-२० संख्या सांगा | तुमचे वय सांगा | तुमचा फोन नंबर सांगा | आजचा दिवस/तारीख सांगा" },
            { type: 'heading', text: "महत्वाची वाक्ये" },
            { type: 'list', text: "I am ____ years old. | My phone number is ____ . | Today is ____ . | The date is ____ ." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "१ ते १० संख्या मोठ्याने म्हणा | तुमचे वय सांगा | तुमचा फोन नंबर सावकाश सांगा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका मित्राला/शिक्षकाला सांगा: 'My phone number is ____.'" }
        ],
        quiz: {
            id: 'q_eng_3',
            question: "कोणते वाक्य बरोबर आहे?",
            options: [{ id: 'a', text: "My number phone is ____" }, { id: 'b', text: "My phone number is ____" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l4',
        title: 'नम्र विनंती (Polite Requests)',
        duration: 15,
        content: [
            { type: 'paragraph', text: "नम्र इंग्रजीमुळे लोकांचा तुमच्यावर विश्वास बसतो." },
            { type: 'video', text: "mBaYJJvccOo" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "मदत मागा | पुन्हा सांगण्यास सांगा | समजत नसल्याचे सांगा" },
            { type: 'heading', text: "महत्वाची वाक्ये" },
            { type: 'list', text: "Please help me. | Can you repeat, please? | I don’t understand. | Thank you." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "म्हणा 'Please help me' | म्हणा 'Can you repeat?' | म्हणा 'Thank you'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "आज एक वाक्य वापरा: 'Please help me.'" }
        ],
        quiz: {
            id: 'q_eng_4',
            question: "सर्वात नम्र काय आहे?",
            options: [{ id: 'a', text: "Help me" }, { id: 'b', text: "Please help me" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l5',
        title: 'व्हॉट्सॲप/फोन इंग्लिश',
        duration: 15,
        content: [
            { type: 'paragraph', text: "खऱ्या नोकऱ्यांमध्ये लहान संदेश सामान्य आहेत." },
            { type: 'video', text: "Izmc9P2XK3I" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "साधे अभिवादन लिहा | वेळ/उपलब्धता सांगा | आभार माना" },
            { type: 'heading', text: "संदेश नमुने (Templates)" },
            { type: 'list', text: "Hello ma’am/sir. | I am ____ . | I will come at ____ . | Thank you." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "हा संदेश ड्राफ्ट करा: 'Hello ma’am. I am ____. I will come at 11 AM. Thank you.'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका मेंटरला/शिक्षकाला सराव संदेश पाठवा (योग्य असल्यास)." }
        ],
        quiz: {
            id: 'q_eng_5',
            question: "संभाषणाचा नम्र शेवट कोणता?",
            options: [{ id: 'a', text: "Thank you" }, { id: 'b', text: "What?" }],
            correctOptionId: 'a'
              }
    }
];

export const freelanceLessons: Lesson[] = [
    {
            id: 'free_l1',
        title: 'फ्रीलांसिंग म्हणजे काय?',
        duration: 12,
        content: [
            { type: 'paragraph', text: "फ्रीलांसिंग म्हणजे तुम्ही एका कंपनीसाठी नोकरी न करता, वेगवेगळ्या लोकांसाठी (क्लायंट्स) छोटी कामे करता आणि प्रत्येक कामासाठी पैसे मिळवता. तुम्ही नोकर नसून सेवा देणारे (Service Provider) आहात." },
            { type: 'video', text: "fqR9IIKWXZo" },
            { type: 'heading', text: "सोपे उदाहरण" },
            { type: 'paragraph', text: "शिंपी जसा वेगवेगळ्या लोकांसाठी कपडे शिवतो, तसेच फ्रीलान्सर वेगवेगळ्या लोकांसाठी डिजिटल काम करतो." },
            { type: 'heading', text: "हे तुमच्यासाठी चांगले का आहे?" },
            { type: 'list', text: "तुम्ही फोनवरून सुरुवात करू शकता | तुम्ही घरबसल्या काम करू शकता | तुम्ही शिकत असतानाही कमवू शकता" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "मोठ्याने म्हणा: 'मी छोटे प्रोजेक्ट्स घेऊन पैसे कमवू शकते' | तुमच्या जवळील २ व्यवसायांचा विचार करा (दुकान, क्लास) | नोट्स ॲपमध्ये त्यांची नावे लिहा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुम्हाला आवडणारी ३ कामे लिहा (उदा. टायपिंग, पोस्टर बनवणे)." }
        ],
        quiz: {
            id: 'q_free_1',
            question: "फ्रीलांसिंगमध्ये पैसे कसे मिळतात?",
            options: [{ id: 'a', text: "महिन्याचा पगार" }, { id: 'b', text: "प्रत्येक कामाचे (Task) पैसे" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'free_l2',
        title: 'एक कौशल्य निवडा',
        duration: 15,
        content: [
            { type: 'paragraph', text: "सुरुवात करण्यासाठी तुम्हाला खूप इंग्रजी किंवा कोडिंग येण्याची गरज नाही. तुम्हाला फक्त एक छोटे कौशल्य हवे आहे जे तुम्ही फोनवर करू शकता." },
            { type: 'video', text: "D8JcZM0l45U" },
            { type: 'heading', text: "फोनवर करता येणारी कामे" },
            { type: 'list', text: "१. कॅनवा पोस्टर मेकर (दुकाने/क्लाससाठी) | २. व्हॉट्सॲप बिझनेस मदतनीस | ३. साधी डेटा एंट्री | ४. मराठी व्हॉइस-ओव्हर | ५. छोटे मराठी ते इंग्रजी भाषांतर" },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "यादीतून एक कौशल्य निवडा | स्वतःला सांगा: 'मी याचा रोज १५ मिनिटे सराव करेन' | नोट्समध्ये ते लिहून ठेवा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचे #१ मुख्य कौशल्य आणि #२ बॅकअप कौशल्य निवडा." }
        ],
        quiz: {
            id: 'q_free_2',
            question: "फोनवर सुरुवात करण्यासाठी उत्तम कौशल्य कोणते?",
            options: [{ id: 'a', text: "अडव्हान्स कोडिंग" }, { id: 'b', text: "कॅनवा + सोशल मीडिया" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'free_l3',
        title: 'तुमची डिजिटल तयारी (Toolkit)',
        duration: 15,
        content: [
            { type: 'paragraph', text: "क्लायंट शोधण्यापूर्वी, तुमचे 'डिजिटल दुकान' तयार करा. यासाठी तुम्हाला काही ॲप्स आणि पद्धतींची गरज आहे." },
            { type: 'video', text: "3Y4cFuvVI80" },
            { type: 'video', text: "hT0foxwjNSE" },
            { type: 'heading', text: "आवश्यक ॲप्स" },
            { type: 'list', text: "Gmail (प्रोफेशनल ईमेल) | Google Drive (काम साठवण्यासाठी) | Google Docs (पोर्टफोलिओसाठी) | WhatsApp (संवादासाठी) | Canva (डिझाइनसाठी)" },
            { type: 'heading', text: "फोल्डर नियम" },
            { type: 'paragraph', text: "Google Drive मध्ये 'Freelancing' नावाचे फोल्डर बनवा. त्यात उप-फोल्डर बनवा: Portfolio, Client Work, Certificates." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "Google Drive उघडा | 'Freelancing' फोल्डर बनवा | उप-फोल्डर बनवा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "Gmail मध्ये साधी सही (Signature) तयार करा: नाव, कौशल्य, शहर." }
        ],
        quiz: {
            id: 'q_free_3',
            question: "Google Drive का महत्त्वाचे आहे?",
            options: [{ id: 'a', text: "गेम खेळण्यासाठी" }, { id: 'b', text: "काम सुरक्षित ठेवण्यासाठी आणि शेअर करण्यासाठी" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'free_l4',
        title: 'काम सुरक्षितपणे शोधा',
        duration: 15,
        content: [
            { type: 'paragraph', text: "तुम्ही स्थानिक किंवा ऑनलाइन काम शोधू शकता. स्थानिक कामापासून सुरुवात करणे सोपे आहे. Fiverr.com / Upwork.com सारखे प्लॅटफॉर्म 'Work from Home' साठी सुरक्षित आहेत." },
            { type: 'video', text: "pr-7SaMcYvs" },
            { type: 'heading', text: "स्थानिक सुरुवात" },
            { type: 'paragraph', text: "ट्यूशन शिक्षक, मेडिकल स्टोअर्स किंवा ब्युटी पार्लरला भेटा. साधी ऑफर द्या (उदा. '१० पोस्टर्स ५०० रुपयांत')." },
            { type: 'heading', text: "ऑनलाइन: Internshala" },
            { type: 'paragraph', text: "भारतातील नवशिक्यांसाठी उत्तम. 'Work from Home' शोधा. अर्ज करणे विनामूल्य आहे." },
            { type: 'heading', text: "सुरक्षा नियम" },
            { type: 'paragraph', text: "जर कोणी नोकरी देण्यासाठी 'रजिस्ट्रेशन फी' किंवा 'ट्रेनिंग फी' मागितली, तर ते फसवणूक (Scam) आहे. पैसे देऊ नका." },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका स्थानिक दुकानासाठी तुमची सेवा देणारा व्हॉट्सॲप मेसेज ड्राफ्ट करा." }
        ],
        quiz: {
            id: 'q_free_4',
            question: "Internshala वर अर्ज करण्यासाठी पैसे लागतात का?",
            options: [{ id: 'a', text: "हो" }, { id: 'b', text: "नाही, ते मोफत आहे" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'free_l5',
        title: 'काम करा, बोला आणि पैसे मिळवा',
        duration: 15,
        content: [
            { type: 'paragraph', text: "अनेकदा कौशल्य असूनही संवाद न साधल्यामुळे काम मिळत नाही. तुम्हाला फक्त साधी, नम्र इंग्रजी वाक्ये हवी आहेत." },
            { type: 'video', text: "-5XpOmLYRkE" },
            { type: 'heading', text: "साधी वाक्ये" },
            { type: 'list', text: "'Thank you for the opportunity.' | 'I will share the first draft by tomorrow.' | 'Please share the details.' | 'Here is the final file. Thank you!'" },
            { type: 'heading', text: "पेमेंट नियम" },
            { type: 'paragraph', text: "स्थानिक ग्राहकांसाठी UPI वापरा. तुमचा QR कोड नम्रपणे शेअर करा. काम सुरू करण्यापूर्वी डेडलाइन निश्चित करा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "क्लायंटला पाठवण्यासाठी २ ओळींचा संदेश लिहा | तुमची सुरुवातीची किंमत ठरवा (उदा. २०० रुपये)" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचा सेवा नियम लिहा: 'मी ___ दिवसांत काम पूर्ण करेन आणि ___ वेळा बदल (Revisions) करून देईन.'" }
        ],
        quiz: {
            id: 'q_free_5',
            question: "क्लायंटचा विश्वास जिंकण्याचा सर्वोत्तम मार्ग कोणता?",
            options: [{ id: 'a', text: "उशिरा उत्तर देणे" }, { id: 'b', text: "वेळेवर काम आणि नम्र संवाद" }],
            correctOptionId: 'b'
        }
    }
];

export const moneyLessons: Lesson[] = [
    {
        id: 'mon_l1',
        title: 'फ्रीलांसरसाठी पैशाची मानसिकता',
        duration: 12,
        content: [
            { type: 'paragraph', text: "फ्रीलांसिंग म्हणजे फक्त कौशल्य नाही, तर पैशाची शिस्त देखील आहे. जेव्हा तुम्ही नियमितपणे कमवायला लागता, तेव्हा आत्मविश्वास वाढतो. पण जर पैशाचे व्यवस्थापन केले नाही, तर कमाई दिसेनाशी होते. हा धडा तुम्हाला हुशार कमाई करणारे बनण्यास मदत करेल." },
            { type: 'video', text: "Kh_fUDcTeNU" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "फ्रीलांसर्ससाठी 'उत्पन्न' म्हणजे काय | पैशाचा मागोवा घेणे (Tracking) का महत्त्वाचे आहे | बचतीचा एक सोपा नियम" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "तुम्ही विकू शकाल अशा १ कौशल्याचा विचार करा | कल्पना करा की तुम्ही या आठवड्यात ५०० रुपये कमवले | तुम्ही ते कशासाठी वापराल ते लिहा: गरज (Need) आणि बचत (Save)" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "नोट्स ॲपमध्ये लिहा: 'माझे पहिले साप्ताहिक कमाईचे ध्येय ₹____ आहे आणि मी ₹____ वाचवेन.'" }
        ],
        quiz: {
            id: 'q_mon_1',
            question: "फ्रीलांसरने उत्पन्न आणि खर्चाचा मागोवा का घ्यावा?",
            options: [{ id: 'a', text: "दिखावा करण्यासाठी" }, { id: 'b', text: "नियोजन आणि बचतीसाठी" }, { id: 'c', text: "कारण ॲप्स सांगतात" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l2',
        title: 'उत्पन्न, खर्च आणि गरजा vs इच्छा',
        duration: 15,
        content: [
            { type: 'paragraph', text: "उत्पन्न म्हणजे तुम्ही कमावलेले पैसे. खर्च म्हणजे तुम्ही खर्च केलेले पैसे. प्रगती करण्यासाठी तुम्हाला 'गरज' आणि 'इच्छा' यातील फरक समजला पाहिजे. यामुळे तणाव टाळता येतो आणि बचत वाढते." },
            { type: 'video', text: "iWsQY6Ha4OE" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "उत्पन्न विरुद्ध खर्च | गरजा विरुद्ध इच्छा | लहान खर्च कसे बचत कमी करतात" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "आजचे छोटे खर्च लिहा (१०-२० रुपये सुद्धा) | प्रत्येक गोष्टीला खूण करा: गरज (Need) किंवा इच्छा (Want)" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "३ दिवस, प्रत्येक खर्च तुमच्या फोनमध्ये लिहा. ३ दिवसांनंतर त्यांची बेरीज करा." }
        ],
        quiz: {
            id: 'q_mon_2',
            question: "यातून 'गरज' कोणती आहे?",
            options: [{ id: 'a', text: "महागडे इयरफोन" }, { id: 'b', text: "औषधे" }, { id: 'c', text: "अतिरिक्त खरेदी" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l3',
        title: 'साधे बजेटिंग (साप्ताहिक + मासिक)',
        duration: 15,
        content: [
            { type: 'paragraph', text: "बजेट म्हणजे उत्पन्न आणि खर्चाची तुलना. जर उत्पन्न खर्चापेक्षा जास्त असेल, तर तुमच्याकडे 'शिल्लक' (Surplus) आहे. जर खर्च जास्त असेल, तर 'तूट' (Deficit) आहे. ध्येय म्हणजे हळूहळू शिल्लक वाढवणे. बजेटिंग नियमितपणे केले पाहिजे." },
            { type: 'video', text: "RcQi5SHYaf0" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "बजेट म्हणजे काय | १० मिनिटांचे साप्ताहिक बजेट कसे बनवावे | साधे बचत सूत्र" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "लिहा: साप्ताहिक उत्पन्न = ₹____ | साप्ताहिक खर्च = ₹____ | साप्ताहिक बचत ध्येय = ₹____" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "हा नियम वापरा: बचत = उत्पन्न - खर्च. तुमच्या खऱ्या आकड्यांसह उदाहरण लिहा." }
        ],
        quiz: {
            id: 'q_mon_3',
            question: "जर उत्पन्न ७०० आणि खर्च ६०० असेल, तर तुमच्याकडे आहे:",
            options: [{ id: 'a', text: "तूट (Deficit)" }, { id: 'b', text: "शिल्लक (Surplus)" }, { id: 'c', text: "कर्ज" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l4',
        title: 'बचत आणि अडचणीचा पैसा (Emergency Fund)',
        duration: 12,
        content: [
            { type: 'paragraph', text: "बचत सुरक्षा निर्माण करते. रोज १०-२० रुपये वाचवणे सुद्धा महत्त्वाचे ठरू शकते. इमर्जन्सी फंड म्हणजे आजारपण किंवा प्रवासासारख्या अचानक उद्भवणाऱ्या गरजांसाठी ठेवलेले पैसे. लहान सुरुवात करा. सातत्य महत्त्वाचे आहे." },
            { type: 'video', text: "saAyROxeLwg" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "बचत का महत्त्वाची आहे | इमर्जन्सी फंडचा अर्थ | साधे ध्येय निश्चित करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "१ ध्येय निवडा: नवीन फोन, कोर्स फी किंवा कुटुंबाला मदत | एकूण रक्कम ठरवा ₹____ | मासिक बचत ₹____" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमच्या नोट्समध्ये 'Emergency' नावाचे फोल्डर बनवा. हे पैसे तुम्ही कधी वापराल अशा ३ परिस्थिती लिहा." }
        ],
        quiz: {
            id: 'q_mon_4',
            question: "इमर्जन्सी फंड कशासाठी असतो?",
            options: [{ id: 'a', text: "सणासाठी" }, { id: 'b', text: "शॉपिंगसाठी" }, { id: 'c', text: "अचानक आलेल्या गरजेसाठी" }],
            correctOptionId: 'c'
        }
    },
    {
        id: 'mon_l5',
        title: 'पेमेंट घेणे: बँक + UPI',
        duration: 15,
        content: [
            { type: 'paragraph', text: "फ्रीलांसिंग काम करण्यासाठी, तुम्हाला सुरक्षितपणे पैसे घेता आले पाहिजेत. भारतात बहुतेक क्लायंट्स UPI किंवा बँक ट्रान्सफर वापरतात. तुम्ही UPI ID तयार करू शकता, QR कोडद्वारे पैसे घेऊ शकता." },
            { type: 'video', text: "51TM2IwzzIg" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "फ्रीलांसर्स पेमेंट कसे घेतात | UPI ID आणि QR बेसिक्स | पेमेंट हिस्ट्री तपासणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "तुमचे UPI ॲप उघडा | UPI ID शोधा | QR कोड शोधा | ट्रान्झॅक्शन हिस्ट्री तपासा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "क्लायंटला पाठवण्यासाठी मेसेज तयार करा: 'नमस्ते, कृपया ₹____ माझ्या UPI वर पाठवा: ______. धन्यवाद.'" }
        ],
        quiz: {
            id: 'q_mon_5',
            question: "QR कोड कशासाठी वापरला जातो?",
            options: [{ id: 'a', text: "सेल्फी घेण्यासाठी" }, { id: 'b', text: "पैसे सहज घेण्यासाठी किंवा देण्यासाठी" }, { id: 'c', text: "गेम डाउनलोड करण्यासाठी" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l6',
        title: 'UPI सुरक्षा आणि स्कॅमपासून संरक्षण',
        duration: 12,
        content: [
            { type: 'paragraph', text: "अनेक नवीन युजर्स फसव्या कॉल्सला बळी पडतात. सर्वात महत्त्वाचा नियम: UPI पिन फक्त पैसे पाठवण्यासाठी टाकला जातो, पैसे घेण्यासाठी नाही. जर कोणी पैसे घेण्यासाठी पिन मागितला, तर तो स्कॅम आहे." },
            { type: 'video', text: "MGC0r1Ou4hg" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "UPI सुरक्षेचे नियम | सामान्य स्कॅम पद्धती | शंका आल्यास काय करावे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "कधीही शेअर करू नका: UPI पिन, OTP, बँक पासवर्ड | खात्री करा: पैसे देण्यापूर्वी नाव आणि रक्कम तपासा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "हे वाक्य लिहून ठेवा: 'माझा UPI पिन खाजगी आहे. मी तो कोणालाही सांगणार नाही.'" }
        ],
        quiz: {
            id: 'q_mon_6',
            question: "एक व्यक्ती म्हणते: 'पैसे मिळवण्यासाठी तुमचा UPI पिन सांगा.' हे खरे आहे का?",
            options: [{ id: 'a', text: "हो, खरे आहे" }, { id: 'b', text: "नाही, खोटे आहे (स्कॅम)" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l7',
        title: 'किंमत आणि इन्व्हॉइस (Invoice)',
        duration: 15,
        content: [
            { type: 'paragraph', text: "फ्रीलांसर्सनी कामाची किंमत स्पष्ट केली पाहिजे. काम सुरू करण्यापूर्वी किंमत निश्चित करा. एक साधे इन्व्हॉइस (बिल) तुम्हाला प्रोफेशनल बनवते आणि कमाईचा मागोवा घेण्यास मदत करते." },
            { type: 'video', text: "EJY3gl0QtGw" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "किंमत ठरवण्याच्या पद्धती | कोटेशन कसे पाठवावे | इन्व्हॉइसमध्ये काय असते" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "निवडा: कामाची किंमत (Per task) किंवा तासाची किंमत (Per hour) | लिहा: 'या कामासाठी माझी फी ₹____ आहे.'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "Google Docs मध्ये एक नमुना इन्व्हॉइस बनवा: नाव, सेवा, तारीख, रक्कम, UPI ID." }
        ],
        quiz: {
            id: 'q_mon_7',
            question: "इन्व्हॉइस का उपयुक्त आहे?",
            options: [{ id: 'a', text: "ते छान दिसते" }, { id: 'b', text: "ते कमाई ट्रॅक करण्यास आणि विश्वास वाढवण्यास मदत करते" }, { id: 'c', text: "हे फक्त मोठ्या कंपन्यांसाठी आहे" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'mon_l8',
        title: 'कायदेशीर वाढ: पॅन, टॅक्स आणि GST',
        duration: 10,
        content: [
            { type: 'paragraph', text: "सुरुवातीला कौशल्य आणि बचतीवर लक्ष केंद्रित करा. जेव्हा तुमचे उत्पन्न वाढेल, तेव्हा तुम्हाला पॅन कार्ड आणि टॅक्ससाठी मदतीची गरज लागेल. GST साधारणपणे तेव्हाच लागतो जेव्हा तुमची वार्षिक उलाढाल २० लाख रुपयांच्या वर जाते." },
            { type: 'video', text: "PLACEHOLDER_VIDEO_ID" },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "कायदेशीर गोष्टी का महत्त्वाच्या आहेत | मदत कधी घ्यावी | व्यवसायाच्या वाढीचे टप्पे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "लिहा: 'सध्या माझे लक्ष कौशल्य आणि सुरक्षित पेमेंटवर आहे.' | लिहा: 'जेव्हा उत्पन्न खूप वाढेल, तेव्हा मी टॅक्ससाठी मदत घेईन.'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "पालकांशी बोला: 'जर माझी फ्रीलांसिंग कमाई मोठी झाली, तर आपण काय करू?'" }
        ],
        quiz: {
            id: 'q_mon_8',
            question: "GST साधारणपणे कधी लागतो?",
            options: [{ id: 'a', text: "जेव्हा तुम्ही २०० रुपये कमवता" }, { id: 'b', text: "जेव्हा तुम्ही मोठा व्यवसाय करता (२० लाख+)" }, { id: 'c', text: "जेव्हा तुम्ही ॲप उघडता" }],
            correctOptionId: 'b'
        }
    }
];