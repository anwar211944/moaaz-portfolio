import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const projects = [
  {
    featured: true,
    title: 'AI-Powered Data Analytics Platform',
    description:
      'Built an end-to-end analytics platform using machine learning to process and analyze large-scale data sets, resulting in 40% faster insights generation.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'TensorFlow', 'AWS', 'React'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Predictive Maintenance System',
    description:
      'Developed a system that predicts equipment failures before they occur, reducing downtime by 30%.',
    image:
      'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&w=800&q=80',
    tags: ['Python', 'Scikit-learn', 'Docker'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Google Map Locations Scraper',
    description:
      'The project involves developing a Location Data Scraper that automates the extraction of data from online sources. The primary goal is to gather detailed information about various locations across different cities.',
    image:
      'https://www.q3tech.com/wp-content/uploads/2024/01/AI-1-1.jpg',
    tags: ['python', 'pandas', 'bs4 ', 'selenium', 'logging'],
    github: 'https://github.com/',
    demo: '',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-[#19a34c] mx-auto"></div>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`grid grid-cols-1 ${
                project.featured
                  ? 'lg:grid-cols-2'
                  : 'md:grid-cols-2 lg:grid-cols-3'
              } gap-8 items-center ${
                index !== 0 && 'pt-8 border-t border-gray-200'
              }`}
            >
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-lg aspect-video"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#19a34c]/10 text-[#19a34c] rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <motion.a
                    href={project.github}
                    className="inline-flex items-center text-gray-600 hover:text-[#19a34c]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Github className="w-5 h-5 mr-2" />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="inline-flex items-center text-gray-600 hover:text-[#19a34c]"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}