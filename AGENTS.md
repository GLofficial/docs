# SmartlyQ Documentation — Project Instructions

## About this project

- SmartlyQ API documentation built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Run `mint dev` to preview locally
- Run `mint broken-links` to check links

## Terminology

- Use "API key" not "token" or "secret"
- Use "credits" not "tokens" or "units" for billing
- Use "Developer Dashboard" not "admin panel" or "console"
- Use "endpoint" not "route" or "API route"

## Style preferences

- Use active voice and second person ("you")
- Keep sentences concise — one idea per sentence
- Use sentence case for headings
- Bold for UI elements: Click **Settings**
- Code formatting for file names, commands, paths, and code references
- Always show cURL + Node.js + Python examples for API calls

## Content boundaries

- Document only the public developer API (`api.smartlyq.com/v1`)
- Do not document internal admin features or whitelabel functionality
- Do not expose internal architecture details (database schemas, service names)
