# Mintlify one-time setup (so GitHub pushes auto-deploy)

Mintlify only picks up from GitHub after you connect the repo in the dashboard. Do this once:

1. **Install the GitHub App**  
   Go to [Mintlify dashboard → GitHub App](https://dashboard.mintlify.com/settings/organization/github-app).  
   Install the app and grant access to this repository (`GLofficial/docs`).

2. **Configure docs source**  
   Go to [Git Settings](https://dashboard.mintlify.com/settings/deployment/git-settings).  
   Set **Organization**, **Repository** (`docs`), and **Branch** (`main`) to this repo.  
   Save.

After that, every push to `main` will trigger a new deployment. No manual deploy needed per push.

If deployments don't run: re-check the app is installed on this repo and Git Settings point to `GLofficial/docs`, branch `main`.

---

## "Failed to fetch OpenAPI file for anchor or tab"

If the build shows "Fetched 0 OpenApi file(s)" and then fails:

1. **Use the JSON spec** — In `docs.json`, the SmartlyQ API tab should reference `api-reference/smartlyq-api.json` (not `.yaml`).
2. **Validate locally:** `npx mint openapi-check api-reference/smartlyq-api.json` then `mint dev`.
3. **Path** must be relative to repo root, no leading slash; file must exist at that path.
4. See [OpenAPI setup](https://www.mintlify.com/docs/api-playground/openapi-setup) and [Troubleshooting](https://mintlify.com/docs/api-playground/troubleshooting).
