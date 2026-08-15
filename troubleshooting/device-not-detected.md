# Device not detected

## No port appears

1. Replace the cable with a known USB data cable.
2. Connect directly to another USB port.
3. Disconnect the BLE extension temporarily if the power state is unclear.
4. Check Device Manager on Windows or `/dev` serial nodes on macOS/Linux.
5. Install or update the [CH343 driver](../software/ch343-driver.md).
6. Test on another computer to separate host and hardware problems.

## The port exists but connection fails

1. Close every program that might have opened the port.
2. Set the device host interface to USB.
3. Start with `115200` baud.
4. Reconnect the device and reselect the port; its name may change.
5. In the PN532 CLI, run `debug on`, reconnect, and inspect whether any ACK is received.
6. Return to Reader/PN532 mode before connecting generic PN532 software.

## Intermittent disconnects

- Avoid loose adapters and unpowered hubs.
- Do not move the extension cable while powered.
- Lower the configured UART rate.
- Keep high-current or noisy RF equipment away from the USB cable.
- Confirm that the host is not suspending the USB port.
