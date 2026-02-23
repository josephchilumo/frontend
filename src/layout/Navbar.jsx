import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/services", name: "Expertise" },
    { path: "/publications", name: "Publications" },
    { path: "/team", name: "Team" },
    { path: "/contactpage", name: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed w-full z-50 bg-white border-b border-gray-200 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl tracking-[0.2em] font-light text-gray-900"
        >
          CHIBITI <span className="font-semibold">LAW</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-12 items-center">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `relative uppercase text-sm tracking-wider transition duration-300 ${
                  isActive
                    ? "text-[#C6A75E]"
                    : "text-gray-700 hover:text-[#C6A75E]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeLine"
                      className="absolute left-0 -bottom-2 h-[2px] w-full bg-[#C6A75E]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* CTA Button */}
          <NavLink
            to="/contactpage"
            className="border px-6 py-2 text-sm uppercase tracking-wider border-[#C6A75E] text-[#C6A75E] hover:bg-[#C6A75E] hover:text-white transition duration-500"
          >
            Schedule Consultation
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <div className="space-y-1">
              <span className="block w-6 h-[2px] bg-gray-900"></span>
              <span className="block w-6 h-[2px] bg-gray-900"></span>
              <span className="block w-6 h-[2px] bg-gray-900"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-8 py-6 space-y-6">
              {navItems.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="uppercase text-sm tracking-wider text-gray-700 hover:text-[#C6A75E] transition duration-300"
                >
                  {item.name}
                </NavLink>
              ))}

              <NavLink
                to="/contactpage"
                onClick={() => setIsOpen(false)}
                className="border border-[#C6A75E] text-[#C6A75E] px-6 py-2 text-sm uppercase tracking-wider text-center hover:bg-[#C6A75E] hover:text-white transition duration-500"
              >
                Schedule Consultation
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar
