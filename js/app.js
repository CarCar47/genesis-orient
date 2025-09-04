// Main Application Controller for Genesis Vocational Institute Orientation
// Initializes and coordinates all components

// Update loading status - defined first for global access
function updateLoadingStatus(message) {
    const statusEl = document.getElementById('loadingStatus');
    const debugEl = document.getElementById('debugInfo');
    if (statusEl) statusEl.textContent = message;
    if (debugEl) debugEl.textContent = `Debug: ${message}`;
    console.log('Loading:', message);
}

// Application state
let appState = {
    isLoading: true,
    studentName: '',
    selectedProgram: '',
    currentScreen: 'loading',
    startTime: null,
    endTime: null
};

// Initialize application when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing Genesis Orientation App');
    updateLoadingStatus('Initializing application...');
    
    // Initialize service worker if supported
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered successfully');
                updateLoadingStatus('Offline support enabled...');
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    }
    
    // Start loading sequence
    setTimeout(() => {
        updateLoadingStatus('Loading quiz data...');
        initializeApp();
    }, 1000);
});

// Main initialization function
function initializeApp() {
    try {
        updateLoadingStatus('Setting up components...');
        
        // Verify required elements exist
        const requiredElements = [
            'loadingScreen',
            'startScreen', 
            'quizScreen',
            'resultsScreen'
        ];
        
        for (const elementId of requiredElements) {
            const element = document.getElementById(elementId);
            if (!element) {
                throw new Error(`Required element ${elementId} not found`);
            }
        }
        
        updateLoadingStatus('Initializing UI components...');
        
        // Initialize Language Manager first
        if (typeof LanguageManager !== 'undefined') {
            LanguageManager.init();
            updateLoadingStatus('Language Manager initialized...');
        } else {
            console.warn('LanguageManager not found');
        }
        
        // Initialize UI Manager
        if (typeof UIManager !== 'undefined') {
            UIManager.init();
            updateLoadingStatus('UI Manager initialized...');
        } else {
            console.warn('UIManager not found');
        }
        
        // Initialize Quiz Engine
        if (typeof QuizEngine !== 'undefined') {
            QuizEngine.init();
            updateLoadingStatus('Quiz Engine initialized...');
        } else {
            console.warn('QuizEngine not found');
        }
        
        // Set up event listeners
        setupEventListeners();
        updateLoadingStatus('Event listeners configured...');
        
        // Complete loading
        setTimeout(() => {
            completeLoading();
        }, 1500);
        
    } catch (error) {
        console.error('Initialization error:', error);
        updateLoadingStatus(`Error: ${error.message}`);
        
        // Fallback - show start screen anyway after delay
        setTimeout(() => {
            completeLoading();
        }, 3000);
    }
}

// Set up global event listeners
function setupEventListeners() {
    // Start form submission
    const startForm = document.getElementById('startForm');
    if (startForm) {
        startForm.addEventListener('submit', handleStartFormSubmit);
    }
    
    // Action buttons
    const howItWorksBtn = document.getElementById('howItWorksBtn');
    if (howItWorksBtn) {
        howItWorksBtn.addEventListener('click', () => {
            if (typeof UIManager !== 'undefined') {
                UIManager.showModal('howItWorks');
            }
        });
    }
    
    const exitBtn = document.getElementById('exitBtn');
    if (exitBtn) {
        exitBtn.addEventListener('click', () => {
            if (typeof UIManager !== 'undefined') {
                UIManager.showModal('exit');
            }
        });
    }
    
    // Modal close buttons
    const modalCloseButtons = document.querySelectorAll('.modal-close');
    modalCloseButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (typeof UIManager !== 'undefined') {
                UIManager.hideAllModals();
            }
        });
    });
    
    // Results screen buttons
    const downloadBtn = document.getElementById('downloadCertificate');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            if (typeof QuizEngine !== 'undefined') {
                QuizEngine.downloadCertificate();
            }
        });
    }
    
    const reviewBtn = document.getElementById('reviewAnswers');
    if (reviewBtn) {
        reviewBtn.addEventListener('click', () => {
            if (typeof UIManager !== 'undefined') {
                UIManager.showModal('review');
            }
        });
    }
    
    const restartBtn = document.getElementById('restartQuiz');
    if (restartBtn) {
        restartBtn.addEventListener('click', restartApplication);
    }
}

// Handle start form submission
function handleStartFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('studentName').value.trim();
    const program = document.getElementById('programSelect').value;
    
    if (!name || !program) {
        alert('Please enter your name and select a program.');
        return;
    }
    
    // Store student information
    appState.studentName = name;
    appState.selectedProgram = program;
    appState.startTime = new Date();
    
    console.log('Starting orientation for:', name, program);
    
    // Start the quiz
    if (typeof QuizEngine !== 'undefined') {
        QuizEngine.startQuiz(name, program);
    }
    
    if (typeof UIManager !== 'undefined') {
        UIManager.showScreen('quiz');
    }
}

// Complete loading and show start screen
function completeLoading() {
    updateLoadingStatus('Ready!');
    appState.isLoading = false;
    appState.currentScreen = 'start';
    
    setTimeout(() => {
        if (typeof UIManager !== 'undefined') {
            UIManager.showScreen('start');
        } else {
            // Fallback manual screen switching
            document.getElementById('loadingScreen').classList.remove('active');
            document.getElementById('startScreen').classList.add('active');
            
            // Show action bar
            const actionBar = document.getElementById('actionBar');
            if (actionBar) {
                actionBar.classList.remove('hidden');
            }
        }
    }, 500);
}

// Restart application
function restartApplication() {
    // Reset application state
    appState = {
        isLoading: false,
        studentName: '',
        selectedProgram: '',
        currentScreen: 'start',
        startTime: null,
        endTime: null
    };
    
    // Reset form
    const startForm = document.getElementById('startForm');
    if (startForm) {
        startForm.reset();
    }
    
    // Reset quiz engine
    if (typeof QuizEngine !== 'undefined') {
        QuizEngine.reset();
    }
    
    // Show start screen
    if (typeof UIManager !== 'undefined') {
        UIManager.showScreen('start');
    }
}

// Export for global access
if (typeof window !== 'undefined') {
    window.App = {
        state: appState,
        updateLoadingStatus,
        restart: restartApplication
    };
}

console.log('Genesis Orientation App loaded successfully - Cache Break v1.0');