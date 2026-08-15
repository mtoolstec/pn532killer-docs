# Static Nested

Static Nested support was introduced in the `20241123` firmware line. It applies only to compatible MIFARE Classic behavior and requires an authorized tag plus a known key for the configured source block.

## Before starting

- Update to firmware that includes Static Nested support.
- Back up the tag.
- Confirm the known key, known block, key type, target block, and target key type.
- Use a supported version of MTools or another host tool that exposes Static Nested.

## Workflow

1. Connect PN532Killer in Reader/PN532 mode.
2. Select the Static Nested function in the host application.
3. Enter the known authentication parameters and target.
4. Keep the authorized tag stable on the antenna while the required nonces are collected.
5. Save the result and perform recovery in the supported host tool.

::: warning Current CLI boundary
Static Nested is not registered in the current PN532 CLI interactive command tree. Use a supported graphical workflow unless you are developing directly against the low-level protocol.
:::

Static Nested is not a universal recovery method. Non-static nonce behavior, unsupported access conditions, poor RF coupling, or incorrect known-key parameters will prevent a useful result.
