# Firmware history

Official binaries are stored in the [Firmware directory](https://github.com/NFC-funs/PN532Killer/tree/main/Firmware). Filenames include the product line and build date.

| Build | Highlights |
| --- | --- |
| 2026-01-02 | Fix NTAG data writing; add firmware-version reading, LED control, slot-type reading, and host notification after Sniffer completion |
| 2025-05-28 | Add NTAG emulator |
| 2025-04-25 | Save ISO15693 UID to slot; add higher UART-rate support |
| 2025-04-06 | Automatically switch USB/BLE host interfaces |
| 2025-02-04A | Add MIFARE Classic 1K 7-byte mode and ISO15693 two-subcarrier emulation |
| 2024-11-23 | Add Static Nested support |
| 2024-10-30 | Add ISO15693 `InCommunicateThru` features and MIFARE Classic 7-byte read/write |
| 2024-10-05 | Fix ISO15693 emulator multi-block reads; add TagInfo compatibility |
| 2024-09-25 | Add forced return to USB host interface |
| 2024-09-03 | Add BLE/LF extension, MTools BLE, EM4100, and ID-to-slot workflows |
| 2024-05-11 | Add UART work-mode control |
| 2024-05-04 | Add ISO15693 read, write, and emulation |

## Selecting a build

Use the newest stable build recommended for your hardware unless a support engineer asks you to test another version. Keep the previous working binary available for recovery and record the exact filename when reporting a problem.

Release notes in the repository are currently concise. A firmware build may contain additional changes not listed here.

