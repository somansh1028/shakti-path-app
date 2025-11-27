
import React from 'react';

export const DidiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    {...props}
  >
    {/* Hair Bun */}
    <path 
        d="M12 2C15.5 2 18.5 4.5 18.5 8C18.5 11 16.5 13.5 12 13.5C7.5 13.5 5.5 11 5.5 8C5.5 4.5 8.5 2 12 2Z" 
        fill="currentColor" 
        opacity="0.2" 
    />
    
    {/* Face Shape */}
    <path 
        d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    />

    {/* Hairline / Bun Detail */}
    <path 
        d="M12 4C15 4 17 6 17 9M7 9C7 6 9 4 12 4" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
    />
    <path 
        d="M12 2C13.5 2 14.5 3 14.5 4" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
    />

    {/* Bindi */}
    <circle cx="12" cy="8.5" r="0.75" fill="currentColor" />

    {/* Smile */}
    <path 
        d="M10 11C10.5 11.5 11.5 11.5 12 11.5C12.5 11.5 13.5 11.5 14 11" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
    />

    {/* Body / Saree Drape */}
    <path 
        d="M5.5 19C6.5 16.5 9 15.5 12 15.5C15 15.5 17.5 16.5 18.5 19" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
    />
    <path 
        d="M12 15.5C13.5 17 16 19 19 20" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        opacity="0.6"
    />
    <path 
        d="M4 21C4 18 6 16 12 16C18 16 20 18 20 21" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    />
  </svg>
);
