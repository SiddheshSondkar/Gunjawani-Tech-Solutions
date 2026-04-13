import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gts-dark">
      {/* Ultra-subtle premium background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gts-blue/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-gts-green/5 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gts-card border border-white/[0.08] shadow-sm mb-10"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gts-blue animate-pulse" />
          <span className="text-xs font-semibold tracking-widest text-gts-light uppercase">GTS Performance Systems</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[100px] font-display font-bold tracking-tighter text-white mb-6 leading-[0.95]"
        >
          High Performance <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gts-gray">Digital Solutions.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-xl md:text-2xl text-gts-gray mb-12 font-light tracking-tight"
        >
          We engineer scalable, high-speed web applications and custom software for modern businesses. <span className="font-medium text-white">Speed. Precision. Quality.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 rounded-full bg-white text-gts-dark font-medium text-base overflow-hidden w-full sm:w-auto flex items-center justify-center gap-2 transition-all duration-500 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:-translate-y-1"
          >
            <span className="relative z-10">Start a Project</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          
          <a
            href="#work"
            className="px-8 py-4 rounded-full bg-gts-card border border-white/[0.08] text-white font-medium text-base w-full sm:w-auto hover:bg-[#334155] transition-all duration-500 shadow-sm hover:shadow-md"
          >
            View Our Work
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  );
}
