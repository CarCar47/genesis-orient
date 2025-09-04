# Genesis Vocational Institute - Student Orientation App

Interactive web-based orientation quiz application for Genesis Vocational Institute healthcare programs.

## Overview

This application provides an interactive orientation experience for students, covering important school policies and procedures through a 25-question quiz format. Students complete the orientation and receive a downloadable PDF certificate upon completion.

## Features

- **Interactive Quiz**: 25 questions covering school policies and procedures
- **Student Information Collection**: Name and program selection
- **Progress Tracking**: Real-time progress indicators
- **Grading System**: Percentage-based scoring with letter grades
- **Certificate Generation**: PDF certificate download using jsPDF
- **Responsive Design**: Works on desktop and mobile devices
- **Accessibility**: Screen reader friendly with ARIA labels
- **Progressive Web App**: Service worker for offline functionality

## Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **PDF Generation**: jsPDF library
- **Deployment**: Vercel with GitHub integration

## Project Structure

```
├── index.html              # Main application entry point
├── css/
│   └── styles.css         # Application styles and responsive design
├── js/
│   ├── app.js             # Application initialization and coordination
│   ├── questions.js       # Quiz questions and configuration data
│   ├── quiz-engine.js     # Quiz logic, scoring, and certificate generation
│   └── ui-manager.js      # DOM manipulation and UI updates
├── assets/
│   ├── favicon.ico        # Site favicon
│   ├── images/           # Image assets (empty initially)
│   └── audio/            # Audio assets (empty initially)
├── sw.js                 # Service worker for PWA functionality
├── vercel.json          # Vercel deployment configuration
└── README.md            # This file
```

## Deployment

### GitHub Repository
- **Repository**: https://github.com/CarCar47/genesis-orient
- **Branch**: `master` (main deployment branch)

### Vercel Integration
- **Auto-deployment**: Every push to `master` branch triggers automatic deployment
- **Framework**: Static site (no build process required)
- **Domain**: Automatically assigned Vercel domain + optional custom domain

### Setting up Vercel Deployment

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import project from GitHub: `https://github.com/CarCar47/genesis-orient`
   - Select `master` branch for production deployments

2. **Configuration**:
   - Framework Preset: Other (static)
   - Root Directory: `./` (project root)
   - Build Command: (leave empty)
   - Output Directory: `./` (serve from root)

3. **Webhook**: Automatically created by Vercel when connecting the GitHub repository

## Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/CarCar47/genesis-orient.git
   cd genesis-orient
   ```

2. **Serve locally**:
   - Option 1: Use Live Server extension in VS Code
   - Option 2: Use Python: `python -m http.server 8000`
   - Option 3: Use Node.js: `npx serve .`

3. **Open in browser**: Navigate to `http://localhost:8000` (or appropriate port)

## Customization

### Questions
- Edit `js/questions.js` to modify quiz questions and content
- Each question includes description text, question, choices, and feedback

### School Information
- Update school details in `Project-information.md` configuration
- Modify contact information in `index.html`

### Styling
- Customize appearance in `css/styles.css`
- Responsive breakpoints and color schemes included

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Responsive design optimized

## License

Private project for Genesis Vocational Institute.

---

**Genesis Vocational Institute**  
12851 SW 42nd. Street 2nd Floor #131, Miami Florida 33175  
Ph: 305-223-05062 | Fax: 305-223-0509  
Email: info@gvi.edu | Web: https://www.gvi.edu/