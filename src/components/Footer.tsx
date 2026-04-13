import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gts-dark py-16 border-t border-white/[0.08] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="/" className="flex items-center gap-2 mb-6 group">
              {/* LOGO: Replace the src below with the path to your actual logo image (e.g., '/logo.png') */}
              <img 
                src="/logo.png" 
                alt="GTS Logo" 
                className="h-12 w-auto object-contain group-hover:opacity-80 transition-opacity"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/400x100/000000/ffffff?text=Upload+logo.png+to+public+folder";
                }}
              />
            </a>
            <p className="text-gts-gray text-sm max-w-xs leading-relaxed font-light">
              High-performance digital solutions, engineered for speed, precision, and quality.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Services</h4>
            <ul className="space-y-4">
              <li><a href="/#services" className="text-gts-gray hover:text-white text-sm transition-colors">Business Websites</a></li>
              <li><a href="/#services" className="text-gts-gray hover:text-white text-sm transition-colors">School Systems</a></li>
              <li><a href="/#services" className="text-gts-gray hover:text-white text-sm transition-colors">Payroll Systems</a></li>
              <li><a href="/#services" className="text-gts-gray hover:text-white text-sm transition-colors">Custom Software</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><a href="/#about" className="text-gts-gray hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="/#work" className="text-gts-gray hover:text-white text-sm transition-colors">Portfolio</a></li>
              <li><a href="/#contact" className="text-gts-gray hover:text-white text-sm transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gts-gray text-xs">
            © {new Date().getFullYear()} Gunjawani Tech Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-gts-gray hover:text-white text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gts-gray hover:text-white text-xs transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
