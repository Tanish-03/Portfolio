# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and ShadCN UI components. This portfolio showcases professional experience, skills, projects, and research work in a clean, HR-friendly design.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio.vercel.app) <!-- Replace with your actual Vercel URL -->

## ✨ Features

- **Modern Design**: Clean, professional layout with ShadCN UI components
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal loading speeds
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels
- **Interactive**: Smooth animations and hover effects
- **Professional Sections**:
  - Hero section with animated typing effect
  - About section with professional summary
  - Experience timeline
  - Skills showcase (Data Engineering, Python, Generative AI)
  - Projects portfolio with filtering
  - Research publications
  - Certifications display

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Icons**: Iconify
- **Deployment**: Vercel
- **Version Control**: Git

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect the Vite configuration and deploy

### Manual Deployment

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # ShadCN UI components
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── projects-section.tsx
│   ├── research-section.tsx
│   ├── skills-section.tsx
│   └── certifications-section.tsx
├── lib/                # Utility functions
├── App.tsx             # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## 🎨 Customization

### Updating Content

1. **Personal Information**: Update `src/components/hero-section.tsx` and `src/components/about-section.tsx`
2. **Experience**: Modify `src/components/experience-section.tsx`
3. **Skills**: Update `src/components/skills-section.tsx`
4. **Projects**: Edit `src/components/projects-section.tsx`
5. **Research**: Update `src/components/research-section.tsx`
6. **Certifications**: Modify `src/components/certifications-section.tsx`

### Styling

- Global styles: `src/index.css`
- Component styles: Tailwind CSS classes in component files
- Theme configuration: `tailwind.config.js`

### Images

- Profile image: Place your image in `public/MyImage.jpeg`
- Project images: Update image paths in project data

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration Files

- `vercel.json`: Vercel deployment configuration
- `vite.config.ts`: Vite build configuration
- `tailwind.config.js`: Tailwind CSS configuration
- `tsconfig.json`: TypeScript configuration

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: your.email@example.com
- **LinkedIn**: [Your LinkedIn Profile](https://linkedin.com/in/yourprofile)
- **GitHub**: [Your GitHub Profile](https://github.com/yourusername)

---

Built with ❤️ using React, TypeScript, and ShadCN UI