import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const componentsRoot = path.resolve(__dirname, "..");
const distRoot = path.resolve(componentsRoot, "dist");
const ROOT_STYLESHEETS = ["stylesheets.css"];

const STYLE_DIRECTORIES = ["elements", "foundation"];

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath)));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".css")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function copyConsumerStyles() {
  const copied = [];

  for (const fileName of ROOT_STYLESHEETS) {
    const sourceFile = path.resolve(componentsRoot, fileName);
    const targetFile = path.resolve(distRoot, fileName);
    await mkdir(path.dirname(targetFile), { recursive: true });
    await cp(sourceFile, targetFile);
    copied.push(fileName);
  }

  for (const relativeDir of STYLE_DIRECTORIES) {
    const sourceDir = path.resolve(componentsRoot, relativeDir);
    const cssFiles = await walk(sourceDir);

    for (const sourceFile of cssFiles) {
      const relativeFile = path.relative(componentsRoot, sourceFile);
      const targetFile = path.resolve(distRoot, relativeFile);
      await mkdir(path.dirname(targetFile), { recursive: true });
      await cp(sourceFile, targetFile);
      copied.push(relativeFile);
    }
  }

  return copied;
}

const copied = await copyConsumerStyles();

if (copied.length === 0) {
  console.log("No consumer stylesheets found to copy.");
} else {
  console.log(`Copied ${copied.length} consumer stylesheet(s) to dist:`);
  for (const file of copied) {
    console.log(`- ${file}`);
  }
}
