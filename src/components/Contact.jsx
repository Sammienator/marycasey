import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaUtensils, FaCheckCircle, FaExclamationTriangle, FaWhatsapp, FaFacebookF, FaInstagram, FaTwitter, FaUsers, FaCalendarAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual EmailJS credentials
      await emailjs.sendForm(
        'service_3rs1t9l',      // Replace with your EmailJS service ID
        'template_94few0n',     // Replace with your EmailJS template ID
        form.current,
        'i_LqlVWCCSNbG8v2z'       // Replace with your EmailJS public key
      );
      setFormStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };

  const eventTypes = [
    { value: '', label: 'Select Event Type' },
    { value: 'wedding', label: 'Wedding' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'birthday', label: 'Birthday Party' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'graduation', label: 'Graduation' },
    { value: 'conference', label: 'Conference' },
    { value: 'workshop', label: 'Workshop/Seminar' },
    { value: 'baby_shower', label: 'Baby Shower' },
    { value: 'bridal_shower', label: 'Bridal Shower' },
    { value: 'cocktail', label: 'Cocktail Party' },
    { value: 'charity', label: 'Charity Event' },
    { value: 'other', label: 'Other' }
  ];

  const guestCounts = [
    { value: '', label: 'Estimated Guest Count' },
    { value: '1-25', label: '1-25 guests' },
    { value: '26-50', label: '26-50 guests' },
    { value: '51-100', label: '51-100 guests' },
    { value: '101-200', label: '101-200 guests' },
    { value: '201-300', label: '201-300 guests' },
    { value: '301-500', label: '301-500 guests' },
    { value: '500+', label: '500+ guests' }
  ];

  const contactInfo = [
    {
      icon: <FaPhone className="text-xl" />,
      title: 'Phone',
      details: ['+254 700 123 456', '+254 20 123 4567'],
      color: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white',
    },
    {
      icon: <FaEnvelope className="text-xl" />,
      title: 'Email',
      details: ['info@partyplatercatering.com', 'events@partyplatercatering.com'],
      color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900',
    },
    {
      icon: <FaMapMarkerAlt className="text-xl" />,
      title: 'Location',
      details: ['Westlands, Nairobi', 'Kenya'],
      color: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white',
    },
    {
      icon: <FaClock className="text-xl" />,
      title: 'Working Hours',
      details: ['Mon - Sat: 8AM - 8PM', 'Sun: 10AM - 6PM'],
      color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900',
    },
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, name: 'WhatsApp', href: 'https://wa.me/+254700123456' },
    { icon: <FaFacebookF />, name: 'Facebook', href: 'https://facebook.com/premiumcatering' },
    { icon: <FaInstagram />, name: 'Instagram', href: 'https://instagram.com/premiumcatering' },
    { icon: <FaTwitter />, name: 'Twitter', href: 'https://twitter.com/premiumcatering' },
  ];

  return (
    <div id="contact" className="min-h-screen">
      <section className="py-16 bg-gradient-to-br from-gray-900 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <FaUtensils className="text-5xl mx-auto" />
            </motion.div>
            <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-base max-w-3xl mx-auto">Ready to make your event unforgettable? Let's create something extraordinary.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-32">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${info.color} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center`}
              >
                <div className="text-orange-500 mb-4 mx-auto flex justify-center">{info.icon}</div>
                <h3 className="text-lg font-bold mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-sm">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Your Full Name *"
                    required
                    className="w-full p-4 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-orange-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Your Email Address *"
                    required
                    className="w-full p-4 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-orange-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Event Type and Guest Count Row */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" />
                    <select
                      name="event_type"
                      required
                      className="w-full p-4 pl-12 rounded-full bg-white/20 text-white border border-white/30 focus:border-orange-500 focus:outline-none transition-all appearance-none"
                    >
                      {eventTypes.map((type, index) => (
                        <option 
                          key={index} 
                          value={type.value}
                          className="bg-gray-800 text-white"
                          disabled={index === 0}
                        >
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="relative">
                    <FaUsers className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70" />
                    <select
                      name="guest_count"
                      required
                      className="w-full p-4 pl-12 rounded-full bg-white/20 text-white border border-white/30 focus:border-orange-500 focus:outline-none transition-all appearance-none"
                    >
                      {guestCounts.map((count, index) => (
                        <option 
                          key={index} 
                          value={count.value}
                          className="bg-gray-800 text-white"
                          disabled={index === 0}
                        >
                          {count.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                    className="w-full p-4 rounded-full bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-orange-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Tell us more about your event - date, venue, special requirements, dietary restrictions, etc."
                    required
                    rows="5"
                    className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-white/70 border border-white/30 focus:border-orange-500 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-orange-500 text-white py-4 rounded-full font-bold hover:bg-orange-600 hover:shadow-lg transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending Message...' : 'Send Event Inquiry'}
                </motion.button>
              </form>

              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-4 bg-white/20 rounded-xl flex items-center gap-2 text-sm"
                  >
                    <FaCheckCircle className="text-green-400" />
                    <span>Thank you! We'll get back to you within 24 hours to discuss your event.</span>
                  </motion.div>
                )}
                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="mt-4 p-4 bg-white/20 rounded-xl flex items-center gap-2 text-sm"
                  >
                    <FaExclamationTriangle className="text-red-400" />
                    <span>Error sending message. Please try again or contact us directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-all text-sm"
                      aria-label={social.name}
                    >
                      <div className="text-orange-500">{social.icon}</div>
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <div className="space-y-4">
                  {[
                    { icon: <FaCheckCircle className="text-orange-500" />, label: 'Fresh Local Ingredients' },
                    { icon: <FaCheckCircle className="text-orange-500" />, label: 'Custom Menu Design' },
                    { icon: <FaCheckCircle className="text-orange-500" />, label: 'Professional Staff' },
                    { icon: <FaCheckCircle className="text-orange-500" />, label: 'Sustainable Practices' },
                  ].map((fact, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center gap-3 text-sm"
                    >
                      {fact.icon}
                      <span>{fact.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm mb-2">📞 <strong>Phone consultations:</strong> Available during business hours</p>
                  <p className="text-sm mb-2">📧 <strong>Email responses:</strong> Within 24 hours</p>
                  <p className="text-sm">💬 <strong>WhatsApp:</strong> Fastest response for urgent inquiries</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Find Us Here</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Located in the heart of Nairobi, serving all areas across Kenya
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-80 bg-gray-900 text-white flex items-center justify-center">
              <div className="text-center">
                <FaMapMarkerAlt className="text-5xl mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                <p className="text-sm opacity-90">Google Maps integration would go here</p>
                <p className="text-xs opacity-75 mt-2">Westlands at the Mall, Nairobi, Kenya</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-base mb-8 max-w-2xl mx-auto">Book your consultation today and let's plan your perfect event.</p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="tel:+254700123456"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 text-sm flex items-center gap-2 justify-center"
              >
                <FaPhone /> Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/+254700123456"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 text-sm flex items-center gap-2 justify-center"
              >
                <FaWhatsapp /> WhatsApp Us
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;