import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center relative pt-20 w-full">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#10b98110_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_70%,transparent_100%)] z-0 pointer-events-none"></div>


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-10 -mt-24"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-accent-blue font-medium mb-4 tracking-wide font-mono"
        >
          &gt;_ Welcome to my portfolio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight"
        >
          Hi, I'm <span className="text-gradient relative z-10">Akash Maske</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-mono text-sm"
        >
          // Scalable System Architect & Full Stack Developer
          <br />
          Building distributed microservice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-accent-blue hover:bg-accent-blue/90 text-[#050505] font-bold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] transform hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full glass border-accent-purple/30 hover:bg-accent-purple/10 text-white font-medium transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="flex items-center justify-center gap-6 mt-12"
        >
          {[
            { icon: <Github size={24} />, href: "https://github.com/akashmaskejava2024" },
            { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/java-developer-akash-maske" },
            { icon: <Mail size={24} />, href: "mailto:akashmaske.java@gmail.com" }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass text-slate-300 hover:text-white hover:border-accent-blue/50 hover:bg-accent-blue/10 transition-all duration-300 transform hover:scale-110"
            >
              {social.icon}
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a href="#about" className="text-slate-400 hover:text-white transition-colors">
          <ArrowDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
