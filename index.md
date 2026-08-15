---
layout: home

hero:
  name: PN532Killer
  text: One CLI for PN532 and PN532Killer
  tagline: Connect, inspect tags, manage emulator slots, and configure capture workflows from a consistent terminal interface.
  image:
    src: /logo.svg
    alt: PN532Killer
  actions:
    - theme: brand
      text: Install PN532 CLI
      link: /software/python-cli
    - theme: alt
      text: Quickstart
      link: /getting-started/quickstart

features:
  - title: Shared PN532 commands
    details: Use one CLI for ISO/IEC 14443 A, MIFARE Classic, MIFARE Ultralight, and NTAG reader workflows.
  - title: PN532Killer modes
    details: Switch Reader, Emulator, and Sniffer modes with explicit terminal commands and device-aware validation.
  - title: Open and maintainable
    details: Source-controlled documentation, automatic GitHub Pages deployment, local search, and editable Markdown.
---

## Start with a safe scan

```text
hw connect
hw version
hw mode r
hf 14a scan
```

`hw mode r` is a PN532Killer extension. The CLI automatically detects a standard PN532 and exposes the compatible reader commands without requiring a separate tool.

::: warning Authorized use only
Use PN532Killer only with tags, systems, and readers that you own or are explicitly authorized to test.
:::
