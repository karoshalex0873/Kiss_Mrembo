import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
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
    <nav className=" bg-gradient-to-r from-pink-900 to bg-pink-400 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-pink-500">Salon</h1>
            </div>
            <div className="sm:hidden">
              <button
                onClick={handleMenuToggle}
                className="text-pink-500 px-3 py-2 rounded-md text-lg font-medium"
              >
                Menu
              </button>
            </div>
            <div className={`absolute right-0 top-0  ${isMenuVisible ? 'block' : 'hidden'}`} style={{ zIndex: 50 }}>
              <motion.div
                className="flex flex-col space-y-4 p-4"
                initial="hidden"
                animate={controls}
                variants={navVariants}
              >
                {['Home', 'Services', 'Booking', 'About', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="sm:text-white  text-darkBrand px-3 py-2 rounded-md text-lg font-medium"
                    variants={navVariants}
                  >
                    {item}
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
