import React from 'react';
import { Phone, Mail } from '@mui/icons-material';

function Header() {
  return (
    <div className="mt-6 font-serif bg-gray-900 text-gray-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 
                      flex flex-col md:flex-row 
                      md:justify-between md:items-center 
                      space-y-3 md:space-y-0">

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row 
                        items-center 
                        space-y-2 sm:space-y-0 sm:space-x-6">
          
          <div className="flex items-center">
            <Phone className="mr-2 text-[#C6A75E]" fontSize="small" />
            <span className="text-center sm:text-left">
              +254 700 123 456
            </span>
          </div>

          <div className="flex items-center">
            <Mail className="mr-2 text-[#C6A75E]" fontSize="small" />
            <span className="text-center sm:text-left">
              info@chibitilawfirm.com
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center md:justify-end 
                        space-x-4">
          <a
            href="https://www.facebook.com/chibitilawfirm"
            className="hover:text-[#C6A75E] transition duration-300"
          >
            Facebook
          </a>
          <a
            href="https://www.twitter.com/chibitilawfirm"
            className="hover:text-[#C6A75E] transition duration-300"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/company/chibitilawfirm"
            className="hover:text-[#C6A75E] transition duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
