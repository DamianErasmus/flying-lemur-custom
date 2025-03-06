import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useAppSelector } from "@/redux/hooks";

// Define colors directly (we'll use these until we resolve the global color issue)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Card className="h-full overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="overflow-hidden">
        <AspectRatio ratio={4 / 3}>
          <img
            src={project.image}
            alt={project.alt}
            className="w-full h-full object-cover"
            width="800"
            height="600"
            loading="lazy"
          />
        </AspectRatio>
      </div>
      <CardHeader className="p-4 pb-0">
        <span className="text-sm font-medium" style={{ color: colors.lapis }}>
          {project.category}
        </span>
        <h3 className="text-xl font-heading" style={{ color: colors.dark }}>
          {project.title}
        </h3>
      </CardHeader>
      <CardFooter className="p-4 pt-2">
        <Button
          asChild
          variant="outline"
          className="mt-2 border-2 hover:bg-transparent transition-colors duration-300"
          style={{ borderColor: colors.lapis, color: colors.lapis }}
        >
          <a href={`/case-studies/${project.slug}`}>View Case Study</a>
        </Button>
      </CardFooter>
    </Card>
  );
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
                <ProjectCard project={project} />
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
            <a href="/our-work">View All Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
