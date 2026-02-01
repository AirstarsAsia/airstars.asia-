import MultiCampusFreshPassCaseStudyContent from '../../../components/MultiCampusFreshPassCaseStudyContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Campus FreshPass Implementation - Extreme Networks Guest WiFi | Airstars',
  description: 'How AirStars implemented FreshPass across multiple campuses with Extreme Networks infrastructure. Secure QR code guest access with 8-hour credential expiration and individual session tracking.',
  keywords: 'FreshPass, Extreme Networks, multi-campus WiFi, guest access, QR code WiFi, wireless security, 8-hour expiration, visitor credentials, Aerohive',
  openGraph: {
    title: 'Multi-Campus FreshPass Implementation - Extreme Networks Guest WiFi',
    description: 'How AirStars implemented secure multi-campus guest WiFi with FreshPass and Extreme Networks for consistent visitor experiences.',
    type: 'article',
  }
}

export default function MultiCampusFreshPassCase() {
  return (
    <MultiCampusFreshPassCaseStudyContent 
      title="Multi-Campus Guest WiFi Security with Individual Credentials"
      subtitle="How AirStars implemented FreshPass across multiple campuses with Extreme Networks infrastructure for frictionless, secure visitor access"
      backgroundImage="/images/multi-campus-hero.jpg"
    />
  )
}