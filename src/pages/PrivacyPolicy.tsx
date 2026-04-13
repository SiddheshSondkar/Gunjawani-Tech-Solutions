import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, AlertTriangle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function PrivacyPolicy() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'introduction', title: '1. Introduction' },
    { id: 'information-we-collect', title: '2. Information We Collect' },
    { id: 'how-we-use', title: '3. How We Use Your Data' },
    { id: 'data-security', title: '4. Data Security' },
    { id: 'third-party', title: '5. Third-Party Services' },
    { id: 'limitation-of-liability', title: '6. Limitation of Liability' },
    { id: 'user-responsibilities', title: '7. User Responsibilities' },
    { id: 'changes', title: '8. Changes to Policy' },
    { id: 'contact', title: '9. Contact Information' },
  ];

  return (
    <div className="min-h-screen bg-gts-dark text-gts-light font-sans selection:bg-gts-blue/20 selection:text-white">
      <Navbar />
      
      {/* Header */}
      <div className="pt-40 pb-12 px-6 md:px-12 border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-gts-gray hover:text-white transition-colors mb-8 text-sm font-medium">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">Privacy Policy</h1>
          <div className="flex items-center gap-4 text-sm text-gts-gray">
            <span className="flex items-center gap-1.5"><Shield size={16} className="text-gts-blue" /> Secure & Transparent</span>
            <span>•</span>
            <span>Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </div>

      <main className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gts-gray mb-6">Contents</h3>
              <nav className="flex flex-col gap-3">
                {sections.map((section) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`}
                    className="text-sm text-gts-gray hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-9 max-w-3xl">
            <div className="prose prose-invert max-w-none">
              
              <section id="introduction" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  Welcome to Gunjawani Tech Solutions ("GTS", "we", "us", or "our"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gts-gray leading-relaxed">
                  By accessing or using our services, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="information-we-collect" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Information We Collect</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device.
                </p>
                <ul className="list-disc pl-6 text-gts-gray space-y-2 mb-6 marker:text-gts-blue">
                  <li><strong className="text-white font-medium">Personal Identification:</strong> Name, email address, phone number, and company details provided via forms.</li>
                  <li><strong className="text-white font-medium">Technical Data:</strong> IP address, browser type, operating system, and device information.</li>
                  <li><strong className="text-white font-medium">Usage Data:</strong> Information about how you interact with our website and services.</li>
                </ul>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="how-we-use" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. How We Use Your Data</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  We strictly use your data to provide and improve our services. Specifically, we use your information to:
                </p>
                <ul className="list-disc pl-6 text-gts-gray space-y-2 mb-6 marker:text-gts-blue">
                  <li>Deliver the services and products you requested.</li>
                  <li>Improve, personalize, and expand our website and offerings.</li>
                  <li>Communicate with you, including for customer service and updates.</li>
                  <li>Find and prevent fraud or security breaches.</li>
                </ul>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="data-security" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. Data Security</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  We implement industry-standard security measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure. <strong>We cannot guarantee absolute security and you provide your data at your own risk.</strong>
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="third-party" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. Third-Party Services</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  Our services may contain links to third-party websites or utilize third-party tools (e.g., hosting providers, analytics, payment processors). We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services. <strong>GTS is not liable for any data breaches or mishandling of information by third-party vendors.</strong>
                </p>
              </section>

              <section id="limitation-of-liability" className="scroll-mt-32 mb-12">
                <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-red-500/10 rounded-xl shrink-0">
                      <AlertTriangle className="text-red-500" size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold text-white mb-3">6. Limitation of Liability</h2>
                      <p className="text-gts-gray leading-relaxed text-sm">
                        To the maximum extent permitted by applicable law, in no event shall Gunjawani Tech Solutions, its directors, employees, or agents, be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, our services or the unauthorized access to your data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="user-responsibilities" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">7. User Responsibilities</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  You are responsible for maintaining the confidentiality of any credentials used to access our services and for all activities that occur under your account. You agree to immediately notify us of any unauthorized use of your credentials or any other breach of security.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="changes" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">8. Changes to Policy</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  We reserve the right to modify this Privacy Policy at any time. If we make material changes, we will notify you by updating the date of this Privacy Policy and posting it on the website. Your continued use of our services after any changes indicates your acceptance of the updated policy.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="contact" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">9. Contact Information</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy, please contact our legal team:
                </p>
                <div className="bg-gts-card border border-white/5 rounded-xl p-6 inline-block">
                  <p className="text-white font-medium mb-1">Gunjawani Tech Solutions (GTS)</p>
                  <p className="text-gts-gray text-sm mb-1">Legal Department</p>
                  <a href="mailto:gunjawanitech@gmail.com" className="text-gts-blue hover:text-white transition-colors">gunjawanitech@gmail.com</a>
                </div>
              </section>

            </div>
          </div>
        </div>
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
}
