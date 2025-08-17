# 🚀 Sahan Lakshitha - Software Engineer Portfolio

A modern, visually stunning personal portfolio website built with Angular 16+ that showcases my profile as a Software Engineer, highlights my GitHub projects, and includes animations, effects, and responsive design.

## ✨ Features

- **Modern Design**: Clean, professional design with gradient backgrounds and glassmorphism effects
- **Responsive Layout**: Mobile-first responsive design that works on all devices
- **Smooth Animations**: AOS (Animate On Scroll) animations and Angular animations
- **Interactive Elements**: 3D flip project cards, hover effects, and smooth transitions
- **Dark/Light Theme**: Toggle between dark and light themes
- **Typing Animation**: Dynamic typing effect for hero section text
- **Project Showcase**: Interactive project cards with technology badges
- **Skills Visualization**: Animated skill progress bars with shimmer effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support

## 🏗️ Tech Stack

- **Frontend Framework**: Angular 16+
- **Styling**: SCSS with CSS Variables
- **UI Components**: Angular Material
- **Animations**: Angular Animations + AOS.js
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter + Poppins)
- **Deployment**: GitHub Pages

## 📂 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── hero-section/          # Hero banner with typing animation
│   │   ├── about-me/              # About section with skills
│   │   ├── projects/              # Project showcase with filtering
│   │   ├── experience/            # Work & education timeline
│   │   ├── contact/               # Contact form & info
│   │   ├── footer/                # Footer with navigation
│   │   ├── navigation/            # Navigation bar with theme toggle
│   │   ├── project-card/          # Individual project cards
│   │   └── skill-badge/          # Skill display components
│   ├── models/                    # TypeScript interfaces
│   ├── services/                  # Data and theme services
│   └── app.component.*            # Main app component
├── assets/                        # Images, icons, and static files
└── styles.scss                    # Global styles and CSS variables
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Angular CLI

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/khslsahan/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200`

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/app/components/hero-section/hero-section.component.ts` - Hero text and typing animations
- `src/app/components/about-me/about-me.component.ts` - Bio and skills
- `src/app/services/project.service.ts` - Your projects
- `src/app/components/experience/experience.component.ts` - Work experience and education
- `src/app/components/contact/contact.component.ts` - Contact information

### Styling

- **Colors**: Update CSS variables in `src/styles.scss`
- **Themes**: Modify theme colors in `src/app/services/theme.service.ts`
- **Layouts**: Adjust grid layouts and spacing in component SCSS files

### Projects

Add your projects in `src/app/services/project.service.ts`:

```typescript
{
  id: 1,
  name: 'Project Name',
  description: 'Project description',
  tech: ['Angular', 'TypeScript', 'Node.js'],
  github: 'https://github.com/username/project',
  demo: 'https://demo-link.com',
  featured: true,
  category: 'fullstack'
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🌟 Key Components

### Hero Section
- Full-screen banner with animated typing text
- Call-to-action buttons
- Floating animated icons
- Smooth scroll indicator

### About Me
- Personal bio and photo placeholder
- Animated skill progress bars
- Categorized skill display
- Quick info highlights

### Projects
- Category-based filtering
- 3D flip project cards
- Technology badges
- GitHub and demo links

### Experience
- Timeline layout for work history
- Education section
- Technology tags for each role

### Contact
- Reactive form with validation
- Social media links
- Contact information display
- Success/error messaging

## 🎭 Animations

- **AOS (Animate On Scroll)**: Section reveal animations
- **Angular Animations**: Component transitions
- **CSS Animations**: Hover effects, floating elements
- **Typing Effect**: Dynamic text animation in hero section

## 🎨 Theme System

- **Light Theme**: Default bright theme
- **Dark Theme**: Dark mode with custom color palette
- **Theme Persistence**: Saves user preference in localStorage
- **Smooth Transitions**: Animated theme switching

## 📊 Performance Features

- **Lazy Loading**: Component-based code splitting
- **Optimized Images**: WebP format support
- **Minified CSS/JS**: Production build optimization
- **CDN Resources**: External libraries loaded from CDN

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run unit tests
- `npm run deploy` - Deploy to GitHub Pages

### Code Quality

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code linting and formatting
- **Prettier**: Consistent code formatting
- **Angular Style Guide**: Follows Angular best practices

## 📦 Dependencies

### Core Dependencies
- `@angular/*` - Angular framework packages
- `rxjs` - Reactive programming library
- `zone.js` - Angular zone management

### UI & Animation
- `@angular/material` - Material Design components
- `@angular/animations` - Angular animation system
- `aos` - Animate On Scroll library

### Development
- `@angular/cli` - Angular command line tools
- `typescript` - TypeScript compiler
- `angular-cli-ghpages` - GitHub Pages deployment

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **GitHub**: [@khslsahan](https://github.com/khslsahan)
- **LinkedIn**: [Sahan Lakshitha](https://linkedin.com/in/sahanlakshitha)
- **Email**: sahan@example.com

## 🙏 Acknowledgments

- **Angular Team** - For the amazing framework
- **Material Design** - For UI component inspiration
- **AOS Library** - For scroll animations
- **Font Awesome** - For beautiful icons
- **Google Fonts** - For typography

---

⭐ **Star this repository if you found it helpful!**
