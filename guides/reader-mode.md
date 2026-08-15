---
title: PN532Killer Reader mode
description: Use PN532 CLI Reader mode for ISO14443A, MIFARE Classic, Ultralight, NTAG, and PN532Killer ISO15693 operations.
---

# PN532Killer Reader mode

Reader mode exposes the shared PN532 interface and PN532Killer's additional ISO/IEC 15693 support.

## Start a session

<CommandCard title="Connect to the device" command="hw connect" description="Searches serial ports and identifies the device as PN532 or PN532Killer." />

<CommandCard title="Read device information" command="hw version" />

On PN532Killer, return to Reader mode before issuing reader commands:

<CommandCard title="Enter Reader mode" command="hw mode r" availability="PN532Killer" description="Returns PN532Killer to PN532-compatible reader operation before tag commands are issued." />

## ISO/IEC 14443 A

Identify a tag before performing any authenticated or write operation:

<CommandCard title="Scan an ISO/IEC 14443 A tag" command="hf 14a scan" availability="PN532 + PN532Killer" description="Performs a non-destructive scan and reports the detected tag identity." />

For protocol research, `hf 14a raw` exposes framing, CRC, timeout, and response options. Use `debug on` to inspect host/device traffic.

## MIFARE Classic

Read one known block or create a backup using authorized keys:

```text
hf mf rdbl --blk 4 -a -k FFFFFFFFFFFF
hf mf dump -k keys.json --file classic.json --bin classic.bin
```

Use `hf mf wrbl` only after checking the block number and access conditions. Sector trailers and block 0 need particular care.

## MIFARE Ultralight and NTAG

```text
hf mfu rdbl -b 4
hf mfu dump --file tag.json --bin tag.bin
```

The stable `main` branch also exposes high-level `ntag read` and `ntag write` NDEF commands. They are not registered in the current beta `dev` command tree, so use `hf mfu` on beta or switch to the stable channel for those helpers.

## ISO/IEC 15693 — PN532Killer

```text
hf 15 scan
hf 15 info
```

The `hf 15` group also contains block read/write, dump, raw, magic-tag, and emulator commands. Enter `hf 15` or a subcommand for its installed-version help.

## Reliable positioning

Center one tag over the antenna and keep metal, batteries, and unrelated tags away from the field. Read and save a backup before writing, then verify the changed data with another read.
