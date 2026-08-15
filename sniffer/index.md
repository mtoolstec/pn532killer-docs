# Sniffer overview

PN532Killer provides MIFARE Classic capture modes for authorized research. The PN532 CLI is used to prepare the target identity and select the capture mode.

## Choose a workflow

| Workflow | Original tag present | CLI mode |
| --- | --- | --- |
| MFKey32v2 | No | `hw mode s -t 0` |
| MFKey64 | Yes | `hw mode s -t 1` |

## CLI setup

<CommandCard title="Return to Reader mode" command="hw mode r" availability="PN532Killer" />

<CommandCard title="Set the capture identity" command="hf sniff setuid -u 11223344" availability="PN532Killer" />

<CommandCard title="Start capture without the original tag" command="hw mode s -t 0" availability="PN532Killer" description="Selects the MFKey32v2-oriented capture mode." />

`hf sniff setuid` also accepts a complete MIFARE Classic block 0 through `--blk0`.

After the authorized interaction, return to Reader mode:

<CommandCard title="Exit Sniffer mode" command="hw mode r" availability="PN532Killer" />

::: warning Current CLI boundary
The current PN532 CLI does not register a high-level command to download Sniffer logs or run MFKey32v2/MFKey64 decoding. Use supported MTools/Windows software for capture retrieval and analysis, or implement the documented low-level log commands.
:::

Capture records can contain access credentials. Treat them as secrets and delete them when the authorized assessment is complete.
