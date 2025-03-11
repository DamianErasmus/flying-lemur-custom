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
  const { services } = useSelector((state: RootState) => state.services);
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const location = useLocation();
  const serviceSectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // Set page title and handle hash navigation
  useEffect(() => {
    document.title = "Our Services | Flying Lemur Agency";

    // Scroll to top first (to ensure consistent starting position)
    window.scrollTo(0, 0);

    // Handle hash navigation after a short delay to ensure the page is fully loaded
    const hash = location.hash.replace("#", "");
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          // Scroll to the element with a small offset for the header
          const headerOffset = 100; // Adjust based on your header height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  }, [location.hash]);

  const openContactForm = (serviceName: string) => {
    setSelectedService(serviceName);
    setContactFormOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow">
        {/* What We Do Section - Now with bigger, less colored subheading */}
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
              <p className="text-lg text-gray-700 mb-8">
                At Flying Lemur, we believe in making the digital world
                accessible to everyone. We work closely with you to understand
                your unique needs and create tailored solutions that help your
                business thrive online. Our approach is friendly,
                straightforward, and focused on delivering real results.
              </p>
            </div>

            {/* Services List - Two Columns with bigger, less colored subheading */}
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
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                      style={{ backgroundColor: service.color }}
                    >
                      <img
                        src={service.image}
                        alt=""
                        className="w-5 h-5 object-contain opacity-80"
                        width="20"
                        height="20"
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
                      <p className="text-gray-600 text-sm mt-0.5 line-clamp-1">
                        {service.description}
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
          // Define pricing tiers for each service
          const pricingTiers = [
            {
              title: "Basic",
              price: "$499",
              features: [
                "Initial consultation",
                "Basic design",
                "Standard features",
                "1 revision round",
                "14-day delivery",
              ],
              isPopular: false,
            },
            {
              title: "Standard",
              price: "$999",
              features: [
                "In-depth consultation",
                "Custom design",
                "Advanced features",
                "3 revision rounds",
                "Priority support",
                "10-day delivery",
              ],
              isPopular: true,
            },
            {
              title: "Premium",
              price: "$1,999",
              features: [
                "Comprehensive strategy",
                "Premium design",
                "All available features",
                "Unlimited revisions",
                "Dedicated support",
                "SEO optimization",
                "7-day delivery",
              ],
              isPopular: false,
            },
          ];

          return (
            <section
              key={service.id}
              id={service.slug}
              className="py-20 border-t border-gray-200 scroll-mt-24"
              aria-labelledby={`${service.slug}-title`}
              ref={(el) => {
                if (el) {
                  serviceSectionRefs.current[service.slug] = el;
                }
              }}
            >
              <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto mb-16">
                  <h2
                    id={`${service.slug}-title`}
                    className="text-3xl md:text-4xl font-bold mb-6 text-center"
                    style={{ color: service.color || "#3A6788" }}
                  >
                    {service.title}
                  </h2>

                  <p className="text-lg text-gray-700 mb-8">
                    {service.description}
                  </p>

                  {service.intro && (
                    <p className="text-lg text-gray-700">{service.intro}</p>
                  )}
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {pricingTiers.map((tier, index) => (
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
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-lapis rounded-md hover:bg-lapis/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lapis transition-colors"
                    style={{ backgroundColor: service.color || "#3A6788" }}
                  >
                    Get to Work
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
