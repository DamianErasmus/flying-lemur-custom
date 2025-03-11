import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Navigation items
const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Work", href: "/portfolio" },
  { label: "Contact Us", href: "/contact" },
];

// Define colors directly (matching the homepage)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if current path matches the nav item path
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Add scroll event listener to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <span
              className="text-2xl font-bold tracking-tight"
              style={{ color: colors.dark }}
            >
              Flying<span style={{ color: colors.lapis }}>Lemur</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/about"
              className={`text-gray-700 hover:text-gray-900 font-medium transition-colors ${
                isActive("/about") ? "border-b-2 border-current" : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-gray-700 hover:text-gray-900 font-medium transition-colors ${
                isActive("/services") ? "border-b-2 border-current" : ""
              }`}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className={`text-gray-700 hover:text-gray-900 font-medium transition-colors ${
                isActive("/portfolio") ||
                location.pathname.startsWith("/portfolio/")
                  ? "border-b-2 border-current"
                  : ""
              }`}
            >
              Portfolio
            </Link>
            <Button
              asChild
              className="px-6 py-2 text-white"
              style={{ backgroundColor: colors.lapis }}
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/about"
                className={`text-gray-700 hover:text-gray-900 font-medium py-2 ${
                  isActive("/about") ? "border-b-2 border-current" : ""
                }`}
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-gray-700 hover:text-gray-900 font-medium py-2 ${
                  isActive("/services") ? "border-b-2 border-current" : ""
                }`}
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className={`text-gray-700 hover:text-gray-900 font-medium py-2 ${
                  isActive("/portfolio") ||
                  location.pathname.startsWith("/portfolio/")
                    ? "border-b-2 border-current"
                    : ""
                }`}
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Button
                asChild
                className="w-full py-2 text-white mt-2"
                style={{ backgroundColor: colors.lapis }}
                onClick={closeMenu}
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
