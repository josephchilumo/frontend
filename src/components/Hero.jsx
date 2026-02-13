import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import slides from "../data/slides";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );

  useEffect(() => {
    const interval = setInterval(nextSlide, 8000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-[600px] overflow-hidden bg-black rounded-b-3xl">
      {/* Background Image Slides */}
      {slide.type === "background" && (
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
      )}

      {/* Foreground Image Slides */}
      {slide.type === "image" && (
        <AnimatePresence mode="wait">
          <motion.img
            key={slide.image}
            src={slide.image}
            alt=""
            className="absolute right-10 bottom-0 h-[85%] object-contain z-10"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileHover={{ y: -15 }}
          />
        </AnimatePresence>
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0 rounded-b-3xl" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center h-full max-w-6xl mx-auto px-6">

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.headline}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 60 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              initial={{ letterSpacing: "8px", opacity: 0 }}
              animate={{ letterSpacing: "0px", opacity: 1 }}
              transition={{ duration: 1.2 }}
            >
              {slide.headline}
            </motion.h1>

            <motion.p
              className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {slide.description}
            </motion.p>

            <motion.div
              className="mt-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <NavLink
                to={slide.ctaLink}
                className="px-6 py-3 bg-red-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-red-700 transition transform hover:scale-105"
              >
                {slide.ctaText}
              </NavLink>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-3xl z-30 hover:scale-125 transition"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-3xl z-30 hover:scale-125 transition"
      >
        ❯
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-red-600 scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
