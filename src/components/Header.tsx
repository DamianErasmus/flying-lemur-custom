import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Navigation items
const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/work" },
  { label: "Contact Us", href: "/contact" },
];

// Define colors directly
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <span className="font-heading text-lg">FL</span>
          </div>
          <span className="text-2xl font-heading">
            Flying<span>Lemur</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-dark hover:text-lapis transition-colors relative group"
            >
              {item.label}
              <span
                className="absolute left-0 bottom-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: colors.lapis }}
              ></span>
            </a>
          ))}
          <Button
            variant="default"
            className="hover:opacity-90 cursor-pointer"
            style={{ backgroundColor: colors.lapis, color: "white" }}
          >
            Get Started
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              "transition-transform duration-200",
              isMobileMenuOpen ? "rotate-90" : ""
            )}
          >
            {isMobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 12h16M4 6h16M4 18h16" />
            )}
          </svg>
        </Button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 overflow-hidden md:hidden",
            isMobileMenuOpen ? "max-h-[400px] border-t" : "max-h-0"
          )}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-body transition-colors py-2 border-b border-gray-100"
                  style={{ color: colors.dark }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="mt-4 w-full hover:opacity-90"
                style={{ backgroundColor: colors.lapis, color: "white" }}
              >
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
