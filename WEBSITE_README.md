# Nayana Arya Foundation Website

A modern, responsive, and accessible website for the Nayana Arya Foundation - an NGO dedicated to creating vision for visually impaired children through education, technology training, and community support.

## 🌟 Features

### Pages
- **Home** - Mission statement, impact statistics, call-to-action buttons, and latest news
- **About Us** - Foundation story, team members, core values, and transparency commitments
- **Programs** - Detailed descriptions of ongoing initiatives with impact metrics
- **Impact & Stories** - Success stories, testimonials, statistics, and category filters
- **Blog / News** - Articles, announcements, reports with search and category filtering
- **Get Involved** - Volunteer opportunities, sign-up process, and partner information
- **Donate** - Multiple donation options with impact explanations
- **Contact Us** - Contact form with validation, location, phone, and social media links

### Key Components
- **Header** - Sticky navigation with mobile menu and donation button
- **Footer** - Quick links, contact info, newsletter signup, and social media
- **NewsletterSubscription** - Reusable newsletter form with validation (multiple variants)
- **Button** - Versatile button component with multiple variants and sizes
- **Logo** - Foundation branding component

### Design Features
✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
✅ **Accessibility (WCAG 2.1)** - ARIA labels, semantic HTML, keyboard navigation
✅ **Color Palette** - Ocean blue (#0284c7) and warm amber (#f59e0b) for inspiration
✅ **Modern UI** - Clean, inspiring, human-centered design
✅ **Fast Performance** - Optimized with Vite and React 19
✅ **SEO Optimized** - Meta tags, Open Graph, structured data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
cd nayana-arya-foundation
npm install
```

### Development
```bash
npm run dev
```
The site will be available at `http://localhost:3002/`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure
```
src/
├── index.tsx              # Entry point
├── App.tsx                # Main app component with routing
├── types.ts               # TypeScript types and interfaces
├── constants.ts           # Constants (team, blog posts, programs)
├── components/
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Footer with links
│   ├── Button.tsx         # Reusable button component
│   ├── Logo.tsx           # Logo component
│   └── NewsletterSubscription.tsx
├── pages/
│   ├── HomePage.tsx       # Home page
│   ├── AboutPage.tsx      # About us
│   ├── ProgramsPage.tsx   # Programs/initiatives
│   ├── DonatePage.tsx     # Donation page
│   ├── GetInvolvedPage.tsx# Volunteer/Get involved
│   ├── ContactPage.tsx    # Contact form
│   ├── ImpactStoriesPage.tsx  # Stories and impact
│   └── BlogPage.tsx       # Blog/news page
├── index.html             # HTML template
└── vite.config.ts         # Vite configuration
```

## 🎨 Design System

### Colors
- **Ocean Blue** (#0284c7) - Primary color for trust and stability
- **Warm Amber** (#f59e0b) - Secondary color for calls-to-action
- **Gray Scale** - For text, backgrounds, and neutrals

### Typography
- Font: Inter (from Google Fonts)
- Sizes: Responsive typography with Tailwind utilities

### Spacing & Layout
- Max-width container: 1280px (lg breakpoint)
- Responsive padding and margins
- Mobile-first design approach

## ♿ Accessibility Features

✅ **ARIA Labels & Roles**
- Proper landmarks (header, main, footer, navigation)
- ARIA labels for icons and interactive elements
- ARIA live regions for notifications

✅ **Semantic HTML**
- Proper heading hierarchy (h1, h2, h3)
- Semantic elements (nav, main, section, article)
- Form labels associated with inputs

✅ **Keyboard Navigation**
- All interactive elements accessible via Tab
- Focus states clearly visible
- Proper focus management

✅ **Color & Contrast**
- WCAG AA compliant color contrast ratios
- No color-only information conveyance
- High visibility focus indicators

✅ **Responsive Design**
- Works on all screen sizes
- Touch-friendly interactive elements
- Readable text on mobile devices

## 📝 Content & Customization

### Update Team Members
Edit `src/constants.ts`:
```typescript
export const TEAM_MEMBERS = [
  { name: '', role: '', bio: '', image: '' },
  // ...
];
```

### Add Blog Posts
```typescript
export const BLOG_POSTS = [
  {
    title: '',
    date: '',
    image: '',
    excerpt: '',
  },
  // ...
];
```

### Update Programs
```typescript
export const PROGRAMS = [
  {
    title: '',
    description: '',
    icon: '',
    image: '',
    impact: '',
  },
  // ...
];
```

## 🔐 Security & Performance

- ✅ Secure forms with validation
- ✅ HTTPS ready
- ✅ SSL connection indicator
- ✅ Optimized images with responsive sizing
- ✅ Fast page loads with Vite
- ✅ React 19 for better performance

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🌐 Deployment

The website is optimized for deployment on:
- **Vercel** (recommended for React/Vite)
- **Netlify**
- **GitHub Pages**
- **Traditional web servers** (Node.js/Express)

### Deployment Steps (Vercel)
```bash
npm install -g vercel
vercel login
vercel
```

## 📞 Contact & Support

For the organization:
- 📍 Address: 21 2nd Main KR Garden Murugeshpalaya, Bengaluru 560017
- 📧 Email: admin@nayanaaryafoundation.in
- 📱 Phone: +91 8310551091

## 📄 License

This website is created for Nayana Arya Foundation. All rights reserved.

## 🤝 Contributing

Contributions are welcome! To contribute:
1. Create a new branch
2. Make your changes
3. Submit a pull request

## 📊 Analytics & SEO

The website includes:
- Meta tags for better SEO
- Open Graph tags for social sharing
- Structured data ready (add JSON-LD as needed)
- Mobile-friendly design
- Fast page speed

## 🎯 Future Enhancements

- [ ] Donation payment gateway integration
- [ ] Volunteer application system
- [ ] Event calendar and registration
- [ ] Photo gallery with lightbox
- [ ] Multi-language support (Hindi, Kannada)
- [ ] Admin dashboard for content management
- [ ] Email notification system
- [ ] Analytics dashboard

## 📚 Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Ionicons** - Icon library
- **Node.js** - Runtime

## 💡 Best Practices Implemented

✅ Component-based architecture
✅ Reusable components (Button, NewsletterSubscription, etc.)
✅ Type safety with TypeScript
✅ Responsive design patterns
✅ Accessibility-first approach
✅ SEO optimization
✅ Performance optimization
✅ Clean code organization
✅ Proper error handling
✅ Form validation

## 📞 Support

For technical support or feature requests, please contact the development team or create an issue in the repository.

---

**Version**: 1.0.0  
**Last Updated**: January 2025  
**Status**: ✅ Production Ready
