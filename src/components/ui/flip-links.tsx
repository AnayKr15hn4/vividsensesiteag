import React from "react";
import { Link } from "react-router-dom";

export const FlipLink = ({
  children,
  href,
  onClick,
}: {
  children: string;
  href: string;
  onClick?: () => void;
}) => {
  return (
    <Link
      to={href}
      onClick={onClick}
      className="group text-white relative block overflow-hidden whitespace-nowrap text-4xl md:text-5xl lg:text-6xl xl:text-[80px] font-display font-black tracking-tight"
      style={{
        lineHeight: 0.9,
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
    </Link>
  );
};
