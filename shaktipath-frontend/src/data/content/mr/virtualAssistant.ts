
import type { Lesson } from '../../../types';

// --- COURSE 1: ESSENTIAL OFFICE TOOLS (Marathi) ---
export const dataEntryLessons: Lesson[] = [
    {
        id: 'va_c1_l1', title: 'गुगल डॉक्स मास्टरी', duration: 15,
        content: [
            { type: 'paragraph', text: "व्हर्च्युअल असिस्टंट म्हणून तुम्हाला पत्रे आणि अहवाल लिहावे लागतील. गुगल डॉक्स मोफत आहे आणि फोनवर चालते. मजकूर सजवणे (Format), हेडिंग देणे आणि PDF म्हणून सेव्ह करणे शिका." },
            { type: 'video', text: "H-rPbF1HLhs" }, // Marathi Tech: Google Docs Mobile (Marathi)
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "गुगल डॉक्स उघडा | १ पानाचे पत्र टाइप करा | टायटल 'Bold' करा | PDF म्हणून डाउनलोड करा" }
        ],
        quiz: {
            id: 'q_va_c1_1', question: "प्रोफेशनल डॉक्युमेंट पाठवण्यासाठी ते कसे सेव्ह करावे?",
            options: [{ id: 'a', text: "PDF" }, { id: 'b', text: "स्क्रीनशॉट" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l2', title: 'स्प्रेडशीटची ओळख (Excel/Sheets)', duration: 20,
        content: [
            { type: 'paragraph', text: "प्रत्येक व्यवसायात डेटा असतो. रो (Rows), कॉलम (Columns) आणि सेल (Cells) म्हणजे काय ते शिका. हा व्हिडिओ एक्सेल शून्यापासून शिकवतो." },
            { type: 'video', text: "w9Lo7wh2jI0" }, // Marathi Tech: Excel Mobile (Marathi)
            { type: 'heading', text: "महत्वाचे शब्द" },
            { type: 'list', text: "Row (आडवी ओळ) | Column (उभी ओळ) | Cell (चौकट)" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "३ कॉलम बनवा: तारीख, वस्तू, किंमत." }
        ],
        quiz: {
            id: 'q_va_c1_2', question: "एक्सेलमध्ये उभ्या रेषेला काय म्हणतात?",
            options: [{ id: 'a', text: "कॉलम (Column)" }, { id: 'b', text: "रो (Row)" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l3', title: 'बेसिक फॉर्म्युला (बेरीज)', duration: 20,
        content: [
            { type: 'paragraph', text: "कॅल्क्युलेटर वापरू नका. एक्सेलला गणित करू द्या. =SUM() (बेरीज) आणि =AVERAGE() (सरासरी) शिका." },
            { type: 'video', text: "ZkQ4rV4y6T0" }, // Hindi Fallback (Clear demo)
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "५ किंमती टाका | =SUM(cells निवडा) टाइप करा | एंटर दाबा" }
        ],
        quiz: {
            id: 'q_va_c1_3', question: "प्रत्येक फॉर्म्युला कशाने सुरू होतो?",
            options: [{ id: 'a', text: "=" }, { id: 'b', text: "#" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l4', title: 'डेटा क्लीनिंग', duration: 15,
        content: [
            { type: 'paragraph', text: "क्लायंट अनेकदा अस्ताव्यस्त डेटा देतात. डुप्लिकेट काढणे, स्पेलिंग सुधारणे आणि यादी A-Z लावणे (Sort) शिका." },
            { type: 'video', text: "O2G7k_l7yVk" }, // Hindi Fallback
            { type: 'heading', text: "कृती" },
            { type: 'checklist', text: "डेटा निवडा | Data > Remove Duplicates करा | Data > Sort A-Z करा" }
        ],
        quiz: {
            id: 'q_va_c1_4', question: "जर एक नाव दोनदा आले तर काय करावे?",
            options: [{ id: 'a', text: "Remove Duplicate" }, { id: 'b', text: "सगळे डिलीट करा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l5', title: 'गुगल फॉर्म्स (सर्व्हे)', duration: 15,
        content: [
            { type: 'paragraph', text: "ग्राहकांकडून माहिती गोळा करण्यासाठी गुगल फॉर्म्स उत्तम आहे. फीडबॅक फॉर्म बनवायला शिका." },
            { type: 'video', text: "fK8O_1aEl9o" }, // Hindi Fallback
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एक फॉर्म बनवा: नाव, ईमेल आणि 'तुम्ही आनंदी आहात का?'" }
        ],
        quiz: {
            id: 'q_va_c1_5', question: "गुगल फॉर्मची उत्तरे कुठे जमा होतात?",
            options: [{ id: 'a', text: "गुगल शीट्समध्ये" }, { id: 'b', text: "व्हॉट्सॲपवर" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l6', title: 'PDF टूल्स', duration: 10,
        content: [
            { type: 'paragraph', text: "कधीकधी ३ PDF एकत्र कराव्या लागतात किंवा PDF ची साईज कमी करावी लागते. IlovePDF सारखी मोफत टूल्स वापरा." },
            { type: 'video', text: "PZgQ_6qD9NM" }, // Hindi Fallback
            { type: 'heading', text: "टूल्स" },
            { type: 'list', text: "Merge (एकत्र करणे) | Compress (लहान करणे) | Split (वेगळे करणे)" }
        ],
        quiz: {
            id: 'q_va_c1_6', question: "फाइल्स एकत्र करण्यासाठी काय वापरावे?",
            options: [{ id: 'a', text: "Merge" }, { id: 'b', text: "Split" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c1_l7', title: 'प्रेझेंटेशन (PPT) बेसिक्स', duration: 20,
        content: [
            { type: 'paragraph', text: "स्लाइड्स बनवणे सोपे आहे. फोटो आणि बुलेट पॉइंट्स वापरून ५-स्लाइडचे साधे प्रेझेंटेशन बनवा." },
            { type: 'video', text: "NtRk7_Qj1h0" }, // Hindi Fallback
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "'माझे आवडते जेवण' यावर एक स्लाइड बनवा." }
        ],
        quiz: {
            id: 'q_va_c1_7', question: "प्रेझेंटेशनमध्ये काय असते?",
            options: [{ id: 'a', text: "स्लाइड्स (Slides)" }, { id: 'b', text: "शीट्स" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 2: ADMIN SUPPORT (Marathi) ---
export const adminLessons: Lesson[] = [
    {
        id: 'va_c2_l1', title: 'जीमेल आणि इनबॉक्स', duration: 15,
        content: [
            { type: 'paragraph', text: "VA ला क्लायंटचे ईमेल सांभाळावे लागतात. महत्वाच्या ईमेलला 'Star' करणे आणि फालतू ईमेल डिलीट करणे शिका." },
            { type: 'video', text: "x_Ah3NrPcu8" }, // Marathi Tech: Gmail
            { type: 'heading', text: "तंत्र" },
            { type: 'list', text: "Labels (फोल्डरसारखे) | Filters (आपोआप सॉर्ट करणे)" }
        ],
        quiz: {
            id: 'q_va_c2_1', question: "ईमेल व्यवस्थित करण्यासाठी काय वापरावे?",
            options: [{ id: 'a', text: "Labels" }, { id: 'b', text: "Delete All" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l2', title: 'प्रोफेशनल ईमेल लेखन', duration: 12,
        content: [
            { type: 'paragraph', text: "विषय (Subject Line) लिहिल्याशिवाय ईमेल पाठवू नका. आदरार्थी शब्द (Respected Sir/Madam) वापरा." },
            { type: 'video', text: "Eq3C_pGjI18" }, // Hindi Fallback
            { type: 'checklist', text: "स्पष्ट विषय | अभिवादन | मुख्य भाग | धन्यवाद | सही" }
        ],
        quiz: {
            id: 'q_va_c2_2', question: "कामाच्या ईमेलच्या शेवटी काय लिहावे?",
            options: [{ id: 'a', text: "Regards" }, { id: 'b', text: "Bye" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l3', title: 'कॅलेंडर आणि मिटिंग', duration: 20,
        content: [
            { type: 'paragraph', text: "क्लायंटच्या वेळा सांभाळा. गुगल कॅलेंडर वापरून 'Invite' पाठवा ज्यामध्ये Zoom/Google Meet ची लिंक असेल." },
            { type: 'video', text: "mG14Q-U5F3Q" }, // Hindi Fallback
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "शुक्रवारी ४ वाजता 'साप्ताहिक मिटिंग' साठी एक इन्व्हाईट तयार करा." }
        ],
        quiz: {
            id: 'q_va_c2_3', question: "इन्व्हाईट पाठवण्यासाठी काय लागते?",
            options: [{ id: 'a', text: "ईमेल आयडी" }, { id: 'b', text: "घरचा पत्ता" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l4', title: 'मिटिंग नोट्स (Minutes)', duration: 15,
        content: [
            { type: 'paragraph', text: "मिटिंगमध्ये सर्व काही लिहू नका. फक्त 'निर्णय' (Decisions) आणि 'पुढील कामे' (Action Items) लिहा." },
            { type: 'video', text: "Xy_7_yQ_XvM" }, // Hindi Fallback
            { type: 'heading', text: "टेम्पलेट" },
            { type: 'list', text: "कोण हजर होते | काय चर्चा झाली | काय निर्णय झाला | पुढे कोण काय करणार" }
        ],
        quiz: {
            id: 'q_va_c2_4', question: "मिनिट्स (Minutes) म्हणजे...",
            options: [{ id: 'a', text: "मिटिंगचा सारांश" }, { id: 'b', text: "मिटिंगची वेळ" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l5', title: 'फाइल ऑर्गनायझेशन (Drive)', duration: 15,
        content: [
            { type: 'paragraph', text: "फाइल कधीच हरवू देऊ नका. फोल्डर रचना वापरा: वर्ष > क्लायंट > प्रोजेक्ट. फाइल्सना स्पष्ट नावे द्या (उदा. 2024_Bill.pdf)." },
            { type: 'video', text: "AcoNlNBtTlQ" }, // Marathi Tech: Drive
            { type: 'heading', text: "कृती" },
            { type: 'checklist', text: "'Clients' फोल्डर बनवा | त्यात २ क्लायंटसाठी उप-फोल्डर बनवा" }
        ],
        quiz: {
            id: 'q_va_c2_5', question: "फाइलचे नाव कसे असावे?",
            options: [{ id: 'a', text: "स्पष्ट (Bill_Dec2024.pdf)" }, { id: 'b', text: "अस्पष्ट (File1.pdf)" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c2_l6', title: 'प्रवास नियोजन (Travel)', duration: 15,
        content: [
            { type: 'paragraph', text: "क्लायंटसाठी तिकीट शोधणे. MakeMyTrip किंवा Google Flights वर किंमती तपासा आणि एक PDF अहवाल द्या." },
            { type: 'video', text: "r4v2sZ3a2oU" }, // Hindi Fallback
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "मुंबई ते दिल्ली ३ फ्लाईट्स शोधा आणि त्यांच्या किंमती लिहा." }
        ],
        quiz: {
            id: 'q_va_c2_6', question: "इटिनररी (Itinerary) म्हणजे...",
            options: [{ id: 'a', text: "प्रवासाचा प्लॅन" }, { id: 'b', text: "जेवणाची रेसिपी" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 3: RESEARCH (Marathi) ---
export const researchLessons: Lesson[] = [
    {
        id: 'va_c3_l1', title: 'गुगल सर्च ट्रिक्स', duration: 12,
        content: [
            { type: 'paragraph', text: "हुशारीने शोधा. नेमक्या शब्दांसाठी अवतरण चिन्ह \"\" वापरा. नको असलेले शब्द वगळण्यासाठी वजा चिन्ह (-) वापरा." },
            { type: 'video', text: "H4t1v6y_z3c" }, // Hindi Fallback
            { type: 'list', text: "उदा. \"Best Laptop\" -gaming (गेमिंग सोडून लॅपटॉप शोधेल)" }
        ],
        quiz: {
            id: 'q_va_c3_1', question: "शब्द वगळण्यासाठी काय वापरावे?",
            options: [{ id: 'a', text: "वजा चिन्ह (-)" }, { id: 'b', text: "अधिक चिन्ह (+)" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c3_l2', title: 'लीड जनरेशन (ईमेल शोधणे)', duration: 20,
        content: [
            { type: 'paragraph', text: "क्लायंटला व्यवसायांची यादी हवी असते. LinkedIn किंवा 'About Us' पेजवरून लोकांचे ईमेल शोधायला शिका." },
            { type: 'video', text: "O2G7k_l7yVk" }, // Hindi Fallback
            { type: 'heading', text: "प्रक्रिया" },
            { type: 'list', text: "गुगलवर कंपनी शोधा | वेबसाइटवर 'Contact' पहा | LinkedIn तपासा" }
        ],
        quiz: {
            id: 'q_va_c3_2', question: "प्रोफेशनल माहिती कुठे मिळेल?",
            options: [{ id: 'a', text: "LinkedIn" }, { id: 'b', text: "TikTok" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c3_l3', title: 'माहितीची सत्यता तपासणे', duration: 10,
        content: [
            { type: 'paragraph', text: "खोट्या बातम्या देऊ नका. बातमीची तारीख आणि वेबसाइटचे नाव तपासा. जुन्या बातम्यांवर विश्वास ठेवू नका." },
            { type: 'heading', text: "नियम" },
            { type: 'list', text: "तारीख पहा | सरकारी वेबसाइट (.gov) आहे का पहा | २ ठिकाणी तपासा" }
        ],
        quiz: {
            id: 'q_va_c3_3', question: "५ वर्षे जुनी बातमी...",
            options: [{ id: 'a', text: "तपासावी लागते" }, { id: 'b', text: "तशीच वापरावी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c3_l4', title: 'स्पर्धक विश्लेषण (Competitor)', duration: 15,
        content: [
            { type: 'paragraph', text: "क्लायंटला त्यांच्या स्पर्धकाबद्दल माहिती हवी असते. त्यांच्या वेबसाइटवर जा, किंमती आणि ऑफर्स पहा." },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमच्या शहरातील २ पिझ्झा दुकानांच्या किंमतींची तुलना करा." }
        ],
        quiz: {
            id: 'q_va_c3_4', question: "स्पर्धक विश्लेषण कशासाठी?",
            options: [{ id: 'a', text: "मार्केट समजण्यासाठी" }, { id: 'b', text: "वेबसाइट हॅक करण्यासाठी" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 4: CLIENT MANAGEMENT (Marathi) ---
export const adminLessons_c4: Lesson[] = [
    {
        id: 'va_c4_l1', title: 'सकारात्मक दृष्टिकोन (Attitude)', duration: 10,
        content: [
            { type: 'paragraph', text: "आदेशाची वाट पाहू नका. उपाय सुचवा. जर क्लायंट म्हणाला 'फ्लाइट बुक कर', तर विचारा 'हॉटेल सुद्धा हवे आहे का?'. याला 'Proactive' म्हणतात." },
            { type: 'video', text: "uG2aEh5kBvo" }, // Motivational
            { type: 'heading', text: "फरक" },
            { type: 'paragraph', text: "Reactive: वाट पाहणारा. Proactive: आधीच तयारी करणारा." }
        ],
        quiz: {
            id: 'q_va_c4_1', question: "जर क्लायंटची चूक दिसली तर...",
            options: [{ id: 'a', text: "नम्रपणे सांगा" }, { id: 'b', text: "दुर्लक्ष करा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c4_l2', title: 'गोपनीयता आणि पासवर्ड', duration: 12,
        content: [
            { type: 'paragraph', text: "क्लायंटची माहिती कधीही शेअर करू नका. पासवर्ड व्हॉट्सॲपवर पाठवू नका. LastPass सारखे सुरक्षित ॲप वापरा." },
            { type: 'heading', text: "नियम" },
            { type: 'list', text: "पासवर्ड मॅनेजर वापरा | सार्वजनिक वायफायवर बँकिंग करू नका" }
        ],
        quiz: {
            id: 'q_va_c4_2', question: "क्लायंटचा डेटा मित्राला देणे...",
            options: [{ id: 'a', text: "चुकीचे आहे" }, { id: 'b', text: "चांगले आहे" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c4_l3', title: 'फीडबॅक स्वीकारणे', duration: 15,
        content: [
            { type: 'paragraph', text: "जर क्लायंट रागावला, तर दुखी होऊ नका. म्हणा 'धन्यवाद, मी हे लगेच दुरुस्त करते'. चुकांमधूनच आपण शिकतो." },
            { type: 'heading', text: "रिप्लाय" },
            { type: 'paragraph', text: "'फीडबॅकसाठी धन्यवाद. मी चूक सुधारली आहे. नवीन फाइल पाठवत आहे.'" }
        ],
        quiz: {
            id: 'q_va_c4_3', question: "फीडबॅक म्हणजे...",
            options: [{ id: 'a', text: "सुधारण्याची संधी" }, { id: 'b', text: "अपमान" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c4_l4', title: 'इन्व्हॉइस (बिल) बनवणे', duration: 15,
        content: [
            { type: 'paragraph', text: "कामाचे पैसे मागायला शिका. तुमचे नाव, UPI आयडी आणि कामाची यादी असलेले एक साधे PDF बिल (Invoice) बनवा." },
            { type: 'video', text: "tSj-s8q_2sM" }, // Hindi Fallback
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "५०० रुपयांचे एक नमुना बिल तयार करा." }
        ],
        quiz: {
            id: 'q_va_c4_4', question: "बिल नेहमी कसे पाठवावे?",
            options: [{ id: 'a', text: "PDF म्हणून" }, { id: 'b', text: "एडिट करता येणाऱ्या फाइलमध्ये" }],
            correctOptionId: 'a'
        }
    }
];

// --- COURSE 5: AI VA (Marathi) ---
export const adminLessons_c5: Lesson[] = [
    {
        id: 'va_c5_l1', title: 'AI ने ईमेल लिहा', duration: 15,
        content: [
            { type: 'paragraph', text: "ChatGPT किंवा Gemini वापरून ईमेल वेगाने लिहा. प्रॉम्प्ट: 'एका क्लायंटला पेमेंटसाठी नम्र ईमेल लिही'." },
            { type: 'video', text: "sTeoJ_O0K7o" }, // Satish K: AI
            { type: 'heading', text: "कृती" },
            { type: 'checklist', text: "AI चॅट उघडा | 'रजेचा अर्ज' लिहायला सांगा | त्यात स्वतःचे बदल करा" }
        ],
        quiz: {
            id: 'q_va_c5_1', question: "AI ने लिहिल्यावर काय करावे?",
            options: [{ id: 'a', text: "वाचा आणि तपासा" }, { id: 'b', text: "लगेच पाठवा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c5_l2', title: 'मोठे मजकूर छोटे करणे (Summarize)', duration: 10,
        content: [
            { type: 'paragraph', text: "क्लायंटने १० पानांचा रिपोर्ट दिला? AI ला सांगा 'याचा ५ ओळीत सारांश दे'. तुमचा वाचण्याचा वेळ वाचेल." },
            { type: 'heading', text: "कृती" },
            { type: 'paragraph', text: "एका बातमीचा सारांश AI कडून काढून घ्या." }
        ],
        quiz: {
            id: 'q_va_c5_2', question: "AI कशासाठी मदत करते?",
            options: [{ id: 'a', text: "वेळ वाचवण्यासाठी" }, { id: 'b', text: "जास्त झोपण्यासाठी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'va_c5_l3', title: 'इंग्रजी सुधारणे (Grammar)', duration: 10,
        content: [
            { type: 'paragraph', text: "इंग्रजीची भीती वाटते? तुमचे तुटके-फुटके वाक्य AI ला द्या आणि म्हणा 'Fix grammar'. तो उत्तम शिक्षक आहे." },
            { type: 'heading', text: "उदाहरण" },
            { type: 'paragraph', text: "Input: 'I go market yesterday.' -> AI: 'I went to the market yesterday.'" }
        ],
        quiz: {
            id: 'q_va_c5_3', question: "AI काय दुरुस्त करू शकते?",
            options: [{ id: 'a', text: "व्याकरण (Grammar)" }, { id: 'b', text: "तुटलेला फोन" }],
            correctOptionId: 'a'
        }
    }
];

// Helper mapping to export as expected by the new structure
export const mr_res = researchLessons;
export const mr_admin = adminLessons.concat(adminLessons_c4).concat(adminLessons_c5);
// dataEntryLessons is already exported above
