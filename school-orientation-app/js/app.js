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

class OrientationApp {
    constructor() {
        this.quizEngine = null;
        this.uiManager = null;
        this.isInitialized = false;
    }

    // Initialize the application
    init() {
        if (this.isInitialized) {
            return;
        }

        try {
            // Wait for DOM to be fully loaded
            console.log('DOM readyState:', document.readyState);
            if (document.readyState === 'loading') {
                console.log('Waiting for DOM to load...');
                document.addEventListener('DOMContentLoaded', () => this.startApp());
            } else {
                console.log('DOM already loaded, starting immediately');
                // Add small delay to ensure all scripts are loaded
                setTimeout(() => this.startApp(), 100);
            }
        } catch (error) {
            console.error('Error initializing application:', error);
            this.showErrorMessage('Failed to initialize application. Please refresh the page.');
        }
    }

    // Start the application after DOM is ready
    startApp() {
        try {
            console.log('Starting app...');
            updateLoadingStatus('Checking dependencies...');
            
            // Check for required dependencies
            if (!this.checkDependencies()) {
                console.log('Dependencies check failed');
                updateLoadingStatus('ERROR: Missing dependencies!');
                return;
            }

            updateLoadingStatus('Initializing components...');
            console.log('Dependencies OK, initializing components...');
            
            // Initialize quiz engine
            this.quizEngine = new QuizEngine();
            console.log('Quiz engine initialized');

            // Initialize UI manager with quiz engine reference
            updateLoadingStatus('Setting up interface...');
            this.uiManager = new UIManager(this.quizEngine);
            console.log('UI manager initialized');

            // Register service worker for offline support
            this.registerServiceWorker();

            updateLoadingStatus('Starting orientation...');
            // Start the loading sequence
            this.uiManager.initializeApp();

            // Mark as initialized
            this.isInitialized = true;

            console.log('Genesis Orientation App initialized successfully');

        } catch (error) {
            console.error('Error starting application:', error);
            this.showErrorMessage('Failed to start application. Please refresh the page.');
        }
    }

    // Check if all required dependencies are loaded
    checkDependencies() {
        console.log('Checking dependencies...');
        const requiredGlobals = ['QuizEngine', 'UIManager', 'questions'];
        const missing = [];

        requiredGlobals.forEach(dep => {
            const exists = typeof window[dep] !== 'undefined';
            console.log(`${dep}:`, exists ? 'loaded' : 'MISSING');
            if (!exists) {
                missing.push(dep);
            }
        });

        if (missing.length > 0) {
            console.error('Missing dependencies:', missing);
            this.showErrorMessage(`Missing required files: ${missing.join(', ')}. Please refresh the page.`);
            return false;
        }

        // Check if jsPDF is loaded for certificate generation
        if (typeof window.jspdf === 'undefined') {
            console.warn('jsPDF not loaded - certificate download will not work');
        }

        // Validate questions data
        if (!Array.isArray(window.questions) || window.questions.length === 0) {
            console.error('Questions data is invalid or empty');
            this.showErrorMessage('Quiz questions could not be loaded. Please refresh the page.');
            return false;
        }

        return true;
    }

    // Register service worker for offline support
    registerServiceWorker() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js')
                .then(registration => {
                    console.log('Service Worker registered successfully:', registration);
                })
                .catch(error => {
                    console.log('Service Worker registration failed:', error);
                });
        } else {
            console.log('Service Worker not supported in this browser');
        }
    }

    // Show error message to user
    showErrorMessage(message) {
        // Try to find error container, or create one
        let errorContainer = document.getElementById('errorContainer');
        
        if (!errorContainer) {
            errorContainer = document.createElement('div');
            errorContainer.id = 'errorContainer';
            errorContainer.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background-color: #e74c3c;
                color: white;
                padding: 1rem 2rem;
                border-radius: 8px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
                z-index: 9999;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                max-width: 90vw;
                text-align: center;
            `;
            document.body.appendChild(errorContainer);
        }

        errorContainer.innerHTML = `
            <strong>Error:</strong> ${message}
            <button onclick="location.reload()" style="
                margin-left: 1rem;
                padding: 0.5rem 1rem;
                background: white;
                color: #e74c3c;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-weight: bold;
            ">Refresh Page</button>
        `;

        // Auto-hide after 10 seconds
        setTimeout(() => {
            if (errorContainer && errorContainer.parentNode) {
                errorContainer.parentNode.removeChild(errorContainer);
            }
        }, 10000);
    }

    // Handle global errors
    handleGlobalError(error, source, line, col) {
        console.error('Global error:', error, 'at', source, line, col);
        
        if (!this.isInitialized) {
            this.showErrorMessage('A critical error occurred during initialization. Please refresh the page.');
        }
    }

    // Handle unhandled promise rejections
    handleUnhandledRejection(event) {
        console.error('Unhandled promise rejection:', event.reason);
        
        // Don't show error for minor issues
        if (event.reason && typeof event.reason === 'string' && 
            event.reason.includes('Service Worker')) {
            return;
        }

        this.showErrorMessage('An unexpected error occurred. Please refresh the page if problems persist.');
    }

    // Clean up resources
    cleanup() {
        if (this.uiManager) {
            // Remove event listeners if needed
            this.uiManager = null;
        }
        
        if (this.quizEngine) {
            this.quizEngine = null;
        }
        
        this.isInitialized = false;
    }

    // Restart the application
    restart() {
        this.cleanup();
        this.init();
    }

    // Get application status for debugging
    getStatus() {
        return {
            initialized: this.isInitialized,
            hasQuizEngine: !!this.quizEngine,
            hasUIManager: !!this.uiManager,
            questionsLoaded: Array.isArray(window.questions) && window.questions.length > 0,
            jsPDFLoaded: typeof window.jspdf !== 'undefined',
            serviceWorkerSupported: 'serviceWorker' in navigator
        };
    }
}

// Global error handlers
window.addEventListener('error', (event) => {
    console.error('Global error caught:', event.error || event.message);
    if (window.orientationApp && window.orientationApp.handleGlobalError) {
        window.orientationApp.handleGlobalError(
            event.error || event.message,
            event.filename,
            event.lineno,
            event.colno
        );
    }
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
    if (window.orientationApp && window.orientationApp.handleUnhandledRejection) {
        window.orientationApp.handleUnhandledRejection(event);
    }
});

// Initialize the application when everything is loaded
let orientationApp;

// Immediate status update when script loads
updateLoadingStatus('Scripts loading...');

// Initialize with proper quiz functionality
setTimeout(() => {
    console.log('Initializing orientation app...');
    updateLoadingStatus('Loading components...');
    
    // Check if jsPDF loaded
    console.log('jsPDF available:', typeof window.jspdf !== 'undefined');
    
    try {
        // Initialize the full app
        orientationApp = new OrientationApp();
        window.orientationApp = orientationApp;
        
        updateLoadingStatus('Starting app...');
        
        // Simple direct transition to start screen
        setTimeout(() => {
            updateLoadingStatus('Ready!');
            
            const loading = document.getElementById('loadingScreen');
            const start = document.getElementById('startScreen');
            
            if (loading && start) {
                loading.classList.remove('active');
                loading.style.display = 'none';
                start.classList.add('active');
                start.style.display = 'block';
                
                // Initialize form handling
                const startForm = document.getElementById('startForm');
                if (startForm) {
                    startForm.addEventListener('submit', handleFormSubmit);
                }
                
                console.log('App ready - start screen displayed');
            }
        }, 1000);
    } catch (error) {
        console.error('Error initializing app:', error);
        updateLoadingStatus('Error loading app');
    }
}, 100);

// Handle form submission to start quiz
function handleFormSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('studentName').value.trim();
    const program = document.getElementById('programSelect').value;
    
    if (!name) {
        alert('Please enter your full name');
        return;
    }
    
    if (!program) {
        alert('Please select your program');
        return;
    }
    
    console.log('Starting quiz for:', name, program);
    
    // Store user info
    window.studentInfo = { name, program, startTime: new Date() };
    
    // Start quiz
    startQuiz();
}

// Start the quiz
function startQuiz() {
    const startScreen = document.getElementById('startScreen');
    const quizScreen = document.getElementById('quizScreen');
    
    if (startScreen && quizScreen) {
        // Reset quiz state
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = [];
        quizStartTime = new Date();
        quizEndTime = null;
        
        console.log('Quiz reset and started at:', quizStartTime);
        
        startScreen.classList.remove('active');
        startScreen.style.display = 'none';
        quizScreen.classList.add('active');
        quizScreen.style.display = 'block';
        
        // Load first question
        loadQuestion(0);
    }
}

// Simple quiz state
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizStartTime = null;
let quizEndTime = null;

// Load a question
function loadQuestion(index) {
    if (index >= window.questions.length) {
        showResults();
        return;
    }
    
    const question = window.questions[index];
    const progressFill = document.getElementById('progressFill');
    const questionCounter = document.getElementById('questionCounter');
    const descriptionText = document.getElementById('descriptionText');
    const questionText = document.getElementById('questionText');
    const choicesContainer = document.getElementById('choicesContainer');
    
    // Update progress
    const progress = ((index + 1) / window.questions.length) * 100;
    if (progressFill) progressFill.style.width = progress + '%';
    if (questionCounter) questionCounter.textContent = `Question ${index + 1} of ${window.questions.length}`;
    
    // Display question content
    if (descriptionText) descriptionText.textContent = question.description;
    if (questionText) questionText.textContent = question.question.text;
    
    // Create choices
    if (choicesContainer) {
        choicesContainer.innerHTML = '';
        question.question.choices.forEach((choice, choiceIndex) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice;
            button.onclick = () => selectAnswer(choiceIndex);
            choicesContainer.appendChild(button);
        });
    }
    
    // Hide feedback
    const feedbackCard = document.getElementById('feedbackCard');
    if (feedbackCard) feedbackCard.classList.add('hidden');
    
    const questionCard = document.getElementById('questionCard');
    if (questionCard) questionCard.classList.remove('hidden');
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    const question = window.questions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.question.correctIndex;
    
    // Store answer
    userAnswers.push({
        question: question.question.text,
        userChoice: selectedIndex,
        correctChoice: question.question.correctIndex,
        isCorrect: isCorrect
    });
    
    if (isCorrect) score++;
    
    // Show feedback
    showFeedback(isCorrect, question.question);
}

// Show feedback
function showFeedback(isCorrect, questionData) {
    const questionCard = document.getElementById('questionCard');
    const feedbackCard = document.getElementById('feedbackCard');
    const feedbackIcon = document.getElementById('feedbackIcon');
    const feedbackText = document.getElementById('feedbackText');
    const continueBtn = document.getElementById('continueBtn');
    
    if (questionCard) questionCard.classList.add('hidden');
    
    if (feedbackCard && feedbackIcon && feedbackText) {
        feedbackIcon.className = `feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`;
        feedbackIcon.textContent = isCorrect ? '✓' : '✗';
        feedbackText.textContent = isCorrect ? questionData.feedbackCorrect : questionData.feedbackIncorrect;
        feedbackCard.classList.remove('hidden');
    }
    
    if (continueBtn) {
        continueBtn.onclick = () => {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        };
    }
}

// Show results
function showResults() {
    // Record end time
    quizEndTime = new Date();
    console.log('Quiz ended at:', quizEndTime);
    
    const quizScreen = document.getElementById('quizScreen');
    const resultsScreen = document.getElementById('resultsScreen');
    
    if (quizScreen && resultsScreen) {
        quizScreen.classList.remove('active');
        quizScreen.style.display = 'none';
        resultsScreen.classList.add('active');
        resultsScreen.style.display = 'block';
        
        // Calculate results
        const percentage = Math.round((score / window.questions.length) * 100);
        const grade = percentage >= 90 ? 'A' : percentage >= 80 ? 'B' : percentage >= 70 ? 'C' : percentage >= 60 ? 'D' : 'F';
        
        // Calculate time spent
        let timeSpentText = '0:00';
        if (quizStartTime && quizEndTime) {
            const timeDiff = Math.floor((quizEndTime - quizStartTime) / 1000); // seconds
            const minutes = Math.floor(timeDiff / 60);
            const seconds = timeDiff % 60;
            timeSpentText = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            console.log('Time spent:', timeSpentText);
        }
        
        // Display results
        const scorePercentage = document.getElementById('scorePercentage');
        const letterGrade = document.getElementById('letterGrade');
        const correctAnswers = document.getElementById('correctAnswers');
        const incorrectAnswers = document.getElementById('incorrectAnswers');
        const timeSpent = document.getElementById('timeSpent');
        
        if (scorePercentage) scorePercentage.textContent = percentage + '%';
        if (letterGrade) letterGrade.textContent = grade;
        if (correctAnswers) correctAnswers.textContent = score;
        if (incorrectAnswers) incorrectAnswers.textContent = window.questions.length - score;
        if (timeSpent) timeSpent.textContent = timeSpentText;
        
        // Setup download certificate button (only for passing grades A and B)
        const downloadBtn = document.getElementById('downloadCertificate');
        if (downloadBtn) {
            if (grade === 'A' || grade === 'B') {
                // Show certificate download for passing grades
                downloadBtn.style.display = 'inline-block';
                downloadBtn.onclick = () => {
                    generateCertificate(window.studentInfo, { 
                        score, 
                        total: window.questions.length, 
                        percentage, 
                        grade, 
                        timeSpent: timeSpentText 
                    });
                };
            } else {
                // Hide certificate download for failing grades (C, D, F)
                downloadBtn.style.display = 'none';
            }
        }
        
        // Setup review answers button
        const reviewBtn = document.getElementById('reviewAnswers');
        if (reviewBtn) {
            reviewBtn.onclick = () => {
                showReviewModal();
            };
        }
        
        // Setup restart quiz button (only show for failing grades)
        const restartBtn = document.getElementById('restartQuiz');
        if (restartBtn) {
            if (grade === 'C' || grade === 'D' || grade === 'F') {
                // Show restart button for failing grades
                restartBtn.style.display = 'inline-block';
                restartBtn.onclick = () => {
                    if (confirm('You did not pass the orientation (grade: ' + grade + '). Would you like to restart and try again?')) {
                        restartOrientation();
                    }
                };
                
                // Show failure message explaining no certificate
                const failMessage = document.createElement('div');
                failMessage.style.cssText = `
                    background: #e74c3c;
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    text-align: center;
                    margin: 1rem 0;
                    font-weight: bold;
                `;
                failMessage.innerHTML = `❌ You did not pass the orientation (Grade: ${grade}). You must score 80% or higher (Grade A or B) to receive a certificate. Please retake the orientation.`;
                
                // Insert message before the results actions
                const actionsDiv = document.querySelector('.results-actions');
                if (actionsDiv) {
                    actionsDiv.parentNode.insertBefore(failMessage, actionsDiv);
                }
            } else {
                // Hide restart button for passing grades (A, B)
                restartBtn.style.display = 'none';
                
                // Show congratulations message for passing grades
                const passMessage = document.createElement('div');
                passMessage.style.cssText = `
                    background: #27ae60;
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    text-align: center;
                    margin: 1rem 0;
                    font-weight: bold;
                `;
                passMessage.innerHTML = `🎉 Congratulations! You passed the orientation with a grade of ${grade}!`;
                
                // Insert message before the results actions
                const actionsDiv = document.querySelector('.results-actions');
                if (actionsDiv) {
                    actionsDiv.parentNode.insertBefore(passMessage, actionsDiv);
                }
            }
        }
    }
}

// Generate certificate
function generateCertificate(studentInfo, results) {
    console.log('Attempting to generate certificate...');
    
    // Check if jsPDF is available
    if (typeof window.jspdf === 'undefined') {
        console.error('jsPDF library not loaded');
        alert('PDF library not available. Certificate cannot be generated.');
        return;
    }
    
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        console.log('jsPDF initialized successfully');
    
    // Certificate content
    doc.setFontSize(24);
    doc.text('Certificate of Completion', 105, 30, { align: 'center' });
    
    doc.setFontSize(16);
    doc.text('Student Orientation', 105, 50, { align: 'center' });
    
    doc.setFontSize(14);
    doc.text(`This certifies that ${studentInfo.name}`, 105, 80, { align: 'center' });
    doc.text(`has successfully completed the orientation for`, 105, 100, { align: 'center' });
    doc.text(`the ${studentInfo.program} program at`, 105, 120, { align: 'center' });
    
    doc.setFontSize(18);
    doc.text('Genesis Vocational Institute', 105, 140, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text(`Score: ${results.score}/${results.total} (${results.percentage}%) - Grade: ${results.grade}`, 105, 160, { align: 'center' });
    doc.text(`Time Spent: ${results.timeSpent}`, 105, 175, { align: 'center' });
    doc.text(`Completion Date: ${new Date().toLocaleDateString()}`, 105, 190, { align: 'center' });
    
    // School info
    doc.text('Genesis Vocational Institute', 105, 220, { align: 'center' });
    doc.text('12851 SW 42nd. Street 2nd Floor #131, Miami Florida 33175', 105, 235, { align: 'center' });
    doc.text('Ph: 305-223-05062 | Email: info@gvi.edu', 105, 250, { align: 'center' });
    
        // Save the PDF
        const fileName = `orientation-certificate-${studentInfo.name.replace(/\s+/g, '-')}.pdf`;
        doc.save(fileName);
        console.log('Certificate generated successfully:', fileName);
        
    } catch (error) {
        console.error('Error generating certificate:', error);
        alert('Error generating certificate: ' + error.message);
    }
}

// Show review modal with all answers
function showReviewModal() {
    const reviewModal = document.getElementById('reviewModal');
    const reviewContent = document.getElementById('reviewContent');
    
    if (reviewModal && reviewContent) {
        // Clear previous content
        reviewContent.innerHTML = '';
        
        // Create review content
        userAnswers.forEach((answer, index) => {
            const question = window.questions[index];
            const reviewDiv = document.createElement('div');
            reviewDiv.className = `review-question ${answer.isCorrect ? 'correct' : 'incorrect'}`;
            
            reviewDiv.innerHTML = `
                <h4>Question ${index + 1}</h4>
                <p><strong>Policy:</strong> ${question.description}</p>
                <p><strong>Question:</strong> ${answer.question}</p>
                <div class="review-choices">
                    ${question.question.choices.map((choice, choiceIndex) => {
                        let choiceClass = 'review-choice';
                        if (choiceIndex === answer.userChoice) {
                            choiceClass += answer.isCorrect ? ' user-choice correct' : ' user-choice incorrect';
                        }
                        if (choiceIndex === answer.correctChoice && !answer.isCorrect) {
                            choiceClass += ' correct-answer';
                        }
                        return `<div class="${choiceClass}">${choice}</div>`;
                    }).join('')}
                </div>
                <p><strong>Result:</strong> ${answer.isCorrect ? '✓ Correct' : '✗ Incorrect'}</p>
                ${!answer.isCorrect ? `<p><strong>Explanation:</strong> ${question.question.feedbackIncorrect}</p>` : ''}
            `;
            
            reviewContent.appendChild(reviewDiv);
        });
        
        // Show modal
        reviewModal.classList.remove('hidden');
        reviewModal.style.display = 'flex';
    }
}

// Restart orientation function
function restartOrientation() {
    // Reset all quiz state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    quizStartTime = null;
    quizEndTime = null;
    
    // Clear student info to require re-entry
    window.studentInfo = null;
    
    // Clear form values
    const nameInput = document.getElementById('studentName');
    const programSelect = document.getElementById('programSelect');
    if (nameInput) nameInput.value = '';
    if (programSelect) programSelect.value = '';
    
    // Hide all screens and show start screen
    const resultsScreen = document.getElementById('resultsScreen');
    const startScreen = document.getElementById('startScreen');
    
    if (resultsScreen && startScreen) {
        resultsScreen.classList.remove('active');
        resultsScreen.style.display = 'none';
        startScreen.classList.add('active');
        startScreen.style.display = 'block';
    }
    
    console.log('Orientation restarted - student must re-enter information');
}

// Close modal functionality
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
        modal.style.display = 'none';
    }
}

// Add event listeners for modal close buttons
setTimeout(() => {
    const closeButtons = document.querySelectorAll('.modal-close, .close-btn');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal-overlay');
            if (modal) {
                modal.classList.add('hidden');
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modal when clicking overlay
    const modalOverlays = document.querySelectorAll('.modal-overlay');
    modalOverlays.forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.add('hidden');
                overlay.style.display = 'none';
            }
        });
    });
}, 1000);

// Expose useful debugging functions
window.debugApp = () => {
    if (orientationApp && orientationApp.getStatus) {
        console.log('App Status:', orientationApp.getStatus());
    }
    console.log('Questions:', window.questions?.length || 0);
    console.log('Dependencies loaded:', {
        QuizEngine: typeof QuizEngine !== 'undefined',
        UIManager: typeof UIManager !== 'undefined',
        jsPDF: typeof window.jspdf !== 'undefined'
    });
};

// Console welcome message
console.log('%c🎓 Genesis Vocational Institute - Student Orientation', 
    'color: #2c3e50; font-size: 16px; font-weight: bold;');
console.log('%cApp initialized successfully. Type debugApp() for status.', 
    'color: #3498db; font-size: 12px;');

// Prevent right-click and F12 in production (optional security measure)
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    document.addEventListener('contextmenu', (e) => e.preventDefault());
    document.addEventListener('keydown', (e) => {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
        }
    });
}

// Performance monitoring
if (window.performance && window.performance.mark) {
    window.performance.mark('app-initialized');
    
    window.addEventListener('load', () => {
        window.performance.mark('app-loaded');
        
        setTimeout(() => {
            const navigation = performance.getEntriesByType('navigation')[0];
            console.log(`App loaded in ${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`);
        }, 0);
    });
}