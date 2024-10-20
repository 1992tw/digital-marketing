// app/contact/page.tsx

"use client"; // Mark this component as a Client Component

import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send form data as JSON
      });

      const result = await response.json();
      if (result.success) {
        alert('Your message has been sent successfully!');
        // Optionally reset the form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Failed to send message: ' + result.error);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred while sending your message. Please try again.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white/5 mt-20 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
      <p className="mb-8 text-xl text-center max-w-md">
        Fill in the form below and one of our agents will get back to you shortly.
      </p>

      <form className="w-full max-w-4xl bg-white/10 p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Your name"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Your email"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Your phone number"
              required
            />
          </div>

          {/* Message Field (Taking full width of grid) */}
          <div className="col-span-1 md:col-span-2 mb-6">
            <label htmlFor="message" className="block font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              placeholder="Your message"
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
