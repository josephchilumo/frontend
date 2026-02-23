import React from "react";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Services from "../components/home/Services"; 
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Insights from "../components/home/Insights";
import ContactTeaser from "../components/home/ContactTeaser";
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