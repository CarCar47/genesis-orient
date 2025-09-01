// UI Manager for Genesis Vocational Institute Orientation
// Handles all DOM manipulations, screen transitions, and user interactions

class UIManager {
    constructor(quizEngine) {
        this.quizEngine = quizEngine;
        this.initializeElements();
        this.bindEvents();
    }

    // Initialize DOM element references
    initializeElements() {
        // Screens
        this.loadingScreen = document.getElementById('loadingScreen');
        this.startScreen = document.getElementById('startScreen');
        this.quizScreen = document.getElementById('quizScreen');
        this.resultsScreen = document.getElementById('resultsScreen');

        // Debug: Check if essential elements exist
        if (!this.loadingScreen || !this.startScreen) {
            console.error('Critical elements missing:', {
                loadingScreen: !!this.loadingScreen,
                startScreen: !!this.startScreen
            });
        }

        // Start screen elements
        this.startForm = document.getElementById('startForm');
        this.studentNameInput = document.getElementById('studentName');
        this.programSelect = document.getElementById('programSelect');

        // Quiz screen elements
        this.progressFill = document.getElementById('progressFill');
        this.questionCounter = document.getElementById('questionCounter');
        this.descriptionText = document.getElementById('descriptionText');
        this.questionText = document.getElementById('questionText');
        this.choicesContainer = document.getElementById('choicesContainer');
        this.questionCard = document.getElementById('questionCard');
        this.feedbackCard = document.getElementById('feedbackCard');
        this.feedbackIcon = document.getElementById('feedbackIcon');
        this.feedbackText = document.getElementById('feedbackText');
        this.continueBtn = document.getElementById('continueBtn');

        // Results screen elements
        this.scorePercentage = document.getElementById('scorePercentage');
        this.letterGrade = document.getElementById('letterGrade');
        this.correctAnswers = document.getElementById('correctAnswers');
        this.incorrectAnswers = document.getElementById('incorrectAnswers');
        this.timeSpent = document.getElementById('timeSpent');
        this.downloadCertificate = document.getElementById('downloadCertificate');
        this.reviewAnswers = document.getElementById('reviewAnswers');
        this.restartQuiz = document.getElementById('restartQuiz');

        // Modals
        this.modalOverlay = document.getElementById('modalOverlay');
        this.howItWorksModal = document.getElementById('howItWorksModal');
        this.reviewModal = document.getElementById('reviewModal');
        this.exitModal = document.getElementById('exitModal');
        this.reviewContent = document.getElementById('reviewContent');

        // Action bar
        this.actionBar = document.getElementById('actionBar');
        this.howItWorksBtn = document.getElementById('howItWorksBtn');
        this.exitBtn = document.getElementById('exitBtn');

        // Modal buttons
        this.closeModalBtns = document.querySelectorAll('.modal-close');
        this.confirmExitBtn = document.getElementById('confirmExit');
    }

    // Bind all event listeners
    bindEvents() {
        // Start form submission
        this.startForm.addEventListener('submit', (e) => this.handleStartFormSubmit(e));

        // Continue button
        this.continueBtn.addEventListener('click', () => this.handleContinue());

        // Results screen buttons
        this.downloadCertificate.addEventListener('click', () => this.handleDownloadCertificate());
        this.reviewAnswers.addEventListener('click', () => this.handleReviewAnswers());
        this.restartQuiz.addEventListener('click', () => this.handleRestartQuiz());

        // Action bar buttons
        this.howItWorksBtn.addEventListener('click', () => this.showHowItWorksModal());
        this.exitBtn.addEventListener('click', () => this.showExitModal());

        // Modal close buttons
        this.closeModalBtns.forEach(btn => {
            btn.addEventListener('click', () => this.closeAllModals());
        });

        // Confirm exit
        this.confirmExitBtn.addEventListener('click', () => this.handleConfirmExit());

        // Close modals when clicking overlay
        this.modalOverlay.addEventListener('click', (e) => {
            if (e.target === this.modalOverlay) {
                this.closeAllModals();
            }
        });

        this.howItWorksModal.addEventListener('click', (e) => {
            if (e.target === this.howItWorksModal) {
                this.closeAllModals();
            }
        });

        this.reviewModal.addEventListener('click', (e) => {
            if (e.target === this.reviewModal) {
                this.closeAllModals();
            }
        });

        this.exitModal.addEventListener('click', (e) => {
            if (e.target === this.exitModal) {
                this.closeAllModals();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeAllModals();
            }
        });
    }

    // Show loading screen initially
    showLoadingScreen() {
        console.log('Showing loading screen');
        this.hideAllScreens();
        if (this.loadingScreen) {
            this.loadingScreen.classList.add('active');
        }
    }

    // Show start screen
    showStartScreen() {
        console.log('Attempting to show start screen...');
        
        // Direct DOM manipulation as backup
        const loadingEl = document.getElementById('loadingScreen');
        const startEl = document.getElementById('startScreen');
        
        console.log('Elements found:', {
            loading: !!loadingEl,
            start: !!startEl
        });
        
        if (loadingEl) {
            loadingEl.classList.remove('active');
            loadingEl.style.display = 'none';
        }
        
        if (startEl) {
            startEl.classList.add('active');
            startEl.style.display = 'block';
            console.log('Start screen should be visible now');
        } else {
            console.error('Start screen element not found!');
        }
        
        if (this.actionBar) {
            this.actionBar.classList.add('hidden');
        }
    }

    // Show quiz screen
    showQuizScreen() {
        this.hideAllScreens();
        this.quizScreen.classList.add('active');
        this.actionBar.classList.remove('hidden');
        this.loadCurrentQuestion();
    }

    // Show results screen
    showResultsScreen() {
        this.hideAllScreens();
        this.resultsScreen.classList.add('active');
        this.actionBar.classList.add('hidden');
        this.displayResults();
    }

    // Hide all screens
    hideAllScreens() {
        const screens = document.querySelectorAll('.screen');
        console.log('Found screens:', screens.length);
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
    }

    // Handle start form submission
    handleStartFormSubmit(e) {
        e.preventDefault();
        
        const studentName = this.studentNameInput.value.trim();
        const selectedProgram = this.programSelect.value;

        // Validate input
        if (!studentName) {
            alert('Please enter your full name.');
            this.studentNameInput.focus();
            return;
        }

        if (!selectedProgram) {
            alert('Please select a program.');
            this.programSelect.focus();
            return;
        }

        // Initialize quiz with student data
        this.quizEngine.initQuiz(studentName, selectedProgram);
        
        // Show quiz screen
        this.showQuizScreen();
    }

    // Load and display current question
    loadCurrentQuestion() {
        const currentQuestion = this.quizEngine.getCurrentQuestion();
        
        if (!currentQuestion) {
            this.showResultsScreen();
            return;
        }

        // Update progress
        const progress = this.quizEngine.getProgress();
        this.progressFill.style.width = `${progress}%`;
        this.questionCounter.textContent = `Question ${this.quizEngine.getCurrentQuestionNumber()} of ${this.quizEngine.totalQuestions}`;

        // Display question content
        this.descriptionText.textContent = currentQuestion.description;
        this.questionText.textContent = currentQuestion.question.text;

        // Hide feedback card and show question card
        this.feedbackCard.classList.add('hidden');
        this.questionCard.classList.remove('hidden');

        // Create choice buttons
        this.renderChoices(currentQuestion.question.choices);
    }

    // Render choice buttons
    renderChoices(choices) {
        this.choicesContainer.innerHTML = '';

        choices.forEach((choice, index) => {
            const button = document.createElement('button');
            button.className = 'choice-btn';
            button.textContent = choice;
            button.addEventListener('click', () => this.handleChoiceSelect(index));
            this.choicesContainer.appendChild(button);
        });
    }

    // Handle choice selection
    handleChoiceSelect(selectedIndex) {
        // Disable all choice buttons
        const choiceBtns = this.choicesContainer.querySelectorAll('.choice-btn');
        choiceBtns.forEach(btn => btn.disabled = true);

        // Submit answer and get feedback
        const result = this.quizEngine.submitAnswer(selectedIndex);

        // Style the buttons based on result
        choiceBtns.forEach((btn, index) => {
            if (index === result.correctIndex) {
                btn.classList.add('correct');
            } else if (index === selectedIndex && !result.isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        // Show feedback after a brief delay
        setTimeout(() => {
            this.showFeedback(result);
        }, 1000);
    }

    // Show feedback for the selected answer
    showFeedback(result) {
        // Hide question card
        this.questionCard.classList.add('hidden');

        // Set up feedback content
        this.feedbackIcon.className = `feedback-icon ${result.isCorrect ? 'correct' : 'incorrect'}`;
        this.feedbackIcon.textContent = result.isCorrect ? '✓' : '✗';
        this.feedbackText.textContent = result.feedback;

        // Show feedback card
        this.feedbackCard.classList.remove('hidden');
    }

    // Handle continue button click
    handleContinue() {
        const hasNextQuestion = this.quizEngine.nextQuestion();
        
        if (hasNextQuestion) {
            this.loadCurrentQuestion();
        } else {
            this.showResultsScreen();
        }
    }

    // Display quiz results
    displayResults() {
        const results = this.quizEngine.getResults();

        // Update result values
        this.scorePercentage.textContent = `${results.percentage}%`;
        this.letterGrade.textContent = results.grade;
        this.correctAnswers.textContent = results.correctAnswers;
        this.incorrectAnswers.textContent = results.incorrectAnswers;
        this.timeSpent.textContent = results.timeSpent;

        // Add grade-specific styling
        this.letterGrade.className = `letter-grade grade-${results.grade.toLowerCase()}`;
    }

    // Handle certificate download
    handleDownloadCertificate() {
        try {
            this.quizEngine.generateCertificate();
        } catch (error) {
            console.error('Error generating certificate:', error);
            alert('Error generating certificate. Please try again.');
        }
    }

    // Handle review answers
    handleReviewAnswers() {
        const reviewData = this.quizEngine.getReviewData();
        this.populateReviewModal(reviewData);
        this.showModal(this.reviewModal);
    }

    // Populate review modal with answer data
    populateReviewModal(reviewData) {
        this.reviewContent.innerHTML = '';

        reviewData.forEach((answer, index) => {
            const reviewQuestion = document.createElement('div');
            reviewQuestion.className = `review-question ${answer.isCorrect ? 'correct' : 'incorrect'}`;

            reviewQuestion.innerHTML = `
                <h4>Question ${index + 1}</h4>
                <p class="question-text">${answer.questionText}</p>
                <div class="review-choices">
                    ${answer.choices.map((choice, choiceIndex) => {
                        let choiceClass = 'review-choice';
                        if (choiceIndex === answer.userChoice) {
                            choiceClass += answer.isCorrect ? ' user-choice' : ' incorrect-choice';
                        }
                        if (choiceIndex === answer.correctChoice && !answer.isCorrect) {
                            choiceClass += ' correct-answer';
                        }
                        return `<div class="${choiceClass}">${choice}</div>`;
                    }).join('')}
                </div>
                <p><strong>Result:</strong> ${answer.isCorrect ? 'Correct' : 'Incorrect'}</p>
            `;

            this.reviewContent.appendChild(reviewQuestion);
        });
    }

    // Handle restart quiz
    handleRestartQuiz() {
        if (confirm('Are you sure you want to restart the orientation? Your current progress will be lost.')) {
            this.quizEngine.resetQuiz();
            this.clearStartForm();
            this.showStartScreen();
        }
    }

    // Clear start form
    clearStartForm() {
        this.studentNameInput.value = '';
        this.programSelect.value = '';
    }

    // Show how it works modal
    showHowItWorksModal() {
        this.showModal(this.howItWorksModal);
    }

    // Show exit modal
    showExitModal() {
        this.showModal(this.exitModal);
    }

    // Handle confirm exit
    handleConfirmExit() {
        this.closeAllModals();
        this.quizEngine.resetQuiz();
        this.clearStartForm();
        this.showStartScreen();
    }

    // Show specific modal
    showModal(modal) {
        this.closeAllModals();
        modal.classList.remove('hidden');
        
        // Focus management for accessibility
        const focusableElements = modal.querySelectorAll('button, input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }

    // Close all modals
    closeAllModals() {
        this.modalOverlay.classList.add('hidden');
        this.howItWorksModal.classList.add('hidden');
        this.reviewModal.classList.add('hidden');
        this.exitModal.classList.add('hidden');
    }

    // Add ARIA announcements for screen readers
    announceToScreenReader(message) {
        const announcement = document.createElement('div');
        announcement.setAttribute('aria-live', 'polite');
        announcement.setAttribute('aria-atomic', 'true');
        announcement.className = 'sr-only';
        announcement.textContent = message;
        
        document.body.appendChild(announcement);
        
        setTimeout(() => {
            document.body.removeChild(announcement);
        }, 1000);
    }

    // Update progress announcement
    announceProgress() {
        const progress = this.quizEngine.getCurrentQuestionNumber();
        const total = this.quizEngine.totalQuestions;
        this.announceToScreenReader(`Question ${progress} of ${total}`);
    }

    // Initialize loading sequence
    initializeApp() {
        console.log('Initializing app...');
        this.showLoadingScreen();
        
        // Much shorter loading time for testing
        setTimeout(() => {
            console.log('Loading complete, switching to start screen...');
            updateLoadingStatus('Loading complete!');
            this.showStartScreen();
        }, 500);
    }
}

// Make UIManager available globally
window.UIManager = UIManager;