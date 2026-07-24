import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "./components/theme-provider";
import { SiteHeader } from "./components/SiteHeader";
import { SiteFooter } from "./components/SiteFooter";
import { LoadingScreen } from "./components/LoadingScreen";
import { Toaster } from "sonner";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Hosting from "./pages/Hosting";
import Saas from "./pages/Saas";
import Finance from "./pages/Finance";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_DISPLAY_TIME = 1800; 
    const startTime = Date.now();

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);
      setTimeout(() => setIsLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => window.removeEventListener("load", finishLoading);
    }
  }, []);
  
  // AOS init — loader fully fade out
  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => {
        AOS.init({
          duration: 800,
          easing: "ease-out",
          once: false,
          mirror: true,
        });
        AOS.refresh();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);
  return (
    <ThemeProvider>
      <LoadingScreen isLoading={isLoading} />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/hosting" element={<Hosting />} />
            <Route path="/saas" element={<Saas />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
      <Toaster richColors position="bottom-center" />
    </ThemeProvider>
  );
}

export default App;