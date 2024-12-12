import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Star } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

export default function Teaching() {
  return (
    <section id="teaching" className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Rest of the component content */}
      </motion.div>
    </section>
  );
}