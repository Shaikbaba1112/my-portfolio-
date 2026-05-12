import { motion } from 'framer-motion';
import { Award, BookOpen, Trophy } from 'lucide-react';

const Achievements = () => {
  const certifications = [
    {
      title: 'Python Full-Stack Developer',
      provider: 'AICTE',
      date: 'Dec 2024',
      type: 'Course Completion',
      featured: true,
      description: 'Comprehensive program covering MERN stack development, database design, and deployment strategies.',
    },
    {
      title: 'HackFoge Hackathon',
      provider: 'ISL Engineering College',
      date: 'Feb 2025',
      type: 'Competition',
      featured: true,
      description: 'A 24-hour hackathon hosted by ISL College for building a full-stack AI-integrated system.',
    },
  ];

  const achievements = [
    {
      icon: BookOpen,
      title: 'Research Publication',
      desc: 'Published research paper on Blockchain applications in web development.',
      date: 'Jan 2026',
    },
    {
      icon: Trophy,
      title: 'Coding Competition Winner',
      desc: 'First place in algorithmic programming contest with 20+ participants.',
      date: 'Nov 2024',
    },
  ];

  const summary = [
    { label: 'Certifications', value: '3' },
    { label: 'Publications', value: '1' },
    { label: 'Competitions', value: '2' },
  ];

  return (
    <motion.section
      id="achievements"
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
          Certifications & Achievements
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mb-12"></div>

        {/* Certifications */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Award className="w-8 h-8 text-blue-400" />
            🎓 Certifications & Courses
          </h3>

          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border rounded-lg p-6 ${
                  cert.featured
                    ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-400/30'
                    : 'bg-slate-800/50 border-slate-700'
                }`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-white">{cert.title}</h4>
                    <p className={cert.featured ? 'text-blue-300 font-semibold' : 'text-gray-400'}>{cert.provider}</p>
                  </div>
                  {cert.featured && (
                    <span className="px-3 py-1 bg-blue-500/30 border border-blue-400/50 text-blue-300 rounded-full text-sm font-semibold">
                      ⭐ Featured Achievement
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center mb-3">
                  <span className="text-gray-400 text-sm">{cert.date}</span>
                  <span className="px-2 py-1 bg-slate-700/50 border border-slate-600 text-gray-300 rounded text-xs">
                    {cert.type}
                  </span>
                </div>

                <p className="text-gray-300 text-sm mb-3">{cert.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-400 hover:text-blue-300 font-semibold text-sm"
                >
                  View Certificate →
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recognition & Publications */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-2">
            <Trophy className="w-8 h-8 text-yellow-400" />
            🏆 Recognition & Publications
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-6"
              >
                <achievement.icon className="w-12 h-12 text-blue-400 mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-300 text-sm mb-3">{achievement.desc}</p>
                <p className="text-gray-400 text-xs">{achievement.date}</p>
              </motion.div>
            ))}
          </div>

          {/* Achievement Summary */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {summary.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center"
              >
                <div className="text-3xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Documents */}
          <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-lg p-6">
            <h4 className="text-lg font-bold text-white mb-4">📄 Document Portfolio</h4>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
              >
                All Certificates →
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
              >
                Research Paper →
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Achievements;
