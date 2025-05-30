import Downloads from "./components/Downloads";
import FaqAccordion from "./components/FAQ/FaqAccordion";
import Features from "./components/Features";
import Header from "./ui/Header";
import Newsletter from "./components/Newsletter";
import TextBox from "./components/TextBox";
import Footer from "./ui/Footer";

function App() {
  return (
    <>
      <main className="site-padding">
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

  More Info

  Intelligent search

  Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.

  More Info

  Share your bookmarks

  Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.

  More Info
 
*/
