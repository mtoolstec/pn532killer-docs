# Bluetooth extension

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
4. Open MTools BLE on Android or iOS and connect to PN532Killer.

MTools BLE supports mode control, slot transfer, tag identification, and supported MFKey workflows.

## Return to USB

Change **Host Interface** back to **USB** before connecting a USB host application. On supported firmware, hold the switch for about five seconds; release it after the red LED flashes to request a forced return to USB.

## Connection tips

- Keep the device close to the phone during pairing and initial transfers.
- Disconnect other phones or host applications before switching interfaces.
- Large dump transfers are more sensitive to power and radio interruptions.
- If BLE is visible but an application cannot communicate, confirm that the device host interface is set to BLE rather than USB.

