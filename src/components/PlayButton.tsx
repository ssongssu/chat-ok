import React from 'react';

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export function PlayButton({ isPlaying, onClick }: PlayButtonProps) {
  return (
    <div className="flex justify-center mb-8">
      <button
        onClick={onClick}
        className={`px-8 py-3 rounded-full text-lg font-semibold transition-colors ${
          isPlaying 
            ? 'bg-red-500 hover:bg-red-600 text-white'
            : 'bg-green-500 hover:bg-green-600 text-white'
        }`}
      >
        {isPlaying ? 'Stop' : 'Play'}
      </button>
    </div>
  );
}