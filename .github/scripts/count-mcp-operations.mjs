// Prints how many API operations the MCP server indexes from its bundled
// spec/openapi.json, using the server's own loader (built dist/registry.js).
// Usage: node count-mcp-operations.mjs <path to a built smartlyq-mcp checkout>
// Prints 0 when the spec is missing or does not parse.
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

const dir = resolve(process.argv[2] ?? ".");
process.chdir(dir); // the loader reads spec/ from the working directory
const { loadRegistry } = await import(pathToFileURL(join(dir, "dist", "registry.js")).href);
console.log(await loadRegistry());
