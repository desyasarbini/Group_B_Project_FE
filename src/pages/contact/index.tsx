import React from "react";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-500">
      image
      {/* Contact Information */}
      <section className="bg-stone-500 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            {/* Placeholder Contact Info */}
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
              <div className="h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Form */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
          <div className="bg-stone-500 p-6 rounded shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <div className="mt-4">
              <button className="py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
