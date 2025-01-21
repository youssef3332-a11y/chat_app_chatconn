import { Link } from 'react-router-dom';
import companyLogo from '../../assets/images/logo.png';
import facebookLogo from '../../assets/images/facebook.png';
import instagramLogo from '../../assets/images/instagram.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-orange-500 py-8'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-between items-center'>
          {/* Logo and Title */}
          <div className='flex items-center space-x-2'>
            <img src={companyLogo} alt='Company Logo' className='h-8' /> {/* Adjust the height to make the logo smaller */}
            <span className='text-white text-2xl font-bold'>ChatConn</span> {/* Add "Conn" to "Chat" */}
          </div>
          {/* Social Links Container */}
          <div className='flex justify-center space-x-4'>
            {/* Link 1 */}
            <Link to='#'>
              <img src={facebookLogo} className='h-8' alt='Facebook' />
            </Link>
            <Link to='#'>
              <img src={instagramLogo} className='h-8' alt='Instagram' />
            </Link>
          </div>
        </div>
        {/* List Container */}
        <div className='flex justify-around space-x-32'>
          <div className='flex flex-col space-y-3 text-white'>
            <a href='#hero' className='hover:text-brightRed'>
              Home
            </a>
            <a href='#features' className='hover:text-brightRed'>
              Features
            </a>
            <a href='#cta' className='hover:text-brightRed'>
              Contact Us
            </a>
            <a href='#about' className='hover:text-brightRed'>
              About Us
            </a> {/* New link added */}
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <div className='hidden text-white md:block'>
            Copyright © {currentYear}, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;