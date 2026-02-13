import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Firm Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Law Firm Name
            </h3>
            <p className="text-gray-400 mb-6">
              Providing strategic legal solutions with integrity,
              professionalism, and dedication to client success.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li><NavLink to="/" className="hover:text-yellow-500">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-yellow-500">About</NavLink></li>
              <li><NavLink to="/services" className="hover:text-yellow-500">Practice Areas</NavLink></li>
              <li><NavLink to="/blog" className="hover:text-yellow-500">Insights</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-yellow-500">Contact</NavLink></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white font-semibold mb-4">Practice Areas</h4>
            <ul className="space-y-3">
              <li><NavLink to="/services/corporate-law" className="hover:text-yellow-500">Corporate Law</NavLink></li>
              <li><NavLink to="/services/litigation" className="hover:text-yellow-500">Litigation</NavLink></li>
              <li><NavLink to="/services/family-law" className="hover:text-yellow-500">Family Law</NavLink></li>
              <li><NavLink to="/services/criminal-law" className="hover:text-yellow-500">Criminal Law</NavLink></li>
              <li><NavLink to="/services/employment-law" className="hover:text-yellow-500">Employment Law</NavLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Subscribe to Our Newsletter</h4>

            <p className="text-gray-400 mb-6">
              Receive legal updates and insights directly to your inbox.
            </p>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-md bg-gray-800 text-white 
                           focus:outline-none focus:ring-1 focus:ring-yellow-500 
                           transition"
              />

              <button
                type="submit"
                className="w-full px-6 py-3 bg-yellow-500 text-gray-900 
                           font-semibold rounded-md 
                           hover:bg-yellow-400 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Law Firm Name. All rights reserved.</p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <NavLink to="/privacy-policy" className="hover:text-yellow-500">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-yellow-500">
              Terms of Service
            </NavLink>
            <NavLink to="/disclaimer" className="hover:text-yellow-500">
              Legal Disclaimer
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
