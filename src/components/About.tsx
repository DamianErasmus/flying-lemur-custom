import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";

// Define colors directly (we'll use these until we resolve the global color issue)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const About = () => {
  const { title, description } = useAppSelector((state) => state.about);

  return (
    <section className="py-20 w-full" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Text Content - Takes up 45% on desktop with extra padding */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-0 lg:pl-24 lg:pr-12">
            <h2
              className="text-3xl md:text-4xl font-heading mb-6"
              style={{ color: colors.dark }}
            >
              {title}
            </h2>
            <p className="text-gray-600 mb-8">{description}</p>
            <Button
              asChild
              className="text-white hover:opacity-90 px-8 py-6 text-lg"
              style={{ backgroundColor: colors.oran }}
            >
              <a href="/about">Our Story</a>
            </Button>
          </div>

          {/* Image - Takes up 55% on desktop with taller aspect ratio */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-start">
            <div className="relative w-full h-full">
              {/* Using a placeholder image - you'll want to replace this with your actual image */}
              <div className="aspect-[4/3] w-full">
                <img
                  src="https://placehold.co/800x600/f5f5f5/dc7a5f?text=Laptop+with+Plant"
                  alt="Laptop on a table with a plant"
                  className="rounded-lg shadow-md w-full h-full object-cover text-lapis"
                  width="800"
                  height="600"
                  loading="lazy"
                />
              </div>
              {/* Decorative elements */}
              <div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full -z-10"
                style={{ backgroundColor: colors.gren }}
              ></div>
              <div
                className="absolute -bottom-3 left-1/4 w-64 h-3 rounded-full -z-10"
                style={{ backgroundColor: colors.yelo }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
