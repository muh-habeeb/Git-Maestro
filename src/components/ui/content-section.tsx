'use client';

import {useRef, useEffect, useState, type ReactNode} from 'react';
import {cn} from '@/lib/utils';

interface ContentSectionProps {
  children: ReactNode;
  className?: string;
  id: string;
}

export default function ContentSection({
  children,
  className,
  id,
}: ContentSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px 0px -200px 0px',
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        'min-h-[90vh] w-full flex flex-col items-center justify-center p-8 transition-opacity duration-1000 ease-in-out',
        isVisible ? 'opacity-100' : 'opacity-0',
        className
      )}
    >
      <div
        className={cn(
          'w-full max-w-4xl space-y-8 transition-transform duration-1000 ease-out',
          isVisible ? 'translate-y-0' : 'translate-y-10'
        )}
      >
        {children}
      </div>
    </section>
  );
}
