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
    <p>Plug PN532Killer directly into Android, approve the USB permission prompt, then switch modes, transfer Classic dumps, or run MFKey workflows.</p>
    <a class="app-download" href="https://play.google.com/store/apps/details?id=tk.toolkeys.mtools" target="_blank" rel="noopener noreferrer">Download on Google Play</a>
  </section>
  <section class="app-route">
    <span class="app-route__eyebrow">Android or iOS · Bluetooth LE</span>
    <h2>MTools BLE RFID Reader</h2>
    <p>Connect to PN532Killer-BLE, then open Tools → PN532Killer for device control or use the app's other RFID tools.</p>
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

MTools on Android controls PN532Killer through the direct USB connection. After authorization, it can switch PN532Killer modes, download and upload MIFARE Classic dumps, and run MFKey32v2 or MFKey64. MTools BLE connects to the BLE extension and exposes PN532Killer control from **Tools → PN532Killer**, alongside MCT, MUT, Terminal, UID Changer, UMC, and other app tools.

::: warning No PN532Killer firmware update
Neither MTools nor MTools BLE supports updating PN532Killer firmware over USB, BLE, or OTA. Use the [PN532 CLI firmware workflow](../getting-started/firmware-update.md) or the official Windows updater instead.
:::

## Connect MTools by USB on Android

Before connecting, set PN532Killer to **Settings → Host Interface → USB**.

1. Install [MTools from Google Play](https://play.google.com/store/apps/details?id=tk.toolkeys.mtools).
2. Confirm that the Android device supports USB host/OTG mode.
3. Plug PN532Killer directly into the phone using a USB data cable and an OTG adapter if required.
4. When Android displays the USB-device popup, allow MTools to use the connected device.
5. After MTools connects, open the PN532Killer controls and verify the current mode.
6. Switch Reader, Emulator, or Sniffer mode as required by the authorized workflow.
7. Use the PN532Killer functions to download or upload a MIFARE Classic dump, or start MFKey32v2/MFKey64.

Only one Android application can normally own the USB device at a time. Close serial terminals and other NFC applications if MTools cannot connect.

::: tip Direct USB connection
Use a data-capable cable and keep the phone unlocked while Android grants the USB device to MTools. USB is preferred for larger dump transfers, but it does not add firmware-update support to MTools.
:::

## Connect MTools BLE on Android or iOS

The Bluetooth workflow requires the PN532Killer LF/BLE extension.

1. Install MTools BLE from [Google Play](https://play.google.com/store/apps/details?id=com.mtoolstec.mtoolsLite) or the [Apple App Store](https://apps.apple.com/us/app/mtools-ble-rfid-reader/id1531345398).
2. Power the PN532Killer and BLE extension.
3. On PN532Killer, open **Settings → Host Interface**, select **BLE**, and confirm.
4. Enable Bluetooth on the phone. On Android, grant the nearby-device permission requested by the app.
5. Open MTools BLE, scan for devices, and connect to **PN532Killer-BLE**.
6. Open **Tools → PN532Killer** to control PN532Killer and switch supported modes.
7. Use MCT, MUT, Terminal, UID Changer, UMC, or the other available tools for the matching tag workflow.

Do not pair through the operating system's Bluetooth settings unless the app specifically asks. MTools BLE performs its own BLE scan and connection.

## Supported mobile workflows

The supported mobile paths include:

- PN532Killer Reader, Emulator, and Sniffer mode control
- MIFARE Classic dump download and upload through MTools USB
- MFKey32v2 and MFKey64 workflows for authorized PN532Killer testing
- MCT for MIFARE Classic workflows
- MUT for MIFARE Ultralight workflows
- Terminal for supported direct command interactions
- UID Changer, UMC, and the other tools exposed by MTools BLE

Use only tags and systems you own or are authorized to test. Mobile apps can store dumps and recovered keys in shared storage or backups; remove sensitive files when the work is complete.

## Connection troubleshooting

| Symptom | Check |
| --- | --- |
| Android never shows a USB permission dialog | Confirm OTG/USB host support, use a data cable, reconnect, and unlock the phone |
| MTools sees no device over USB | Set Host Interface to `USB` and close other apps using the USB serial device |
| MTools BLE sees no PN532Killer-BLE | Install and power the BLE extension, select Host Interface `BLE`, and move the phone closer |
| BLE connects but commands fail | Disconnect other phones, restart the app connection, and verify firmware/app compatibility |
| Transfer stops partway | Keep the device powered and close; retry over USB for large or recovery-critical transfers |

See [Bluetooth extension](../guides/bluetooth-extension.md) for hardware setup. Firmware updates are a separate [PN532 CLI or Windows workflow](../getting-started/firmware-update.md), not a function of either MTools app.
