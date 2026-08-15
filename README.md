# PN532Killer Documentation

PN532Killer is a multi-protocol RFID development tool that combines a PN532-compatible reader interface with tag emulation and traffic-capture workflows. The open-source [PN532 CLI](https://github.com/whywilson/pn532-python) is the primary interface used throughout this documentation. It auto-detects both standard PN532 hardware and PN532Killer, then exposes the commands supported by the connected device.

Use this documentation to set up the hardware, update its firmware, choose a working mode, connect supported software, and resolve common problems.

## Start here

- New device: install the [PN532 CLI](software/python-cli.md), then follow the [Quickstart](getting-started/quickstart.md).
- Phone workflow: use [MTools on Android by USB or MTools BLE on Android/iOS](software/mobile-apps.md).
- Learn what the hardware supports: read [Product overview](getting-started/overview.md) and [Compatibility](reference/compatibility.md).
- Update an existing device: see [Firmware update](getting-started/firmware-update.md).
- Audit or recover an authorized MIFARE Classic tag: see [MIFARE Classic recovery](guides/mifare-classic-recovery.md).
- Find an exact command: open the [PN532 CLI command reference](reference/command-reference.md).
- Use a graphical or compatibility tool: choose the [Windows tool](software/windows-tool.md) or [libnfc](software/libnfc.md).
- Solve a problem: open [Troubleshooting](troubleshooting/README.md).

::: warning Authorized use only
Use PN532Killer only with tags, systems, and readers that you own or are explicitly authorized to test. Capturing credentials or cloning access tokens without permission may be illegal.
:::

## Official resources

- [PN532Killer website](https://pn532killer.com)
- [Firmware and hardware repository](https://github.com/NFC-funs/PN532Killer)
- [PN532Killer Python CLI](https://github.com/whywilson/pn532-python)
- [Downloads](https://pn532killer.com/downloads)
