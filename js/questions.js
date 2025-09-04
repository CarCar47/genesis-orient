// Questions data for Genesis Vocational Institute Orientation Quiz
// All content derived from the student handbook and school policies

const questions = [
    {
        id: 1,
        description: {
            en: "Genesis Vocational Institute is dedicated to providing lifelong learning opportunities by offering career-focused education that prepares students for entry-level positions in high-demand healthcare professions. We strive to foster personal and professional growth, ensuring student satisfaction and contributing to the economic and social well-being of our diverse, predominantly Hispanic community.",
            es: "Genesis Vocational Institute se dedica a brindar oportunidades de aprendizaje de por vida ofreciendo educación enfocada en la carrera que prepare a los estudiantes para posiciones de nivel inicial en profesiones de atención médica de alta demanda. Nos esforzamos por fomentar el crecimiento personal y profesional, asegurando la satisfacción del estudiante y contribuyendo al bienestar económico y social de nuestra diversa comunidad, predominantemente hispana."
        },
        question: {
            text: {
                en: "What is the main focus of Genesis Vocational Institute's mission?",
                es: "¿Cuál es el enfoque principal de la misión de Genesis Vocational Institute?"
            },
            choices: {
                en: [
                    "Providing lifelong learning in healthcare professions",
                    "Offering advanced degrees in business", 
                    "Focusing on arts and humanities",
                    "Teaching only theoretical knowledge"
                ],
                es: [
                    "Brindar aprendizaje de por vida en profesiones de atención médica",
                    "Ofrecer títulos avanzados en negocios",
                    "Enfocarse en artes y humanidades", 
                    "Enseñar solo conocimiento teórico"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! The mission emphasizes career-focused education in healthcare.",
                es: "¡Correcto! La misión enfatiza la educación enfocada en la carrera en atención médica."
            },
            feedbackIncorrect: {
                en: "Incorrect. Review the mission: it's about lifelong learning in healthcare professions.",
                es: "Incorrecto. Revise la misión: se trata del aprendizaje de por vida en profesiones de atención médica."
            }
        }
    },
    {
        id: 2,
        description: {
            en: "This handbook outlines the programs offered, key policies, and expectations for students to ensure a productive and professional learning environment. It is designed to help you navigate your educational journey at Genesis while aligning with our institutional goals of excellence in education, student support, and career preparation.",
            es: "Este manual describe los programas ofrecidos, las políticas clave y las expectativas para los estudiantes para asegurar un ambiente de aprendizaje productivo y profesional. Está diseñado para ayudarle a navegar su jornada educativa en Genesis mientras se alinea con nuestros objetivos institucionales de excelencia en educación, apoyo estudiantil y preparación profesional."
        },
        question: {
            text: {
                en: "What is the primary purpose of the Student Handbook?",
                es: "¿Cuál es el propósito principal del Manual del Estudiante?"
            },
            choices: {
                en: [
                    "To outline programs, policies, and expectations",
                    "To provide recipes for healthy meals",
                    "To list local entertainment options", 
                    "To sell school merchandise"
                ],
                es: [
                    "Describir programas, políticas y expectativas",
                    "Proveer recetas de comidas saludables",
                    "Enumerar opciones de entretenimiento local",
                    "Vender mercancía de la escuela"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! It guides students through policies and expectations.",
                es: "¡Correcto! Guía a los estudiantes a través de políticas y expectativas."
            },
            feedbackIncorrect: {
                en: "Incorrect. The handbook is for navigating education and policies.",
                es: "Incorrecto. El manual es para navegar la educación y las políticas."
            }
        }
    },
    {
        id: 3,
        description: {
            en: "Genesis Vocational Institute maintains a Non-Discrimination Policy as outlined in the School Catalog, ensuring equal opportunities for all students regardless of race, gender, religion, disability, or other characteristics.",
            es: "Genesis Vocational Institute mantiene una Política de No Discriminación como se describe en el Catálogo Escolar, asegurando oportunidades iguales para todos los estudiantes sin importar raza, género, religión, discapacidad u otras características."
        },
        question: {
            text: {
                en: "What does the Non-Discrimination Policy ensure?",
                es: "¿Qué asegura la Política de No Discriminación?"
            },
            choices: {
                en: [
                    "Equal opportunities for all students",
                    "Free meals for everyone",
                    "Unlimited vacation days",
                    "Personal tutors for each student"
                ],
                es: [
                    "Oportunidades iguales para todos los estudiantes",
                    "Comidas gratuitas para todos",
                    "Vacaciones ilimitadas",
                    "Tutores personales para cada estudiante"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! It promotes equality.",
                es: "¡Correcto! Promueve la igualdad."
            },
            feedbackIncorrect: {
                en: "Incorrect. It focuses on equal opportunities.",
                es: "Incorrecto. Se enfoca en oportunidades iguales."
            }
        }
    },
    {
        id: 4,
        description: {
            en: "Students have rights and responsibilities as detailed in the School Catalog, including the right to a safe learning environment and the responsibility to uphold academic integrity and conduct standards.",
            es: "Los estudiantes tienen derechos y responsabilidades como se detalla en el Catálogo Escolar, incluyendo el derecho a un ambiente de aprendizaje seguro y la responsabilidad de mantener la integridad académica y los estándares de conducta."
        },
        question: {
            text: {
                en: "What do Student Rights & Responsibilities include?",
                es: "¿Qué incluyen los Derechos y Responsabilidades del Estudiante?"
            },
            choices: {
                en: [
                    "Right to a safe environment and responsibility for integrity",
                    "Right to skip classes without penalty",
                    "Responsibility to pay extra fees",
                    "Right to unlimited resources"
                ],
                es: [
                    "Derecho a un ambiente seguro y responsabilidad por la integridad",
                    "Derecho a faltar a clases sin penalización",
                    "Responsabilidad de pagar tarifas extra",
                    "Derecho a recursos ilimitados"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Balances rights with duties.",
                es: "¡Correcto! Equilibra derechos con deberes."
            },
            feedbackIncorrect: {
                en: "Incorrect. Focuses on safety and integrity.",
                es: "Incorrecto. Se enfoca en seguridad e integridad."
            }
        }
    },
    {
        id: 5,
        description: {
            en: "Attendance policy as per the School Catalog requires regular attendance, with procedures for make-up work and tardiness to ensure academic progress.",
            es: "La política de asistencia según el Catálogo Escolar requiere asistencia regular, con procedimientos para trabajo de recuperación y tardanzas para asegurar el progreso académico."
        },
        question: {
            text: {
                en: "What does the Attendance policy require?",
                es: "¿Qué requiere la política de Asistencia?"
            },
            choices: {
                en: [
                    "Regular attendance and make-up procedures",
                    "Attendance only on Mondays",
                    "No attendance tracking", 
                    "Attendance via email only"
                ],
                es: [
                    "Asistencia regular y procedimientos de recuperación",
                    "Asistencia solo los lunes",
                    "Sin seguimiento de asistencia",
                    "Asistencia solo por correo electrónico"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Regular attendance is key.",
                es: "¡Correcto! La asistencia regular es clave."
            },
            feedbackIncorrect: {
                en: "Incorrect. It mandates regular presence.",
                es: "Incorrecto. Exige presencia regular."
            }
        }
    },
    {
        id: 6,
        description: {
            en: "The Leave of Absence policy allows students to request temporary leaves under certain conditions, as detailed in the School Catalog.",
            es: "La política de Licencia de Ausencia permite a los estudiantes solicitar licencias temporales bajo ciertas condiciones, como se detalla en el Catálogo Escolar."
        },
        question: {
            text: {
                en: "What is the Leave of Absence policy for?",
                es: "¿Para qué es la política de Licencia de Ausencia?"
            },
            choices: {
                en: [
                    "Requesting temporary leaves",
                    "Permanent withdrawal",
                    "Extra credit requests",
                    "Changing majors daily"
                ],
                es: [
                    "Solicitar licencias temporales",
                    "Retiro permanente",
                    "Solicitudes de crédito extra",
                    "Cambiar de especialidad diariamente"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! For temporary breaks.",
                es: "¡Correcto! Para descansos temporales."
            },
            feedbackIncorrect: {
                en: "Incorrect. It's for approved absences.",
                es: "Incorrecto. Es para ausencias aprobadas."
            }
        }
    },
    {
        id: 7,
        description: {
            en: "Grading includes Grade Point Average (GPA), Incomplete \"I\" Grade, Withdrawal \"W\" Grade, with a minimum cumulative GPA of 2.0 required for Standards of Academic Progress (SAP).",
            es: "La calificación incluye Promedio de Calificaciones (GPA), Calificación Incompleta \"I\", Calificación de Retiro \"W\", con un GPA acumulativo mínimo de 2.0 requerido para los Estándares de Progreso Académico (SAP)."
        },
        question: {
            text: {
                en: "What is the minimum GPA for SAP?",
                es: "¿Cuál es el GPA mínimo para SAP?"
            },
            choices: {
                en: [
                    "2.0",
                    "4.0",
                    "1.0",
                    "3.5"
                ],
                es: [
                    "2.0",
                    "4.0",
                    "1.0",
                    "3.5"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! 2.0 is required.",
                es: "¡Correcto! Se requiere 2.0."
            },
            feedbackIncorrect: {
                en: "Incorrect. Review: minimum is 2.0.",
                es: "Incorrecto. Revise: el mínimo es 2.0."
            }
        }
    },
    {
        id: 8,
        description: {
            en: "Students must maintain a minimum cumulative Grade Point Average (GPA) of 2.0 and complete at least 67% of attempted clock hours to meet Standards of Academic Progress (SAP).",
            es: "Los estudiantes deben mantener un Promedio de Calificaciones (GPA) acumulativo mínimo de 2.0 y completar al menos el 67% de las horas de clase intentadas para cumplir con los Estándares de Progreso Académico (SAP)."
        },
        question: {
            text: {
                en: "What completion rate is needed for SAP?",
                es: "¿Qué tasa de finalización se necesita para SAP?"
            },
            choices: {
                en: [
                    "67% of attempted clock hours",
                    "100% attendance",
                    "50% GPA",
                    "90% errors"
                ],
                es: [
                    "67% de las horas de clase intentadas",
                    "100% de asistencia",
                    "50% GPA",
                    "90% de errores"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! 67% completion.",
                es: "¡Correcto! 67% de finalización."
            },
            feedbackIncorrect: {
                en: "Incorrect. It's 67% of hours.",
                es: "Incorrecto. Es el 67% de las horas."
            }
        }
    },
    {
        id: 9,
        description: {
            en: "Academic Probation is applied when students fail to meet SAP, with procedures to re-establish progress as per the School Catalog.",
            es: "La Probatoria Académica se aplica cuando los estudiantes no cumplen con SAP, con procedimientos para restablecer el progreso según el Catálogo Escolar."
        },
        question: {
            text: {
                en: "When is Academic Probation applied?",
                es: "¿Cuándo se aplica la Probatoria Académica?"
            },
            choices: {
                en: [
                    "When failing to meet SAP",
                    "After perfect attendance",
                    "On first day",
                    "For high grades"
                ],
                es: [
                    "Cuando no se cumple con SAP",
                    "Después de asistencia perfecta",
                    "En el primer día",
                    "Por calificaciones altas"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! For SAP failures.",
                es: "¡Correcto! Por incumplimientos de SAP."
            },
            feedbackIncorrect: {
                en: "Incorrect. It's for not meeting standards.",
                es: "Incorrecto. Es por no cumplir con los estándares."
            }
        }
    },
    {
        id: 10,
        description: {
            en: "Dismissal may occur for violations of conduct, academic failure, or other policies as outlined in the School Catalog.",
            es: "El despido puede ocurrir por violaciones de conducta, fracaso académico u otras políticas como se describe en el Catálogo Escolar."
        },
        question: {
            text: {
                en: "What can lead to Dismissal?",
                es: "¿Qué puede llevar al Despido?"
            },
            choices: {
                en: [
                    "Violations of conduct or academic failure",
                    "Perfect scores",
                    "Early arrivals",
                    "Extra homework"
                ],
                es: [
                    "Violaciones de conducta o fracaso académico",
                    "Puntuaciones perfectas",
                    "Llegadas tempranas",
                    "Tarea extra"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! For serious violations.",
                es: "¡Correcto! Por violaciones graves."
            },
            feedbackIncorrect: {
                en: "Incorrect. It's for breaches.",
                es: "Incorrecto. Es por incumplimientos."
            }
        }
    },
    {
        id: 11,
        description: {
            en: "Students are expected to adhere to a code of conduct that fosters a professional and respectful learning environment. Prohibited behaviors include violence, threats, drug or alcohol use, academic dishonesty, and unprofessional conduct.",
            es: "Se espera que los estudiantes se adhieran a un código de conducta que fomente un ambiente de aprendizaje profesional y respetuoso. Los comportamientos prohibidos incluyen violencia, amenazas, uso de drogas o alcohol, deshonestidad académica y conducta no profesional."
        },
        question: {
            text: {
                en: "What does Standards of Conduct prohibit?",
                es: "¿Qué prohíben los Estándares de Conducta?"
            },
            choices: {
                en: [
                    "Violence, threats, drugs",
                    "Studying hard",
                    "Helping others",
                    "Attending classes"
                ],
                es: [
                    "Violencia, amenazas, drogas",
                    "Estudiar duro",
                    "Ayudar a otros",
                    "Asistir a clases"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Prohibits harmful behaviors.",
                es: "¡Correcto! Prohíbe comportamientos dañinos."
            },
            feedbackIncorrect: {
                en: "Incorrect. Focuses on professionalism.",
                es: "Incorrecto. Se enfoca en el profesionalismo."
            }
        }
    },
    {
        id: 12,
        description: {
            en: "Students must maintain honesty in all academic work. Prohibited actions include cheating (e.g., using unauthorized materials during exams), plagiarism (e.g., copying others' work without credit), misrepresentation (e.g., falsifying records), and assisting others in dishonest acts.",
            es: "Los estudiantes deben mantener honestidad en todo trabajo académico. Las acciones prohibidas incluyen hacer trampa (por ejemplo, usar materiales no autorizados durante los exámenes), plagio (por ejemplo, copiar el trabajo de otros sin crédito), tergiversación (por ejemplo, falsificar registros) y ayudar a otros en actos deshonestos."
        },
        question: {
            text: {
                en: "What is prohibited under Academic Integrity?",
                es: "¿Qué está prohibido bajo la Integridad Académica?"
            },
            choices: {
                en: [
                    "Cheating, plagiarism, misrepresentation",
                    "Taking notes",
                    "Group study",
                    "Asking questions"
                ],
                es: [
                    "Hacer trampa, plagio, tergiversación",
                    "Tomar notas",
                    "Estudio en grupo",
                    "Hacer preguntas"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Honesty is required.",
                es: "¡Correcto! Se requiere honestidad."
            },
            feedbackIncorrect: {
                en: "Incorrect. It's about dishonest acts.",
                es: "Incorrecto. Se trata de actos deshonestos."
            }
        }
    },
    {
        id: 13,
        description: {
            en: "Genesis Vocational Institute reserves the right to cancel or forfeit any examination if there is evidence or reasonable suspicion of cheating by one or more students in a class. Indicators include disproportionate grade distributions, unusually rapid completion, observed behaviors.",
            es: "Genesis Vocational Institute se reserva el derecho de cancelar o anular cualquier examen si hay evidencia o sospecha razonable de trampa por uno o más estudiantes en una clase. Los indicadores incluyen distribuciones de calificaciones desproporcionadas, finalización inusualmente rápida, comportamientos observados."
        },
        question: {
            text: {
                en: "When can an exam be canceled?",
                es: "¿Cuándo se puede cancelar un examen?"
            },
            choices: {
                en: [
                    "Suspicion of cheating",
                    "Perfect weather",
                    "Holiday seasons",
                    "Student requests"
                ],
                es: [
                    "Sospecha de trampa",
                    "Clima perfecto",
                    "Temporadas festivas",
                    "Solicitudes estudiantiles"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! For integrity reasons.",
                es: "¡Correcto! Por razones de integridad."
            },
            feedbackIncorrect: {
                en: "Incorrect. Due to cheating suspicions.",
                es: "Incorrecto. Debido a sospechas de trampa."
            }
        }
    },
    {
        id: 14,
        description: {
            en: "If an exam is canceled due to suspected or confirmed cheating, all grades are voided, a replacement exam is administered, and all students must retake it.",
            es: "Si un examen es cancelado debido a trampa sospechada o confirmada, todas las calificaciones se anulan, se administra un examen de reemplazo y todos los estudiantes deben volver a tomarlo."
        },
        question: {
            text: {
                en: "What happens in Retesting Procedure?",
                es: "¿Qué sucede en el Procedimiento de Reexaminación?"
            },
            choices: {
                en: [
                    "Grades voided, new exam for all",
                    "Only cheaters retake",
                    "Exam canceled forever",
                    "Grades doubled"
                ],
                es: [
                    "Calificaciones anuladas, nuevo examen para todos",
                    "Solo los tramposos repiten",
                    "Examen cancelado para siempre",
                    "Calificaciones duplicadas"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Ensures fairness.",
                es: "¡Correcto! Asegura la equidad."
            },
            feedbackIncorrect: {
                en: "Incorrect. All retake after void.",
                es: "Incorrecto. Todos repiten después de la anulación."
            }
        }
    },
    {
        id: 15,
        description: {
            en: "Genesis maintains a zero-tolerance policy for violence, threats, or disruptive behavior on campus or during school activities, including clinical externships.",
            es: "Genesis mantiene una política de cero tolerancia para violencia, amenazas o comportamiento disruptivo en el campus o durante actividades escolares, incluyendo prácticas clínicas externas."
        },
        question: {
            text: {
                en: "What is the policy on violence?",
                es: "¿Cuál es la política sobre violencia?"
            },
            choices: {
                en: [
                    "Zero-tolerance",
                    "Allowed in arguments",
                    "Encouraged for defense",
                    "Ignored if minor"
                ],
                es: [
                    "Cero tolerancia",
                    "Permitido en discusiones",
                    "Alentado para defensa",
                    "Ignorado si es menor"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! No tolerance.",
                es: "¡Correcto! Sin tolerancia."
            },
            feedbackIncorrect: {
                en: "Incorrect. Strictly prohibited.",
                es: "Incorrecto. Estrictamente prohibido."
            }
        }
    },
    {
        id: 16,
        description: {
            en: "The use, possession, distribution, or being under the influence of drugs or alcohol on campus, during clinical rotations, or at school-sponsored events is strictly prohibited.",
            es: "El uso, posesión, distribución o estar bajo la influencia de drogas o alcohol en el campus, durante rotaciones clínicas o en eventos patrocinados por la escuela está estrictamente prohibido."
        },
        question: {
            text: {
                en: "What is prohibited on Drug-Free Campus?",
                es: "¿Qué está prohibido en el Campus Libre de Drogas?"
            },
            choices: {
                en: [
                    "Drugs and alcohol use/possession",
                    "Drinking water",
                    "Eating snacks",
                    "Studying late"
                ],
                es: [
                    "Uso/posesión de drogas y alcohol",
                    "Beber agua",
                    "Comer bocadillos",
                    "Estudiar tarde"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Strictly no substances.",
                es: "¡Correcto! Estrictamente sin sustancias."
            },
            feedbackIncorrect: {
                en: "Incorrect. Focuses on drugs/alcohol.",
                es: "Incorrecto. Se enfoca en drogas/alcohol."
            }
        }
    },
    {
        id: 17,
        description: {
            en: "Romantic or sexual relationships between students and faculty or staff are strictly prohibited due to the potential for coercion and conflicts of interest.",
            es: "Las relaciones románticas o sexuales entre estudiantes y profesores o personal están estrictamente prohibidas debido al potencial de coerción y conflictos de interés."
        },
        question: {
            text: {
                en: "Are romantic relationships with faculty allowed?",
                es: "¿Están permitidas las relaciones románticas con el profesorado?"
            },
            choices: {
                en: [
                    "No, strictly prohibited",
                    "Yes, if consensual",
                    "Only on weekends",
                    "If approved"
                ],
                es: [
                    "No, estrictamente prohibido",
                    "Sí, si es consensual",
                    "Solo los fines de semana",
                    "Si es aprobado"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Prohibited for conflicts.",
                es: "¡Correcto! Prohibido por conflictos."
            },
            feedbackIncorrect: {
                en: "Incorrect. Strictly not allowed.",
                es: "Incorrecto. Estrictamente no permitido."
            }
        }
    },
    {
        id: 18,
        description: {
            en: "Student records, including grades and disciplinary actions, are maintained confidentially in compliance with the Family Educational Rights and Privacy Act (FERPA).",
            es: "Los registros estudiantiles, incluyendo calificaciones y acciones disciplinarias, se mantienen confidencialmente en cumplimiento con la Ley de Derechos Educativos y Privacidad Familiar (FERPA)."
        },
        question: {
            text: {
                en: "What act governs Confidentiality?",
                es: "¿Qué ley gobierna la Confidencialidad?"
            },
            choices: {
                en: [
                    "FERPA",
                    "HIPAA only",
                    "No act",
                    "School rule only"
                ],
                es: [
                    "FERPA",
                    "Solo HIPAA",
                    "Ninguna ley",
                    "Solo regla escolar"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! FERPA for records.",
                es: "¡Correcto! FERPA para registros."
            },
            feedbackIncorrect: {
                en: "Incorrect. It's FERPA compliance.",
                es: "Incorrecto. Es cumplimiento de FERPA."
            }
        }
    },
    {
        id: 19,
        description: {
            en: "Genesis Vocational Institute complies with the Americans with Disabilities Act (ADA) and is committed to providing reasonable accommodations for students with documented disabilities, ensuring equal access to education without compromising program standards or patient safety.",
            es: "Genesis Vocational Institute cumple con la Ley de Estadounidenses con Discapacidades (ADA) y se compromete a proporcionar adaptaciones razonables para estudiantes con discapacidades documentadas, asegurando acceso igualitario a la educación sin comprometer los estándares del programa o la seguridad del paciente."
        },
        question: {
            text: {
                en: "What act does Accommodation comply with?",
                es: "¿Con qué ley cumple la Acomodación?"
            },
            choices: {
                en: [
                    "ADA",
                    "FERPA",
                    "HIPAA",
                    "None"
                ],
                es: [
                    "ADA",
                    "FERPA",
                    "HIPAA",
                    "Ninguna"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! ADA for disabilities.",
                es: "¡Correcto! ADA para discapacidades."
            },
            feedbackIncorrect: {
                en: "Incorrect. It's ADA.",
                es: "Incorrecto. Es ADA."
            }
        }
    },
    {
        id: 20,
        description: {
            en: "Genesis Vocational Institute maintains a zero-tolerance policy for bullying and harassment in any form, whether in person, on social media, or in any context related to the school, on or off campus.",
            es: "Genesis Vocational Institute mantiene una política de cero tolerancia para el acoso y hostigamiento en cualquier forma, ya sea en persona, en redes sociales o en cualquier contexto relacionado con la escuela, dentro o fuera del campus."
        },
        question: {
            text: {
                en: "What is the policy on Bullying?",
                es: "¿Cuál es la política sobre el Acoso?"
            },
            choices: {
                en: [
                    "Zero-tolerance",
                    "Allowed if joking",
                    "Only in class",
                    "Ignored online"
                ],
                es: [
                    "Cero tolerancia",
                    "Permitido si es broma",
                    "Solo en clase",
                    "Ignorado en línea"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! No tolerance anywhere.",
                es: "¡Correcto! Sin tolerancia en ninguna parte."
            },
            feedbackIncorrect: {
                en: "Incorrect. Strictly prohibited.",
                es: "Incorrecto. Estrictamente prohibido."
            }
        }
    },
    {
        id: 21,
        description: {
            en: "For complaints, first attempt informal resolution, then formal written complaint to Director of Admissions, escalate to School Director if needed. Unresolved? Contact ACCSC or state oversight.",
            es: "Para quejas, primero intente una resolución informal, luego una queja formal por escrito al Director de Admisiones, escale al Director de la Escuela si es necesario. ¿Sin resolver? Contacte ACCSC o supervisión estatal."
        },
        question: {
            text: {
                en: "What is the first step in Complaints?",
                es: "¿Cuál es el primer paso en las Quejas?"
            },
            choices: {
                en: [
                    "Informal resolution",
                    "Contact ACCSC immediately",
                    "Ignore the issue",
                    "Post on social media"
                ],
                es: [
                    "Resolución informal",
                    "Contactar ACCSC inmediatamente",
                    "Ignorar el problema",
                    "Publicar en redes sociales"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Start informally.",
                es: "¡Correcto! Comience informalmente."
            },
            feedbackIncorrect: {
                en: "Incorrect. Begin with discussion.",
                es: "Incorrecto. Comience con discusión."
            }
        }
    },
    {
        id: 22,
        description: {
            en: "Applicants must provide an official picture ID, be at least 17 years and 9 months old, and present a high school diploma, GED, or equivalent. Those without may take the Wonderlic Basic Skills Test.",
            es: "Los solicitantes deben proporcionar una identificación oficial con foto, tener al menos 17 años y 9 meses de edad, y presentar un diploma de escuela secundaria, GED o equivalente. Aquellos sin uno pueden tomar el Examen de Habilidades Básicas Wonderlic."
        },
        question: {
            text: {
                en: "What is required for Admissions?",
                es: "¿Qué se requiere para Admisiones?"
            },
            choices: {
                en: [
                    "ID, age 17+9 months, diploma or test",
                    "No requirements",
                    "Only payment",
                    "College degree"
                ],
                es: [
                    "ID, edad 17+9 meses, diploma o examen",
                    "Sin requisitos",
                    "Solo pago",
                    "Título universitario"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Basic qualifications.",
                es: "¡Correcto! Calificaciones básicas."
            },
            feedbackIncorrect: {
                en: "Incorrect. ID, age, education proof.",
                es: "Incorrecto. ID, edad, prueba de educación."
            }
        }
    },
    {
        id: 23,
        description: {
            en: "Genesis maintains accurate and confidential student records, including enrollment documents, grades, transcripts, and disciplinary actions, in compliance with the Family Educational Rights and Privacy Act (FERPA).",
            es: "Genesis mantiene registros estudiantiles precisos y confidenciales, incluyendo documentos de inscripción, calificaciones, transcripciones y acciones disciplinarias, en cumplimiento con la Ley de Derechos Educativos Familiares y Privacidad (FERPA)."
        },
        question: {
            text: {
                en: "How are Student Records handled?",
                es: "¿Cómo se manejan los Registros Estudiantiles?"
            },
            choices: {
                en: [
                    "Confidentially under FERPA",
                    "Publicly shared",
                    "Deleted annually",
                    "Only grades kept"
                ],
                es: [
                    "Confidencialmente bajo FERPA",
                    "Compartidos públicamente",
                    "Eliminados anualmente",
                    "Solo calificaciones guardadas"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Confidential and accurate.",
                es: "¡Correcto! Confidencial y preciso."
            },
            feedbackIncorrect: {
                en: "Incorrect. FERPA compliance.",
                es: "Incorrecto. Cumplimiento FERPA."
            }
        }
    },
    {
        id: 24,
        description: {
            en: "Graduation requires meeting all program requirements, including GPA, completion rates, and conduct standards as per the School Catalog.",
            es: "La graduación requiere cumplir con todos los requisitos del programa, incluyendo GPA, tasas de finalización y estándares de conducta según el Catálogo Escolar."
        },
        question: {
            text: {
                en: "What is needed for Graduation?",
                es: "¿Qué se necesita para la Graduación?"
            },
            choices: {
                en: [
                    "Meet GPA, completion, conduct",
                    "Just attend",
                    "Pay extra",
                    "No requirements"
                ],
                es: [
                    "Cumplir GPA, finalización, conducta",
                    "Solo asistir",
                    "Pagar extra",
                    "Sin requisitos"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! All standards met.",
                es: "¡Correcto! Todos los estándares cumplidos."
            },
            feedbackIncorrect: {
                en: "Incorrect. Academic and conduct.",
                es: "Incorrecto. Académico y conducta."
            }
        }
    },
    {
        id: 25,
        description: {
            en: "Re-Entry Policy allows dismissed or withdrawn students to reapply under certain conditions, as detailed in the School Catalog.",
            es: "La Política de Reingreso permite a estudiantes despedidos o retirados volver a aplicar bajo ciertas condiciones, como se detalla en el Catálogo Escolar."
        },
        question: {
            text: {
                en: "What does Re-Entry Policy allow?",
                es: "¿Qué permite la Política de Reingreso?"
            },
            choices: {
                en: [
                    "Reapply after dismissal/withdrawal",
                    "Enter without application",
                    "Free re-enrollment",
                    "No re-entry"
                ],
                es: [
                    "Volver a aplicar después de despido/retiro",
                    "Entrar sin aplicación",
                    "Re-inscripción gratuita",
                    "Sin reingreso"
                ]
            },
            correctIndex: 0,
            feedbackCorrect: {
                en: "Correct! Conditional reapplication.",
                es: "¡Correcto! Re-aplicación condicional."
            },
            feedbackIncorrect: {
                en: "Incorrect. For returning students.",
                es: "Incorrecto. Para estudiantes que regresan."
            }
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