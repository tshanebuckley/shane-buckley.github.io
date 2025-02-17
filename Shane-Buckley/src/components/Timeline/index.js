import React, { useEffect, useRef, useState } from 'react';

import SkillsCarousel from '../SkillsList'
import { LifeEvents } from '../../lib/constants'

const TimelineEvent = ({ startDate, endDate, title, company, group, description, isLast, icon: Icon, isLeft }) => {
  const [isVisible, setIsVisible] = useState(false);
  const eventRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          //observer.unobserve(entry.target);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (eventRef.current) {
      observer.observe(eventRef.current);
    }

    return () => {
      if (eventRef.current) {
        observer.unobserve(eventRef.current);
      }
    };
  }, []);

  function get_title(title, company, startDate, endDate) {
    if (company) {
      return (
        <>
          <h3 className="font-medium text-resume dark:text-ifmPrimaryLightest text-ifmPrimaryLight mt-1">{title}</h3>
          <span className="font-medium text-base dark:text-ifmPrimaryLightest text-ifmPrimaryLight">{startDate} - {endDate} @{company}</span>
        </>
      )
    }
    if (title) {
      return (
        <>
          <h3 className="font-medium text-resume dark:text-ifmPrimaryLightest text-ifmPrimaryLight mt-1">{title}</h3>
          <span className="font-medium text-base dark:text-ifmPrimaryLightest text-ifmPrimaryLight">{startDate} - {endDate}</span>
        </>
      )
    }
  }

  return (
    <div 
      ref={eventRef}
      className={`flex w-full items-center justify-center transition-all duration-700 transform
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Left side content */}
      {isLeft && (
        <div className={`w-1/2 pr-8 text-right transition-all duration-700 transform
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          {get_title(title, company, startDate, endDate)}
          <p className="text-primary text-resume text-gray-600 mt-1">{description}</p>
        </div>
      )}
      
      {/* Center timeline */}
      <div className="relative flex flex-col items-center">
        <div className={`h-10 w-10 rounded-full bg-input hover:bg-input/60 z-10 transition-all duration-500 flex items-center justify-center
          ${isVisible ? 'scale-100' : 'scale-0'}`}>
          <Icon className="w-5 h-5 text-primary" />
        </div>
        {
          <div className={`h-24 w-0.5 bg-gray-200 transition-all duration-700
            ${isVisible ? 'scale-y-100' : 'scale-y-0'} origin-top`} 
          />
        }
      </div>
      
      {/* Right side content */}
      {!isLeft && (
        <div className={`w-1/2 pl-8 transition-all duration-700 transform
          ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          {get_title(title, company, startDate, endDate)}
          <p className="text-primary text-resume text-gray-600 mt-1">{description}</p>
        </div>
      )}
    </div>
  );
};

const VerticalTimeline = () => {
  const events = LifeEvents();
  return (
    <div className="max-w-14xl mx-auto p-6">
      <div className="space-y-12">
        {events.map((event, index) => (
          <div key={index}>
            <TimelineEvent
              startDate={event.startDate}
              endDate={event.endDate}
              title={event.title}
              company={event.company}
              description={event.description}
              isLast={index === events.length - 1}
              icon={event.icon}
              isLeft={index % 2 === 0}
            />
            <SkillsCarousel cards={event.cards} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
