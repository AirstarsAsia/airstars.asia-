'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">About</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              What started as a focused wireless networking consultancy has evolved into comprehensive 
              small business IT support. My journey began with a deep specialization in Wi-Fi infrastructure, 
              earning certifications as a Certified Wireless Network Professional (CWNP) including the 
              challenging Certified Wireless Network Administrator, Planning, and Security certifications.
            </p>
            <p>
              Today, I organically grow with my clients, supporting everything from secure wireless deployments 
              to complete workspace solutions. Whether it's designing enterprise-grade Wi-Fi networks, 
              managing Mac deployments, optimizing Google Workspace and Microsoft 365 environments, 
              or integrating the countless devices that keep small businesses running—I've touched every 
              aspect of modern business IT.
            </p>
            <p>
              My approach is simple: be the reliable IT partner that small businesses need, 
              bringing enterprise-level expertise to organizations that deserve better than 
              one-size-fits-all solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}