# Use with libnfc

PN532Killer can work with libnfc through its PN532-compatible high-speed UART interface. Extended PN532Killer modes are not exposed by standard libnfc commands.

## Install libnfc

On macOS with Homebrew:

```bash
brew install libnfc
```

On Linux, install the `libnfc` package supplied by your distribution or build a current release from the [libnfc repository](https://github.com/nfc-tools/libnfc).

## Configure the serial connection

Find the serial port, then add a device entry to `libnfc.conf`. The file location depends on the package and operating system.

```ini
device.name = "PN532Killer"
device.connstring = "pn532_uart:/dev/tty.usbmodem14201"
```

Replace the example device path. Ensure PN532Killer is in Reader/PN532 mode and the port is not open in another program.

## Test

```bash
nfc-list
```

With a supported tag on the antenna, `nfc-list` should report a PN532 device and target information.

## Notes

- Begin at a standard supported UART rate before testing faster settings.
- libnfc's MIFARE tools can modify tag data. Make a backup and use only authorized tags.
- A message that no target was found can mean that the reader opened successfully but no compatible tag is in the field.

