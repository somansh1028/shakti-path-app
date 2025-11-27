
import React from 'react';

export const ScholarshipsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M22 10V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 10L12 5L22 10L12 15L2 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12.5V16C6 17.6569 8.68629 19 12 19C15.3137 19 18 17.6569 18 16V12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
        <rect x="10" y="12" width="4" height="4" rx="1" fill="currentColor" opacity="0.2"/>
    </svg>
);
