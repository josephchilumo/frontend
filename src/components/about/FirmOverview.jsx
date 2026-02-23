import { motion } from "framer-motion";

const FirmOverview = () => {
  return (
    <section className="py-24 bg-white font-serif" id="firm-overview">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-semibold text-gray-900 mb-8"
        >
          A Legacy of Legal Excellence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed text-lg"
        >
          For over 20 years, Chibiti Law Firm has delivered trusted legal services
          across corporate law, litigation, and family matters. Our mission is to
          provide clear, strategic, and effective legal solutions that protect our
          clients’ interests. We are committed to professionalism, integrity,
          and results-driven advocacy.
        </motion.p>

      </div>
    </section>
  );
};

export default FirmOverview;
