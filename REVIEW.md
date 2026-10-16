# PayeeShield synthetic-claim correction candidate

Prepared locally on 16 October 2026 on `repair/mission-05-synthetic-claims`, based on fetched `origin/main` **4f88861adf41ec4ead3ae6bad1502333dd405fff** in `Gareth1953/payeeshield`.

Both existing checkouts were inspected first. `payeeshield-clean` retains its original local main at `fe1518400b4bdcd801018e179d73bedc3e462e77`. `payeeshield-final` retains main at `4f88861...` and its pre-existing untracked `agent-trust-gate/` directory untouched. The repair uses a separate worktree inside ATG's ignored `.worktrees` directory; it remains a distinct Git repository.

## Changes

- `index.html`: replaces the opaque bundled browser mock-up and unsupported live/security badges with maintainable HTML/CSS and three predetermined, explicitly fictional scenario illustrations. No score, CoP/sanctions lookup, certification, fraud-protection guarantee, security notification or executable authority is implied. The separate runnable ATG source demo and its fixture/time/volatile-state/same-host limits are explained.
- `Audit.html`: an evaluation enquiry, with no free fraud-audit or unspecified service promise. Correct field labels and consent accompany an explicit warning: submitting the mailto form opens the email application and may send the supplied information. Sending shares data with the recipient/email providers; it does not remain only on the device. Contact: `gareth@agenttrustgate.com`. No email was submitted in verification.
- `thanks.html`: honest static status. No unconditional payment confirmation or activation; URL `token`/`PayerID` values grant no verified transaction status or entitlement. No script reads those parameters. Browser-minted credentials, invented endpoints, fabricated reports and service guarantees are removed.
- `site.css` / `site.js`: local assets, visible keyboard focus, responsive layouts and no external font/CDN/runtime dependency. The only runtime updates fictional explanatory text, with no network, persistence or payment code.
- `.github/workflows/deploy.yml`: retains its existing main-push/manual-dispatch triggers and action versions. Its explicit artifact selection now includes all three corrected pages and both assets, rather than only index. The browser review staged exactly these five files locally; the workflow was not run.

No PayPal URL, recipient, price, verification process, account setting or financial configuration was invented or modified. No live verification evidence was found in the inspected static pages or workflow that would support the removed operational claims.

## Actual checks

Windows Node **24.21.0**: `node --test test/site.test.mjs` **6/6 passed**, zero failed/skipped; JavaScript syntax and Git whitespace checks passed. Tests cover unsupported claims, inert status URLs, mailto disclosure/labels, case-sensitive local links/fragments/assets, runtime boundaries and artifact selection.

Temporary-profile headless Edge **155.0.4283.45**: `index.html`, `Audit.html` and `thanks.html` each passed at **1440, 390 and 320px** against the staged artifact. Native keyboard skip links and scenario selection, local navigation, required enquiry inputs/consent, one H1 and labelled fields were checked. Query strings containing fictional `token` and `PayerID` leave status text unchanged; the status page has no scripts. No page exceptions, external page requests, missing page resources or document/body horizontal overflow were observed. Local link checks passed. Final results and nine screenshots are in `reports/mission-05-claims-review/`; representative desktop index, 390px Audit and 320px status captures were visually inspected. The shared browser harness is in the companion ATG preparation branch, `scripts/review-payeeshield-discovery-windows.mjs`, with `PAYEESHIELD_REVIEW_ROOT` pointing to this worktree. External source-document links returned 200 in the companion link check.

The original standalone browser bundle is no longer used. This is an explanatory static illustration, not a browser port of ATG enforcement. No live bank, ERP, payment, human-authentication, durable-recovery or independent-evidence test was performed. Physical devices, screen readers, real email-client behaviour and the actual Pages deployment were not tested. Main/root Pages and the custom workflow both exist; hosting configuration is unchanged.

## Publication instructions — awaiting Gareth's approval

GitHub reports **legacy Pages from main at repository root**, serving `https://gareth1953.github.io/payeeshield/`. Therefore a change pushed/merged to main can trigger legacy Pages publication. The existing custom `Deploy` workflow also runs on **push to main** or **workflow_dispatch**, uploading the explicitly selected artifact. No trigger is added for the repair branch or pull requests; no hosting-mode switch was made.

Gareth should approve the exact corrected pages and intended deployment path before any main update or manual dispatch. A later separately authorised branch push and PR can carry this candidate; merging main is a publication step and needs approval. After an approved publication, verify all three pages and asset URLs on the chosen Pages output, including a status URL with unverified fixture query parameters. Do not use the status page as a payment receipt.

No push, PR creation, merge, deployment, publication, tag, release, authentication restart or existing-state change was performed. ATG archives and existing recordings are outside this repair and remain unchanged.
