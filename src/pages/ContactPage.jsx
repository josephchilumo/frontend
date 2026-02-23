import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import locations from "../data/locations"; // make sure each location has name, address, phone, email, hours, contactPerson, mapUrl
import reviews from "../data/reviews"; // array of { author, rating, text }

const ContactPage = () => {
  const [activeLocation, setActiveLocation] = useState(locations[0]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-serif relative">

      {/* Hero Banner */}
      <div className="relative bg-gray-900 text-white h-96 flex items-center justify-center">
        <img
          src="/images/office-contact.jpg"
          alt="Law Office"
          className="absolute w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Our Offices</h1>
          <p className="text-gray-200 text-lg md:text-xl">
            Reach out to our legal team at any of our locations across Kenya.
          </p>
        </div>
      </div>

      {/* Locations Tabs */}
      <div className="max-w-7xl mx-auto px-6 py-16 space-y-12">

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {locations.map((loc) => (
            <button
              key={loc.id}
              onClick={() => setActiveLocation(loc)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeLocation.id === loc.id
                  ? "bg-[#C6A75E] text-gray-900 shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {loc.name}
            </button>
          ))}
        </div>

        {/* Active Location Card */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-200"
          >
            <h2 className="text-3xl font-bold">{activeLocation.name}</h2>
            <div className="space-y-2">
              <p className="flex items-center gap-2"><FaMapMarkerAlt className="text-[#C6A75E]" /> {activeLocation.address}</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#C6A75E]" /> {activeLocation.phone}</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-[#C6A75E]" /> {activeLocation.email}</p>
              <p className="flex items-center gap-2"><FaClock className="text-[#C6A75E]" /> {activeLocation.hours}</p>
              <p className="font-medium">Contact Person: {activeLocation.contactPerson}</p>
            </div>
            <a
              href="#quick-contact"
              className="inline-block mt-4 px-8 py-3 bg-[#C6A75E] text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
            >
              Request Consultation
            </a>
          </motion.div>

          {/* Static Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full h-72 rounded-2xl overflow-hidden shadow-lg border border-gray-200"
          >
            <iframe
              src={activeLocation.mapUrl}
              title={activeLocation.name}
              className="w-full h-full"
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* Quick Contact Form */}
        <motion.div
          id="quick-contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gray-100 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto mt-16 scroll-mt-32"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Quick Contact</h3>
          <form className="grid gap-4">
            <input type="text" placeholder="Full Name" className="p-3 rounded border border-gray-300 focus:ring-[#C6A75E] focus:ring-2 outline-none"/>
            <input type="email" placeholder="Email Address" className="p-3 rounded border border-gray-300 focus:ring-[#C6A75E] focus:ring-2 outline-none"/>
            <input type="tel" placeholder="Phone Number" className="p-3 rounded border border-gray-300 focus:ring-[#C6A75E] focus:ring-2 outline-none"/>
            <select className="p-3 rounded border border-gray-300 focus:ring-[#C6A75E] focus:ring-2 outline-none">
              {locations.map(loc => <option key={loc.id} value={loc.name}>{loc.name}</option>)}
            </select>
            <textarea placeholder="Your Message" rows={4} className="p-3 rounded border border-gray-300 focus:ring-[#C6A75E] focus:ring-2 outline-none"></textarea>
            <button className="px-8 py-4 bg-[#C6A75E] text-gray-900 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-colors mt-2">
              Submit
            </button>
          </form>
        </motion.div>

        {/* Google Reviews Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 space-y-8"
        >
          <h3 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((rev, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow hover:shadow-2xl transition-all border border-gray-200">
                <p className="text-gray-700 mb-4">"{rev.text}"</p>
                <p className="font-semibold">{rev.author}</p>
                <p className="text-[#C6A75E]">{'★'.repeat(rev.rating)}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 max-w-3xl mx-auto space-y-6"
        >
          <h3 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-xl shadow border border-gray-200">
              <summary className="font-semibold cursor-pointer">What documents should I bring for a consultation?</summary>
              <p className="mt-2 text-gray-700">Bring any contracts, letters, or documents related to your case.</p>
            </details>
            <details className="bg-white p-4 rounded-xl shadow border border-gray-200">
              <summary className="font-semibold cursor-pointer">Do you offer virtual consultations?</summary>
              <p className="mt-2 text-gray-700">Yes, we provide consultations via Zoom or Google Meet.</p>
            </details>
            <details className="bg-white p-4 rounded-xl shadow border border-gray-200">
              <summary className="font-semibold cursor-pointer">What are your office hours?</summary>
              <p className="mt-2 text-gray-700">Mon – Fri: 9:00 AM – 6:00 PM</p>
            </details>
          </div>
        </motion.div>

      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <a
          href="#quick-contact"
          className="px-10 py-4 bg-[#C6A75E] text-gray-900 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          Schedule a Consultation
        </a>
      </div>

    </div>
  );
};

export default ContactPage;