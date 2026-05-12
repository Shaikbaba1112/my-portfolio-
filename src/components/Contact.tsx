import { motion } from 'framer-motion';
import { Mail, User, Code2, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contacts = [
    {
      icon: Mail,
      label: 'Email',
    //   value: 'your@email.com',
      href: 'mailto:your@email.com',
    },
    {
      icon: Code2,
      label: 'GitHub',
    //   value: 'github.com/username',
      href: 'https://github.com',
    },
    {
      icon: User,
      label: 'LinkedIn',
    //   value: 'linkedin.com/in/username',
      href: 'https://linkedin.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: '#',
    },
  ];

  return (
    <motion.section
      id="contact"
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
          Let's Build Something Amazing
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-8">
              I'm currently open to new opportunities and interesting projects. Whether you have a question, want to discuss a potential collaboration, or just want to say hello, I'd love to hear from you.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              >
                <Send size={20} /> Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                {['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="block text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
              <h4 className="text-xl font-bold text-white mb-6">Quick Response Guaranteed</h4>
              <div className="flex items-start gap-3 mb-4">
                <Clock className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-semibold">Response Time</p>
                  <p className="text-gray-400 text-sm">Within 24 hours</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                I typically respond to emails within 24 hours. For urgent matters, feel free to reach out via LinkedIn for faster communication.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {contacts.map((contact) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05 }}
                  className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-400/50"
                >
                  <contact.icon className="w-6 h-6 text-blue-400 mb-2" />
                  <p className="text-sm font-semibold text-gray-300">{contact.label}</p>
                  <p className="text-xs text-gray-400 truncate">{contact.value}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
