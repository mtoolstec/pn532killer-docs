# Quickstart

This path verifies a PN532 or PN532Killer over USB with the same PN532 CLI.

## 1. Connect the hardware

Use a USB data cable and avoid an unpowered hub. On Windows, check **Ports (COM & LPT)** for the CH343 serial port. If it is absent, install the [CH343 driver](../software/ch343-driver.md).

On macOS or Linux, compare the serial-device list before and after connection:

```bash
# macOS
ls /dev/cu.*

# Linux
ls /dev/ttyUSB* /dev/ttyACM* 2>/dev/null
```

For PN532Killer, keep **Settings → Host Interface** on **USB** during initial setup.

## 2. Install the PN532 CLI

For the firmware updater, emulator export, MFKey helpers, and recovery commands documented here, install the beta development channel:

```bash
git clone --branch dev https://github.com/whywilson/pn532-python.git
cd pn532-python
python3 -m pip install -r script/requirements.txt
python3 script/pn532_cli_main.py
```

The repository publishes packaged beta builds as `beta.*` prereleases. Use `main` instead when you need the stable branch's high-level `ntag read` and `ntag write` commands.

## 3. Connect and identify the device

```text
hw connect
hw version
```

The connection result identifies `PN532` or `PN532Killer`. If auto-detection does not select the right port, specify it:

```text
hw connect -p COM3
hw connect -p /dev/ttyUSB0
```

For frame-level diagnostics, run `debug on` and reproduce the operation.

## 4. Perform a safe scan

On PN532Killer, explicitly return to Reader mode first:

<CommandCard title="Enter Reader mode" command="hw mode r" availability="PN532Killer" description="Stops any active Emulator or Sniffer session and restores reader operation." />

Then use the same non-destructive scan on either device:

```text
hf 14a scan
```

PN532Killer also exposes ISO/IEC 15693:

```text
hf 15 scan
hf 15 info
```

Start with reads. Do not write a full dump until you understand manufacturer blocks, access conditions, lock bytes, and counters.

## Next steps

- [PN532 CLI guide](../software/python-cli.md)
- [Complete command reference](../reference/command-reference.md)
- [Reader mode](../guides/reader-mode.md)
- [MIFARE Classic recovery](../guides/mifare-classic-recovery.md)
- [Emulator mode](../guides/emulator-mode.md)
- [Sniffer overview](../sniffer/README.md)
