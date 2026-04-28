import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 relative z-10 border-t border-white/10 mt-12">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's <span className="text-gradient">Connect</span></h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">Email</h4>
                <a href="mailto:akashmaske.java@gmail.com" className="text-lg font-medium text-white group-hover:text-accent-blue transition-colors">
                  akashmaske.java@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">Phone</h4>
                <a href="tel:+918181070790" className="text-lg font-medium text-white group-hover:text-accent-purple transition-colors">
                  +91 8181070790
                </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group cursor-default">
              <div className="w-14 h-14 rounded-full glass flex items-center justify-center text-accent-blue group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-slate-400 mb-1">Location</h4>
                <p className="text-lg font-medium text-white">
                  Pune, MH, India
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 space-y-6"
            action="https://formsubmit.co/akashmaske.java@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_subject" value="New contact from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                required
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                required
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-purple focus:ring-1 focus:ring-accent-purple transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message"
                required
                rows="4"
                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send size={18} />
            </button>
          </motion.form>
        </div>

        <div className="text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Akash Aba Maske. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
