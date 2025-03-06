import { Mail } from "lucide-react";

// Define colors directly (we'll use these until we resolve the global color issue)
const colors = {
  lapis: "#3A6788",
  yelo: "#FFC86F",
  oran: "#DC7A5F",
  dark: "#261F1D",
  gren: "#7EB77F",
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 lg:px-24 pt-16 pb-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: colors.dark }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} style={{ color: colors.lapis }} />
                <a
                  href="mailto:hello@flyinglemur.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  hello@flyinglemur.com
                </a>
              </li>
              {/* <li className="flex items-center gap-2">
                <Phone size={18} style={{ color: colors.lapis }} />
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="mt-1"
                  style={{ color: colors.lapis }}
                />
                <span className="text-gray-600">
                  123 Creative Street, Design District
                  <br />
                  San Francisco, CA 94103
                </span>
              </li> */}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-lg font-semibold mb-4"
              style={{ color: colors.dark }}
            >
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-2">
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/our-work"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Our Work
                  </a>
                </li>
              </ul>
              <ul className="space-y-2">
                {/* <li>
                  <a
                    href="/blog"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Careers
                  </a>
                </li> */}
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo and Copyright */}
          <div className="flex flex-col items-start md:items-end">
            <div className="mb-6">
              <a href="/" className="inline-block">
                <h2
                  className="text-2xl font-bold"
                  style={{ color: colors.lapis }}
                >
                  Flying Lemur
                </h2>
              </a>
            </div>
            <p className="text-gray-500 text-sm mb-4 md:text-right">
              Creative solutions for modern businesses.
              <br />
              We bring your ideas to life.
            </p>
            <p className="text-gray-400 text-sm md:text-right">
              © {currentYear} Flying Lemur. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
