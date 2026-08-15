# MIFARE Classic recovery

The PN532 CLI beta provides several authorized key-audit and recovery workflows. They are not interchangeable: start with known keys and dictionary checks, then use a nonce-based workflow only when the card and hardware support it.

::: danger Authorized systems only
Use these commands only on tags and systems you own or have explicit permission to assess. Recovered keys and dumps are credentials; store them securely and remove them when the assessment is complete.
:::

## Choose a workflow

| Command | What it does | Hardware notes |
| --- | --- | --- |
| `hf mf chk` / `fchk` | Tests supplied and default keys over a sector range | PN532 or PN532Killer |
| `hf mf mfoc` | Discovers dictionary keys and attempts a dump | PN532 or PN532Killer |
| `hf mf autopwn` | Runs dictionary discovery, optionally adds Static Nested, then dumps readable data | PN532; PN532Killer required for the nested stage |
| `hf mf staticnested` | Recovers one target key from a known key on a static-nonce card | PN532Killer and native helper |
| `hf mf nestedattack` | Repeats the Static Nested workflow across sectors | PN532Killer and native helper |
| `hf mf darkside` | Collects Darkside data for one block/key type | Native PN532Killer path; results depend on the card and capture path |
| `hf mf mfkey32v2` / `mfkey64` | Downloads Sniffer records and runs the matching helper | PN532Killer and native helper |

The current `hardnested` command is a compatibility entry that routes to `nestedattack`. It is not a native hardnested solver in this beta.

## Build the helper programs

Packaged `beta.*` releases include platform-specific helpers. From a source checkout, build them before using MFKey or Static Nested:

```bash
chmod +x script/build_helpers.sh
./script/build_helpers.sh
```

This produces the `mfkey32v2`, `mfkey64`, and `staticnested` executables under `build/`.

## Start with a dictionary check

Return PN532Killer to Reader mode first; omit `hw mode r` for a standard PN532:

```text
hw mode r
hf mf chk --key FFFFFFFFFFFF --dump-keys found-keys.txt
```

Add a dictionary file and limit the sector range when appropriate:

```text
hf mf chk -k keys.txt --start-sector 0 --end-sector 15 --dump-keys found-keys.txt
```

Use `--no-default-keys` if the built-in defaults must not be tested. `hf mf fchk` currently exposes the same options as `chk`.

## Dictionary discovery and dump

`mfoc` is an integrated CLI workflow: it tests supplied/default keys and dumps the blocks it can authenticate. It does not invoke the external `mfoc` program or perform every cryptographic attack associated with that name.

```text
hf mf mfoc -k keys.txt -O authorized-card.bin --show-missing
```

`autopwn` adds an optional PN532Killer Static Nested stage when a known key is supplied, then writes the recovered dump:

```text
hf mf autopwn -k keys.txt -O authorized-card.bin \
  --known-key FFFFFFFFFFFF --known-block 4 --known-key-type A \
  --show-missing --show-raw
```

On a standard PN532, or with `--skip-nested`, `autopwn` remains a dictionary-based workflow.

## Recover one Static Nested target

Supply a verified source key and the exact target block/key type:

```text
hf mf staticnested \
  --known-key FFFFFFFFFFFF \
  --known-block 4 \
  --known-key-type A \
  --target-block 8 \
  --target-key-type A \
  --show-raw
```

For multiple sectors, use the recursive wrapper:

```text
hf mf nestedattack \
  --known-key FFFFFFFFFFFF \
  --known-block 4 \
  --known-key-type A \
  --target-key-type both \
  --start-sector 0 --end-sector 15 \
  --stop-on-fail --show-raw
```

Static Nested works only when the target exhibits compatible static-nonce behavior. An incorrect source key, the wrong block/key type, access conditions, or poor RF coupling will prevent recovery.

## Darkside and Sniffer-derived helpers

For an authorized Darkside test, select one block and key type:

```text
hf mf darkside --block 4 --key-type A --show-raw
```

For MFKey workflows, collect the permitted interaction in Sniffer mode and then run the matching analysis command:

```text
hf mf mfkey32v2 --show-raw
hf mf mfkey64 --show-raw
```

See [Sniffer workflows](../sniffer/README.md) for capture setup. If a command fails, confirm the beta build, helper executable, firmware version, card behavior, and antenna alignment before changing parameters.
