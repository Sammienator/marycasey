import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FaUtensils, FaUsers, FaClock, FaChevronDown, FaPhone,FaTrophy,FaHeart, FaEnvelope } from 'react-icons/fa';
import food1 from '../assets/food1.jpg';
import logo from '../assets/mary.png';
import '../App.css'

const MotionLink = motion(Link);

const Home = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const accordionData = [
    {
      id: 1,
      title: 'What types of events do you cater?',
      content: 'We cater for all types of events including weddings, corporate events, birthdays, graduations, and private parties. No event is too big or small for our team.',
      icon: <FaUsers className="text-orange-500" />,
    },
    {
      id: 2,
      title: 'What cuisines do you offer?',
      content: 'We specialize in both local Kenyan cuisine and international dishes. Our menu includes traditional favorites and modern fusion options to suit all tastes.',
      icon: <FaUtensils className="text-orange-500" />,
    },
    {
      id: 3,
      title: 'How far in advance should I book?',
      content: 'We recommend booking at least 2 weeks in advance for smaller events and 4-6 weeks for larger events like weddings to ensure availability and proper planning.',
      icon: <FaClock className="text-orange-500" />,
    },
    {
      id: 4,
      title: 'Do you provide serving staff?',
      content: 'Yes, we provide professional serving staff for all events. Our trained team ensures excellent service from setup to cleanup, allowing you to enjoy your event.',
      icon: <FaUsers className="text-orange-500" />,
    },
    {
      id: 5,
      title: 'Can you accommodate dietary restrictions?',
      content: 'Absolutely! We can accommodate various dietary needs including vegetarian, vegan, gluten-free, and other special requirements. Just let us know in advance.',
      icon: <FaUtensils className="text-orange-500" />,
    },
    {
      id: 6,
      title: 'What areas do you serve?',
      content: 'We provide catering services throughout Nairobi and surrounding areas. Contact us to confirm if we service your specific location.',
      icon: <FaClock className="text-orange-500" />,
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div id="home" className="min-h-screen">
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${food1})` }}>
        <div className="absolute inset-0 bg-black/60 dark:bg-gray-900/60"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white dark:text-white px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Premium Catering
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg mb-10 max-w-2xl mx-auto"
            >
              Creating unforgettable culinary experiences for your special events in Kenya
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-shadow duration-300"
              >
                Book Now
              </MotionLink>
              <MotionLink
                to="/menus"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                View Menus
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Events Catered', icon: <FaUtensils className="text-3xl text-orange-500" /> },
              { number: '1200+', label: 'Happy Clients', icon: <FaUsers className="text-3xl text-orange-500" /> },
              { number: '150+', label: 'Menu Items', icon: <FaTrophy className="text-3xl text-orange-500" /> },
              { number: '8', label: 'Years Experience', icon: <FaHeart className="text-3xl text-orange-500" /> },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl"
              >
                <div className="mb-4 mx-auto flex justify-center">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            
            

           <div className="flex flex-col items-center">
              <img src={logo} alt="Logo" className="logo" style={{ height: 90 , transition: 'transform 0.5s ease', ':hover': { transform: 'scale(1.2)'
          }
          }}/>


            <h2 className="text-3xl font-bold mb-4 mt-4">Our Services</h2>
            <p className="text-base max-w-2xl mx-auto">Comprehensive catering solutions for every occasion</p>
           </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Event Catering', description: 'Full-service catering for weddings, corporate events, and parties', icon: <FaUsers className="text-3xl" /> },
              { title: 'Menu Customization', description: 'Personalized menus tailored to your preferences and dietary needs', icon: <FaUtensils className="text-3xl" /> },
              { title: 'Delivery Services', description: 'Prompt and professional food delivery for your convenience', icon: <FaClock className="text-3xl" /> },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-white/10 rounded-xl text-center backdrop-blur-sm"
              >
                <div className="mb-4 mx-auto flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </motion.div>
            ))}
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
           
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 dark:text-gray-300 text-base max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {accordionData.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md"
              >
                <motion.button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-orange-500" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {openAccordion === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-600 dark:text-gray-300">{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-gray-900 text-white">
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
              className="mb-8"
            >
              <div className="flex flex-col items-center">
              <img src={logo} alt="Logo" className="logo" style={{ height: 90 , transition: 'transform 0.5s ease', ':hover': { transform: 'scale(1.2)'
          }
          }}/>
           </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Create Magic?</h2>
            <p className="text-base mb-10 max-w-3xl mx-auto">
              Let us handle the food while you enjoy your special moment. Contact us today for a personalized quote and menu consultation.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              >
                <FaPhone />
                Get Your Quote
              </MotionLink>
              <motion.a
                href="mailto:info@catering.com"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2"
              >
                <FaEnvelope />
                Email Us
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap justify-center gap-8 text-white/80"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">FREE</div>
                <div className="text-sm">Consultation</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;