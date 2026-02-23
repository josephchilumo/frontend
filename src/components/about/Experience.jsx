import { motion } from "framer-motion";

const stats = [
  { number: "20+", label: "Years of Experience" },
  { number: "500+", label: "Cases Successfully Handled" },
  { number: "300+", label: "Satisfied Clients" },
  { number: "15+", label: "Industry Recognitions" },
];

const Experience = () => {
  return (
    <section className="py-20 bg-gray-50 font-serif" id="experience">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-6">

        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-2xl p-10 text-center hover:shadow-2xl transition"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
