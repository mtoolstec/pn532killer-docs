# Upload and download dumps

Use the PN532 CLI to create local backups and load supported PN532Killer emulator slots. Use MTools or the Windows tool when you need a graphical slot-transfer workflow.

## Create a local dump

MIFARE Classic:

```text
hw mode r
hf mf dump -k keys.json --file classic.json --bin classic.bin
```

MIFARE Ultralight:

```text
hf mfu dump --file mfu.json --bin mfu.bin
```

Keep the JSON output for readable metadata and the binary output for interoperable loading where supported.

## Load a MIFARE Classic emulator slot

```text
hw mode r
hf mf eLoad -s 1 --bin classic.bin
hw mode e -t 1 -s 1
```

The CLI also accepts a compatible JSON source through `hf mf eLoad -s 1 --json FILE`.

## ISO/IEC 15693 slots

Use `hf 15 eSetDump` to load compatible data or `hf 15 eSetBlock` for an individual block. Check the exact arguments with the command's built-in help, then select `hw mode e -t 3 -s SLOT`.

## Exporting a slot

The current CLI command tree does not provide a general high-level export command for every PN532Killer emulator slot. Use a supported MTools/Windows transfer function or integrate the low-level `0x1C` read-emulator command when a slot must be downloaded.

Before overwriting any slot, record its type and number and keep a verified backup. Dumps may contain credentials or personal data and should be stored securely.
