import react from 'react';
import { Link } from 'react-router-dom';    
import { Phone, Mail } from '@mui/icons-material';
function Header() {
    return(
        <div className=' mt-6 bg-gray-900 text-gray-300 text-sm'>
            <div className='max-w-7xl mx-auto px-4 py-3 flex justify-between items-center'>
                <div className='flex items-center space-x-6'>
                    <div className='flex items-center'>
                        <Phone className='mr-2' />
                        <span>+254 700 123 456</span>
                    </div>
                    <div className='flex items-center'>
                        <Mail className='mr-2' />
                        <span>info@chibitilawfirm.com</span>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <a href='https://www.facebook.com/chibitilawfirm' className='hover:text-green-500 transition duration-300'>Facebook</a>
                    <a href='https://www.twitter.com/chibitilawfirm' className='hover:text-green-500 transition duration-300'>Twitter</a>
                    <a href='https://www.linkedin.com/company/chibitilawfirm' className='hover:text-green-500 transition duration-300'>LinkedIn</a>
                </div>
            </div>
        </div>

    )
}

export default Header;