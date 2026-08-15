---
title: PN532Killer Emulator mode
description: Load MIFARE Classic, Ultralight, NTAG, or ISO15693 data into PN532Killer emulator slots and select profiles with PN532 CLI.
---

# PN532Killer Emulator mode

PN532Killer Emulator mode presents one prepared slot to a compatible reader. Standard PN532 hardware does not support these commands.

## MIFARE Classic example

Create a compatible dump in Reader mode, load it into slot 1, then enable the slot:

<CommandCard title="Return to Reader mode" command="hw mode r" availability="PN532Killer" />

<CommandCard title="Create a MIFARE Classic backup" command="hf mf dump -k keys.json --file classic.json --bin classic.bin" description="Reads the authorized tag with the supplied key file and saves JSON and binary copies." />

<CommandCard title="Load emulator slot 1" command="hf mf eLoad -s 1 --bin classic.bin" availability="PN532Killer" />

<CommandCard title="Emulate MIFARE Classic from slot 1" command="hw mode e -t 1 -s 1" availability="PN532Killer" description="Type 1 selects MIFARE Classic; the CLI exposes slots 1–8." />

To configure only the emulated UID:

<CommandCard title="Set the UID in slot 1" command="hf mf eSetUid -s 1 -u 11223344" availability="PN532Killer" />

## ISO/IEC 15693 example

Use the `hf 15 eSetUid`, `eSetBlock`, or `eSetDump` command that matches the data you are preparing, then enable the same slot with type 3:

<CommandCard title="Prepare ISO/IEC 15693 identity" command="hf 15 eSetUid" availability="PN532Killer" />

<CommandCard title="Emulate ISO/IEC 15693 from slot 1" command="hw mode e -t 3 -s 1" availability="PN532Killer" />

Enter each `hf 15` subcommand without arguments to see the exact fields required by the installed CLI version.

## Type and slot mapping

| Type | Profile |
| ---: | --- |
| `1` | MIFARE Classic |
| `2` | MIFARE Ultralight / NTAG |
| `3` | ISO/IEC 15693 |
| `4` | EM4100, with supported extension |

The CLI uses slots 1–8. Confirm that the dump layout and type match, and finish loading data before entering Emulator mode.

## Troubleshooting

- Return to `hw mode r`, reload the slot, and enable it again.
- Confirm the UID length, family, and dump size match the target profile.
- Remove other tags and move the PN532Killer antenna closer to the reader.
- Test against a simple reader before a timing-sensitive system.

Emulation does not guarantee every analog, timing, cryptographic, or proprietary behavior of an original tag.
