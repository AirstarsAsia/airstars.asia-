'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from './PageHero'

interface BoutiqueInvestmentCaseStudyContentProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function BoutiqueInvestmentCaseStudyContent({ 
  title, 
  subtitle, 
  backgroundImage 
}: BoutiqueInvestmentCaseStudyContentProps) {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        showLogo={true}
      />

      {/* Background Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              The Challenge: Lean Team, High Stakes
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                When a Tokyo-based investment group handling sensitive financial data needed to tighten 
                up their IT practices, they turned to AirStars. What started as an audit of basic device 
                management quickly became a ground-up MDM deployment.
              </p>
              <p>
                This small investment firm was operating like many lean teams do—manually setting up 
                MacBooks, managing credentials ad hoc, and trusting that everyone followed best practices. 
                But with an increasing number of NDA-bound clients, steady intern turnover, and more audits 
                from upstream partners, leadership recognized the risk: unmanaged devices meant untracked 
                access to sensitive data.
              </p>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Facts</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Less than 20 Apple devices, all laptops</li>
                  <li>• Frequent intern onboarding/offboarding</li>
                  <li>• Global clients with strict NDA clauses</li>
                  <li>• Google Workspace, Slack, and multiple third-party tools</li>
                  <li>• No MDM, no Apple Business Manager, no unified policy enforcement</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Details */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Security Gaps That Couldn't Continue
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Risks</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• No automated provisioning or remote wipe</li>
                  <li>• No disk encryption enforcement (FileVault off by default)</li>
                  <li>• User-level app installs and removable drives not restricted</li>
                  <li>• No Wi-Fi policy deployment</li>
                  <li>• Risk of data leaks or non-compliance with client requirements</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Operational Pain Points</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Manual MacBook setup for each new hire</li>
                  <li>• Ad hoc credential management</li>
                  <li>• No visibility into device compliance</li>
                  <li>• Intern turnover creating security gaps</li>
                  <li>• Audit preparation was time-consuming</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AirStars Approach */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              The AirStars Approach: 20+ Years of Apple Expertise
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                Drawing on over 20 years of Apple device management—including JAMF System Administrator 
                training back in 2011—AirStars helped this team build the right foundation with Apple 
                Business Manager, Mosyle, and automated security baked in from day one.
              </p>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">1. Apple Business Manager Setup</h3>
                  <ul className="text-blue-800 space-y-1 text-sm">
                    <li>• Guided them through ABM registration</li>
                    <li>• Connected trusted reseller for hardware purchases</li>
                    <li>• Linked ABM to Mosyle for auto-enrollment</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">2. Mosyle Business MDM Deployment</h3>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Lightweight, secure, and perfect for under-50 device teams</li>
                    <li>• Fast deployment with pre-configured blueprints</li>
                    <li>• Tailored onboarding flows for staff and interns</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">3. Zero-Touch Security Workflows</h3>
                  <ul className="text-purple-800 space-y-1 text-sm">
                    <li>• FileVault encryption required on all devices</li>
                    <li>• Enforced strong password policies and screen locks</li>
                    <li>• Preloaded core apps and blocked unwanted software</li>
                    <li>• Blocked removable storage for interns</li>
                    <li>• Configured automatic patching and reporting</li>
                  </ul>
                </div>
                
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h3 className="text-lg font-semibold text-orange-900 mb-3">4. System Integration</h3>
                  <ul className="text-orange-800 space-y-1 text-sm">
                    <li>• Wi-Fi profiles for secure, certificate-based onboarding</li>
                    <li>• Workspace tools (Google Workspace, Slack) joined to device policies</li>
                    <li>• Custom compliance reporting and alerting setup</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Transformational Results
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                The transformation was immediate and comprehensive. What once required hours of manual 
                setup and ongoing security concerns became a streamlined, automated process that 
                protected both the firm and their clients.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">100%</div>
                  <div className="text-slate-600">Device Encryption</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">Minutes</div>
                  <div className="text-slate-600">Onboarding Time</div>
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-900 mb-4">Key Achievements</h3>
                <ul className="text-green-800 space-y-2">
                  <li>• Devices now enroll automatically from first boot</li>
                  <li>• All Macs are encrypted, locked, and fully monitored</li>
                  <li>• Interns onboarded and offboarded in minutes, not hours</li>
                  <li>• Unified policy baseline across the team</li>
                  <li>• Client audits passed with clear documentation and compliance posture</li>
                  <li>• Operations team finally at ease with device security</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <blockquote className="text-xl italic mb-4">
                "We didn't think we needed MDM until we saw what was possible. Peter helped us secure 
                our laptops, streamline onboarding, and stay compliant—without slowing our team down."
              </blockquote>
              <cite className="text-slate-300">— Operations Lead, Confidential Investment Firm</cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Technology Stack
            </h2>
            
            <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white text-lg">🍎</span>
                </div>
                <span className="text-sm text-slate-600">Apple Business Manager</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">MO</span>
                </div>
                <span className="text-sm text-slate-600">Mosyle</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">FileVault</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Zero-Touch</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Components</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Apple Business Manager integration</li>
                  <li>• Mosyle Business MDM platform</li>
                  <li>• FileVault disk encryption</li>
                  <li>• Certificate-based Wi-Fi profiles</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Zero-touch device enrollment</li>
                  <li>• Automated security policy enforcement</li>
                  <li>• Role-based access controls</li>
                  <li>• Compliance reporting and alerting</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Secure Your Device Fleet?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether it's two laptops or two hundred, AirStars can help you deploy Apple Business 
              Manager, choose the right MDM, and harden your devices without slowing people down.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <button 
                onClick={() => {
                  if (typeof window !== 'undefined' && (window as any).$crisp) {
                    (window as any).$crisp.push(['do', 'chat:open'])
                  }
                }}
                className="inline-block bg-[#4471c1] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3a5fa0] transition-colors"
              >
                Book a Discovery Call
              </Link>
              <Link 
                href="/"
                className="inline-block border border-slate-300 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}