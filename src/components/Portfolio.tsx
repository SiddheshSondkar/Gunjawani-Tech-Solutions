import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import website from '../images/website.png';
import school from '../images/school.png';
import payroll from '../images/payroll.png';
import ecommerce from '../images/ecommerce.png';
export default function Portfolio() {
  const projects = [
    {
      title: "OmniStore E-Commerce",
      category: "E-Commerce Platform",
      image: ecommerce
    },
    {
      title: "EduManage Pro",
      category: "School Systems",
      image: school
    },
    {
      title: "Corporate",
      category: "Business Websites",
      image: website
    },
    {
      title: "PayFlow HR",
      category: "Payroll Systems",
      image: payroll
    }
  ];

  return (
    <section id="work" className="py-32 relative bg-gts-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter"
            >
              Selected Work.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gts-gray text-xl max-w-xl font-light tracking-tight"
            >
              A showcase of our high-performance digital products engineered for industry leaders.
            </motion.p>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            href="#"
            className="inline-flex items-center gap-2 text-base font-medium text-white hover:text-gts-blue transition-colors group"
          >
            View All Projects <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[2rem] mb-8 aspect-[4/3] bg-gts-card premium-shadow border border-white/[0.08]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="px-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-gts-gray mb-3">{project.category}</p>
                <h3 className="text-3xl font-display font-semibold text-white group-hover:text-gts-blue transition-colors duration-300 tracking-tight">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
