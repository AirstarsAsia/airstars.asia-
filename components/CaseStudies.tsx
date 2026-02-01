'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const caseStudies = [
  {
    title: 'Zero-Touch Security for a Boutique Investment Team',
    client: 'Tokyo Investment Firm',
    challenge: 'Moving from zero MDM to hardened Apple environment',
    solution: 'Automated security with Mosyle and Apple Business Manager',
    results: ['FileVault encryption enforced', 'Zero-touch deployment', 'Compliance-ready security posture'],
    href: '/case-studies/boutique-investment-mdm',
    image: '/images/boutique-investment-hero.jpg',
    tags: ['MDM', 'Security', 'Apple']
  },
  {
    title: 'Making Leave Requests Visual and Manageable',
    client: 'International School',
    challenge: 'King of Time workflow was difficult to visualize and manage',
    solution: 'Custom Python API integration with Google Calendar',
    results: ['Visual leave calendar', 'Automated synchronization', 'Improved team coordination'],
    href: '/case-studies/king-of-time-integration',
    image: '/images/pexels-rdne-7821578.jpg',
    tags: ['Integration', 'Automation', 'Python']
  },
  {
    title: 'Google Workspace Security Audit for Japanese Data Privacy Compliance',
    client: 'Tokyo Recruiting Agency',
    challenge: 'Primary contractor needed specialized Google API expertise for compliance audit',
    solution: 'Technical subcontracting: Python API analysis and data governance insights',
    results: ['Deep API-driven analysis delivered', 'Compliance data foundation established', 'Technical expertise enabled broader governance'],
    href: '/case-studies/google-workspace-audit',
    image: '/images/google-workspace-audit-hero.jpg',
    tags: ['API Specialist', 'Python', 'Google Workspace']
  },
  {
    title: 'Multi-Campus Guest WiFi with Individual Security',
    client: 'Educational Campus',
    challenge: 'Secure guest WiFi across multiple campuses with Extreme Networks infrastructure',
    solution: 'FreshPass implementation with 8-hour credential expiration and individual session tracking',
    results: ['Frictionless guest onboarding', 'Individual credential accountability', 'Evaluation phase showing positive outcomes'],
    href: '/case-studies/multi-campus-freshpass',
    image: '/images/multi-campus-hero.jpg',
    tags: ['Extreme Networks', 'Multi-Campus', 'Guest Access']
  }
]

export default function CaseStudies() {
  return (
    <>
      <div className="border-t border-slate-200"></div>
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-slate-900">
              Case Studies
            </h2>
            <p className="text-xl text-slate-600 text-center mb-16 max-w-3xl mx-auto">
              Real problems solved for real businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Link href={study.href}>
                  <article className="rounded-2xl border border-slate-200 hover:shadow-xl transition-all cursor-pointer overflow-hidden h-full flex flex-col">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-56 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/bg-gradient-1.svg'
                      }}
                    />
                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-xs px-3 py-1 bg-slate-100 text-slate-700 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 text-slate-900">
                        {study.title}
                      </h3>
                      <p className="text-sm text-[#4471c1] mb-4 font-medium">
                        {study.client}
                      </p>
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 mb-1">Challenge</h4>
                          <p className="text-slate-600 text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900 mb-1">Solution</h4>
                          <p className="text-slate-600 text-sm">{study.solution}</p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <h4 className="text-sm font-semibold text-slate-900 mb-2">Results</h4>
                        <ul className="space-y-1">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="text-slate-600 text-sm flex items-start">
                              <span className="text-[#4471c1] mr-2">✓</span>
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-4 text-[#4471c1] font-medium text-sm hover:text-[#3a5fa0]">
                        Read full case study →
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
