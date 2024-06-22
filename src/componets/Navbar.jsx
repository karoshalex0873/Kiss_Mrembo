import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true); // Always visible on larger devices
  const controls = useAnimation();

  const navVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const startAnimation = async () => {
    await controls.start('visible');
  };

  useEffect(() => {
    startAnimation();
  }, []);

  const handleMenuToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
        easing: 'ease-out',
        duration: 500,
      });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-pink-700 to-pink-500 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">Salon</h1>
            </div>
            <div className="sm:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-white px-3 py-2 rounded-md text-lg font-medium focus:outline-none"
              >
                Menu
              </button>
            </div>
          </div>
          <div className={`absolute top-0 right-0 bg-pink-700 sm:bg-transparent w-full sm:w-auto sm:flex-grow sm:relative sm:flex sm:items-center ${isMenuVisible ? 'block' : 'hidden'}`}>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 p-4"
              initial="hidden"
              animate={controls}
              variants={navVariants}
            >
              {['Home', 'Services', 'Booking', 'About', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white px-3 py-2 rounded-md text-lg font-medium hover:bg-pink-600 focus:outline-none focus:bg-pink-600"
                  variants={navVariants}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
