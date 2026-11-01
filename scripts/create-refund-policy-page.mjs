import { mkdir, readFile, writeFile } from "node:fs/promises";

const index = await readFile(new URL("../dist/index.html", import.meta.url), "utf8");
if (!index.includes("./assets/")) {
	throw new Error("The built index no longer uses relative asset paths; update the refund policy page build step.");
}

const policyPage = index.replaceAll("./assets/", "../assets/");
const policyDirectory = new URL("../dist/refund-policy/", import.meta.url);
await mkdir(policyDirectory, { recursive: true });
await writeFile(new URL("index.html", policyDirectory), policyPage);
