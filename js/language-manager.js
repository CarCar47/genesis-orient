// Language Manager for Genesis Vocational Institute Orientation
// Handles language switching between English and Spanish

const LanguageManager = {
    currentLanguage: 'en', // Default to English
    
    // Initialize language manager
    init() {
        console.log('Initializing Language Manager');
        
        // Load saved language preference
        const savedLanguage = localStorage.getItem('genesis-orientation-language');
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
            this.currentLanguage = savedLanguage;
        }
        
        // Set up language selector event listeners
        this.setupLanguageSelector();
        
        // Apply initial language
        this.translatePage();
        
        return true;
    },
    
    // Set up language selector buttons
    setupLanguageSelector() {
        const englishBtn = document.getElementById('languageEnglish');
        const spanishBtn = document.getElementById('languageSpanish');
        
        console.log('DEBUG: Looking for language buttons');
        console.log('DEBUG: English button found:', !!englishBtn);
        console.log('DEBUG: Spanish button found:', !!spanishBtn);
        
        if (englishBtn) {
            englishBtn.addEventListener('click', () => this.setLanguage('en'));
            console.log('DEBUG: English button click listener added');
        } else {
            console.error('ERROR: English language button not found!');
        }
        
        if (spanishBtn) {
            spanishBtn.addEventListener('click', () => this.setLanguage('es'));
            console.log('DEBUG: Spanish button click listener added');
        } else {
            console.error('ERROR: Spanish language button not found!');
        }
        
        // Update button states
        this.updateLanguageButtons();
    },
    
    // Translate input placeholders
    translateInputPlaceholders() {
        const studentNameInput = document.getElementById('studentName');
        if (studentNameInput) {
            studentNameInput.placeholder = this.getText('full_name_placeholder');
        }
    },
    
    // Set current language
    setLanguage(language) {
        if (language === 'en' || language === 'es') {
            this.currentLanguage = language;
            localStorage.setItem('genesis-orientation-language', language);
            
            // Update UI immediately
            this.translatePage();
            this.updateLanguageButtons();
            
            console.log(`Language switched to: ${language}`);
        }
    },
    
    // Get current language
    getCurrentLanguage() {
        return this.currentLanguage;
    },
    
    // Get translated text by key
    getText(key, fallback = '') {
        if (typeof translations !== 'undefined' && 
            translations[this.currentLanguage] && 
            translations[this.currentLanguage][key]) {
            return translations[this.currentLanguage][key];
        }
        
        // Fallback to English if Spanish translation not found
        if (this.currentLanguage === 'es' && 
            translations['en'] && 
            translations['en'][key]) {
            return translations['en'][key];
        }
        
        return fallback || key;
    },
    
    // Translate all visible page elements
    translatePage() {
        // Translate elements with data-translate attribute
        const translatableElements = document.querySelectorAll('[data-translate]');
        translatableElements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getText(key);
            
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                // Handle form inputs - check if it's a placeholder translation
                if (key.includes('placeholder')) {
                    element.placeholder = translation;
                } else if (element.placeholder && element.value === '') {
                    element.placeholder = translation;
                }
            } else {
                element.textContent = translation;
            }
        });
        
        // Translate elements with data-translate-html attribute (for innerHTML)
        const htmlTranslatableElements = document.querySelectorAll('[data-translate-html]');
        htmlTranslatableElements.forEach(element => {
            const key = element.getAttribute('data-translate-html');
            const translation = this.getText(key);
            element.innerHTML = translation;
        });
        
        // Update page language attribute
        document.documentElement.lang = this.currentLanguage;
        
        // Translate program dropdown options
        this.translateProgramOptions();
        
        // Translate input placeholders
        this.translateInputPlaceholders();
    },
    
    // Translate program dropdown options
    translateProgramOptions() {
        const programSelect = document.getElementById('programSelect');
        if (!programSelect) return;
        
        const options = programSelect.querySelectorAll('option');
        options.forEach(option => {
            const value = option.value;
            if (value) {
                // Get program translation
                const programKey = `program_${value.replace(/\s+/g, '_').toLowerCase()}`;
                const translation = this.getText(programKey, option.textContent);
                option.textContent = translation;
            } else {
                // Translate the "Choose a program..." option
                option.textContent = this.getText('choose_program');
            }
        });
    },
    
    // Update language button states
    updateLanguageButtons() {
        const englishBtn = document.getElementById('languageEnglish');
        const spanishBtn = document.getElementById('languageSpanish');
        
        if (englishBtn && spanishBtn) {
            // Remove active class from both
            englishBtn.classList.remove('active');
            spanishBtn.classList.remove('active');
            
            // Add active class to current language
            if (this.currentLanguage === 'en') {
                englishBtn.classList.add('active');
            } else {
                spanishBtn.classList.add('active');
            }
        }
    },
    
    // Get current question data with appropriate language
    getCurrentQuestionData(questionData) {
        if (!questionData) return null;
        
        const lang = this.currentLanguage;
        
        // Handle bilingual question structure
        return {
            id: questionData.id,
            description: this.getLocalizedText(questionData.description, lang),
            question: {
                text: this.getLocalizedText(questionData.question.text, lang),
                choices: this.getLocalizedArray(questionData.question.choices, lang),
                correctIndex: questionData.question.correctIndex,
                feedbackCorrect: this.getLocalizedText(questionData.question.feedbackCorrect, lang),
                feedbackIncorrect: this.getLocalizedText(questionData.question.feedbackIncorrect, lang)
            }
        };
    },
    
    // Get localized text (handles both string and object formats)
    getLocalizedText(text, language) {
        if (typeof text === 'string') {
            return text; // Legacy format
        } else if (typeof text === 'object' && text[language]) {
            return text[language];
        } else if (typeof text === 'object' && text['en']) {
            return text['en']; // Fallback to English
        }
        return text || '';
    },
    
    // Get localized array (handles both array and object formats)
    getLocalizedArray(arr, language) {
        if (Array.isArray(arr)) {
            return arr; // Legacy format
        } else if (typeof arr === 'object' && arr[language]) {
            return arr[language];
        } else if (typeof arr === 'object' && arr['en']) {
            return arr['en']; // Fallback to English
        }
        return arr || [];
    },
    
    // Format time with localized labels
    formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        const minuteLabel = this.getText('minute_label', 'min');
        const secondLabel = this.getText('second_label', 'sec');
        
        if (minutes > 0) {
            return `${minutes}${minuteLabel} ${remainingSeconds}${secondLabel}`;
        } else {
            return `${remainingSeconds}${secondLabel}`;
        }
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.LanguageManager = LanguageManager;
}

console.log('Language Manager loaded successfully - v2.0');

// VISUAL TEST - Add red border to language selector if this script runs
document.addEventListener('DOMContentLoaded', function() {
    const selector = document.querySelector('.language-selector');
    if (selector) {
        selector.style.border = '5px solid red';
        selector.style.backgroundColor = 'yellow';
        console.log('VISUAL TEST: Language selector found and styled');
    } else {
        console.log('VISUAL TEST: Language selector NOT found');
    }
});