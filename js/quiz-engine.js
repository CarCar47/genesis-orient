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
        
        // Show feedback
        const feedbackText = isCorrect 
            ? currentQuestion.question.feedbackCorrect
            : currentQuestion.question.feedbackIncorrect;
            
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
        if (typeof jsPDF === 'undefined') {
            console.error('jsPDF library not loaded');
            alert('PDF generation not available. Please check your internet connection.');
            return;
        }
        
        try {
            const results = this.calculateResults();
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            
            // Certificate content
            const completionDate = new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            
            // Header
            doc.setFontSize(20);
            doc.setFont('helvetica', 'bold');
            doc.text('Certificate of Completion', 105, 40, { align: 'center' });
            
            doc.setFontSize(16);
            doc.text('Student Orientation', 105, 55, { align: 'center' });
            
            // Body
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text('This certifies that', 105, 80, { align: 'center' });
            
            doc.setFontSize(16);
            doc.setFont('helvetica', 'bold');
            doc.text(this.studentName, 105, 100, { align: 'center' });
            
            doc.setFontSize(12);
            doc.setFont('helvetica', 'normal');
            doc.text(`has successfully completed the orientation for the ${this.selectedProgram} program`, 105, 120, { align: 'center' });
            doc.text(`at Genesis Vocational Institute on ${completionDate}.`, 105, 135, { align: 'center' });
            
            // Score
            doc.text(`Score: ${results.percentage}% (${results.grade})`, 105, 160, { align: 'center' });
            doc.text(`Time: ${results.timeFormatted}`, 105, 175, { align: 'center' });
            
            // Footer
            doc.setFontSize(10);
            doc.text('Genesis Vocational Institute', 105, 220, { align: 'center' });
            doc.text('12851 SW 42nd. Street 2nd Floor #131, Miami Florida 33175', 105, 235, { align: 'center' });
            doc.text('Ph: 305-223-05062 | Email: info@gvi.edu | Web: www.gvi.edu', 105, 250, { align: 'center' });
            
            // Generate filename
            const filename = `orientation-completion-${this.studentName.replace(/\s+/g, '-').toLowerCase()}-${new Date().toISOString().split('T')[0]}.pdf`;
            
            // Download
            doc.save(filename);
            
            console.log('Certificate downloaded:', filename);
            
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