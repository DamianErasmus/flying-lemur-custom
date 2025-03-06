import { Instagram, Linkedin, Twitter, Github } from "lucide-react";

interface Social {
  type: string;
  url: string;
}

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  socials: Social[];
}

export default function TeamMember({
  name,
  role,
  image,
  socials,
}: TeamMemberProps) {
  return (
    <div className="relative group overflow-hidden rounded-lg shadow-lg">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full aspect-[3/4] object-cover"
      />

      {/* Social icons - visible on hover for desktop, always visible on mobile */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-end gap-2 opacity-0 group-hover:opacity-100 md:transition-opacity md:duration-300 md:bg-gradient-to-b md:from-black/50 md:to-transparent md:h-20">
        {socials.map((social, index) => {
          let Icon;
          switch (social.type) {
            case "instagram":
              Icon = Instagram;
              break;
            case "linkedin":
              Icon = Linkedin;
              break;
            case "twitter":
              Icon = Twitter;
              break;
            case "github":
              Icon = Github;
              break;
            default:
              Icon = Linkedin;
          }

          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>

      {/* Always visible info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-white/80">{role}</p>
      </div>

      {/* Mobile-only social icons */}
      <div className="absolute top-0 left-0 right-0 p-4 flex justify-end gap-2 md:hidden">
        {socials.map((social, index) => {
          let Icon;
          switch (social.type) {
            case "instagram":
              Icon = Instagram;
              break;
            case "linkedin":
              Icon = Linkedin;
              break;
            case "twitter":
              Icon = Twitter;
              break;
            case "github":
              Icon = Github;
              break;
            default:
              Icon = Linkedin;
          }

          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Icon size={18} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
