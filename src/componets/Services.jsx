import  { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const servicesData = [
    { name: 'Pedicure', description: 'Complete pedicure services.', price: '1000ksh', image: '/src/assets/show.jpg' },
    { name: 'Pedicure', description: 'Complete pedicure services.', price: '1000ksh', image: '/src/assets/show.jpg' },

    { name: 'Pedicure', description: 'Complete pedicure services.', price: '1000 ksh', image: '/src/assets/show.jpg' },
    { name: 'Pedicure', description: 'Complete pedicure services.', price: '1200 ksh', image: '/src/assets/show.jpg' },
  ];

  const controlsArray = servicesData.map(() => useAnimation());
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.5, // Trigger animation when 50% of the element is in view
  });

  useEffect(() => {
    if (inView) {
      controlsArray.forEach((controls, index) => {
        setTimeout(() => {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
          });
        }, index * 400); // Adjust the delay timing as needed
      });
    }
  }, [controlsArray, inView]); // Include controlsArray in the dependency array

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-pink-600 text-center sm:text-4xl">
          Our Services
        </h2>
        <div className="mt-10" ref={ref}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                className="bg-pink-50 p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 100 }}
                animate={controlsArray[index]}
                transition={{ duration: 0.8 }}
              >
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="w-full rounded-lg mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                />
                <h3 className="text-xl font-bold text-pink-600">{service.name}</h3>
                <p className="mt-2 text-pink-500">{service.description}</p>
                <p className="mt-4 text-pink-600 font-bold">{service.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
