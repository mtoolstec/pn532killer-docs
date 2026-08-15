---
title: PN532Killer compatibility
description: Compare PN532 and PN532Killer CLI capabilities, RFID protocol support, USB, TCP/UDP, Android MTools, and Bluetooth LE interfaces.
---

# PN532Killer compatibility

The PN532 CLI uses one command language for standard PN532 and PN532Killer hardware, then checks each command against the capabilities detected at connection time.

## CLI device capabilities

| CLI area | Standard PN532 | PN532Killer |
| --- | --- | --- |
| Connect, version, wakeup, raw frames | Yes | Yes |
| ISO/IEC 14443 A scan/raw | Yes | Yes |
| MIFARE Classic reader and supported magic-tag operations | Yes | Yes |
| MIFARE Ultralight / NTAG reader operations | Yes | Yes |
| Dictionary checks and integrated Classic dump workflows | Yes | Yes |
| `hw mode r/e/s` | No | Yes |
| `hw led on/off` | No | Yes |
| `hw fw` firmware upgrade | No | Yes, direct USB only |
| ISO/IEC 15693 `hf 15` | No | Yes |
| MIFARE Classic emulator-slot helpers | No | Yes |
| Classic, MFU, and ISO15693 slot export | No | Yes |
| Sniffer identity and mode configuration | No | Yes |
| MFKey32v2/MFKey64 capture analysis | No | Yes, native helper required |
| Static Nested and recursive nested recovery | No | Yes, native helper required |

Unsupported commands are not silently treated as standard PN532 operations.

This table follows the current `dev` command registrations. Beta builds may change before they reach `main`; use the CLI's built-in group help as the final authority for the installed version. The current `hardnested` entry routes to the Static Nested-based `nestedattack` workflow and is not a native hardnested solver.

## Protocol and product matrix

| Family | Read/write | Emulation | Capture support |
| --- | --- | --- | --- |
| ISO/IEC 14443 A | Supported targets | MIFARE Classic and MFU/NTAG profiles | Selected MIFARE Classic workflows |
| ISO/IEC 14443 B | Through supported PN532 commands | Not documented | Not documented |
| ISO/IEC 15693 | PN532Killer CLI and supported apps | Selected profiles | Firmware/application dependent |
| EM4100 | With supported LF extension/software | With supported extension | Not documented in the current CLI tree |
| FeliCa | Not confirmed for production use | No | No |

## Host interfaces

| Interface | Requirements | Notes |
| --- | --- | --- |
| USB UART | CH343 driver where required | Default and preferred for setup and updates |
| Android USB host/OTG | MTools and data-capable cable | Direct PN532Killer control; set Host Interface to USB |
| TCP/UDP bridge | Reachable `host:port` | Accepted by `hw connect -p` |
| Bluetooth LE | LF/BLE extension and MTools BLE on Android/iOS | Select BLE in Host Interface settings |

See [MTools mobile apps](../software/mobile-apps.md) for verified Google Play and App Store downloads.

Compatibility with a protocol does not imply compatibility with every commercial tag product or proprietary application built on that protocol.
