import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer',
      company: 'Qveto Technologies',
      period: 'Sep 2025 – Nov 2025',
      location: 'Hyderabad, India',
      type: 'Internship',
      description: 'Worked on cutting-edge AI/ML projects and full-stack web applications in a research-driven environment.',
      achievements: [       
        'Built custom OpenAI-powered chatbots with context-aware conversation handling',
        'Implemented React frontends with responsive designs and optimal user experience',
        'Designed and developed Node.js backends with RESTful APIs and database integration',
        'Managed application deployments using Docker containers and Render platform',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'YOLOv8', 'OpenAI API', 'Docker', 'Render', 'Python', 'JavaScript'],
    },
  ];

  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4"
        >
          Experience
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mb-12"></div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 hover:border-blue-400/50"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-blue-400 font-semibold">{exp.company}</p>
                </div>
                <span className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm">
                  {exp.type}
                </span>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  {exp.period}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={18} />
                  {exp.location}
                </div>
              </div>

              <p className="text-gray-300 mb-4">{exp.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold text-white mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3">
                      <span className="text-blue-400 mt-1">✓</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-slate-700/50 border border-slate-600 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Looking for New Opportunities</h3>
          <p className="text-gray-300 mb-6">
            I'm actively seeking full-time opportunities where I can contribute to innovative projects, work with cutting-edge technologies, and continue growing as a developer.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Get In Touch
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
