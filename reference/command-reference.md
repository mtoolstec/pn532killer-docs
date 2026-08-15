# PN532 CLI command reference

This page lists the command tree registered by the current [PN532 CLI](https://github.com/whywilson/pn532-python). Enter a group such as `hf mf` at the prompt to display its installed-version help. Optional arguments are shown in brackets.

## Hardware and session

```text
hw connect [-p PORT]
hw version
hw wakeup
hw raw [-d DATA]
hw mode r
hw mode e [-t TYPE] [-s SLOT]
hw mode s [-t TYPE]
debug [on|off]
clear
exit
```

`hw connect` auto-detects a serial device or accepts `COM3`, `/dev/ttyUSB0`, `tcp:host:port`, or `udp:host:port`. `hw mode` is PN532Killer-only.

Mode values:

| Mode | Command | Type values |
| --- | --- | --- |
| Reader | `hw mode r` | None |
| Emulator | `hw mode e -t TYPE -s SLOT` | `1` MIFARE Classic, `2` MFU/NTAG, `3` ISO15693, `4` EM4100 |
| Sniffer | `hw mode s -t TYPE` | `0` without original tag, `1` with original tag |

The CLI presents emulator slots as 1–8.

## ISO/IEC 14443 A

```text
hf 14a scan
hf 14a raw [-a] [-s] [-d HEX] [-b BITS] [-c] [-r] [-cc] [-k] [-t TIMEOUT]
hf 14a gen4pwd [--start HEX]
```

Use `scan` first. `raw` is for protocol development and can change tag state when its payload is a write command.

## MIFARE Classic

```text
hf mf setuid ...
hf mf rdbl [--blk BLOCK] [-a|-b] [-k KEY]
hf mf wrbl [--blk BLOCK] [-a|-b] [-k KEY] [-d DATA]
hf mf cview [--file FILE] [--bin FILE]
hf mf dump [-k KEY_FILE] [--file JSON] [--bin BIN]
hf mf wipe -k KEY_FILE
hf mf restore [-f FILE] [-g SIZE]
```

Reader example:

```text
hf 14a scan
hf mf rdbl --blk 4 -a -k FFFFFFFFFFFF
hf mf dump -k keys.json --file classic.json --bin classic.bin
```

Magic-card and emulator helpers:

```text
hf mf eSetUid [-s SLOT] [-u UID]
hf mf eLoad [-s SLOT] [--bin BIN] [--json JSON]
```

Load a PN532Killer slot, then enable it:

```text
hf mf eLoad -s 1 --bin classic.bin
hw mode e -t 1 -s 1
```

## MIFARE Ultralight and NTAG

```text
hf mfu rdbl [-b PAGE]
hf mfu wrbl -b PAGE -d HEX
hf mfu dump [--file JSON] [--bin BIN]
hf mfu setuid [-u UID]

ntag read [--dump]
ntag write --uri URI
ntag write --text TEXT
ntag write --name NAME
ntag write --ssid SSID ...
ntag write --hex HEX
```

Enter `ntag write` for the complete record-specific options in your installed version.

## ISO/IEC 15693 — PN532Killer

```text
hf 15 scan
hf 15 info
hf 15 rdbl ...
hf 15 wrbl ...
hf 15 dump ...
hf 15 raw ...
hf 15 gen1uid ...
hf 15 gen2uid ...
hf 15 gen2config ...
hf 15 eSetUid ...
hf 15 eSetBlock ...
hf 15 eSetDump ...
hf 15 eSetwriteprotect ...
hf 15 eSetResvEasAfiDsfid ...
```

Begin with `hf 15 scan`, then use `hf 15 info`. Enter any subcommand without arguments to see its exact required fields.

## Sniffer configuration — PN532Killer

```text
hf sniff setuid [-u UID] [--blk0 HEX]
hw mode s -t 0
hw mode s -t 1
```

The current command tree configures the target identity and selects Sniffer mode. It does not expose a high-level capture-download or MFKey decoding command. Those steps currently require a supported graphical tool or a low-level integration.

## Low-level PN532Killer protocol

PN532Killer retains standard PN532 framing and adds vendor commands. Important command codes include:

| Command | Code | Purpose |
| --- | --- | --- |
| Read emulator data | `0x1C` | Read supported emulator data |
| Write emulator data | `0x1E` | Write supported emulator data |
| Read Sniffer log | `0x20` | Retrieve capture records for custom integrations |
| Clear Sniffer log | `0x22` | Clear stored capture records |
| Check PN532Killer | `0xAA` | Identify extended hardware |
| Set work mode | `0xAC` | Select Reader, Emulator, or Sniffer mode |

For byte layouts, use the version-controlled [PN532Killer Command document](https://github.com/NFC-funs/PN532Killer/blob/main/PN532Killer%20Command-V0.1.md).
