import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "M.K.",
    role: "Business Owner",
    text: "Chibiti Law Firm handled our corporate restructuring with clarity and professionalism. Their strategic guidance was invaluable.",
  },
  {
    name: "A.T.",
    role: "Entrepreneur",
    text: "Exceptional legal representation. The team demonstrated integrity, precision, and a deep understanding of our case.",
  },
  {
    name: "L.S.",
    role: "Private Client",
    text: "From consultation to resolution, the firm provided trustworthy and responsive support throughout the entire process.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50 font-serif">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-16"
        >
          What Our Clients Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/70 backdrop-blur-md shadow-lg rounded-2xl p-10 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              {/* Gold Stars */}
              <div className="flex justify-center mb-6 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* Client Initials Avatar */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold">
                  {item.name}
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
