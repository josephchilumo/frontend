import { useState, useEffect } from "react";
import testimonials from "../../data/testimonials";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const length = testimonials.length;

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 6000);
    return () => clearInterval(interval);
  }, [paused, length]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + length) % length);

  const getInitials = (name) =>
    name.split(" ").map((n) => n[0]).join("").toUpperCase();

  const testimonial = testimonials[index];

  return (
    <section
      className="relative font-serif py-32 bg-[#F8F7F4] overflow-hidden"
      id="testimonials"
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <h2 className="text-4xl md:text-5xl font-light text-[#0F172A] mb-16 tracking-wide leading-tight">
          Client Testimonials
        </h2>

        <div
          className="relative bg-white/60 backdrop-blur-sm border border-gray-200 p-12 rounded-3xl shadow-lg"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Subtle Quote Watermark */}
          <FaQuoteRight className="absolute text-gray-200 text-9xl top-6 right-10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
              transition={{ duration: 0.8 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-6 text-[#C6A75E] text-xl">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-gray-700 italic mb-10 leading-relaxed">
                “{testimonial.text}”
              </p>

              {/* Client Info */}
              <motion.div
                className="flex flex-col items-center"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-[#C6A75E] shadow-sm"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-[#C6A75E] text-white flex items-center justify-center font-semibold text-lg mb-4 shadow-sm">
                    {getInitials(testimonial.name)}
                  </div>
                )}

                <h4 className="font-semibold text-[#0F172A] text-lg">
                  {testimonial.name}
                </h4>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-sm hover:bg-white transition"
          >
            <FaChevronLeft className="text-[#0F172A]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-sm hover:bg-white transition"
          >
            <FaChevronRight className="text-[#0F172A]" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 space-x-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#C6A75E] scale-125" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
