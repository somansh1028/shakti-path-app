
import React from 'react';

export const GurujiIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* Turban / Headgear */}
    <path 
        d="M12 2C15.5 2 18.5 4 19 6C19.5 8 18 9 17 9H7C6 9 4.5 8 5 6C5.5 4 8.5 2 12 2Z" 
        fill="currentColor" 
        opacity="0.2"
    />
    <path 
        d="M19 6C19 6 20 8 17 9M5 6C5 6 4 8 7 9" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    />
    
    {/* Face */}
    <path 
        d="M7 9V12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12V9" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    />

    {/* Beard/Chin */}
    <path 
        d="M12 17C13.5 17 15 16.5 16 15.5M12 17C10.5 17 9 16.5 8 15.5" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
    />

    {/* Glasses */}
    <circle cx="9.5" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14.5" cy="11.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M11 11.5H13" stroke="currentColor" strokeWidth="1.5" />

    {/* Body */}
    <path 
        d="M5 21C5 18 7 17 12 17C17 17 19 18 19 21" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    />
  </svg>
);
