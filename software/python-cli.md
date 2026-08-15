# PN532 CLI

The open-source [PN532 CLI](https://github.com/whywilson/pn532-python) is the recommended way to control both standard PN532 hardware and PN532Killer on Windows, macOS, and Linux. The same `hw`, `hf`, and `ntag` command structure is used for both devices. After connection, the CLI detects the device and rejects commands its firmware does not advertise.

## Requirements

- Python 3.9 or later
- Git
- Access to the USB serial port, or the address of a TCP/UDP serial bridge

## Install and start

```bash
git clone https://github.com/whywilson/pn532-python.git
cd pn532-python
python3 -m pip install -r script/requirements.txt
python3 script/pn532_cli_main.py
```

On Windows, use `python` instead of `python3` when appropriate.

## Connect

Let the CLI search serial ports:

```text
hw connect
hw version
```

Or provide an explicit transport:

```text
hw connect -p COM3
hw connect -p /dev/ttyUSB0
hw connect -p tcp:192.0.2.10:5000
hw connect -p udp:192.0.2.10:5000
```

Successful output identifies the connection as `PN532` or `PN532Killer`. Close other applications that may own the serial port.

## Discover commands

Enter a command group without a subcommand to see the choices at that level:

```text
hw
hf
hf mf
hf 15
ntag
```

Use `debug on` to display low-level traffic and `debug off` to return to normal output.

## Shared PN532 workflows

These common reader commands work on either supported device:

```text
hf 14a scan
hf mf rdbl --blk 4 -a -k FFFFFFFFFFFF
hf mf dump -k keys.json --file classic.json --bin classic.bin
hf mfu rdbl -b 4
ntag read --dump
```

Only write to tags you own and understand. Manufacturer blocks, access conditions, lock bytes, and counters may be irreversible.

## PN532Killer-only workflows

PN532Killer adds working modes, ISO/IEC 15693 commands, emulator slots, and Sniffer configuration:

```text
hw mode r
hf 15 scan
hf 15 info
hf mf eSetUid -s 1 -u 11223344
hw mode e -t 1 -s 1
hf sniff setuid -u 11223344
hw mode s -t 0
```

`hw mode`, `hf 15`, `hf mf eSetUid`, `hf mf eLoad`, and `hf sniff` are not standard PN532 commands.

::: warning Current CLI boundary
The current CLI can configure Sniffer mode, but it does not register a high-level command to download or decode captured MFKey32v2/MFKey64 records. Use the supported MTools or Windows workflow for that step, or integrate the low-level PN532Killer protocol.
:::

See the [complete command reference](../reference/command-reference.md) for the commands registered by the current CLI.
