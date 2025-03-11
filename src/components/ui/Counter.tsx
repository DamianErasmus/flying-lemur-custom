import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  label: string;
  duration?: number;
  color?: string;
  smallScreen?: boolean;
}

export default function Counter({
  end,
  label,
  duration = 2000,
  color = "#3A6788",
  smallScreen = false,
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
      <div
        className={`font-bold ${
          smallScreen
            ? "text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            : "text-4xl md:text-5xl"
        }`}
        style={{ color }}
      >
        {count}+
      </div>
      <div
        className={`mt-2 ${
          smallScreen ? "text-xs sm:text-sm md:text-base lg:text-lg" : "text-lg"
        } text-gray-200`}
      >
        {label}
      </div>
    </div>
  );
}
