import { useState } from "react";
import { motion } from "framer-motion";
import team from "../../data/teamData";

const TeamHero = () => {
  const [selected, setSelected] = useState(null);

  const featured = team.filter((member) => member.featured);
  const associates = team.filter((member) => !member.featured);

  return (
    <div className="font-serif">

      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-32 px-6 flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
          <img
            src="/images/office-hero.jpg"
            alt="Our Team"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-3xl space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold">
            Meet Our Experts
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            Our team combines decades of experience with unmatched dedication to client success.
          </p>
          <a
            href="#featured-partners"
            className="mt-4 inline-block px-8 py-3 bg-[#C6A75E] text-black font-semibold rounded-full hover:opacity-90 transition"
          >
            Meet the Team
          </a>
        </div>
      </div>

      {/* Featured Partners (Horizontal Scroll) */}
      <div id="featured-partners" className="py-16 px-4 overflow-x-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Partners</h2>
        <div className="flex gap-8 min-w-max">
          {featured.map((member) => (
            <motion.div
              key={member.id}
              className="min-w-[300px] bg-white rounded-xl shadow-lg p-6 flex-shrink-0 hover:scale-105 transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <h3 className="font-bold text-xl">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Associates Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Our Associates</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {associates.map((member) => (
            <motion.div
              key={member.id}
              className="group relative overflow-hidden rounded-xl shadow-lg border hover:shadow-2xl transition transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelected(member)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.title}</p>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <span className="text-white font-medium">View Bio</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 font-bold text-2xl"
            >
              ×
            </button>
            <img
              src={selected.image}
              alt={selected.name}
              className="w-32 h-32 object-cover rounded-full mx-auto shadow-md bg-white"
            />
            <h2 className="text-3xl font-serif font-bold text-center mt-4">{selected.name}</h2>
            <p className="text-center text-gray-500 mt-1">{selected.title}</p>
            <p className="text-gray-700 text-center mt-4">{selected.bio}</p>
            {selected.awards && selected.awards.length > 0 && (
              <div className="flex justify-center flex-wrap gap-3 mt-6">
                {selected.awards.map((award, i) => (
                  <span
                    key={i}
                    className="bg-[#C6A75E] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
                  >
                    {award}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default TeamHero;