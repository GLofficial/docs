# Mintlify Setup (one-time)

## 1. Install the GitHub App

Go to [Mintlify dashboard > GitHub App](https://dashboard.mintlify.com/settings/organization/github-app).
Install the app and grant access to the `GLofficial/docs` repository.

## 2. Configure Git Settings

Go to [Git Settings](https://dashboard.mintlify.com/settings/deployment/git-settings).
Set **Organization** to `GLofficial`, **Repository** to `docs`, **Branch** to `main`.
Save.

Every push to `main` auto-deploys. No manual step needed.

## Structure

```
docs-repo/
├── docs.json              ← Mintlify config (nav, theme, branding)
├── openapi.json           ← SmartlyQ API OpenAPI 3.1 spec (validated)
├── introduction.mdx       ← Landing page
├── quickstart.mdx         ← Getting started guide
├── authentication.mdx     ← Auth reference
├── guides/                ← Conceptual guides
│   ├── billing-and-credits.mdx
│   ├── rate-limiting.mdx
│   ├── async-jobs.mdx
│   ├── webhooks.mdx
│   └── errors.mdx
├── api-reference/         ← Backup copy of the spec + YAML source
│   ├── smartlyq-api.json
│   └── smartlyq-api.yaml
├── logo/                  ← Light/dark logos
├── favicon.svg
└── .mintignore
```

## Validating locally

```bash
npm i -g mint
mint openapi-check openapi.json
mint dev
```

## Troubleshooting

- **"Failed to fetch OpenAPI file"** — Ensure `docs.json` references `openapi.json` (root-level, JSON format).
- **"Unable to find docs.json"** — Check Git Settings in the dashboard point to the correct repo and branch.
- **Blank pages** — Run `mint openapi-check openapi.json` to find spec validation errors.
