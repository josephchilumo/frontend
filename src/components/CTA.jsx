import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-24 bg-gray-900 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* Animated Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Ready to Discuss Your Case?
        </motion.h2>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
        >
          Our experienced legal team is here to provide strategic guidance and
          dedicated representation. Schedule a confidential consultation today.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          {/* Primary Button */}
          <NavLink
            to="/contact"
            className="px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition transform"
          >
            Schedule Consultation
          </NavLink>

          {/* Secondary Button */}
          <NavLink
            to="/contact"
            className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Contact Us
          </NavLink>
        </motion.div>
      </div>

      {/* Subtle Background Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
