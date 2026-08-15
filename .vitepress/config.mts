import { defineConfig } from 'vitepress'

const siteUrl = 'https://docs.pn532killer.com'
const defaultDescription = 'Official PN532Killer documentation for PN532 CLI, Android USB, Bluetooth LE, RFID reader, emulator, Sniffer, firmware, and authorized MIFARE workflows.'
const socialImage = 'https://pn532killer.com/wp-content/uploads/sites/2/2024/04/PN532Killer-Final-Version.png'

function pageUrl(relativePath: string) {
  const route = relativePath
    .replace(/(^|\/)index\.md$/, '$1')
    .replace(/\.md$/, '')

  return route ? `${siteUrl}/${route}` : `${siteUrl}/`
}

export default defineConfig({
  lang: 'en-US',
  title: 'PN532Killer Docs',
  titleTemplate: ':title | PN532Killer Docs',
  description: defaultDescription,
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: siteUrl,
    transformItems: (items) => items.filter(({ url }) => !/(^|\/)(README|SUMMARY)(?:$|\/)/.test(url))
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#6b2881' }],
    ['meta', { name: 'author', content: 'MTools Tec' }],
    ['meta', { property: 'og:site_name', content: 'PN532Killer Docs' }],
    ['meta', { property: 'og:locale', content: 'en_US' }],
    ['script', { type: 'application/ld+json' }, JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'PN532Killer Docs',
      url: siteUrl,
      description: defaultDescription,
      publisher: {
        '@type': 'Organization',
        name: 'MTools Tec',
        url: 'https://pn532killer.com'
      }
    })]
  ],
  transformHead({ pageData }) {
    const canonical = pageUrl(pageData.relativePath)
    const isHome = pageData.relativePath === 'index.md'
    const noIndex = /(^|\/)(README|SUMMARY)\.md$/.test(pageData.relativePath)
    const description = pageData.description || defaultDescription
    const socialTitle = isHome
      ? 'PN532Killer Documentation: CLI, Android USB, BLE and RFID Workflows'
      : `${pageData.title} | PN532Killer Docs`
    const article = {
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: pageData.title,
      description,
      url: canonical,
      inLanguage: 'en-US',
      author: { '@type': 'Organization', name: 'MTools Tec' },
      publisher: { '@type': 'Organization', name: 'MTools Tec', url: 'https://pn532killer.com' },
      isPartOf: { '@type': 'WebSite', name: 'PN532Killer Docs', url: siteUrl }
    }

    return [
      ['link', { rel: 'canonical', href: canonical }],
      ['meta', { property: 'og:type', content: isHome ? 'website' : 'article' }],
      ['meta', { property: 'og:title', content: socialTitle }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:url', content: canonical }],
      ['meta', { property: 'og:image', content: socialImage }],
      ['meta', { property: 'og:image:width', content: '1400' }],
      ['meta', { property: 'og:image:height', content: '937' }],
      ['meta', { property: 'og:image:alt', content: 'PN532Killer RFID reader, emulator and Sniffer hardware' }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:title', content: socialTitle }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: socialImage }],
      ['meta', { name: 'twitter:image:alt', content: 'PN532Killer RFID reader, emulator and Sniffer hardware' }],
      ...(noIndex ? [['meta', { name: 'robots', content: 'noindex,follow' }] as const] : []),
      ...(!isHome && !noIndex ? [['script', { type: 'application/ld+json' }, JSON.stringify(article)] as const] : [])
    ]
  },
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'PN532Killer',
    nav: [
      { text: 'Get started', link: '/getting-started/quickstart' },
      { text: 'Modes', link: '/getting-started/working-modes' },
      { text: 'PN532 CLI', link: '/software/python-cli' },
      { text: 'Mobile apps', link: '/software/mobile-apps' },
      { text: 'Reference', link: '/reference/command-reference' }
    ],
    sidebar: [
      {
        text: 'Getting started',
        collapsed: false,
        items: [
          { text: 'Product overview', link: '/getting-started/overview' },
          { text: 'Hardware and controls', link: '/getting-started/hardware-and-controls' },
          { text: 'Quickstart', link: '/getting-started/quickstart' },
          { text: 'Working modes', link: '/getting-started/working-modes' },
          { text: 'Firmware update', link: '/getting-started/firmware-update' }
        ]
      },
      {
        text: 'Reader and emulator',
        collapsed: false,
        items: [
          { text: 'Reader mode', link: '/guides/reader-mode' },
          { text: 'MIFARE Classic recovery', link: '/guides/mifare-classic-recovery' },
          { text: 'Emulator mode', link: '/guides/emulator-mode' },
          { text: 'Upload and download dumps', link: '/guides/upload-download-dumps' },
          { text: 'Bluetooth extension', link: '/guides/bluetooth-extension' }
        ]
      },
      {
        text: 'Sniffer workflows',
        collapsed: true,
        items: [
          { text: 'Sniffer overview', link: '/sniffer/' },
          { text: 'MFKey32v2 — without tag', link: '/sniffer/mfkey32v2' },
          { text: 'MFKey64 — with tag', link: '/sniffer/mfkey64' },
          { text: 'Static Nested', link: '/sniffer/static-nested' }
        ]
      },
      {
        text: 'Software',
        collapsed: true,
        items: [
          { text: 'PN532 CLI', link: '/software/python-cli' },
          { text: 'MTools mobile apps', link: '/software/mobile-apps' },
          { text: 'CH343 driver', link: '/software/ch343-driver' },
          { text: 'Windows tool', link: '/software/windows-tool' },
          { text: 'libnfc', link: '/software/libnfc' }
        ]
      },
      {
        text: 'Troubleshooting',
        collapsed: true,
        items: [
          { text: 'Troubleshooting', link: '/troubleshooting/' },
          { text: 'Device not detected', link: '/troubleshooting/device-not-detected' },
          { text: 'Device Unauthorized', link: '/troubleshooting/device-unauthorized' },
          { text: 'Firmware recovery', link: '/troubleshooting/firmware-recovery' }
        ]
      },
      {
        text: 'Reference',
        collapsed: true,
        items: [
          { text: 'Compatibility', link: '/reference/compatibility' },
          { text: 'CLI command reference', link: '/reference/command-reference' },
          { text: 'Firmware history', link: '/reference/firmware-history' },
          { text: 'Safe and authorized use', link: '/reference/safe-use' }
        ]
      }
    ],
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    editLink: {
      pattern: 'https://github.com/mtoolstec/pn532killer-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mtoolstec/pn532killer-docs' }
    ],
    footer: {
      message: 'Use only with systems you own or are authorized to test.',
      copyright: 'PN532Killer documentation'
    }
  }
})
