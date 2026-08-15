# MFKey32v2 — without tag

This PN532Killer workflow collects multiple MIFARE Classic authentication records without presenting the original tag.

## Configure with the PN532 CLI

Set the authorized target UID, then enter Sniffer type 0:

<CommandCard title="Connect to PN532Killer" command="hw connect" />

<CommandCard title="Return to Reader mode" command="hw mode r" availability="PN532Killer" />

<CommandCard title="Set the authorized target UID" command="hf sniff setuid -u 11223344" availability="PN532Killer" />

<CommandCard title="Start MFKey32v2-oriented capture" command="hw mode s -t 0" availability="PN532Killer" />

For a special block 0 layout, use `hf sniff setuid --blk0 HEX` instead of `-u`.

Present PN532Killer to the reader and trigger only the permitted authentication attempts. When finished, leave Sniffer mode:

<CommandCard title="Exit Sniffer mode" command="hw mode r" availability="PN532Killer" />

## Retrieve and analyze

The current PN532 CLI does not expose capture download or MFKey32v2 calculation as interactive commands. Retrieve and analyze the records with supported MTools/Windows software, or build a low-level integration around the PN532Killer Sniffer-log protocol.

If analysis fails, collect more distinct permitted attempts, verify the protocol is MIFARE Classic, clear records from previous sessions in the analysis tool, and improve antenna alignment.
