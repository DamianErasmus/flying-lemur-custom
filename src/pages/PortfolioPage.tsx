import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PortfolioGrid } from "../components/portfolio/PortfolioGrid";

// Define colors (matching the homepage)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

export default function PortfolioPage() {
  // Set page title and scroll to top on mount
  useEffect(() => {
    document.title = "Our Portfolio | Flying Lemur Agency";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          className="py-20 lg:py-24 w-full"
          aria-labelledby="portfolio-title"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1
                id="portfolio-title"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                style={{ color: colors.dark }}
              >
                Our <span style={{ color: colors.lapis }}>Portfolio</span>
              </h1>
              <p className="text-lg text-gray-600">
                Explore our diverse collection of projects that showcase our
                expertise in creating impactful digital experiences for
                businesses across various industries.
              </p>
            </div>

            {/* Portfolio Grid Component */}
            <PortfolioGrid />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
