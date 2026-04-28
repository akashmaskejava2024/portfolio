import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Java Full Stack Developer",
    company: "Sourcekode Technologies",
    date: "Feb 2025 - Present",
    points: [
      "Built various APIs for MVPs and developed highly scalable APIs using microservice architectures.",
      "Mentored students and conducted backend training batches covering Node.js, Express, and MongoDB."
    ]
  },
  {
    title: "Java Full Stack Intern",
    company: "Riyality Software Solutions",
    date: "Jan 2024 - Dec 2024",
    points: [
      "Architected and built backend APIs and MVC applications using Spring Boot for critical workflows on projects like E-Krushi and E-Dairy.",
      "Mentored incoming interns and led feature development teams."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-accent-blue"></span>
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-6 space-y-12">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-1 bg-background border-2 border-accent-blue w-5 h-5 rounded-full z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
              
              <div className="glass-card rounded-2xl p-6 md:p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{exp.title}</h3>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-purple bg-accent-purple/10 px-3 py-1 rounded-full">
                    {exp.date}
                  </span>
                </div>
                
                <h4 className="text-lg text-slate-300 mb-6 flex items-center gap-2 font-medium">
                  <Briefcase size={18} className="text-accent-blue" />
                  {exp.company}
                </h4>
                
                <ul className="space-y-3">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-slate-400 flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-blue/50 flex-shrink-0"></span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
