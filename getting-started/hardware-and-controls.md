# Hardware and controls

## Main board

The PN532Killer main board contains the high-frequency antenna, USB-to-serial interface, status LEDs, firmware storage, and the connector used by supported extensions.

The USB connector provides both power and the host data connection. Use a data-capable cable; charge-only cables are a common cause of connection failures.

## LF/BLE extension

The optional extension adds:

- Bluetooth Low Energy connectivity
- A battery and portable power
- A screen and navigation switch
- Low-frequency hardware for supported EM4100 workflows

Attach the extension only while power is disconnected. Align the cable correctly and secure the boards so that the connector cannot move during operation.

Use the extension with [MTools BLE on Android or iOS](../software/mobile-apps.md#connect-mtools-ble-on-android-or-ios). For a direct Android USB connection with MTools, the extension is not required.

## Enter switch

The switch confirms menu selections when a display extension is installed. On firmware that supports host-interface recovery, holding the switch for about five seconds restores the USB host interface; release it after the red LED flashes.

During firmware recovery, the switch may also be used to request DFU mode. See [Recover after a failed update](../troubleshooting/firmware-recovery.md).

## Status indicators

LED meaning depends on the current mode and firmware. In a completed MFKey64 capture, both red and green LEDs may remain on until the user exits the capture mode and saves the records.

Do not disconnect power while firmware is being written or while captured records are being saved.
