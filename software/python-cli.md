# PN532 CLI

The open-source [PN532 CLI](https://github.com/whywilson/pn532-python) is the recommended interface for standard PN532 hardware and PN532Killer on Windows, macOS, and Linux. It detects the connected device and checks commands against its advertised capability set.

## Choose a release channel

| Channel | Source | Recommended for |
| --- | --- | --- |
| Stable | `main` branch / stable release | Established reader, writer, magic-tag, emulator-load, and mode workflows |
| Beta | `dev` branch / `beta.*` prerelease | CLI firmware upgrade, emulator export, MFKey helpers, Static Nested, dictionary and recovery workflows |

The repository currently publishes the beta channel from the `dev` branch. There is no remote branch literally named `beta`; beta builds are tagged as `beta.<commit>`. Download a packaged build from the [PN532 CLI releases page](https://github.com/whywilson/pn532-python/releases), or install the branch from source below.

::: warning Beta software
The `dev` branch can diverge from `main`. Confirm command help in the installed build, use only official PN532Killer firmware, and keep backups before writing tags, emulator slots, or device firmware.
:::

## Install the beta from source

Requirements:

- Python 3.9 or later
- Git
- Access to the USB serial port, or a TCP/UDP serial bridge for normal commands
- A C compiler and POSIX-compatible shell only when building the optional MFKey/Static Nested helpers yourself

```bash
git clone --branch dev https://github.com/whywilson/pn532-python.git
cd pn532-python
python3 -m pip install -r script/requirements.txt
python3 script/pn532_cli_main.py
```

On Windows, use `python` instead of `python3` when appropriate. Packaged beta releases already bundle platform builds and the helper executables.

To run MFKey32v2, MFKey64, or Static Nested from a source checkout, build their native helpers once:

```bash
chmod +x script/build_helpers.sh
./script/build_helpers.sh
```

The script creates `build/mfkey32v2`, `build/mfkey64`, and `build/staticnested` (with `.exe` on Windows-compatible toolchains).

## Connect

<CommandCard title="Auto-detect a device" command="hw connect" description="Searches serial ports and identifies PN532 or PN532Killer." />

Or provide an explicit transport:

```text
hw connect -p COM3
hw connect -p /dev/ttyUSB0
hw connect -p tcp:192.0.2.10:5000
hw connect -p udp:192.0.2.10:5000
```

Then check the firmware:

```text
hw version
```

Close other applications that may own the serial port. Firmware upgrade requires a direct local serial port, not a TCP/UDP bridge.

## Discover commands

Enter a group without a subcommand to see its installed-version help:

```text
hw
hw led
hf
hf mf
hf mf sniffer
hf mfu
hf 15
```

Use `debug on` to display low-level traffic and `debug off` to return to normal output.

## Shared reader workflows

These commands are registered for standard PN532 and PN532Killer:

```text
hf 14a scan
hf mf rdbl --blk 4 -a -k FFFFFFFFFFFF
hf mf dump -k keys.json --file classic.json --bin classic.bin
hf mfu rdbl -b 4
```

The beta adds dictionary checking and integrated MIFARE Classic workflows:

```text
hf mf chk --key FFFFFFFFFFFF --dump-keys found-keys.txt
hf mf mfoc -k keys.txt -O card.bin
hf mf autopwn -k keys.txt -O card.bin --show-missing
```

See [MIFARE Classic recovery](../guides/mifare-classic-recovery.md) for the exact distinctions and safety boundaries.

## PN532Killer beta workflows

```text
hw mode r
hw led on
hf 15 scan
hf mf eRead -s 1 --json --bin
hf mfu eRead -s 1 --json --bin
hf 15 eread -s 1 --json --bin
hf mf sniffer setuid -u 11223344
hw mode s -t 0
hf mf mfkey32v2 --show-raw
```

The beta can also update PN532Killer firmware directly:

```text
hw connect -p COM3
hw fw --bin PN532Killer-firmware.bin
```

Follow the interactive DFU instructions exactly. See [Firmware update](../getting-started/firmware-update.md) before using this command.

## Beta command changes

- `hf sniff setuid` moved to `hf mf sniffer setuid`.
- `hf mf eRead`, `hf mfu eRead`, and `hf 15 eread` export emulator data.
- `hf mf mfkey32v2`, `mfkey64`, and `staticnested` retrieve PN532Killer data and invoke bundled native helpers.
- `hf mf hardnested` is currently a compatibility/fallback entry that routes to `nestedattack`; it is not a native hardnested solver.
- The `dev` command tree currently does not register the stable branch's `ntag read` and `ntag write` commands. Use the stable channel when those high-level NDEF commands are required.

See the [complete beta command reference](../reference/command-reference.md).
