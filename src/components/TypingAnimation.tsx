import { useState, useEffect } from "react";

const phrases = [
  "Launching soon...",
  "Delta Security",
  "Securing your digital future.",
  "Delta. Community. Delta. Change"
];

const TypingAnimation = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentPhrase.length) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length + 1));
          setTypingSpeed(100);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(currentPhrase.substring(0, displayedText.length - 1));
          setTypingSpeed(50);
        } else {
          // Move to next phrase
          setIsDeleting(false);
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex, typingSpeed]);

  return (
    <div className="flex items-center justify-center h-16 md:h-20">
      <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent">
        {displayedText}
        <span className="inline-block w-1 h-10 md:h-12 lg:h-14 bg-accent ml-1 animate-blink" aria-hidden="true" />
      </span>
    </div>
  );
};

export default TypingAnimation;
