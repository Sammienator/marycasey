import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { FaUtensils, FaUsers, FaTrophy, FaHeart, FaQuoteLeft, FaChevronDown, FaGraduationCap, FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import food1 from '../assets/food1.jpg';
import food2 from '../assets/food2.jpg';
import food3 from '../assets/food3.jpg';
import food4 from '../assets/food4.jpg';
import food5 from '../assets/food5.jpg';

const About = () => {
  const [counters, setCounters] = useState({ events: 0, clients: 0, dishes: 0, years: 0 });
  const [openAccordion, setOpenAccordion] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const timerRef = useRef(null);

  const finalCounters = useMemo(() => ({
    events: 500,
    clients: 1200,
    dishes: 150,
    years: 8,
  }), []);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      setCounters((prev) => {
        const newCounters = {};
        let allComplete = true;

        Object.keys(finalCounters).forEach((key) => {
          const increment = finalCounters[key] / steps;
          const newValue = Math.min(prev[key] + increment, finalCounters[key]);
          newCounters[key] = newValue;
          if (newValue < finalCounters[key]) allComplete = false;
        });

        if (allComplete) {
          clearInterval(timer);
          return finalCounters;
        }

        return { ...prev, ...newCounters };
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [finalCounters]);

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, centerPadding: '40px' } }],
  };

  const testimonialCarouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    fade: true,
  };

  const images = [
    { src: food1, alt: 'Delicious appetizers' },
    { src: food2, alt: 'Main course specialty' },
    { src: food3, alt: 'Fresh ingredients' },
    { src: food4, alt: 'Elegant presentation' },
    { src: food5, alt: 'Sweet desserts' },
  ];

  const achievements = [
    {
      icon: <FaUtensils className="text-3xl text-orange-500" />,
      count: counters.events,
      suffix: '+',
      label: 'Events Catered',
      description: 'Successful events delivered',
    },
    {
      icon: <FaUsers className="text-3xl text-orange-500" />,
      count: counters.clients,
      suffix: '+',
      label: 'Happy Clients',
      description: 'Satisfied customers served',
    },
    {
      icon: <FaTrophy className="text-3xl text-orange-500" />,
      count: counters.dishes,
      suffix: '+',
      label: 'Menu Items',
      description: 'Diverse culinary options',
    },
    {
      icon: <FaHeart className="text-3xl text-orange-500" />,
      count: counters.years,
      suffix: '',
      label: 'Years Experience',
      description: 'In the catering industry',
    },
  ];

  const founderAccordionData = [
    {
      id: 1,
      title: 'Her Story',
      icon: <FaQuoteLeft className="text-orange-500" />,
      content:
        "Sarah's culinary journey began in her grandmother's kitchen in rural Kenya, where she learned the secrets of traditional cooking at age 8. After completing her culinary arts degree at the Kenya Utalii College, she worked in top Nairobi hotels before founding Premium Catering in 2015.",
    },
    {
      id: 2,
      title: 'Education & Training',
      icon: <FaGraduationCap className="text-orange-500" />,
      content:
        'Diploma in Culinary Arts from Kenya Utalii College. Certified in Food Safety and Hygiene. Advanced training in International Cuisine from Culinary Institute of America. Specialized in Kenyan fusion cuisine.',
    },
    {
      id: 3,
      title: 'Achievements',
      icon: <FaTrophy className="text-orange-500" />,
      content:
        'Winner of Kenya Culinary Excellence Award 2022. Featured in East Africa Food Magazine. Catered for high-profile events including corporate launches and celebrity weddings. Over 500 successful events managed.',
    },
    {
      id: 4,
      title: 'Philosophy',
      icon: <FaHeart className="text-orange-500" />,
      content:
        'Believes in using locally sourced ingredients to support Kenyan farmers while creating innovative dishes that blend tradition with modern tastes. Passionate about sustainable practices and waste reduction in catering.',
    },
  ];

  const testimonials = [
    {
      quote: 'Exceptional service and delicious food! Made our wedding unforgettable.',
      author: 'John & Mary',
      rating: 5,
      image: food1,
    },
    {
      quote: 'Professional team, amazing flavors. Highly recommended for corporate events.',
      author: 'Tech Corp CEO',
      rating: 5,
      image: food2,
    },
    {
      quote: 'The food was a hit at our party! Everyone loved the Kenyan fusion dishes.',
      author: 'Sarah K.',
      rating: 5,
      image: food3,
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="py-16 bg-white dark:bg-gray-900">
      <section className="py-16 bg-gradient-to-br from-white to-orange-500 dark:from-gray-900 dark:to-orange-500 text-gray-900 dark:text-white relative overflow-hidden">
        <img
          src={food4}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-black/20 dark:bg-transparent" />
        <div className="container mx-auto px-4 relative z-10">
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
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg max-w-2xl mx-auto text-black dark:text-white">
              Discover our passion for crafting exceptional culinary experiences with a Kenyan twist.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((ach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-4">{ach.icon}</div>
                <div className="text-4xl font-bold mb-2 text-gray-900 dark:text-white">
                  {Math.floor(ach.count)}
                  {ach.suffix}
                </div>
                <div className="text-lg font-bold mb-1 text-gray-900 dark:text-white">{ach.label}</div>
                <p className="text-base text-gray-600 dark:text-gray-300">{ach.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-orange-500 text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Our Culinary Creations
          </motion.h2>
          <Slider {...carouselSettings}>
            {images.map((img, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="px-2"
                onMouseEnter={() => {
                  if (timerRef.current) clearTimeout(timerRef.current);
                  timerRef.current = setTimeout(() => setSelectedImage(img.src), 3000);
                }}
                onMouseLeave={() => {
                  if (timerRef.current) clearTimeout(timerRef.current);
                  timerRef.current = null;
                }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-72 object-cover rounded-xl shadow-lg"
                />
              </motion.div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          >
            Meet Our Founder
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-xl overflow-hidden shadow-2xl"
            >
              <img
                src={food4}
                alt="Mary Mugo"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 dark:bg-gray-900/90 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mary Mugo</h3>
                <p className="text-gray-600 dark:text-gray-300">Founder & Head of Operations</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative mb-6">
                <FaQuoteLeft className="text-4xl text-orange-500 mb-4" />
                <blockquote className="text-lg text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "My journey began in my grandmother's kitchen, where I learned that food is more than
                  sustenance—it's love, culture, and connection. Every dish we create carries this philosophy."
                </blockquote>
              </div>

              <div className="space-y-4">
                {founderAccordionData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
                  >
                    <motion.button
                      onClick={() => toggleAccordion(item.id)}
                      className="w-full px-4 py-4 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      whileHover={{ scale: 1.01 }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-xl">{item.icon}</div>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">{item.title}</span>
                      </div>
                      <motion.div
                        animate={{ rotate: openAccordion === item.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <FaChevronDown className="text-orange-500 text-lg" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {openAccordion === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-5"
                        >
                          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed pl-8">{item.content}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block mt-6"
              >
                <button className="bg-gradient-to-r from-gray-900 to-orange-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all duration-300 text-base">
                  Read Full Story
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white px-4 mx-auto max-w-4xl"
        >
          What Our Clients Say
        </motion.h2>
        <div className="w-full ">
          <Slider {...testimonialCarouselSettings}>
            {testimonials.map((test, index) => (
              <div key={index} className="relative w-full">
                <img
                  src={test.image}
                  alt="Testimonial background"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="flex justify-center mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <FaStar key={i} className="text-orange-500 text-2xl" />
                    ))}
                  </div>
                  <p className="italic mb-4 text-2xl max-w-2xl text-white">"{test.quote}"</p>
                  <p className="font-bold text-xl text-white">— {test.author}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              alt="Enlarged image"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;