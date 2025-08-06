'use client';

import { useEffect, useRef, useState } from 'react';

interface StatisticItem {
  value: number;
  suffix?: string;
  label: string;
}

interface StatisticsSectionProps {
  statistics: StatisticItem[];
  className?: string;
}

const StatisticsSection = ({ statistics, className = "" }: StatisticsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>(statistics.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const animationDuration = 2000; // 2 seconds
    const frameRate = 60; // 60 FPS
    const totalFrames = (animationDuration / 1000) * frameRate;

    statistics.forEach((stat, index) => {
      let currentFrame = 0;
      
      const animate = () => {
        currentFrame++;
        const progress = currentFrame / totalFrames;
        const easeOutQuart = 1 - Math.pow(1 - progress, 4); // Easing function
        const currentValue = Math.floor(stat.value * easeOutQuart);

        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (currentFrame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final value is exact
          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = stat.value;
            return newValues;
          });
        }
      };

      // Stagger the animations slightly
      setTimeout(() => {
        requestAnimationFrame(animate);
      }, index * 100);
    });
  }, [isVisible, statistics]);

  const formatNumber = (num: number): string => {
    return num.toLocaleString();
  };

  return (
    <section ref={sectionRef} className={`py-8 sm:py-12 md:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid gap-4 sm:gap-6 md:gap-8 text-center ${
          statistics.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
          statistics.length === 3 ? 'grid-cols-1 sm:grid-cols-3' :
          statistics.length === 4 ? 'grid-cols-2 md:grid-cols-4' :
          statistics.length <= 6 ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6' :
          'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        }`}>
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className={`relative ${
                index < statistics.length - 1 && statistics.length >= 3
                  ? 'md:after:h-[80%] md:after:w-[2px] md:after:bg-[#0A2647] md:after:absolute md:after:top-1/2 md:after:right-0 md:after:-translate-y-1/2'
                  : ''
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0A2647] mb-1 sm:mb-2">
                {formatNumber(animatedValues[index])}{stat.suffix || ''}
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-600 leading-tight">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
