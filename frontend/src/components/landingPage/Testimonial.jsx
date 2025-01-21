import { Link } from 'react-router-dom';

import reactLogo from '../../assets/images/React-icon.svg.png';
import expresslogo from '../../assets/images/expresslogo.png';
import nodejs from '../../assets/images/nodejslogo.png';
import mongodblogo from '../../assets/images/mongodblogo.png';

const Testimonial = () => {
  return (
    <section id='features'>
      
      <div className='max-w-6xl px-5 mx-auto mt-32 text-center'>
        
        <h2 className='text-4xl font-bold text-center'>
          Features
        </h2>
        {/* Cards Container */}
        <div className='flex flex-col mt-24 md:flex-row md:space-x-6'>
          {/* Card 1 */}
          <div className='flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3'>
            <img src={reactLogo} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>React</h5>
            <p className='text-sm text-darkGrayishBlue'>
              React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".
            </p>
          </div>

          {/* Card 2 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={expresslogo} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>ExpressJS</h5>
            <p className='text-sm text-darkGrayishBlue'>
              ExpressJS a back end web application framework for building RESTful APIs with Node. js
            </p>
          </div>

          {/* Card 3 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={nodejs} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>NodeJS</h5>
            <p className='text-sm text-darkGrayishBlue'>
              Node.js is an open-source and cross-platform JavaScript runtime environment.
            </p>
          </div>

          {/* Card 4 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={mongodblogo} className='w-16 -mt-14' alt='' />
            <h5 className='text-lg font-bold'>MongoDB</h5>
            <p className='text-sm text-darkGrayishBlue'>
              MongoDB is a non-relational document database that provides support for JSON-like storage.
            </p>
          </div>
        </div>
        {/* Button */}
        <div className='my-16'>
          <Link
            to='#'
            className='p-3 px-6 pt-2 text-white bg-orange-500 rounded-full baseline hover:bg-orange-600'
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;