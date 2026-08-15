import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'PN532Killer Docs',
  description: 'PN532 and PN532Killer documentation centered on the PN532 CLI.',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: {
    hostname: 'https://docs.pn532killer.com'
  },
  head: [
    ['link', { rel: 'icon', href: '/logo.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#e93228' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'PN532Killer',
    nav: [
      { text: 'Get started', link: '/getting-started/quickstart' },
      { text: 'Modes', link: '/getting-started/working-modes' },
      { text: 'PN532 CLI', link: '/software/python-cli' },
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
