'use client'

// Shababu Blog Component
import { motion } from 'framer-motion'
import Link from 'next/link'

const posts = [
  {
    title: 'Securing Small Business Wi-Fi: Beyond WPA2',
    excerpt: 'Advanced wireless security strategies for protecting your business network.',
    date: 'August 9, 2024',
    href: '/insights/securing-small-business-wifi'
  },
  {
    title: 'Mac Deployment Best Practices',
    excerpt: 'Streamlining Mac setup and management for growing teams.',
    date: 'August 9, 2024',
    href: '/insights/mac-deployment-best-practices'
  },
  {
    title: 'Google Workspace vs Microsoft 365',
    excerpt: 'Choosing the right productivity suite for your small business needs.',
    date: 'August 9, 2024',
    href: '/insights/google-workspace-vs-microsoft-365'
  },
  {
    title: 'Network Planning for Remote Work',
    excerpt: 'Building reliable infrastructure that supports distributed teams.',
    date: 'August 9, 2024',
    href: '/insights/network-planning-remote-work'
  },
  {
    title: 'Why Your Business Needs a Wireless Site Survey',
    excerpt: 'The foundation of enterprise-grade Wi-Fi performance and coverage.',
    date: 'August 9, 2024',
    href: '/insights/wireless-site-survey-guide'
  },
  {
    title: 'Common IT Security Mistakes',
    excerpt: 'Critical vulnerabilities small businesses often overlook.',
    date: 'August 9, 2024',
    href: '/insights/common-it-security-mistakes'
  }
]

export default function Blog() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">Insights</h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              {post.href ? (
                <Link href={post.href}>
                  <article className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                    <h3 className="text-xl font-semibold mb-3 text-slate-900">{post.title}</h3>
                    <p className="text-slate-600 mb-4">{post.excerpt}</p>
                    <span className="text-sm text-slate-500">{post.date}</span>
                  </article>
                </Link>
              ) : (
                <article className="p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow cursor-pointer">
                  <h3 className="text-xl font-semibold mb-3 text-slate-900">{post.title}</h3>
                  <p className="text-slate-600 mb-4">{post.excerpt}</p>
                  <span className="text-sm text-slate-500">{post.date}</span>
                </article>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}