import React, { useState, useCallback } from 'react';
import { Character } from './components/Character';
import { ChatBubble } from './components/ChatBubble';
import { SpeedControl } from './components/SpeedControl';
import { useSpeech } from './hooks/useSpeech';
import { conversations } from './data/conversations';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [conversationIndex, setConversationIndex] = useState(0);
  const [showBubbles, setShowBubbles] = useState(true);
  const { speakConversation, stop, setSpeed, speed } = useSpeech();

  const currentConversation = conversations[conversationIndex];
  const speakers = Array.from(new Set(currentConversation.map(item => item.speaker)));

  const playCurrentConversation = useCallback(async () => {
    setIsPlaying(true);
    try {
      await speakConversation(currentConversation, (index) => {
        setCurrentIndex(index);
      });
      setIsPlaying(false);
    } catch (error) {
      console.error('Conversation error:', error);
      setIsPlaying(false);
    }
  }, [speakConversation, currentConversation]);

  const nextConversation = useCallback(() => {
    stop();
    setCurrentIndex(0);
    setConversationIndex((prev) => (prev + 1) % conversations.length);
  }, [stop]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
      setCurrentIndex(0);
    } else {
      playCurrentConversation();
    }
  }, [isPlaying, stop, playCurrentConversation]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 max-w-md mx-auto">
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-2">
          {speakers.map((name) => (
            <Character
              key={name}
              name={name}
              gender={currentConversation.find(item => item.speaker === name)?.gender || 'male'}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-3">
          <SpeedControl 
            speed={speed} 
            onSpeedChange={setSpeed} 
            disabled={false} 
          />

          <div className="flex gap-2 w-full">
            <button
              onClick={togglePlay}
              className={`flex-1 py-3 rounded-full text-base font-semibold transition-colors ${
                isPlaying 
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              {isPlaying ? 'Stop' : 'Play'}
            </button>
            <button
              onClick={nextConversation}
              className="flex-1 py-3 rounded-full text-base font-semibold bg-indigo-500 hover:bg-indigo-600 text-white transition-colors"
            >
              Next
            </button>
          </div>
        </div>

        {showBubbles && (
          <div className="space-y-3 relative mt-4">
            {currentConversation.map((item, index) => (
              <ChatBubble
                key={index}
                message={item.message}
                isLeft={item.speaker === speakers[0]}
                isActive={currentIndex === index && isPlaying}
                gender={item.gender}
                isLatest={index === currentIndex - 1}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}