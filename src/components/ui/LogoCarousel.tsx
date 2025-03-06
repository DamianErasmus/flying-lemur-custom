import { useState, useRef, useEffect } from "react";
import { ClientLogo } from "@/redux/slices/clientsSlice";

interface LogoCarouselProps {
  logos: ClientLogo[];
  speed?: number; // pixels per second
}

export default function LogoCarousel({ logos, speed = 50 }: LogoCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [animationStyle, setAnimationStyle] = useState({});
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Set up the animation
  useEffect(() => {
    if (!contentRef.current) return;

    // Get the width of the content (half because we duplicate the content)
    const contentWidth = contentRef.current.scrollWidth / 2;

    // Calculate duration based on content width and speed
    const duration = contentWidth / speed;

    // Create a unique animation name
    const animationName = `scroll-${Math.floor(Math.random() * 1000000)}`;

    // Create the keyframes
    const keyframes = `
      @keyframes ${animationName} {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-${contentWidth}px);
        }
      }
    `;

    // Add the keyframes to the document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    // Set the animation style
    setAnimationStyle({
      animation: `${animationName} ${duration}s linear infinite`,
    });

    // Clean up
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [speed, logos]);

  // Duplicate logos to create a seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className="overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={contentRef}
        className="flex items-center"
        style={{
          ...animationStyle,
          animationPlayState: isHovered ? "paused" : "running",
          whiteSpace: "nowrap",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.id}-${index}`}
            className="flex-none mx-8 w-[120px] md:w-[160px] h-[80px] md:h-[100px] flex items-center justify-center"
          >
            {logo.url ? (
              <a
                href={logo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-80"
                title={logo.description || logo.name}
              >
                <img
                  src={logo.logoSrc}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </a>
            ) : (
              <img
                src={logo.logoSrc}
                alt={logo.name}
                className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                title={logo.description || logo.name}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
