# PN532 CLI beta command reference

This page follows the command tree currently registered by the PN532 CLI `dev` branch, which is distributed as `beta.*` prereleases. The branch can change; enter a group such as `hf mf` or a command followed by `-h` to verify the installed build.

## Hardware and session

```text
hw connect [-p PORT]
hw version
hw wakeup
hw raw [-d DATA]
hw led on
hw led off
hw mode r
hw mode e [-t TYPE] [-s SLOT]
hw mode s [-t TYPE]
hw fw --bin BIN
debug [on|off]
clear
exit
```

`hw connect` auto-detects a serial device or accepts `COM3`, `/dev/ttyUSB0`, `tcp:host:port`, or `udp:host:port`. Firmware upgrade requires a local serial port. `hw led`, `hw mode`, and `hw fw` are PN532Killer features.

| Mode | Command | Type values |
| --- | --- | --- |
| Reader | `hw mode r` | None |
| Emulator | `hw mode e -t TYPE -s SLOT` | `1` MIFARE Classic, `2` MFU, `3` ISO15693, `4` EM4100 |
| Sniffer | `hw mode s -t TYPE` | `0` without original tag, `1` with original tag |

The CLI presents emulator slots as 1–8.

### Firmware update

```text
hw connect -p COM3
hw fw --bin PN532Killer-firmware.bin
```

The command remembers the connected port, prompts for manual DFU entry, writes at the bootloader rate, verifies block CRCs, and reboots after a successful comparison. Read [Firmware update](../getting-started/firmware-update.md) before running it.

## ISO/IEC 14443 A

```text
hf 14a scan
hf 14a raw [-a] [-s] [-d HEX] [-b BITS] [-c] [-r] [-cc] [-k] [-t TIMEOUT]
hf 14a gen4pwd [--start HEX]
```

Use `scan` first. `raw` is intended for protocol development and can change tag state when its payload is a write command.

## MIFARE Classic read, write, and magic-tag operations

```text
hf mf setuid [-u UID] [--blk0 HEX] [-g GEN] [-k KEY] [-b] [--lock] [-p PWD]
hf mf rdbl [--blk BLOCK] [-a|-b] [-k KEY]
hf mf wrbl [--blk BLOCK] [-a|-b] [-k KEY] [-d DATA]
hf mf cview [--file FILE] [--bin FILE]
hf mf dump [-k KEY_FILE] [--file JSON] [--bin BIN]
hf mf wipe -k KEY_FILE
hf mf restore [-f FILE] [-g SIZE]
```

Example:

```text
hf 14a scan
hf mf rdbl --blk 4 -a -k FFFFFFFFFFFF
hf mf dump -k keys.json --file classic.json --bin classic.bin
```

## MIFARE Classic key workflows — beta

```text
hf mf chk [-k FILE] [--key KEY] [--no-default-keys]
          [--start-sector N] [--end-sector N] [--dump-keys FILE]
hf mf fchk [same options as chk]
hf mf mfoc [-k FILE] [--key KEY] [--no-default-keys] [-O FILE] [--show-missing]
hf mf autopwn [-k FILE] [--key KEY] [--no-default-keys] [-O FILE]
              [--show-missing] [--known-key KEY] [--known-block BLOCK]
              [--known-key-type A|B] [--skip-nested] [--show-raw]
hf mf staticnested --known-key KEY --known-block BLOCK
                   [--known-key-type A|B] --target-block BLOCK
                   [--target-key-type A|B] [--show-raw]
hf mf nestedattack --known-key KEY --known-block BLOCK
                   [--known-key-type A|B] [--target-key-type A|B|both]
                   [--start-sector N] [--end-sector N]
                   [--stop-on-fail] [--show-raw]
hf mf nested [--show-raw] CARD BLOCK A|B KEY [FLAGS]
hf mf darkside --block BLOCK [--key-type A|B] [--show-raw]
hf mf hardnested --known-key KEY --known-block BLOCK
                 [--known-key-type A|B] [--target-key-type A|B|both]
                 [--start-sector N] [--end-sector N]
                 [--stop-on-fail] [--show-raw]
```

Important distinctions:

- `chk` tests built-in and supplied dictionary keys; `fchk` is a PM3-compatible alias.
- `mfoc` currently performs the project-built dictionary/discovery and dump flow without a system `mfoc` dependency.
- `autopwn` combines dictionary probing, an optional PN532Killer static-nested stage, and dump output.
- `staticnested` targets one key; `nestedattack` applies the PN532Killer static-nested helper recursively across a sector range.
- `nested` is a compatibility wrapper for the built-in `nestedattack` pipeline.
- `hardnested` currently routes to `nestedattack`; a native hardnested solver is not integrated.
- `darkside` performs native PN532Killer nonce acquisition. The beta contains a fallback path for other devices, but support depends on the available capture path and helper data.

See [MIFARE Classic recovery](../guides/mifare-classic-recovery.md) for practical, authorized examples.

## Sniffer capture analysis — beta

```text
hf mf sniffer setuid [-u UID] [--blk0 HEX]
hw mode s -t 0
hw mode s -t 1
hf mf mfkey32v2 [--show-raw]
hf mf mfkey64 [--show-raw]
```

`mfkey32v2`, `mfkey64`, and `staticnested` require the native helper binaries bundled in packaged beta releases or built with `script/build_helpers.sh`.

The low-level implementation can clear the PN532Killer Sniffer buffer, but the current `dev` interactive tree does not register the README-mentioned `hf sniff clear` command. Do not rely on it until it appears in built-in help.

## Emulator slot import and export — beta

MIFARE Classic:

```text
hf mf eRead [-s SLOT] [--json] [--bin]
hf mf eSetUid [-s SLOT] [-u UID]
hf mf eLoad [-s SLOT] [--bin BIN] [--json JSON]
```

MIFARE Ultralight:

```text
hf mfu eRead [-s SLOT] [--json] [--bin]
hf mfu rdbl [-b PAGE]
hf mfu wrbl -b PAGE -d HEX
hf mfu dump [--file JSON] [--bin BIN]
hf mfu setuid [-u UID]
```

`eRead` switches to the requested PN532Killer emulator slot and can save JSON, binary, or both formats.

## ISO/IEC 15693 — PN532Killer

```text
hf 15 scan
hf 15 info
hf 15 rdbl [-b BLOCK]
hf 15 wrbl [-b BLOCK] [-d HEX]
hf 15 dump [--json] [--bin]
hf 15 raw [-d HEX] [-c] [-r] [-sc]
hf 15 gen1uid [-u UID]
hf 15 gen2uid [-u UID]
hf 15 gen2config -s SIZE [-a HEX] [-d HEX] [-i HEX]
hf 15 eread [-s SLOT] [-c COUNT] [--json] [--bin]
hf 15 eSetUid [-u UID] [-s SLOT]
hf 15 eSetBlock [-b BLOCK] [-s SLOT] [-d HEX]
hf 15 eSetDump [--json FILE] [--bin FILE] [-s SLOT]
hf 15 eSetwriteprotect [-s SLOT] [-w]
hf 15 eSetResvEasAfiDsfid [-s SLOT] [-r HEX] [-e HEX] [-a HEX] [-d HEX]
```

The beta adds `hf 15 eread` for exporting ISO15693 emulator data. `-c` controls the requested block count.

## Stable-only NDEF command note

The stable `main` branch registers high-level `ntag read` and `ntag write` commands. The current `dev` command tree does not register them, even though lower-level NTAG-related code remains. Use built-in help and choose the stable channel when these commands are required.

## Low-level PN532Killer protocol

| Command | Code | Purpose |
| --- | --- | --- |
| Read emulator data | `0x1C` | Read supported emulator data |
| Write emulator data | `0x1E` | Write supported emulator data |
| Read Sniffer log | `0x20` | Retrieve capture records |
| Clear Sniffer log | `0x22` | Clear stored capture records |
| Read user-defined data | `0x24` | Static Nested and extended workflows |
| Check PN532Killer | `0xAA` | Identify extended hardware |
| Set work mode | `0xAC` | Select Reader, Emulator, or Sniffer mode |

For byte layouts, use the version-controlled [PN532Killer Command document](https://github.com/NFC-funs/PN532Killer/blob/main/PN532Killer%20Command-V0.1.md).

::: danger Authorized use only
Key-recovery and capture commands can expose access credentials. Run them only against systems you own or are explicitly authorized to assess, and protect or delete the resulting keys and dumps.
:::
