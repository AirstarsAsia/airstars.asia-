import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://airstars.asia'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/story`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/case-studies/king-of-time-integration`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/insights/securing-small-business-wifi`,
      lastModified: new Date('2020-01-28'),
    },
    {
      url: `${baseUrl}/insights/wireless-site-survey-guide`,
      lastModified: new Date('2019-07-03'),
    },
    {
      url: `${baseUrl}/insights/network-planning-remote-work`,
      lastModified: new Date('2021-04-12'),
    },
    {
      url: `${baseUrl}/insights/mac-deployment-best-practices`,
      lastModified: new Date('2022-09-08'),
    },
    {
      url: `${baseUrl}/insights/google-workspace-vs-microsoft-365`,
      lastModified: new Date('2024-06-22'),
    },
    {
      url: `${baseUrl}/insights/common-it-security-mistakes`,
      lastModified: new Date('2023-11-15'),
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: new Date(),
    },
  ]
}