import services from "../../data/services";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Services = () => {
  // Pick top 3 services for homepage
  const featuredServices = services.slice(0, 3);

  return (
    <section className="py-20 bg-white font-serif" id="services">
      <div className="max-w-7xl mx-auto px-8 text-center">

        {/* Section Label */}
        <motion.p
          className="uppercase tracking-[0.3em] text-sm text-[#C6A75E] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Expertise
        </motion.p>

        {/* Headline */}
        <motion.h2
          className="text-4xl md:text-5xl font-light text-gray-900 mb-12 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Practice Areas
        </motion.h2>

        {/* Elegant Divider */}
        <div className="flex justify-center mb-12">
          <motion.div
            className="h-[2px] bg-[#C6A75E]"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Services List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">

          {featuredServices.map((service, idx) => (
            <motion.div
              key={idx}
              className="group border-t border-gray-200 pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
            >

              {/* Service Title */}
              <h3 className="text-2xl font-light text-gray-900 mb-2 group-hover:text-[#C6A75E] transition-colors duration-500">
                {service.name}
              </h3>

              {/* Short Description */}
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description.length > 80
                  ? service.description.slice(0, 80) + "..."
                  : service.description}
              </p>

              {/* Learn More */}
              <NavLink
                to="/services"
                className="uppercase text-sm tracking-wider text-[#C6A75E] border-b border-transparent hover:border-[#C6A75E] transition-all duration-500"
              >
                View Practice Details →
              </NavLink>

            </motion.div>
          ))}

        </div>

        {/* View All Services CTA */}
        <div className="mt-12">
          <NavLink
            to="/services"
            className="inline-block px-8 py-3 bg-[#C6A75E] text-gray-900 font-semibold text-lg rounded shadow hover:bg-gray-300 transition"
          >
            View All Services
          </NavLink>
        </div>

      </div>
    </section>
  );
};

export default Services;