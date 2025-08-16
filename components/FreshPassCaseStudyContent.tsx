'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from './PageHero'

interface FreshPassCaseStudyContentProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function FreshPassCaseStudyContent({ title, subtitle, backgroundImage }: FreshPassCaseStudyContentProps) {
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
              The Guest WiFi Security Problem
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                A large organization with daily visitors approached AirStars with a common but critical 
                security challenge: their Meraki captive portal was unreliable, and reception staff 
                couldn't practically carry guest WiFi passwords for every visitor group.
              </p>
              <p>
                The traditional approach—sharing a single PSK (Pre-Shared Key) across all guests—meant 
                everyone's traffic was encrypted with the same password. Once shared, that password 
                could be used indefinitely by anyone who had it, creating a significant security vulnerability 
                that needed AirStars' expertise to resolve.
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
              Security and Usability Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Security Issues</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Shared PSK across all guests</li>
                  <li>• Passwords never expired</li>
                  <li>• No individual user accountability</li>
                  <li>• Unreliable Meraki captive portal</li>
                  <li>• Traffic encrypted with same key</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Operational Problems</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Staff couldn't carry passwords around</li>
                  <li>• Manual password distribution</li>
                  <li>• No visitor session management</li>
                  <li>• Inconsistent guest experience</li>
                  <li>• Administrative overhead</li>
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
              FreshPass IPSK Solution
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                AirStars implemented FreshPass with Meraki's IPSK (Individual Pre-Shared Keys) 
                capability, eliminating the need for RADIUS infrastructure while dramatically 
                improving security and user experience.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">How It Works</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Reception staff tap tablet portal to generate new QR code</li>
                  <li>Each visitor group gets unique IPSK credentials</li>
                  <li>QR codes display SSID, password, and expiration time</li>
                  <li>Credentials expire after administrator-defined period (30 minutes to several hours)</li>
                  <li>New credentials automatically generated for next visitor group</li>
                  <li>Group policy applied to SSID for controlled network access</li>
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
                AirStars' implementation replaced Meraki's unreliable captive portal with a robust, 
                security-first approach that gives each visitor group their own encrypted 
                session while maintaining the simplicity that reception staff needed.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Benefits */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Security Transformation
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                The security improvement is fundamental: instead of everyone sharing the same 
                password indefinitely, each visitor group receives individual credentials that 
                expire automatically.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Before: Shared PSK</h3>
                  <ul className="text-red-800 space-y-1 text-sm">
                    <li>• Same password for all guests</li>
                    <li>• Never expires</li>
                    <li>• Can be shared indefinitely</li>
                    <li>• No individual accountability</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">After: Individual IPSK</h3>
                  <ul className="text-green-800 space-y-1 text-sm">
                    <li>• Unique password per visitor group</li>
                    <li>• Automatic expiration</li>
                    <li>• Time-limited access window</li>
                    <li>• Individual session tracking</li>
                  </ul>
                </div>
              </div>
              
              <p>
                Credentials are only available through the QR portal for 5 minutes after generation, 
                ensuring the next visitor group gets completely fresh, secure access.
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
              for both staff and visitors.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Reception tablet showing FreshPass QR code generator"
                  className="w-full h-48 object-cover"
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
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Visitors scanning QR code for WiFi access"
                  className="w-full h-48 object-cover"
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
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Secure WiFi connection with time-limited access"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">3. Secure Access</h3>
                  <p className="text-slate-600 text-sm">
                    Each group gets encrypted access with individual credentials that 
                    automatically expire after the administrator-defined period.
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
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Measurable Impact
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                AirStars' FreshPass implementation delivered immediate security and operational improvements 
                while maintaining the simplicity that reception staff needed.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">100%</div>
                  <div className="text-slate-600">Individual Credentials</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">5min</div>
                  <div className="text-slate-600">Credential Window</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">Custom</div>
                  <div className="text-slate-600">Expiration Periods</div>
                </div>
              </div>
              
              <p>
                Through AirStars' implementation, the organization now has a reliable, secure guest 
                access system that scales effortlessly with their daily visitor volume while providing 
                enterprise-grade security through individual session management.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              Technology Stack
            </h2>
            
            {/* Tech Logos */}
            <div className="flex justify-center items-center gap-8 mb-12 flex-wrap">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">FP</span>
                </div>
                <span className="text-sm text-slate-600">FreshPass</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">MR</span>
                </div>
                <span className="text-sm text-slate-600">Cisco Meraki</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">IPSK</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">QR Portal</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Components</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• FreshPass.today portal</li>
                  <li>• Cisco Meraki wireless infrastructure</li>
                  <li>• IPSK without RADIUS requirement</li>
                  <li>• Tablet-based QR code generation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Individual credential generation</li>
                  <li>• Administrator-controlled expiration</li>
                  <li>• Group policy enforcement</li>
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
              Ready to Secure Your Guest WiFi?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Transform your visitor experience with individual credentials, automatic expiration, 
              and enterprise-grade security that's simple for staff to manage.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link 
                href="/#contact"
                className="inline-block bg-[#4471c1] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3a5fa0] transition-colors"
              >
                Discuss Your WiFi Security
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