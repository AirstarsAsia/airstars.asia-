'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function FeaturedSolution() {
  return (
    <>
      <div className="border-t border-slate-200"></div>
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-[#4471c1] text-white text-sm font-semibold rounded-full mb-4">
                Featured Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                FreshPass
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Secure, simple guest WiFi without the captive portal headaches
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Visual/Image */}
              <div className="bg-gradient-to-br from-[#4471c1] to-[#3a5fa0] p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-6 bg-white/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Individual Security</h3>
                  <p className="text-blue-100">Every guest gets their own credentials</p>
                </div>
              </div>

              {/* Right side - Content */}
              <div className="p-12">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    The Problem with Traditional Guest WiFi
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Captive portals are unreliable, shared passwords are insecure, and both create
                    support headaches. You need individual accountability without the complexity.
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    How FreshPass Works
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-[#4471c1] mr-3 mt-1">✓</span>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">Generate QR codes</strong> for individual guest credentials
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4471c1] mr-3 mt-1">✓</span>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">Time-limited access</strong> with administrator-controlled expiration
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4471c1] mr-3 mt-1">✓</span>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">IPSK technology</strong> for Cisco Meraki networks
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4471c1] mr-3 mt-1">✓</span>
                      <span className="text-slate-600">
                        <strong className="text-slate-900">No captive portal</strong> means reliable connections every time
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/case-studies/freshpass-meraki-guest-access"
                    className="inline-block bg-[#4471c1] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3a5fa0] transition-colors text-center"
                  >
                    See How It Works
                  </Link>
                  <button
                    onClick={() => {
                      if (typeof window !== 'undefined' && (window as any).$crisp) {
                        (window as any).$crisp.push(['do', 'chat:open'])
                      }
                    }}
                    className="inline-block border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-full font-medium hover:border-[#4471c1] hover:text-[#4471c1] transition-colors text-center"
                  >
                    Chat with Us
                  </button>
                </div>

                <p className="text-sm text-slate-500 mt-6">
                  Built by AirStars for businesses that need secure, manageable guest access
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
