# Troubleshooting

Start with the connection path and change one variable at a time.

## First checks

1. Use a known USB data cable and connect directly to the computer.
2. Close every other program that could own the serial port.
3. Confirm the CH343 port appears in the operating system.
4. Start the PN532 CLI, run `debug on`, and connect again.
5. Return PN532Killer to Reader mode with `hw mode r` before testing a tag command.

## Choose the symptom

- [Device not detected](device-not-detected.md)
- [Device Unauthorized](device-unauthorized.md)
- [Recover after a failed update](firmware-recovery.md)

When reporting a problem, include the operating system, CLI revision, firmware version, connection transport, exact command, and debug output with credentials removed.
