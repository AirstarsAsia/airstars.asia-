'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const certifications = [
  {
    name: 'CWNP',
    description: 'Certified Wireless Network Professional',
    logo: '/cwnp.jpg'
  },
  {
    name: 'CWNA',
    description: 'Certified Wireless Network Administrator',
    logo: '/cwna.png'
  },
  {
    name: 'CWSP',
    description: 'Certified Wireless Security Professional',
    logo: '/cwsp_c copy.png'
  },
  {
    name: 'Apple',
    description: 'System Administrator Certified',
    logo: '/apple.png'
  },
  {
    name: 'Cisco Meraki',
    description: 'Cloud Networking Certified',
    logo: '/cisco-meraki-bw-logo-300x200.jpg'
  }
]

export default function Certifications() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-slate-900 mb-8">Certified Expertise</h3>
          
          {/* Logo Banner */}
          <div className="flex flex-wrap justify-center items-center gap-12 mb-6">
            {certifications.map((cert, index) => {
              // Alternate slide directions for visual interest
              const slideDirection = index % 2 === 0 ? -50 : 50;
              
              return (
                <motion.div
                  key={cert.name}
                  initial={{ 
                    opacity: 0, 
                    x: slideDirection,
                    y: 30,
                    scale: 0.8 
                  }}
                  whileInView={{ 
                    opacity: 0.7, 
                    x: 0,
                    y: 0, 
                    scale: 1 
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  whileHover={{ 
                    opacity: 1, 
                    scale: 1.05,
                    y: -4,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <div className="relative group cursor-pointer">
                    {/* Magnetic Glow Effect */}
                    <motion.div 
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0, 0.3, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.4
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-lg blur-md opacity-0 group-hover:opacity-100" />
                    </motion.div>
                    
                    {/* Connection Lines */}
                    {index < certifications.length - 1 && (
                      <motion.div 
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        transition={{ delay: (index + 1) * 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                      >
                        <div className="absolute top-1/2 -right-6 w-12 h-0.5 bg-gradient-to-r from-blue-300/50 to-transparent" />
                      </motion.div>
                    )}
                    
                    <motion.div 
                      animate={{ 
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: index * 0.8,
                        ease: "easeInOut"
                      }}
                      whileHover={{
                        boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)"
                      }}
                    >
                      <div className="h-24 px-8 flex items-center bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 relative z-10">
                        <Image
                          src={cert.logo}
                          alt={cert.description}
                          width={150}
                          height={96}
                          className="h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          

        </motion.div>
      </div>
    </section>
  )
}