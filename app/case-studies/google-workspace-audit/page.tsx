import GoogleWorkspaceAuditCaseStudyContent from '../../../components/GoogleWorkspaceAuditCaseStudyContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Workspace Security Audit Case Study - Japanese Data Privacy Compliance | Airstars',
  description: 'How AirStars conducted a comprehensive Google Workspace security audit for a 180+ employee Tokyo recruiting agency to achieve Japanese data privacy compliance through API-driven analysis and cultural change.',
  keywords: 'Google Workspace audit, data privacy compliance, Japanese APPI, Google Drive API, Python security audit, data governance, recruitment data protection, external sharing audit',
  openGraph: {
    title: 'Google Workspace Security Audit - Japanese Data Privacy Compliance',
    description: 'How AirStars used Python and Google APIs to audit and secure a recruiting agency\'s data for Japanese privacy law compliance.',
    type: 'article',
  }
}

export default function GoogleWorkspaceAuditCase() {
  return (
    <GoogleWorkspaceAuditCaseStudyContent 
      title="Google Workspace Security Audit for Japanese Data Privacy Compliance"
      subtitle="How AirStars conducted a comprehensive data governance audit for a Tokyo recruiting agency using Python and Google APIs to achieve regulatory compliance"
      backgroundImage="/images/google-workspace-audit-hero.jpg"
    />
  )
}