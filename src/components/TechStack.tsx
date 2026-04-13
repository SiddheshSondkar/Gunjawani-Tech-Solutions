import { motion } from 'motion/react';
import { Cpu, Network, Layers, Globe, Link } from 'lucide-react';

export default function TechStack() {
  const technologies = [
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "HTML5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
    { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Google Cloud", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" },
    { name: "React Native", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "System Arch", icon: <Cpu size={36} strokeWidth={1.5} /> },
    { name: "REST APIs", icon: <Network size={36} strokeWidth={1.5} /> },
    { name: "Scalable Systems", icon: <Layers size={36} strokeWidth={1.5} /> },
    { name: "Postman", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Web3", icon: <Globe size={36} strokeWidth={1.5} /> },
    { name: "Blockchain", icon: <Link size={36} strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-32 relative bg-gradient-to-b from-gts-dark to-gts-card border-t border-white/[0.08] overflow-hidden">
      {/* Subtle background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-gts-blue/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter"
          >
            Trusted Technologies.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gts-gray text-xl max-w-2xl mx-auto font-light tracking-tight"
          >
            We leverage modern, enterprise-grade technologies to build scalable and secure digital solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 md:gap-6">
          {technologies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              className="group relative bg-gts-card rounded-2xl p-6 border border-white/[0.08] shadow-sm hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center gap-4 overflow-hidden cursor-default"
            >
              {/* Hover Glow & Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gts-blue/[0.03] to-gts-green/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-gts-blue/20 rounded-2xl transition-colors duration-300" />

              <div className="w-14 h-14 relative z-10 flex items-center justify-center text-gts-gray group-hover:text-gts-blue transition-colors duration-300">
                {item.logo ? (
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300" 
                    loading="lazy" 
                  />
                ) : (
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                )}
              </div>
              <span className="text-sm font-medium text-white relative z-10 text-center">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
