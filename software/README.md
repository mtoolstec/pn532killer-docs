# Software

Start with the PN532 CLI. It uses the same command language with a standard PN532 or PN532Killer and automatically identifies which device is connected. Use the graphical tools only when a workflow is not yet exposed by the CLI.

- [CH343 driver](ch343-driver.md): make the USB serial port available to the operating system.
- [Windows tool](windows-tool.md): graphical connection, transfer, and analysis workflows.
- [PN532 CLI](python-cli.md): primary cross-platform interface for PN532 and PN532Killer; beta builds add firmware upgrade, emulator export, Sniffer analysis, and recovery workflows.
- [libnfc](libnfc.md): standard PN532-compatible UART operations.

Only one program can normally own the serial port at a time. Close other applications before connecting or updating firmware.
