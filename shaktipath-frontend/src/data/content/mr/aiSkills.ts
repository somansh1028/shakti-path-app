
import type { Lesson } from '../../../types';

// --- AI BASICS LESSONS ---
export const aiBasicsLessons: Lesson[] = [
    {
        id: 'aib_l1', 
        title: 'फोनवर जादू (AI)', 
        duration: 10,
        content: [
            { type: 'paragraph', text: "आर्टिफिशियल इंटेलिजन्स (AI) ही भविष्यातील जादू नाही, तर आजचे गणित आहे. जेव्हा तुमचा फोन तुमचा चेहरा ओळखून उघडतो (Face Unlock), तेव्हा ते AI आहे. जेव्हा युट्यूब तुम्हाला आवडणारे व्हिडिओ दाखवते, तेव्हा ते AI आहे." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "फेस अनलॉक वापरता? ते AI आहे. | वॉयस सर्च वापरता? ते AI आहे." },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "तुमच्या फोनवर अजून कोणते AI फिचर आहे ते शोधा." }
        ],
        quiz: {
            id: 'q_aib_1', 
            question: "फेस अनलॉक AI आहे का?",
            options: [{ id: 'a', text: "हो" }, { id: 'b', text: "नाही" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'aib_l2', 
        title: 'AI म्हणजे काय?', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "AI म्हणजे असा संगणक जो माणसासारखा विचार करण्याचा प्रयत्न करतो. तो उदाहरणांवरून शिकतो. जर तुम्ही त्याला मांजरीचे हजारो फोटो दाखवले, तर तो नवीन फोटोतील मांजर ओळखू शकतो." },
            { type: 'heading', text: "आता करून पहा" },
            { type: 'checklist', text: "हे सॉफ्टवेअर आहे | हे उदाहरणांवरून शिकते | हे पाहू, ऐकू आणि लिहू शकते" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "मित्राला समजावून सांगा की AI म्हणजे शिकणारा संगणक आहे." }
        ],
        quiz: {
            id: 'q_aib_2', 
            question: "AI काय आहे?",
            options: [{ id: 'a', text: "सॉफ्टवेअर" }, { id: 'b', text: "एक माणूस" }],
            correctOptionId: 'a'
        }
    }
];

// --- PROMPT ENGINEERING LESSONS ---
export const chatPromptingLessons: Lesson[] = [
    {
        id: 'chat_l1', 
        title: 'प्रॉम्प्टिंग १०१', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "AI शी बोलणे म्हणजे 'प्रॉम्प्टिंग'. AI एक हुशार पण आज्ञाधारक मदतनीस आहे. जर तुम्ही म्हणालात 'ईमेल लिही', तर तो साधारण ईमेल लिहील. पण जर तुम्ही म्हणालात 'बॉसला सुट्टीसाठी नम्र ईमेल लिही', तर तो उत्तम लिहील. स्पष्ट सूचना देणे महत्त्वाचे आहे." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "स्पष्ट सूचना द्या | संदर्भ द्या (Context) | उदाहरणे द्या" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "AI ला विचारा: 'पाच वर्षांच्या मुलाला गुरुत्वाकर्षण कसे समजावून सांगशील?'" }
        ],
        quiz: {
            id: 'q_chat_1', 
            question: "चांगला प्रॉम्प्ट कोणता?",
            options: [{ id: 'a', text: "एक लहान ईमेल लिही" }, { id: 'b', text: "काहीतरी लिही" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'chat_l2', 
        title: 'संदर्भ (Context) देणे', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "तुम्ही AI ला एक भूमिका देऊ शकता. त्याला सांगा 'एका शिक्षकाप्रमाणे वाग' किंवा 'एका अनुभवी विक्रेत्याप्रमाणे वाग'. भूमिका दिल्याने AI ची उत्तरे अधिक अचूक आणि उपयुक्त होतात." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "AI ला सांगा: 'तू एक शिक्षक आहेस' | परिस्थिती समजावून सांगा" }
        ],
        quiz: {
            id: 'q_chat_2', 
            question: "संदर्भ दिल्याने AI...",
            options: [{ id: 'a', text: "चांगली उत्तरे देते" }, { id: 'b', text: "वेगाने धावते" }],
            correctOptionId: 'a'
        }
    }
];

// --- AI TOOLS LESSONS ---
export const aiToolsLessons: Lesson[] = [
    {
        id: 'tool_l1', 
        title: 'डॉक्समध्ये AI', 
        duration: 15,
        content: [
            { type: 'paragraph', text: "लेखन आता सोपे झाले आहे. गुगल डॉक्समध्ये 'Help me write' हे फीचर आहे. तुम्ही फक्त मुद्दे लिहा, AI त्याचे पूर्ण पत्र किंवा निबंधात रूपांतर करेल. यामुळे तुमचा वेळ वाचतो." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "'Help me write' वापरा | वाक्ये पुन्हा लिहा (Rephrase)" },
            { type: 'heading', text: "लहान कार्य" },
            { type: 'paragraph', text: "AI चा वापर करून सुट्टीचा अर्ज लिहा." }
        ],
        quiz: {
            id: 'q_tool_1', 
            question: "डॉक्समधील AI कशासाठी मदत करते?",
            options: [{ id: 'a', text: "मजकूर लिहिण्यासाठी" }, { id: 'b', text: "स्वयंपाक करण्यासाठी" }],
            correctOptionId: 'a'
        }
    },
    {
        id: 'tool_l2', 
        title: 'शीट्समध्ये AI', 
        duration: 20,
        content: [
            { type: 'paragraph', text: "स्प्रेडशीटची गणिते (Formulas) लक्षात ठेवणे कठीण असते. आता तुम्ही AI ला विचारू शकता: 'मला एकूण बेरीज करण्यासाठी फॉर्म्युला दे'. AI तुमच्यासाठी कोड लिहील. तुम्ही फक्त डेटावर लक्ष केंद्रित करा." },
            { type: 'heading', text: "कृती करा" },
            { type: 'checklist', text: "AI ला फॉर्म्युला विचारा | डेटा व्यवस्थित करण्यास सांगा" }
        ],
        quiz: {
            id: 'q_tool_2', 
            question: "AI फॉर्म्युला लिहू शकते का?",
            options: [{ id: 'a', text: "हो" }, { id: 'b', text: "नाही" }],
            correctOptionId: 'a'
        }
    }
];
