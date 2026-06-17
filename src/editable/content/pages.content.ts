import { slot4BrandConfig } from '@/editable/theme/brand.config'

export const pagesContent = {
  home: {
    metadata: {
      title: 'Media distribution, press releases, and brand visibility',
      description: 'Distribute press releases, publish campaigns, reach journalists, and improve digital visibility through a premium media distribution platform.',
      openGraphTitle: 'Media distribution, press releases, and brand visibility',
      openGraphDescription: 'Launch newsroom-ready campaigns, track media reach, and amplify brand announcements across publisher networks.',
      keywords: ['media distribution', 'press release distribution', 'PR platform', 'content syndication'],
    },
    hero: {
      badge: 'Global news distribution platform',
      title: ['Distribute your story', 'to media networks that matter.'],
      description: 'Publish press releases faster, reach journalists and publishers, syndicate campaign content, and turn brand announcements into measurable digital visibility.',
      primaryCta: { label: 'Create campaign', href: '/create' },
      secondaryCta: { label: 'Explore campaigns', href: '/media-distribution' },
      searchPlaceholder: 'Search campaigns, industries, publishers, and releases',
      focusLabel: 'Campaign focus',
      featureCardBadge: 'distribution intelligence',
      featureCardTitle: 'A campaign workspace for press-ready brand coverage.',
      featureCardDescription: 'Featured campaigns, audience signals, reach metrics, and publisher context stay visible without changing platform behavior.',
    },
    intro: {
      badge: 'Distribution engine',
      title: 'Built for PR teams, founders, agencies, and marketing leaders who need credible reach.',
      paragraphs: [
        'Use one professional surface to package announcements, publish media-ready releases, and organize campaign assets for journalists, publishers, and stakeholders.',
        'Every archive, card, and detail page is designed around the questions media teams ask first: who is publishing, what industry is affected, how wide is the reach, and what action should happen next.',
        'The experience supports brand exposure, newsroom credibility, content syndication, and long-term discovery without adding friction to the existing platform logic.',
      ],
      sideBadge: 'At a glance',
      sidePoints: [
        'Press-ready campaign cards with reach, status, category, and engagement cues.',
        'Connected paths for releases, newsroom updates, publisher profiles, and visual assets.',
        'Balanced content widths that feel premium instead of stretched.',
        'Fast, smooth animation patterns that respect reduced-motion preferences.',
      ],
      primaryLink: { label: 'Browse campaigns', href: '/media-distribution' },
      secondaryLink: { label: 'Submit release', href: '/create' },
    },
    cta: {
      badge: 'Launch with confidence',
      title: 'Turn your next announcement into measurable media visibility.',
      description: 'Create a campaign, organize the release, and guide readers toward the channels, publishers, and outcomes that matter.',
      primaryCta: { label: 'Create Campaign', href: '/create' },
      secondaryCta: { label: 'Talk to PR support', href: '/contact' },
    },
    taskSection: {
      heading: 'Latest {label}',
      descriptionSuffix: 'Browse the newest posts in this section.',
    },
  },
  about: {
    badge: 'Our Story',
    title: 'A media distribution platform for brands that need credible visibility.',
    description: `${slot4BrandConfig.siteName} helps teams package announcements, publish press releases, and connect campaigns with the right media audience.`,
    paragraphs: [
      'Instead of treating distribution as a static post, the platform presents each campaign with context, assets, publisher signals, and a clear path to action.',
      'Whether a visitor starts with a press release, media campaign, brand profile, or search result, they can understand the story and continue into related coverage without losing context.',
    ],
    values: [
      {
        title: 'Campaign-first publishing',
        description: 'Every page is shaped to help announcements feel credible, scannable, and ready for media consumption.',
      },
      {
        title: 'Distribution clarity',
        description: 'Industry, publisher, reach, and engagement details stay close to the content so teams can judge impact quickly.',
      },
      {
        title: 'Trustworthy presentation',
        description: 'Balanced spacing, readable forms, and enterprise-grade visuals help PR teams and businesses look prepared.',
      },
    ],
  },
  contact: {
    eyebrow: `Contact ${slot4BrandConfig.siteName}`,
    title: 'Talk to a media distribution specialist.',
    description: 'Tell us about your announcement, target audience, distribution goals, or publishing timeline. We will help route the request to the right campaign path.',
    formTitle: 'Plan your campaign',
  },

  search: {
    metadata: {
      title: 'Search',
      description: 'Search press releases, media campaigns, industries, brands, and publisher-ready updates across the site.',
    },
    hero: {
      badge: 'Search media coverage',
      title: 'Find campaigns, releases, brands, and publisher-ready updates faster.',
      description: 'Use keywords, industries, categories, and content types to discover campaigns from every active section of the platform.',
      placeholder: 'Search by brand, headline, industry, publisher, or release',
    },
    resultsTitle: 'Latest media opportunities',
  },
  create: {
    metadata: {
      title: 'Create',
      description: 'Create and submit a press release, media campaign, or distribution-ready announcement.',
    },
    locked: {
      badge: 'Campaign access',
      title: 'Login to create a media campaign.',
      description: 'Use your account to open the campaign workspace, prepare release details, and organize assets for distribution.',
    },
    hero: {
      badge: 'Campaign submission workspace',
      title: 'Package a press release for distribution.',
      description: 'Choose the campaign type, add brand details, upload visual context, summarize the announcement, and prepare content for media review.',
    },
    formTitle: 'Campaign details',
    submitLabel: 'Submit campaign',
    successTitle: 'Campaign submitted successfully.',
  },
  auth: {
    login: {
      metadataDescription: 'Login to manage media campaigns and press release submissions.',
      badge: 'Client workspace',
      title: 'Welcome back to your media desk.',
      description: 'Login to manage campaign submissions, prepare releases, and continue building your distribution pipeline.',
      formTitle: 'Login to campaign desk',
      submitLabel: 'Continue',
      noAccount: 'No account matched these details. Create an account first, then login.',
      success: 'Login successful. Redirecting...',
      createCta: 'Create an account',
    },
    signup: {
      metadataDescription: 'Create an account to submit media campaigns and press releases.',
      badge: 'Media access',
      title: 'Create your account and start distributing.',
      description: 'Create an account to access the campaign workspace, save release details, and submit media-ready content through the site.',
      formTitle: 'Create campaign account',
      submitLabel: 'Create account',
      passwordShort: 'Use at least 4 characters for the password.',
      success: 'Account created successfully. Redirecting...',
      loginCta: 'Login',
    },
  },
  detailPages: {
    article: {
      relatedTitle: 'Related articles',
      fallbackTitle: 'Article details',
    },
    listing: {
      relatedTitle: 'Related listings',
      fallbackTitle: 'Listing details',
    },
    image: {
      relatedTitle: 'Related visuals',
      fallbackTitle: 'Image details',
    },
    profile: {
      relatedTitle: 'Suggested articles',
      fallbackDescription: 'Profile details will appear here once available.',
      visitButton: 'Visit Official Site',
    },
  },
} as const
