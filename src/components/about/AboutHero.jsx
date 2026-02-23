import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const images = [
    "/images/courtrungu.avif",
    "/images/lawyers.jpg",
    "/images/statue.jpg",
 
];

const AboutHero = () => {
  const [index, setIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="font-serif relative overflow-hidden h-[650px] flex items-center justify-center">
      <motion.img
        key={index}
        src={images[index]}
        style={{ y }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/60 leading-relaxed" />

      <div className="relative text-center max-w-4xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-semibold text-white leading-tight mt-24"
        >
          Experienced legal counsel you can trust. Protecting interests, delivering results.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto mt-6"
        >
          We provide comprehensive legal services tailored to your specific needs.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutHero;
