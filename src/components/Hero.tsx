import { motion } from 'framer-motion';
import { ArrowRight, FileText, Code2, User, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pt-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h2
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400 text-lg mb-2"
          >
            Welcome to my portfolio
          </motion.h2>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-2">
            Shaik Baba
          </h1>
          <p className="text-2xl text-gray-400 mb-6">MERN Stack Developer</p>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Full-Stack Web Developer | Turning ideas into full-stack web applications with modern technologies and AI integration.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="mailto:shaikhbaba9539@email.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-6 py-3 rounded-lg"
            >
              <FileText size={20} /> Download Resume
            </motion.a>
          </div>

          <div className="flex gap-4">
            <motion.a
              href="https://github.com/Shaikbaba1112"
              target="_blank"
              whileHover={{ y: -5 }}
              className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-blue-400"
            >
              <Code2 size={24} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/shaik-baba-s1112/"
              target="_blank"
              whileHover={{ y: -5 }}
              className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-blue-400"
            >
              <User size={24} />
            </motion.a>
            <motion.a
              href="mailto:shaikhbaba9539@email.com"
              whileHover={{ y: -5 }}
              className="p-3 bg-slate-800 rounded-lg text-gray-300 hover:text-blue-400"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-3xl opacity-20"></div>
          <div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 backdrop-blur-sm">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl opacity-30 flex items-center justify-center text-white text-4xl font-bold">
              SB
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
