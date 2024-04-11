import React from "react";
import Footer from "../../components/Footer";
import DrawerAppBar from "../../components/Navbar";
import Community from "./components/community";
import Cta from "./components/cta";
import Hero from "./components/hero";
import Offer from "./components/offer";
import Partners from "./components/partners";
import Support from "./components/support";
import Testimonials from "./components/testimonials";
import WhyBouk from "./components/why-bouk";

const Home = () => {
  return (
    <>
      <div style={{ backgroundColor: "#fff" }}>
        <DrawerAppBar />
        <Hero />
        <Community />
        <WhyBouk />
        <Offer />
        <Support />
        <Testimonials />
        <Cta />
        <Partners />
        <Footer />
      </div>
    </>
  );
};

export default Home;
