import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white-500">
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <div className="h-6 bg-gray-300 rounded">
                Apt. 965 688 Marion Hollow, Yostfurt, NV{" "}
              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <div className="h-6 bg-gray-300 rounded">84002-7277</div>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <div className="h-6 bg-gray-300 rounded">LSTR@gmail.com</div>
            </div>
            <div className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-semibold mb-2">Social Media</h3>
              <div className="flex items-center space-x-4">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.789683782279!2d106.86766011431697!3d-6.2924659954436865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f599ae209ff1%3A0xa9c8b2b87ff03c20!2sJalan%20Kalisari%20Dharma%2C%20IV%20P3-09%2C%20RT.4%2FRW.9%2C%20Mekar%20Mukti%2C%20Kec.%20Cimanggis%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016453!5e0!3m2!1sen!2sid!4v1620771460472!5m2!1sen!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
