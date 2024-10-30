import { useState, useCallback, useRef } from 'react';

interface ConversationItem {
  message: string;
  speaker: string;
  gender: 'male' | 'female';
}

export function useSpeech() {
  const [speed, setSpeed] = useState(1);
  const isSpeakingRef = useRef(false);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const stop = useCallback(() => {
    if (currentUtteranceRef.current) {
      speechSynthesis.cancel();
      isSpeakingRef.current = false;
      currentUtteranceRef.current = null;
    }
  }, []);

  const speakConversation = useCallback(async (conversation: ConversationItem[], onProgress?: (index: number) => void) => {
    isSpeakingRef.current = true;
    
    for (let i = 0; i < conversation.length; i++) {
      if (!isSpeakingRef.current) break;
      
      try {
        const item = conversation[i];
        onProgress?.(i);
        
        await new Promise<void>((resolve, reject) => {
          const utterance = new SpeechSynthesisUtterance(item.message);
          utterance.pitch = item.gender === 'female' ? 2.0 : 0.4;
          utterance.rate = speed;
          
          utterance.onend = () => resolve();
          utterance.onerror = (e) => {
            if ((e as any).error !== 'interrupted') {
              reject(e);
            } else {
              resolve();
            }
          };
          
          currentUtteranceRef.current = utterance;
          speechSynthesis.speak(utterance);
        });
      } catch (error) {
        if (!isSpeakingRef.current) break;
        throw error;
      }
    }
    
    isSpeakingRef.current = false;
    onProgress?.(conversation.length);
  }, [speed]);

  const updateSpeed = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
    if (currentUtteranceRef.current) {
      currentUtteranceRef.current.rate = newSpeed;
    }
  }, []);

  return {
    speakConversation,
    stop,
    setSpeed: updateSpeed,
    speed,
  };
}