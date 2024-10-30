import React from 'react';

interface ChatBubbleProps {
  message: string;
  isLeft: boolean;
  isActive: boolean;
  gender: 'female' | 'male';
  isLatest: boolean;
}

export function ChatBubble({ message, isLeft, isActive, gender }: ChatBubbleProps) {
  const colorScheme = gender === 'female'
    ? { active: 'bg-pink-200', inactive: 'bg-pink-100' }
    : { active: 'bg-blue-200', inactive: 'bg-blue-100' };

  return (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <div
        className={`max-w-[85%] p-3 rounded-2xl text-sm ${
          isActive ? colorScheme.active : colorScheme.inactive
        } ${isLeft ? 'rounded-tl-none' : 'rounded-tr-none'}`}
      >
        <p>{message}</p>
      </div>
    </div>
  );
}