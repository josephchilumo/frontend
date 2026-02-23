import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

const ContactTeaser = () => {
  return (
    <section
      className="relative py-24 bg-[#F8F7F4] font-serif overflow-hidden"
      id="contact-teaser"
    >
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-medium text-[#0F172A] mb-6 tracking-wide leading-tight">
            Contact Our Office
          </h2>

          <div className="w-16 h-[2px] bg-[#C6A75E] mb-8"></div>

          <p className="text-gray-600 mb-10 max-w-md leading-relaxed">
            We welcome the opportunity to discuss your legal matter.
            Contact our office to arrange a confidential consultation.
          </p>

          {/* Contact Items */}
          <div className="space-y-8">

            {/* Address */}
            <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
              <FaMapMarkerAlt className="text-[#C6A75E] mt-1 text-base group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Office Address
                </h4>
                <p className="text-[#0F172A] leading-relaxed">
                  123 Legal Avenue, Suite 500 <br />
                  City, State 00000
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
              <FaPhoneAlt className="text-[#C6A75E] mt-1 text-base group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Telephone
                </h4>
                <a
                  href="tel:1234567890"
                  className="text-[#0F172A] hover:text-[#C6A75E] transition-colors"
                >
                  (123) 456-7890
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
              <FaEnvelope className="text-[#C6A75E] mt-1 text-base group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Email
                </h4>
                <a
                  href="mailto:info@lawfirm.com"
                  className="text-[#0F172A] hover:text-[#C6A75E] transition-colors"
                >
                  info@lawfirm.com
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="group flex items-start gap-4 transition-all duration-300 hover:translate-x-2">
              <FaClock className="text-[#C6A75E] mt-1 text-base group-hover:scale-110 transition-transform" />
              <div>
                <h4 className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">
                  Office Hours
                </h4>
                <p className="text-[#0F172A] leading-relaxed">
                  Monday – Friday: 9:00 AM – 6:00 PM <br />
                  Saturday: By Appointment <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

          </div>

          {/* CTA Button */}
          <div className="mt-12">
            <NavLink
              to="/contactpage"
              className="inline-block px-10 py-4 bg-[#0F172A] text-white text-sm uppercase tracking-wider font-medium rounded-full transition-all duration-300 hover:bg-[#C6A75E] hover:text-black"
            >
              Arrange Consultation
            </NavLink>
          </div>
        </motion.div>

        {/* RIGHT SIDE – STATIC MAP */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative overflow-hidden rounded-xl shadow-xl"
        >
          <img
            src="https://api.mapbox.com/styles/v1/mapbox/light-v11/static/\
-74.0060,40.7128,13,0/600x420?access_token=YOUR_MAPBOX_ACCESS_TOKEN"
            alt="Office Location Map"
            className="w-full h-[420px] object-cover grayscale contrast-90"
          />

          {/* Overlay Button */}
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-6 left-6 bg-white text-[#0F172A] text-sm px-6 py-3 uppercase tracking-wider font-medium shadow hover:bg-[#C6A75E] hover:text-black transition"
          >
            Get Directions →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactTeaser;