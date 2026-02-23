import { motion } from "framer-motion";

const Careers = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-gray-900 text-white py-32 text-center">
        <h1 className="text-5xl font-serif font-bold mb-4">
          Join Our Legal Excellence
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We seek professionals who value integrity, precision, and excellence.
        </p>
      </div>

      {/* Open Positions */}
      <div className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-serif mb-10">Open Positions</h2>

        <div className="space-y-6">
          <JobCard
            title="Corporate Associate"
            location="Nairobi"
          />
          <JobCard
            title="Litigation Lawyer"
            location="Mombasa"
          />
        </div>
      </div>
    </div>
  );
};

const JobCard = ({ title, location }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="border border-gray-200 rounded-2xl p-8 flex justify-between items-center shadow-sm hover:shadow-lg transition"
    >
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-500">{location}</p>
      </div>

      <button className="px-6 py-3 bg-yellow-500 text-gray-900 rounded-xl font-semibold hover:bg-yellow-400 transition">
        Apply Now
      </button>
    </motion.div>
  );
};

export default Careers;
