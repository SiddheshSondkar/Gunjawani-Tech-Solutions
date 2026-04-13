import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logo from '../images/logo.png'; 
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Work', href: '/#work' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0F172A]/70 backdrop-blur-xl border-b border-white/[0.08] py-4 shadow-[0_4px_20px_rgba(15,23,42,0.5)]' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          {/* LOGO: Replace the src below with the path to your actual logo image (e.g., '/logo.png') */}
          <img 
            src="/logo.png" 
            alt="GTS Logo" 
            className="h-10 w-auto object-contain group-hover:opacity-80 transition-opacity"
            onError={(e) => {
              e.currentTarget.src = "https://placehold.co/400x100/000000/ffffff?text=Upload+logo.png+to+public+folder";
            }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 bg-[#1E293B]/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/[0.08] shadow-[0_2px_10px_rgba(15,23,42,0.5)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gts-gray hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
        
        <div className="hidden md:block">
          <a
            href="/#contact"
            className="px-6 py-2.5 rounded-full bg-white hover:bg-gray-200 text-gts-dark text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-block"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 w-full bg-[#0F172A]/95 backdrop-blur-xl border-b border-white/[0.08] py-6 px-6 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gts-gray hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 px-6 py-3 rounded-xl bg-white text-gts-dark text-center font-medium shadow-md"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
