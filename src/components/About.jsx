import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden"
      >
        {/* Decorative corner glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-purple/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-blue/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-4">
            <span className="w-12 h-[2px] bg-accent-blue"></span>
            About Me
          </h2>
          
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
            <p>
              I am a passionate Full Stack Developer currently pursuing my Master of Computer Applications at 
              <span className="text-white font-medium"> Pimpri Chinchwad College of Engineering (PCCoE) </span> 
              after scoring in the <span className="text-accent-blue font-bold">99.28%ile</span> on the MAH MCA CET.
            </p>
            <p>
              With a strong foundation in both MVC and state-driven architectures, I focus on building reliable systems 
              and efficient APIs. I am deeply dedicated to algorithmic problem-solving, having conquered a 
              <span className="text-white font-medium"> 375-question DSA sheet </span> 
              with a focus on optimizing logic, such as achieving <code className="bg-white/10 px-2 py-1 rounded text-accent-purple">O(1)</code> space complexity in array manipulations.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
