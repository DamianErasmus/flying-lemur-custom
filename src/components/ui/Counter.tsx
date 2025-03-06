import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
  color?: string;
}

export default function Counter({
  end,
  label,
  duration = 2000,
  color = "#3A6788",
}: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [end, duration, isVisible]);

  return (
    <div ref={countRef} className="flex flex-col items-center">
      <div className="text-4xl md:text-5xl font-bold" style={{ color }}>
        {count}+
      </div>
      <div className="text-lg mt-2 text-gray-600 dark:text-gray-300">
        {label}
      </div>
    </div>
  );
}
