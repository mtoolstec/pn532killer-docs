# Static Nested

Static Nested support was introduced in the `20241123` firmware line. It applies only to compatible MIFARE Classic behavior and requires an authorized tag plus a known key for the configured source block.

## Before starting

- Update to firmware that includes Static Nested support.
- Back up the tag.
- Confirm the known key, known block, key type, target block, and target key type.
- Install a packaged PN532 CLI `beta.*` release, or build the `staticnested` helper with `./script/build_helpers.sh` in a `dev` checkout.

## Workflow

1. Connect PN532Killer and return it to Reader mode.
2. Place the authorized tag steadily over the antenna.
3. Supply the verified source and target parameters:

```text
hw mode r
hf mf staticnested \
  --known-key FFFFFFFFFFFF \
  --known-block 4 \
  --known-key-type A \
  --target-block 8 \
  --target-key-type A \
  --show-raw
```

For recovery across a sector range, use `hf mf nestedattack`; see [MIFARE Classic recovery](../guides/mifare-classic-recovery.md). The current `hardnested` entry routes to that same Static Nested workflow and is not a native hardnested solver.

Static Nested is not a universal recovery method. Non-static nonce behavior, unsupported access conditions, poor RF coupling, or incorrect known-key parameters will prevent a useful result.
