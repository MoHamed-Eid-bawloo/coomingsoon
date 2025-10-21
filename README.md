# Delta Cybersecurity - Coming Soon

A modern, animated "Coming Soon" page for Delta Cybersecurity, built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Elegant animated hero background with gradient, geometric shapes, and noise texture
- ⌨️ Dynamic typing/deleting animation cycling through key phrases
- 📧 Email capture form (frontend ready, backend integration required)
- 📱 Fully responsive design (mobile, tablet, desktop)
- ♿ Accessible with semantic HTML, ARIA labels, and reduced motion support
- 🎯 Clean, modern UI matching Delta Cybersecurity's brand identity

## Design System

- **Background**: Black (#000000)
- **Text**: White (#FFFFFF)
- **Accent**: Delta Green (#032c00)
- **Animations**: Smooth gradient shifts, floating geometric shapes, typing effects

## Quick Start

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd delta-coming-soon

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Email Integration Setup

The email capture form is frontend-ready. To enable email notifications:

### Option 1: EmailJS (Recommended for frontend-only)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Create a `.env` file based on `.env.example`
4. Add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

5. Uncomment and update the EmailJS code in `src/components/EmailCapture.tsx`

### Option 2: Serverless Function

1. Set up a serverless function (AWS Lambda, Vercel, Netlify Functions)
2. Create endpoint to handle email submissions
3. Update the API endpoint in `src/components/EmailCapture.tsx`

## Project Structure

```
delta-coming-soon/
├── src/
│   ├── components/
│   │   ├── AnimatedBackground.tsx  # Hero animation component
│   │   ├── TypingAnimation.tsx     # Typing/deleting effect
│   │   ├── EmailCapture.tsx        # Email form component
│   │   └── Footer.tsx              # Footer with contact info
│   ├── pages/
│   │   └── Index.tsx               # Main coming soon page
│   ├── index.css                   # Design system & styles
│   └── main.tsx                    # App entry point
├── public/
├── .env.example                    # Environment variables template
└── README.md
```

## Customization

### Update Contact Information

Edit `src/components/Footer.tsx` to update:
- Email address
- LinkedIn URL
- Copyright information

### Modify Typing Phrases

Edit the `phrases` array in `src/components/TypingAnimation.tsx`:

```typescript
const phrases = [
  "Launching soon...",
  "Delta Cybersecurity",
  "Securing your digital future.",
  // Add your custom phrases here
];
```

### Adjust Animation Speed

Modify animation timings in `tailwind.config.ts` under the `animation` section.

## Accessibility Features

- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Reduced motion support (respects `prefers-reduced-motion`)
- Skip to main content link

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Lucide React (icons)
- Radix UI (components)

## License

© 2025 Delta Cybersecurity. All rights reserved.

## Support

For questions or support, contact: contact@delta-cyber.com
