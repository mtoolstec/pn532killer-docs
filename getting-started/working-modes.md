# Working modes

PN532Killer adds three working modes to the standard PN532 command set. A standard PN532 stays in reader operation and does not support `hw mode`.

## Reader / PN532 mode

<CommandCard
  title="Enter Reader mode"
  command="hw mode r"
  availability="PN532Killer"
  description="Stops the active extended mode and restores PN532-compatible reader operation."
/>

Use Reader mode for normal `hf 14a`, `hf mf`, `hf mfu`, `ntag`, and PN532Killer `hf 15` operations. Return here before moving directly between Emulator and Sniffer modes.

## Emulator mode

<CommandCard
  title="Enter Emulator mode"
  command="hw mode e -t TYPE -s SLOT"
  availability="PN532Killer"
  description="Activates one prepared emulator profile. Replace TYPE and SLOT with the values below."
/>

| Type | Profile |
| ---: | --- |
| `1` | MIFARE Classic |
| `2` | MIFARE Ultralight / NTAG |
| `3` | ISO/IEC 15693 |
| `4` | EM4100, with supported extension |

The CLI shows slots as 1–8. Prepare the correct slot data before enabling it; the underlying protocol indexes those same slots as 0–7.

## Sniffer mode

<CommandCard
  title="Sniff without the original tag"
  command="hw mode s -t 0"
  availability="PN532Killer"
  description="Selects the capture mode used by the authorized MFKey32v2 workflow."
/>

<CommandCard
  title="Sniff with the original tag"
  command="hw mode s -t 1"
  availability="PN532Killer"
  description="Selects the capture mode used by the authorized MFKey64 workflow."
/>

- Type `0`: capture without the original tag, used by the MFKey32v2 workflow.
- Type `1`: capture with the original authorized tag, used by the MFKey64 workflow.

Exit back to Reader mode after the intended interaction:

<CommandCard title="Exit Sniffer mode" command="hw mode r" availability="PN532Killer" />

The PN532 CLI beta retrieves and analyzes the captured records with `hf mf mfkey32v2` or `hf mf mfkey64`. Packaged beta releases include the helpers; source installations must build them with `./script/build_helpers.sh`.

::: danger Authorized use only
Capture only systems and credentials that you own or have explicit authorization to assess.
:::
