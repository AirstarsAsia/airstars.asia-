'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from './PageHero'

interface MultiCampusFreshPassCaseStudyContentProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function MultiCampusFreshPassCaseStudyContent({ 
  title, 
  subtitle, 
  backgroundImage 
}: MultiCampusFreshPassCaseStudyContentProps) {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        showLogo={true}
      />

      {/* Problem Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Multi-Campus Guest WiFi Challenge
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                A multi-campus educational organization with diverse daily visitors across multiple locations 
                approached AirStars with a complex security challenge: their existing guest WiFi approach 
                created security vulnerabilities and operational inefficiencies that scaled poorly across campuses.
              </p>
              <p>
                Running on Extreme Networks infrastructure (formerly Aerohive), the organization needed a 
                solution that could provide individual guest accountability while maintaining the simplicity 
                that reception staff across multiple campuses required for consistent visitor experiences.
              </p>
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
              Security and Operational Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Issues</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Shared PSK across all campuses and visitors</li>
                  <li>• Passwords never expired across locations</li>
                  <li>• No individual user accountability</li>
                  <li>• Inconsistent guest experience across campuses</li>
                  <li>• Extreme Networks capabilities underutilized</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Operational Problems</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Inconsistent processes across campuses</li>
                  <li>• Manual password distribution at each location</li>
                  <li>• No centralized visitor session management</li>
                  <li>• Staff training required for each campus</li>
                  <li>• Administrative overhead multiplied by locations</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              FreshPass Multi-Campus Solution
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                AirStars implemented FreshPass to work seamlessly with the organization's Extreme Networks 
                infrastructure, providing a unified guest access experience across all campus locations 
                while dramatically improving security through individual session management.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">How It Works</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Reception staff tap tablet portal to generate new QR code</li>
                  <li>Each visitor gets unique credentials with 8-hour expiration</li>
                  <li>QR codes display SSID, password, and expiration time</li>
                  <li>Credentials automatically expire after 8-hour administrator-defined period</li>
                  <li>New credentials automatically generated for each visitor</li>
                  <li>Consistent experience across all campus locations</li>
                </ul>
                <p className="mt-4 text-blue-800 text-sm">
                  Learn more about FreshPass at{' '}
                  <a 
                    href="https://freshpass.today" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-blue-900"
                  >
                    freshpass.today
                  </a>
                </p>
              </div>
              
              <p>
                AirStars' FreshPass implementation works seamlessly with Extreme Networks wireless 
                infrastructure, providing enterprise-grade security without the complexity of traditional 
                captive portal systems while ensuring consistent visitor experiences across all campus locations.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Workflow */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Simple Workflow, Maximum Security
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              The FreshPass solution transforms complex security into a simple tap-and-scan experience 
              for both staff and visitors across all campus locations.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/tap-to-generate.jpg"
                  alt="Reception tablet showing FreshPass QR code generator"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/bg-gradient-1.svg'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">1. Tap to Generate</h3>
                  <p className="text-slate-600 text-sm">
                    Reception staff simply tap the tablet screen to generate a new QR code
                    with unique credentials for incoming visitors.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/scan-and-connect.jpg"
                  alt="Visitors scanning QR code for WiFi access"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/bg-gradient-2.svg'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">2. Scan & Connect</h3>
                  <p className="text-slate-600 text-sm">
                    Visitors scan the QR code to automatically connect, or manually enter
                    the displayed SSID and password for laptop users.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/images/secure-access.jpg"
                  alt="Secure WiFi connection with time-limited access"
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/bg-gradient-3.svg'
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Secure Access</h3>
                  <p className="text-slate-600 text-sm">
                    Each visitor gets encrypted access with individual credentials that
                    automatically expire after the 8-hour administrator-defined period.
                  </p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Implementation Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#4471c1] mb-2">Individual</div>
                <div className="text-slate-600">Credentials</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#4471c1] mb-2">8hr</div>
                <div className="text-slate-600">Credential Expiration</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-[#4471c1] mb-2">Multi</div>
                <div className="text-slate-600">Campus Deployment</div>
              </div>
            </div>
            
            <p>
              Through AirStars' implementation, the organization is successfully evaluating a reliable, 
              secure guest access system across multiple campuses. Early results show the solution scales 
              effortlessly with daily visitor volume while providing enterprise-grade security through 
              individual session management and 8-hour credential expiration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              Technology Integration
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Components</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• FreshPass.today portal</li>
                  <li>• Extreme Networks wireless infrastructure</li>
                  <li>• Individual credential generation with 8-hour expiration</li>
                  <li>• Tablet-based QR code generation at each campus</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Individual credential generation</li>
                  <li>• 8-hour administrator-controlled expiration</li>
                  <li>• Cross-campus policy enforcement</li>
                  <li>• Automatic session management</li>
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
              Ready to Secure Multi-Campus Guest WiFi?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Transform your visitor experience across all locations with individual credentials, automatic expiration, 
              and enterprise-grade security that's simple for staff to manage.
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
                Chat About Your WiFi Needs
              </button>
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