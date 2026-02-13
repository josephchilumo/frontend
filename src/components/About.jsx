import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "Integrity • Excellence • Dedication", label: "Our Core Values" },
  { value: "Professional & Trusted", label: "Recognized for client-focused representation" },
];

const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
        
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why Choose <span className="text-green-500">Chibiti</span>?
        </motion.h2>

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-700 max-w-3xl mb-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
         At our firm, we are committed to providing exceptional legal services guided by integrity, precision, and unwavering dedication. We understand that each client’s situation is unique, which is why we take the time to listen, analyze, and craft strategies tailored specifically to your needs. Our team of experienced attorneys brings a wealth of knowledge across various areas of law, ensuring that no detail is overlooked and every decision is informed. From navigating complex legal challenges to offering practical, results-driven advice, we strive to empower our clients with clarity, confidence, and peace of mind. By combining meticulous legal expertise with personalized attention, we aim to achieve outcomes that not only meet but exceed expectations, building lasting relationships based on trust, transparency, and excellence.
        </motion.p>

        {/* Animated Read More Link */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <NavLink
            to="/about"
            className="text-green-500 font-semibold hover:underline hover:scale-105 transition transform"
          >
            Read More →
          </NavLink>
        </motion.div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="mb-6 md:mb-0"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 + index * 0.3 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
