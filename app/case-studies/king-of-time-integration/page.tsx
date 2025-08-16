import CaseStudyContent from '../../../components/CaseStudyContent'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'King of Time Integration Case Study - Making Leave Requests Visual | Airstars',
  description: 'How AirStars helped an international school transform their King of Time workflow with Google Calendar integration. Custom Python API integration for better leave management.',
  keywords: 'King of Time integration, Google Calendar API, Python automation, school administration, leave management system, workflow optimization',
  openGraph: {
    title: 'King of Time Integration Case Study - Making Leave Requests Visual',
    description: 'How AirStars helped an international school transform their King of Time workflow with Google Calendar integration.',
    type: 'article',
  }
}

export default function KingOfTimeIntegrationCase() {
  return (
    <CaseStudyContent 
      title="Making Leave Requests Visual and Manageable"
      subtitle="How AirStars helped an international school improve its King of Time workflows with Google Calendar integration"
      backgroundImage="https://images.unsplash.com/photo-1602145095452-aba06946ed05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    />
  )
}

