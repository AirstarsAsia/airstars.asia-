'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900">Beyond the Signal</h2>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-lg text-slate-600 leading-relaxed space-y-6">
            <p>
              What began with wireless expertise has grown into something bigger. AirStars is where 
              infrastructure meets innovation—your complete IT partner for everything from secure 
              network design to custom software solutions.
            </p>
            <p>
              We handle the three pillars that keep modern businesses running: rock-solid wireless 
              and network infrastructure, comprehensive IT security and device management, and 
              intelligent workspace solutions that actually work together. Beyond that, we build 
              the software tools your business needs when off-the-shelf isn't enough.
            </p>
            <p>
              Enterprise-grade expertise, small business focus. We're the team that makes 
              technology work for you, not the other way around.
            </p>
            <div className="mt-8">
              <Link 
                href="/story"
                className="inline-block bg-[#4471c1] text-white px-6 py-3 rounded-full font-medium hover:bg-[#3a5fa0] transition-colors"
              >
                Read Our Full Story
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}