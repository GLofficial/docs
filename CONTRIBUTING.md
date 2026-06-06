# Contribute to SmartlyQ Documentation

Thank you for your interest in improving the SmartlyQ developer docs!

## How to contribute

1. Navigate to the page you want to edit on [docs.smartlyq.com](https://docs.smartlyq.com) or in this repository.
2. On GitHub, click **Edit this file** (pencil icon), or fork and clone the repo and create a branch.
3. Make your changes to the relevant `.mdx` page (or `openapi.json` for the API reference).
4. Open a pull request. A preview is generated automatically — no local setup required.

## ⚠️ This is a PUBLIC repository — never commit secrets

Everything here is world-readable, and the OpenAPI spec also feeds **auto-generated, public SDKs**. Before every commit, make sure you are **not** adding:

- **Real API keys** — `sqk_live_…` / `sqk_test_…`. In docs, always use a placeholder like `sqk_live_xxxxxxxxxxxx` or `YOUR_API_KEY`.
- **Any other credential** — passwords, OAuth client secrets, webhook signing secrets, AWS/GCP keys, private keys (`-----BEGIN … PRIVATE KEY-----`), GitHub/Slack/Stripe tokens.
- **Internal infrastructure** — non-public hostnames, server IPs, database/staging/admin URLs. Public docs reference only the public `*.smartlyq.com` surface.
- **Internal-only details** — admin/whitelabel features, database schemas, internal service names, pricing internals (markup/margin/cost).
- **Customer or PII data** — real emails, phone numbers, account IDs from production.

Examples must use obvious placeholders. When in doubt, leave it out.

### Automated protection (enable once)

This repo ships a secret-scanning gate. Turn on the local pre-commit hook after cloning:

```bash
git config core.hooksPath .githooks
```

It blocks a commit if it spots a secret (uses [gitleaks](https://github.com/gitleaks/gitleaks) when installed, a built-in grep otherwise). The same scan runs in CI on every push/PR via `.github/workflows/secret-scan.yml`, and we also enable **GitHub Secret Scanning + Push Protection** on the repo as a server-side backstop.

If a secret ever does land in a commit: rotate it immediately in the [Developer Dashboard](https://app.smartlyq.com/my/developer), then ask a maintainer to scrub it from history.

## Writing guidelines

- **Use active voice**: "Run the command" not "The command should be run"
- **Address the reader directly**: use "you", not "the user"
- **Keep sentences concise**: one idea per sentence
- **Lead with the goal**: start instructions with what the reader wants to accomplish
- **Use consistent terminology**: don't alternate between synonyms
- **Include examples**: show cURL, Node.js, and Python for API calls

## Questions

Reach out at [support@smartlyq.com](mailto:support@smartlyq.com) or via the
[Developer Dashboard](https://app.smartlyq.com/my/developer).
