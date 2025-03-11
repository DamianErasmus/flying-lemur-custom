import { useAppSelector } from "@/redux/hooks";
import { Link } from "react-router-dom";

// Define colors directly (we'll use these until we resolve the global color issue)
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
      className="block group relative rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
    >
      <div
        className="w-full aspect-[4/3] flex items-center justify-center rounded-lg"
        style={{ backgroundColor: service.color }}
      >
        {/* Icon or simple graphic could go here */}
        <div className="text-white text-5xl opacity-20">
          {/* This is a placeholder for an icon */}●
        </div>
      </div>

      {/* Desktop hover text - appears on hover without darkening */}
      <div className="absolute inset-0 flex flex-col justify-start pt-8 items-center pointer-events-none">
        <h3
          className="text-white font-heading text-2xl md:text-3xl p-4 md:p-6 md:opacity-0 md:group-hover:opacity-100 md:translate-y-[-10px] md:group-hover:translate-y-0 transition-all duration-300"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          {service.title}
        </h3>
      </div>

      {/* Mobile-only text - always visible without darkening */}
      <div className="absolute inset-0 flex flex-col justify-start pt-8 items-center md:hidden pointer-events-none">
        <h3
          className="text-white font-heading text-2xl p-4"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
        >
          {service.title}
        </h3>
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
