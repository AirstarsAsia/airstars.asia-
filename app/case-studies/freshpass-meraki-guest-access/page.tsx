import FreshPassCaseStudyContent from '../../../components/FreshPassCaseStudyContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FreshPass Meraki Guest Access Case Study - Secure Visitor WiFi | Airstars',
  description: 'How AirStars replaced unreliable Meraki captive portals with FreshPass IPSK solution. Secure QR code guest access with individual credentials and administrator-controlled expiration.',
  keywords: 'FreshPass, Meraki IPSK, guest WiFi security, visitor access, QR code WiFi, wireless security, captive portal replacement, Cisco Meraki',
  openGraph: {
    title: 'FreshPass Meraki Guest Access Case Study - Secure Visitor WiFi',
    description: 'How AirStars replaced unreliable Meraki captive portals with FreshPass IPSK solution for secure guest access.',
    type: 'article',
  }
}

export default function FreshPassMerakiCase() {
  return (
    <FreshPassCaseStudyContent 
      title="Transforming Guest WiFi from Shared Risk to Individual Security"
      subtitle="How AirStars replaced Meraki's unreliable captive portal with FreshPass IPSK for secure, time-limited visitor access"
      backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    />
  )
}