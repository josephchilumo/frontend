import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      className="relative py-28 bg-[#0F172A] text-white font-serif"
      id="cta"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-light tracking-wide leading-tight mb-8"
        >
          Ready to Discuss Your Case?
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Our experienced legal team provides strategic counsel and
          dedicated representation tailored to your needs.
          Schedule a confidential consultation today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Primary Button */}
          <NavLink
            to="/contactpage"
            className="px-10 py-4 bg-[#C6A75E] text-black text-sm tracking-wider uppercase font-medium rounded-full transition-all duration-300 hover:opacity-90"
          >
            Schedule Consultation
          </NavLink>

          {/* Secondary Button */}
          <NavLink
            to="/contactpage"
            className="px-10 py-4 border border-white text-white text-sm tracking-wider uppercase font-medium rounded-full transition-all duration-300 hover:bg-white hover:text-[#0F172A]"
          >
            Contact Us
          </NavLink>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
