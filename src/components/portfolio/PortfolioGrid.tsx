import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { PortfolioCard } from "./PortfolioCard";
import { Button } from "@/components/ui/button";

// Define colors (matching the homepage)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

export function PortfolioGrid() {
  const portfolioItems = useSelector(
    (state: RootState) => state.portfolio.portfolioList
  );
  const [activeFilter, setActiveFilter] = useState("All");

  // Extract unique categories for filter buttons
  const categories = [
    "All",
    ...new Set(portfolioItems.map((item) => item.category)),
  ];

  // Filter items based on selected category
  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-10">
      {/* Filter buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActiveFilter(category)}
            variant={activeFilter === category ? "default" : "outline"}
            className={`rounded-full px-6 py-2 ${
              activeFilter === category
                ? "text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
            style={
              activeFilter === category ? { backgroundColor: colors.lapis } : {}
            }
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Portfolio grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filteredItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>

      {/* Empty state */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-gray-600">
            No projects match the selected filter. Try selecting a different
            category.
          </p>
        </div>
      )}
    </div>
  );
}
