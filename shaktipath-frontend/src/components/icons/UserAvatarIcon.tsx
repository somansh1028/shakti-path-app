
import React from 'react';

export const UserAvatarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="60" cy="60" r="60" fill="#E9D5FF"/>
        <mask id="mask0_101_2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="120" height="120">
            <circle cx="60" cy="60" r="60" fill="#E9D5FF"/>
        </mask>
        <g mask="url(#mask0_101_2)">
            <path d="M60 70.5C76.569 70.5 90 83.931 90 100.5V135H30V100.5C30 83.931 43.431 70.5 60 70.5Z" fill="#A78BFA"/>
            <path d="M60 9C72.4264 9 82.5 19.0736 82.5 31.5C82.5 43.9264 72.4264 54 60 54C47.5736 54 37.5 43.9264 37.5 31.5C37.5 19.0736 47.5736 9 60 9Z" fill="#A78BFA"/>
            <path d="M84 27C84 24.2386 81.7614 22 79 22L41 22C38.2386 22 36 24.2386 36 27V36C36 38.7614 38.2386 41 41 41H79C81.7614 41 84 38.7614 84 36V27Z" fill="#4C1D95"/>
            <rect x="52" y="27" width="16" height="4" rx="2" fill="#E9D5FF"/>
        </g>
    </svg>
);
