# Crumble Cookies Website

A stunning, modern bakery + e-commerce website built with Next.js, React Three Fiber, GSAP, and Tailwind CSS.

## Tech Stack (from your 10-repo stack)

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 14.2.0 | React framework, SSR, export |
| **React Three Fiber** | 8.16.0 | 3D animations in React |
| **Drei** | 9.106.0 | Helpers for R3F |
| **GSAP** | 3.12.5 | Animations |
| **Lenis** | 1.1.15 | Smooth scrolling |
| **Framer Motion** | 11.2.0 | UI animations |
| **Tailwind CSS** | 3.4.0 | Styling |
| **TypeScript** | 5.4.0 | Type safety |

## Features

- ✨ 3D animated cookie cloud in hero section
- 📱 Fully responsive design
- 🛒 Product catalog with cookie cards
- 📊 About section with stats
- 🔄 3-step ordering process
- 💬 Customer testimonials carousel
- 📞 Integrated contact/ordering form
- 🎨 Beautiful brown/cream color palette

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Export for static hosting
npm run export
```

## Deployment to GitHub Pages

```bash
# After build, the static files will be in /out
# Push to GitHub and enable GitHub Pages from settings
```

## Folder Structure

```
src/
├── app/
│   ├── page.tsx          # Home page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Hero section with 3D cookies
│   ├── Products.tsx      # Cookie catalog
│   ├── About.tsx         # About section
│   ├── Process.tsx       # Ordering process
│   ├── Testimonials.tsx  # Customer reviews
│   ├── CTA.tsx           # Contact/order form
│   └── Footer.tsx        # Site footer
└── providers/
    └── LenisProvider.tsx # Smooth scroll provider
```

## Customization

- Update colors in `tailwind.config.js`
- Modify cookie data in `Products.tsx`
- Update text content in each component
- Replace placeholder images with actual photos

## Environment Requirements

- Node.js 18+
- Python 3.8+ (for some dependencies)
- npm 9+ or yarn

## License

MIT - Feel free to customize and use commercially.