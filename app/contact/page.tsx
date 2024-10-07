// app/contact/page.tsx

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white/5 mt-20 text-white p-8">
      <h1 className="text-5xl font-bold mb-8">Get in Touch</h1>
      <p className="mb-8 text-xl text-center max-w-md">
        Fill in the form below and one of our agents will get back to you shortly.
      </p>

      <form className="w-full max-w-4xl bg-white/10 p-8 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>

          {/* Phone Number Field */}
          <div className="mb-6">
            <label htmlFor="phone" className="block font-semibold mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your phone number"
            />
          </div>

          {/* Message Field (Taking full width of grid) */}
          <div className="col-span-1 md:col-span-2 mb-6">
            <label htmlFor="message" className="block font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message"
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
