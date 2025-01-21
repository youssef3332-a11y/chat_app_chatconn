import { Link } from 'react-router-dom';

import companyLogo from '../../assets/images/logo.png';
import facebookLogo from '../../assets/images/icon-facebook.svg';
import instagramLogo from '../../assets/images/icon-instagram.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='bg-veryDarkBlue'>
      {/* Flex Container */}
      <div className='container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div className='mx-auto my-6 text-center text-white md:hidden'>
            Copyright © {currentYear}, All Rights Reserved
          </div>
          
          <div className='flex items-center space-x-2 pt-2'>
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
          </div>
        </div>

        {/* Input Container */}
        <div className='flex flex-col justify-between'>
          <div className='hidden text-white md:block'>
            Copyright © {currentYear}, All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;