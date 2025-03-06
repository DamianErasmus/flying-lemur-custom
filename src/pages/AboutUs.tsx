import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Suspense, lazy, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";

// Lazy load components for better performance
const Counter = lazy(() => import("../components/ui/Counter"));
const TeamMember = lazy(() => import("../components/ui/TeamMember"));
const LogoCarousel = lazy(() => import("../components/ui/LogoCarousel"));

// Loading fallbacks
const CounterFallback = () => (
  <div className="flex flex-col items-center">
    <div className="h-10 w-20 bg-white/20 animate-pulse rounded"></div>
    <div className="h-6 w-32 mt-2 bg-white/20 animate-pulse rounded"></div>
  </div>
);

const ImageFallback = () => (
  <div className="w-full h-full min-h-[200px] bg-gray-200 animate-pulse rounded-lg"></div>
);

export default function AboutUs() {
  const { title, description, ourStory } = useSelector(
    (state: RootState) => state.about
  );
  const { logos: clientLogos } = useSelector(
    (state: RootState) => state.clients
  );

  // Set page title and scroll to top on mount
  useEffect(() => {
    // Set document title for basic SEO
    document.title = `${title} | Flying Lemur Agency`;
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [title]);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow">
        {/* Hero Section with laptop/mobile image (30%) and description (70%) - Full screen height on laptop */}
        <section
          className="py-10 md:py-0 md:h-screen flex items-center"
          aria-labelledby="about-title"
        >
          <div className="container mx-auto md:px-24 px-4">
            <div className="flex flex-col md:flex-row items-center md:gap-20 gap-10 h-full">
              {/* Image - 30% width on desktop */}
              <div className="w-full md:w-[45%]">
                <div className="relative">
                  <img
                    src="https://placehold.co/600x400/f5f5f5/3A6788?text=Devices"
                    alt="Laptop and mobile phone on a table"
                    className="rounded-lg shadow-md w-full"
                    width="600"
                    height="400"
                    loading="eager" // Load hero image eagerly
                  />
                  {/* Decorative elements */}
                  <div
                    className="absolute -top-4 -right-4 w-16 h-16 rounded-full -z-10"
                    style={{ backgroundColor: "#7EB77F" }}
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -bottom-3 left-1/4 w-32 h-3 rounded-full -z-10"
                    style={{ backgroundColor: "#FFC86F" }}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>

              {/* Description - 70% width on desktop */}
              <div className="w-full md:w-[70%]">
                <h1
                  id="about-title"
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-700">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section with counters */}
        <section
          className="py-10"
          style={{ backgroundColor: "#3A6788" }}
          aria-label="Company statistics"
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <Suspense fallback={<CounterFallback />}>
                <Counter end={50} label="Happy Clients" color="#FFFFFF" />
              </Suspense>
              <Suspense fallback={<CounterFallback />}>
                <Counter
                  end={120}
                  label="Projects Completed"
                  duration={2500}
                  color="#FFFFFF"
                />
              </Suspense>
              <Suspense fallback={<CounterFallback />}>
                <Counter
                  end={5}
                  label="Years of Experience"
                  duration={1500}
                  color="#FFFFFF"
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Our Story Section - Story on left (65%), image on right (35%) */}
        <section className="py-20" aria-labelledby="our-story-title">
          <div className="container mx-auto md:px-24 px-4">
            <div className="flex flex-col md:flex-row items-center gap-10">
              {/* Story content - 65% width on desktop */}
              <div className="w-full md:w-[65%]">
                <h2
                  id="our-story-title"
                  className="text-3xl md:text-4xl font-bold mb-8"
                >
                  Our Story
                </h2>
                <div className="space-y-6">
                  {ourStory.map((paragraph, index) => (
                    <p key={index} className="text-lg text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image - 35% width on desktop */}
              <div className="w-full md:w-[35%]">
                <div className="relative">
                  <Suspense fallback={<ImageFallback />}>
                    <img
                      src="https://placehold.co/600x800/f5f5f5/DC7A5F?text=Workspace"
                      alt="Comfortable workspace"
                      className="rounded-lg shadow-md w-full aspect-[3/4] object-cover"
                      width="600"
                      height="800"
                      loading="lazy"
                    />
                  </Suspense>
                  {/* Decorative elements */}
                  <div
                    className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full -z-10"
                    style={{ backgroundColor: "#FFC86F" }}
                    aria-hidden="true"
                  ></div>
                  <div
                    className="absolute -top-3 right-1/4 w-32 h-3 rounded-full -z-10"
                    style={{ backgroundColor: "#DC7A5F" }}
                    aria-hidden="true"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="team-title">
          <div className="container mx-auto px-4">
            <h2
              id="team-title"
              className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
              Our Team
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              <Suspense fallback={<ImageFallback />}>
                <TeamMember
                  name="Nina"
                  role="Creative Director"
                  image="https://placehold.co/600x800/f5f5f5/3A6788?text=Nina"
                  socials={[
                    { type: "instagram", url: "https://instagram.com" },
                    { type: "linkedin", url: "https://linkedin.com" },
                    { type: "twitter", url: "https://twitter.com" },
                  ]}
                />
              </Suspense>

              <Suspense fallback={<ImageFallback />}>
                <TeamMember
                  name="Damian"
                  role="Technical Director"
                  image="https://placehold.co/600x800/f5f5f5/DC7A5F?text=Damian"
                  socials={[
                    { type: "github", url: "https://github.com" },
                    { type: "linkedin", url: "https://linkedin.com" },
                    { type: "twitter", url: "https://twitter.com" },
                  ]}
                />
              </Suspense>
            </div>
          </div>
        </section>

        {/* Brand Logos Carousel */}
        <section
          className="py-16 border-t border-gray-200"
          aria-labelledby="clients-title"
        >
          <div className="container mx-auto px-4">
            <h2
              id="clients-title"
              className="text-2xl md:text-3xl font-bold mb-10 text-center"
            >
              Brands We've Worked With
            </h2>

            <Suspense
              fallback={
                <div className="h-24 bg-gray-100 animate-pulse rounded-lg"></div>
              }
            >
              <LogoCarousel logos={clientLogos} speed={50} />
            </Suspense>
          </div>
        </section>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
