# MFKey32v2 — without tag

This PN532Killer workflow collects multiple MIFARE Classic authentication records without presenting the original tag.

## Configure with the PN532 CLI

Set the authorized target UID, then enter Sniffer type 0:

<CommandCard title="Connect to PN532Killer" command="hw connect" />

<CommandCard title="Return to Reader mode" command="hw mode r" availability="PN532Killer" />

<CommandCard title="Set the authorized target UID" command="hf mf sniffer setuid -u 11223344" availability="PN532Killer · beta" />

<CommandCard title="Start MFKey32v2-oriented capture" command="hw mode s -t 0" availability="PN532Killer" />

For a special block 0 layout, use `hf mf sniffer setuid --blk0 HEX` instead of `-u`.

Present PN532Killer to the reader and trigger only the permitted authentication attempts. When finished, leave Sniffer mode:

<CommandCard title="Exit Sniffer mode" command="hw mode r" availability="PN532Killer" />

## Retrieve and analyze

Run the beta command after returning to Reader mode:

<CommandCard title="Analyze MFKey32v2 records" command="hf mf mfkey32v2 --show-raw" availability="PN532Killer · beta" description="Downloads the Sniffer records and runs the bundled mfkey32v2 helper." />

Packaged beta releases include the helper. For a source checkout, run `./script/build_helpers.sh` before analysis.

If analysis fails, collect more distinct permitted attempts, verify that the protocol is MIFARE Classic, check that the native helper exists, separate records from previous sessions, and improve antenna alignment. The current interactive tree does not expose a supported capture-clear command.
