import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "SQL", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Spring Security", "Hibernate", "JPA", "RESTful APIs", "Microservices", "Eureka Server", "Swagger", "JWT", "Node.js", "Express.js"]
  },
  {
    title: "Frontend",
    skills: ["React.js", "Redux", "HTML", "CSS", "Bootstrap", "JavaScript"]
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Cloud & DevOps",
    skills: ["Git", "GitHub", "Maven", "Linux", "AWS (EC2)", "Shell Scripting"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-accent-purple"></span>
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="glass-card rounded-2xl p-6 hover:border-accent-purple/30 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-white">{category.title}</h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-accent-blue hover:bg-accent-blue/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
