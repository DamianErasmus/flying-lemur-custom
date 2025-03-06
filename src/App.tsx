import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Toaster } from "@/components/ui/sonner";

// Home page components
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import OurWorks from "./components/OurWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Pages
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <Hero />
      <About />
      <Services />
      <OurWorks />
      <Contact />
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
