// Questions data for Genesis Vocational Institute Orientation Quiz
// All content derived from the student handbook and school policies

const questions = [
    {
        id: 1,
        description: "Genesis Vocational Institute is dedicated to providing lifelong learning opportunities by offering career-focused education that prepares students for entry-level positions in high-demand healthcare professions. We strive to foster personal and professional growth, ensuring student satisfaction and contributing to the economic and social well-being of our diverse, predominantly Hispanic community.",
        question: {
            text: "What is the main focus of Genesis Vocational Institute's mission?",
            choices: [
                "Providing lifelong learning in healthcare professions",
                "Offering advanced degrees in business", 
                "Focusing on arts and humanities",
                "Teaching only theoretical knowledge"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! The mission emphasizes career-focused education in healthcare.",
            feedbackIncorrect: "Incorrect. Review the mission: it's about lifelong learning in healthcare professions."
        }
    },
    {
        id: 2,
        description: "This handbook outlines the programs offered, key policies, and expectations for students to ensure a productive and professional learning environment. It is designed to help you navigate your educational journey at Genesis while aligning with our institutional goals of excellence in education, student support, and career preparation.",
        question: {
            text: "What is the primary purpose of the Student Handbook?",
            choices: [
                "To outline programs, policies, and expectations",
                "To provide recipes for healthy meals",
                "To list local entertainment options", 
                "To sell school merchandise"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! It guides students through policies and expectations.",
            feedbackIncorrect: "Incorrect. The handbook is for navigating education and policies."
        }
    },
    {
        id: 3,
        description: "Genesis Vocational Institute maintains a Non-Discrimination Policy as outlined in the School Catalog, ensuring equal opportunities for all students regardless of race, gender, religion, disability, or other characteristics.",
        question: {
            text: "What does the Non-Discrimination Policy ensure?",
            choices: [
                "Equal opportunities for all students",
                "Free meals for everyone",
                "Unlimited vacation days",
                "Personal tutors for each student"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! It promotes equality.",
            feedbackIncorrect: "Incorrect. It focuses on equal opportunities."
        }
    },
    {
        id: 4,
        description: "Students have rights and responsibilities as detailed in the School Catalog, including the right to a safe learning environment and the responsibility to uphold academic integrity and conduct standards.",
        question: {
            text: "What do Student Rights & Responsibilities include?",
            choices: [
                "Right to a safe environment and responsibility for integrity",
                "Right to skip classes without penalty",
                "Responsibility to pay extra fees",
                "Right to unlimited resources"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Balances rights with duties.",
            feedbackIncorrect: "Incorrect. Focuses on safety and integrity."
        }
    },
    {
        id: 5,
        description: "Attendance policy as per the School Catalog requires regular attendance, with procedures for make-up work and tardiness to ensure academic progress.",
        question: {
            text: "What does the Attendance policy require?",
            choices: [
                "Regular attendance and make-up procedures",
                "Attendance only on Mondays",
                "No attendance tracking", 
                "Attendance via email only"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Regular attendance is key.",
            feedbackIncorrect: "Incorrect. It mandates regular presence."
        }
    }
];

// Export questions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}

// Make available globally for browser usage
if (typeof window !== 'undefined') {
    window.questions = questions;
}