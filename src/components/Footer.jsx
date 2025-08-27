import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaUtensils, FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaHeart, FaClock, FaStar } from 'react-icons/fa';
import logo from '../assets/partplaters.svg';
import '../App.css'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Menus', path: '/menus' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Wedding Catering',
    'Corporate Events',
    'Birthday Parties',
    'Outdoor Events',
    'Food Delivery',
    'Equipment Rental',
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, name: 'Facebook', href: 'https://facebook.com/premiumcatering' },
    { icon: <FaInstagram />, name: 'Instagram', href: 'https://instagram.com/premiumcatering' },
    { icon: <FaTwitter />, name: 'Twitter', href: 'https://twitter.com/premiumcatering' },
    { icon: <FaWhatsapp />, name: 'WhatsApp', href: 'https://wa.me/+254700123456' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="p-3 rounded-full "
              >
                <div className="flex flex-col items-center">
              <img src={logo} alt="Logo" className="logo" style={{ height: 90 , transition: 'transform 0.5s ease', ':hover': { transform: 'scale(1.2)'
          }
          }}/>
           </div>
              </motion.div>
              <div>
                <h3 className="text-xl font-bold">Party Plater Catering</h3>
                <p className="text-white/80 text-sm">Excellence in Every Bite</p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              Kenya's premier catering service, creating unforgettable culinary experiences for over 8 years.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className="text-white/80 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm"
                  >
                    <FaHeart className="text-xs" /> {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <motion.li key={index} whileHover={{ x: 5 }} variants={itemVariants}>
                  <span className="text-white/80 hover:text-orange-500 transition-colors duration-300 flex items-center gap-2 text-sm">
                    <FaUtensils className="text-xs" /> {service}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-orange-500" />
                <span className="text-white/80 text-sm">+254 700 123 456</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:info@premiumcatering.co.ke"
                  className="text-white/80 hover:text-orange-500 transition-colors duration-300 text-sm"
                >
                  info@partyplatercatering.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-orange-500" />
                <span className="text-white/80 text-sm">Westlands, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-orange-500" />
                <span className="text-white/80 text-sm">Mon - Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className="text-white hover:text-orange-500 transition-colors duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-white/70 text-sm mb-4">
            &copy; {new Date().getFullYear()} Party Plater Catering. All rights reserved. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
              className="inline mx-1"
            >
              <FaHeart className="text-orange-500" />
            </motion.span>
            in Kenya
          </p>

          <div className="flex flex-wrap justify-center space-x-6 text-sm text-white/70">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/privacy-policy"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Privacy Policy
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/terms"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Terms of Service
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/cookies"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Cookie Policy
            </motion.a>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 pt-6 border-t border-white/20 text-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-white/70">
            <div className="flex items-center justify-center space-x-2">
              <FaUtensils className="text-orange-500" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaStar className="text-orange-500" />
              <span>5-Star Rated Service</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaHeart className="text-orange-500" />
              <span>500+ Happy Clients</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-40"
        aria-label="Scroll to top"
      >
        <motion.div
          animate={{ y: [-2, 2, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          ↑
        </motion.div>
      </motion.button>
    </footer>
  );
};

export default Footer;