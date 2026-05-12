import { motion } from 'framer-motion';
import { Code2, Brain, Users, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { icon: Code2, title: 'Full-Stack Expertise', desc: 'Proficient in MERN stack with hands-on experience in building scalable web applications from frontend to backend.' },
    { icon: Brain, title: 'AI Integration', desc: 'Specialized in integrating AI/ML solutions into web applications, including chatbots and computer vision systems.' },
    { icon: Users, title: 'Team Collaboration', desc: 'Experienced in working with cross-functional teams and delivering projects in agile environments.' },
    { icon: Zap, title: 'Performance Focus', desc: 'Passionate about creating optimized, scalable solutions with clean code and best practices.' },
  ];

  const stats = [
    { label: 'Months Experience', value: '6+' },
    { label: 'Projects Completed', value: '3+' },
    { label: 'Technologies Mastered', value: '5+' },
    { label: 'Research Papers', value: '1+' },
  ];

  const technologies = ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AI/ML', 'Docker'];

  return (
    <motion.section
      id="about"
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
          About Me
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed"
          >
            <p className="mb-4">
              I'm a passionate Full-Stack Developer with expertise in the MERN stack and a strong focus on creating innovative web applications that solve real-world problems.
            </p>
            <p className="mb-4">
              During my internship at Qveto Technologies, I had the opportunity to work on Website Devlopment projects and full-stack applications. I collaborated closely with AI teams to integrate machine learning models into web applications.
            </p>
            <p>
              I'm particularly enthusiastic about performance optimization, scalable architecture design, and staying up-to-date with the latest web technologies.
            </p>

            <div className="flex flex-wrap gap-2 mt-6">
              {technologies.map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center hover:border-blue-400/50"
              >
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-400/50"
            >
              <skill.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-white font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default About;
