import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useLanguage } from './LanguageContext';
import textos from '../constants/textos';

const ContactForm = () => {
  const { idioma } = useLanguage();
  const { contactHeader, contactName, contactEmail, contactTitle, contactBody, mesStatus1, mesStatus2, mesStatus3, send } = textos[idioma];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus(mesStatus1);

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send('service_qhf9ry4', 'template-1', templateParams, 'w2ioOmNVwAzHolG-p')
      .then((response) => {
        setStatus(mesStatus2);
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((error) => {
        setStatus(mesStatus3);
      });
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-slate-900">
      <h2 className="text-2xl font-bold font-nunito text-slate-200 mb-4 text-center">{contactHeader}</h2>
      <form onSubmit={handleSubmit} className="space-y-4 md:flex md:flex-row md:flex-wrap md:justify-between md:items-center">
        <div className='md:w-5/12'>
          <label htmlFor="name" className="block font-nunito text-slate-200">{contactName}:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className='md:w-5/12 md:-top-2  md:relative'>
          <label htmlFor="email" className="block font-nunito text-slate-200">{contactEmail}:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className='md:w-5/12 md:relative md:-top-8'>
          <label htmlFor="subject" className="block font-nunito text-slate-200">{contactTitle}:</label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className='md:w-5/12'>
          <label htmlFor="message" className="block font-nunito text-slate-200">{contactBody}:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 font-nunito text-slate-200 rounded-md hover:bg-blue-700"
        >
          {send}
        </button>
        {status && (
          <p className={`mt-4 text-center w-full ${status.includes('Éxito') || status.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;