import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils, FaTools, FaBuilding, FaTruck, FaSearch, FaTimes } from 'react-icons/fa';


import delivery1 from '../assets/delivery.jpg';
import delivery2 from '../assets/delivery2.jpg';
import delivery3 from '../assets/packaging.jpg';
import cooprate1 from '../assets/cooprate.jpg';
import cooprate2 from '../assets/dinner.jpg';
import cooprate3 from '../assets/gear.jpg';
import equipment1 from '../assets/equipment.jpg';
import equipment2 from '../assets/tool.jpg';
import equipment3 from '../assets/setup.jpg';

import setup1 from '../assets/tent.jpg';
import setup2 from '../assets/garden.jpg';
import setup3 from '../assets/tent2.jpg';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All', icon: <FaUtensils /> },
    { id: 'outdoor', name: 'Outdoor Catering', icon: <FaUtensils /> },
    { id: 'equipment', name: 'Equipment & Setup', icon: <FaTools /> },
    { id: 'corporate', name: 'Corporate Events', icon: <FaBuilding /> },
    { id: 'delivery', name: 'Food Delivery', icon: <FaTruck /> },
  ];

  const galleryItems = [
    {
      id: 1,
      src: setup1,
      alt: 'Outdoor wedding catering setup',
      category: 'outdoor',
      title: 'Elegant Wedding Setup',
      description: 'Beautiful outdoor wedding catering with premium table settings',
    },
    {
      id: 2,
      src: setup2,
      alt: 'Garden party setup',
      category: 'outdoor',
      title: 'Garden Party Catering',
      description: 'Outdoor garden party with elegant food presentation',
    },
    {
      id: 3,
      src: setup3,
      alt: 'Outdoor event tent setup',
      category: 'outdoor',
      title: 'Event Tent Setup',
      description: 'Spacious outdoor tent arrangement for events',
    },
    {
      id: 4,
      src: equipment1,
      alt: 'Professional chafing dishes',
      category: 'equipment',
      title: 'Professional Equipment',
      description: 'High-quality chafing dishes and serving equipment',
    },
    {
      id: 5,
      src: equipment2,
      alt: 'Catering tools display',
      category: 'equipment',
      title: 'Catering Tools',
      description: 'Advanced catering tools for perfect setups',
    },
    {
      id: 6,
      src: equipment3,
      alt: 'Setup equipment',
      category: 'equipment',
      title: 'Event Setup Gear',
      description: 'Essential gear for event preparations',
    },
    {
      id: 7,
      src: cooprate1,
      alt: 'Corporate lunch buffet',
      category: 'corporate',
      title: 'Corporate Buffet',
      description: 'Professional corporate event catering services',
    },
    {
      id: 8,
      src: cooprate2,
      alt: 'Conference catering',
      category: 'corporate',
      title: 'Conference Catering',
      description: 'Tailored catering for business conferences',
    },
    {
      id: 9,
      src: cooprate3,
      alt: 'Corporate dinner setup',
      category: 'corporate',
      title: 'Corporate Dinner',
      description: 'Elegant dinner setup for corporate clients',
    },
    {
      id: 10,
      src: delivery1,
      alt: 'Food delivery packaging',
      category: 'delivery',
      title: 'Premium Delivery',
      description: 'Carefully packaged meals for safe delivery',
    },
    {
      id: 11,
      src: delivery2,
      alt: 'Delivery van in action',
      category: 'delivery',
      title: 'Delivery Service',
      description: 'Efficient food delivery across regions',
    },
    {
      id: 12,
      src: delivery3,
      alt: 'Packaged meal delivery',
      category: 'delivery',
      title: 'Meal Packaging',
      description: 'Secure packaging for meal deliveries',
    },
  ];

  const filteredItems = activeCategory === 'all' ? galleryItems : galleryItems.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <FaUtensils className="text-5xl text-orange-500 mx-auto" />
          </motion.div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Gallery</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            Explore our portfolio of successful events and catering setups.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-md hover:shadow-lg ${
                activeCategory === cat.id
                  ? 'bg-orange-500 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              }`}
            >
              {cat.icon}
              {cat.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              onClick={() => setSelectedImage(item)}
              className="relative overflow-hidden rounded-2xl shadow-xl cursor-pointer group"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <FaSearch className="text-white" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filteredItems.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16"
          >
            <FaSearch className="text-5xl text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Images Found</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">Try selecting a different category.</p>
          </motion.div>
        )}

    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-16 bg-gradient-to-br from-gray-900 to-orange-500 rounded-2xl p-8 text-white"
>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
    {[
      { number: '500+', label: 'Events Captured', icon: <FaUtensils /> },
      { number: '50+', label: 'Equipment Pieces', icon: <FaTools /> },
      { number: '100+', label: 'Corporate Clients', icon: <FaBuilding /> },
      { number: '1000+', label: 'Deliveries Made', icon: <FaTruck /> },
    ].map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center justify-center text-center"
      >
        <div className="text-2xl mb-2">{stat.icon}</div>
        <div className="text-2xl font-bold mb-1">{stat.number}</div>
        <div className="text-sm opacity-90">{stat.label}</div>
      </motion.div>
    ))}
  </div>
</motion.div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-gray-900 rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Close"
              >
                <FaTimes />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;