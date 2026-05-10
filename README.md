# 🐾 PawsHope — Animal Charity Website

**PawsHope** is a premium, fully responsive, and feature-rich website for an animal charity organization. Built with a "Mobile-First" approach using **Vanilla JavaScript**, **HTML5**, and **Modern CSS**, it provides a seamless user experience with high-end aesthetics, micro-interactions, and functional interactive components.

---

## 📸 Overview
The project aims to provide a professional platform for animal rescue, rehabilitation, and adoption. It features a stunning dark/light mode, smooth scroll animations, and interactive forms for donations and volunteering.

---

## 🚀 Key Features

### 🎨 Design & Aesthetics
- **Dark/Light Mode**: Full theme support with persistent state saving in local storage.
- **Glassmorphism**: Modern UI using backdrop filters, subtle borders, and soft shadows.
- **Dynamic Animations**: 
  - **Hero Typing Effect**: Rotating taglines in the header.
  - **Scroll Reveal**: Elements fade and slide into view as you scroll.
  - **Parallax Effects**: Interactive background and mouse-following blobs.
  - **Button Ripples**: Material-design style ripple effects on clicks.

### 🛠️ Functionality
- **Interactive Forms**:
  - **Volunteer Registration**: Real-time validation for names, emails, and phone numbers.
  - **Donation System**: Interactive amount selection cards and goal progress bar.
  - **Contact Form**: Direct messaging interface with success feedback.
- **Content Management**:
  - **Animal Adoption Cards**: Featuring "favourite" toggles and status badges.
  - **Success Stories Slider**: Auto-sliding testimonial carousel with manual controls.
  - **Gallery Lightbox**: Full-screen image viewing experience.
  - **FAQ Accordion**: Clean, space-saving toggle for common questions.
- **Utilities**:
  - **Live Donation Ticker**: Rotating news bar showing recent activity.
  - **Scroll Progress**: Visual bar at the top showing reading progress.
  - **Back-to-Top**: Quick navigation button appearing after scroll.
  - **Page Loader**: Custom paw-print loading screen.

---

## 📊 Project Structure & Logic

### System Architecture
```mermaid
graph TD
    A[index.html] -->|Styles| B[style.css]
    A -->|Logic| C[script.js]
    
    subgraph "script.js Modules"
        C1[Theme Manager]
        C2[Intersection Observers]
        C3[Form Validators]
        C4[UI Components]
        C5[Utility Functions]
    end
    
    C1 -->|Updates| A
    C2 -->|Triggers| A
    C3 -->|Handles| A
    C4 -->|Controls| A
```

### User Navigation Flow
```mermaid
flowchart LR
    Start([Landing]) --> Hero[Hero Section]
    Hero --> About[About Us]
    About --> Programs[Our Programs]
    Programs --> Adopt[Adopt an Animal]
    Adopt --> Donate[Make a Donation]
    Donate --> Volunteer[Join as Volunteer]
    Volunteer --> Footer[Footer/Contact]
    
    subgraph "Global Features"
        Theme[Theme Toggle]
        Progress[Scroll Progress]
        Nav[Sticky Navbar]
    end
```

### Feature Logic Mapping
```mermaid
mindmap
  root((PawsHope Logic))
    Animations
      Typing Effect
      Scroll Reveal
      Parallax
      Ripple Effect
    User Interaction
      Theme Toggle
      FAQ Accordion
      Slider Carousel
      Gallery Lightbox
    Data Handling
      Form Validation
      Donation Counter
      Local Storage
    Navigation
      Smooth Scroll
      Active Link Highlighting
      Back to Top
```

---

## 🛠️ Technology Stack
- **HTML5**: Semantic structure and modern accessibility.
- **CSS3**: Custom properties (variables), Grid, Flexbox, and complex animations.
- **JavaScript (ES6+)**: Vanilla JS for logic, DOM manipulation, and state management.
- **Google Fonts**: Playfair Display (Serif) and Nunito/Poppins (Sans-serif).
- **Icons**: Emoji-based and custom CSS icons for lightweight performance.

---

## 📁 File Organization
```text
/PawsHope-Animal-Charity
│
├── index.html    # Main structure and content
├── style.css     # Global styles and design system
└── script.js    # Interactive logic and functionality
```

---

## 🏁 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/pawshope-charity.git
   ```
2. **Open the project**:
   - Simply open `index.html` in any modern web browser.
   - Or use a local server like **Live Server** in VS Code for the best experience.

---

## 🤝 Contribution
Contributions are welcome! If you have suggestions for new features or improvements, feel free to fork the repo and submit a pull request.

---

*Made with ❤️ for animals by PawsHope Team.*
