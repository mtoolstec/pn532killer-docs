# Safe and authorized use

PN532Killer is intended for development, interoperability work, education, research, and security testing performed with permission.

## Authorization

Before reading, writing, emulating, capturing, or analyzing a credential:

- own the tag and system, or obtain explicit authorization from the owner;
- document the systems, protocols, dates, and actions in scope;
- avoid production systems unless the engagement permits them;
- follow applicable laws, contracts, workplace policies, and disclosure rules.

## Protect captured data

Tag dumps and Sniffer records may contain identifiers, access credentials, transaction data, or personal information.

- Encrypt sensitive files at rest and in transit.
- Do not upload real credentials to public issues or repositories.
- Restrict access to the authorized team.
- Delete data when the project and retention period end.

## Prevent damage

- Read and back up a tag before writing.
- Do not overwrite manufacturer blocks, access conditions, keys, lock bits, or counters unless the test plan specifically requires it.
- Use a stable power source during firmware and slot updates.
- Stop if the hardware is damaged or overheats.

PN532Killer documentation describes technical capability; it does not grant permission to access a system.
