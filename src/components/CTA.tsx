import { motion } from 'motion/react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gts-dark" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tighter"
        >
          Ready to build <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">something extraordinary?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 mb-12 font-light tracking-tight"
        >
          Let's engineer your next digital advantage.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="mailto:gunjawanitech@gmail.com"
            className="group relative px-8 py-4 rounded-full bg-white text-gts-dark font-medium text-base overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
          >
            <Mail size={18} className="relative z-10" />
            <span className="relative z-10">Email Us</span>
          </a>
          
          <a
            href="#"
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-medium text-base w-full sm:w-auto flex items-center justify-center gap-2 hover:bg-white/10 transition-colors"
          >
            <MessageSquare size={18} />
            WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
