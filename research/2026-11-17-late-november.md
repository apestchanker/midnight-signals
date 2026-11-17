# Late November — editorial evidence register

Research cutoff: 2026-11-17. Edition: `src/content/editions/2026-11-signals-2.md`.
English follows the existing publication. Publication/deployment is a separate step.

## Source and claim map

| Topic | Primary evidence | Editorial treatment |
| --- | --- | --- |
| Mainnet release | https://midnight.network/blog/ledger-9-upgrade-on-mainnet | Dated release announcement; distinguish cryptographic primitives from finished integrations. |
| Migration and patch | https://docs.midnight.network/relnotes/ledger-9 | Prefer current dated guide over stale release-page deployment instructions. |
| Component versions | https://docs.midnight.network/relnotes/support-matrix | Pin this edition's cutoff, not evergreen recommendations. |
| Application migration | https://docs.midnight.network/relnotes/midnight-js/midnight-js-5-0-0 | Application API changes are separate from contract recompilation. |
| Compiler migration | https://docs.midnight.network/relnotes/compact/toolchain-0.36.0 | Verifier-key changes need an explicit migration path. |
| Roadmap comparison | https://midnight.network/roadmap | Mark delivery only where release evidence establishes it. |
| Network counts | https://midnight.subscan.io/ | Search-indexed primary page, crawl marked “today”; retrieved Nov 17. Direct access was restricted. No exact observation time or API capture available. |
| Adoption announcement | https://midnight.network/blog/monument-bank-launches-the-uk-s-first-interest-bearing-tokenized-deposits-on-midnight | Phase size is not observed TVL. |
| Google publication | https://cloud.google.com/customers/midnightfoundation | Customer case study, no visible publication date; results attributed to participants. |
| TEE architecture | https://docs.cloud.google.com/confidential-computing/confidential-space/docs/confidential-space-overview | Conceptual diagram, not an undocumented implementation trace. |
| Passport SDK | https://github.com/midnightntwrk/midnight-passport-sdk | Upstream repository; do not substitute a separately released fork. |
| SDK scope | https://github.com/midnightntwrk/midnight-passport-sdk/blob/main/docs/sdk-requirements.md | Requirements are not shipped behavior. |
| Product plan | https://midnightntwrk.github.io/passport/site/plan.html | Page itself distinguishes targets and implementation evidence. |
| Demo | https://github.com/midnightntwrk/passport-demo | Experiment, not public production readiness. |
| Demo network gates | https://github.com/midnightntwrk/passport-demo/blob/main/examples/passport-demo/src/lib/networks.ts | Read implementation rather than older network statements in prose. |
| Prototype scope | https://github.com/midnightntwrk/passport-demo/blob/main/WHAT-THIS-IS.md | Experimental/unaudited status. |

## Repository evidence captured during research

GitHub file blob hashes (not repository commit IDs):

- SDK README: `aaa0b14647bc98f08ae9a8bac96d2a933e9faf70`.
- Demo README: `fe369e1395a4df9a5734760772670cd41fe27a0d`.
- Demo network configuration: `44f11924b075862ee155cbb729562b9a40898635`.
- Demo prototype description: `81a19cb1b6906bc9432e2bdc8b29420f731473a9`.

## Unresolved measurements / exclusions

- No defensible active-dApp or unique-user total. Contract counts do not supply either.
- No causal growth claim comparing earlier rounded research with this snapshot.
- No independently measured proving-latency improvement in the Google case study.
- No confirmed Passport public Mainnet launch date or eligible consumer cohort.
- No evidence establishing a deployed Passport-to-Google attested-prover integration.

## Artwork

The cover uses `scripts/make-cover.mjs`, preserving the existing portrait and logo.
Three original vector diagrams are embedded directly in the edition so they work
with either root or subpath hosting. Exportable SVG and PNG plates are under
`public/infographics/2026-11-2/`. Their descriptions and surrounding prose carry
the release-stage boundaries; they are explanatory artwork, not screenshots.
