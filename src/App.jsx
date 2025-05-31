import Downloads from "./components/Downloads";
import FaqAccordion from "./components/FAQ/FaqAccordion";
import Features from "./components/FeatureSect/Features";
import Header from "./ui/Header";
import Newsletter from "./components/Newsletter";
import TextBox from "./components/TextBox";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <main className="site-padding ">
        <Header />
        <Features />
        <Downloads />
        <FaqAccordion />
      </main>
      <Newsletter />
      <Footer />
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
