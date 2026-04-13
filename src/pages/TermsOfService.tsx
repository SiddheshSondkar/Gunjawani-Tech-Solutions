import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Scale, AlertTriangle, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

export default function TermsOfService() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: 'agreement', title: '1. Agreement to Terms' },
    { id: 'services-disclaimer', title: '2. Services Disclaimer' },
    { id: 'intellectual-property', title: '3. Intellectual Property' },
    { id: 'payments', title: '4. Payments & Deliverables' },
    { id: 'user-responsibilities', title: '5. User Responsibilities' },
    { id: 'third-party', title: '6. Third-Party Services' },
    { id: 'limitation-of-liability', title: '7. Limitation of Liability' },
    { id: 'indemnification', title: '8. Indemnification' },
    { id: 'termination', title: '9. Termination' },
    { id: 'modifications', title: '10. Modifications' },
    { id: 'governing-law', title: '11. Governing Law' },
    { id: 'contact', title: '12. Contact Information' },
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
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tighter">Terms of Service</h1>
          <div className="flex items-center gap-4 text-sm text-gts-gray">
            <span className="flex items-center gap-1.5"><Scale size={16} className="text-gts-blue" /> Legal Agreement</span>
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
              
              <section id="agreement" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">1. Agreement to Terms</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Gunjawani Tech Solutions ("GTS", "we", "us", or "our"), concerning your access to and use of our website and services.
                </p>
                <p className="text-gts-gray leading-relaxed font-medium text-white">
                  By accessing our services, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree, you are expressly prohibited from using the services and must discontinue use immediately.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="services-disclaimer" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">2. Services Disclaimer</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  Our services, software, and deliverables are provided on an "AS IS" and "AS AVAILABLE" basis. You agree that your use of our services will be at your sole risk. We disclaim all warranties, express or implied, in connection with the services and your use thereof, including, without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="intellectual-property" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">3. Intellectual Property Rights</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  Unless otherwise indicated or agreed upon in a separate written contract, all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics (collectively, the "Content") and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us.
                </p>
                <p className="text-gts-gray leading-relaxed">
                  No part of the services and no Content may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="payments" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">4. Payments & Deliverables</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  For custom software, website development, or other services, payment terms will be outlined in a separate Statement of Work (SOW) or invoice.
                </p>
                <ul className="list-disc pl-6 text-gts-gray space-y-2 mb-6 marker:text-gts-blue">
                  <li><strong className="text-white font-medium">Non-Refundable:</strong> All deposits and milestone payments are strictly non-refundable once work has commenced.</li>
                  <li><strong className="text-white font-medium">Late Fees:</strong> We reserve the right to suspend services or withhold deliverables if payments are not made according to the agreed schedule.</li>
                </ul>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="user-responsibilities" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">5. User Responsibilities</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  As a user of our services, you agree not to:
                </p>
                <ul className="list-disc pl-6 text-gts-gray space-y-2 mb-6 marker:text-gts-blue">
                  <li>Systematically retrieve data or other content from the services to create or compile a collection, compilation, database, or directory without written permission from us.</li>
                  <li>Trick, defraud, or mislead us and other users.</li>
                  <li>Circumvent, disable, or otherwise interfere with security-related features of the services.</li>
                  <li>Use the services in a manner inconsistent with any applicable laws or regulations.</li>
                </ul>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="third-party" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">6. Third-Party Services</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  Our deliverables may integrate with or rely on third-party services, APIs, hosting providers, or software. <strong>We are not responsible for the uptime, security, data practices, or continued availability of any third-party services.</strong> Any issues arising from third-party failures are solely between you and the third-party provider.
                </p>
              </section>

              <section id="limitation-of-liability" className="scroll-mt-32 mb-12">
                <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-amber-500"></div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-amber-500/10 rounded-xl shrink-0">
                      <AlertTriangle className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-display font-bold text-white mb-3">7. Limitation of Liability</h2>
                      <p className="text-gts-gray leading-relaxed text-sm mb-3 font-medium">
                        IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES.
                      </p>
                      <p className="text-gts-gray leading-relaxed text-sm">
                        Notwithstanding anything to the contrary contained herein, our liability to you for any cause whatsoever and regardless of the form of the action, will at all times be limited to the amount paid, if any, by you to us during the one (1) month period prior to any cause of action arising.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section id="indemnification" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">8. Indemnification</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the services, breach of these Terms, or any breach of your representations and warranties set forth in these Terms.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="termination" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">9. Termination</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  These Terms of Service shall remain in full force and effect while you use the services. We reserve the right to, in our sole discretion and without notice or liability, deny access to and use of the services to any person for any reason or for no reason, including without limitation for breach of any representation, warranty, or covenant contained in these Terms.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="modifications" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">10. Modifications</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  We reserve the right to change, modify, or remove the contents of the services at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the services.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="governing-law" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">11. Governing Law</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  These Terms shall be governed by and defined following the laws of India. Gunjawani Tech Solutions and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                </p>
              </section>

              <hr className="border-white/5 my-12" />

              <section id="contact" className="scroll-mt-32 mb-12">
                <h2 className="text-2xl font-display font-bold text-white mb-4">12. Contact Information</h2>
                <p className="text-gts-gray leading-relaxed mb-4">
                  In order to resolve a complaint regarding the services or to receive further information regarding use of the services, please contact us at:
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
