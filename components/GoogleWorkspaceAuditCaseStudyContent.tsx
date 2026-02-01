'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import PageHero from './PageHero'

interface GoogleWorkspaceAuditCaseStudyContentProps {
  title: string
  subtitle: string
  backgroundImage?: string
}

export default function GoogleWorkspaceAuditCaseStudyContent({ 
  title, 
  subtitle, 
  backgroundImage 
}: GoogleWorkspaceAuditCaseStudyContentProps) {
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
              The Compliance Challenge
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                A rapidly growing Tokyo-based recruiting agency with more than 50 employees required a comprehensive 
                Google Workspace audit to meet Japan's stringent data privacy regulations. The primary consulting 
                contractor needed specialized technical expertise to conduct deep API-driven analysis of the organization's 
                data governance practices.
              </p>
              <p>
                AirStars was brought in as a technical specialist to provide Google API expertise and Python scripting 
                capabilities, enabling comprehensive evaluation of document sharing patterns, user permissions, and 
                compliance risks that traditional audit methods couldn't uncover.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Details */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Discovery: Hidden Risks Everywhere
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Critical Issues Found</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Accidental internal sharing due to training gaps</li>
                  <li>• Interns accessing privileged recruitment data</li>
                  <li>• Legacy users with persistent elevated permissions</li>
                  <li>• Untracked document sharing across departments</li>
                  <li>• Inconsistent access control policies</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Compliance Risks</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Personal data exposed to external parties</li>
                  <li>• APPI (Japanese privacy law) violations</li>
                  <li>• Recruitment data accessible to unauthorized staff</li>
                  <li>• No audit trail for sensitive document access</li>
                  <li>• Weak data retention and deletion policies</li>
                </ul>
              </div>
            </div>
            
            <p className="text-lg text-slate-600">
              The scope was vast: analyze all Google Drive documents, evaluate sharing permissions, 
              identify internal access patterns, and assess training needs across the entire organization. 
              Most issues stemmed from well-intentioned staff lacking comprehensive Google Workspace training 
              rather than intentional policy violations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              API-Driven Audit Solution
            </h2>
            
            <div className="bg-slate-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">Technical Approach</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Data Discovery</h4>
                  <ul className="text-slate-600 space-y-2">
                    <li>• Google Drive API for document enumeration</li>
                    <li>• Admin SDK for user and permission analysis</li>
                    <li>• Python scripts for large-scale data processing</li>
                    <li>• Custom reporting dashboards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-3">Risk Assessment</h4>
                  <ul className="text-slate-600 space-y-2">
                    <li>• External sharing pattern analysis</li>
                    <li>• Permission inheritance mapping</li>
                    <li>• Legacy user access evaluation</li>
                    <li>• Document sensitivity classification</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-slate-600 mb-6">
              Working as a technical specialist within the broader audit engagement, AirStars developed comprehensive 
              audit scripts to provide the primary contractor and client administrators with unprecedented visibility 
              into their data landscape. This specialized API expertise enabled systematic identification of compliance 
              risks while supporting the development of sustainable governance processes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Implementation Strategy */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Cultural Change Through Technology
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 1: Discovery</h3>
                <p className="text-slate-600 text-sm">
                  Comprehensive audit of all Google Workspace data and permissions using API-driven analysis
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 2: Remediation</h3>
                <p className="text-slate-600 text-sm">
                  Systematic cleanup of permissions, external sharing controls, and legacy user management
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🎓</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Phase 3: Education</h3>
                <p className="text-slate-600 text-sm">
                  Staff training and administrative support to establish sustainable data governance practices
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Multi-Month Transformation Process</h3>
              <p className="text-slate-600 mb-4">
                The primary contractor recognized that sustainable compliance requires cultural change, not just 
                technical fixes, and designed a phased approach supporting the client's administrators through months 
                of gradual transformation. AirStars' technical contributions provided the data foundation necessary 
                for this comprehensive change management process.
              </p>
              <p className="text-slate-600">
                By delivering precise API-driven insights, AirStars enabled the broader team to focus on building 
                internal capability and fostering better data handling practices, ensuring the organization could 
                maintain compliance standards independently.
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
              Technical Implementation
            </h2>
            
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-mono text-sm font-bold">PY</span>
                </div>
                <span className="text-sm text-slate-600">Python</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-mono text-xs font-bold">API</span>
                </div>
                <span className="text-sm text-slate-600">Google APIs</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-mono text-xs font-bold">GWS</span>
                </div>
                <span className="text-sm text-slate-600">Google Workspace</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-mono text-xs font-bold">RPT</span>
                </div>
                <span className="text-sm text-slate-600">Reporting</span>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Core Components</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Google Drive API for document analysis</li>
                  <li>• Admin SDK for user management</li>
                  <li>• Custom Python audit scripts</li>
                  <li>• Automated reporting dashboards</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Large-scale permission analysis</li>
                  <li>• External sharing violation detection</li>
                  <li>• Legacy user identification</li>
                  <li>• Compliance risk scoring</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ongoing Impact */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              Building Sustainable Compliance
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Immediate Actions</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Comprehensive risk assessment delivered</li>
                  <li>• External sharing violations identified</li>
                  <li>• Priority remediation plan created</li>
                  <li>• Administrator tools and training provided</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Long-term Impact</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• Enhanced data governance culture</li>
                  <li>• Sustainable compliance processes</li>
                  <li>• Reduced regulatory risk exposure</li>
                  <li>• Improved data handling awareness</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Technical Expertise in Action</h3>
              <p className="text-slate-600 text-lg mb-4">
                This engagement demonstrates AirStars' role as a specialized technical partner, providing 
                deep API expertise to support broader compliance and governance initiatives.
              </p>
              <p className="text-slate-600">
                By focusing on our core strengths—Google API integration and Python automation—we enable 
                primary contractors and their clients to achieve comprehensive data governance outcomes that 
                would be impossible with traditional audit approaches alone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Need Technical API Expertise for Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you're a consultant needing specialized Google API capabilities or an organization 
              requiring deep technical analysis, AirStars provides the expertise to unlock comprehensive insights.
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
                Let's Talk About Your Project
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