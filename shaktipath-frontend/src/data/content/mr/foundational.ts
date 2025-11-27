
import type { Lesson } from '../../../types';

export const smartphoneLessons: Lesson[] = [
    {
        id: 'sm_l1', 
        title: 'बटणे आणि चिन्हे', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "तुमच्या फोनची स्क्रीन नेव्हिगेट करण्यासाठी खाली तीन बटणे असतात. १. त्रिकोण (बॅक) म्हणजे 'मागे जा' बटण. २. वर्तुळ (होम) तुम्हाला मुख्य स्क्रीनवर घेऊन जाते. ३. चौकोन (रिसेंट) तुम्हाला सध्या उघडे असलेले ॲप्स दाखवते. या तीन बटणांचा वापर करणे डिजिटल साक्षरतेची पहिली पायरी आहे." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "३ मुख्य बटणे ओळखणे | त्यांचे कार्य समजून घेणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "मागे जाण्यासाठी त्रिकोण (बॅक) दाबा | बाहेर पडण्यासाठी वर्तुळ (होम) दाबा | उघडे ॲप्स पाहण्यासाठी चौकोन (रिसेंट) दाबा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमच्या फोनवर होम बटण शोधा आणि दाबा. त्यानंतर रिसेंट बटण दाबून एक ॲप बंद करा." }
        ],
        quiz: {
            id: 'q_sm_1', 
            question: "मुख्य स्क्रीनवर जाण्यासाठी कोणते बटण दाबावे?",
            options: [{ id: 'a', text: "बॅक बटण" }, { id: 'b', text: "होम बटण" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l2', 
        title: 'सेटिंग्ज आणि ब्राइटनेस', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "तुमच्या फोनच्या वरच्या बाजूला 'क्विक सेटिंग्स' पॅनेल असते. तिथून तुम्ही वायफाय, ब्लूटूथ आणि आवाज नियंत्रित करू शकता. 'ब्राइटनेस' (चमक) कमी-जास्त करणे महत्वाचे आहे. जास्त ब्राइटनेस बॅटरी लवकर संपवते. रात्रीच्या वेळी डोळ्यांच्या आरामासाठी 'आय कम्फर्ट' मोड वापरा." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "सेटिंग्ज उघडणे | ब्राइटनेस बदलणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "स्क्रीन वरून खाली स्वाइप करा | सूर्य चिन्हावर बोट ठेवून ब्राइटनेस कमी-जास्त करा | रात्री 'आय कम्फर्ट' चालू करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमची ब्राइटनेस ५०% वर सेट करा. 'सायलेंट मोड' शोधा आणि १ मिनिटासाठी चालू करा." }
        ],
        quiz: {
            id: 'q_sm_2', 
            question: "क्विक सेटिंग्स उघडण्यासाठी काय करावे?",
            options: [{ id: 'a', text: "वरून खाली स्वाइप करा" }, { id: 'b', text: "खालून वर स्वाइप करा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l3', 
        title: 'वायफाय आणि डेटा', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "इंटरनेट वापरण्याचे दोन मार्ग आहेत. 'मोबाईल डेटा' तुमच्या सिम कार्डवरून चालतो आणि पैसे लागतात. 'वायफाय' वेगवान आणि स्वस्त असते, पण ते एका ठराविक जागेतच चालते (उदा. घर किंवा ऑफिस). मोठे व्हिडिओ डाउनलोड करण्यासाठी वायफाय वापरणे फायद्याचे असते." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "सेटिंग्ज > वायफाय वर टॅप करा | ते चालू करा | नेटवर्क निवडा आणि पासवर्ड टाका" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचा मोबाईल डेटा बंद करा आणि वायफाय नेटवर्कशी कनेक्ट करण्याचा प्रयत्न करा." }
        ],
        quiz: {
            id: 'q_sm_3', 
            question: "डाउनलोडसाठी काय स्वस्त आहे?",
            options: [{ id: 'a', text: "वायफाय" }, { id: 'b', text: "मोबाईल डेटा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l4', 
        title: 'प्ले स्टोअर आणि ॲप्स', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "गुगल प्ले स्टोअर हे डिजिटल सुपरमार्केट आहे. अनोळखी वेबसाइटवरून ॲप्स डाउनलोड करण्याऐवजी इथून करा, कारण ते सुरक्षित असतात. ॲप घेण्यापूर्वी त्याचे रेटिंग (४+) आणि डाउनलोड संख्या तपासा." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "ॲप्स शोधणे | सुरक्षितपणे इंस्टॉल करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "प्ले स्टोअर उघडा | 'Calculator' शोधा | इंस्टॉल वर टॅप करा | 'Open' बटणाची प्रतीक्षा करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "प्ले स्टोअरमध्ये 'Google Translate' शोधा. एक रिव्ह्यू वाचा." }
        ],
        quiz: {
            id: 'q_sm_4', 
            question: "सुरक्षित ॲप्स कुठे मिळतात?",
            options: [{ id: 'a', text: "व्हॉट्सॲप फॉरवर्ड" }, { id: 'b', text: "प्ले स्टोअर" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l5', 
        title: 'व्हॉट्सॲप प्रो', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "कामासाठी व्हॉट्सॲप वापरताना महत्वाचे मेसेज हरवू शकतात. 'पिन' (Pin) केल्याने महत्वाचे चॅट वर राहते. 'स्टार' (Star) केल्याने महत्वाचा मेसेज सेव्ह होतो, जो तुम्ही नंतर 'Starred Messages' मध्ये पाहू शकता." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "चॅट पिन करणे | संदेश स्टार करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "महत्वाच्या चॅटला पिन करा | संदेशाला स्टार करा | लोकेशन पाठवा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एक महत्त्वाचा संदेश शोधा आणि स्टार करा. नंतर सेटिंग्जमध्ये जाऊन तो पहा." }
        ],
        quiz: {
            id: 'q_sm_5', 
            question: "विशिष्ट संदेश कसा सेव्ह करावा?",
            options: [{ id: 'a', text: "स्टार करा" }, { id: 'b', text: "डिलीट करा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l6', 
        title: 'YouTube वरून शिकणे', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "युट्यूब हे जगातील सर्वात मोठे मोफत वाचनालय आहे. डेटा वाचवण्यासाठी व्हिडिओची गुणवत्ता (Quality) १०८०p वरून ३६०p वर आणा. यामुळे डेटा ८०% वाचतो आणि व्हिडिओही स्पष्ट दिसतो." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "कौशल्ये शोधणे | डेटा वाचवणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "सर्च चिन्ह टॅप करा | 'भात कसा बनवायचा' टाइप करा | व्हिडिओ गुणवत्ता ३६०p करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "'Excel basics' शोधा आणि एक व्हिडिओ डेटा सेव्हर मोडमध्ये पहा." }
        ],
        quiz: {
            id: 'q_sm_6', 
            question: "तुम्ही YouTube वर कौशल्ये शिकू शकता का?",
            options: [{ id: 'a', text: "नाही, फक्त गाणी" }, { id: 'b', text: "हो, जवळजवळ काहीही" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'sm_l7', 
        title: 'कॅमेरा आणि फोटो', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "चांगला फोटो घेण्यासाठी प्रकाश तुमच्या मागे नसून तुमच्या समोर असावा. फोटो घेताना स्क्रीनवर टॅप करा जेणेकरून कॅमेरा 'फोकस' करेल आणि फोटो स्पष्ट येईल." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "फोकस करणे | प्रकाशाचे नियम" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "लेन्स स्वच्छ करा | स्क्रीनवर टॅप करून फोकस करा | कॅमेरा स्थिर ठेवा आणि क्लिक करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एखाद्या वहीतील मजकुराचा फोटो घ्या. तो वाचता येतोय का ते पहा." }
        ],
        quiz: {
            id: 'q_sm_7', 
            question: "फोटो अस्पष्ट आल्यास काय तपासावे?",
            options: [{ id: 'a', text: "लेन्स घाणेरडी आहे का" }, { id: 'b', text: "बॅटरी पूर्ण आहे का" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l8', 
        title: 'व्हॉइस सर्च', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "लिहिण्यापेक्षा बोलणे सोपे आहे. गुगलवर माइक चिन्हावर दाबून तुम्ही प्रश्न विचारू शकता. 'हवामान कसे आहे?' किंवा 'आईला कॉल कर' असे बोलून तुम्ही फोन नियंत्रित करू शकता." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "गुगल असिस्टंटचा वापर | बोलून शोधणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "माइक चिन्ह टॅप करा | म्हणा 'हवामान कसे आहे?' | म्हणा 'आईला कॉल कर'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "गुगलला विचारा: 'मुंबईपासून पुणे किती दूर आहे?'" }
        ],
        quiz: {
            id: 'q_sm_8', 
            question: "व्हॉइस सर्च कधी मदत करते?",
            options: [{ id: 'a', text: "जेव्हा तुम्ही टाइप करू शकत नाही" }, { id: 'b', text: "जेव्हा तुम्ही झोपला आहात" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'sm_l9', 
        title: 'सुरक्षा आणि पिन', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "तुमचा फोन लॉक ठेवणे महत्वाचे आहे. पिन, पॅटर्न किंवा फिंगरप्रिंट लॉक वापरा. '१२३४' किंवा '००००' असे सोपे पिन वापरू नका, कारण ते कोणालाही समजू शकतात." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "स्क्रीन लॉक सेट करणे | सुरक्षित पिन" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "सेटिंग्ज > सुरक्षा मध्ये जा | स्क्रीन लॉक सेट करा | कठीण पिन निवडा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचा फोन १ मिनिट वापरला नाही तर तो आपोआप लॉक होतो का ते तपासा." }
        ],
        quiz: {
            id: 'q_sm_9', 
            question: "फोन लॉक का करावा?",
            options: [{ id: 'a', text: "कूल दिसण्यासाठी" }, { id: 'b', text: "डेटा सुरक्षित ठेवण्यासाठी" }],
            correctOptionId: 'b'
        }
    }
];

export const computerLessons: Lesson[] = [
    {
        id: 'comp_l1', 
        title: 'लॅपटॉप आणि डेस्कटॉप', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "संगणकाचे दोन प्रकार आहेत. 'डेस्कटॉप' एका जागेवर स्थिर असतो आणि त्याला मॉनिटर, कीबोर्ड, माउस वेगळे असतात. 'लॅपटॉप' हा छोटा आणि वाहून नेण्याजोगा असतो, ज्यात बॅटरी असते." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "संगणकाचे प्रकार | मुख्य भाग" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "स्क्रीन (मॉनिटर) ओळखा | कीबोर्ड ओळखा | माउस ओळखा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका संगणकाकडे पहा आणि त्याचे पॉवर बटण शोधा." }
        ],
        quiz: {
            id: 'q_comp_1', 
            question: "लॅपटॉप कसा असतो?",
            options: [{ id: 'a', text: "वाहून नेण्याजोगा (Portable)" }, { id: 'b', text: "एका जागेवर फिक्स" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l2', 
        title: 'चालू आणि बंद करणे', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "संगणक थेट बटनाने बंद करू नये. त्याला 'शट डाऊन' (Shut Down) करणे आवश्यक असते. यामुळे फाइल्स सुरक्षित राहतात. चालू करण्यासाठी पॉवर बटण दाबा." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "बूट अप | सुरक्षितपणे बंद करणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "पॉवर बटण दाबा (चालू करण्यासाठी) | स्टार्ट > पॉवर > शट डाऊन (बंद करण्यासाठी)" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "संगणक चालू करा, पूर्ण लोड होण्याची वाट पहा, आणि मग तो योग्यरित्या बंद करा." }
        ],
        quiz: {
            id: 'q_comp_2', 
            question: "संगणक बंद करण्यासाठी काय करावे?",
            options: [{ id: 'a', text: "प्लग काढा" }, { id: 'b', text: "शट डाऊन पर्याय वापरा" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l3', 
        title: 'माउस मास्टरी', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "माउस हे तुमचे डिजिटल बोट आहे. 'डावे क्लिक' निवडण्यासाठी आणि 'उजवे क्लिक' मेनू उघडण्यासाठी वापरतात. स्क्रोल व्हीलने तुम्ही पेज वर-खाली करू शकता." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "डावे vs उजवे क्लिक | स्क्रोलिंग" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "निवडण्यासाठी डावे क्लिक | उघडण्यासाठी डबल क्लिक | मेनूसाठी उजवे क्लिक" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "डेस्कटॉपवर रिकाम्या जागी उजवे क्लिक करा आणि 'Refresh' निवडा." }
        ],
        quiz: {
            id: 'q_comp_3', 
            question: "उजवे क्लिक काय उघडते?",
            options: [{ id: 'a', text: "एक मेनू" }, { id: 'b', text: "एक प्रोग्राम" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l4', 
        title: 'कीबोर्ड परिचय', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "कीबोर्डचे महत्त्वाचे बटण: 'Enter' नवीन ओळीवर जाण्यासाठी, 'Backspace' पुसण्यासाठी, आणि 'Spacebar' दोन शब्दांत जागा सोडण्यासाठी वापरतात. 'Shift' दाबून तुम्ही कॅपिटल अक्षरे किंवा चिन्हे (@, #) टाइप करू शकता." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "अक्षरे आणि अंक | विशेष की" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'Enter' शोधा | 'Backspace' शोधा | 'Spacebar' शोधा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "नोटपॅड उघडा आणि तुमचे पूर्ण नाव टाइप करा." }
        ],
        quiz: {
            id: 'q_comp_4', 
            question: "कोणते बटण अक्षरे पुसते?",
            options: [{ id: 'a', text: "Enter" }, { id: 'b', text: "Backspace" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'comp_l5', 
        title: 'डेस्कटॉप आणि चिन्हे', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "'डेस्कटॉप' ही तुमची मुख्य स्क्रीन आहे. 'आयकॉन्स' (Icons) म्हणजे छोट्या फाइल्स किंवा फोल्डर्स. 'रिसायकल बिन' म्हणजे संगणकाची कचरा पेटी, जिथे डिलीट केलेल्या फाइल्स जातात." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "डेस्कटॉप ओळख | आयकॉन्स वापरणे" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'This PC' ओळखा | 'Recycle Bin' ओळखा | एखादा आयकॉन ड्रॅग करून हलवा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "रिसायकल बिनचा आयकॉन स्क्रीनच्या दुसऱ्या कोपऱ्यात नेऊन ठेवा." }
        ],
        quiz: {
            id: 'q_comp_5', 
            question: "डिलीट केलेल्या फाइल्स कुठे जातात?",
            options: [{ id: 'a', text: "रिसायकल बिन" }, { id: 'b', text: "क्लाउड" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l6', 
        title: 'प्रोग्राम्स उघडणे', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "'स्टार्ट मेनू' मधून तुम्ही कोणतेही ॲप उघडू शकता. यादीत शोधण्यापेक्षा 'सर्च बार' मध्ये नाव टाइप करणे (उदा. 'Paint') जास्त सोपे असते." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "स्टार्ट मेनू | सर्च बार" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "स्टार्ट बटण दाबा | 'Paint' टाइप करा | क्लिक करून उघडा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "कॅल्क्युलेटर (Calculator) ॲप शोधा आणि उघडा." }
        ],
        quiz: {
            id: 'q_comp_6', 
            question: "ॲप्स कुठे शोधाल?",
            options: [{ id: 'a', text: "स्टार्ट मेनू" }, { id: 'b', text: "कीबोर्डच्या खाली" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l7', 
        title: 'विंडो नियंत्रणे', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "कोणत्याही प्रोग्रामची 'विंडो' असते. ती लपवण्यासाठी 'Minimize' (-), पूर्ण स्क्रीन करण्यासाठी 'Maximize' (□), आणि बंद करण्यासाठी 'Close' (X) बटण वापरा." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "मिनीमाइज | मॅक्सिमाइज | क्लोज" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'-' क्लिक करून लपवा | चौकोन क्लिक करून मोठी करा | 'X' क्लिक करून बंद करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एक विंडो उघडा, ती मोठी करा आणि मग बंद करा." }
        ],
        quiz: {
            id: 'q_comp_7', 
            question: "'X' बटण काय करते?",
            options: [{ id: 'a', text: "विंडो बंद करते" }, { id: 'b', text: "विंडो उघडते" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l8', 
        title: 'मजकूर टाइप करणे', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "'कॅप्स लॉक' (Caps Lock) चालू केल्यावर सर्व अक्षरे मोठी (CAPITAL) येतात. फक्त एक अक्षर मोठे हवे असल्यास 'Shift' दाबून ते अक्षर दाबा." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "कॅप्स लॉक | शिफ्ट की" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "कॅप्स लॉक दाबा आणि टाइप करा | शिफ्ट दाबून एक अक्षर मोठे काढा | शिफ्ट दाबून @ काढा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "टाइप करा: 'Hello World!'" }
        ],
        quiz: {
            id: 'q_comp_8', 
            question: "सर्व अक्षरे मोठी करण्यासाठी काय वापरावे?",
            options: [{ id: 'a', text: "Caps Lock" }, { id: 'b', text: "Tab" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'comp_l9', 
        title: 'फाइल्स सेव्ह करणे', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "लाईट गेल्यास तुमचे काम जाऊ शकते, म्हणून 'Save' करणे महत्वाचे आहे. 'Save As' मुळे तुम्ही फाईलला नाव देऊ शकता आणि कुठे ठेवायची ते ठरवू शकता." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "सेव्ह vs सेव्ह ॲज | फाईलचे नाव" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "File > Save क्लिक करा | डेस्कटॉप निवडा | नाव द्या | Save दाबा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "नोटपॅडमध्ये काहीतरी लिहा आणि 'MyNote' नावाने डेस्कटॉपवर सेव्ह करा." }
        ],
        quiz: {
            id: 'q_comp_9', 
            question: "सेव्ह न केल्यास काय होते?",
            options: [{ id: 'a', text: "काम हरवते" }, { id: 'b', text: "आपोआप सेव्ह होते" }],
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
            { type: 'paragraph', text: "लोकांशी बोलताना सुरुवात कशी करावी? सकाळी 'Good Morning', दुपारी 'Good Afternoon' आणि संध्याकाळी 'Good Evening' म्हणावे. अनौपचारिकपणे 'Hello' किंवा 'Hi' म्हणू शकता. निरोप घेताना 'Goodbye' म्हणा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "मित्रांना 'Hello' म्हणा | बॉसला 'Good Morning' म्हणा | जाताना 'Goodbye' म्हणा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "आज इंग्रजीत ३ लोकांचे अभिवादन करा." }
        ],
        quiz: {
            id: 'q_eng_1', 
            question: "सकाळी ९ वाजता काय म्हणावे?",
            options: [{ id: 'a', text: "Good Morning" }, { id: 'b', text: "Good Night" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l2', 
        title: 'परिचय (Introduction)', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "स्वतःची ओळख करून देताना ३ गोष्टी सांगा: तुमचे नाव, तुम्ही कुठून आलात, आणि तुम्ही काय करता. उदाहरणार्थ: 'My name is Pooja. I live in Pune. I am a Teacher.'" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "म्हणा 'My name is [नाव]' | म्हणा 'I live in [शहर]' | हसत बोला" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "आरशासमोर स्वतःचा परिचय द्या." }
        ],
        quiz: {
            id: 'q_eng_2', 
            question: "My name ___ Riya.",
            options: [{ id: 'a', text: "am" }, { id: 'b', text: "is" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l3', 
        title: 'नम्र शब्द', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "इंग्रजीत नम्रता महत्वाची आहे. काहीही मागताना 'Please' म्हणा. काही मिळाल्यावर 'Thank you' म्हणा. चूक झाल्यास 'Sorry' म्हणा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "मागताना Please वापरा | घेताना Thank you वापरा | चूक झाल्यावर Sorry वापरा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "'Please' वापरून एक ग्लास पाणी मागा." }
        ],
        quiz: {
            id: 'q_eng_3', 
            question: "काहीतरी मागण्यासाठी काय वापरावे?",
            options: [{ id: 'a', text: "Please" }, { id: 'b', text: "Now" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l4', 
        title: 'हे काय आहे? (This/That)', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "जवळच्या वस्तूला 'This' म्हणतात (उदा. This is a pen). दूरच्या वस्तूला 'That' म्हणतात (उदा. That is a door)." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "जवळ बोट दाखवा: 'This is a pen' | दूर बोट दाखवा: 'That is a door'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "खोलीतील ५ वस्तूंची नावे इंग्रजीत सांगा." }
        ],
        quiz: {
            id: 'q_eng_4', 
            question: "दूरच्या वस्तूसाठी काय वापरावे?",
            options: [{ id: 'a', text: "This" }, { id: 'b', text: "That" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'eng_l5', 
        title: 'संख्या (Numbers)', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "पैसे आणि तारखांसाठी अंक महत्वाचे आहेत. 13, 14, 15 'teen' ने संपतात. 30, 40, 50 'ty' ने संपतात. Fifteen (15) आणि Fifty (50) मध्ये गोंधळ करू नका." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "बोटे मोजा: One, Two... | किंमत वाचा: 'Fifty Rupees'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचा फोन नंबर इंग्रजीत सांगा." }
        ],
        quiz: {
            id: 'q_eng_5', 
            question: "50 म्हणजे...",
            options: [{ id: 'a', text: "Fifty" }, { id: 'b', text: "Fifteen" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l6', 
        title: 'दिवस आणि वेळ', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "वेळेचे नियोजन करण्यासाठी हे शब्द वापरा. दिवसांसाठी 'ON' (On Monday) आणि वेळेसाठी 'AT' (At 5 PM) वापरा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "आजचा दिवस सांगा | म्हणा 'It is 5 O'clock'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "कोणालातरी आताची वेळ इंग्रजीत सांगा." }
        ],
        quiz: {
            id: 'q_eng_6', 
            question: "Sunday नंतर कोणता दिवस येतो?",
            options: [{ id: 'a', text: "Monday" }, { id: 'b', text: "Tuesday" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l7', 
        title: 'कामाचे शब्द', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "ऑफिसमध्ये वापरले जाणारे शब्द: 'Colleague' (सहकारी), 'Boss' (मालक), 'Salary' (पगार), 'Client' (ग्राहक)." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "Office = कामाची जागा | Colleague = सोबत काम करणारा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमच्या स्वप्नातील नोकरीबद्दल १ वाक्य बोला." }
        ],
        quiz: {
            id: 'q_eng_7', 
            question: "तुमच्या सोबत काम करणारी व्यक्ती...",
            options: [{ id: 'a', text: "Colleague" }, { id: 'b', text: "Enemy" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l8', 
        title: 'मेसेज वाचणे', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "काही शॉर्टफॉर्म्स: ASAP (लवकरच), FYI (माहितीसाठी), EOD (दिवस संपेपर्यंत). हे समजल्यास काम सोपे होते." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'Call me later' वाचा | 'Meeting at 5 PM' वाचा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुम्हाला आलेला शेवटचा इंग्रजी मेसेज वाचायचा प्रयत्न करा." }
        ],
        quiz: {
            id: 'q_eng_8', 
            question: "'ASAP' म्हणजे...",
            options: [{ id: 'a', text: "As soon as possible" }, { id: 'b', text: "Always say a prayer" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'eng_l9', 
        title: 'सोपे उत्तर देणे', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "उत्तरांमध्ये स्पष्टता ठेवा. होकार असेल तर 'Yes, I can'. नकार असेल तर 'No, sorry'. समजले असेल तर 'Ok, noted'." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "उत्तर द्या 'Yes' | उत्तर द्या 'No, sorry'" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "मित्राच्या मेसेजला इंग्रजीत उत्तर द्या." }
        ],
        quiz: {
            id: 'q_eng_9', 
            question: "'How are you?' चे उत्तर...",
            options: [{ id: 'a', text: "I am fine" }, { id: 'b', text: "I am tall" }],
            correctOptionId: 'a'
        }
    }
];

export const freelanceLessons: Lesson[] = [
    {
        id: 'free_l1', 
        title: 'ऑनलाइन काम म्हणजे काय?', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "फ्रीलांसिंग म्हणजे एखाद्या कंपनीत नोकरी न करता, स्वतःच्या कौशल्याने वेगवेगळ्या ग्राहकांसाठी काम करणे. तुम्ही घरबसल्या काम करू शकता. तुम्हीच तुमचे बॉस असता, पण काम वेळेवर पूर्ण करण्याची जबाबदारी तुमची असते." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "घरून काम करण्याची कल्पना करा | ग्राहक शोधा | स्वतःच्या वेळेचे नियोजन करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका मित्राला सांगा: 'फ्रीलांसिंग म्हणजे इंटरनेट वापरून स्वतःसाठी काम करणे.'" }
        ],
        quiz: {
            id: 'q_free_1', 
            question: "फ्रीलांसिंगमध्ये बॉस कोण असतो?",
            options: [{ id: 'a', text: "तुम्ही स्वतः" }, { id: 'b', text: "सरकार" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l2',
        title: 'तुमची कौशल्ये',
        duration: 15,
        content: [
            { type: 'paragraph', text: "तुम्ही काय करू शकता? टायपिंग, डिझाइन, भाषांतर, किंवा डेटा एंट्री? तुमची ही कौशल्ये विकून तुम्ही पैसे कमवू शकता." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "तुम्हाला काय येते ते ओळखा | ते इतरांना कसे उपयोगी पडेल ते पहा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुम्ही चांगल्या असलेल्या ३ गोष्टींची यादी करा." }
        ],
        quiz: {
            id: 'q_free_2', 
            question: "काम मिळवण्यासाठी काय हवे?",
            options: [{ id: 'a', text: "एक कौशल्य (Skill)" }, { id: 'b', text: "एक सूट" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l3',
        title: 'आवश्यक साधने',
        duration: 10,
        content: [
            { type: 'paragraph', text: "तुम्हाला फक्त एक स्मार्टफोन आणि इंटरनेटची गरज आहे. मोठ्या कामांसाठी लॅपटॉप चांगला असतो. Zoom किंवा Google Meet सारखे ॲप्स मीटिंगसाठी वापरा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "फोन तपासा | इंटरनेट स्पीड तपासा | Zoom इंस्टॉल करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "घरात काम करण्यासाठी एक शांत जागा शोधा." }
        ],
        quiz: {
            id: 'q_free_3', 
            question: "सर्वात महत्वाचे साधन कोणते?",
            options: [{ id: 'a', text: "इंटरनेट" }, { id: 'b', text: "प्रिंटर" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l4',
        title: 'विश्वास आणि सुरक्षा',
        duration: 15,
        content: [
            { type: 'paragraph', text: "सावध राहा. खऱ्या कामात तुम्हाला पैसे मिळतात, तुम्हाला पैसे द्यावे लागत नाहीत. जर कोणी 'नोकरीसाठी नोंदणी शुल्क' मागत असेल, तर तो घोटाळा आहे. OTP कधीही शेअर करू नका." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "कोणालाही पैसे देऊ नका | OTP कोणालाही सांगू नका" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "लक्षात ठेवा: नोकरीसाठी पैसे मागणारा माणूस खोटा असतो." }
        ],
        quiz: {
            id: 'q_free_4', 
            question: "नोकरीसाठी नोंदणी शुल्क मागीतल्यास?",
            options: [{ id: 'a', text: "हा घोटाळा आहे" }, { id: 'b', text: "हे सामान्य आहे" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l5',
        title: 'कामाची उदाहरणे',
        duration: 15,
        content: [
            { type: 'paragraph', text: "काही सामान्य ऑनलाइन कामे: 'Data Entry' (माहिती भरणे), 'Virtual Assistant' (ईमेल/शेड्युल सांभाळणे), 'Translation' (भाषांतर करणे)." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "डेटा एंट्री: नंबर टाइप करणे | VA: मदत करणे | भाषांतर: भाषा बदलणे" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुम्हाला आवडेल असे एक काम निवडा." }
        ],
        quiz: {
            id: 'q_free_5', 
            question: "कागदपत्रे पाहून टाइप करणे म्हणजे...",
            options: [{ id: 'a', text: "Data Entry" }, { id: 'b', text: "स्वयंपाक" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l6',
        title: 'शिकणे ही कमाई आहे',
        duration: 10,
        content: [
            { type: 'paragraph', text: "नवीन गोष्टी शिकत राहा. यूट्यूबवर मोफत ट्युटोरियल्स पहा. जेवढे जास्त कौशल्य, तेवढे जास्त पैसे." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'How to use Excel' सर्च करा | दररोज सराव करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "आज एका नवीन विषयावर ५ मिनिटांचा व्हिडिओ पहा." }
        ],
        quiz: {
            id: 'q_free_6', 
            question: "जास्त पैसे कमवण्यासाठी...",
            options: [{ id: 'a', text: "जास्त शिका" }, { id: 'b', text: "जास्त झोपा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l7',
        title: 'व्यावसायिकता',
        duration: 10,
        content: [
            { type: 'paragraph', text: "वेळेवर काम पूर्ण करणे आणि विनम्रपणे बोलणे महत्वाचे आहे. 'Deadline' (मुदत) पाळा. उशीर होणार असेल तर आधीच सांगा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "विनम्र व्हा | वेळेवर काम द्या | मेसेजला लवकर उत्तर द्या" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "सराव म्हणून एका मित्राला व्यावसायिक भाषेत मेसेज करा." }
        ],
        quiz: {
            id: 'q_free_7', 
            question: "'Deadline' म्हणजे...",
            options: [{ id: 'a', text: "काम पूर्ण करण्याची वेळ" }, { id: 'b', text: "एक रेष" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l8',
        title: 'पैसे मिळवणे',
        duration: 10,
        content: [
            { type: 'paragraph', text: "पैसे मिळवण्यासाठी बँक खाते किंवा UPI (Google Pay/PhonePe) वापरा. काम सुरू करण्यापूर्वी पैशांबद्दल स्पष्ट बोला." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "बँक खाते उघडा | UPI आयडी शेअर करा | व्यवहाराची नोंद ठेवा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचा UPI ॲप चालू आहे का ते तपासा." }
        ],
        quiz: {
            id: 'q_free_8', 
            question: "पैसे मिळवण्याचा सुरक्षित मार्ग?",
            options: [{ id: 'a', text: "बँक/UPI" }, { id: 'b', text: "पोस्टाने रोख" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'free_l9',
        title: 'पहिले पाऊल',
        duration: 15,
        content: [
            { type: 'paragraph', text: "विचार करत बसू नका, सुरुवात करा. तुमचे प्रोफाइल बनवा. मित्रांना सांगा की तुम्ही काम शोधत आहात." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "छोटा बायो लिहा | चांगला फोटो काढा | काम शोधायला लागा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "स्वतःबद्दल २ ओळी लिहा ज्या तुम्ही ग्राहकाला पाठवू शकाल." }
        ],
        quiz: {
            id: 'q_free_9', 
            question: "प्रोफाइलसाठी काय आवश्यक आहे?",
            options: [{ id: 'a', text: "फोटो आणि बायो" }, { id: 'b', text: "आवडता रंग" }],
            correctOptionId: 'a'
        }
    }
];

export const moneyLessons: Lesson[] = [
    {
        id: 'mon_l1', 
        title: 'नाणी आणि नोटा', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "आर्थिक साक्षरतेची सुरुवात पैसे ओळखण्यापासून होते. ५०० आणि २००० च्या नोटांवर सुरक्षा धागा आणि वॉटरमार्क तपासा. बनावट नोटांपासून सावध राहा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "५०० ची नोट पहा | सुरक्षा धागा तपासा | गांधीजींचा फोटो तपासा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमच्या पाकिटातील नाणी आणि नोटा तपासा." }
        ],
        quiz: {
            id: 'q_mon_1', 
            question: "५०० रुपयांच्या नोटेचा रंग कोणता?",
            options: [{ id: 'a', text: "स्टोन ग्रे" }, { id: 'b', text: "गुलाबी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l2', 
        title: 'हिशोब आणि सुट्टे पैसे', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "बाजारात फसवणूक टाळण्यासाठी बेरीज आणि वजाबाकी येणे आवश्यक आहे. १०० रुपयांच्या नोटेतून ४० रुपयांचे सामान घेतल्यास किती परत मिळतील, हे तोंडी काढता आले पाहिजे." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "१० + २० जोडा | १०० मधून ४० वजा करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "दूध (३० रु) + ब्रेड (२५ रु) = एकूण किती?" }
        ],
        quiz: {
            id: 'q_mon_2', 
            question: "१०० - ४० = ?",
            options: [{ id: 'a', text: "६०" }, { id: 'b', text: "५०" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l3',
        title: 'गरजा विरुद्ध इच्छा',
        duration: 15,
        content: [
            { type: 'paragraph', text: "बजेट बनवताना महत्त्वाच्या गोष्टींना प्राधान्य द्या. 'गरज' (Need) म्हणजे अन्न, औषधे. 'इच्छा' (Want) म्हणजे सिनेमा, खेळणी. आधी गरजा पूर्ण करा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "गरज: अन्न, भाडे | इच्छा: खेळणी, सिनेमा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "या आठवड्यात घेतलेल्या ३ गोष्टींची यादी करा आणि त्या गरज आहेत की इच्छा ते ठरवा." }
        ],
        quiz: {
            id: 'q_mon_3', 
            question: "औषधे काय आहेत?",
            options: [{ id: 'a', text: "गरज" }, { id: 'b', text: "इच्छा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l4',
        title: 'बचत',
        duration: 10,
        content: [
            { type: 'paragraph', text: "बचत म्हणजे भविष्याची सोय. थोडी थोडी रक्कम बाजूला ठेवा. हे पैसे अडचणीच्या वेळी (Emergency Fund) कामाला येतात." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "एक डबा/गुल्लक करा | रोज सुट्टे पैसे टाका | त्याला हात लावू नका" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "आज १० रुपये सुरक्षित ठिकाणी ठेवा." }
        ],
        quiz: {
            id: 'q_mon_4', 
            question: "बचत कधी मदत करते?",
            options: [{ id: 'a', text: "आणीबाणीच्या वेळी" }, { id: 'b', text: "कधीच नाही" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l5',
        title: 'बँक म्हणजे काय?',
        duration: 10,
        content: [
            { type: 'paragraph', text: "बँक ही पैशाची सुरक्षित जागा आहे. बँक तुम्हाला पैसे ठेवल्याबद्दल 'व्याज' (Interest) देते. पासबुकमुळे तुमच्या पैशाचा हिशोब राहतो." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "बँक पैसे सांभाळते | बँक व्याज देते | पासबुक वापरा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "जवळच्या बँकेला भेट द्या किंवा पासबुक पहा." }
        ],
        quiz: {
            id: 'q_mon_5', 
            question: "बँक काय देते?",
            options: [{ id: 'a', text: "व्याज" }, { id: 'b', text: "मोफत जेवण" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l6',
        title: 'UPI परिचय',
        duration: 15,
        content: [
            { type: 'paragraph', text: "UPI मुळे तुम्ही फोनवरून कोणालाही पैसे पाठवू शकता. PhonePe किंवा Google Pay सारखे ॲप्स तुमच्या बँक खात्याशी जोडलेले असतात." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "UPI ॲप उघडा | बँक लिंक करा | पिन सेट करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचा फोन नंबर बँकेशी लिंक आहे का ते तपासा." }
        ],
        quiz: {
            id: 'q_mon_6', 
            question: "UPI साठी काय लागते?",
            options: [{ id: 'a', text: "इंटरनेट" }, { id: 'b', text: "पोस्ट ऑफिस" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l7',
        title: 'QR स्कॅनिंग',
        duration: 10,
        content: [
            { type: 'paragraph', text: "दुकानात पैसे देण्यासाठी QR कोड स्कॅन करा. स्कॅन केल्यावर दुकानाचे नाव बरोबर आहे का ते तपासा आणि मगच पिन टाका." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "स्कॅनर उघडा | कोड स्कॅन करा | नाव तपासा | रक्कम टाका" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एखाद्या दुकानाचा QR कोड स्कॅन करून पहा (पैसे नका पाठवू, फक्त नाव पहा)." }
        ],
        quiz: {
            id: 'q_mon_7', 
            question: "पिन टाकण्यापूर्वी काय तपासावे?",
            options: [{ id: 'a', text: "नाव" }, { id: 'b', text: "डोळे बंद करा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l8',
        title: 'पिन सुरक्षा',
        duration: 10,
        content: [
            { type: 'paragraph', text: "तुमचा UPI पिन ही तुमची सही आहे. तो कोणालाही सांगू नका. पैसे 'मिळवण्यासाठी' पिन टाकण्याची गरज नसते, फक्त 'पाठवण्यासाठी' लागते." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "पिन लपवून टाका | मित्रांना सांगू नका | कुठेही लिहून ठेवू नका" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमचा पिन पाठ करा, लिहू नका." }
        ],
        quiz: {
            id: 'q_mon_8', 
            question: "पिन कोणाला सांगावा?",
            options: [{ id: 'a', text: "कोणालाही नाही" }, { id: 'b', text: "मित्राला" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'mon_l9',
        title: 'खर्च नोंद',
        duration: 10,
        content: [
            { type: 'paragraph', text: "तुम्ही पैसे कुठे खर्च करता हे लिहून ठेवा. यामुळे अनावश्यक खर्च कमी करता येतो. रोजच्या खर्चाची नोंद करा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "वही घ्या | तारीख, वस्तू आणि रक्कम लिहा | रात्री बेरीज करा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "आजचा खर्च एका वहीत लिहून काढा." }
        ],
        quiz: {
            id: 'q_mon_9', 
            question: "खर्च लिहिल्याने काय होते?",
            options: [{ id: 'a', text: "खर्च नियंत्रणात राहतो" }, { id: 'b', text: "पैसे हरवतात" }],
            correctOptionId: 'a'
        }
    }
];
