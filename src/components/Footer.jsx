import { NavLink } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-400 pt-24 pb-12 font-serif">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          {/* Firm Info */}
          <div>
            <h3 className="text-white text-xl font-light tracking-wide mb-6">
              Law Firm Name
            </h3>

            <p className="leading-relaxed mb-8">
              Providing strategic legal counsel with integrity,
              discretion, and a commitment to excellence.
            </p>

            {/* Social Media */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-[#C6A75E] transition-colors duration-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-[#C6A75E] transition-colors duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-[#C6A75E] transition-colors duration-300">
                <FaFacebookF />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">
              Navigation
            </h4>

            <ul className="space-y-4 text-sm">
              <li><NavLink to="/" className="hover:text-white transition-colors duration-300">Home</NavLink></li>
              <li><NavLink to="/about" className="hover:text-white transition-colors duration-300">About</NavLink></li>
              <li><NavLink to="/services" className="hover:text-white transition-colors duration-300">Expertise</NavLink></li>
              <li><NavLink to="/team" className="hover:text-white transition-colors duration-300">Team</NavLink></li>
              <li><NavLink to="/publications" className="hover:text-white transition-colors duration-300">Publications</NavLink></li>
              <li><NavLink to="/contactpage" className="hover:text-white transition-colors duration-300">Contact</NavLink></li>
              <li><NavLink to="/admin/dashboard" className="hover:text-white transition-colors duration-300">Staff</NavLink></li>
              <li><NavLink to="/careers" className="hover:text-white transition-colors duration-300">Careers</NavLink></li>
              <li>
      
    </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">
              Practice Areas
            </h4>

            <ul className="space-y-4 text-sm">
              <li><NavLink to="/services/corporate-law" className="hover:text-white transition-colors duration-300">Corporate Law</NavLink></li>
              <li><NavLink to="/services/litigation" className="hover:text-white transition-colors duration-300">Litigation</NavLink></li>
              <li><NavLink to="/services/family-law" className="hover:text-white transition-colors duration-300">Family Law</NavLink></li>
              <li><NavLink to="/services/criminal-law" className="hover:text-white transition-colors duration-300">Criminal Law</NavLink></li>
              <li><NavLink to="/services/employment-law" className="hover:text-white transition-colals duration-300">Employment Law</NavLink></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white text-sm uppercase tracking-widest mb-6">
              Newsletter
            </h4>

            <p className="text-sm leading-relaxed mb-8">
              Receive legal updates and firm insights directly to your inbox.
            </p>

            <form className="space-y-5">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-transparent border border-gray-600 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#C6A75E] transition-colors duration-300"
              />

              <button
                type="submit"
                className="w-full py-3 text-sm uppercase tracking-wider border border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-black transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wide text-gray-500">
          <p>
            © {new Date().getFullYear()} Law Firm Name. All rights reserved.
          </p>

          <div className="flex space-x-8 mt-4 md:mt-0">
            <NavLink to="/privacy-policy" className="hover:text-white transition-colors duration-300">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="hover:text-white transition-colors duration-300">
              Terms of Service
            </NavLink>
            <NavLink to="/disclaimer" className="hover:text-white transition-colors duration-300">
              Legal Disclaimer
            </NavLink>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
