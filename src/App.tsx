import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy-load page components for better performance
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));


// Import your custom Navbar and Footer components here
import Navbar from "./components/layout/Navbar"; // Adjust path as needed
import Footer from "./components/layout/Footer"; // Adjust path as needed

/**
 * Minimal loading fallback while routes load
 */
function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col antialiased">
        {/* Your Custom Navbar */}
        <Navbar />

        {/* Main Content / Active Route */}
        <main className="grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
            </Routes>
          </Suspense>
        </main>

        {/* Your Custom Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}