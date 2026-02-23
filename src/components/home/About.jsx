import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { 
    value:[ 'Integrity', 'Excellence', 'Dedication'], label: "Our Core Values" },
  { value: ["Professional","&", "Trusted"], label: "Client-Focused Representation" },
];

const About = () => {
  return (
    <section className="relative py-14 bg-white font-serif " id="about">
      <div className="max-w-6xl mx-auto px-8">

        {/* Section Label */}
        <motion.p
          className="uppercase tracking-[0.3em] text-sm text-[#C6A75E] mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          About The Firm
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900 mb-10 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Why Choose <span className="font-semibold">Chibiti</span>?
        </motion.h2>

        {/* Elegant Divider */}
        <motion.div
          className="w-24 h-[2px] bg-[#C6A75E] mb-10 mx-auto md:mx-0"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Intro Paragraph */}
        <motion.p
          className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-4xl mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          At our firm, we are committed to delivering exceptional legal
          representation grounded in integrity, precision, and unwavering
          dedication. We recognize that every client’s matter is distinct,
          requiring thoughtful analysis and strategic insight. Our team of
          experienced attorneys combines deep legal expertise with meticulous
          attention to detail, ensuring that every decision is deliberate and
          every action purposeful. Through clarity, professionalism, and
          personalized service, we strive to achieve results that inspire
          confidence and build enduring relationships founded on trust and
          excellence.
        </motion.p>

        {/* Read More */}
        <motion.div
          className="mb-20 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <NavLink
            to="/about"
            className="uppercase text-sm tracking-wider text-[#C6A75E] border-b border-transparent hover:border-[#C6A75E] transition-all duration-500"
          >
            Discover Our Approach →
          </NavLink>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-gray-200 pt-16 items-center text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
                {Array.isArray(stat.value)
                ? stat.value.map((item,i) => (
                  <div key={i}>{item}</div>
                )): stat.value
              }
              </h3>
              <p className="text-gray-600 uppercase text-sm tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
