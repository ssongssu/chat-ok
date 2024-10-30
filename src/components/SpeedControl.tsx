import React from 'react';

interface SpeedControlProps {
  speed: number;
  onSpeedChange: (speed: number) => void;
  disabled: boolean;
}

export function SpeedControl({ speed, onSpeedChange }: SpeedControlProps) {
  const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];

  return (
    <div className="flex items-center justify-center gap-2">
      <span className="text-xs text-gray-600 font-medium">Speed:</span>
      <div className="flex gap-1">
        {speeds.map((value) => (
          <button
            key={value}
            onClick={() => onSpeedChange(value)}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              speed === value
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {value}x
          </button>
        ))}
      </div>
    </div>
  );
}