# Firmware update

The PN532 CLI beta can update PN532Killer firmware directly with `hw fw`. This workflow is PN532Killer-only and requires a direct USB serial connection.

## Before updating

- Download an official `.bin` intended for PN532Killer and your hardware revision from the [PN532Killer firmware repository](https://github.com/NFC-funs/PN532Killer/tree/main/Firmware).
- Export important emulator slots and capture results.
- Use a reliable USB data cable and keep the host powered.
- Close MTools, serial monitors, and other applications using the port.
- Do not use this command with a standard PN532 board.

::: danger Do not interrupt the write
Disconnecting power while flash blocks are being erased or written can leave the device in DFU recovery mode. Do not flash an unrelated or renamed binary.
:::

## Install the beta CLI

Use a packaged `beta.*` build from the [PN532 CLI releases](https://github.com/whywilson/pn532-python/releases), or install the development channel:

```bash
git clone --branch dev https://github.com/whywilson/pn532-python.git
cd pn532-python
python3 -m pip install -r script/requirements.txt
python3 script/pn532_cli_main.py
```

## Update from the interactive CLI

First connect to the local serial port so the CLI remembers it:

<CommandCard title="Connect to PN532Killer" command="hw connect -p COM3" availability="PN532 CLI beta" description="Replace COM3 with the PN532Killer serial port on your system." />

Confirm that the detected device and existing version are correct:

```text
hw version
```

Start the update with the official firmware file:

<CommandCard title="Start firmware update" command="hw fw --bin PN532Killer-firmware.bin" availability="PN532Killer · beta" description="The CLI switches to its interactive DFU sequence and reuses the serial port selected by hw connect." />

The CLI then asks you to:

1. Hold the PN532Killer button.
2. Unplug and reconnect the USB cable while continuing to hold the button.
3. Release the button after USB reconnects.
4. Press Enter in the CLI.

The updater opens the remembered port at `921600` baud, wakes the bootloader, reads its flash layout when available, erases and writes aligned blocks, and compares the resulting block CRCs with the firmware file. It reboots only after verification succeeds.

::: tip Port names can change
If the operating system assigns a different serial path after entering DFU, cancel safely before writing and use the standalone recovery command with the new path: `python3 script/dfu.py --port NEW_PORT --bin FILE --force`. Alternatively, return the device to normal mode, reconnect, and restart `hw fw`.
:::

## Verify after reboot

Reconnect and read the reported version:

```text
hw connect -p COM3
hw version
hw mode r
```

Perform a non-destructive `hf 14a scan` before restoring emulator data or starting another mode.

## Standalone DFU utility

The beta source tree also includes a lower-level standalone updater:

```bash
python3 script/dfu.py --port COM3 --bin PN532Killer-firmware.bin
```

Its `--force` option expects manual DFU entry and should be reserved for recovery when the normal interactive CLI path cannot be used.

## Other supported update paths

- **Windows:** the official `Ad15xUpdateTool` remains available in the [PC tools directory](https://github.com/NFC-funs/PN532Killer/tree/main/PcTools).
- **Android:** current MTools versions provide USB OTG firmware/DFU workflows.

If verification fails, stop, keep the USB connection stable, and follow [Recover after a failed update](../troubleshooting/firmware-recovery.md). Do not cycle through random firmware files.
