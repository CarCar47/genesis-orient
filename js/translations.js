// Translation data for Genesis Vocational Institute Orientation
// Contains all UI text in English and Spanish

const translations = {
    en: {
        // Language selector
        'language_english': 'English',
        'language_spanish': 'Español',
        
        // Loading screen
        'loading_orientation': 'Loading Orientation...',
        'preparing_experience': 'Preparing your learning experience',
        
        // Start screen
        'genesis_vocational_institute': 'Genesis Vocational Institute',
        'student_orientation': 'Student Orientation',
        'welcome_orientation': 'Welcome to Your Orientation',
        'orientation_description': 'Complete this interactive orientation to learn about our school policies and procedures.',
        'full_name_label': 'Full Name *',
        'full_name_placeholder': 'Enter your full name',
        'program_label': 'Select Your Program *',
        'choose_program': 'Choose a program...',
        'start_orientation': 'Start Orientation',
        
        // Programs
        'program_home_health_aide': 'Home Health Aide (75 Clock Hours, Diploma)',
        'program_nursing_assistant': 'Nursing Assistant (120 Clock Hours, Diploma)',
        'program_phlebotomy_technician': 'Phlebotomy Technician (165 Clock Hours, Diploma)',
        'program_electrocardiograph_technician': 'Electrocardiograph Technician (165 Clock Hours, Diploma)',
        'program_patient_care_technician': 'Patient Care Technician (600 Clock Hours, Diploma)',
        'program_medical_assistant': 'Medical Assistant (936 Clock Hours, Diploma)',
        'program_medical_billing_and_coding': 'Medical Billing and Coding (1000 Clock Hours, Diploma)',
        
        // Quiz screen
        'policy_information': 'Policy Information',
        'question_counter': 'Question {0} of {1}',
        'continue_button': 'Continue',
        
        // Action buttons
        'how_it_works': 'How it works',
        'exit_orientation': 'Exit orientation',
        
        // Results screen
        'orientation_complete': 'Orientation Complete!',
        'score_label': 'Score',
        'correct_label': 'Correct',
        'incorrect_label': 'Incorrect',
        'time_label': 'Time',
        'download_certificate': 'Download Certificate',
        'review_answers': 'Review Answers',
        'restart_orientation': 'Restart Orientation',
        
        // Failing grade message
        'orientation_not_complete': 'Orientation Not Complete',
        'passing_grade_required': 'A passing grade of B (80%) or higher is required to complete the orientation program. Please restart the orientation and review the material carefully to achieve a passing score.',
        
        // Modals
        'how_it_works_title': 'How the Orientation Works',
        'how_it_works_welcome': 'Welcome to your interactive orientation!',
        'how_it_works_step1': "You'll be presented with 25 questions about school policies",
        'how_it_works_step2': 'Each question is preceded by important information from our handbook',
        'how_it_works_step3': 'Choose the best answer from the multiple choice options',
        'how_it_works_step4': "You'll receive immediate feedback after each answer",
        'how_it_works_step5': 'Your progress is tracked throughout the quiz',
        'how_it_works_step6': "At the end, you'll receive a grade and can download a certificate",
        'how_it_works_tip': 'Take your time and read carefully! This orientation will help you understand our school\'s policies and expectations.',
        'got_it': 'Got it!',
        
        'review_answers_title': 'Review Your Answers',
        'close_button': 'Close',
        
        'exit_orientation_title': 'Exit Orientation?',
        'exit_confirmation': 'Are you sure you want to exit? Your progress will be lost.',
        'exit_button': 'Exit',
        'cancel_button': 'Cancel',
        
        // School contact information
        'school_address': '12851 SW 42nd. Street 2nd Floor #131, Miami Florida 33175',
        'school_phone': 'Ph: 305-223-05062',
        'school_fax': 'Fax: 305-223-0509',
        'school_email': 'info@gvi.edu',
        'school_website': 'www.gvi.edu',
        
        // Time formatting
        'minute_label': 'm ',
        'second_label': 's',
        
        // Messages and alerts
        'name_program_required': 'Please enter your name and select a program.',
        'pdf_not_available': 'PDF generation not available. Please check your internet connection.',
        'pdf_loading': 'PDF library is still loading. Please wait a moment and try again.',
        'certificate_not_available': 'Certificate not available. A passing grade of B (80%) or higher is required. Please restart the orientation to try again.',
        'certificate_downloaded': 'Certificate downloaded successfully!',
        'certificate_error': 'Error generating certificate. Please try again.',
        
        // Skip link accessibility
        'skip_to_main': 'Skip to main content'
    },
    
    es: {
        // Language selector
        'language_english': 'English',
        'language_spanish': 'Español',
        
        // Loading screen
        'loading_orientation': 'Cargando Orientación...',
        'preparing_experience': 'Preparando su experiencia de aprendizaje',
        
        // Start screen
        'genesis_vocational_institute': 'Genesis Vocational Institute',
        'student_orientation': 'Orientación Estudiantil',
        'welcome_orientation': 'Bienvenido a Su Orientación',
        'orientation_description': 'Complete esta orientación interactiva para aprender sobre las políticas y procedimientos de nuestra escuela.',
        'full_name_label': 'Nombre Completo *',
        'full_name_placeholder': 'Ingrese su nombre completo',
        'program_label': 'Seleccione Su Programa *',
        'choose_program': 'Elija un programa...',
        'start_orientation': 'Iniciar Orientación',
        
        // Programs
        'program_home_health_aide': 'Auxiliar de Salud en el Hogar (75 Horas de Clase, Diploma)',
        'program_nursing_assistant': 'Asistente de Enfermería (120 Horas de Clase, Diploma)',
        'program_phlebotomy_technician': 'Técnico en Flebotomía (165 Horas de Clase, Diploma)',
        'program_electrocardiograph_technician': 'Técnico en Electrocardiografía (165 Horas de Clase, Diploma)',
        'program_patient_care_technician': 'Técnico en Cuidado de Pacientes (600 Horas de Clase, Diploma)',
        'program_medical_assistant': 'Asistente Médico (936 Horas de Clase, Diploma)',
        'program_medical_billing_and_coding': 'Facturación Médica y Codificación (1000 Horas de Clase, Diploma)',
        
        // Quiz screen
        'policy_information': 'Información de Políticas',
        'question_counter': 'Pregunta {0} de {1}',
        'continue_button': 'Continuar',
        
        // Action buttons
        'how_it_works': 'Cómo funciona',
        'exit_orientation': 'Salir de la orientación',
        
        // Results screen
        'orientation_complete': '¡Orientación Completada!',
        'score_label': 'Puntaje',
        'correct_label': 'Correctas',
        'incorrect_label': 'Incorrectas',
        'time_label': 'Tiempo',
        'download_certificate': 'Descargar Certificado',
        'review_answers': 'Revisar Respuestas',
        'restart_orientation': 'Reiniciar Orientación',
        
        // Failing grade message
        'orientation_not_complete': 'Orientación No Completada',
        'passing_grade_required': 'Se requiere una calificación aprobatoria de B (80%) o superior para completar el programa de orientación. Por favor reinicie la orientación y revise el material cuidadosamente para lograr una puntuación aprobatoria.',
        
        // Modals
        'how_it_works_title': 'Cómo Funciona la Orientación',
        'how_it_works_welcome': '¡Bienvenido a su orientación interactiva!',
        'how_it_works_step1': 'Se le presentarán 25 preguntas sobre las políticas de la escuela',
        'how_it_works_step2': 'Cada pregunta está precedida por información importante de nuestro manual',
        'how_it_works_step3': 'Elija la mejor respuesta de las opciones de opción múltiple',
        'how_it_works_step4': 'Recibirá retroalimentación inmediata después de cada respuesta',
        'how_it_works_step5': 'Su progreso se rastrea durante todo el cuestionario',
        'how_it_works_step6': 'Al final, recibirá una calificación y podrá descargar un certificado',
        'how_it_works_tip': '¡Tómese su tiempo y lea cuidadosamente! Esta orientación le ayudará a entender las políticas y expectativas de nuestra escuela.',
        'got_it': '¡Entendido!',
        
        'review_answers_title': 'Revisar Sus Respuestas',
        'close_button': 'Cerrar',
        
        'exit_orientation_title': '¿Salir de la Orientación?',
        'exit_confirmation': '¿Está seguro de que desea salir? Su progreso se perderá.',
        'exit_button': 'Salir',
        'cancel_button': 'Cancelar',
        
        // School contact information
        'school_address': '12851 SW 42nd. Street 2nd Floor #131, Miami Florida 33175',
        'school_phone': 'Tel: 305-223-05062',
        'school_fax': 'Fax: 305-223-0509',
        'school_email': 'info@gvi.edu',
        'school_website': 'www.gvi.edu',
        
        // Time formatting
        'minute_label': 'm ',
        'second_label': 's',
        
        // Messages and alerts
        'name_program_required': 'Por favor ingrese su nombre y seleccione un programa.',
        'pdf_not_available': 'Generación de PDF no disponible. Por favor verifique su conexión a internet.',
        'pdf_loading': 'La biblioteca PDF aún se está cargando. Por favor espere un momento e intente de nuevo.',
        'certificate_not_available': 'Certificado no disponible. Se requiere una calificación aprobatoria de B (80%) o superior. Por favor reinicie la orientación para intentar de nuevo.',
        'certificate_downloaded': '¡Certificado descargado exitosamente!',
        'certificate_error': 'Error generando certificado. Por favor intente de nuevo.',
        
        // Skip link accessibility
        'skip_to_main': 'Saltar al contenido principal'
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.translations = translations;
}

// Export for Node.js modules if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = translations;
}

console.log('Translations loaded successfully');