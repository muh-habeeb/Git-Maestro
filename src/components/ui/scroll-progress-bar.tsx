'use client';

import {useState, useEffect} from 'react';

export default function ScrollProgressBar() {
  const [width, setWidth] = useState(0);

  const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scroll = (totalScroll / windowHeight) * 100;
    setWidth(scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{
          width: `${width}%`,
          boxShadow: '0 0 10px hsl(var(--primary))',
        }}
      ></div>
    </div>
  );
}
