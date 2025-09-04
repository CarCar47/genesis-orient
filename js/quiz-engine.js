// Quiz Engine for Genesis Vocational Institute Orientation
// Handles quiz logic, scoring, and certificate generation

const QuizEngine = {
    // Quiz state
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: [],
    startTime: null,
    endTime: null,
    studentName: '',
    selectedProgram: '',
    
    // Initialize quiz engine
    init() {
        console.log('Initializing Quiz Engine');
        this.reset();
        return true;
    },
    
    // Reset quiz state
    reset() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.studentName = '';
        this.selectedProgram = '';
    },
    
    // Start quiz
    startQuiz(studentName, selectedProgram) {
        console.log(`Starting quiz for ${studentName} in ${selectedProgram} program`);
        
        this.studentName = studentName;
        this.selectedProgram = selectedProgram;
        this.startTime = new Date();
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        
        // Load first question
        this.loadCurrentQuestion();
    },
    
    // Load current question
    loadCurrentQuestion() {
        if (!window.questions || this.currentQuestionIndex >= window.questions.length) {
            this.completeQuiz();
            return;
        }
        
        const currentQuestion = window.questions[this.currentQuestionIndex];
        
        // Update progress
        if (typeof UIManager !== 'undefined') {
            UIManager.updateProgress(this.currentQuestionIndex + 1, window.questions.length);
            UIManager.displayQuestion(currentQuestion);
        }
    },
    
    // Submit answer
    submitAnswer(selectedIndex) {
        if (!window.questions || this.currentQuestionIndex >= window.questions.length) {
            return;
        }
        
        const currentQuestion = window.questions[this.currentQuestionIndex];
        const isCorrect = selectedIndex === currentQuestion.question.correctIndex;
        
        // Record answer
        this.userAnswers.push({
            questionId: currentQuestion.id,
            selectedIndex: selectedIndex,
            isCorrect: isCorrect,
            timestamp: new Date()
        });
        
        // Update score
        if (isCorrect) {
            this.score++;
        }
        
        // Show feedback - handle bilingual structure
        let feedbackText;
        if (typeof currentQuestion.question.feedbackCorrect === 'object') {
            // Bilingual format - get current language
            const lang = typeof LanguageManager !== 'undefined' ? 
                LanguageManager.getCurrentLanguage() : 'en';
            feedbackText = isCorrect 
                ? (currentQuestion.question.feedbackCorrect[lang] || currentQuestion.question.feedbackCorrect['en'])
                : (currentQuestion.question.feedbackIncorrect[lang] || currentQuestion.question.feedbackIncorrect['en']);
        } else {
            // Legacy format - direct string
            feedbackText = isCorrect 
                ? currentQuestion.question.feedbackCorrect
                : currentQuestion.question.feedbackIncorrect;
        }
            
        if (typeof UIManager !== 'undefined') {
            UIManager.showFeedback(isCorrect, feedbackText);
        }
        
        console.log(`Question ${this.currentQuestionIndex + 1}: ${isCorrect ? 'Correct' : 'Incorrect'}`);
    },
    
    // Move to next question
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex >= window.questions.length) {
            this.completeQuiz();
        } else {
            this.loadCurrentQuestion();
        }
    },
    
    // Complete quiz
    completeQuiz() {
        this.endTime = new Date();
        
        const results = this.calculateResults();
        console.log('Quiz completed:', results);
        
        if (typeof UIManager !== 'undefined') {
            UIManager.showResults(results);
        }
    },
    
    // Calculate results
    calculateResults() {
        const totalQuestions = window.questions ? window.questions.length : 5;
        const percentage = Math.round((this.score / totalQuestions) * 100);
        const timeSpent = this.endTime - this.startTime;
        
        // Calculate grade
        let grade = 'F';
        if (percentage >= 90) grade = 'A';
        else if (percentage >= 80) grade = 'B';
        else if (percentage >= 70) grade = 'C';
        else if (percentage >= 60) grade = 'D';
        
        return {
            score: this.score,
            total: totalQuestions,
            correct: this.score,
            incorrect: totalQuestions - this.score,
            percentage: percentage,
            grade: grade,
            timeSpent: timeSpent,
            timeFormatted: this.formatTime(timeSpent),
            startTime: this.startTime,
            endTime: this.endTime
        };
    },
    
    // Format time duration
    formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    },
    
    // Download certificate
    downloadCertificate() {
        // Check grade eligibility first
        const results = this.calculateResults();
        const failingGrades = ['F', 'D', 'C'];
        
        if (failingGrades.includes(results.grade)) {
            alert('Certificate not available. A passing grade of B (80%) or higher is required. Please restart the orientation to try again.');
            return;
        }
        
        // Check if jsPDF is loaded
        if (typeof window.jspdf === 'undefined') {
            console.error('jsPDF library not loaded');
            if (window.jsPDFError) {
                alert('PDF generation is currently unavailable due to network issues. Please check your internet connection and try again.');
            } else {
                alert('PDF library is still loading. Please wait a moment and try again.');
            }
            return;
        }
        
        try {
            const results = this.calculateResults();
            console.log('Generating certificate for:', this.studentName, results);
            
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Certificate content
            const completionDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Add border
            doc.setLineWidth(3);
            doc.setDrawColor(44, 62, 80); // Primary color
            doc.rect(10, 10, 190, 277);
            
            // Header with school logo space
            doc.setFontSize(24);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(44, 62, 80);
            doc.text('CERTIFICATE OF COMPLETION', 105, 40, { align: 'center' });
            
            doc.setFontSize(18);
            doc.setTextColor(52, 152, 219);
            doc.text('Student Orientation Program', 105, 55, { align: 'center' });
            
            // Decorative line
            doc.setLineWidth(1);
            doc.setDrawColor(52, 152, 219);
            doc.line(40, 65, 170, 65);
            
            // Body
            doc.setFontSize(14);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            doc.text('This is to certify that', 105, 85, { align: 'center' });
            
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(44, 62, 80);
            doc.text(this.studentName.toUpperCase(), 105, 105, { align: 'center' });
            
            // Underline for name
            doc.setLineWidth(0.5);
            doc.setDrawColor(52, 152, 219);
            doc.line(30, 110, 180, 110);
            
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            doc.text(`has successfully completed the orientation requirements for the`, 105, 130, { align: 'center' });
            
            doc.setFontSize(14);
            doc.setFont('helvetica', 'bold');
            doc.setTextColor(44, 62, 80);
            doc.text(`${this.selectedProgram} Program`, 105, 145, { align: 'center' });
            
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.setTextColor(0, 0, 0);
            doc.text(`at Genesis Vocational Institute on ${completionDate}`, 105, 160, { align: 'center' });
            
            // Performance details
            doc.setFontSize(11);
            doc.text(`Final Score: ${results.percentage}% (Grade: ${results.grade})`, 105, 185, { align: 'center' });
            doc.text(`Completion Time: ${results.timeFormatted}`, 105, 200, { align: 'center' });
            doc.text(`Questions Answered Correctly: ${results.correct} out of ${results.total}`, 105, 215, { align: 'center' });
            
            // Footer
            doc.setFontSize(10);
            doc.setTextColor(100, 100, 100);
            doc.text('Genesis Vocational Institute', 105, 245, { align: 'center' });
            doc.text('12851 SW 42nd Street, 2nd Floor #131, Miami, Florida 33175', 105, 255, { align: 'center' });
            doc.text('Phone: (305) 223-0506 | Email: info@gvi.edu | Website: www.gvi.edu', 105, 265, { align: 'center' });
            
            // Generate filename
            const timestamp = new Date().toISOString().split('T')[0];
            const safeName = this.studentName.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase();
            const filename = `genesis-orientation-certificate-${safeName}-${timestamp}.pdf`;
            
            // Download
            doc.save(filename);
            
            console.log('Certificate downloaded successfully:', filename);
            alert('Certificate downloaded successfully!');
            
        } catch (error) {
            console.error('Error generating certificate:', error);
            alert('Error generating certificate. Please try again.');
        }
    },
    
    // Get user answers for review
    getUserAnswers() {
        return this.userAnswers;
    },
    
    // Get quiz statistics
    getStatistics() {
        const results = this.calculateResults();
        return {
            studentName: this.studentName,
            selectedProgram: this.selectedProgram,
            ...results,
            questionsData: this.userAnswers
        };
    }
};

// Export for global use
if (typeof window !== 'undefined') {
    window.QuizEngine = QuizEngine;
}

console.log('Quiz Engine loaded successfully');