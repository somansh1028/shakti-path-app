
import type { Lesson } from '../../../types';

export const contentWritingLessons: Lesson[] = [
    {
        id: 'cw_l1',
        title: 'कंटेंट रायटिंग म्हणजे काय?',
        duration: 10,
        content: [
            { type: 'paragraph', text: "कंटेंट रायटिंग म्हणजे शाळेतील निबंध नव्हे. शाळेत आपण गुणांसाठी लिहितो. येथे आपण व्यवसाय वाढवण्यासाठी किंवा माहिती देण्यासाठी लिहितो. हे सोपे, स्पष्ट आणि वाचकाला उपयोगी असावे." },
            { type: 'video', text: "Zp_RWLJe5zY" },           
            { type: 'heading', text: "मुख्य फरक" },
            { type: 'list', text: "शाळा: 'सफरचंद खाण्याचे पौष्टिक फायदे.' (कठीण) | कंटेंट: 'रोज एक सफरचंद खा, डॉक्टरकडे जाणे टाळा.' (संवादात्मक)" },
            { type: 'heading', text: "लहान कार्य (Mini Task)" },
            { type: 'paragraph', text: "तुमच्या आवडत्या वडापाव किंवा मिसळच्या दुकानाबद्दल ३ ओळी लिहा. कठीण शब्द वापरू नका. मित्राला सांगताय तसे लिहा." }
        ],
        quiz: {
            id: 'q_cw_1',
            question: "कंटेंट रायटिंगचा उद्देश काय असतो?",
            options: [{ id: 'a', text: "शिक्षकाला खुश करणे" }, { id: 'b', text: "माहिती देणे किंवा विक्री करणे" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l2',
        title: 'सोपेपणा हाच नियम (K.I.S.S.)',
        duration: 15,
        content: [
            { type: 'paragraph', text: "इंटरनेटवर लोकांना घाई असते. ते वाचत नाहीत, फक्त नजर फिरवतात. जर तुमची वाक्ये मोठी असतील तर ते सोडून जातील. K.I.S.S. नियम वापरा: Keep It Simple, Stupid. सोपे शब्द वापरा." },
            { type: 'video', text: "kUWTHt6fNOo" },
            { type: 'heading', text: "उदाहरण" },
            { type: 'paragraph', text: "कठीण: 'आम्ही उत्तम दर्जाच्या खाद्यपदार्थांची सुविधा पुरवतो.' -> सोपे: 'आम्ही उत्तम जेवण देतो.'" },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "एक मोठे वाक्य घ्या | नको असलेले शब्द काढा | ते छोटे करा" }
        ],
        quiz: {
            id: 'q_cw_2',
            question: "वेबसाइटसाठी कोणते वाक्य चांगले आहे?",
            options: [{ id: 'a', text: "आमच्या उत्पादनांचा लाभ घ्या." }, { id: 'b', text: "आताच खरेदी करा." }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l3',
        title: 'हेडलाईन्स आणि हुक',
        duration: 20,
        content: [
            { type: 'paragraph', text: "८०% लोक फक्त हेडलाईन (मथळा) वाचतात. जर हेडलाईन बोरिंग असेल, तर कोणीही वाचणार नाही. 'हुक' (Hook) त्यांना थांबवतो. प्रश्न विचारा किंवा आकड्यांचा वापर करा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'चहा बनवणे' यावर ३ हेडलाईन्स लिहा | एकामध्ये आकडा वापरा (५ पद्धती...) | एक प्रश्न विचारा (तुम्ही ही चूक करताय का?)" },
            { type: 'paragraph', text: "उदाहरण: 'चहा बनवण्याची पद्धत' (बोरिंग) vs 'परफेक्ट चहाची सिक्रेट रेसिपी' (उत्तम)." }
        ],
        quiz: {
            id: 'q_cw_3',
            question: "हेडलाईनचे काम काय आहे?",
            options: [{ id: 'a', text: "सर्व माहिती देणे" }, { id: 'b', text: "वाचकाला क्लिक करायला लावणे" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l4',
        title: 'सोशल मीडिया कॅप्शन',
        duration: 15,
        content: [
            { type: 'paragraph', text: "इंस्टाग्राम किंवा फेसबुकवर तुम्ही 'भावना' विकता. कॅप्शनचे ३ भाग करा: १. हुक (पहिली ओळ आकर्षक), २. स्टोरी (फायदा/गोष्ट), ३. CTA (Call to Action - पुढे काय करायचे)." },
            { type: 'video', text: "fC9sbrN33To" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका साडीच्या फोटोसाठी कॅप्शन लिहा. हुक: 'सेकंदात सुंदर दिसा.' CTA: 'किंमत विचारण्यासाठी मेसेज करा.'" }
        ],
        quiz: {
            id: 'q_cw_4',
            question: "CTA म्हणजे काय?",
            options: [{ id: 'a', text: "Call To Action (कृती करा)" }, { id: 'b', text: "Call The Aunt" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cw_l5',
        title: 'ब्लॉग लेखन (Formatting)',
        duration: 20,
        content: [
            { type: 'paragraph', text: "मोठे लेख लिहिताना रचना (Structure) महत्वाची आहे. हेडिंग्स (H1, H2) वापरा. बुलेट पॉइंट्स वापरा. परिच्छेद (Paragraph) लहान ठेवा (२-३ ओळी). कोणालाही लांबलचक मजकूर वाचायला आवडत नाही." },
            { type: 'video', text: "t29PYnr0le" },
            { type: 'video', text: "Qf-lW5AnTVU" },
            { type: 'video', text: "-SeN8HdroDE" },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "'योग करण्याचे ५ फायदे' यावर आराखडा बनवा | H1 (शीर्षक) लिहा | ५ H2 उप-शीर्षके लिहा" }
        ],
        quiz: {
            id: 'q_cw_5',
            question: "मोठे परिच्छेद (Paragraphs)...",
            options: [{ id: 'a', text: "वेबसाइटसाठी चांगले असतात" }, { id: 'b', text: "फोनवर वाचायला कठीण असतात" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l6',
        title: 'एडिटिंगची कला',
        duration: 15,
        content: [
            { type: 'paragraph', text: "तुमचा पहिला ड्राफ्ट नेहमीच खराब असतो. लिहिणे म्हणजे तयार करणे; एडिटिंग म्हणजे स्वच्छ करणे. तुमचे लिखाण मोठ्याने वाचा. जिथे तुम्ही अडखळाल, तिथे वाचकही अडखळेल. ते दुरुस्त करा." },
            { type: 'video', text: "mqEAg7ndtng" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "जुना मेसेज किंवा ईमेल घ्या. तो ५०% छोटा आणि स्पष्ट करा." }
        ],
        quiz: {
            id: 'q_cw_6',
            question: "चुका शोधण्याचा सर्वोत्तम मार्ग?",
            options: [{ id: 'a', text: "मोठ्याने वाचणे" }, { id: 'b', text: "वेगाने वाचणे" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'cw_l7',
        title: 'AI सोबत लेखन',
        duration: 15,
        content: [
            { type: 'paragraph', text: "AI (जसे ChatGPT) तुमचा असिस्टंट आहे. कल्पना सुचवण्यासाठी त्याचा वापर करा (उदा. 'साडीबद्दल ५ ब्लॉग कल्पना दे'). जसेच्या तसे कॉपी करू नका; त्यात तुमचा मानवी स्पर्श आणि स्थानिक उदाहरणे टाका." },
            { type: 'video', text: "h9y2AJG64jg" },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "AI कडून ५ कल्पना घ्या | एक निवडा | पहिली ओळ स्वतः लिहा" }
        ],
        quiz: {
            id: 'q_cw_7',
            question: "AI चा वापर कशासाठी करावा?",
            options: [{ id: 'a', text: "सर्व काम करण्यासाठी" }, { id: 'b', text: "मदत आणि कल्पनांसाठी" }],
            correctOptionId: 'b'
        }
    },
    {
        id: 'cw_l8',
        title: 'पोर्टफोलिओ आणि काम',
        duration: 15,
        content: [
            { type: 'paragraph', text: "क्लायंटला डिग्री नको असते, त्यांना नमुने (Samples) हवे असतात. खऱ्या कामाची वाट पाहू नका. काल्पनिक ब्रँड्ससाठी ५ लेख/पोस्ट लिहा. ते Google Drive मध्ये ठेवा. हाच तुमचा पोर्टफोलिओ." },
            { type: 'video', text: "LjGsFfVk-Jk" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "स्वतःसाठी 'Service Description' लिहा. उदा. 'मी छोट्या व्यवसायांसाठी आकर्षक इंस्टाग्राम पोस्ट लिहिते. ५०० रुपयांत १० पोस्ट.'" }
        ],
        quiz: {
            id: 'q_cw_8',
            question: "पोर्टफोलिओ काय दाखवतो?",
            options: [{ id: 'a', text: "तुमचे वय" }, { id: 'b', text: "तुमच्या कामाचे नमुने" }],
            correctOptionId: 'b'
        }
    }
];
