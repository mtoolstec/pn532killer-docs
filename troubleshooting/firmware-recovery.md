# Recover after a failed update

A failed or interrupted update is often recoverable by entering DFU mode and flashing a known-good official image again.

## Recovery procedure

1. Download the correct firmware from the official [Firmware directory](https://github.com/NFC-funs/PN532Killer/tree/main/Firmware).
2. Close every program using the CH343 serial port.
3. Disconnect PN532Killer.
4. Request DFU mode using the switch on the extension while reconnecting, as directed by the Windows or Android updater.
5. If you have only the main board, follow the official board-specific DFU contact instructions. Do not short pins based on a diagram for another revision.
6. Flash the known-good image without disconnecting power.
7. Reboot, reconnect at the default settings, and verify the firmware version.

## Stop and request support when

- the updater never detects a DFU device on two known-good hosts;
- the board becomes unusually hot;
- a connector or component is physically damaged;
- the hardware revision cannot be identified;
- the only available firmware image is not clearly intended for this device.

