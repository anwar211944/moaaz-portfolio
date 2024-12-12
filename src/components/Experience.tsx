import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const experiences = {
  professional: [
    {
      title: "Senior Data Scientist",
      company: "Tech Innovations Inc.",
      period: "2020 - Present",
      description: "Led a team of data scientists in developing ML models for predictive analytics, resulting in 25% improvement in forecast accuracy.",
      technologies: ["Python", "TensorFlow", "AWS", "Spark"]
    },
    {
      title: "Data Engineer",
      company: "Data Solutions Co.",
      period: "2018 - 2020",
      description: "Designed and implemented data pipelines processing 5TB+ daily, improving data processing efficiency by 40%.",
      technologies: ["Python", "Apache Airflow", "SQL", "Docker"]
    }
  ],
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <div className="w-20 h-1 bg-[#19a34c] mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-6 h-6 text-[#19a34c]" />
              <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
            </div>
            
            <div className="space-y-8">
              {experiences.professional.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative pl-8 border-l-2 border-[#19a34c]/20"
                  whileHover={{ x: 5 }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-[#19a34c]" />
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                    <p className="text-[#19a34c] font-medium">{exp.company}</p>
                    <p className="text-gray-600">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-[#19a34c]/10 text-[#19a34c] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}