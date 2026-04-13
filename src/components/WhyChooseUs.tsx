import { motion } from 'motion/react';
import { Shield, Zap, Code2, Users } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Zap size={24} />,
      title: "High Performance",
      description: "Optimized for speed and efficiency, ensuring lightning-fast load times and smooth interactions."
    },
    {
      icon: <Shield size={24} />,
      title: "Enterprise Security",
      description: "Bank-grade security protocols and best practices implemented from day one."
    },
    {
      icon: <Code2 size={24} />,
      title: "Clean Architecture",
      description: "Scalable, maintainable codebases built on modern tech stacks."
    },
    {
      icon: <Users size={24} />,
      title: "Dedicated Support",
      description: "Ongoing technical partnership and priority support for your critical systems."
    }
  ];

  return (
    <section className="py-32 relative bg-gts-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="premium-card p-8 group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-gts-dark mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    {reason.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-white mb-3 tracking-tight">{reason.title}</h3>
                  <p className="text-gts-gray text-sm leading-relaxed font-light">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Why industry leaders <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gts-blue to-gts-green">choose GTS.</span>
            </h2>
            <p className="text-gts-gray text-xl mb-10 font-light leading-relaxed tracking-tight">
              We don't just write code; we build digital assets that give you a competitive edge. Our approach combines technical excellence with strategic business thinking.
            </p>
            
            <ul className="space-y-6">
              {[
                "Uncompromising code quality and performance",
                "Scalable architectures built for growth",
                "Premium, user-centric design systems",
                "Dedicated technical partnership"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium">
                  <div className="w-6 h-6 rounded-full bg-gts-blue/20 flex items-center justify-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-gts-blue" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
