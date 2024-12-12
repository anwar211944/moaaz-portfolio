import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center min-h-screen bg-neutral-50"
    >
      <motion.div
        className="text-center max-w-2xl px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">Get in Touch</h2>
          <div className="w-20 h-1 bg-[#19a34c] mx-auto mb-6"></div>
          <p className="text-neutral-600">
            Feel free to connect with me. I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <motion.div
                className="flex items-center justify-center space-x-3 text-neutral-600"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 text-[#19a34c]" />
                <a
                  href="mailto:moaazhammad36@gmail.com"
                  className="hover:text-[#19a34c]"
                >
                  moaazhammad36@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center justify-center space-x-3 text-neutral-600"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 text-[#19a34c]" />
                <span>Giza, Egypt</span>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-neutral-900 mb-4">
              Connect with Me
            </h3>
            <div className="flex justify-center space-x-4">
              {[
                {
                  icon: Github,
                  href: 'https://github.com/Moaaz-Hammad',
                  label: 'GitHub',
                },
                {
                  icon: Linkedin,
                  href: 'linkedin.com/in/moaaz-hammad',
                  label: 'LinkedIn',
                },
                // {
                //   icon: Twitter,
                //   href: 'https://x.com/',
                //   label: 'Twitter',
                // },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-neutral-100 text-neutral-600 rounded-full hover:bg-[#19a34c]/10 hover:text-[#19a34c] transition-colors duration-200"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg mb-16"
            whileHover={{ scale: 1.02 }}
          >
            <div className="aspect-video bg-[#19a34c]/5 rounded-lg mb-4 overflow-hidden">
              <img
                src="https://whynotegypt.com/wp-content/uploads/2018/10/14800095821_ec3e073415_z.jpg"
                alt="Giza, Egypt"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-center text-neutral-600">
              <MapPin className="w-5 h-5 text-[#19a34c] mr-2" />
              <p>Based in Giza, Egypt</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}