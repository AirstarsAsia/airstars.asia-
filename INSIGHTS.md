# Insights Content Structure

## Overview
The Insights section contains IT industry knowledge and expertise articles relevant to Airstars' services. Each insight is a standalone blog post with its own route and page.

## File Structure
Each insight follows this structure:
```
app/insights/[slug]/
└── page.tsx
```

## Content Requirements

### SEO Metadata
Every insight page must include:
- `title`: Descriptive title with brand name
- `description`: 150-160 character summary for search results
- `keywords`: Relevant search terms
- `openGraph`: Social media sharing metadata

### Content Structure
1. **Header Section**
   - H1 title (main keyword focus)
   - Publication date and read time
   - Lead paragraph (hook + value proposition)

2. **Body Content**
   - H2 sections for main topics
   - H3 subsections for detailed points
   - Practical examples and comparisons
   - Visual elements (code blocks, highlighted boxes)

3. **Call-to-Action**
   - Contact information
   - Service offering related to the topic

### Technical Specifications
- Use semantic HTML (article, header, time elements)
- Implement proper heading hierarchy (H1 → H2 → H3)
- Include structured data for search engines
- Mobile-responsive design with Tailwind CSS
- Accessible color contrast and typography

## Example Implementation
See `/app/insights/google-workspace-vs-microsoft-365/page.tsx` for the complete template structure.

## Current Insights Topics
1. ✅ Google Workspace vs Microsoft 365 (`/insights/google-workspace-vs-microsoft-365/`)
2. 🔄 Securing Small Business Wi-Fi: Beyond WPA2
3. 🔄 Mac Deployment Best Practices
4. 🔄 Network Planning for Remote Work
5. 🔄 Why Your Business Needs a Wireless Site Survey
6. 🔄 Common IT Security Mistakes

## Content Guidelines
- Write from expert perspective with practical advice
- Include real-world examples and case studies
- Focus on small business needs and constraints
- Maintain professional but approachable tone
- End with clear next steps or contact information