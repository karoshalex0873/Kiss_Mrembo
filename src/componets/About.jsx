import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <motion.div
      className="bg-white py-20"
      variants={containerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-pink-600 text-center sm:text-4xl mb-6"
          variants={itemVariants}
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <motion.div
            className="bg-pink-100 p-6 rounded-lg shadow-lg text-center sm:text-left"
            variants={itemVariants}
          >
            <p className="text-lg text-pink-600 font-semibold mb-2">
              Our Story
            </p>
            <p className="text-lg text-gray-800">
              We are a professional salon located in Kitengera, committed to providing top-notch beauty and relaxation services to our clients. Our mission is to create a welcoming and rejuvenating experience for everyone who walks through our doors.
            </p>
            <p className="text-lg text-gray-800">
              With a team of skilled professionals and a range of premium services, we strive to exceed your expectations and leave you feeling pampered and satisfied. Book an appointment today and experience the difference with us.
            </p>
            <div className="mt-4 flex justify-center sm:justify-start">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800 mr-4"
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
              >
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
            </div>
          </motion.div>
          <motion.img
            src="/src/assets/show.jpg"
            alt="About Us Image"
            className="rounded-lg shadow-lg w-full h-auto"
            variants={itemVariants}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
