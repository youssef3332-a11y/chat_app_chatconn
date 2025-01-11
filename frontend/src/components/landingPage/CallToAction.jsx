import { useState } from 'react';
import emailjs from 'emailjs-com';

const CallToAction = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    })
    .catch((err) => {
      console.error('FAILED...', err);
    });

    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id='cta' className='bg-brightRed'>
      {/* Flex Container */}
      <div className='container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0'>
        {/* Heading */}
        <h2 className='text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left'>
          Contact Us
        </h2>
        {/* Form */}
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4'>
          <input
            type='text'
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='px-4 py-2 rounded-full focus:outline-none'
            required
          />
          <input
            type='email'
            placeholder='Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='px-4 py-2 rounded-full focus:outline-none'
            required
          />
          <textarea
            placeholder='Your Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='px-4 py-2 rounded-full focus:outline-none'
            required
          />
          <button
            type='submit'
            className='px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 focus:outline-none'
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;