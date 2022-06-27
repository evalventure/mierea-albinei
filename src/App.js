import logo from "./logo.svg";
import "./App.css";

import Header from "./Components/Header/Header";
import LandingSection from "./Components/LandingSection/LandingSection";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <LandingSection />
      <Products />
      <Footer />
    </>
  );
}

export default App;
