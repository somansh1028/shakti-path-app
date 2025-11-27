
import type { Lesson } from '../../../types';

// --- DATA ENTRY LESSONS ---
export const dataEntryLessons: Lesson[] = [
    {
        id: 'data_l1', title: 'स्प्रेडशीट म्हणजे काय?', duration: 10,
        content: [
            { type: 'paragraph', text: "स्प्रेडशीट म्हणजे माहिती साठवण्यासाठी आणि गणिते करण्यासाठी वापरलेले डिजिटल पान. यात चौकटी (Cells) असतात. व्यवसायाचा हिशोब, यादी आणि बजेट बनवण्यासाठी हे सर्वात महत्वाचे साधन आहे." },
            { type: 'heading', text: "तुम्ही काय शिकाल" },
            { type: 'list', text: "चौकटींची रचना | वापर" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "कल्पना करा की तुम्ही दुकानदार आहात. ३ वस्तू आणि त्यांच्या किंमती एका वहीत कशा लिहाल ते पहा." }
        ],
        quiz: {
            id: 'q_data_1', question: "स्प्रेडशीट कशासाठी वापरतात?",
            options: [{ id: 'a', text: "डेटा आणि नंबर" }, { id: 'b', text: "चित्र काढण्यासाठी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l2', title: 'गुगल शीट्स सुरू करणे', duration: 15,
        content: [
            { type: 'paragraph', text: "गुगल शीट्स हे मोफत आणि ऑनलाइन आहे. याचा फायदा म्हणजे तुमची माहिती कधीच हरवत नाही आणि तुम्ही फोनवरूनही काम करू शकता." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "'Google Sheets' ॲप डाउनलोड करा | ॲप उघडा | '+' चिन्हावर दाबून नवीन शीट बनवा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एक नवीन शीट बनवा आणि त्याला 'माझी सराव शीट' नाव द्या." }
        ],
        quiz: {
            id: 'q_data_2', question: "माहिती कशी सेव्ह होते?",
            options: [{ id: 'a', text: "आपोआप (Auto save)" }, { id: 'b', text: "मॅन्युअली" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l3', title: 'ग्रिड समजून घेणे', duration: 15,
        content: [
            { type: 'paragraph', text: "स्प्रेडशीटमध्ये उभे स्तंभ (Columns - A, B, C) आणि आडव्या ओळी (Rows - 1, 2, 3) असतात. जिथे ते भेटतात त्याला 'सेल' (Cell) म्हणतात. प्रत्येक सेलचा एक पत्ता असतो, जसे की A1 किंवा C5." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "कॉलम A शोधा | ओळ 1 शोधा | सेल A1 शोधा" }
        ],
        quiz: {
            id: 'q_data_3', question: "उभ्या रेषेला काय म्हणतात?",
            options: [{ id: 'a', text: "कॉलम" }, { id: 'b', text: "रो" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l4', title: 'डेटा टाइप करणे', duration: 20,
        content: [
            { type: 'paragraph', text: "डेटा एंट्रीमध्ये अचूकता महत्वाची आहे. एका चौकटीवर (Cell) टॅप करा आणि लिहा. तुम्ही शब्द किंवा अंक लिहू शकता. पुढील चौकटीत जाण्यासाठी 'Enter' दाबा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "एका सेलवर टॅप करा | तुमचे नाव लिहा | एंटर दाबा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "सेल A1 मध्ये 'सफरचंद' आणि B1 मध्ये '50' टाइप करा." }
        ],
        quiz: {
            id: 'q_data_4', question: "लिहिलेले बदलण्यासाठी काय करावे?",
            options: [{ id: 'a', text: "डबल टॅप करा" }, { id: 'b', text: "फोन हलवा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'data_l5', title: 'आकार बदलणे (Resizing)', duration: 15,
        content: [
            { type: 'paragraph', text: "कधीकधी शब्द सेलमध्ये मावत नाहीत. अशा वेळी कॉलमची रुंदी वाढवावी लागते. कॉलमच्या नावावर (A, B) टॅप करून कडा ओढून तुम्ही आकार बदलू शकता." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "कॉलमवर टॅप करा | कडा ओढून मोठे करा" }
        ],
        quiz: {
            id: 'q_data_5', question: "जर शब्द कापला गेला असेल तर...",
            options: [{ id: 'a', text: "कॉलम मोठा करा" }, { id: 'b', text: "शब्द खोडून टाका" }],
            correctOptionId: 'a'
        }
    }
];

// --- ONLINE RESEARCH LESSONS ---
export const researchLessons: Lesson[] = [
    {
        id: 'res_l1', title: 'शोधण्याच्या मूलभूत गोष्टी', duration: 10,
        content: [
            { type: 'paragraph', text: "गुगलवर माहिती शोधताना योग्य शब्द (Keywords) वापरणे महत्वाचे आहे. पूर्ण वाक्य लिहिण्याऐवजी फक्त महत्वाचे शब्द लिहा. उदा. 'पुण्यातील स्वस्त हॉटेल्स' (Cheap hotels Pune)." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "कमी शब्द वापरा | अचूक शब्द निवडा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "'best digital marketing course' असे शोधा." }
        ],
        quiz: {
            id: 'q_res_1', question: "चांगल्या शोधासाठी...",
            options: [{ id: 'a', text: "कीवर्ड्स वापरा" }, { id: 'b', text: "निबंध लिहा" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'res_l2', title: 'समानार्थी शब्द (Keywords)', duration: 15,
        content: [
            { type: 'paragraph', text: "जर एका शब्दाने माहिती मिळत नसेल, तर समानार्थी शब्द वापरा. 'Cheap' ऐवजी 'Budget' किंवा 'Affordable' वापरून पहा. वेगवेगळे शब्द वापरल्याने जास्त माहिती मिळते." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "विषयाशी संबंधित ३ शब्द विचार करा | समानार्थी शब्द वापरून शोधा" }
        ],
        quiz: {
            id: 'q_res_2', question: "कीवर्ड्स कशासाठी मदत करतात?",
            options: [{ id: 'a', text: "अचूक माहिती शोधण्यासाठी" }, { id: 'b', text: "ईमेल लिहिण्यासाठी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'res_l3', title: 'माहितीची खात्री करणे', duration: 20,
        content: [
            { type: 'paragraph', text: "इंटरनेटवर सर्वच माहिती खरी नसते. माहितीचा स्रोत तपासा. बातम्यांसाठी नामांकित वेबसाइट्स वापरा. जुन्या बातम्यांवर विश्वास ठेवू नका, तारीख तपासा." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "वेबसाइटचे नाव तपासा | तारीख तपासा" }
        ],
        quiz: {
            id: 'q_res_3', question: "विश्वासार्ह स्रोत कोणता?",
            options: [{ id: 'a', text: "सरकारी वेबसाइट/न्यूज चॅनेल" }, { id: 'b', text: "व्हॉट्सॲप फॉरवर्ड" }],
            correctOptionId: 'a'
        }
    }
];

// --- ADMIN SUPPORT LESSONS ---
export const adminLessons: Lesson[] = [
    {
        id: 'admin_l1', title: 'ईमेल शिष्टाचार', duration: 15,
        content: [
            { type: 'paragraph', text: "व्यावसायिक ईमेल लिहिताना स्पष्ट विषय (Subject Line) लिहा. सुरुवात 'Respected Sir/Ma'am' किंवा 'Hello' ने करा. शेवटी 'Regards' किंवा 'Thank you' लिहा." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "स्पष्ट विषय लिहा | विनम्र भाषा वापरा | स्पेलिंग तपासा" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "एका क्लायंटला पाठवण्यासाठी एक छोटा प्रोफेशनल ईमेल लिहा." }
        ],
        quiz: {
            id: 'q_admin_1', question: "विषय (Subject) कसा असावा?",
            options: [{ id: 'a', text: "स्पष्ट आणि थोडक्यात" }, { id: 'b', text: "रिकामी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'admin_l2', title: 'कॅलेंडर आणि मीटिंग', duration: 20,
        content: [
            { type: 'paragraph', text: "ॲडमिन म्हणून क्लायंटचा वेळ वाचवणे तुमचे काम आहे. मीटिंग ठरवताना स्पष्ट वेळ आणि तारीख द्या. गुगल कॅलेंडर वापरून 'Invite' पाठवा म्हणजे सर्वांना आठवण राहील." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "इव्हेंट तयार करा | लोकांना जोडा | रिमाइंडर सेट करा" }
        ],
        quiz: {
            id: 'q_admin_2', question: "लोकांना मीटिंगला बोलावण्यासाठी...",
            options: [{ id: 'a', text: "Add guests वापरा" }, { id: 'b', text: "मोठ्याने ओरडा" }],
            correctOptionId: 'a'
        }
    }
];
