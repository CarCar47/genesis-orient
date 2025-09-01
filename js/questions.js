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
    },
    {
        id: 6,
        description: "The Leave of Absence policy allows students to request temporary leaves under certain conditions, as detailed in the School Catalog.",
        question: {
            text: "What is the Leave of Absence policy for?",
            choices: [
                "Requesting temporary leaves",
                "Permanent withdrawal",
                "Extra credit requests",
                "Changing majors daily"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! For temporary breaks.",
            feedbackIncorrect: "Incorrect. It's for approved absences."
        }
    },
    {
        id: 7,
        description: "Grading includes Grade Point Average (GPA), Incomplete \"I\" Grade, Withdrawal \"W\" Grade, with a minimum cumulative GPA of 2.0 required for Standards of Academic Progress (SAP).",
        question: {
            text: "What is the minimum GPA for SAP?",
            choices: [
                "2.0",
                "4.0",
                "1.0",
                "3.5"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! 2.0 is required.",
            feedbackIncorrect: "Incorrect. Review: minimum is 2.0."
        }
    },
    {
        id: 8,
        description: "Students must maintain a minimum cumulative Grade Point Average (GPA) of 2.0 and complete at least 67% of attempted clock hours to meet Standards of Academic Progress (SAP).",
        question: {
            text: "What completion rate is needed for SAP?",
            choices: [
                "67% of attempted clock hours",
                "100% attendance",
                "50% GPA",
                "90% errors"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! 67% completion.",
            feedbackIncorrect: "Incorrect. It's 67% of hours."
        }
    },
    {
        id: 9,
        description: "Academic Probation is applied when students fail to meet SAP, with procedures to re-establish progress as per the School Catalog.",
        question: {
            text: "When is Academic Probation applied?",
            choices: [
                "When failing to meet SAP",
                "After perfect attendance",
                "On first day",
                "For high grades"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! For SAP failures.",
            feedbackIncorrect: "Incorrect. It's for not meeting standards."
        }
    },
    {
        id: 10,
        description: "Dismissal may occur for violations of conduct, academic failure, or other policies as outlined in the School Catalog.",
        question: {
            text: "What can lead to Dismissal?",
            choices: [
                "Violations of conduct or academic failure",
                "Perfect scores",
                "Early arrivals",
                "Extra homework"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! For serious violations.",
            feedbackIncorrect: "Incorrect. It's for breaches."
        }
    },
    {
        id: 11,
        description: "Students are expected to adhere to a code of conduct that fosters a professional and respectful learning environment. Prohibited behaviors include violence, threats, drug or alcohol use, academic dishonesty, and unprofessional conduct.",
        question: {
            text: "What does Standards of Conduct prohibit?",
            choices: [
                "Violence, threats, drugs",
                "Studying hard",
                "Helping others",
                "Attending classes"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Prohibits harmful behaviors.",
            feedbackIncorrect: "Incorrect. Focuses on professionalism."
        }
    },
    {
        id: 12,
        description: "Students must maintain honesty in all academic work. Prohibited actions include cheating (e.g., using unauthorized materials during exams), plagiarism (e.g., copying others' work without credit), misrepresentation (e.g., falsifying records), and assisting others in dishonest acts.",
        question: {
            text: "What is prohibited under Academic Integrity?",
            choices: [
                "Cheating, plagiarism, misrepresentation",
                "Taking notes",
                "Group study",
                "Asking questions"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Honesty is required.",
            feedbackIncorrect: "Incorrect. It's about dishonest acts."
        }
    },
    {
        id: 13,
        description: "Genesis Vocational Institute reserves the right to cancel or forfeit any examination if there is evidence or reasonable suspicion of cheating by one or more students in a class. Indicators include disproportionate grade distributions, unusually rapid completion, observed behaviors.",
        question: {
            text: "When can an exam be canceled?",
            choices: [
                "Suspicion of cheating",
                "Perfect weather",
                "Holiday seasons",
                "Student requests"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! For integrity reasons.",
            feedbackIncorrect: "Incorrect. Due to cheating suspicions."
        }
    },
    {
        id: 14,
        description: "If an exam is canceled due to suspected or confirmed cheating, all grades are voided, a replacement exam is administered, and all students must retake it.",
        question: {
            text: "What happens in Retesting Procedure?",
            choices: [
                "Grades voided, new exam for all",
                "Only cheaters retake",
                "Exam canceled forever",
                "Grades doubled"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Ensures fairness.",
            feedbackIncorrect: "Incorrect. All retake after void."
        }
    },
    {
        id: 15,
        description: "Genesis maintains a zero-tolerance policy for violence, threats, or disruptive behavior on campus or during school activities, including clinical externships.",
        question: {
            text: "What is the policy on violence?",
            choices: [
                "Zero-tolerance",
                "Allowed in arguments",
                "Encouraged for defense",
                "Ignored if minor"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! No tolerance.",
            feedbackIncorrect: "Incorrect. Strictly prohibited."
        }
    },
    {
        id: 16,
        description: "The use, possession, distribution, or being under the influence of drugs or alcohol on campus, during clinical rotations, or at school-sponsored events is strictly prohibited.",
        question: {
            text: "What is prohibited on Drug-Free Campus?",
            choices: [
                "Drugs and alcohol use/possession",
                "Drinking water",
                "Eating snacks",
                "Studying late"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Strictly no substances.",
            feedbackIncorrect: "Incorrect. Focuses on drugs/alcohol."
        }
    },
    {
        id: 17,
        description: "Romantic or sexual relationships between students and faculty or staff are strictly prohibited due to the potential for coercion and conflicts of interest.",
        question: {
            text: "Are romantic relationships with faculty allowed?",
            choices: [
                "No, strictly prohibited",
                "Yes, if consensual",
                "Only on weekends",
                "If approved"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Prohibited for conflicts.",
            feedbackIncorrect: "Incorrect. Strictly not allowed."
        }
    },
    {
        id: 18,
        description: "Student records, including grades and disciplinary actions, are maintained confidentially in compliance with the Family Educational Rights and Privacy Act (FERPA).",
        question: {
            text: "What act governs Confidentiality?",
            choices: [
                "FERPA",
                "HIPAA only",
                "No act",
                "School rule only"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! FERPA for records.",
            feedbackIncorrect: "Incorrect. It's FERPA compliance."
        }
    },
    {
        id: 19,
        description: "Genesis Vocational Institute complies with the Americans with Disabilities Act (ADA) and is committed to providing reasonable accommodations for students with documented disabilities, ensuring equal access to education without compromising program standards or patient safety.",
        question: {
            text: "What act does Accommodation comply with?",
            choices: [
                "ADA",
                "FERPA",
                "HIPAA",
                "None"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! ADA for disabilities.",
            feedbackIncorrect: "Incorrect. It's ADA."
        }
    },
    {
        id: 20,
        description: "Genesis Vocational Institute maintains a zero-tolerance policy for bullying and harassment in any form, whether in person, on social media, or in any context related to the school, on or off campus.",
        question: {
            text: "What is the policy on Bullying?",
            choices: [
                "Zero-tolerance",
                "Allowed if joking",
                "Only in class",
                "Ignored online"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! No tolerance anywhere.",
            feedbackIncorrect: "Incorrect. Strictly prohibited."
        }
    },
    {
        id: 21,
        description: "For complaints, first attempt informal resolution, then formal written complaint to Director of Admissions, escalate to School Director if needed. Unresolved? Contact ACCSC or state oversight.",
        question: {
            text: "What is the first step in Complaints?",
            choices: [
                "Informal resolution",
                "Contact ACCSC immediately",
                "Ignore the issue",
                "Post on social media"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Start informally.",
            feedbackIncorrect: "Incorrect. Begin with discussion."
        }
    },
    {
        id: 22,
        description: "Applicants must provide an official picture ID, be at least 17 years and 9 months old, and present a high school diploma, GED, or equivalent. Those without may take the Wonderlic Basic Skills Test.",
        question: {
            text: "What is required for Admissions?",
            choices: [
                "ID, age 17+9 months, diploma or test",
                "No requirements",
                "Only payment",
                "College degree"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Basic qualifications.",
            feedbackIncorrect: "Incorrect. ID, age, education proof."
        }
    },
    {
        id: 23,
        description: "Genesis maintains accurate and confidential student records, including enrollment documents, grades, transcripts, and disciplinary actions, in compliance with the Family Educational Rights and Privacy Act (FERPA).",
        question: {
            text: "How are Student Records handled?",
            choices: [
                "Confidentially under FERPA",
                "Publicly shared",
                "Deleted annually",
                "Only grades kept"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Confidential and accurate.",
            feedbackIncorrect: "Incorrect. FERPA compliance."
        }
    },
    {
        id: 24,
        description: "Graduation requires meeting all program requirements, including GPA, completion rates, and conduct standards as per the School Catalog.",
        question: {
            text: "What is needed for Graduation?",
            choices: [
                "Meet GPA, completion, conduct",
                "Just attend",
                "Pay extra",
                "No requirements"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! All standards met.",
            feedbackIncorrect: "Incorrect. Academic and conduct."
        }
    },
    {
        id: 25,
        description: "Re-Entry Policy allows dismissed or withdrawn students to reapply under certain conditions, as detailed in the School Catalog.",
        question: {
            text: "What does Re-Entry Policy allow?",
            choices: [
                "Reapply after dismissal/withdrawal",
                "Enter without application",
                "Free re-enrollment",
                "No re-entry"
            ],
            correctIndex: 0,
            feedbackCorrect: "Correct! Conditional reapplication.",
            feedbackIncorrect: "Incorrect. For returning students."
        }
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
}

// Make available globally for browser
if (typeof window !== 'undefined') {
    window.questions = questions;
}