import services from "../data/services";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Practice Areas
        </motion.h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 p-6 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: idx * 0.2 }}
            >
              {/* Icon / Image */}
              <img
                src={service.icon}
                alt={service.name}
                className="h-16 w-16 mb-4"
              />

              {/* Service Name */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-gray-700 mb-4">{service.description}</p>

              {/* Learn More */}
              <NavLink
                to={service.link}
                className="text-red-600 font-semibold hover:underline hover:scale-105 transition transform"
              >
                Learn More →
              </NavLink>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
