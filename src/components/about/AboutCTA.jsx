import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="font-serif py-28 bg-gray-900 text-white text-center">
      <div className="max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-semibold mb-6"
        >
          Ready to Discuss Your Legal Needs?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-lg mb-10"
        >
          Schedule a confidential consultation with our experienced legal team
          and receive clear, strategic guidance tailored to your situation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-center gap-6"
        >
          <NavLink
            to="/contactpage"
            className="px-8 py-3 bg-[#C6A75E] text-gray-900 rounded-full font-semibold hover:scale-105 transition transform"
          >
            Schedule Appointment
          </NavLink>

          <NavLink
            to="/contactpage"
            className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-gray-900 transition"
          >
            Contact Us Today
          </NavLink>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutCTA;
