'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

import PageHero from './PageHero'

interface CaseStudyContentProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function CaseStudyContent({ title, subtitle, backgroundImage }: CaseStudyContentProps) {
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
              The Administrative Burden
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                At a large international school in Japan, administrators were overwhelmed by a cluttered, 
                spreadsheet-style interface inside King of Time—the school's timekeeping platform. While 
                technically accurate, the view was hard to interpret, difficult to sort, and almost 
                impossible to use for daily planning.
              </p>
              <p>
                Staff leave approvals lived in a grid, with minimal visibility. The admin team had to 
                manually export, clean up, and interpret records for operational planning. There was no 
                simple way to answer, "Who's out next week?" at a glance.
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
              The Challenge
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Before Integration</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Cluttered spreadsheet-style interface</li>
                  <li>• Manual data export and cleanup</li>
                  <li>• No visual planning capability</li>
                  <li>• Time-consuming approval tracking</li>
                  <li>• Difficult staff coverage planning</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Requirements</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Visual calendar representation</li>
                  <li>• Automated data synchronization</li>
                  <li>• Color-coded leave categories</li>
                  <li>• Multi-campus filtering</li>
                  <li>• Integration with existing workflows</li>
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
              Our Integration Solution
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                AirStars built a Python-based integration that connected securely to the King of Time API 
                and translated approved leave data into clearly labeled, color-coded events on Google Calendar.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Technical Implementation</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>Secure API authentication with King of Time</li>
                  <li>Automated daily synchronization process</li>
                  <li>Google Calendar API integration</li>
                  <li>Custom filtering by leave type and campus</li>
                  <li>Color-coded event categorization</li>
                  <li>Clean formatting with staff names and durations</li>
                </ul>
              </div>
              
              <p>
                The end result: A shared calendar that finally made faculty absences visible—where the 
                admin team already worked. No more manual exports, no more spreadsheet confusion.
              </p>
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
              Real Impact
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                This was not a front-end refresh—it was a workflow transformation. What was once buried 
                in rows of data is now a clean, visual tool that helps school administrators coordinate 
                coverage, plan ahead, and understand availability instantly.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">90%</div>
                  <div className="text-slate-600">Time Saved on Leave Planning</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">2</div>
                  <div className="text-slate-600">Campuses Successfully Deployed</div>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="text-3xl font-bold text-[#4471c1] mb-2">Daily</div>
                  <div className="text-slate-600">Automated Synchronization</div>
                </div>
              </div>
              
              <p>
                Phase one rolled out successfully to one campus in spring 2025. Phase two is scheduled 
                for the second campus this September, expanding the solution across the entire school system.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Visual Results */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">
              From Spreadsheet Chaos to Visual Clarity
            </h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              See how leave requests transformed from cluttered data rows into clean, 
              color-coded calendar events that administrators can understand at a glance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Google Calendar monthly view showing staff leave requests"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Monthly Overview</h3>
                  <p className="text-slate-600 text-sm">
                    Color-coded leave events provide instant visibility into staff availability 
                    across the entire month.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Google Calendar weekly view with detailed leave information"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Weekly Planning</h3>
                  <p className="text-slate-600 text-sm">
                    Detailed weekly view shows exact leave durations and types, 
                    making coverage planning effortless.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Google Calendar event details showing staff member and leave type"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Event Details</h3>
                  <p className="text-slate-600 text-sm">
                    Each event contains staff name, leave type, and duration—
                    all automatically synced from King of Time.
                  </p>
                </div>
              </div>
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
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm text-slate-600">Google Calendar</span>
              </div>
              <div className="flex flex-col items-center">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                  alt="Python"
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm text-slate-600">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-mono text-xs font-bold">API</span>
                </div>
                <span className="text-sm text-slate-600">REST APIs</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-mono text-xs font-bold">KoT</span>
                </div>
                <span className="text-sm text-slate-600">King of Time</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Integration Layer</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Python automation scripts</li>
                  <li>• King of Time REST API</li>
                  <li>• Google Calendar API</li>
                  <li>• Secure credential management</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Features</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Real-time data synchronization</li>
                  <li>• Multi-campus filtering</li>
                  <li>• Color-coded categorization</li>
                  <li>• Automated error handling</li>
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
              Need a Custom Integration?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We build custom integrations and internal tools to solve real workflow problems—quietly, 
              effectively, and tailored to your specific needs.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link 
                href="/#contact"
                className="inline-block bg-[#4471c1] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3a5fa0] transition-colors"
              >
                Discuss Your Project
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