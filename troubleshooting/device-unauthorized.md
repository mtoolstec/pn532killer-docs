# Device Unauthorized

The `Device Unauthorized` message indicates that stored device configuration is invalid. A reported cause is incorrect serial control-line or configuration data written after a Windows USB-serial driver change.

In this state, basic Reader mode may still work while pressing the switch makes the error return.

## Recommended recovery

1. Disconnect other serial applications.
2. Install the current [PN532 CLI](../software/python-cli.md).
3. Connect with `hw connect` at the default USB serial settings.
4. Use the recovery command sequence from the official [Device Unauthorized guide](https://pn532killer.com/tutorial/how-to-fix-device-unauthorized), or contact support with the hardware revision and firmware version.
5. Reboot and verify the host interface, UART rate, and device menu.

::: warning
The recovery writes low-level configuration. Do not substitute values from another model or send random raw frames. Incorrect configuration data may require firmware recovery.
:::

After recovery, prevent Windows or serial utilities from toggling unsupported control-line settings or sending data automatically when the port opens.
