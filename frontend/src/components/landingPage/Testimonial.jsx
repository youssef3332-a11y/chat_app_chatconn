import reactLogo from '../../assets/images/reactLogo.png';
import expressLogo from '../../assets/images/expressLogo.png';
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
            <img src={reactLogo} className='w-16 -mt-14' alt='React Logo' />
            <h5 className='text-lg font-bold'>React</h5>
            <p className='text-sm text-darkGrayishBlue'>
              React is a free and open-source front-end JavaScript library that aims to make building user interfaces based on components more "seamless".
            </p>
          </div>

          {/* Card 2 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={expressLogo} className='w-16 -mt-14' alt='ExpressJS Logo' />
            <h5 className='text-lg font-bold'>ExpressJS</h5>
            <p className='text-sm text-darkGrayishBlue'>
              ExpressJS a back end web application framework for building RESTful APIs with Node. js
            </p>
          </div>

          {/* Card 3 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={mongodblogo} className='w-16 -mt-14' alt='MongoDB Logo' />
            <h5 className='text-lg font-bold'>MongoDB</h5>
            <p className='text-sm text-darkGrayishBlue'>
              MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
            </p>
          </div>

          {/* Card 4 */}
          <div className='hidden flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:flex md:w-1/3'>
            <img src={nodejsLogo} className='w-16 -mt-14' alt='Node.js Logo' />
            <h5 className='text-lg font-bold'>Node.js</h5>
            <p className='text-sm text-darkGrayishBlue'>
              Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is used to build scalable network applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;