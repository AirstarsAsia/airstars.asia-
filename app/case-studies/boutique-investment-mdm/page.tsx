import BoutiqueInvestmentCaseStudyContent from '../../../components/BoutiqueInvestmentCaseStudyContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Boutique Investment MDM Case Study - Zero-Touch Security | Airstars',
  description: 'How AirStars guided a Tokyo investment firm from zero MDM to hardened Apple environment with Mosyle, Apple Business Manager, and automated security workflows.',
  keywords: 'MDM, Mosyle, Apple Business Manager, investment firm security, compliance, FileVault, zero-touch deployment, financial data protection',
  openGraph: {
    title: 'Boutique Investment MDM Case Study - Zero-Touch Security',
    description: 'How AirStars guided a Tokyo investment firm from zero MDM to hardened Apple environment with automated security.',
    type: 'article',
  }
}

export default function BoutiqueInvestmentMDMCase() {
  return (
    <BoutiqueInvestmentCaseStudyContent 
      title="Zero-Touch Security for a Boutique Investment Team"
      subtitle="How AirStars guided a Tokyo investment firm from zero MDM to a hardened, automated Apple environment with Mosyle and Apple Business Manager"
      backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    />
  )
}