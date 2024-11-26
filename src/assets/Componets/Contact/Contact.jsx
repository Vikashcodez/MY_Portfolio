import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto p-4 z-10">
      {/* Overlay to ensure visibility against background */}
      <div className="absolute inset-0 bg-black opacity-70 rounded-lg"></div>

      <div className="relative z-20 p-6 bg-[#1a1d2d] rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white text-center">Contact</h1>
        <p className="text-gray-400 mb-8 text-center">
          Feel free to reach out to me for any questions or opportunities!
        </p>

        <div className="flex items-center gap-2 mb-6 justify-center">
          <h2 className="text-xl font-semibold text-white">Email Me</h2>
          <span className="text-2xl">🚀</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#131620] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
          />
          
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#131620] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
          />
          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full bg-[#131620] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
          />
          
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-[#131620] border border-gray-700 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition resize-none"
          />
          
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
