
import React, { useState, useEffect } from 'react';

interface TypedTerminalProps {
  texts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayAfterType?: number;
  delayAfterErase?: number;
  className?: string;
}

const TypedTerminal: React.FC<TypedTerminalProps> = ({
  texts,
  typingSpeed = 100,
  erasingSpeed = 50,
  delayAfterType = 2000,
  delayAfterErase = 500,
  className = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, delayAfterType);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, erasingSpeed);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(true);
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, delayAfterErase);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, texts, typingSpeed, erasingSpeed, delayAfterType, delayAfterErase]);

  return (
    <span className={`terminal-text font-jetbrains text-neon-blue ${className}`}>
      {currentText}
    </span>
  );
};

export default TypedTerminal;
