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
import Services from "./pages/service/Services";
import Hosting from "./pages/Hosting";
import Saas from "./pages/Saas";
import Finance from "./pages/Finance";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ServiceLayout from "./pages/service/ServiceLayout";
import WebsiteDevelopment from "./pages/service/WebsiteDevelopment";
import ContactUsForm from "./components/ContactUsForm";
import ContactUsModal from "./components/ContactUsModal";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [contactModal, setContactModal] = useState(false);
  useEffect(() => {
    const MIN_DISPLAY_TIME = 1800;
    const startTime = Date.now();
    let loadingTimer;
    let contactTimer;

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(MIN_DISPLAY_TIME - elapsed, 0);
      loadingTimer = setTimeout(() => {
        setIsLoading(false);
        contactTimer = setTimeout(() => {
          document.body.style.overflow = "hidden";
          setContactModal(true);
        }, 2000);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading);
      return () => {
        window.removeEventListener("load", finishLoading);
        clearTimeout(loadingTimer);
        clearTimeout(contactTimer);
        document.body.style.overflow = "unset";
      };
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
            {/* <Route path="/services" element={<Services />}> */}
            <Route path="/services" element={<ServiceLayout />}>
              <Route path="" element={<Services />} />
              <Route
                path="website-development"
                element={<WebsiteDevelopment />}
              />
            </Route>
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
      <ContactUsModal
        isOpen={contactModal}
        onSkip={() => {
          setContactModal(false);
          document.body.style.overflow = "unset";
        }}
      >
        <ContactUsForm popup={true} setContactModal={setContactModal} />
      </ContactUsModal>
    </ThemeProvider>
  );
}

export default App;
