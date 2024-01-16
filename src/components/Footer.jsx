// Footer.js

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarker, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p><FaEnvelope className="inline mr-2" /> Email: info@example.com</p>
            <p><FaPhone className="inline mr-2" /> Phone: +1 123-456-7890</p>
            <p><FaMapMarker className="inline mr-2" /> Address: 123 Gift Street, Cityville</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <p><FaFacebook className="inline mr-2" /> Facebook</p>
            <p><FaInstagram className="inline mr-2" /> Instagram</p>
            <p><FaTwitter className="inline mr-2" /> Twitter</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
            <p>Subscribe to our newsletter for updates</p>
            {/* Add a form for newsletter subscription if needed */}
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Your Gifting Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
