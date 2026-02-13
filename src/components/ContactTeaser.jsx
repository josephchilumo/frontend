import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactTeaser = () => {
  return (
    <section className="py-24 bg-gray-50" id="contact-teaser">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Our Office
          </h2>

          <p className="text-gray-600 mb-10 max-w-md">
            Visit our office or get in touch with our legal team to schedule a
            confidential consultation.
          </p>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Office Address</h4>
              <p className="text-gray-600">
                123 Legal Avenue, Suite 500 <br />
                City, State 00000
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <FaPhoneAlt className="text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Phone</h4>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 mb-10">
            <FaEnvelope className="text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-gray-600">info@lawfirm.com</p>
            </div>
          </div>

          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-yellow-600 hover:text-gray-900 transition shadow-lg"
          >
            Get in Touch
          </NavLink>
        </motion.div>

        {/* RIGHT SIDE – MAP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!..."
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactTeaser;
