import { Button } from "@/components/ui/button";

// Define colors directly (we'll use these until we resolve the global color issue)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const Hero = () => {
  return (
    <section
      className="min-h-screen w-full flex items-center"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container mx-auto px-4 lg:px-24 py-12 pt-24 md:pt-16">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content - Takes up 2/3 on desktop */}
          <div className="w-full lg:w-2/3 mb-10 lg:mb-0 lg:pr-12">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight"
              style={{ color: colors.dark }}
            >
              Making the internet{" "}
              <span style={{ color: colors.lapis }}>comfortable</span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 font-body max-w-2xl"
              style={{ color: colors.dark }}
            >
              We specialize in Web Development & Design, E-commerce solutions,
              and Content Creation — all delivered with a feeling of comfort and
              ease that sets us apart.
            </p>

            <Button
              className="text-white hover:opacity-90 cursor-pointer px-8 py-6 text-lg"
              style={{ backgroundColor: colors.lapis }}
            >
              Contact Us
            </Button>
          </div>

          {/* Image - Takes up 1/3 on desktop */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Using a placeholder image - you'll want to replace this with your actual image */}
              <img
                src="https://placehold.co/600x400/e0e0e0/3A6788?text=Laptop+on+Chair"
                alt="Laptop on an Oxford Chair"
                className="rounded-lg shadow-md w-full h-auto"
                width="600"
                height="400"
                loading="lazy"
              />
              {/* Decorative element */}
              <div
                className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full -z-10"
                style={{ backgroundColor: colors.yelo }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
