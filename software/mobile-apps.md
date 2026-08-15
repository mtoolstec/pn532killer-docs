---
title: MTools mobile apps for PN532Killer
description: Connect PN532Killer to Android by USB OTG with MTools, or use MTools BLE on Android and iOS with the PN532Killer BLE extension.
---

# MTools mobile apps for PN532Killer

Use **MTools on Android** for a direct USB connection, or **MTools BLE on Android and iOS** when PN532Killer has the BLE extension. The two apps use different transports and are not interchangeable.

<div class="app-route-grid">
  <section class="app-route">
    <span class="app-route__eyebrow">Android · USB OTG</span>
    <h2>MTools</h2>
    <p>Connect PN532Killer directly to an Android phone with a data-capable USB cable and an OTG adapter when the phone requires one.</p>
    <a class="app-download" href="https://play.google.com/store/apps/details?id=tk.toolkeys.mtools" target="_blank" rel="noopener noreferrer">Download on Google Play</a>
  </section>
  <section class="app-route">
    <span class="app-route__eyebrow">Android or iOS · Bluetooth LE</span>
    <h2>MTools BLE RFID Reader</h2>
    <p>Connect wirelessly through the PN532Killer BLE extension after changing the device Host Interface setting to BLE.</p>
    <div class="app-downloads">
      <a class="app-download" href="https://play.google.com/store/apps/details?id=com.mtoolstec.mtoolsLite" target="_blank" rel="noopener noreferrer">Google Play</a>
      <a class="app-download app-download--secondary" href="https://apps.apple.com/us/app/mtools-ble-rfid-reader/id1531345398" target="_blank" rel="noopener noreferrer">App Store</a>
    </div>
  </section>
</div>

## Choose the correct connection

| Connection | App | Host mode |
| --- | --- | --- |
| Android + USB host/OTG | MTools | `USB` |
| Android + BLE extension | MTools BLE | `BLE` |
| iPhone/iPad + BLE extension | MTools BLE | `BLE` |

MTools on Android can access PN532-compatible reader functions over USB and adds supported PN532Killer workflows. Current Google Play release notes include MFKey32v2 and MFKey64 support for PN532Killer. MTools BLE lists PN532 BLE support, tag read/write tools, dump management, firmware/OTA tools, and current PN532Killer MFKey32/MFKey64 support. Exact functions can vary with the app and device firmware versions.

## Connect MTools by USB on Android

Before connecting, set PN532Killer to **Settings → Host Interface → USB**.

1. Install [MTools from Google Play](https://play.google.com/store/apps/details?id=tk.toolkeys.mtools).
2. Confirm that the Android device supports USB host/OTG mode.
3. Connect PN532Killer using a USB data cable and an OTG adapter if required.
4. Open MTools and approve Android's USB-device permission prompt.
5. Open the PN532/PN532Killer connection function and select the detected USB device.
6. Start with device information or a non-destructive tag scan before loading, writing, or updating data.

Only one Android application can normally own the USB device at a time. Close serial terminals and other NFC applications if MTools cannot connect.

::: tip USB is the recovery path
Use USB for initial setup, firmware recovery, and large transfers when possible. It removes BLE range and radio-interruption variables from troubleshooting.
:::

## Connect MTools BLE on Android or iOS

The Bluetooth workflow requires the PN532Killer LF/BLE extension.

1. Install MTools BLE from [Google Play](https://play.google.com/store/apps/details?id=com.mtoolstec.mtoolsLite) or the [Apple App Store](https://apps.apple.com/us/app/mtools-ble-rfid-reader/id1531345398).
2. Power the PN532Killer and BLE extension.
3. On PN532Killer, open **Settings → Host Interface**, select **BLE**, and confirm.
4. Enable Bluetooth on the phone. On Android, grant the nearby-device permission requested by the app.
5. Open MTools BLE, scan for devices, and select PN532Killer.
6. Confirm the device information before transferring a slot or starting a supported workflow.

Do not pair through the operating system's Bluetooth settings unless the app specifically asks. MTools BLE performs its own BLE scan and connection.

## Supported mobile workflows

Depending on the installed app and firmware version, the mobile path can provide:

- PN532-compatible MIFARE Classic and Ultralight/NTAG reader operations
- ISO/IEC 15693/NFC-V operations supported by the app and PN532Killer firmware
- MIFARE dump import, export, editing, and emulator-slot transfer
- Supported UID and magic-tag tools
- MFKey32v2 and MFKey64 workflows for authorized PN532Killer testing
- Firmware or OTA update tools exposed by the current app release

Use only tags and systems you own or are authorized to test. Mobile apps can store dumps and recovered keys in shared storage or backups; remove sensitive files when the work is complete.

## Connection troubleshooting

| Symptom | Check |
| --- | --- |
| Android never shows a USB permission dialog | Confirm OTG/USB host support, use a data cable, reconnect, and unlock the phone |
| MTools sees no device over USB | Set Host Interface to `USB` and close other apps using the USB serial device |
| MTools BLE sees no PN532Killer | Install and power the BLE extension, select Host Interface `BLE`, and move the phone closer |
| BLE connects but commands fail | Disconnect other phones, restart the app connection, and verify firmware/app compatibility |
| Transfer stops partway | Keep the device powered and close; retry over USB for large or recovery-critical transfers |

See [Bluetooth extension](../guides/bluetooth-extension.md) for hardware setup and [Firmware update](../getting-started/firmware-update.md) for the CLI and recovery paths.
