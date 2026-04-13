import { motion } from 'motion/react';
import { Code2, Zap, Shield } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: <Zap className="text-gts-blue" size={24} />,
      title: "Performance First",
      description: "Optimized architectures that load instantly and scale effortlessly."
    },
    {
      icon: <Code2 className="text-gts-green" size={24} />,
      title: "Clean Systems",
      description: "Maintainable, modern codebases built on industry-leading tech stacks."
    },
    {
      icon: <Shield className="text-gray-300" size={24} />,
      title: "Scalable Architecture",
      description: "Systems designed to grow with your business without technical debt."
    }
  ];

  return (
    <section id="about" className="py-32 relative bg-gts-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tighter leading-[1.1]">
              Engineering the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gts-blue to-gts-green">Future of Web.</span>
            </h2>
            <p className="text-gts-gray text-xl mb-10 font-light leading-relaxed tracking-tight">
              Gunjawani Tech Solutions (GTS) is a premium technology partner for ambitious brands. We don't just build websites; we engineer high-performance digital systems that drive growth, streamline operations, and deliver exceptional user experiences.
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-white/20" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white">The GTS Standard</span>
            </div>
          </motion.div>

          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="premium-card p-8 flex gap-6 items-start group hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#1a1a1a] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-gts-gray text-base leading-relaxed font-light">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
