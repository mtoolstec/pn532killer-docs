# Firmware update

Firmware updates add protocol support, emulator features, host-interface improvements, and fixes. The official binaries are published in the [PN532Killer firmware repository](https://github.com/NFC-funs/PN532Killer/tree/main/Firmware).

## Before updating

- Confirm that the file is intended for PN532Killer and your hardware revision.
- Do not rename an unrelated binary to make it look compatible.
- Save important emulator slots and captured data.
- Use a stable USB connection and keep the host powered.
- Close serial applications that may already have the port open.

## Update on Windows

1. Install the [CH343 driver](../software/ch343-driver.md).
2. Download the official `Ad15xUpdateTool.zip` from the [PC tools directory](https://github.com/NFC-funs/PN532Killer/tree/main/PcTools).
3. Extract the archive and start the update tool.
4. Connect PN532Killer by USB.
5. Select the required `.bin` file.
6. Start the update and wait for the board to reboot.
7. Reconnect with the CLI or your application and verify the reported version.

## Update on Android

You need an Android phone with USB OTG and a current MTools version.

1. Open the firmware/DFU function in MTools.
2. Connect PN532Killer through an OTG adapter or cable.
3. Select the official `.bin` file.
4. Start flashing and keep the cable connected until completion.
5. If the updater cannot enter DFU automatically, follow the recovery procedure provided by the application.

## If the update fails

Do not repeatedly flash random firmware files. Disconnect other serial applications, reconnect the board in DFU mode, and follow [Recover after a failed update](../troubleshooting/firmware-recovery.md).

