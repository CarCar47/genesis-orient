// Quiz Engine for Genesis Vocational Institute Orientation
// Handles quiz logic, scoring, grading, and certificate generation

class QuizEngine {
    constructor() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.studentName = '';
        this.selectedProgram = '';
        this.questions = window.questions || [];
        this.totalQuestions = this.questions.length;
    }

    // Initialize quiz with student information
    initQuiz(studentName, selectedProgram) {
        this.studentName = studentName;
        this.selectedProgram = selectedProgram;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = new Date();
        this.endTime = null;
    }

    // Get current question data
    getCurrentQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            return this.questions[this.currentQuestionIndex];
        }
        return null;
    }

    // Submit answer for current question
    submitAnswer(selectedIndex) {
        const currentQuestion = this.getCurrentQuestion();
        if (!currentQuestion) return null;

        const isCorrect = selectedIndex === currentQuestion.question.correctIndex;
        
        // Store user answer
        this.userAnswers.push({
            questionId: currentQuestion.id,
            questionText: currentQuestion.question.text,
            description: currentQuestion.description,
            choices: currentQuestion.question.choices,
            userChoice: selectedIndex,
            correctChoice: currentQuestion.question.correctIndex,
            isCorrect: isCorrect,
            feedbackCorrect: currentQuestion.question.feedbackCorrect,
            feedbackIncorrect: currentQuestion.question.feedbackIncorrect
        });

        // Update score
        if (isCorrect) {
            this.score++;
        }

        return {
            isCorrect: isCorrect,
            feedback: isCorrect ? 
                currentQuestion.question.feedbackCorrect : 
                currentQuestion.question.feedbackIncorrect,
            correctIndex: currentQuestion.question.correctIndex,
            userIndex: selectedIndex
        };
    }

    // Move to next question
    nextQuestion() {
        this.currentQuestionIndex++;
        return this.currentQuestionIndex < this.questions.length;
    }

    // Check if quiz is complete
    isQuizComplete() {
        return this.currentQuestionIndex >= this.questions.length;
    }

    // Get current progress percentage
    getProgress() {
        return Math.round((this.currentQuestionIndex / this.totalQuestions) * 100);
    }

    // Get quiz results
    getResults() {
        if (!this.endTime) {
            this.endTime = new Date();
        }

        const percentage = Math.round((this.score / this.totalQuestions) * 100);
        const timeSpent = this.calculateTimeSpent();
        const grade = this.calculateGrade(percentage);

        return {
            score: this.score,
            totalQuestions: this.totalQuestions,
            percentage: percentage,
            grade: grade,
            timeSpent: timeSpent,
            correctAnswers: this.score,
            incorrectAnswers: this.totalQuestions - this.score,
            userAnswers: this.userAnswers
        };
    }

    // Calculate letter grade based on percentage
    calculateGrade(percentage) {
        if (percentage >= 90) return 'A';
        if (percentage >= 80) return 'B';
        if (percentage >= 70) return 'C';
        if (percentage >= 60) return 'D';
        return 'F';
    }

    // Calculate time spent in MM:SS format
    calculateTimeSpent() {
        if (!this.startTime || !this.endTime) return '0:00';
        
        const timeDiff = Math.floor((this.endTime - this.startTime) / 1000);
        const minutes = Math.floor(timeDiff / 60);
        const seconds = timeDiff % 60;
        
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

    // Generate PDF certificate
    generateCertificate() {
        if (typeof jsPDF === 'undefined') {
            console.error('jsPDF library not loaded');
            return;
        }

        const results = this.getResults();
        const completionDate = new Date().toLocaleDateString('en-US');
        
        // Create new PDF document
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Set up colors and fonts
        const primaryColor = [44, 62, 80]; // #2c3e50
        const secondaryColor = [52, 152, 219]; // #3498db

        // Header
        doc.setFontSize(24);
        doc.setTextColor(...primaryColor);
        doc.setFont('helvetica', 'bold');
        
        // Center the header text
        const pageWidth = doc.internal.pageSize.width;
        const headerText = 'Certificate of Completion';
        const headerWidth = doc.getStringUnitWidth(headerText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const headerX = (pageWidth - headerWidth) / 2;
        
        doc.text(headerText, headerX, 30);
        
        // Subtitle
        doc.setFontSize(16);
        doc.setFont('helvetica', 'normal');
        const subtitleText = 'Student Orientation';
        const subtitleWidth = doc.getStringUnitWidth(subtitleText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const subtitleX = (pageWidth - subtitleWidth) / 2;
        doc.text(subtitleText, subtitleX, 45);

        // Add decorative line
        doc.setDrawColor(...secondaryColor);
        doc.setLineWidth(2);
        doc.line(20, 55, pageWidth - 20, 55);

        // Main content
        doc.setFontSize(14);
        doc.setTextColor(...primaryColor);
        doc.setFont('helvetica', 'normal');
        
        const mainText = `This certifies that ${this.studentName} has successfully completed`;
        const mainTextWidth = doc.getStringUnitWidth(mainText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const mainTextX = (pageWidth - mainTextWidth) / 2;
        doc.text(mainText, mainTextX, 80);
        
        const programText = `the orientation for the ${this.selectedProgram} program at`;
        const programTextWidth = doc.getStringUnitWidth(programText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const programTextX = (pageWidth - programTextWidth) / 2;
        doc.text(programText, programTextX, 95);
        
        // School name
        doc.setFontSize(18);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...secondaryColor);
        const schoolText = 'Genesis Vocational Institute';
        const schoolTextWidth = doc.getStringUnitWidth(schoolText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const schoolTextX = (pageWidth - schoolTextWidth) / 2;
        doc.text(schoolText, schoolTextX, 115);
        
        // Completion date
        doc.setFontSize(14);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...primaryColor);
        const dateText = `on ${completionDate}`;
        const dateTextWidth = doc.getStringUnitWidth(dateText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const dateTextX = (pageWidth - dateTextWidth) / 2;
        doc.text(dateText, dateTextX, 135);

        // Performance section
        doc.setDrawColor(...secondaryColor);
        doc.setLineWidth(1);
        doc.line(20, 155, pageWidth - 20, 155);
        
        doc.setFontSize(12);
        doc.setFont('helvetica', 'bold');
        const performanceText = 'Performance Summary';
        const performanceTextWidth = doc.getStringUnitWidth(performanceText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
        const performanceTextX = (pageWidth - performanceTextWidth) / 2;
        doc.text(performanceText, performanceTextX, 170);
        
        doc.setFont('helvetica', 'normal');
        
        // Score details - left aligned
        const leftMargin = 40;
        doc.text(`Score: ${results.correctAnswers}/${results.totalQuestions} (${results.percentage}%)`, leftMargin, 185);
        doc.text(`Grade: ${results.grade}`, leftMargin, 200);
        doc.text(`Time Spent: ${results.timeSpent}`, leftMargin, 215);

        // School information footer
        doc.setDrawColor(...primaryColor);
        doc.setLineWidth(1);
        doc.line(20, 235, pageWidth - 20, 235);
        
        doc.setFontSize(10);
        doc.setTextColor(...primaryColor);
        
        const schoolInfo = [
            'Genesis Vocational Institute',
            '12851 SW 42nd. Street 2nd Floor #131, Miami Florida 33175',
            'Ph: 305-223-05062 | Fax: 305-223-0509',
            'Email: info@gvi.edu | Web: www.gvi.edu'
        ];
        
        let yPosition = 245;
        schoolInfo.forEach(line => {
            const lineWidth = doc.getStringUnitWidth(line) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            const lineX = (pageWidth - lineWidth) / 2;
            doc.text(line, lineX, yPosition);
            yPosition += 8;
        });

        // Save the PDF
        const fileName = `orientation-completion-${this.studentName.replace(/\s+/g, '-').toLowerCase()}-${completionDate.replace(/\//g, '-')}.pdf`;
        doc.save(fileName);
    }

    // Reset quiz for retaking
    resetQuiz() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.userAnswers = [];
        this.startTime = null;
        this.endTime = null;
        this.studentName = '';
        this.selectedProgram = '';
    }

    // Get review data for answers modal
    getReviewData() {
        return this.userAnswers.map(answer => ({
            questionText: answer.questionText,
            description: answer.description,
            choices: answer.choices,
            userChoice: answer.userChoice,
            correctChoice: answer.correctChoice,
            isCorrect: answer.isCorrect,
            userChoiceText: answer.choices[answer.userChoice],
            correctChoiceText: answer.choices[answer.correctChoice]
        }));
    }

    // Get current question number (1-based)
    getCurrentQuestionNumber() {
        return this.currentQuestionIndex + 1;
    }
}

// Make QuizEngine available globally
window.QuizEngine = QuizEngine;