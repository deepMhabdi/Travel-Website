import React from "react";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Destination from "./components/Destination";
import Booking from "./components/Booking";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-primary">
      <LandingPage />
      <Services />
      <Destination />
      <Booking />
      <AboutUs />
      <Footer />
    </div>
  );
};

export default App;
