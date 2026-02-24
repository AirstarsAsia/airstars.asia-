import SmoothScroll from '../components/SmoothScroll'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import CaseStudies from '../components/CaseStudies'
// import FeaturedSolution from '../components/FeaturedSolution'
import Blog from '../components/Blog'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Airstars Asia',
    url: 'https://airstars.asia',
    logo: 'https://airstars.asia/logo_pulse.svg',
    description: 'Professional IT services, wireless networking, and Mac deployment solutions for small businesses. CWNP certified expertise with enterprise-grade results.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Asia',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'hello@airstars.asia',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://airstars.jp',
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Asia Pacific',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Wireless Network Design',
            description: 'Professional wireless site surveys and network design services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mac Deployment Services',
            description: 'Enterprise Mac deployment and management solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Security Consulting',
            description: 'Comprehensive IT security assessments and implementation',
          },
        },
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SmoothScroll />
      <Hero />
      <Services />
      <CaseStudies />
      {/* <FeaturedSolution /> */}
      <Blog />
      <About />
      <Contact />
      <Footer />
    </>
  )
}