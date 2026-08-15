# Product overview

PN532Killer is designed for RFID development, interoperability testing, tag research, and authorized security assessment. It presents a PN532-compatible host interface while adding features that are not available on a standard PN532 module.

## Main capabilities

### Reader

- ISO/IEC 14443 A and B operations through compatible PN532 software
- ISO/IEC 15693 reading and writing
- Identification of supported MIFARE Classic, ICODE, and EM4100 tags
- Faster UART settings for supported software and host hardware

### Emulator

- MIFARE Classic 1K, including supported 4-byte and 7-byte UID configurations
- NTAG emulation on current firmware
- Selected ISO/IEC 15693 tag types
- EM4100 when the LF/BLE extension is installed
- Eight on-device slots for supported tag profiles

### Sniffer

- MIFARE Classic authentication capture with a tag (MFKey64)
- MIFARE Classic authentication capture without a tag (MFKey32v2)
- Static Nested data collection on supported cards and firmware
- Reader/tag traffic research for supported protocols

## PN532 compatibility

PN532Killer can work with many applications that support a PN532 over high-speed UART. Extended PN532Killer features require software that implements its additional commands, such as the official Python CLI or supported MTools applications.

On mobile devices, [MTools connects directly from Android over USB host/OTG, while MTools BLE connects from Android or iOS through the PN532Killer BLE extension](../software/mobile-apps.md).

PN532 compatibility does not mean every PN532 driver, transport, command, or card type is guaranteed to work. See [Compatibility](../reference/compatibility.md) before planning a deployment.
