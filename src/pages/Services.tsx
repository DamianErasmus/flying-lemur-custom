import { useState, useEffect, lazy, Suspense, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { RootState } from "../redux/store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import { Toaster } from "@/components/ui/sonner";
import ContactFormOverlay from "../components/ui/ContactFormOverlay";

// Lazy load components
const PricingCard = lazy(() => import("../components/ui/PricingCard"));

// Loading fallbacks
const PricingCardFallback = () => (
  <div className="bg-gray-100 animate-pulse rounded-lg h-80"></div>
);

// Define colors directly (matching the homepage)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

export default function Services() {
  const { services, whatWeDo } = useSelector(
    (state: RootState) => state.services
  );
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const location = useLocation();
  const serviceSectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const [initialScrollComplete, setInitialScrollComplete] = useState(false);

  // Set page title and handle hash navigation
  useEffect(() => {
    document.title = "Our Services | Flying Lemur Agency";

    // Handle hash navigation
    if (location.hash && !initialScrollComplete) {
      setInitialScrollComplete(true);

      // First scroll to top to ensure consistent starting position
      window.scrollTo(0, 0);

      // Use a longer delay to ensure everything is loaded
      setTimeout(() => {
        const hash = location.hash.replace("#", "");
        const element = document.getElementById(hash);

        if (element) {
          // Get the header height from CSS variable
          const headerHeight = parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--header-height"
            ) || "80"
          );

          // Calculate the position
          const elementPosition =
            element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - headerHeight;

          // Scroll to the calculated position
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 800); // Use a longer delay for more reliability
    }
  }, [location.hash, initialScrollComplete]);

  // Reset the scroll flag when the location changes
  useEffect(() => {
    return () => {
      setInitialScrollComplete(false);
    };
  }, [location.pathname]);

  const openContactForm = (serviceName: string) => {
    setSelectedService(serviceName);
    setContactFormOpen(true);
  };

  // Smooth scroll function for service links with improved positioning
  const scrollToService = (serviceSlug: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(serviceSlug);
    if (element) {
      // Get the header height from CSS variable
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height"
        ) || "80"
      );

      // Calculate the position
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without causing a page jump
      window.history.pushState(null, "", `#${serviceSlug}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow">
        {/* What We Do Section */}
        <section
          className="py-20 w-full"
          style={{ backgroundColor: "#F5F5F5" }}
          aria-labelledby="what-we-do-title"
        >
          <div className="container mx-auto px-4">
            <h2
              id="what-we-do-title"
              className="text-3xl md:text-4xl font-heading mb-12 text-center"
              style={{ color: colors.dark }}
            >
              What We <span style={{ color: colors.lapis }}>Do</span>
            </h2>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-lg text-gray-700 mb-8">{whatWeDo}</p>
            </div>

            {/* Services List */}
            <div className="max-w-4xl mx-auto">
              <h3
                className="text-2xl md:text-3xl font-heading mb-8 text-center"
                style={{ color: colors.dark }}
              >
                Our Services
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.slug}`}
                    className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all group"
                    onClick={(e) => scrollToService(service.slug, e)}
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 mr-4">
                      <img
                        src={service.image}
                        alt=""
                        className="w-full h-full object-cover"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="overflow-hidden">
                      <h4
                        className="text-lg font-medium group-hover:text-lapis transition-colors truncate"
                        style={{ color: colors.dark }}
                      >
                        {service.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-0.5 line-clamp-2">
                        {service.miniDescription}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Individual Service Sections */}
        {services.map((service) => {
          return (
            <section
              key={service.id}
              id={service.slug}
              className="py-20 border-t border-gray-200"
              style={{
                scrollMarginTop: "var(--header-height, 80px)",
              }}
              aria-labelledby={`${service.slug}-title`}
              ref={(el) => {
                if (el) {
                  serviceSectionRefs.current[service.slug] = el;
                }
              }}
            >
              <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-10 mb-16">
                  {/* Service image */}
                  <div className="w-full md:w-1/3">
                    <div className="rounded-lg overflow-hidden shadow-md">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Service description */}
                  <div className="w-full md:w-2/3">
                    <h2
                      id={`${service.slug}-title`}
                      className="text-3xl md:text-4xl font-bold mb-6"
                      style={{ color: service.color }}
                    >
                      {service.title}
                    </h2>

                    <p className="text-lg text-gray-700 mb-6">
                      {service.description}
                    </p>

                    <p className="text-lg text-gray-700 mb-6">
                      {service.intro}
                    </p>

                    <p className="text-gray-700">{service.fullDescription}</p>
                  </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {service.pricingTiers.map((tier, index) => (
                    <Suspense key={index} fallback={<PricingCardFallback />}>
                      <PricingCard
                        title={tier.title}
                        price={tier.price}
                        features={tier.features}
                        isPopular={tier.isPopular}
                      />
                    </Suspense>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="text-center">
                  <button
                    onClick={() => openContactForm(service.title)}
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white rounded-md hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors"
                    style={{ backgroundColor: service.color }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </section>
          );
        })}

        {/* Contact Section - Using the existing Contact component */}
        <Contact />
      </main>

      <Footer />
      <Toaster position="top-center" richColors />

      {/* Contact Form Overlay */}
      <ContactFormOverlay
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
        subject={`Interest in ${selectedService}`}
      />
    </div>
  );
}
