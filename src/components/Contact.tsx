import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    
    // Google Form "formResponse" URL
    const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeaX8T_9Dq7XB5pB1LEZA_G1J2CI6eewramUaAkQ95oHMw-Hw/formResponse";
    
    const formData = new FormData(form);
    
    try {
      // We use mode: 'no-cors' because Google Forms doesn't support CORS for direct API calls.
      // This will submit the data silently without redirecting the user.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      
      setIsSubmitted(true);
      form.reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error submitting form", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative bg-gts-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">
              Let's start a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gts-blue to-gts-green">conversation.</span>
            </h2>
            <p className="text-gts-gray text-xl mb-12 font-light leading-relaxed tracking-tight">
              Have a project in mind? Fill out the form and our team will get back to you within 24 hours to discuss how we can help.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gts-card border border-white/[0.08] flex items-center justify-center text-white shrink-0 premium-shadow">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white tracking-tight mb-1">Email Us</h4>
                  <p className="text-gts-gray font-light">gunjawanitech@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gts-card border border-white/[0.08] flex items-center justify-center text-white shrink-0 premium-shadow">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white tracking-tight mb-1">Call Us</h4>
                  <p className="text-gts-gray font-light">+91 91681 54518</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gts-card border border-white/[0.08] flex items-center justify-center text-white shrink-0 premium-shadow">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white tracking-tight mb-1">Visit Us</h4>
                  <p className="text-gts-gray font-light">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="premium-card p-8 md:p-10"
          >
            <h3 className="text-2xl font-display font-semibold text-white mb-6 tracking-tight">Send an Enquiry</h3>
            
            {/* 
              Google Forms Integration
            */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-white">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="entry.959402200" 
                    className="w-full px-4 py-3 rounded-xl bg-gts-dark text-white border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-gts-blue/20 focus:border-gts-blue transition-all"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-white">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="entry.1548514126" 
                    className="w-full px-4 py-3 rounded-xl bg-gts-dark text-white border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-gts-blue/20 focus:border-gts-blue transition-all"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contactNo" className="text-sm font-medium text-white">Contact No</label>
                  <input 
                    type="tel" 
                    id="contactNo" 
                    name="entry.167815816" 
                    className="w-full px-4 py-3 rounded-xl bg-gts-dark text-white border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-gts-blue/20 focus:border-gts-blue transition-all"
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-white">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="entry.112152585" 
                    className="w-full px-4 py-3 rounded-xl bg-gts-dark text-white border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-gts-blue/20 focus:border-gts-blue transition-all"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-white">Interested Service</label>
                <select 
                  id="service" 
                  name="entry.595608715" 
                  defaultValue=""
                  className="w-full px-4 py-3 rounded-xl bg-gts-dark text-white border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-gts-blue/20 focus:border-gts-blue transition-all appearance-none"
                  required
                >
                  <option value="" disabled>Select a service...</option>
                  <option value="Business Website">Business Website</option>
                  <option value="E-Commerce Platform">E-Commerce Platform</option>
                  <option value="Custom Software">Custom Software</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-white">Message</label>
                <textarea 
                  id="message" 
                  name="entry.1821248237" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-gts-dark text-white border border-white/[0.08] focus:outline-none focus:ring-2 focus:ring-gts-blue/20 focus:border-gts-blue transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <div className="flex items-center h-5 mt-0.5">
                  <input
                    id="terms"
                    name="terms_agreed"
                    type="checkbox"
                    required
                    className="w-4 h-4 rounded border-white/[0.2] bg-gts-dark text-gts-blue focus:ring-gts-blue/50 focus:ring-offset-gts-card cursor-pointer"
                  />
                </div>
                <div className="text-sm">
                  <label htmlFor="terms" className="font-light text-gts-gray cursor-pointer">
                    I agree to the <Link to="/terms" className="text-white hover:text-gts-blue transition-colors underline underline-offset-2">Terms of Service</Link> & <Link to="/privacy" className="text-white hover:text-gts-blue transition-colors underline underline-offset-2">Privacy Policy</Link>.
                  </label>
                </div>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full py-4 rounded-xl font-medium flex items-center justify-center gap-2 transition-all group mt-2 ${
                  isSubmitted 
                    ? 'bg-gts-green text-gts-dark' 
                    : 'bg-white text-gts-dark hover:bg-gray-200'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : isSubmitted ? (
                  <>
                    <span>Message Sent!</span>
                    <CheckCircle2 size={18} />
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-gts-gray text-xs pt-4">
                <ShieldCheck size={14} className="text-gts-green" />
                <span>Your data is handled securely and responsibly.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
