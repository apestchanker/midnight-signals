---
title: "DUST Sponsorship: decoupling transaction authorization from gas"
date: 2026-08-27
source: "https://docs.midnight.network/learn/understanding-dust"
category: "protocol"
summary: >-
  A Midnight DApp can separate the user who authorizes a transaction from the
  entity that provides the DUST to execute it, enabling a Web2-style
  "open → authenticate → interact" onboarding with no token acquisition.
submittedBy: "apestchanker"
---

Midnight already separates the capital asset (NIGHT) from the execution resource
(DUST). Sponsorship goes further: the transaction initiator no longer has to be
the one paying for execution.

```
User creates/authorizes transaction → Sponsor provides DUST → Transaction executes
```

A developer, company or protocol can hold NIGHT, generate DUST, and subsidize
its users' interactions — turning the usual
"install wallet → obtain token → fund wallet → pay gas → interact" flow into
"open DApp → authenticate → interact". Notable for mainstream-facing and
enterprise applications.
