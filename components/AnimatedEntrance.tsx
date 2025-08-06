'use client';

import { useEffect, useRef, useState } from 'react';

type AnimationType = 
  | 'fadeUp'
  | 'fadeDown' 
  | 'fadeLeft'
  | 'fadeRight'
  | 'fadeIn'
  | 'scaleUp'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'bounceIn'
  | 'zoomIn';

interface AnimatedEntranceProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const AnimatedEntrance = ({
  children,
  animation = 'fadeUp',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  className = '',
  once = true
}: AnimatedEntranceProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [threshold, once]);

  const getAnimationClasses = () => {
    const baseClasses = `transition-all ease-out`;
    const durationClass = `duration-${duration}`;
    
    const animations = {
      fadeUp: {
        initial: 'opacity-0 translate-y-8',
        animate: 'opacity-100 translate-y-0'
      },
      fadeDown: {
        initial: 'opacity-0 -translate-y-8',
        animate: 'opacity-100 translate-y-0'
      },
      fadeLeft: {
        initial: 'opacity-0 translate-x-8',
        animate: 'opacity-100 translate-x-0'
      },
      fadeRight: {
        initial: 'opacity-0 -translate-x-8',
        animate: 'opacity-100 translate-x-0'
      },
      fadeIn: {
        initial: 'opacity-0',
        animate: 'opacity-100'
      },
      scaleUp: {
        initial: 'opacity-0 scale-95',
        animate: 'opacity-100 scale-100'
      },
      slideUp: {
        initial: 'translate-y-full',
        animate: 'translate-y-0'
      },
      slideDown: {
        initial: '-translate-y-full',
        animate: 'translate-y-0'
      },
      slideLeft: {
        initial: 'translate-x-full',
        animate: 'translate-x-0'
      },
      slideRight: {
        initial: '-translate-x-full',
        animate: 'translate-x-0'
      },
      bounceIn: {
        initial: 'opacity-0 scale-50',
        animate: 'opacity-100 scale-100'
      },
      zoomIn: {
        initial: 'opacity-0 scale-0',
        animate: 'opacity-100 scale-100'
      }
    };

    const currentAnimation = animations[animation];
    const visibilityClass = isVisible ? currentAnimation.animate : currentAnimation.initial;
    
    return `${baseClasses} ${durationClass} ${visibilityClass}`;
  };

  const getDelayStyle = () => {
    return delay > 0 ? { transitionDelay: `${delay}ms` } : {};
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
      style={getDelayStyle()}
    >
      {children}
    </div>
  );
};

export default AnimatedEntrance;
