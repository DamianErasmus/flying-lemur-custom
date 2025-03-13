import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

// Define colors directly
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const ServiceCard = ({ service }: { service: any }) => {
  return (
    <Link
      to={`/services#${service.slug}`}
      className="block group relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg h-full"
    >
      <div className="w-full aspect-[4/3] overflow-hidden flex items-start justify-center">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-bottom transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Service title and description - centered with title at top */}
      <div className="absolute inset-0 flex flex-col items-center justify-between p-6 pointer-events-none">
        {/* Title at top - visible on mobile, hidden until hover on desktop */}
        <h3
          className="text-white font-heading text-2xl text-center md:opacity-0 md:group-hover:opacity-100 md:translate-y-[-10px] md:group-hover:translate-y-0 transition-all duration-300 px-4 py-2 rounded"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          {service.title}
        </h3>

        {/* Empty middle space */}
        <div className="flex-grow"></div>

        {/* Description at bottom - always hidden until hover */}
        <p className="text-white text-sm text-center opacity-0 group-hover:opacity-90 transition-opacity duration-300 line-clamp-2 max-w-full bg-black/30 px-4 py-2 rounded">
          {service.miniDescription}
        </p>
      </div>
    </Link>
  );
};

const Services = () => {
  const { services } = useAppSelector((state) => state.services);

  return (
    <section
      className="lg:px-24 py-20 w-full"
      style={{ backgroundColor: "#F5F5F5" }}
    >
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-heading mb-12 pl-4"
          style={{ color: colors.dark }}
        >
          Our <span style={{ color: colors.lapis }}>Services</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
