import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUtensils, FaBirthdayCake, FaLeaf, FaPizzaSlice, FaHamburger, FaIceCream, FaAppleAlt, FaFish, FaDrumstickBite, FaCarrot, FaStar, FaUsers, FaHeart, FaCheckCircle, FaCrown, FaGem, FaCocktail, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menus = () => {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const menuPackages = [
    {
      id: 1,
      name: 'Essential Menu',
      description: 'Perfect for intimate gatherings and small events',
      price: 'KSh 2,500',
      pricePerPerson: 'per person',
      icon: <FaUtensils className="text-3xl text-orange-500" />,
      color: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white',
      borderColor: 'border-gray-900 dark:border-white',
      popular: false,
      guests: '10-30 people',
      items: [
        { category: 'Main Course', name: 'Nyama Choma with Ugali, Sukuma Wiki, and Kachumbari', description: 'Grilled goat meat with traditional spices, cornmeal staple, sautéed collard greens with onions and tomatoes, fresh tomato and onion salad with coriander', icon: <FaDrumstickBite className="text-gray-900 dark:text-white" /> },
        { category: 'Beverage', name: 'Tusker Beer or Muratina or Fresh Tamarind Juice or Kenyan Tea (chai)', description: 'Choice of Kenyan beer, honey wine, tamarind juice, or spiced tea', icon: <FaAppleAlt className="text-gray-900 dark:text-white" /> },
        { category: 'Dessert', name: 'Fresh Tropical Fruits or Mandazi with Honey Drizzle', description: 'Mango, pineapple, and passion fruit or fried doughnuts with honey', icon: <FaIceCream className="text-gray-900 dark:text-white" /> },
      ],
    },
    {
      id: 2,
      name: 'Premium Menu',
      description: 'Elevated dining for special occasions',
      price: 'KSh 5,000',
      pricePerPerson: 'per person',
      icon: <FaCrown className="text-3xl text-orange-500" />,
      color: 'bg-gray-900 dark:bg-white text-white dark:text-gray-900',
      borderColor: 'border-gray-900 dark:border-white',
      popular: true,
      guests: '30-100 people',
      items: [
        { category: 'Starter', name: 'Samosas (beef and vegetable) with Bhajia', description: 'Spiced pastry with tamarind chutney and potato fritters with mint-coriander chutney', icon: <FaPizzaSlice className="text-white dark:text-gray-900" /> },
        { category: 'Starter', name: 'Bhajia (potato fritters) with mint-coriander chutney', description: 'Crispy fritters with herbal dip', icon: <FaCarrot className="text-white dark:text-gray-900" /> },
        { category: 'Main Course', name: 'Fish Curry (samaki wa nazi) with Coconut Rice, Fresh Chapati, and Steamed Spinach with groundnuts', description: 'Fish in rich coconut curry sauce, Swahili-style rice, flatbread, and nutty spinach', icon: <FaFish className="text-white dark:text-gray-900" /> },
        { category: 'Beverage', name: 'Fresh Coconut Water or Hibiscus Tea or Baobab Fruit Drink', description: 'Choice of natural coconut water, red tea, or baobab drink', icon: <FaCocktail className="text-white dark:text-gray-900" /> },
        { category: 'Dessert', name: 'Halwa with cardamom or Fresh Mango Slices with lime', description: 'Cardamom-infused sweet or tangy mango slices', icon: <FaBirthdayCake className="text-white dark:text-gray-900" /> },
      ],
    },
    {
      id: 3,
      name: 'Luxury Menu',
      description: 'Ultimate gourmet experience for premium events',
      price: 'KSh 7,500',
      pricePerPerson: 'per person',
      icon: <FaGem className="text-3xl text-orange-500" />,
      color: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white',
      borderColor: 'border-gray-900 dark:border-white',
      popular: false,
      guests: '50-200 people',
      items: [
        { category: 'Starter', name: 'Kunde Soup', description: 'Creamy cowpea leaves soup with coconut milk and spices', icon: <FaLeaf className="text-gray-900 dark:text-white" /> },
        { category: 'Starter', name: 'Samosas (beef and vegetable) with tamarind chutney', description: 'Spiced pastry with tangy dip', icon: <FaPizzaSlice className="text-gray-900 dark:text-white" /> },
        { category: 'Starter', name: 'Bhajia (potato fritters) with mint-coriander chutney', description: 'Crispy fritters with herbal dip', icon: <FaCarrot className="text-gray-900 dark:text-white" /> },
        { category: 'Main Course', name: 'Braised Beef Stew with Mukimo, Coconut Bean Curry, Sautéed Managu, and Fresh Avocado Slices', description: 'Spiced beef with mashed peas-potatoes-maize, curry, African nightshade, and avocado', icon: <FaHamburger className="text-gray-900 dark:text-white" /> },
        { category: 'Beverage', name: 'Kenyan Wine or Mnazi or Fresh Sugar Cane Juice or Kenyan Coffee', description: 'Choice of wine, palm wine, cane juice, or coffee', icon: <FaCocktail className="text-gray-900 dark:text-white" /> },
        { category: 'Dessert', name: 'Passion Fruit Panna Cotta or Sweet Potato and Ginger Cake or Fresh Coconut Ice Cream', description: 'Silky panna cotta, spiced cake, or coconut ice cream', icon: <FaIceCream className="text-gray-900 dark:text-white" /> },
      ],
    },
  ];

  const handlePrev = () => {
    setCurrentMenuIndex((prev) => (prev === 0 ? menuPackages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentMenuIndex((prev) => (prev === menuPackages.length - 1 ? 0 : prev + 1));
  };

  const menu = menuPackages[currentMenuIndex];

  return (
    <div className="py-16 mt-4 bg-white dark:bg-gray-900">
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
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Menus</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm">
            Explore our curated menus designed for every occasion
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between mb-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handlePrev}
              className="text-orange-500 text-2xl"
            >
              <FaChevronLeft />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleNext}
              className="text-orange-500 text-2xl"
            >
              <FaChevronRight />
            </motion.button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={menu.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className={`relative p-6 rounded-2xl shadow-xl ${menu.color} ${menu.borderColor} border-2 hover:shadow-2xl transition-all duration-300 mx-auto max-w-md`}
            >
              {menu.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <div className="flex justify-center mb-4">{menu.icon}</div>
                <h3 className="text-xl font-bold mb-2">{menu.name}</h3>
                <p className="text-sm mb-4">{menu.description}</p>
                <div className="text-2xl font-bold mb-2">{menu.price}</div>
                <div className="text-xs mb-4">{menu.pricePerPerson}</div>
                <div className="flex justify-center items-center gap-2 mb-4">
                  <FaUsers className="text-orange-500" />
                  <span className="text-sm">{menu.guests}</span>
                </div>
              </div>
              <div className="mt-6 border-t border-gray-300 dark:border-gray-600 pt-4">
                {menu.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 mb-4">
                    <div className="text-lg">{item.icon}</div>
                    <div>
                      <h4 className="text-base font-bold">{item.category}: {item.name}</h4>
                      <p className="text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Why Choose Our Menus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <FaCheckCircle className="text-orange-500" />, title: 'Fresh Ingredients', description: 'Locally sourced, high-quality ingredients' },
              { icon: <FaHeart className="text-orange-500" />, title: 'Customizable', description: 'Tailored to your preferences and dietary needs' },
              { icon: <FaStar className="text-orange-500" />, title: 'Award-Winning', description: 'Recognized for culinary excellence' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-6 bg-gray-100 dark:bg-gray-800 rounded-xl"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Ready to Get Started?</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to customize your menu or book your event today!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all duration-300 text-sm"
            >
              Book Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Menus;