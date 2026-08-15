---
title: PN532Killer Sniffer and MFKey workflows
description: Configure PN532Killer Sniffer mode and analyze authorized MIFARE Classic captures with MFKey32v2 or MFKey64 through PN532 CLI beta.
---

# PN532Killer Sniffer and MFKey workflows

PN532Killer provides MIFARE Classic capture modes for authorized research. The PN532 CLI beta can prepare the target identity, select the capture mode, retrieve the records, and run the bundled MFKey helper.

## Choose a workflow

| Workflow | Original tag present | CLI mode |
| --- | --- | --- |
| MFKey32v2 | No | `hw mode s -t 0` |
| MFKey64 | Yes | `hw mode s -t 1` |

## CLI setup

<CommandCard title="Return to Reader mode" command="hw mode r" availability="PN532Killer" />

<CommandCard title="Set the capture identity" command="hf mf sniffer setuid -u 11223344" availability="PN532Killer · beta" />

<CommandCard title="Start capture without the original tag" command="hw mode s -t 0" availability="PN532Killer" description="Selects the MFKey32v2-oriented capture mode." />

`hf mf sniffer setuid` also accepts a complete MIFARE Classic block 0 through `--blk0`.

After the authorized interaction, return to Reader mode:

<CommandCard title="Exit Sniffer mode" command="hw mode r" availability="PN532Killer" />

Run the helper that matches the selected capture mode:

```text
hf mf mfkey32v2 --show-raw
hf mf mfkey64 --show-raw
```

Packaged `beta.*` releases include the native helpers. A source checkout must run `./script/build_helpers.sh` first. The command retrieves the PN532Killer Sniffer records and passes them to the matching helper.

::: warning Clearing old captures
The current `dev` interactive command tree does not register the repository README's `hf sniff clear` command, even though a low-level clear operation exists. Do not assume that command is available; verify the record set before interpreting a result.
:::

Capture records can contain access credentials. Treat them as secrets and delete them when the authorized assessment is complete.
