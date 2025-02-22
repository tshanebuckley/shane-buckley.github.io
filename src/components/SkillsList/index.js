import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useState, useRef } from 'react';


const SkillCarousel = (props) => {
  let cards = props.cards;
  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef(null);

  const toggleFlip = (index) => {
    const newFlipped = new Set(flippedCards);
    if (newFlipped.has(index)) {
      newFlipped.delete(index);
    } else {
      newFlipped.add(index);
    }
    setFlippedCards(newFlipped);
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const getCardStyle = (index) => {
    const position = index - activeIndex;
    const isActive = position === 0;
    const isNext = position === 1;
    const isPrev = position === -1;
    const isOutNext = position > 1;
    const isOutPrev = position < -1;

    let translateX = '0%';
    let translateY = '0px';
    let opacity = 1;
    let scale = 1;
    let zIndex = 0;

    if (isActive) {
      translateY = '0px';
      scale = 1;
      opacity = 1;
      zIndex = 10;
    } else if (isNext) {
      translateX = '100%';
      translateY = '20px';
      scale = 0.8;
      opacity = 0.5;
      zIndex = 5;
    } else if (isPrev) {
      translateX = '-100%';
      translateY = '20px';
      scale = 0.8;
      opacity = 0.5;
      zIndex = 5;
    } else if (isOutNext) {
      translateX = '200%';
      translateY = '40px';
      scale = 0.6;
      opacity = 0;
      zIndex = 0;
    } else if (isOutPrev) {
      translateX = '-200%';
      translateY = '40px';
      scale = 0.6;
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform: `translate3d(${translateX}, ${translateY}, 0) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.5s ease-in-out',
    };
  };

  return (
    <div 
      ref={containerRef}
      className={`w-full max-w-4xl mx-auto p-4 ${isFocused ? 'focused' : ''}`}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <div className="relative flex items-center justify-center h-96">
        <button
          onClick={prevCard}
          className="absolute left-0 z-20 p-2 bg-input rounded-full shadow-lg hover[dark]:bg-ifmPrimaryLightest hover:bg-ifmPrimaryLight"
        >
          <ChevronLeft className="w-6 h-6 text-primary" />
        </button>

        <div 
          className="relative w-full h-full flex items-center justify-center overflow-hidden"
        >
          {cards.map((card, index) => {
            const isFlipped = flippedCards.has(index);
            
            return (
              <div
                key={index}
                className="absolute w-64 perspective-1000"
                style={getCardStyle(index)}
                onClick={() => toggleFlip(index)}
              >
                <div
                  className={`relative w-full h-80 cursor-pointer
                    transition-all duration-700 ease-out
                    [transform-style:preserve-3d]
                    ${isFlipped ? 
                        '[transform:rotateY(180deg)_translateY(-20px)_translateZ(20px)]' : 
                        '[transform:rotateY(0deg)_translateY(0)_translateZ(0)]'
                      }`}
                >
                    {/* Front of card (Image) */}
                    <div 
                        className={`
                        absolute w-full h-full rounded-lg
                        [backface-visibility:hidden]
                        transition-all duration-700
                        ${isFlipped ? 'opacity-0' : 'opacity-100'}
                        bg-white
                        `}
                    >
                        <img
                        src={card.image}
                        alt="Card front"
                        className="w-full h-full rounded-lg shadow-lg object-contain"
                        />
                    </div>

                    {/* Back of card (Description) */}
                    <div 
                        className={`
                        absolute w-full h-full p-4 
                        bg-white rounded-lg shadow-lg
                        [transform:rotateY(180deg)]
                        [backface-visibility:hidden]
                        transition-all duration-700
                        ${isFlipped ? 'opacity-100' : 'opacity-0'}
                        `}
                    >
                        <div className="flex flex-col h-full">
                        <div className="flex items-start mb-4">
                            <img
                            src={card.image}
                            alt="Thumbnail"
                            className="w-16 h-16 rounded-md shadow-sm object-contain"
                            />
                        </div>
                        <div className="flex-grow">
                            <h3 className="text-xl font-bold mb-2 text-dsDocsFgBase">{card.title}</h3>
                            <p className="text-gray-600">
                            {card.description}
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextCard}
          className="absolute right-0 z-20 p-2 bg-input rounded-full shadow-lg hover[dark]:bg-ifmPrimaryLightest hover:bg-ifmPrimaryLight"
        >
          <ChevronRight className="w-6 h-6 text-primary" />
        </button>
      </div>
    </div>
  );
};

export default SkillCarousel;