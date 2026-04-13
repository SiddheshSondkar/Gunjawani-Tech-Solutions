import { motion } from 'motion/react';
import { Globe, GraduationCap, Calculator, Cpu } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Globe size={32} />,
      title: "Business Websites",
      description: "High-conversion, lightning-fast corporate websites that establish premium brand authority.",
      color: "from-blue-500/20 to-blue-500/0",
      border: "group-hover:border-blue-500/50"
    },
    {
      icon: <GraduationCap size={32} />,
      title: "School Systems",
      description: "Comprehensive management platforms for modern educational institutions.",
      color: "from-green-500/20 to-green-500/0",
      border: "group-hover:border-green-500/50"
    },
    {
      icon: <Calculator size={32} />,
      title: "Payroll Systems",
      description: "Secure, automated, and compliant financial software for seamless HR operations.",
      color: "from-purple-500/20 to-purple-500/0",
      border: "group-hover:border-purple-500/50"
    },
    {
      icon: <Cpu size={32} />,
      title: "Custom Software",
      description: "Bespoke digital solutions engineered to solve your unique complex business challenges.",
      color: "from-orange-500/20 to-orange-500/0",
      border: "group-hover:border-orange-500/50"
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-gts-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter"
          >
            Core Capabilities.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gts-gray text-xl max-w-2xl mx-auto font-light tracking-tight"
          >
            Specialized technical solutions designed for scale, security, and speed.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="premium-card p-10 group hover:-translate-y-1 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full blur-3xl -mr-20 -mt-20`} />
              
              <div className="relative z-10">
                <div className="mb-8 text-white/50 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-display font-semibold text-white mb-4 tracking-tight">{service.title}</h3>
                <p className="text-gts-gray font-light leading-relaxed text-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
