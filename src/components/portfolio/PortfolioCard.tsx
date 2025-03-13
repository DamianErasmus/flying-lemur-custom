import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useRef } from "react";

// Define colors (matching the homepage)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

export interface PortfolioItemProps {
  id: number | string;
  slug: string;
  image: string;
  thumbnails?: string[]; // Array of thumbnail images for carousel
  alt: string;
  category: string;
  title: string;
  subtitle: string;
}

export function PortfolioCard({ item }: { item: PortfolioItemProps }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const hasThumbnails = item.thumbnails && item.thumbnails.length > 1;
  const intervalRef = useRef<number | null>(null);

  // Set up automatic image rotation for cards with multiple thumbnails
  useEffect(() => {
    if (hasThumbnails) {
      // Start the interval
      intervalRef.current = window.setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % (item.thumbnails?.length || 1)
        );
      }, 4000); // Change image every 4 seconds
    }

    // Clean up interval on unmount
    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [hasThumbnails, item.thumbnails]);

  // Get the current image to display
  const currentImage = hasThumbnails
    ? item.thumbnails?.[currentImageIndex]
    : item.image;

  return (
    <Link to={`/portfolio/${item.slug}`} className="block h-full">
      <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* Image with fade transition */}
          <img
            src={currentImage}
            alt={item.alt}
            className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
            loading="lazy"
          />

          {/* Category badge */}
          <Badge
            className="absolute top-4 left-4 text-xs font-medium"
            style={{ backgroundColor: colors.lapis }}
          >
            {item.category}
          </Badge>

          {/* Carousel indicators for multiple thumbnails */}
          {hasThumbnails && item.thumbnails && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-1.5">
              {item.thumbnails.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "bg-white scale-110"
                      : "bg-white/50"
                  }`}
                  aria-label={`View image ${index + 1}`}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation
                    setCurrentImageIndex(index);

                    // Reset the interval timer when manually changing images
                    if (intervalRef.current) {
                      window.clearInterval(intervalRef.current);
                      intervalRef.current = window.setInterval(() => {
                        setCurrentImageIndex(
                          (prevIndex) =>
                            (prevIndex + 1) % (item.thumbnails?.length || 1)
                        );
                      }, 4000);
                    }
                  }}
                />
              ))}
            </div>
          )}
        </div>
        <CardContent className="p-6">
          <h3
            className="text-xl font-semibold mb-2 line-clamp-1"
            style={{ color: colors.dark }}
          >
            {item.title}
          </h3>
          <p className="text-gray-600 line-clamp-2">{item.subtitle}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
