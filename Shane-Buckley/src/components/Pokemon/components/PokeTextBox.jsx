import React, { useState, useEffect } from 'react';

const PokeText = ({ text, speed = 30, isLastChunk = false }) => {
  const [displayText, setDisplayText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [displayText, text, speed]);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="border-[6px] border-gray-800 rounded-lg overflow-hidden">
        <div className="border-[3px] border-white m-1 rounded-md">
          <div 
            className="bg-white text-black p-4 min-h-[100px] font-press-start text-sm tracking-tight leading-relaxed"
          >
            {displayText}
            {isComplete && !isLastChunk && (
              <span 
                className="animate-bounce inline-block ml-2 text-gray-600"
              >
                ▼
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const PokemonTextDialog = (textSequence, speed = 30) => {
  const [currentStage, setCurrentStage] = useState(0);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && currentStage < textSequence.length - 1) {
      setCurrentStage(prev => prev + 1);
    } else if (e.key === 'Backspace' && currentStage > 0) {
      setCurrentStage(prev => prev - 1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentStage]);

  return (
    <div>
      <PokeText 
        text={textSequence[currentStage]}
        speed={speed}
        key={currentStage}
        isLastChunk={currentStage === textSequence.length - 1}
      />
      <div className="text-center mt-2 text-sm text-gray-600">
        Press Enter to advance, Backspace to go back
      </div>
    </div>
  );
};

export default PokemonTextDialog;