# MFKey64 — with tag

This PN532Killer workflow captures a complete MIFARE Classic authentication exchange while the original authorized tag is present.

## Configure with the PN532 CLI

<CommandCard title="Connect to PN532Killer" command="hw connect" />

<CommandCard title="Return to Reader mode" command="hw mode r" availability="PN532Killer" />

<CommandCard title="Start capture with the original tag" command="hw mode s -t 1" availability="PN532Killer" />

Place the original tag against the PN532Killer antenna and present both to the reader without changing their relative position. Repeat only the permitted interaction, then return to Reader mode:

<CommandCard title="Exit Sniffer mode" command="hw mode r" availability="PN532Killer" />

## Retrieve and analyze

The current PN532 CLI does not expose capture download or MFKey64 calculation as interactive commands. Complete retrieval and analysis with supported MTools/Windows software, or a low-level integration using the PN532Killer Sniffer-log commands.

If capture fails, move the original tag slightly across the PN532Killer antenna, keep both close to the reader, and confirm the reader performed MIFARE Classic authentication rather than only reading the UID.
