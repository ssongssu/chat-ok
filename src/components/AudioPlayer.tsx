import React, { useState, useRef } from 'react';

interface AudioPlayerProps {
  src: string;
  transcript: string;
}

export function AudioPlayer({ src, transcript }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const changeSpeed = (speed: number) => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
      setPlaybackRate(speed);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <audio
        ref={audioRef}
        src={src}
        onEnded={() => setIsPlaying(false)}
        className="hidden"
      />
      
      <div className="mb-4">
        <p className="text-lg font-medium mb-2">Transcript:</p>
        <p className="text-gray-600 bg-gray-50 p-3 rounded">{transcript}</p>
      </div>

      <div className="flex items-center justify-between mb-4">
        <button
          onClick={togglePlay}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <button
          onClick={replay}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          Repeat
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Speed:</span>
        {[0.5, 0.75, 1, 1.25, 1.5].map((speed) => (
          <button
            key={speed}
            onClick={() => changeSpeed(speed)}
            className={`px-2 py-1 rounded ${
              playbackRate === speed
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {speed}x
          </button>
        ))}
      </div>
    </div>
  );
}