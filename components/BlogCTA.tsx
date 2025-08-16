'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface BlogCTAProps {
  title?: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

export default function BlogCTA({ 
  title = "Need Expert IT Support?",
  description = "Get enterprise-grade solutions designed for small business reality. From network security to custom software, we make technology work for you.",
  buttonText = "Get in Touch",
  buttonLink = "mailto:hello@airstars.asia"
}: BlogCTAProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl mt-12 shadow-xl">
      <div className="text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          {description}
        </p>
        <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
          <Link 
            href={buttonLink}
            className="inline-block bg-[#4471c1] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3a5fa0] transition-colors"
          >
            {buttonText}
          </Link>
          <Link 
            href="/story"
            className="inline-block border border-slate-300 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-700 transition-colors"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
      </div>
    </motion.div>
  )
}