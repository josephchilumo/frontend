import React from 'react'
import { useState } from 'react'
import { Link , NavLink} from 'react-router-dom'

const navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
    <nav className='text-gray-700 bg-gray-100 shadow-lg'>
        <div className='max-w-6xl mx-auto px-4 justify-between items-start flex'>
            <Link to='/' className='flex items-center py-4 px-2'>
                <span className='font-bold text-gray-800 text-lg'>Chibiti Law Firm</span>
            </Link>
            <div className='hidden md:flex space-x-8 mt-10'>
                <NavLink to='/' className='py-4 px-2 text-gray-700 font-semibold border-b-4 border-gray-100 hover:border-green-500 hover:text-green-500 transition duration-300'>Home</NavLink>
                <NavLink to='/about' className='py-4 px-2 text-gray-700 font-semibold border-b-4 border-gray-100 hover:border-green-500 hover:text-green-500 transition duration-300'>About Us</NavLink>
                <NavLink to='/services' className='py-4 px-2 text-gray-700 font-semibold border-b-4 border-gray-100 hover:border-green-500 hover:text-green-500 transition duration-300'>Services</NavLink>
                <NavLink to='/blog' className='py-4 px-2 text-gray-700 font-semibold border-b-4 border-gray-100 hover:border-green-500 hover:text-green-500 transition duration-300'>Blog</NavLink>
                <NavLink to='/faq' className='py-4 px-2 text-gray-700 font-semibold border-b-4 border-gray-100 hover:border-green-500 hover:text-green-500 transition duration-300'>FAQ</NavLink>
                <NavLink to='/contact' className='py-4 px-2 text-gray-700 font-semibold border-b-4 border-gray-100 hover:border-green-500 hover:text-green-500 transition duration-300'>Contact</NavLink>
                <NavLink to='/team' className='py-4 px-2 text-gray-700 font-semibold border-b-4 border-gray-100 hover:border-green-500 hover:text-green-500 transition duration-300'>Team</NavLink>
                <NavLink
                 to='/schedule'
                 className='ml-6 mb-1 bg-gray-900 text-gray-300 px-5 py-2 rounded hover:bg-green-700 transition duration-300 flex items-center justify-center gap-2'>
                    Schedule Consultation
                </NavLink>
               
            </div>
            <div className='md:hidden flex items-center'>
                <button className='outline-none mobile-menu-button' onClick={() => setIsOpen(!isOpen)}>
                    <svg className=' w-6 h-6 text-gray-700' x-show='!showMenu' fill='none' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' viewBox='0 0 24 24' stroke='currentColor'><path d='M4 6h16M4 12h16M4 18h16'></path></svg>
                </button>
            </div>
        </div>
        <div className={`mobile-menu ${isOpen ? '' : 'hidden'} md:hidden`}>
            <ul className=''>
                <li><NavLink to='/' className='block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300'>Home</NavLink></li>
                <li><NavLink to='/about' className='block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300'>About Us</NavLink></li>
                <li><NavLink to='/services' className='block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300'>Services</NavLink></li>
                <li><NavLink to='/blog' className='block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300'>Blog</NavLink></li>
                <li><NavLink to='/faq' className='block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300'>FAQ</NavLink></li>
                <li><NavLink to='/contact' className='block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300'>Contact</NavLink></li>
                <li><NavLink to='/team' className='block text-sm px-2 py-4 text-gray-700 hover:bg-green-500 transition duration-300'>Team</NavLink></li>
            </ul>
        </div>

    </nav>
    )   
}

export default navbar
