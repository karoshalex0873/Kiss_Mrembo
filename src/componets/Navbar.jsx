import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const Navbar = () => {
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

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-pink-500">Salon</h1>
            </div>
            <div className="hidden sm:flex sm:ml-6">
              <motion.div
                className="flex space-x-4"
                initial="hidden"
                animate={controls}
                variants={navVariants}
              >
                {['Home', 'Services', 'Booking', 'About', 'Contact'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`} // Use # and lowercase item name as ID
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-pink-500 px-3 py-2 rounded-md text-lg font-medium"
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
