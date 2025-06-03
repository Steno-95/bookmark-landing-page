import Downloads from "./components/Downloads";
import FaqAccordion from "./components/FAQ/FaqAccordion";
import Features from "./components/FeatureSect/Features";
import Header from "./ui/Header";
import Newsletter from "./components/Newsletter";
import Footer from "./ui/Footer";
import Logo from "./ui/Logo";
import { useState } from "react";
import useScreenSize from "./hooks/useScreenSize";
import MobileNav from "./ui/MobileNav";
import Toast from "./ui/Toast";

function App() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const isMobile = useScreenSize();
  return (
    <>
      <main className="site-padding ">
        <Header
          isMobileOpen={isMobileOpen}
          onClick={() => setIsMobileOpen(true)}
        />
        <Features />
        <Downloads />
        <FaqAccordion />
      </main>
      <Newsletter setIsSuccess={setIsSuccess} isSuccess={isSuccess} />
      <Footer />
      {isMobile && isMobileOpen && (
        <MobileNav onClick={() => setIsMobileOpen(false)} />
      )}
      {isSuccess && <Toast setIsSuccess={setIsSuccess} />}
    </>
  );
}

export default App;

/*

  Features
  Pricing
  Contact
  Login

*/
