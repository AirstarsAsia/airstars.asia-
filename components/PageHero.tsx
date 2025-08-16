'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface PageHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  showLogo?: boolean
}

export default function PageHero({ 
  title, 
  subtitle, 
  backgroundImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  showLogo = false 
}: PageHeroProps) {
  return (
    <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/60" />
      
      {/* Logo (optional) */}
      {showLogo && (
        <div className="absolute top-8 left-8 z-20">
          <Link href="/" className="block hover:opacity-100 transition-opacity">
            <Image
              src="/logo_pulse.svg"
              alt="AirStars"
              width={60}
              height={45}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  )
}