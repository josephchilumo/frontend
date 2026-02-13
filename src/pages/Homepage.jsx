import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Insights from "../components/Insights";
import ContactTeaser from "../components/ContactTeaser";
import Footer from "../components/Footer";
function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Insights />
      <ContactTeaser />
      <Footer />
    </>
  );
}

export default Homepage;
