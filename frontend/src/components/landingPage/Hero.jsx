import { Link } from 'react-router-dom';
import backgroundGif from '../../assets/images/background.jpg';
import chatbotPhones from '../../assets/images/chatbotphones.png';

const Hero = () => {
  return (
    <section
      id='hero'
      style={{
        backgroundImage: `url(${backgroundGif})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Ensure the section takes the full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Center content vertically
        padding: '2rem 0', // Add padding to the top and bottom
      }}
    >
      {/* Flex Container */}
      <div className='container flex flex-col items-center px-6 mx-auto space-y-0 md:space-y-0 md:flex-row'>
        {/* Left Item */}
        <div className='flex flex-col space-y-6 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-left md:text-5xl'>
            Connect, Communicate, Collaborate
          </h1>
          <h1 className='max-w-md text-4xl font-bold text-left text-white md:text-5xl'>
            With ChatConn
          </h1>
          <div className='flex justify-start'>
            <a
              href="http://localhost:3000"
              className='px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-700'
            >
              Get Started
            </a>
            <a
              href="#features"
              className='px-6 py-3 ml-4 text-white bg-green-500 rounded-full hover:bg-green-700'
            >
              Learn More
            </a> {/* New button added */}
          </div>
        </div>
        {/* Right Item */}
        <div className='md:w-1/2'>
          <img src={chatbotPhones} alt='Chatbot Phones' />
        </div>
      </div>
    </section>
  );
};

export default Hero;