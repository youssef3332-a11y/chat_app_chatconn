import { useState } from 'react';
import { Link } from 'react-router-dom';

import companyLogo from '../../assets/images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className='relative bg-orange-500 w-full'>
      {/* Flex Container */}
      <div className='container flex items-center justify-between mx-auto p-6'>
        {/* Logo and Title */}
        <div className='flex items-center space-x-2 pt-2'>
          <img src={companyLogo} alt='Company Logo' className='h-8' /> {/* Adjust the height to make the logo smaller */}
          <span className='text-white text-2xl font-bold'>ChatConn</span> {/* Add "Conn" to "Chat" */}
        </div>
        {/* Menu Items */}
        <div className='hidden space-x-6 md:flex'>
          <a href='#hero' className='hover:text-darkGrayishBlue'>
            Home
          </a>
          <a href='#features' className='hover:text-darkGrayishBlue'>
            Features
          </a>
          <a href='#cta' className='hover:text-darkGrayishBlue'>
            Contact Us
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className={
            toggleMenu
              ? 'open block hamburger md:hidden focus:outline-none'
              : 'block hamburger md:hidden focus:outline-none'
          }
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <span className='hamburger-top bg-white'></span>
          <span className='hamburger-middle bg-white'></span>
          <span className='hamburger-bottom bg-white'></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className={
            toggleMenu
              ? 'absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
              : 'absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md'
          }
        >
          <a href='#hero'>Home</a>
          <a href='#features'>Features</a>
          <a href='#cta'>Contact Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;