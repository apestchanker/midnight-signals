---
title: "VIA Labs cross-chain messaging goes live on Midnight"
date: 2026-08-26
source: "https://midnight.network/blog"
category: "ecosystem"
summary: >-
  VIA Labs deployed its universal cross-chain messaging protocol on Midnight,
  enabling direct contract-to-contract communication with 130+ networks
  (including Cardano and EVM chains) via cryptographic messages rather than
  wrapped assets.
submittedBy: "apestchanker"
---

This is not a wrapped-asset bridge. Smart contracts can mint, burn, transfer or
communicate through cryptographic cross-chain messages. Per the Midnight
Foundation, the integration connects Midnight with more than 130 public and
private networks, including Cardano and EVM ecosystems.

For privacy applications, the pattern is:

```
Private computation on Midnight
        ↓
ZK proof / verified state
        ↓
Cross-chain message
        ↓
Contract execution on another network
```

A Midnight app can run privacy-sensitive logic and produce proofs while an app
on another chain reacts to the verified state without disclosure of the
underlying private data — positioning Midnight as a privacy/proof layer for
multi-chain applications.
