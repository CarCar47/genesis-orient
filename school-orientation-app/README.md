# Genesis Vocational Institute - Student Orientation

An interactive web-based orientation quiz for Genesis Vocational Institute students. This application guides students through important school policies and procedures, tracks their progress, and generates completion certificates.

## 🎓 Features

- **Interactive Quiz**: 25 questions covering essential school policies
- **Progress Tracking**: Visual progress bar and question counter
- **Immediate Feedback**: Instant feedback on each answer with explanations
- **Certificate Generation**: PDF certificate download upon completion
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Accessibility**: Full keyboard navigation and screen reader support
- **Offline Support**: Service worker for offline functionality

## 📋 Requirements

- Modern web browser (Chrome 60+, Firefox 55+, Safari 12+, Edge 79+)
- JavaScript enabled
- PDF generation requires jsPDF library (loaded via CDN)

## 🚀 Getting Started

### Option 1: Simple Setup
1. Download or clone this repository
2. Open `index.html` in a web browser
3. Complete the orientation quiz

### Option 2: Local Server (Recommended)
1. Download or clone this repository
2. Serve the files using a local web server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. Open `http://localhost:8000` in your browser

## 📁 Project Structure

```
school-orientation-app/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All CSS styles and responsive design
├── js/
│   ├── app.js              # Main application controller
│   ├── questions.js        # Quiz questions data
│   ├── quiz-engine.js      # Core quiz logic and scoring
│   └── ui-manager.js       # DOM manipulation and UI updates
├── assets/
│   ├── favicon.ico         # Site icon
│   ├── images/            # Folder for images (empty initially)
│   └── audio/             # Folder for audio files (empty initially)
├── sw.js                  # Service worker for offline support
└── README.md              # This file
```

## 🎯 How It Works

1. **Loading Screen**: Initial 2-second loading animation
2. **Start Screen**: Student enters name and selects program
3. **Quiz Flow**: 25 questions with immediate feedback
4. **Results**: Score, grade, time spent, and certificate download
5. **Review**: Option to review all answers and explanations

## 🎨 Customization

### Adding Questions
Edit `js/questions.js` to modify or add questions:

```javascript
{
    id: 26,
    description: "Policy information text here...",
    question: {
        text: "Question text here?",
        choices: ["Option A", "Option B", "Option C", "Option D"],
        correctIndex: 0,
        feedbackCorrect: "Correct feedback",
        feedbackIncorrect: "Incorrect feedback"
    }
}
```

### Changing School Information
Update school details in the HTML and questions data as needed.

### Styling
Modify `css/styles.css` to change colors, fonts, and layout. CSS variables are defined at the top for easy customization:

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    /* ... other variables */
}
```

## ♿ Accessibility Features

- Full keyboard navigation support
- ARIA labels and descriptions
- Screen reader announcements
- High contrast colors
- Scalable fonts
- Focus indicators
- Skip links

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 60+     |
| Firefox | 55+     |
| Safari  | 12+     |
| Edge    | 79+     |

## 🔧 Technical Details

### Dependencies
- **jsPDF**: PDF generation (loaded via CDN)
- **Service Worker**: Offline functionality
- **Local Storage**: Progress persistence (future enhancement)

### Performance
- Optimized for mobile devices
- Lazy loading of resources
- Minimal external dependencies
- Cached assets for offline use

### Security
- No sensitive data storage
- Client-side only processing
- Optional development mode protections

## 🐛 Troubleshooting

### Common Issues

**Quiz won't start**
- Check browser console for JavaScript errors
- Ensure all files are properly uploaded
- Verify jsPDF CDN is accessible

**Certificate won't download**
- Check if jsPDF library loaded successfully
- Ensure browser allows PDF downloads
- Try refreshing the page

**Styling looks wrong**
- Clear browser cache
- Check if CSS file loaded correctly
- Verify all assets are in correct folders

### Debug Mode
Open browser console and type `debugApp()` to see application status.

## 📄 Certificate Details

Generated certificates include:
- Student name and selected program
- Completion date
- Score and grade
- School contact information
- Professional formatting

## 🔮 Future Enhancements

- [ ] Progress saving to resume later
- [ ] Multiple language support
- [ ] Audio narration for questions
- [ ] Enhanced analytics and reporting
- [ ] Administrator dashboard
- [ ] Question randomization
- [ ] Timed quiz mode

## 📞 Support

For technical issues or questions about the orientation content, contact:

**Genesis Vocational Institute**
- Address: 12851 SW 42nd. Street 2nd Floor #131, Miami Florida 33175
- Phone: 305-223-05062
- Fax: 305-223-0509
- Email: info@gvi.edu
- Website: www.gvi.edu

## 📝 License

This application is developed specifically for Genesis Vocational Institute. All content and questions are derived from official school policies and procedures.

---

**Genesis Vocational Institute** - Dedicated to providing lifelong learning opportunities in healthcare education.