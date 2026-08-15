# Windows tool

The PN532Killer Windows program provides a graphical interface for connection tests, reader operations, emulator-slot transfer, and supported Sniffer analysis.

## Connect

1. Install the [CH343 driver](ch343-driver.md).
2. Connect PN532Killer and note the COM port in Device Manager.
3. Extract the PN532Killer tool to a writable folder.
4. Open `PN532Killer.conf` and set the connection string to the detected port.

Example:

```ini
allow_autoscan = true
allow_intrusive_scan = false
device.name = "PN532Killer"
device.connstring = "PN532Killer_uart:COM12:115200"
english = true
```

Replace `COM12` with the actual port.

5. Start `PN532Killer.exe` and select **Test Connect**.

## If Test Connect fails

- Close any terminal, CLI, updater, or other program using the same COM port.
- Confirm the device host interface is set to USB.
- Try a different data cable and USB port.
- Recheck the port number after reconnecting the device.
- Start at `115200` baud before configuring a faster rate.

