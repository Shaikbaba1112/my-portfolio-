import { motion } from 'framer-motion';
import { ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'BlockChain-Based Electricity Trading System',
      description: 'A decentralized platform for buying and selling electricity using blockchain technology',
      problem: 'Traditional electricity markets lack transparency and efficiency in transactions.',
      role: 'Full-stack Developer & Project Architect',
      details: 'A blockchain-based system that enables peer-to-peer electricity trading with smart contracts and real-time monitoring.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'JWT', 'Leaflet.js', 'Blockchain'],
      tags: ['Decentralized Finance', 'Blockchain', 'Energy Trading', 'Smart Contracts', 'Full-Stack Development'],
      links: { live: '#', github: '#' },
    },
    {
      title: 'FoodDash Web Application',
      description: 'A full-stack web application for food delivery services with real-time order tracking and AI-powered recommendations',
      problem: 'Existing food delivery platforms often lack personalized recommendations and real-time order tracking.',
      role: 'Backend Developer & System Designer & Frontend Developer',
      details: 'Designed and developed a full-stack food delivery application with features like user authentication, restaurant management, order processing, and AI-driven food recommendations.',
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'EJS', 'Tailwind CSS', 'JWT', 'Multer'],
      tags: ['Food Delivery', 'Node Express App', 'MongoDB', 'JWT Auth', 'Server Side Rendering'],
      links: { live: '#', github: '#' },
    },
  ];

  const moreProjects = [
    { title: 'Electricity Complaint Management System', desc: 'Comprehensive admin dashboard', tags: ['MERN', 'Analytics', 'Dashboard'] },
    { title: 'ElectroMart E-commerce Platform', desc: 'Full-stack e-commerce solution', tags: ['PWA', 'MERN', 'Realtime'] },
    { title: 'Social Media Content Scheduler', desc: 'Multi-platform social media management tool', tags: ['MERN', 'Social Media', 'Automation'] },
    { title: 'Expense Tracker with AI Insights', desc: 'Smart expense tracking with AI-powered categorization', tags: ['MERN', 'AI', 'FinTech'] },
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white mb-4"
        >
          Featured Projects
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mb-12"></div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-slate-700 rounded-lg h-80 flex items-center justify-center"
              >
                <div className="text-center text-gray-400">
                  <div className="text-6xl mb-2">https://imgs.search.brave.com/EeTlFQQfNdlOvag3Xnvhj3m7wgyRX5h6dcChOFS8v4E/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbmVy/Z3kuZnVsdXNuZXNp/YS5jb20vd3AtY29u/dGVudC91cGxvYWRz/LzIwMjUvMTEvMTcw/OTIxMzIwNzIzMC03/OTZ4NDQ1LmpwZWc</div>
                  <p>Project Screenshot</p>
                </div>
              </motion.div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <span className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded text-xs">Featured</span>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 mb-4">
                  <p className="text-sm text-gray-300"><strong>Problem Solved:</strong> {project.problem}</p>
                </div>

                <p className="text-gray-300 mb-4">{project.details}</p>

                <p className="text-blue-400 font-semibold mb-3">My Role: {project.role}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-slate-700/50 border border-slate-600 text-gray-300 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs text-gray-400">#{tag}</span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.links.live}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </motion.a>
                  <motion.a
                    href={project.links.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-4 py-2 rounded-lg"
                  >
                    <Code2 size={18} /> GitHub
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">More Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {moreProjects.map((project) => (
              <motion.div
                key={project.title}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-400/50"
              >
                <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Interested in My Work?</h3>
          <p className="text-gray-300">These projects represent my passion for solving real-world problems with modern web technologies.</p>
          <a href="#contact" className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
