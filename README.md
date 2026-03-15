# SmartlyQ API Documentation

Official API documentation for [SmartlyQ](https://smartlyq.com) — built with [Mintlify](https://mintlify.com).

## Development

Install the [Mintlify CLI](https://www.npmjs.com/package/mint) to preview locally:

```bash
npm i -g mint
```

Run at the root of the docs directory:

```bash
mint dev
```

View your local preview at `http://localhost:3000`.

## Publishing

Changes are deployed automatically on push to `main` via the Mintlify GitHub app.

## Troubleshooting

- Dev environment not running: `mint update`
- Page loads as 404: Ensure you're in a folder with a valid `docs.json`
- OpenAPI issues: `mint openapi-check openapi.json`

## Resources

- [Mintlify docs](https://mintlify.com/docs)
- [SmartlyQ Developer Dashboard](https://smartlyq.com/my/developer)
- [Support](mailto:support@smartlyq.com)
