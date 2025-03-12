import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
  alt: string;
  category: string;
  title: string;
  subtitle: string;
}

export function PortfolioCard({ item }: { item: PortfolioItemProps }) {
  return (
    <Link to={`/portfolio/${item.slug}`} className="block h-full">
      <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 h-full transform hover:-translate-y-1">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={item.image}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
          />
          <Badge
            className="absolute top-4 left-4 text-xs font-medium"
            style={{ backgroundColor: colors.lapis }}
          >
            {item.category}
          </Badge>
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
