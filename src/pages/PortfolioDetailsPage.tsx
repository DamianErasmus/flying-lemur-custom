import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink } from "lucide-react";

// Define colors (matching the homepage)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

export default function PortfolioDetailsPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Get portfolio item from Redux store
  const portfolioItems = useSelector(
    (state: RootState) => state.portfolio.portfolioList
  );
  const portfolioItem = portfolioItems.find((item) => item.slug === slug);

  // Set page title and scroll to top on mount
  useEffect(() => {
    if (portfolioItem) {
      document.title = `${portfolioItem.title} | Flying Lemur Agency`;
    } else {
      document.title = "Project Not Found | Flying Lemur Agency";
    }
    window.scrollTo(0, 0);
  }, [portfolioItem]);

  // Handle case where project is not found
  if (!portfolioItem) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-6">
              The project you're looking for doesn't exist or has been removed.
            </p>
            <Button
              onClick={() => navigate("/portfolio")}
              className="inline-flex items-center gap-2"
              style={{ backgroundColor: colors.lapis }}
            >
              <ArrowLeft size={16} />
              Back to Portfolio
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 lg:py-20 w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              {/* Project Image - 55% width on desktop */}
              <div className="w-full lg:w-[55%]">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={portfolioItem.image}
                    alt={portfolioItem.alt}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Project Details - 45% width on desktop */}
              <div className="w-full lg:w-[45%]">
                <div className="mb-2">
                  <span
                    className="inline-block px-3 py-1 text-sm font-medium rounded-full"
                    style={{
                      backgroundColor: colors.lapis + "20",
                      color: colors.lapis,
                    }}
                  >
                    {portfolioItem.category}
                  </span>
                </div>
                <h1
                  className="text-3xl md:text-4xl font-bold mb-3"
                  style={{ color: colors.dark }}
                >
                  {portfolioItem.title}
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  {portfolioItem.subtitle}
                </p>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">Project Scope</h2>
                  <p className="text-gray-700">{portfolioItem.scope}</p>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-3">
                    Project Details
                  </h2>
                  <div className="text-gray-700 space-y-4">
                    {portfolioItem.details
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">
                  {portfolioItem.link && (
                    <Button
                      className="inline-flex items-center gap-2"
                      style={{ backgroundColor: colors.oran }}
                      asChild
                    >
                      <a
                        href={portfolioItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Site <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}

                  <Button
                    variant="outline"
                    className="inline-flex items-center gap-2"
                    asChild
                  >
                    <Link to="/portfolio">
                      <ArrowLeft size={16} />
                      Back to Portfolio
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Screenshots Gallery */}
        {portfolioItem.screenshots && portfolioItem.screenshots.length > 0 && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2
                className="text-2xl md:text-3xl font-bold mb-10 text-center"
                style={{ color: colors.dark }}
              >
                Project Gallery
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {portfolioItem.screenshots.map((screenshot, index) => (
                  <div
                    key={index}
                    className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={
                        typeof screenshot === "string"
                          ? screenshot
                          : (screenshot as { image: string }).image
                      }
                      alt={`${portfolioItem.title} screenshot ${index + 1}`}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related Projects - Optional enhancement */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
              style={{ color: colors.dark }}
            >
              Related Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {portfolioItems
                .filter(
                  (item) =>
                    item.category === portfolioItem.category &&
                    item.id !== portfolioItem.id
                )
                .slice(0, 3)
                .map((item) => (
                  <Link
                    key={item.id}
                    to={`/portfolio/${item.slug}`}
                    className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>

            {portfolioItems.filter(
              (item) =>
                item.category === portfolioItem.category &&
                item.id !== portfolioItem.id
            ).length === 0 && (
              <div className="text-center">
                <Button
                  className="inline-flex items-center gap-2"
                  style={{ backgroundColor: colors.lapis }}
                  asChild
                >
                  <Link to="/portfolio">View All Projects</Link>
                </Button>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
