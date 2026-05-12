import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'When I Build Frontends',
      subtitle: 'Creating responsive, interactive user interfaces',
      proficiency: 'Expert 🧠',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'JSX', 'HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Framer Motion', 'Redux'],
    },
    {
      category: 'When I Build Backends',
      subtitle: 'Developing scalable server-side applications',
      proficiency: 'Expert ⚙️',
      skills: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'Mongoose', 'JWT', 'OAuth', 'Middleware', 'Error Handling', 'API Design'],
    },
    {
      category: 'When I Deploy Projects',
      subtitle: 'Managing deployment and DevOps workflows',
      proficiency: 'Advanced 🤖',
      skills: ['Vercel', 'Render', 'Netlify', 'Docker', 'GitHub Actions', 'CI/CD', 'Environment Variables', 'Postman', 'Git', 'Linux'],
    },
    {
      category: 'When I Work with AI/ML',
      subtitle: 'Integrating artificial intelligence into applications',
      proficiency: 'Advanced 🧰',
      skills: ['YOLOv8', 'OpenAI API', 'Langchain', 'Python', 'Computer Vision', 'NLP', 'Machine Learning', 'TensorFlow', 'Pandas', 'NumPy'],
    },
  ];

  const tools = ['VS Code', 'Git', 'GitHub', 'Chrome DevTools', 'npm', 'Yarn', 'Terminal', 'Figma', 'Slack', 'Notion'];

  const webTech = ['HTTP/HTTPS', 'WebSockets', 'Service Workers', 'PWA', 'Local Storage', 'Session Storage', 'CORS', 'WebRTC', 'WebGL', 'Canvas API'];

  const learning = ['GraphQL', 'Next.js', 'Three.js', 'WebGL', 'Microservices', 'Kubernetes', 'AWS', 'PostgreSQL'];

  return (
    <motion.section
      id="skills"
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
          Skills & Technologies
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mb-12"></div>

        {/* Main Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-400/50"
            >
              <h3 className="text-xl font-bold text-white mb-1">{category.category}</h3>
              <p className="text-gray-400 text-sm mb-2">{category.subtitle}</p>
              <p className="text-blue-400 font-semibold text-sm mb-4">Proficiency {category.proficiency}</p>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm cursor-pointer hover:bg-blue-500/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools I Use Daily */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 mb-8"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Tools I Use Daily</h3>
          <p className="text-gray-400 text-sm mb-6">Essential development tools and workflows</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <motion.span
                key={tool}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-slate-700/50 border border-slate-600 text-gray-300 rounded-full text-sm cursor-pointer hover:border-blue-400/50"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Web Technologies */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">Web Technologies</h3>
            <p className="text-gray-400 text-sm mb-4">Core web development technologies</p>
            <div className="flex flex-wrap gap-2">
              {webTech.map((tech) => (
                <span key={tech} className="px-2 py-1 bg-slate-700/50 border border-slate-600 text-gray-300 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Continuous Learning */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-6"
          >
            <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
            <p className="text-gray-300 text-sm mb-4">
              I'm passionate about staying current with emerging technologies and best practices. Currently exploring:
            </p>
            <div className="flex flex-wrap gap-2">
              {learning.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm">
                  {tech} 📚
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
