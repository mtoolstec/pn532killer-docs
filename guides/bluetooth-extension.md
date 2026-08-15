---
title: PN532Killer Bluetooth extension and MTools BLE
description: Install the PN532Killer LF/BLE extension and connect MTools BLE on Android, iPhone, or iPad for wireless RFID workflows.
---

# PN532Killer Bluetooth extension and MTools BLE

The LF/BLE extension adds portable power, Bluetooth Low Energy, a screen and switch, and supported low-frequency features.

## Install the extension

1. Disconnect USB and power off the hardware.
2. Align and connect the extension cable.
3. Secure the boards with the intended mounting hardware.
4. Power on and confirm that the display starts normally.

## Switch the host interface to BLE

1. Open **Settings** on the device.
2. Select **Host Interface**.
3. Choose **BLE** and confirm the selection.
4. Install MTools BLE from [Google Play](https://play.google.com/store/apps/details?id=com.mtoolstec.mtoolsLite) or the [Apple App Store](https://apps.apple.com/us/app/mtools-ble-rfid-reader/id1531345398).
5. Open MTools BLE, scan for devices, and connect to **PN532Killer-BLE**.
6. Open **Tools → PN532Killer** to control PN532Killer and switch supported modes.

MTools BLE also provides MCT, MUT, Terminal, UID Changer, UMC, and other RFID tools. It does not support updating PN532Killer firmware over BLE or OTA.

For the complete app comparison and permission steps, see [MTools mobile apps](../software/mobile-apps.md).

## Return to USB

Change **Host Interface** back to **USB** before connecting a USB host application. On supported firmware, hold the switch for about five seconds; release it after the red LED flashes to request a forced return to USB.

## Connection tips

- Keep the device close to the phone during pairing and initial transfers.
- Disconnect other phones or host applications before switching interfaces.
- Large dump transfers are more sensitive to power and radio interruptions.
- If PN532Killer-BLE is visible but the app cannot communicate, confirm that the device host interface is set to BLE rather than USB.
- If the app cannot discover the device, grant Android's nearby-device permission or iOS Bluetooth permission, then scan again inside MTools BLE.
