'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Certifications from '../../components/Certifications'
import PageHero from '../../components/PageHero'

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <PageHero 
        title="The IT Partner Small Business Deserves"
        subtitle="Most IT providers either oversell complex solutions or treat you like a number. We built AirStars to be different."
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
              Why Most IT Support Fails Small Business
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                Small businesses get stuck between two bad options: expensive enterprise consultants 
                who overcomplicate everything, or cheap support that treats symptoms instead of causes.
              </p>
              <p>
                The result? Networks that barely work, security that's an afterthought, and 
                technology that fights against your business instead of enabling it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Evolution */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              From Signal to System
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-6">
              <p>
                We started with wireless because that's where most IT fails first. Bad Wi-Fi 
                affects everything—productivity, security, growth. So we got serious about it, 
                earning certifications as Certified Wireless Network Professionals (CWNP) 
                including the challenging Network Administrator, Planning, and Security specializations.
              </p>
              <p>
                But as our clients grew, so did their needs. A rock-solid network is just the 
                foundation. They needed Mac deployments that actually worked, workspace solutions 
                that integrated seamlessly, security that protected without getting in the way.
              </p>
              <p>
                Today, we've evolved into the complete IT partner our clients always needed—handling 
                everything from network design to custom software development, always with the same 
                principle: technology should work for your business, not complicate it.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certifications */}
      <Certifications />

      {/* Our Approach */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">
              How We're Different
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Enterprise Expertise</h3>
                <p className="text-slate-600">
                  We bring the same level of technical depth and strategic thinking that 
                  large enterprises get, but sized for small business reality.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Organic Growth</h3>
                <p className="text-slate-600">
                  We grow with our clients, expanding our services as their needs evolve. 
                  No overselling, no vendor lock-in.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Complete Solutions</h3>
                <p className="text-slate-600">
                  From infrastructure to custom software, we handle the full technology 
                  stack so everything actually works together.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-slate-900">Real Partnership</h3>
                <p className="text-slate-600">
                  We're not just vendors—we're the reliable IT team that small businesses 
                  need but can't afford to hire full-time.
                </p>
              </div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for IT That Actually Works?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's talk about how we can make technology work for your business, 
              not the other way around.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Link 
                href="/#contact"
                className="inline-block bg-[#4471c1] text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-[#3a5fa0] transition-colors"
              >
                Get in Touch
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