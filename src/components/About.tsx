import React from 'react';
import { motion } from 'framer-motion';
import { Download, BookOpen, Coffee, Rocket } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#19a34c] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Hello,I am a Data Scientist with foundational knowledge in data analysis, statistical modeling, and machine learning. Skilled in Python, and SQL for data manipulation and analysis, with experience in libraries such as Pandas, NumPy, and Scikit-learn. Familiar with data visualization tools like Matplotlib and Seaborn to create insightful graphs and dashboards. Experience in cleaning, preprocessing, and exploring datasets to extract meaningful insights. Strong problem-solving skills with an analytical mindset, and the ability to collaborate with cross-functional teams to understand business requirements and translate them into data-driven solutions. Seeking to apply these skills in real-world projects while continuing to develop expertise in more advanced techniques such as deep learning, natural language processing, and cloud-based data solutions.
            </p>
            {/* <p className="text-lg text-gray-700 leading-relaxed">
              Today, I put together technical knowledge with the art of teaching
              to help others understand the world of data science, engagingly. I
              believe in practical learning and hands-on application of
              concepts.
            </p> */}
            <div className="flex justify-center">
              <motion.a
                href="https://docs.google.com/document/d/1vFWvXeeSTrttmeZ1c37VnVwxSwg0_gkBp-ESJ5mXQtE/edit?usp=sharing"
                className="inline-flex items-center px-6 py-3 rounded-full bg-[#19a34c] text-white font-medium hover:bg-[#15803d] transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: BookOpen,
                title: 'Continuous Learner',
                description: 'Always exploring new technologies and methodologies',
              },
              {
                icon: Coffee,
                title: 'Coffee Enthusiast',
                description: 'Powered by coffee and curiosity',
              },
              {
                icon: Rocket,
                title: 'Innovation Driven',
                description: 'Passionate about cutting-edge solutions',
              },
              {
                icon: Coffee,
                title: 'Design Enthusiast',
                description: 'Constantly experimenting with new design trends, tools, and creative approaches.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-50 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <item.icon className="w-8 h-8 text-[#19a34c] mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}