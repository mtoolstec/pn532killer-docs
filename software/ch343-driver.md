# Install the CH343 driver

PN532Killer uses a WCH CH343 USB-to-serial interface. Modern operating systems may install the driver automatically.

## Windows

1. Connect PN532Killer with a data-capable cable.
2. Open Device Manager and check **Ports (COM & LPT)**.
3. If the device is missing or shown with a warning, download the current CH343 driver from [WCH](https://www.wch-ic.com/downloads/CH343SER_EXE.html).
4. Run the installer as an administrator.
5. Reconnect the device and confirm that **USB-SERIAL CH343 (COMx)** appears.

Use the displayed `COM` number in the Windows tool, PN532 CLI, or other host application.

## macOS

Recent macOS versions may expose the serial device without a separate driver. Check:

```bash
ls /dev/cu.*
```

If no new port appears, use the current macOS driver provided by WCH and follow its signed installer instructions. Do not disable system security merely to install an old or untrusted package.

## Linux

Connect the device and inspect recent kernel messages and serial nodes:

```bash
dmesg | tail
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null
```

If the port exists but your user cannot open it, add the user to the distribution's serial-port group (commonly `dialout`) and sign in again. Avoid permanently granting world-writable permissions to the device.
