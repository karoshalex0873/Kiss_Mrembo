import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  
  return (
    <div className="bg-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-pink-600 text-center sm:text-4xl">
          Contact Us
        </h2>
        <p className="mt-4 text-lg leading-6 text-pink-500 text-center">
          For any inquiries, please email us at contact@salon.com or call (123) 456-7890.
        </p>
        <div className="flex justify-center mt-8" ref={ref}>
          <motion.div
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaFacebook color="#1877f2" size={32} />
            <FaInstagram color="#bc2a8d" size={32} />
            <FaTwitter color="#1da1f2" size={32} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
