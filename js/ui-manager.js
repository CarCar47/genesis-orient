// UI Manager for Genesis Vocational Institute Orientation
// Handles all DOM manipulation and screen transitions

const UIManager = {
    // Initialize UI Manager
    init() {
        console.log('Initializing UI Manager');
        this.setupModalHandlers();
        this.setupScreenTransitions();
        return true;
    },
    
    // Show specific screen
    showScreen(screenName) {
        console.log(`Switching to ${screenName} screen`);
        
        // Hide all screens
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        const targetScreen = document.getElementById(`${screenName}Screen`);
        if (targetScreen) {
            targetScreen.classList.add('active');
            
            // Handle screen-specific logic
            this.handleScreenChange(screenName);
        } else {
            console.error(`Screen ${screenName} not found`);
        }
    },
    
    // Handle screen-specific setup
    handleScreenChange(screenName) {
        const actionBar = document.getElementById('actionBar');
        
        switch(screenName) {
            case 'loading':
                if (actionBar) actionBar.classList.add('hidden');
                break;
            case 'start':
                if (actionBar) actionBar.classList.remove('hidden');
                this.focusFirstInput();
                break;
            case 'quiz':
                if (actionBar) actionBar.classList.remove('hidden');
                break;
            case 'results':
                if (actionBar) actionBar.classList.add('hidden');
                break;
        }
    },
    
    // Focus first input field
    focusFirstInput() {
        const firstInput = document.getElementById('studentName');
        if (firstInput) {
            setTimeout(() => firstInput.focus(), 100);
        }
    },
    
    // Update quiz progress
    updateProgress(currentQuestion, totalQuestions) {
        const progressFill = document.getElementById('progressFill');
        const questionCounter = document.getElementById('questionCounter');
        
        const percentage = (currentQuestion / totalQuestions) * 100;
        
        if (progressFill) {
            progressFill.style.width = `${percentage}%`;
        }
        
        if (questionCounter) {
            questionCounter.textContent = `Question ${currentQuestion} of ${totalQuestions}`;
        }
    },
    
    // Display question
    displayQuestion(questionData) {
        const descriptionEl = document.getElementById('descriptionText');
        const questionEl = document.getElementById('questionText');
        const choicesEl = document.getElementById('choicesContainer');
        
        // Get localized question data
        let localizedData = questionData;
        if (typeof LanguageManager !== 'undefined') {
            localizedData = LanguageManager.getCurrentQuestionData(questionData);
        }
        
        if (descriptionEl) {
            descriptionEl.textContent = localizedData.description;
        }
        
        if (questionEl) {
            questionEl.textContent = localizedData.question.text;
        }
        
        if (choicesEl) {
            choicesEl.innerHTML = '';
            
            localizedData.question.choices.forEach((choice, index) => {
                const button = document.createElement('button');
                button.className = 'choice-btn';
                button.textContent = choice;
                button.addEventListener('click', () => this.handleChoiceClick(index, button));
                choicesEl.appendChild(button);
            });
        }
        
        // Hide feedback initially
        this.hideFeedback();
    },
    
    // Handle choice selection
    handleChoiceClick(selectedIndex, buttonElement) {
        // Disable all choice buttons
        const choiceButtons = document.querySelectorAll('.choice-btn');
        choiceButtons.forEach(btn => {
            btn.disabled = true;
            btn.classList.remove('selected');
        });
        
        // Mark selected choice
        buttonElement.classList.add('selected');
        
        // Trigger quiz engine to process answer
        if (typeof QuizEngine !== 'undefined') {
            QuizEngine.submitAnswer(selectedIndex);
        }
    },
    
    // Show feedback
    showFeedback(isCorrect, feedbackText) {
        const inlineFeedback = document.getElementById('inlineFeedback');
        const feedbackIcon = document.getElementById('feedbackIcon');
        const feedbackTextEl = document.getElementById('feedbackText');
        
        if (inlineFeedback) {
            inlineFeedback.classList.remove('hidden');
        }
        
        if (feedbackIcon) {
            feedbackIcon.textContent = isCorrect ? '✓' : '✗';
            feedbackIcon.className = `feedback-icon ${isCorrect ? 'correct' : 'incorrect'}`;
        }
        
        if (feedbackTextEl) {
            feedbackTextEl.textContent = feedbackText;
        }
        
        // Setup continue button
        const continueBtn = document.getElementById('continueBtn');
        if (continueBtn) {
            continueBtn.onclick = () => {
                if (typeof QuizEngine !== 'undefined') {
                    QuizEngine.nextQuestion();
                }
            };
        }
    },
    
    // Hide feedback
    hideFeedback() {
        const inlineFeedback = document.getElementById('inlineFeedback');
        if (inlineFeedback) {
            inlineFeedback.classList.add('hidden');
        }
    },
    
    // Show quiz results
    showResults(results) {
        const scorePercentage = document.getElementById('scorePercentage');
        const letterGrade = document.getElementById('letterGrade');
        const correctAnswers = document.getElementById('correctAnswers');
        const incorrectAnswers = document.getElementById('incorrectAnswers');
        const timeSpent = document.getElementById('timeSpent');
        
        if (scorePercentage) {
            scorePercentage.textContent = `${results.percentage}%`;
        }
        
        if (letterGrade) {
            letterGrade.textContent = results.grade;
            letterGrade.className = `letter-grade grade-${results.grade.toLowerCase()}`;
        }
        
        if (correctAnswers) {
            correctAnswers.textContent = results.correct;
        }
        
        if (incorrectAnswers) {
            incorrectAnswers.textContent = results.incorrect;
        }
        
        if (timeSpent) {
            timeSpent.textContent = results.timeFormatted;
        }
        
        // Handle certificate download visibility based on grade
        const downloadBtn = document.getElementById('downloadCertificate');
        const resultsActions = document.querySelector('.results-actions');
        const failingGrades = ['F', 'D', 'C'];
        const isPassing = !failingGrades.includes(results.grade);
        
        if (downloadBtn) {
            if (isPassing) {
                downloadBtn.style.display = 'inline-block';
            } else {
                downloadBtn.style.display = 'none';
            }
        }
        
        // Add or update failing message
        let failingMessage = document.getElementById('failingGradeMessage');
        if (!isPassing) {
            if (!failingMessage) {
                failingMessage = document.createElement('div');
                failingMessage.id = 'failingGradeMessage';
                failingMessage.className = 'failing-grade-message';
                failingMessage.innerHTML = `
                    <div class="message-content">
                        <h4>Orientation Not Complete</h4>
                        <p>A passing grade of B (80%) or higher is required to complete the orientation program. 
                        Please restart the orientation and review the material carefully to achieve a passing score.</p>
                    </div>
                `;
                // Insert before the actions
                if (resultsActions) {
                    resultsActions.parentNode.insertBefore(failingMessage, resultsActions);
                }
            }
        } else {
            // Remove failing message if it exists and grade is now passing
            if (failingMessage) {
                failingMessage.remove();
            }
        }
        
        // Show results screen
        this.showScreen('results');
    },
    
    // Modal management
    showModal(modalType) {
        let modalId;
        
        switch(modalType) {
            case 'howItWorks':
                modalId = 'howItWorksModal';
                break;
            case 'review':
                modalId = 'reviewModal';
                this.populateReviewModal();
                break;
            case 'exit':
                modalId = 'exitModal';
                this.setupExitModal();
                break;
            default:
                modalId = 'modalOverlay';
                break;
        }
        
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            modal.style.display = 'flex';
        }
    },
    
    // Hide all modals
    hideAllModals() {
        const modals = document.querySelectorAll('.modal-overlay');
        modals.forEach(modal => {
            modal.classList.add('hidden');
            modal.style.display = 'none';
        });
    },
    
    // Setup modal event handlers
    setupModalHandlers() {
        // Close modal when clicking overlay
        document.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal-overlay')) {
                this.hideAllModals();
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.hideAllModals();
            }
        });
    },
    
    // Populate review modal with answers
    populateReviewModal() {
        const reviewContent = document.getElementById('reviewContent');
        if (!reviewContent || typeof QuizEngine === 'undefined') return;
        
        const userAnswers = QuizEngine.getUserAnswers();
        let html = '<div class="review-list">';
        
        userAnswers.forEach((answer, index) => {
            const question = questions[index];
            const isCorrect = answer.selectedIndex === question.question.correctIndex;
            
            html += `
                <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                    <div class="review-question">
                        <strong>Q${index + 1}:</strong> ${question.question.text}
                    </div>
                    <div class="review-answer">
                        <strong>Your answer:</strong> ${question.question.choices[answer.selectedIndex]}
                        <span class="review-status">${isCorrect ? '✓ Correct' : '✗ Incorrect'}</span>
                    </div>
                    ${!isCorrect ? `
                        <div class="review-correct">
                            <strong>Correct answer:</strong> ${question.question.choices[question.question.correctIndex]}
                        </div>
                    ` : ''}
                </div>
            `;
        });
        
        html += '</div>';
        reviewContent.innerHTML = html;
    },
    
    // Setup exit modal
    setupExitModal() {
        const confirmBtn = document.getElementById('confirmExit');
        if (confirmBtn) {
            confirmBtn.onclick = () => {
                // Redirect to start or close window
                if (typeof App !== 'undefined') {
                    App.restart();
                }
                this.hideAllModals();
            };
        }
    },
    
    // Setup screen transitions with animations
    setupScreenTransitions() {
        const style = document.createElement('style');
        style.textContent = `
            .screen {
                transition: opacity 0.3s ease-in-out;
            }
            
            .screen:not(.active) {
                opacity: 0;
                pointer-events: none;
            }
            
            .screen.active {
                opacity: 1;
                pointer-events: auto;
            }
        `;
        document.head.appendChild(style);
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.UIManager = UIManager;
}

console.log('UI Manager loaded successfully');