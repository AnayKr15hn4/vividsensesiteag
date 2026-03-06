import React, { useState, useEffect } from 'react';

interface DecryptTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export const DecryptText: React.FC<DecryptTextProps> = ({ 
  text, 
  speed = 40, 
  delay = 0, 
  className = "" 
}) => {
  const [displayText, setDisplayText] = useState("");
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let iteration = 0;

    const startDecrypt = () => {
      const interval = setInterval(() => {
        setDisplayText(
          text
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= text.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, speed);
    };

    timeout = setTimeout(startDecrypt, delay);

    return () => {
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return <span className={className}>{displayText}</span>;
};
