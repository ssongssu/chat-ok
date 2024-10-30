import React from 'react';

interface CharacterProps {
  name: string;
  gender: 'female' | 'male';
}

export function Character({ name, gender }: CharacterProps) {
  const colorScheme = gender === 'female' 
    ? { bg: 'bg-pink-100', text: 'text-pink-500', accent: 'text-pink-600' }
    : { bg: 'bg-blue-100', text: 'text-blue-500', accent: 'text-blue-600' };

  return (
    <div className="flex flex-col items-center">
      <div className={`w-32 h-32 ${colorScheme.bg} rounded-full flex items-center justify-center mb-1`}>
        <svg className={`w-20 h-20 ${colorScheme.text}`} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="8" r="5"/>
          <path d="M21,19v1a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2v-1a6,6,0,0,1,6-6h6A6,6,0,0,1,21,19Z"/>
        </svg>
      </div>
      <span className={`text-sm font-semibold ${colorScheme.accent}`}>{name}</span>
    </div>
  );
}