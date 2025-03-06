import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster } from "@/components/ui/sonner";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />

      <main className="flex-grow flex items-center justify-center py-20">
        <div className="container mx-auto px-4 text-center">
          <h1
            className="text-6xl md:text-8xl font-bold mb-8"
            style={{ color: "#3A6788" }}
          >
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-8 py-3 rounded-lg text-white font-medium transition-all"
              style={{ backgroundColor: "#3A6788" }}
            >
              Back to Home
            </Link>
            <Link
              to="/about"
              className="px-8 py-3 rounded-lg text-white font-medium transition-all"
              style={{ backgroundColor: "#DC7A5F" }}
            >
              About Us
            </Link>
          </div>

          {/* Decorative elements */}
          <div className="relative mt-16 inline-block">
            <div
              className="absolute -top-4 -right-4 w-16 h-16 rounded-full -z-10"
              style={{ backgroundColor: "#7EB77F" }}
            ></div>
            <div
              className="absolute -bottom-3 left-1/4 w-48 h-3 rounded-full -z-10"
              style={{ backgroundColor: "#FFC86F" }}
            ></div>
            <img
              src="https://placehold.co/400x300/f5f5f5/3A6788?text=Flying+Lemur"
              alt="Flying Lemur"
              className="rounded-lg shadow-md"
              width="400"
              height="300"
            />
          </div>
        </div>
      </main>

      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
