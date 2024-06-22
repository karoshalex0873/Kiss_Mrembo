// import React from 'react';
import { motion } from 'framer-motion';
import Hero from  '../assets/video/eye.mp4'
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  };

  const rotate = {
    hidden: { rotate: -180 },
    visible: { rotate: 0, transition: { duration: 1 } },
  };

  return (
    <div className="relative h-screen bg-gradient-to-br from-pink-300 to-pink-500">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={Hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex flex-col justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-4"
            variants={itemVariants}
          >
            Kiss Mrembo
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl leading-relaxed mb-8"
            variants={itemVariants}
          >
            Experience the best services with our professional staff.
          </motion.p>
          <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-8" variants={fadeInUp}>
            <motion.p className="text-sm sm:text-base text-gray-200" variants={fadeInUp}>
              Our salon offers a variety of services to cater to all your beauty needs.
            </motion.p>
            <motion.p className="text-sm sm:text-base text-gray-200" variants={fadeInUp}>
              Enjoy a luxurious experience in a serene and relaxing environment.
            </motion.p>
            <motion.p className="text-sm sm:text-base text-gray-200" variants={fadeInUp}>
              Book an appointment today and let us pamper you to perfection!
            </motion.p>
          </motion.div>
        </motion.div>
        <motion.div className="flex justify-center mt-8" variants={rotate} initial="hidden" animate="visible">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <motion.path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
