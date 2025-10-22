import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import TypingAnimation from "@/components/TypingAnimation";
import EmailCapture from "@/components/EmailCapture";
import deltaLogo from "@/assets/delta-logo.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fade in animation on mount
    setIsVisible(true);

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.body.classList.add("reduce-motion");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pb-24">
        <div 
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
{/* Logo */}
<div className="flex items-center justify-center mb-8">
  <div className="relative w-48 h-48 md:w-64 md:h-64">
    <img 
      src={deltaLogo} 
      alt="Delta Cybersecurity Logo"
      className="relative z-10 w-full h-full object-contain animate-pulse-glow mix-blend-lighten brightness-110 contrast-125"
      style={{ filter: 'drop-shadow(0 0 40px hsl(var(--accent)))' }}
    />
    <div 
      className="absolute inset-0 blur-2xl bg-gradient-to-br from-accent/40 via-accent/30 to-accent/20 animate-pulse-glow" 
      aria-hidden="true" 
    />
    <div 
      className="absolute inset-0 blur-3xl bg-gradient-to-tr from-accent/30 via-accent/15 to-transparent animate-gradient-shift" 
      aria-hidden="true" 
    />
  </div>
</div>


          {/* Typing Animation */}
          <TypingAnimation />

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Site Under Maintenance
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We're working hard to bring you something great.
          </p>

          {/* Email Capture Form */}
          <div className="pt-8">
            <EmailCapture />
          </div>

          {/* Additional Info */}
          <div className="pt-12 space-y-2">
            <p className="text-sm text-muted-foreground">
              Advanced cybersecurity solutions for the modern digital landscape.
            </p>
          </div>
        </div>
      </main>
      {/* Footer */}
{/* Footer */}
<footer className="absolute bottom-0 left-0 w-full z-10 bg-background/80 backdrop-blur-md border-t border-accent/30">
  <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
    <p>
      Made by{" "}
      <a link="https://www.linkedin.com/in/mohammad-eid12/" className="font-semibold text-foreground">Muhamed Eid El.Sayed</span> &nbsp;|&nbsp;
      All copyrights reserved to{" "}
      <span className="text-accent font-medium">Delta Coding Team</span>.
    </p>
  </div>
</footer>





      {/* Accessibility: Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-accent-foreground focus:rounded"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default Index;
