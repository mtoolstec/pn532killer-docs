# Compatibility

The PN532 CLI uses one command language for standard PN532 and PN532Killer hardware, then checks each command against the capabilities detected at connection time.

## CLI device capabilities

| CLI area | Standard PN532 | PN532Killer |
| --- | --- | --- |
| Connect, version, wakeup, raw frames | Yes | Yes |
| ISO/IEC 14443 A scan/raw | Yes | Yes |
| MIFARE Classic reader and supported magic-tag operations | Yes | Yes |
| MIFARE Ultralight / NTAG reader operations | Yes | Yes |
| `hw mode r/e/s` | No | Yes |
| ISO/IEC 15693 `hf 15` | No | Yes |
| MIFARE Classic emulator-slot helpers | No | Yes |
| Sniffer identity and mode configuration | No | Yes |

Unsupported commands are not silently treated as standard PN532 operations.

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
| TCP/UDP bridge | Reachable `host:port` | Accepted by `hw connect -p` |
| BLE | LF/BLE extension and supported app | Select BLE in Host Interface settings |

Compatibility with a protocol does not imply compatibility with every commercial tag product or proprietary application built on that protocol.
