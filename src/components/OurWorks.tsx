import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/hooks";
import { PortfolioCard } from "./portfolio/PortfolioCard";
import { Link } from "react-router-dom";

// Define colors directly (we'll use these until we resolve the global color issue)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const OurWorks = () => {
  const { portfolioList } = useAppSelector((state) => state.portfolio);

  return (
    <section className="lg:px-24 py-20 w-full">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-heading mb-12 text-center"
          style={{ color: colors.dark }}
        >
          Our <span style={{ color: colors.lapis }}>Latest Works</span>
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {portfolioList.map((project) => (
              <CarouselItem
                key={project.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <PortfolioCard
                  item={{
                    id: project.id.toString(),
                    slug: project.slug,
                    image: project.image,
                    thumbnails: project.thumbnails,
                    alt: project.alt,
                    category: project.category,
                    title: project.title,
                    subtitle: project.subtitle,
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="relative static mr-2" />
            <CarouselNext className="relative static ml-2" />
          </div>
        </Carousel>

        {/* View All Work button */}
        <div className="flex justify-center mt-12">
          <Button
            asChild
            className="px-8 py-6 text-lg text-white hover:opacity-90"
            style={{ backgroundColor: colors.lapis }}
          >
            <Link to="/portfolio">View All Work</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
