import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const globalContent = {
  site: {
    name: slot4BrandConfig.siteName,
    tagline: slot4BrandConfig.tagline || 'Media distribution and PR visibility platform',
    domain: slot4BrandConfig.domain,
    baseUrl: slot4BrandConfig.baseUrl,
  },
  nav: {
    tagline: 'Press release distribution, newsroom publishing, and media outreach',
    primaryLinks: [
      { label: 'Campaigns', href: '/media-distribution' },
      { label: 'Press Releases', href: '/press-release' },
      { label: 'Newsroom', href: '/updates' },
      { label: 'Contact', href: '/contact' },
    ],
    actions: {
      primary: { label: 'Create campaign', href: '/create' },
      secondary: { label: 'Search coverage', href: '/search' },
    },
  },
  footer: {
    tagline: 'Global media distribution for credible brand visibility',
    description: 'Plan, publish, and amplify press releases, brand announcements, and media campaigns through a professional distribution experience built for PR teams and growing companies.',
    columns: [
      {
        title: 'Explore',
        links: [
          { label: 'Media Campaigns', href: '/media-distribution' },
          { label: 'Press Releases', href: '/press-release' },
          { label: 'Newsroom Updates', href: '/updates' },
          { label: 'Search Coverage', href: '/search' },
        ],
      },
      {
        title: 'Site',
        links: [
          { label: 'About', href: '/about' },
          { label: 'Contact', href: '/contact' },
          { label: 'Create Campaign', href: '/create' },
        ],
      },
    ],
    bottomNote: 'Built for faster press release publishing, wider media reach, and measurable campaign visibility.',
  },
  commonLabels: {
    readMore: 'Read more',
    viewAll: 'View all',
    explore: 'Explore',
    latest: 'Latest',
    related: 'Related',
    published: 'Published',
  },
} as const
