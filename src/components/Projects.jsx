import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

const projects = [
  {
    title: "TaskFlow Pro",
    description: "Enterprise-grade distributed task management system featuring JWT authentication, Redux state management, and an event-driven asynchronous notification engine.",
    tags: ["Java", "Spring Boot", "React.js", "Spring Security", "Redux"],
    githubLink: "https://github.com/akashmaskejava2024/Task_Management_Application",
    icon: <FolderGit2 className="text-accent-blue" size={24} />
  },
  {
    title: "Nexus",
    description: "A hyper-local geospatial service marketplace connecting users with nearby skilled workers using real-time mapping.",
    tags: ["Django MVT", "Leaflet.js", "Python", "PostGIS"],
    githubLink: "https://github.com/akashmaskejava2024/Service_Nexus",
    icon: <FolderGit2 className="text-accent-purple" size={24} />
  },
  {
    title: "EduPulse",
    description: "Unified academic performance and attendance system. Features a complex, normalized relational schema optimized for high-volume scoring records over a college LAN.",
    tags: ["Spring MVC", "JSP", "MySQL", "Java"],
    githubLink: "https://github.com/akashmaskejava2024/EduPulse",
    icon: <FolderGit2 className="text-accent-blue" size={24} />
  },
  {
    title: "Project Progress Tracker",
    description: "Academic lifecycle management tool bridging communication between students and faculty. Built with an RBAC architecture, featuring multi-part file handling for secure uploads.",
    tags: ["Spring MVC", "RBAC", "Java", "Hibernate"],
    githubLink: "https://github.com/akashmaskejava2024/Project_Progress_Tracker_For_College",
    icon: <FolderGit2 className="text-accent-purple" size={24} />
  },
  {
    title: "E-BookStore",
    description: "Role-based online bookstore web application featuring secure login, session management, and a comprehensive admin panel for managing book inventory, orders, and user accounts.",
    tags: ["Java Servlets", "JSP", "MySQL", "JDBC", "Tomcat"],
    githubLink: "https://github.com/akashmaskejava2024/E-BookStore",
    icon: <FolderGit2 className="text-accent-blue" size={24} />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4"
        >
          <span className="w-12 h-[2px] bg-accent-purple"></span>
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-8 flex flex-col h-full group transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:border-accent-blue/30 cursor-pointer"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:border-accent-blue/50 transition-colors">
                  {project.icon}
                </div>
                <div className="flex gap-3 text-slate-400">
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                      <Github size={20} />
                    </a>
                  )}
                  <a href="#" className="hover:text-accent-purple transition-colors"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="text-xs font-medium text-slate-300 bg-white/5 px-3 py-1 rounded-full border border-white/5 group-hover:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
