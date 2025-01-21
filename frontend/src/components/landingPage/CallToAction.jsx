import { useState } from 'react';
import emailjs from 'emailjs-com';

const CallToAction = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState(''); // New state for phone number

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name,
      email,
      message,
      phone, // Include phone number in template parameters
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
    setPhone(''); // Reset phone number field
  };

  return (
    <section id='cta' className='bg-orange-500 py-8'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold text-white text-center'>Contact Us</h2>
        <form onSubmit={handleSubmit} className='mt-6'>
          <div className='flex flex-col space-y-4'>
            <input
              type='text'
              placeholder='Your Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='p-2 rounded'
            />
            <input
              type='email'
              placeholder='Your Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='p-2 rounded'
            />
            <input
              type='text'
              placeholder='Your Phone Number' // New input field for phone number
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='p-2 rounded'
            />
            <textarea
              placeholder='Your Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className='p-2 rounded'
            />
            <button type='submit' className='bg-white text-orange-500 font-bold py-2 px-4 rounded'>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CallToAction;