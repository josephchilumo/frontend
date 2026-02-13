import { useState, useEffect } from "react";
import testimonials from "../data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteRight,
} from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = testimonials.length;

  // Auto-slide with pause on hover
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 6000);

    return () => clearInterval(interval);
  }, [paused, length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + length) % length);
  };

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const testimonial = testimonials[index];

  return (
    <section
      className="relative py-28 bg-gray-50 overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative">

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16">
          Client Testimonials
        </h2>

        <div
          className="relative backdrop-blur-xl bg-white/70 border border-gray-200 p-12 rounded-3xl shadow-xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Subtle Quote Watermark */}
          <FaQuoteRight className="absolute text-gray-200 text-9xl top-6 right-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(8px)", y: 40 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(8px)", y: -40 }}
              transition={{ duration: 0.8 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 100) prevSlide();
                if (info.offset.x < -100) nextSlide();
              }}
              className="cursor-grab active:cursor-grabbing"
            >
              {/* Gold Stars */}
              <div className="flex justify-center mb-6 text-yellow-500 text-xl">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 italic mb-10 leading-relaxed">
                “{testimonial.text}”
              </p>

              {/* Client Info with Floating Effect */}
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-yellow-500 shadow-md"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg mb-4 shadow-md">
                    {getInitials(testimonial.name)}
                  </div>
                )}

                <h4 className="font-semibold text-gray-900 text-lg">
                  {testimonial.name}
                </h4>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
          >
            <FaChevronLeft className="text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:scale-110 transition"
          >
            <FaChevronRight className="text-gray-700" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === index
                  ? "bg-yellow-500 scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
